import { useApp, AppProvider } from "@/context/AppContext";
import { Header } from "@/components/Header";
import { LandingPage } from "@/components/LandingPage";
import { ProfileForm } from "@/components/ProfileForm";
import { InterestSelection } from "@/components/InterestSelection";
import { CareerRecommendations } from "@/components/CareerRecommendations";
import { CareerDashboard } from "@/components/CareerDashboard";

function AppContent() {
  const { currentStep } = useApp();

  return (
    <div className="min-h-screen bg-background">
      {currentStep !== "landing" && <Header />}
      
      {currentStep === "landing" && <LandingPage />}
      {currentStep === "profile" && <ProfileForm />}
      {currentStep === "interests" && <InterestSelection />}
      {currentStep === "careers" && <CareerRecommendations />}
      {currentStep === "roadmap" && <CareerDashboard />}
    </div>
  );
}

const Index = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default Index;