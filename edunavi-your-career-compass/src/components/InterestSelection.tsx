import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { interestCategories } from "@/data/careerData";
import { Sparkles, ArrowRight, Check, Lightbulb, Code, Palette, Briefcase } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Technology: <Code className="h-5 w-5" />,
  Design: <Palette className="h-5 w-5" />,
  "Product & Business": <Briefcase className="h-5 w-5" />,
};

export function InterestSelection() {
  const { selectedInterests, toggleInterest, setCurrentStep } = useApp();

  const canProceed = selectedInterests.length >= 1 && selectedInterests.length <= 3;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Lightbulb className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Select Your Interests</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose 1-3 areas that excite you the most. We'll recommend careers that match your passions.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            {selectedInterests.length}/3 Selected
          </div>
        </div>

        <div className="space-y-8 mb-10">
          {interestCategories.map((category) => (
            <div key={category.name} className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="gradient-bg p-2.5 rounded-xl text-primary-foreground">
                  {categoryIcons[category.name]}
                </div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.interests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  const isDisabled = selectedInterests.length >= 3 && !isSelected;
                  
                  return (
                    <button
                      key={interest}
                      onClick={() => !isDisabled && toggleInterest(interest)}
                      disabled={isDisabled}
                      className={`
                        inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                        transition-all duration-200 border
                        ${isSelected 
                          ? "gradient-bg text-primary-foreground border-transparent shadow-md" 
                          : "bg-secondary/50 text-secondary-foreground border-border hover:border-primary/50 hover:bg-secondary"
                        }
                        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                      `}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selectedInterests.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:relative md:p-0 md:bg-transparent md:backdrop-blur-none md:border-0">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedInterests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="secondary"
                    className="px-3 py-1.5 text-sm cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors"
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                    <span className="ml-1.5 text-muted-foreground">×</span>
                  </Badge>
                ))}
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => setCurrentStep("careers")}
                disabled={!canProceed}
                className="group w-full sm:w-auto"
              >
                View Career Matches
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
