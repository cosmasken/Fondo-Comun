
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Wallet, 
  Copy, 
  ExternalLink, 
  Plus, 
  Minus,
  Activity,
  Shield,
  Zap,
  AlertTriangle
} from "lucide-react";
import ProfileDropdown from "@/components/ProfileDropdown";
import { useToast } from "@/hooks/use-toast";

const WalletPage = () => {
  const [walletAddress] = useState("0x742d35Cc6Ba86c27F4C33E20C2C4e6aC7c5d9b8");
  const [balance] = useState({ eth: 2.45, usd: 3920.50 });
  const { toast } = useToast();

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address copied!",
      description: "Wallet address has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen trust-gradient-subtle">
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
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Wallet Management</h1>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Activity className="w-3 h-3 mr-1" />
                    Manage your digital assets
                  </p>
                </div>
              </div>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Overview */}
            <Card className="trust-card-featured">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Wallet className="mr-3 w-6 h-6 text-accent" />
                    Primary Wallet
                  </span>
                  <Badge className="trust-badge">
                    <Shield className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
                  <div className="text-center mb-4">
                    <p className="text-4xl font-bold text-primary mb-2">{balance.eth} ETH</p>
                    <p className="text-xl text-muted-foreground">${balance.usd.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                    <span className="font-mono text-sm">{walletAddress}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={copyAddress}>
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="trust-button h-12">
                    <Plus className="w-5 h-5 mr-2" />
                    Add Funds
                  </Button>
                  <Button variant="outline" className="trust-button-outline h-12">
                    <Minus className="w-5 h-5 mr-2" />
                    Withdraw
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="trust-card">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: 'Deposit', amount: '+1.2 ETH', time: '2 hours ago', status: 'completed' },
                    { type: 'Loan Repayment', amount: '-0.056 ETH', time: '1 day ago', status: 'completed' },
                    { type: 'Borrow', amount: '+0.05 ETH', time: '3 days ago', status: 'completed' },
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border/30 hover:bg-muted/20 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{tx.amount}</p>
                        <Badge variant="secondary">{tx.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full trust-button">Connect New Wallet</Button>
                <Button variant="outline" className="w-full trust-button-outline">Export Private Key</Button>
                <Button variant="outline" className="w-full trust-button-outline">Backup Wallet</Button>
              </CardContent>
            </Card>

            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Security Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>• Never share your private keys</p>
                <p>• Always verify transaction details</p>
                <p>• Use hardware wallets for large amounts</p>
                <p>• Keep your wallet software updated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
