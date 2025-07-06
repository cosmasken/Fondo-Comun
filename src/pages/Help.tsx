
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  HelpCircle, 
  Search, 
  MessageCircle,
  BookOpen,
  Activity,
  ChevronRight,
  Mail,
  Phone
} from "lucide-react";
import ProfileDropdown from "@/components/ProfileDropdown";
import { useToast } from "@/hooks/use-toast";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const submitTicket = () => {
    toast({
      title: "Support ticket submitted!",
      description: "Our team will get back to you within 24 hours",
    });
  };

  const faqs = [
    {
      question: "How do I deposit funds into the lending pool?",
      answer: "Connect your wallet, click 'Lend to Pool', enter amount, and confirm the transaction.",
      category: "Lending"
    },
    {
      question: "What are the borrowing requirements?",
      answer: "Minimum reputation score of 600 and collateral of 120% of loan amount.",
      category: "Borrowing"
    },
    {
      question: "How are interest rates calculated?",
      answer: "Rates are dynamic based on pool utilization, typically 5-12% APR for borrowers.",
      category: "Rates"
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes, but there's a 24-hour notice period for large withdrawals to ensure pool stability.",
      category: "Withdrawals"
    },
    {
      question: "What happens if a borrower defaults?",
      answer: "Collateral is liquidated to protect lenders. Our default rate is less than 2%.",
      category: "Security"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  <HelpCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Help & Support</h1>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Activity className="w-3 h-3 mr-1" />
                    Get answers and assistance
                  </p>
                </div>
              </div>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search */}
          <Card className="trust-card-featured">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 trust-input h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="trust-card hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 trust-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">User Guide</h3>
                  <p className="text-muted-foreground text-sm">Complete guide to using the platform</p>
                </div>
                <Button variant="outline" className="trust-button-outline">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="trust-card hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 trust-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Live Chat</h3>
                  <p className="text-muted-foreground text-sm">Chat with our support team</p>
                </div>
                <Button className="trust-button">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="trust-card hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 trust-gradient rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Support</h3>
                  <p className="text-muted-foreground text-sm">Get help via email</p>
                </div>
                <Button variant="outline" className="trust-button-outline">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border/30 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold">{faq.question}</h4>
                          <Badge variant="secondary" className="text-xs">{faq.category}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle>Submit Support Ticket</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Subject</label>
                  <Input placeholder="Describe your issue briefly" className="trust-input" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold">Category</label>
                  <select className="w-full trust-input">
                    <option>Technical Issue</option>
                    <option>Account Question</option>
                    <option>Transaction Problem</option>
                    <option>Feature Request</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold">Message</label>
                <Textarea 
                  placeholder="Please provide detailed information about your issue..."
                  className="trust-input min-h-[120px]"
                />
              </div>
              
              <Button onClick={submitTicket} className="trust-button">
                Submit Ticket
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="trust-card">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@microloanpool.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card">
              <CardContent className="pt-6 space-y-4">
                <h4 className="font-semibold">Support Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
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

export default HelpPage;
