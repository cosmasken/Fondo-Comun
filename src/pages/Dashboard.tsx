import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowUpRight, 
  ArrowDownLeft,
  Shield,
  Zap,
  User,
  Activity,
  PiggyBank,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import ProfileDropdown from "@/components/ProfileDropdown";

interface LoanDetails {
  amount: number;
  startDate: Date;
  endDate: Date;
  repaymentAmount: number;
  daysLeft: number;
  progress: number;
}

const Dashboard = () => {
  // Pool and user state
  const [poolBalance, setPoolBalance] = useState(12.5);
  const [userBalance, setUserBalance] = useState(2.3);
  const [userDeposited, setUserDeposited] = useState(1.2);
  const [userLoan, setUserLoan] = useState<LoanDetails | null>(null);
  
  // Form state
  const [lendAmount, setLendAmount] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { toast } = useToast();

  // Mock auto-repayment check (simulates ASC background process)
  useEffect(() => {
    const checkRepayment = () => {
      if (userLoan && userLoan.daysLeft <= 0) {
        // Simulate auto-repayment
        if (userBalance >= userLoan.repaymentAmount) {
          setUserBalance(prev => prev - userLoan.repaymentAmount);
          setPoolBalance(prev => prev + userLoan.repaymentAmount);
          setUserLoan(null);
          toast({
            title: "Loan Repaid Successfully!",
            description: "ASC automatically processed your repayment",
          });
        } else {
          toast({
            title: "Repayment Failed",
            description: "Insufficient funds for auto-repayment",
            variant: "destructive",
          });
        }
      }
    };

    const interval = setInterval(checkRepayment, 10000); // Check every 10 seconds for demo
    return () => clearInterval(interval);
  }, [userLoan, userBalance, toast]);

  // Update loan progress and days left
  useEffect(() => {
    if (userLoan) {
      const now = new Date();
      const totalDuration = userLoan.endDate.getTime() - userLoan.startDate.getTime();
      const elapsed = now.getTime() - userLoan.startDate.getTime();
      const progress = Math.min((elapsed / totalDuration) * 100, 100);
      const daysLeft = Math.max(0, Math.ceil((userLoan.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
      
      setUserLoan(prev => prev ? { ...prev, progress, daysLeft } : null);
    }
  }, [userLoan]);

  const handleLend = async () => {
    const amount = parseFloat(lendAmount);
    if (amount > 0 && amount <= userBalance) {
      setIsProcessing(true);
      
      // Simulate blockchain transaction delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update balances (mock ASC execution)
      setUserBalance(prev => prev - amount);
      setUserDeposited(prev => prev + amount);
      setPoolBalance(prev => prev + amount);
      
      toast({
        title: "Deposit Successful! 🎉",
        description: `You've deposited ${amount} ETH to the lending pool`,
      });
      
      setLendAmount("");
      setIsProcessing(false);
    } else {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount within your balance",
        variant: "destructive",
      });
    }
  };

  const handleBorrow = async () => {
    const amount = parseFloat(borrowAmount);
    if (amount > 0 && amount <= Math.min(0.1, poolBalance) && !userLoan) {
      setIsProcessing(true);
      
      // Simulate blockchain transaction delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create loan (mock ASC execution)
      const startDate = new Date();
      const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
      const repaymentAmount = amount * 1.12; // 12% APR for 7 days
      
      const newLoan: LoanDetails = {
        amount,
        startDate,
        endDate,
        repaymentAmount,
        daysLeft: 7,
        progress: 0
      };
      
      // Update balances
      setUserBalance(prev => prev + amount);
      setPoolBalance(prev => prev - amount);
      setUserLoan(newLoan);
      
      toast({
        title: "Loan Approved! 🚀",
        description: `You've borrowed ${amount} ETH. Auto-repayment scheduled in 7 days`,
      });
      
      setBorrowAmount("");
      setIsProcessing(false);
    } else {
      let errorMsg = "Invalid loan request";
      if (userLoan) errorMsg = "You already have an active loan";
      else if (amount > poolBalance) errorMsg = "Insufficient pool funds";
      else if (amount > 0.1) errorMsg = "Maximum loan amount is 0.1 ETH";
      
      toast({
        title: "Loan denied",
        description: errorMsg,
        variant: "destructive",
      });
    }
  };

  const poolUtilization = poolBalance > 0 ? Math.round(((12.5 - poolBalance) / 12.5) * 100) : 0;

  return (
    <div className="min-h-screen trust-gradient-subtle">
      {/* Enhanced Header with Profile Dropdown */}
      <header className="trust-header sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 trust-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Micro-Loan Pool</h1>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Activity className="w-3 h-3 mr-1" />
                  Powered by Massa Network
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="trust-badge hidden sm:flex">
                <TrendingUp className="w-3 h-3 mr-1" />
                Pool Health: Excellent
              </Badge>
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="trust-stat-card group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground flex items-center">
                    <PiggyBank className="w-4 h-4 mr-1" />
                    Pool Balance
                  </p>
                  <p className="text-3xl font-bold text-primary">{poolBalance.toFixed(3)}</p>
                  <p className="text-xs text-muted-foreground">ETH Available</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="trust-stat-card group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground flex items-center">
                    <Wallet className="w-4 h-4 mr-1" />
                    Your Balance
                  </p>
                  <p className="text-3xl font-bold text-primary">{userBalance.toFixed(3)}</p>
                  <p className="text-xs text-green-600">+2.1% this week</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wallet className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="trust-stat-card group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    Active Loan
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {userLoan ? `${userLoan.amount.toFixed(3)}` : '0.000'}
                  </p>
                  <p className="text-xs text-muted-foreground">ETH Borrowed</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="trust-stat-card group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground flex items-center">
                    <Activity className="w-4 h-4 mr-1" />
                    Pool Health
                  </p>
                  <p className="text-3xl font-bold text-primary">{poolUtilization}%</p>
                  <p className="text-xs text-muted-foreground">Utilization Rate</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Lending & Borrowing */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="lend" className="w-full">
              <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 rounded-xl">
                <TabsTrigger value="lend" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Lend Funds
                </TabsTrigger>
                <TabsTrigger value="borrow" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <ArrowDownLeft className="w-4 h-4 mr-2" />
                  Borrow Funds
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="lend" className="space-y-6 mt-6">
                <Card className="trust-card-featured">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                      Lend to Pool
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Deposit funds to earn competitive interest from borrowers
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Amount (ETH)</label>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="0.000"
                          value={lendAmount}
                          onChange={(e) => setLendAmount(e.target.value)}
                          className="trust-input text-lg h-14 pr-20"
                          max={userBalance}
                          step="0.001"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2 text-xs"
                          onClick={() => setLendAmount(userBalance.toString())}
                        >
                          MAX
                        </Button>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Available:</span>
                        <span className="font-medium">{userBalance.toFixed(3)} ETH</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-green-800">Current APY</span>
                        </div>
                        <span className="text-2xl font-bold text-green-700">8.5%</span>
                      </div>
                      <p className="text-sm text-green-600 mt-1">Earn competitive returns on your deposits</p>
                    </div>
                    
                    <Button 
                      onClick={handleLend} 
                      className="w-full trust-button h-12 text-base font-semibold"
                      disabled={isProcessing || !lendAmount || parseFloat(lendAmount) <= 0}
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        "Deposit Funds"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="borrow" className="space-y-6 mt-6">
                <Card className="trust-card-featured">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <ArrowDownLeft className="w-4 h-4 text-white" />
                      </div>
                      Borrow Funds
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Request a micro-loan with automated repayment via ASC
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-foreground">Amount (ETH)</label>
                      <Input
                        type="number"
                        placeholder="0.000"
                        value={borrowAmount}
                        onChange={(e) => setBorrowAmount(e.target.value)}
                        className="trust-input text-lg h-14"
                        max="0.1"
                        step="0.001"
                        disabled={!!userLoan}
                      />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {userLoan ? "Repay current loan first" : "Maximum for new borrowers:"}
                        </span>
                        <span className="font-medium">0.1 ETH</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-xl border border-blue-200/50">
                        <div className="text-sm text-muted-foreground">Interest Rate</div>
                        <div className="text-lg font-bold text-blue-700">12% APR</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-xl border border-orange-200/50">
                        <div className="text-sm text-muted-foreground">Repayment</div>
                        <div className="text-lg font-bold text-orange-700">7 days</div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleBorrow} 
                      className="w-full trust-button h-12 text-base font-semibold"
                      disabled={isProcessing || !borrowAmount || parseFloat(borrowAmount) <= 0 || !!userLoan}
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        "Request Loan"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Loan Repayment Status */}
            {userLoan && (
              <Card className="trust-card-featured">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Active Loan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Repayment Progress</span>
                      <span className="font-medium">{7 - userLoan.daysLeft}/7 days</span>
                    </div>
                    <Progress value={userLoan.progress} className="h-3 bg-muted" />
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Principal</span>
                      <span className="font-medium">{userLoan.amount.toFixed(3)} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest</span>
                      <span className="font-medium">{(userLoan.repaymentAmount - userLoan.amount).toFixed(3)} ETH</span>
                    </div>
                    <div className="flex justify-between font-semibold text-base border-t pt-2">
                      <span>Total Due</span>
                      <span className="text-primary">{userLoan.repaymentAmount.toFixed(3)} ETH</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Days Remaining</span>
                      <Badge variant={userLoan.daysLeft <= 2 ? "destructive" : "secondary"}>
                        {userLoan.daysLeft} days
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Your Deposits */}
            {userDeposited > 0 && (
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-accent" />
                    Your Deposits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deposited Amount</span>
                      <span className="font-semibold">{userDeposited.toFixed(3)} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current APY</span>
                      <span className="text-green-600 font-semibold">8.5%</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Est. Annual Earnings</span>
                      <span className="text-primary">{(userDeposited * 0.085).toFixed(3)} ETH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Enhanced Features Section */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="text-lg">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Trustless Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Autonomous Smart Contracts handle everything automatically
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <Zap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Instant Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        Fast loan approval and immediate disbursement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200/50">
                    <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Accessible to All</h4>
                      <p className="text-sm text-muted-foreground">
                        No credit checks or high collateral requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
