
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  Activity
} from "lucide-react";
import ProfileDropdown from "@/components/ProfileDropdown";
import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    loans: true,
    marketing: false,
  });
  const [theme, setTheme] = useState("light");
  const { toast } = useToast();

  const saveSettings = () => {
    toast({
      title: "Settings saved!",
      description: "Your preferences have been updated successfully",
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
                  <SettingsIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">App Settings</h1>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Activity className="w-3 h-3 mr-1" />
                    Customize your experience
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
          {/* General Settings */}
          <Card className="trust-card-featured">
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="mr-3 w-6 h-6 text-accent" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input id="displayName" placeholder="John Doe" className="trust-input" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="language">Language</Label>
                  <select className="w-full trust-input">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="currency">Preferred Currency</Label>
                  <select className="w-full trust-input">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>ETH</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select className="w-full trust-input">
                    <option>UTC-8 (Pacific)</option>
                    <option>UTC-5 (Eastern)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (CET)</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-3 w-6 h-6 text-accent" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Push Notifications</h4>
                    <p className="text-sm text-muted-foreground">Browser push notifications</p>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Loan Alerts</h4>
                    <p className="text-sm text-muted-foreground">Important loan status updates</p>
                  </div>
                  <Switch 
                    checked={notifications.loans} 
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, loans: checked }))}
                  />
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Marketing Updates</h4>
                    <p className="text-sm text-muted-foreground">Product news and features</p>
                  </div>
                  <Switch 
                    checked={notifications.marketing} 
                    onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-3 w-6 h-6 text-accent" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Theme Preference</Label>
                <div className="grid grid-cols-3 gap-4">
                  {['light', 'dark', 'system'].map((themeOption) => (
                    <button
                      key={themeOption}
                      onClick={() => setTheme(themeOption)}
                      className={`p-4 rounded-xl border-2 transition-all capitalize ${
                        theme === themeOption 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border/30 hover:border-primary/50'
                      }`}
                    >
                      {themeOption}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="trust-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-3 w-6 h-6 text-accent" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                  </div>
                  <Button variant="outline" className="trust-button-outline">
                    Enable
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div>
                    <h4 className="font-semibold">Data Export</h4>
                    <p className="text-sm text-muted-foreground">Download your account data</p>
                  </div>
                  <Button variant="outline" className="trust-button-outline">
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={saveSettings} className="trust-button px-8">
              Save All Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
