import LandingPage from "@/components/LandingPage";
import MainApp from "@/components/MainApp";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (user) {
    return <MainApp />;
  }

  return <LandingPage />;
};

export default Index;
