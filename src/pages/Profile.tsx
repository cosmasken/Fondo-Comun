
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Wallet, 
  History, 
  Settings,
  ArrowLeft,
  Shield,
  Clock,
  TrendingUp,
  Activity,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Transaction {
  id: string;
  type: 'deposit' | 'borrow' | 'repayment';
  amount: number;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

const Profile = () => {
  const [userAddress] = useState("0x742d35Cc6Ba86c27F4C33E20C2C4e6aC7c5d9b8");
  const [memberSince] = useState(new Date('2024-01-15'));
  const [totalDeposited] = useState(3.45);
  const [totalBorrowed] = useState(0.15);
  const [reputationScore] = useState(850);
  const [notifications, setNotifications] = useState(true);
  
  const { toast } = useToast();

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "deposit",
      amount: 1.2,
      date: new Date('2024-07-05'),
      status: "completed"
    },
    {
      id: "2", 
      type: "borrow",
      amount: 0.05,
      date: new Date('2024-07-04'),
      status: "completed"
    },
    {
      id: "3",
      type: "repayment",
      amount: 0.056,
      date: new Date('2024-07-03'),
      status: "completed"
    },
    {
      id: "4",
      type: "deposit",
      amount: 0.8,
      date: new Date('2024-07-01'),
      status: "completed"
    }
  ]);

  const handleSaveSettings = () => {
    toast({
      title: "Settings Updated! ✨",
      description: "Your preferences have been saved successfully",
    });
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit': return '📈';
      case 'borrow': return '💰';
      case 'repayment': return '✅';
      default: return '💱';
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'deposit': return 'text-green-600';
      case 'borrow': return 'text-blue-600';
      case 'repayment': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      failed: 'bg-red-100 text-red-800 border-red-200'
    };
    return variants[status as keyof typeof variants] || variants.completed;
  };

  return (
    <div className="min-h-screen trust-gradient-subtle">
      {/* Enhanced Header */}
      <header className="trust-header">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm" className="trust-button-outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 trust-gradient rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">User Profile</h1>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Activity className="w-3 h-3 mr-1" />
                    Account Settings & History
                  </p>
                </div>
              </div>
            </div>
            <Badge className="trust-badge">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified User
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Overview */}
            <Card className="trust-card-featured">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wallet className="mr-3 w-6 h-6 text-accent" />
                  Account Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-muted-foreground">Wallet Address</label>
                    <div className="p-4 bg-muted/50 rounded-xl font-mono text-sm border border-border/50">
                      {userAddress}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-muted-foreground">Member Since</label>
                    <div className="p-4 bg-muted/50 rounded-xl text-sm border border-border/50">
                      {memberSince.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200/50">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-green-700 mb-1">{totalDeposited.toFixed(3)}</p>
                    <p className="text-sm text-green-600 font-medium">Total Deposited (ETH)</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200/50">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-blue-700 mb-1">{totalBorrowed.toFixed(3)}</p>
                    <p className="text-sm text-blue-600 font-medium">Total Borrowed (ETH)</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200/50">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-3xl font-bold text-purple-700 mb-1">{reputationScore}</p>
                    <p className="text-sm text-purple-600 font-medium">Reputation Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <History className="mr-3 w-6 h-6 text-accent" />
                  Transaction History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl border border-border/30 hover:shadow-md transition-all">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getTransactionIcon(tx.type)}</div>
                        <div>
                          <p className="font-semibold capitalize text-foreground">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {tx.date.toLocaleDateString()} • {tx.date.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-lg ${getTransactionColor(tx.type)}`}>
                          {tx.type === 'deposit' ? '+' : '-'}{tx.amount.toFixed(3)} ETH
                        </p>
                        <Badge className={getStatusBadge(tx.status)}>
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            {/* Account Settings */}
            <Card className="trust-card-featured">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Settings className="mr-2 w-5 h-5 text-accent" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Display Name</label>
                  <Input
                    placeholder="Enter your display name"
                    className="trust-input"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Email (Optional)</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="trust-input"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <p className="font-semibold">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Loan alerts & updates</p>
                  </div>
                  <Button
                    variant={notifications ? "default" : "outline"}
                    size="sm"
                    onClick={() => setNotifications(!notifications)}
                    className={notifications ? "trust-button" : "trust-button-outline"}
                  >
                    {notifications ? "On" : "Off"}
                  </Button>
                </div>

                <Button onClick={handleSaveSettings} className="w-full trust-button">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Reputation Score Details */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Reputation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 border border-green-200/50">
                    <span className="text-sm font-medium text-green-800">On-time Repayments</span>
                    <span className="font-bold text-green-700">100%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 border border-blue-200/50">
                    <span className="text-sm font-medium text-blue-800">Loans Completed</span>
                    <span className="font-bold text-blue-700">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-purple-50 border border-purple-200/50">
                    <span className="text-sm font-medium text-purple-800">Pool Contributions</span>
                    <span className="font-bold text-purple-700">{totalDeposited.toFixed(3)} ETH</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-orange-50 border border-orange-200/50">
                    <span className="text-sm font-medium text-orange-800">Account Age</span>
                    <span className="font-bold text-orange-700">6 months</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{reputationScore}</p>
                  <p className="text-sm text-muted-foreground mb-3">Excellent Standing</p>
                  <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Trusted Borrower
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
