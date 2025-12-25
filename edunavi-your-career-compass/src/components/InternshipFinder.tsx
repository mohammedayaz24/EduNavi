import { useState, useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  careerHiringData, 
  getHiringInfoForCareer, 
  generateRecruiterEmail,
  getFilteredInternships,
  Internship
} from "@/data/internshipData";
import { 
  Briefcase, 
  MapPin, 
  ExternalLink, 
  Mail, 
  Building2, 
  Users,
  Linkedin,
  Globe,
  Filter,
  Wifi
} from "lucide-react";

const platformIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="h-4 w-4" />,
  Internshala: <Globe className="h-4 w-4" />,
  "Company Careers": <Building2 className="h-4 w-4" />,
};

const platformColors: Record<string, string> = {
  LinkedIn: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Internshala: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  "Company Careers": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function InternshipFinder() {
  const { selectedCareer, studentProfile, selectedInterests } = useApp();
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  
  // Determine if student is in final year
  const currentYear = new Date().getFullYear();
  const gradYear = studentProfile?.graduationYear ? parseInt(studentProfile.graduationYear) : currentYear + 2;
  const isFinalYear = gradYear <= currentYear + 1;
  
  // Get hiring info for selected career
  const hiringInfo = selectedCareer ? getHiringInfoForCareer(selectedCareer.id) : null;
  
  // Get all internships for selected interests if no specific career selected
  const allInternships = useMemo(() => {
    if (hiringInfo) {
      return hiringInfo.internships;
    }
    // Get internships for all selected interests
    const interestCareers = careerHiringData.filter(info => {
      const career = selectedInterests.some(interest => {
        // Map interests to career IDs loosely
        if (interest.toLowerCase().includes("web")) return info.careerId.includes("developer");
        if (interest.toLowerCase().includes("data")) return info.careerId.includes("data");
        if (interest.toLowerCase().includes("design") || interest.toLowerCase().includes("ui") || interest.toLowerCase().includes("ux")) {
          return info.careerId.includes("designer");
        }
        return false;
      });
      return career;
    });
    return interestCareers.flatMap(info => info.internships);
  }, [hiringInfo, selectedInterests]);
  
  // Apply filters
  const filteredInternships = useMemo(() => {
    let result = getFilteredInternships(
      allInternships, 
      isFinalYear, 
      locationFilter === "remote",
      locationFilter
    );
    
    if (platformFilter !== "all") {
      result = result.filter(i => i.platform === platformFilter);
    }
    
    return result;
  }, [allInternships, isFinalYear, locationFilter, platformFilter]);
  
  // Group by platform
  const internshipsByPlatform = useMemo(() => {
    const grouped: Record<string, Internship[]> = {
      LinkedIn: [],
      Internshala: [],
      "Company Careers": [],
    };
    
    filteredInternships.forEach(internship => {
      if (grouped[internship.platform]) {
        grouped[internship.platform].push(internship);
      }
    });
    
    return grouped;
  }, [filteredInternships]);
  
  // Get unique locations for filter
  const locations = useMemo(() => {
    const locs = new Set(allInternships.map(i => i.location));
    return Array.from(locs);
  }, [allInternships]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="card-elevated p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Filter Internships</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Location</label>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote Only</SelectItem>
                {locations.filter(l => l !== "Remote").map(loc => (
                  <SelectItem key={loc} value={loc.toLowerCase()}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Platform</label>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                <SelectItem value="Internshala">Internshala</SelectItem>
                <SelectItem value="Company Careers">Company Careers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Badge variant="secondary" className="h-10 flex items-center gap-2">
              {isFinalYear ? (
                <>
                  <Briefcase className="h-4 w-4" />
                  Showing internships + full-time roles
                </>
              ) : (
                <>
                  <Briefcase className="h-4 w-4" />
                  Showing internships only
                </>
              )}
            </Badge>
          </div>
        </div>
      </div>

      {/* Internships by Platform */}
      {Object.entries(internshipsByPlatform).map(([platform, internships]) => {
        if (internships.length === 0 && platformFilter === "all") return null;
        if (platformFilter !== "all" && platformFilter !== platform) return null;
        
        return (
          <div key={platform} className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={platformColors[platform]}>
                {platformIcons[platform]}
                <span className="ml-1">{platform}</span>
              </Badge>
              <span className="text-sm text-muted-foreground">
                {internships.length} opportunities
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {internships.map((internship) => (
                <div key={internship.id} className="card-elevated p-5 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{internship.role}</h4>
                      {internship.company && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Building2 className="h-3.5 w-3.5" />
                          {internship.company}
                        </p>
                      )}
                    </div>
                    {internship.isRemote && (
                      <Badge variant="outline" className="text-xs">
                        <Wifi className="h-3 w-3 mr-1" />
                        Remote
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    {internship.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {internship.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full group"
                    onClick={() => window.open(internship.url, "_blank")}
                  >
                    Apply Now
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      {filteredInternships.length === 0 && (
        <div className="card-elevated p-12 text-center">
          <Briefcase className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            No internships found matching your filters. Try adjusting your filters.
          </p>
        </div>
      )}

      {/* Recruiter & Company Discovery */}
      {hiringInfo && (
        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Who is Hiring?
          </h3>
          
          {/* Companies */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hiringInfo.companies.map((company) => (
              <div key={company.name} className="card-elevated p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                    {company.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{company.name}</h4>
                    <p className="text-xs text-muted-foreground">{company.industry}</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(company.careers_url, "_blank")}
                >
                  View Careers Page
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Button>
              </div>
            ))}
          </div>
          
          {/* Recruiters */}
          <div className="card-elevated p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Contact Recruiters
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reach out to recruiters directly. Clicking "Contact" will open an email draft for you to customize and send.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {hiringInfo.recruiters.map((recruiter, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-secondary/20">
                  <div>
                    <p className="font-medium text-sm">{recruiter.role}</p>
                    <p className="text-xs text-muted-foreground">{recruiter.type}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      const email = generateRecruiterEmail(
                        recruiter.role,
                        hiringInfo.companies[0]?.name || "your company",
                        selectedCareer?.title || "Software Development",
                        studentProfile?.name || "Student"
                      );
                      window.location.href = email;
                    }}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
