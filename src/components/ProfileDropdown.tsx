
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Wallet, 
  Settings, 
  HelpCircle, 
  Shield, 
  Bell,
  LogOut,
  ChevronDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userAddress] = useState("0x742d35Cc6Ba86c27F4C33E20C2C4e6aC7c5d9b8");

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been securely logged out of your account",
    });
    navigate("/");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-3 px-3 py-2 h-auto trust-button-outline">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/api/placeholder/32/32" />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">{formatAddress(userAddress)}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-64 bg-card/95 backdrop-blur-md border border-border/50">
        <DropdownMenuLabel className="px-4 py-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-xs text-muted-foreground font-mono">{formatAddress(userAddress)}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className="trust-badge text-xs">
                  <Shield className="w-2 h-2 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/profile" className="flex items-center space-x-3">
            <User className="w-4 h-4" />
            <span>Profile & Settings</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/wallet" className="flex items-center space-x-3">
            <Wallet className="w-4 h-4" />
            <span>Wallet Management</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/notifications" className="flex items-center space-x-3">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/security" className="flex items-center space-x-3">
            <Shield className="w-4 h-4" />
            <span>Security & Privacy</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/settings" className="flex items-center space-x-3">
            <Settings className="w-4 h-4" />
            <span>App Settings</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild className="cursor-pointer px-4 py-2 hover:bg-muted/50">
          <Link to="/help" className="flex items-center space-x-3">
            <HelpCircle className="w-4 h-4" />
            <span>Help & Support</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer px-4 py-2 text-destructive hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive"
        >
          <LogOut className="w-4 h-4 mr-3" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
