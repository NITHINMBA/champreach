import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute top-4 left-4 text-white hover:bg-white/10"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="font-bold text-3xl text-white mb-2">Champreach</div>
          <p className="text-white/80">Connect. Share. Reach.</p>
        </div>

        {/* Auth Form */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center">
              {isSignUp ? "Join Champreach" : "Welcome Back"}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignUp 
                ? "Create your account to start connecting" 
                : "Sign in to your account"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <Button 
                type="submit" 
                variant="premium" 
                className="w-full"
                size="lg"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
              </p>
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary p-0 h-auto font-semibold"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-6">
          <p className="text-xs text-white/60">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;