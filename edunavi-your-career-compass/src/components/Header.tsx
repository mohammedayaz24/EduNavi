import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Compass, ArrowLeft } from "lucide-react";

export function Header() {
  const { currentStep, setCurrentStep } = useApp();

  const handleBack = () => {
    switch (currentStep) {
      case "profile":
        setCurrentStep("landing");
        break;
      case "interests":
        setCurrentStep("profile");
        break;
      case "careers":
        setCurrentStep("interests");
        break;
      case "roadmap":
        setCurrentStep("careers");
        break;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {currentStep !== "landing" && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentStep("landing")}
          >
            <div className="gradient-bg rounded-lg p-2">
              <Compass className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EduNavi</span>
          </div>
        </div>
        
        {currentStep !== "landing" && (
          <nav className="hidden md:flex items-center gap-6">
            <StepIndicator 
              label="Profile" 
              active={currentStep === "profile"} 
              completed={["interests", "careers", "roadmap"].includes(currentStep)}
            />
            <StepIndicator 
              label="Interests" 
              active={currentStep === "interests"} 
              completed={["careers", "roadmap"].includes(currentStep)}
            />
            <StepIndicator 
              label="Careers" 
              active={currentStep === "careers"} 
              completed={currentStep === "roadmap"}
            />
            <StepIndicator 
              label="Roadmap" 
              active={currentStep === "roadmap"} 
              completed={false}
            />
          </nav>
        )}
      </div>
    </header>
  );
}

function StepIndicator({ label, active, completed }: { label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div 
        className={`w-2 h-2 rounded-full transition-colors ${
          completed ? "gradient-bg" : active ? "bg-primary" : "bg-muted"
        }`} 
      />
      <span 
        className={`text-sm font-medium transition-colors ${
          active ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
