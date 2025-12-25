import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Career, calculateProgress, interestCategories } from "@/data/careerData";
import { 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Target,
  Monitor,
  Server,
  Layers,
  BarChart3,
  Figma,
  Users,
  Smartphone,
  GitBranch,
  Shield
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  BarChart3: <BarChart3 className="h-6 w-6" />,
  Figma: <Figma className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  GitBranch: <GitBranch className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
};

export function CareerRecommendations() {
  const { recommendedCareers, selectedInterests, setSelectedCareer, setCurrentStep } = useApp();

  const handleViewRoadmap = (career: Career) => {
    setSelectedCareer(career);
    setCurrentStep("roadmap");
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "High":
        return "bg-success/10 text-success";
      case "Growing":
        return "bg-primary/10 text-primary";
      default:
        return "bg-warning/10 text-warning";
    }
  };

  // Group careers by interest
  const careersByInterest: Record<string, Career[]> = {};
  
  selectedInterests.forEach(interest => {
    careersByInterest[interest] = recommendedCareers.filter(career => 
      career.interests.includes(interest)
    );
  });

  // Find which category each interest belongs to
  const getInterestCategory = (interest: string): string => {
    for (const category of interestCategories) {
      if (category.interests.includes(interest)) {
        return category.name;
      }
    }
    return "Other";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Target className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Your Career Matches</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Based on your interests, here are the careers grouped by each area you selected
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {selectedInterests.map((interest) => (
              <Badge key={interest} variant="secondary" className="px-3 py-1">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {recommendedCareers.length === 0 ? (
          <div className="card-elevated p-12 text-center">
            <p className="text-muted-foreground">
              No careers found matching your interests. Try selecting different interests.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setCurrentStep("interests")}
            >
              Update Interests
            </Button>
          </div>
        ) : (
          <div className="space-y-10">
            {selectedInterests.map((interest) => {
              const careers = careersByInterest[interest] || [];
              if (careers.length === 0) return null;
              
              const category = getInterestCategory(interest);
              
              return (
                <div key={interest}>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="gradient-bg text-primary-foreground px-4 py-2 text-sm">
                      {interest}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {careers.length} career{careers.length !== 1 ? 's' : ''} • {category}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careers.map((career) => {
                      const matchingInterests = career.interests.filter(i => selectedInterests.includes(i));
                      const progress = calculateProgress(career.modules);
                      
                      return (
                        <div key={`${interest}-${career.id}`} className="card-elevated p-6 flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                            <div className="gradient-bg p-3 rounded-xl text-primary-foreground">
                              {iconMap[career.icon] || <Target className="h-6 w-6" />}
                            </div>
                            <Badge className={getDemandColor(career.demand)}>
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {career.demand} Demand
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 flex-1">
                            {career.description}
                          </p>
                          
                          <div className="flex items-center gap-2 mb-4 text-sm">
                            <DollarSign className="h-4 w-4 text-success" />
                            <span className="font-medium">{career.salary}</span>
                            <span className="text-muted-foreground">/ year</span>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs text-muted-foreground mb-2">Also matches:</p>
                            <div className="flex flex-wrap gap-1">
                              {matchingInterests.filter(i => i !== interest).map((i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {i}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {progress > 0 && (
                            <div className="mb-4">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-muted-foreground">Your Progress</span>
                                <span className="font-medium">{progress}%</span>
                              </div>
                              <div className="progress-bar h-1.5">
                                <div 
                                  className="progress-bar-fill" 
                                  style={{ width: `${progress}%` }} 
                                />
                              </div>
                            </div>
                          )}

                          <Button 
                            variant="hero" 
                            className="w-full group mt-auto"
                            onClick={() => handleViewRoadmap(career)}
                          >
                            View Roadmap
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}