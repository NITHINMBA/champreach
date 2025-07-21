import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Users, 
  MessageCircle, 
  Bell, 
  Search, 
  Heart, 
  MessageSquare, 
  Share2,
  MoreHorizontal,
  Settings
} from "lucide-react";

const MainApp = () => {
  const [activeTab, setActiveTab] = useState("home");

  const posts = [
    {
      id: 1,
      user: { name: "Sarah Chen", avatar: "SC", username: "@sarahc" },
      content: "Just completed an amazing project with my team! The collaboration and creativity that emerged was incredible. Grateful for these meaningful connections. 🚀",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      image: null
    },
    {
      id: 2,
      user: { name: "Marcus Williams", avatar: "MW", username: "@marcusw" },
      content: "Thoughts on the future of remote work and digital collaboration? I believe we're just scratching the surface of what's possible.",
      timestamp: "4 hours ago",
      likes: 67,
      comments: 15,
      shares: 12,
      image: null
    }
  ];

  const navigation = [
    { id: "home", icon: Home, label: "Home" },
    { id: "connections", icon: Users, label: "Connections" },
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "notifications", icon: Bell, label: "Notifications" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Champreach
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search Champreach..." 
                className="pl-10 bg-secondary/50 border-0 focus:bg-background"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="icon"
                onClick={() => setActiveTab(item.id)}
                className="relative"
              >
                <item.icon className="w-5 h-5" />
                {item.id === "notifications" && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
                )}
              </Button>
            ))}
            
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>

            <Avatar className="w-8 h-8 ml-2">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="container py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 space-y-4">
              <div className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    JD
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">@johndoe</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Premium Member since 2024
                </p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Connections</span>
                  <span className="font-medium">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Posts</span>
                  <span className="font-medium">89</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Following</span>
                  <span className="font-medium">156</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Composer */}
            <Card className="p-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                    <p className="text-muted-foreground">What's on your mind, John?</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Share your thoughts with your network
                    </div>
                    <Button variant="premium" size="sm">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {post.user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{post.user.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {post.user.username} • {post.timestamp}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                        <Heart className="w-4 h-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Share2 className="w-4 h-4 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Suggestions */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">People You May Know</h3>
              <div className="space-y-4">
                {[
                  { name: "Emily Rodriguez", username: "@emily.r", mutual: "12 mutual connections" },
                  { name: "David Kim", username: "@david.kim", mutual: "8 mutual connections" },
                  { name: "Lisa Thompson", username: "@lisa.t", mutual: "15 mutual connections" }
                ].map((person, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-accent text-accent-foreground text-sm">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{person.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{person.mutual}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;