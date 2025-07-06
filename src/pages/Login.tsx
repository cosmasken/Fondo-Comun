import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Wallet, Shield, Users, Zap, ArrowRight, CheckCircle, TrendingUp, Github, Mail, Chrome } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: isLogin ? "Welcome back!" : "Account created successfully!",
        description: "Redirecting to your dashboard...",
      });
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to continue",
        variant: "destructive",
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `Connecting with ${provider}...`,
      description: "Redirecting to secure authentication",
    });
    // Simulate social login
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleWalletConnect = (wallet: string) => {
    toast({
      title: `Connecting ${wallet} wallet...`,
      description: "Please approve the connection in your wallet",
    });
    // Simulate wallet connection
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const features = [
    {
      icon: Shield,
      title: "Trustless & Secure",
      description: "Smart contracts handle everything automatically - no intermediaries needed"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get approved and receive funds in seconds, not days"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for everyone - especially the underserved"
    },
    {
      icon: TrendingUp,
      title: "Competitive Returns",
      description: "Earn up to 8.5% APY by lending to our micro-loan pool"
    }
  ];

  const stats = [
    { label: "Total Loans Funded", value: "2,847", prefix: "" },
    { label: "Success Rate", value: "98.5", prefix: "", suffix: "%" },
    { label: "Average Loan Size", value: "0.05", prefix: "", suffix: " ETH" },
    { label: "Active Users", value: "1.2k", prefix: "", suffix: "+" }
  ];

  return (
    <div className="min-h-screen trust-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 trust-gradient opacity-10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 trust-gradient rounded-2xl flex items-center justify-center shadow-lg">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-primary">Micro-Loan Pool</h1>
                    <p className="text-muted-foreground">Powered by Massa Network</p>
                  </div>
                </div>
                
                <h2 className="text-5xl font-bold text-foreground leading-tight">
                  Financial Freedom
                  <span className="block text-transparent bg-clip-text trust-gradient">
                    For Everyone
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Access micro-loans without barriers. Lend and earn competitive returns. 
                  All powered by autonomous smart contracts on Massa.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-1">
                    <div className="text-2xl font-bold text-primary">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10 slide-up">
                    <feature.icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Enhanced Login Form */}
            <div className="flex justify-center lg:justify-end scale-in">
              <Card className="trust-card-featured w-full max-w-md">
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-bold">
                    {isLogin ? "Welcome Back" : "Join the Community"}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {isLogin 
                      ? "Sign in to access your micro-loan dashboard" 
                      : "Start lending or borrowing in under 2 minutes"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Wallet Connection Options */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-center text-muted-foreground">Connect with Wallet</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={() => handleWalletConnect("MetaMask")}
                        variant="outline"
                        className="trust-button-outline h-12 flex items-center justify-center space-x-2"
                      >
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <span>MetaMask</span>
                      </Button>
                      <Button
                        onClick={() => handleWalletConnect("WalletConnect")}
                        variant="outline"
                        className="trust-button-outline h-12 flex items-center justify-center space-x-2"
                      >
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">W</span>
                        </div>
                        <span>WalletConnect</span>
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="trust-input h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="trust-input h-12"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full trust-button h-12 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Please wait...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>{isLogin ? "Sign In" : "Create Account"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                  
                  {/* Social Login Options */}
                  <div className="space-y-3">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/50"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Social Login</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        type="button"
                        onClick={() => handleSocialLogin("Google")}
                        variant="outline"
                        className="w-full trust-button-outline h-12 flex items-center justify-center space-x-3"
                      >
                        <Chrome className="w-5 h-5 text-blue-600" />
                        <span>Continue with Google</span>
                      </Button>
                      
                      <Button
                        type="button"
                        onClick={() => handleSocialLogin("GitHub")}
                        variant="outline"
                        className="w-full trust-button-outline h-12 flex items-center justify-center space-x-3"
                      >
                        <Github className="w-5 h-5" />
                        <span>Continue with GitHub</span>
                      </Button>
                      
                      <Button
                        type="button"
                        onClick={() => handleSocialLogin("Email Magic Link")}
                        variant="outline"
                        className="w-full trust-button-outline h-12 flex items-center justify-center space-x-3"
                      >
                        <Mail className="w-5 h-5 text-green-600" />
                        <span>Magic Link (Email)</span>
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    variant="ghost"
                    className="w-full text-sm text-muted-foreground hover:text-primary"
                  >
                    {isLogin 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/20">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span>Decentralized</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span>Open Source</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
