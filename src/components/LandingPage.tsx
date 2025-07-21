import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageCircle, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const LandingPage = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent rounded-sm bg-blue-800">
            Champreach
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
            <Button variant="premium" onClick={() => navigate("/auth")}>
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Connect.
                  </span>{" "}
                  <span className="text-foreground">Share.</span>{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Reach.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Join the premium social platform where meaningful connections flourish and authentic conversations thrive.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="animate-scale-in" onClick={() => navigate("/auth")}>
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="xl" className="animate-scale-in">
                  Explore Features
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Connections Made</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Posts Shared</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative">
                <img src={heroImage} alt="Champreach Community" className="rounded-2xl shadow-elegant w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Champreach</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience social networking reimagined with premium features designed for meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Users,
            title: "Premium Networking",
            description: "Connect with like-minded professionals and build lasting relationships."
          }, {
            icon: MessageCircle,
            title: "Real-time Messaging",
            description: "Instant communication with advanced chat features and media sharing."
          }, {
            icon: Heart,
            title: "Meaningful Interactions",
            description: "Engage authentically with content that matters to your community."
          }, {
            icon: Share2,
            title: "Smart Sharing",
            description: "Share your thoughts, moments, and achievements with precision privacy controls."
          }].map((feature, index) => <div key={index} className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-premium">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Reach Higher</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users who have already discovered the power of premium social networking.
            </p>
            <Button variant="premium" size="xl" className="animate-scale-in" onClick={() => navigate("/auth")}>
              Join Champreach Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20">
        <div className="container px-4 py-12 mx-auto">
          <div className="text-center space-y-4">
            <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Champreach
            </div>
            <p className="text-muted-foreground">
              Connecting people through meaningful interactions and premium social experiences.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Champreach. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;