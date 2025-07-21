import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import MainApp from "@/components/MainApp";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <MainApp />;
  }

  return <LandingPage />;
};

export default Index;
