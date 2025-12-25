import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CareerRoadmapContent } from "@/components/CareerRoadmapContent";
import { CareerResources } from "@/components/CareerResources";
import { InternshipFinder } from "@/components/InternshipFinder";
import { 
  calculateProgress
} from "@/data/careerData";
import { ProgressBar } from "@/components/ProgressBar";
import { 
  Route, 
  BookOpen, 
  Briefcase,
  Target,
  TrendingUp,
  DollarSign
} from "lucide-react";

export function CareerDashboard() {
  const { selectedCareer } = useApp();
  const [activeTab, setActiveTab] = useState("roadmap");

  if (!selectedCareer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">No career selected</p>
      </div>
    );
  }

  const overallProgress = calculateProgress(selectedCareer.modules);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Career Header */}
        <div className="card-elevated p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground">
                <Target className="h-7 w-7" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">Career Path</Badge>
                <h1 className="text-2xl font-bold mb-1">{selectedCareer.title}</h1>
                <p className="text-muted-foreground text-sm max-w-lg">{selectedCareer.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-success" />
                <span className="font-medium">{selectedCareer.salary}</span>
              </div>
              <Badge className="bg-success/10 text-success">
                <TrendingUp className="h-3 w-3 mr-1" />
                {selectedCareer.demand} Demand
              </Badge>
              <div className="w-40">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{overallProgress}%</span>
                </div>
                <ProgressBar progress={overallProgress} size="sm" showLabel={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="roadmap" className="gap-2">
              <Route className="h-4 w-4" />
              <span className="hidden sm:inline">Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="internships" className="gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Internships</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="roadmap" className="mt-6">
            <CareerRoadmapContent />
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <CareerResources />
          </TabsContent>

          <TabsContent value="internships" className="mt-6">
            <InternshipFinder />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
