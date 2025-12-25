import { useApp } from "@/context/AppContext";
import { Badge } from "@/components/ui/badge";
import { 
  Youtube, 
  GraduationCap, 
  ExternalLink,
  BookOpen,
  Video,
  Award
} from "lucide-react";
import { 
  generateYouTubeSearchUrl, 
  generateUdemySearchUrl, 
  generateCourseraSearchUrl,
  generateScrimbaSearchUrl
} from "@/data/internshipData";

// Helper to generate real URLs
const getResourceUrl = (resource: { url: string; platform: string }, topicName: string): string => {
  if (!resource.url || resource.url.includes("undefined") || !resource.url.startsWith("http")) {
    switch (resource.platform.toLowerCase()) {
      case "youtube":
        return generateYouTubeSearchUrl(topicName);
      case "udemy":
        return generateUdemySearchUrl(topicName);
      case "coursera":
        return generateCourseraSearchUrl(topicName);
      case "scrimba":
        return generateScrimbaSearchUrl(topicName);
      default:
        return generateYouTubeSearchUrl(topicName);
    }
  }
  return resource.url;
};

export function CareerResources() {
  const { selectedCareer } = useApp();

  if (!selectedCareer) return null;

  // Collect all resources from all modules
  const allResources: Array<{
    module: string;
    topic: string;
    subtopic: string;
    freeResource: { title: string; url: string; platform: string };
    paidResource: { title: string; url: string; platform: string };
  }> = [];

  selectedCareer.modules.forEach(module => {
    module.topics.forEach(topic => {
      topic.subTopics.forEach(subTopic => {
        allResources.push({
          module: module.name,
          topic: topic.name,
          subtopic: subTopic.name,
          freeResource: subTopic.freeResource,
          paidResource: subTopic.paidResource,
        });
      });
    });
  });

  // Group by platform
  const freeResources = allResources.map(r => ({
    ...r.freeResource,
    url: getResourceUrl(r.freeResource, r.subtopic),
    subtopic: r.subtopic,
    module: r.module,
  }));

  const paidResources = allResources.map(r => ({
    ...r.paidResource,
    url: getResourceUrl(r.paidResource, r.subtopic),
    subtopic: r.subtopic,
    module: r.module,
  }));

  const platformGroups = {
    YouTube: freeResources.filter(r => r.platform === "YouTube"),
    Udemy: paidResources.filter(r => r.platform === "Udemy"),
    Coursera: paidResources.filter(r => r.platform === "Coursera"),
    Scrimba: paidResources.filter(r => r.platform === "Scrimba"),
    Skillshare: paidResources.filter(r => r.platform === "Skillshare"),
  };

  const platformInfo: Record<string, { icon: React.ReactNode; color: string; type: string }> = {
    YouTube: { 
      icon: <Youtube className="h-5 w-5" />, 
      color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      type: "Free Videos"
    },
    Udemy: { 
      icon: <Video className="h-5 w-5" />, 
      color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      type: "Paid Courses"
    },
    Coursera: { 
      icon: <Award className="h-5 w-5" />, 
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      type: "Certified Courses"
    },
    Scrimba: { 
      icon: <GraduationCap className="h-5 w-5" />, 
      color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
      type: "Interactive Courses"
    },
    Skillshare: { 
      icon: <BookOpen className="h-5 w-5" />, 
      color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      type: "Creative Courses"
    },
  };

  return (
    <div className="space-y-8">
      <div className="card-elevated p-6">
        <h3 className="text-lg font-semibold mb-2">All Learning Resources</h3>
        <p className="text-muted-foreground text-sm">
          Curated resources for your {selectedCareer.title} journey. Click on any resource to start learning.
        </p>
      </div>

      {Object.entries(platformGroups).map(([platform, resources]) => {
        if (resources.length === 0) return null;
        const info = platformInfo[platform];
        
        return (
          <div key={platform} className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className={info.color}>
                {info.icon}
                <span className="ml-1">{platform}</span>
              </Badge>
              <span className="text-sm text-muted-foreground">
                {resources.length} resources • {info.type}
              </span>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((resource, idx) => (
                <a
                  key={`${platform}-${idx}`}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated p-4 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${info.color}`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {resource.subtopic}
                      </p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {resource.module}
                      </Badge>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
