import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { 
  calculateProgress, 
  calculateModuleProgress, 
  calculateTopicProgress 
} from "@/data/careerData";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  ExternalLink, 
  Check,
  Youtube,
  GraduationCap,
  FileCode,
  Palette,
  Code,
  Atom,
  Terminal,
  Database,
  Search,
  ClipboardList,
  Settings,
  Lock,
  Monitor,
  Smartphone,
  Brain
} from "lucide-react";

const moduleIconMap: Record<string, React.ReactNode> = {
  FileCode: <FileCode className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Code: <Code className="h-5 w-5" />,
  Atom: <Atom className="h-5 w-5" />,
  Terminal: <Terminal className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Search: <Search className="h-5 w-5" />,
  ClipboardList: <ClipboardList className="h-5 w-5" />,
  Settings: <Settings className="h-5 w-5" />,
  Lock: <Lock className="h-5 w-5" />,
  Monitor: <Monitor className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
};

export function CareerRoadmap() {
  const { selectedCareer, toggleSubTopicComplete } = useApp();
  const [openModules, setOpenModules] = useState<string[]>([]);
  const [openTopics, setOpenTopics] = useState<string[]>([]);

  if (!selectedCareer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">No career selected</p>
      </div>
    );
  }

  const overallProgress = calculateProgress(selectedCareer.modules);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleTopic = (topicId: string) => {
    setOpenTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="card-elevated p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Badge variant="secondary" className="mb-3">Career Roadmap</Badge>
              <h1 className="text-3xl font-bold mb-2">{selectedCareer.title}</h1>
              <p className="text-muted-foreground">{selectedCareer.description}</p>
            </div>
            <div className="flex-shrink-0 w-full md:w-48">
              <div className="text-center md:text-right mb-2">
                <span className="text-3xl font-bold gradient-text">{overallProgress}%</span>
              </div>
              <ProgressBar progress={overallProgress} size="lg" showLabel={false} />
              <p className="text-xs text-muted-foreground text-center md:text-right mt-1">
                Overall Progress
              </p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {selectedCareer.modules.map((module, moduleIndex) => {
            const moduleProgress = calculateModuleProgress(module);
            const isModuleOpen = openModules.includes(module.id);
            
            return (
              <Collapsible
                key={module.id}
                open={isModuleOpen}
                onOpenChange={() => toggleModule(module.id)}
              >
                <div className="card-elevated overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 flex items-center gap-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-bg text-primary-foreground text-sm font-semibold">
                      {moduleIconMap[module.icon] || moduleIndex + 1}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-lg">{module.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <ProgressBar 
                          progress={moduleProgress} 
                          size="sm" 
                          showLabel={false} 
                          className="w-32"
                        />
                        <span className="text-xs text-muted-foreground">
                          {moduleProgress}%
                        </span>
                      </div>
                    </div>
                    {isModuleOpen ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="px-6 pb-6 space-y-3">
                      {module.topics.map((topic) => {
                        const topicProgress = calculateTopicProgress(topic);
                        const isTopicOpen = openTopics.includes(topic.id);
                        
                        return (
                          <Collapsible
                            key={topic.id}
                            open={isTopicOpen}
                            onOpenChange={() => toggleTopic(topic.id)}
                          >
                            <div className="border border-border rounded-xl overflow-hidden bg-secondary/20">
                              <CollapsibleTrigger className="w-full p-4 flex items-center gap-3 hover:bg-secondary/40 transition-colors">
                                <BookOpen className="h-4 w-4 text-primary" />
                                <div className="flex-1 text-left">
                                  <h4 className="font-medium">{topic.name}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <ProgressBar 
                                      progress={topicProgress} 
                                      size="sm" 
                                      showLabel={false} 
                                      className="w-24"
                                    />
                                    <span className="text-xs text-muted-foreground">
                                      {topic.subTopics.filter(st => st.completed).length}/{topic.subTopics.length}
                                    </span>
                                  </div>
                                </div>
                                {isTopicOpen ? (
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                )}
                              </CollapsibleTrigger>

                              <CollapsibleContent>
                                <div className="p-4 pt-0 space-y-3">
                                  {topic.subTopics.map((subTopic) => (
                                    <div 
                                      key={subTopic.id}
                                      className={`
                                        p-4 rounded-lg border transition-all
                                        ${subTopic.completed 
                                          ? "bg-success/5 border-success/30" 
                                          : "bg-background border-border"
                                        }
                                      `}
                                    >
                                      <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => toggleSubTopicComplete(module.id, topic.id, subTopic.id)}
                                            className={`
                                              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                              ${subTopic.completed 
                                                ? "gradient-bg border-transparent" 
                                                : "border-border hover:border-primary"
                                              }
                                            `}
                                          >
                                            {subTopic.completed && (
                                              <Check className="h-3 w-3 text-primary-foreground" />
                                            )}
                                          </button>
                                          <span className={`font-medium ${subTopic.completed ? "line-through text-muted-foreground" : ""}`}>
                                            {subTopic.name}
                                          </span>
                                        </div>
                                        {subTopic.completed && (
                                          <Badge variant="secondary" className="bg-success/10 text-success">
                                            Completed
                                          </Badge>
                                        )}
                                      </div>

                                      <div className="grid sm:grid-cols-2 gap-2 ml-7">
                                        <a
                                          href={subTopic.freeResource.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group"
                                        >
                                          <Youtube className="h-4 w-4 text-destructive" />
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium truncate">
                                              {subTopic.freeResource.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                              {subTopic.freeResource.platform} • Free
                                            </p>
                                          </div>
                                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </a>

                                        <a
                                          href={subTopic.paidResource.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group"
                                        >
                                          <GraduationCap className="h-4 w-4 text-primary" />
                                          <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium truncate">
                                              {subTopic.paidResource.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                              {subTopic.paidResource.platform} • Paid
                                            </p>
                                          </div>
                                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </CollapsibleContent>
                            </div>
                          </Collapsible>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </div>
  );
}
