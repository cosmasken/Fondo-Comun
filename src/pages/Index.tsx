
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Clock,
  Target
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Micro-Loan Pool</h1>
                <p className="text-sm text-gray-600">Decentralized Micro-Lending on Massa Network</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Built on Massa
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            DeFi Innovation • Massa Buildathon 2024
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trustless Micro-Lending for the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Underserved</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A decentralized finance primitive enabling micro-loans for gig workers and the unbanked, 
            powered by Massa's Autonomous Smart Contracts and DeWeb infrastructure.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View Technical Details <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Globe className="mr-2 w-4 h-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <Card className="border-2 border-blue-100">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-4">Abstract</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Micro-Loan Pool is a decentralized finance (DeFi) primitive built on the Massa Network, 
                enabling trustless micro-lending for underserved users like gig workers and the unbanked. 
                Leveraging Massa's Autonomous Smart Contracts (ASC) for automated repayments and DeWeb for 
                an on-chain frontend, it offers a fully decentralized, low-barrier lending solution. This 
                whitepaper outlines the project's purpose, technical implementation, and product-market fit 
                for a 2-hour demo, with scalability for future enhancements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity</h3>
            <p className="text-xl text-gray-600">Massive untapped market in microfinance and DeFi convergence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">$200B+</div>
                <p className="text-gray-600">Global Microfinance Market</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">200M+</div>
                <p className="text-gray-600">Microfinance Users Worldwide</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">1B+</div>
                <p className="text-gray-600">Global Gig Economy Workers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">$80B</div>
                <p className="text-gray-600">Current DeFi TVL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="demo">Demo Plan</TabsTrigger>
              <TabsTrigger value="future">Future</TabsTrigger>
            </TabsList>

            <TabsContent value="problem" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-3 w-6 h-6 text-red-600" />
                    Product-Market Fit & Pain Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Target Audience</h4>
                    <p className="text-gray-700 mb-4">
                      Gig workers, students, and unbanked individuals in emerging markets needing 
                      small, fast loans (e.g., 0.01-0.1 ETH equivalent).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Pain Points Addressed</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <Shield className="w-8 h-8 text-red-600 mb-2" />
                        <h5 className="font-semibold mb-2">High Collateral Barriers</h5>
                        <p className="text-sm text-gray-700">DeFi lending platforms require high collateral, excluding low-income users</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <Users className="w-8 h-8 text-orange-600 mb-2" />
                        <h5 className="font-semibold mb-2">Centralized Control</h5>
                        <p className="text-sm text-gray-700">Traditional microfinance platforms risk downtime, fees, or censorship</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <Zap className="w-8 h-8 text-yellow-600 mb-2" />
                        <h5 className="font-semibold mb-2">Manual Processes</h5>
                        <p className="text-sm text-gray-700">Lack of trustless, automated micro-loan repayment systems</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-3 w-6 h-6 text-green-600" />
                    Core Features & Massa Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Core Features</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Lend to Pool:</strong> One-click deposits via DeWeb interface
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Borrow Micro-Loans:</strong> Small amounts with ASC enforcement
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>ASC-Driven Repayments:</strong> Automated deductions at intervals
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>DeWeb Frontend:</strong> On-chain UI with real-time stats
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Massa Advantage</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">Autonomous Smart Contracts</h5>
                          <p className="text-sm text-blue-800">Trustless repayment schedules without oracles</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h5 className="font-semibold text-purple-900 mb-2">DeWeb Integration</h5>
                          <p className="text-sm text-purple-800">Resilient, on-chain UI eliminating centralized hosting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-3 w-6 h-6 text-blue-600" />
                      Smart Contract (ASC)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="mb-2">Solidity-like for Massa</Badge>
                        <h5 className="font-semibold mb-2">Core Functions:</h5>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• <code className="bg-gray-100 px-1 rounded">deposit()</code> - Add funds to pool</li>
                          <li>• <code className="bg-gray-100 px-1 rounded">borrow(uint amount)</code> - Request loans</li>
                          <li>• <code className="bg-gray-100 px-1 rounded">repay(address, uint)</code> - Auto-execute repayments</li>
                        </ul>
                      </div>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                        <pre>{`contract MicroLoanPool {
  mapping(address => uint) public balances;
  mapping(address => uint) public loans;
  uint public poolBalance;

  function deposit() public payable {
    balances[msg.sender] += msg.value;
    poolBalance += msg.value;
  }

  function borrow(uint amount) public {
    require(poolBalance >= amount);
    loans[msg.sender] += amount;
    poolBalance -= amount;
    scheduleRepayment(msg.sender, amount);
  }
}`}</pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="mr-3 w-6 h-6 text-purple-600" />
                      DeWeb Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="mb-2">HTML/CSS/JavaScript</Badge>
                        <h5 className="font-semibold mb-2">UI Components:</h5>
                        <ul className="text-sm space-y-1 text-gray-700">
                          <li>• Pool balance display</li>
                          <li>• User balance and loan status</li>
                          <li>• Lending and borrowing buttons</li>
                          <li>• Real-time updates</li>
                        </ul>
                      </div>
                      <div className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                        <pre>{`<div class="pool">
  <h2>Micro-Loan Pool</h2>
  <p>Pool Balance: <span id="poolBalance">0</span> ETH</p>
  <p>Your Balance: <span id="userBalance">0</span> ETH</p>
  <p>Your Loan: <span id="userLoan">0</span> ETH</p>
  <button onclick="deposit()">Lend</button>
  <button onclick="borrow()">Borrow</button>
</div>`}</pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="demo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-3 w-6 h-6 text-orange-600" />
                    2-Hour Demo Implementation Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">Smart Contract</h4>
                          <Badge>1 hour</Badge>
                        </div>
                        <Progress value={100} className="h-2" />
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Deploy basic ASC functions</li>
                          <li>• Implement deposit/borrow/repay</li>
                          <li>• Test on Massa testnet</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">DeWeb UI</h4>
                          <Badge>45 minutes</Badge>
                        </div>
                        <Progress value={75} className="h-2" />
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Build HTML/CSS/JS frontend</li>
                          <li>• Pool interaction interface</li>
                          <li>• Real-time statistics display</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">Testing</h4>
                          <Badge>15 minutes</Badge>
                        </div>
                        <Progress value={25} className="h-2" />
                        <ul className="text-sm space-y-2 text-gray-700">
                          <li>• Verify contract calls</li>
                          <li>• Test UI rendering</li>
                          <li>• Record demo video</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-900 mb-2">Deliverables</h5>
                      <p className="text-green-800 text-sm">
                        GitHub repository with complete code, setup README, and 2-minute demo video 
                        showcasing the full lend/borrow workflow.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="future" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-3 w-6 h-6 text-green-600" />
                    Future Scalability & Enhancements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Short-term Enhancements</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Interest Rates:</strong> Dynamic rates based on pool utilization
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Credit Scoring:</strong> On-chain reputation system for borrowers
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Multi-Pool Support:</strong> Segment by loan size or risk profile
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Long-term Vision</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Enhanced UI:</strong> Visual loan tracking and borrower profiles
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Mobile Integration:</strong> Mobile-first design for gig workers
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong>Cross-chain Bridge:</strong> Multi-blockchain support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Alignment Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Massa Buildathon Alignment</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="space-y-3">
              <Code className="w-12 h-12 mx-auto opacity-90" />
              <h4 className="font-semibold">Technical Excellence</h4>
              <p className="text-sm opacity-90">Robust ASC and DeWeb implementation</p>
            </div>
            <div className="space-y-3">
              <Zap className="w-12 h-12 mx-auto opacity-90" />
              <h4 className="font-semibold">Innovation</h4>
              <p className="text-sm opacity-90">Novel micro-loan primitive for underserved users</p>
            </div>
            <div className="space-y-3">
              <Target className="w-12 h-12 mx-auto opacity-90" />
              <h4 className="font-semibold">Usefulness</h4>
              <p className="text-sm opacity-90">Addresses real-world lending accessibility</p>
            </div>
            <div className="space-y-3">
              <Users className="w-12 h-12 mx-auto opacity-90" />
              <h4 className="font-semibold">User Experience</h4>
              <p className="text-sm opacity-90">Clean, one-click interface for non-crypto users</p>
            </div>
            <div className="space-y-3">
              <Shield className="w-12 h-12 mx-auto opacity-90" />
              <h4 className="font-semibold">Autonomy</h4>
              <p className="text-sm opacity-90">Fully on-chain, trustless execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Micro-Loan Pool</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering financial inclusion through decentralized micro-lending
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Code className="mr-2 w-4 h-4" />
              GitHub Repository
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Globe className="mr-2 w-4 h-4" />
              Live Demo
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              Built for Massa Buildathon 2024 • Leveraging ASC & DeWeb Technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
