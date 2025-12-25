export interface Internship {
  id: string;
  role: string;
  skills: string[];
  platform: "LinkedIn" | "Internshala" | "Company Careers";
  company?: string;
  location: string;
  isRemote: boolean;
  forFinalYear: boolean;
  url: string;
}

export interface HiringCompany {
  name: string;
  industry: string;
  careers_url: string;
}

export interface Recruiter {
  role: string;
  type: string;
}

export interface CareerHiringInfo {
  careerId: string;
  companies: HiringCompany[];
  recruiters: Recruiter[];
  internships: Internship[];
}

// Generate real search URLs
export const generateLinkedInUrl = (role: string, skills: string[]): string => {
  const query = encodeURIComponent(`${role} ${skills.slice(0, 2).join(" ")}`);
  return `https://www.linkedin.com/jobs/search/?keywords=${query}&f_E=1`;
};

export const generateInternshalaUrl = (role: string): string => {
  const query = encodeURIComponent(role.toLowerCase().replace(/\s+/g, "-"));
  return `https://internshala.com/internships/${query}-internship`;
};

export const generateYouTubeSearchUrl = (topic: string): string => {
  const query = encodeURIComponent(`${topic} tutorial`);
  return `https://www.youtube.com/results?search_query=${query}`;
};

export const generateUdemySearchUrl = (topic: string): string => {
  const query = encodeURIComponent(topic);
  return `https://www.udemy.com/courses/search/?q=${query}`;
};

export const generateCourseraSearchUrl = (topic: string): string => {
  const query = encodeURIComponent(topic);
  return `https://www.coursera.org/search?query=${query}`;
};

export const generateScrimbaSearchUrl = (topic: string): string => {
  const query = encodeURIComponent(topic.toLowerCase().replace(/\s+/g, "-"));
  return `https://scrimba.com/learn/${query}`;
};

// Career-specific hiring data
export const careerHiringData: CareerHiringInfo[] = [
  {
    careerId: "frontend-developer",
    companies: [
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Meta", industry: "Technology", careers_url: "https://www.metacareers.com" },
      { name: "Microsoft", industry: "Technology", careers_url: "https://careers.microsoft.com" },
      { name: "Amazon", industry: "E-commerce", careers_url: "https://www.amazon.jobs" },
      { name: "Netflix", industry: "Entertainment", careers_url: "https://jobs.netflix.com" },
      { name: "Airbnb", industry: "Travel", careers_url: "https://careers.airbnb.com" },
    ],
    recruiters: [
      { role: "Technical Recruiter", type: "Full-time hiring" },
      { role: "Engineering HR Manager", type: "Team building" },
      { role: "Talent Acquisition Specialist", type: "Campus hiring" },
    ],
    internships: [
      {
        id: "fe-intern-1",
        role: "Frontend Developer Intern",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Frontend Developer Intern", ["React", "JavaScript"]),
      },
      {
        id: "fe-intern-2",
        role: "React Developer Intern",
        skills: ["React", "TypeScript", "Redux"],
        platform: "Internshala",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("React Developer"),
      },
      {
        id: "fe-intern-3",
        role: "Web Developer Intern",
        skills: ["HTML", "CSS", "JavaScript"],
        platform: "Company Careers",
        company: "Flipkart",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.flipkartcareers.com/",
      },
      {
        id: "fe-intern-4",
        role: "UI Developer Intern",
        skills: ["Vue.js", "CSS", "Figma"],
        platform: "LinkedIn",
        location: "Mumbai",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("UI Developer Intern", ["Vue.js", "CSS"]),
      },
    ],
  },
  {
    careerId: "backend-developer",
    companies: [
      { name: "Amazon", industry: "Technology", careers_url: "https://www.amazon.jobs" },
      { name: "Microsoft", industry: "Technology", careers_url: "https://careers.microsoft.com" },
      { name: "Uber", industry: "Transportation", careers_url: "https://www.uber.com/us/en/careers/" },
      { name: "Stripe", industry: "Fintech", careers_url: "https://stripe.com/jobs" },
      { name: "Shopify", industry: "E-commerce", careers_url: "https://www.shopify.com/careers" },
    ],
    recruiters: [
      { role: "Backend Engineering Recruiter", type: "Technical hiring" },
      { role: "Senior Technical Recruiter", type: "Senior roles" },
      { role: "HR Business Partner", type: "Team scaling" },
    ],
    internships: [
      {
        id: "be-intern-1",
        role: "Backend Developer Intern",
        skills: ["Node.js", "Python", "SQL"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Backend Developer Intern", ["Node.js", "Python"]),
      },
      {
        id: "be-intern-2",
        role: "Node.js Developer Intern",
        skills: ["Node.js", "Express", "MongoDB"],
        platform: "Internshala",
        location: "Delhi",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Node.js Developer"),
      },
      {
        id: "be-intern-3",
        role: "Software Engineering Intern",
        skills: ["Java", "Spring Boot", "MySQL"],
        platform: "Company Careers",
        company: "Infosys",
        location: "Pune",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.infosys.com/careers/",
      },
    ],
  },
  {
    careerId: "fullstack-developer",
    companies: [
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Meta", industry: "Technology", careers_url: "https://www.metacareers.com" },
      { name: "Atlassian", industry: "Software", careers_url: "https://www.atlassian.com/company/careers" },
      { name: "Spotify", industry: "Entertainment", careers_url: "https://www.lifeatspotify.com" },
      { name: "Slack", industry: "Communication", careers_url: "https://slack.com/careers" },
    ],
    recruiters: [
      { role: "Full Stack Recruiter", type: "Engineering teams" },
      { role: "Technical Talent Partner", type: "Product teams" },
      { role: "Engineering Manager", type: "Direct hiring" },
    ],
    internships: [
      {
        id: "fs-intern-1",
        role: "Full Stack Developer Intern",
        skills: ["React", "Node.js", "PostgreSQL"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Full Stack Developer Intern", ["React", "Node.js"]),
      },
      {
        id: "fs-intern-2",
        role: "MERN Stack Developer Intern",
        skills: ["MongoDB", "Express", "React", "Node.js"],
        platform: "Internshala",
        location: "Hyderabad",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("MERN Stack Developer"),
      },
      {
        id: "fs-intern-3",
        role: "Software Development Intern",
        skills: ["Python", "Django", "React"],
        platform: "Company Careers",
        company: "Razorpay",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: true,
        url: "https://razorpay.com/jobs/",
      },
    ],
  },
  {
    careerId: "data-scientist",
    companies: [
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Meta", industry: "Technology", careers_url: "https://www.metacareers.com" },
      { name: "Netflix", industry: "Entertainment", careers_url: "https://jobs.netflix.com" },
      { name: "LinkedIn", industry: "Social Media", careers_url: "https://careers.linkedin.com" },
      { name: "Uber", industry: "Transportation", careers_url: "https://www.uber.com/us/en/careers/" },
    ],
    recruiters: [
      { role: "Data Science Recruiter", type: "ML/AI teams" },
      { role: "Analytics Talent Partner", type: "Data teams" },
      { role: "Research HR Manager", type: "Research roles" },
    ],
    internships: [
      {
        id: "ds-intern-1",
        role: "Data Science Intern",
        skills: ["Python", "Machine Learning", "SQL"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Data Science Intern", ["Python", "Machine Learning"]),
      },
      {
        id: "ds-intern-2",
        role: "Machine Learning Intern",
        skills: ["Python", "TensorFlow", "Deep Learning"],
        platform: "Internshala",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Machine Learning"),
      },
      {
        id: "ds-intern-3",
        role: "Data Analyst Intern",
        skills: ["Excel", "SQL", "Tableau"],
        platform: "Company Careers",
        company: "Deloitte",
        location: "Mumbai",
        isRemote: false,
        forFinalYear: true,
        url: "https://www2.deloitte.com/us/en/careers/students.html",
      },
    ],
  },
  {
    careerId: "ui-designer",
    companies: [
      { name: "Apple", industry: "Technology", careers_url: "https://www.apple.com/careers/" },
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Figma", industry: "Design Tools", careers_url: "https://www.figma.com/careers/" },
      { name: "Canva", industry: "Design Tools", careers_url: "https://www.canva.com/careers/" },
      { name: "Adobe", industry: "Software", careers_url: "https://www.adobe.com/careers.html" },
    ],
    recruiters: [
      { role: "Design Recruiter", type: "Creative teams" },
      { role: "Creative Talent Partner", type: "Design hiring" },
      { role: "Design HR Manager", type: "Design org" },
    ],
    internships: [
      {
        id: "ui-intern-1",
        role: "UI Designer Intern",
        skills: ["Figma", "Adobe XD", "Sketch"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("UI Designer Intern", ["Figma", "Adobe XD"]),
      },
      {
        id: "ui-intern-2",
        role: "Graphic Design Intern",
        skills: ["Illustrator", "Photoshop", "InDesign"],
        platform: "Internshala",
        location: "Delhi",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Graphic Design"),
      },
      {
        id: "ui-intern-3",
        role: "Visual Designer Intern",
        skills: ["Figma", "UI Design", "Branding"],
        platform: "Company Careers",
        company: "Swiggy",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: true,
        url: "https://careers.swiggy.com/",
      },
    ],
  },
  {
    careerId: "ux-designer",
    companies: [
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Microsoft", industry: "Technology", careers_url: "https://careers.microsoft.com" },
      { name: "IBM", industry: "Technology", careers_url: "https://www.ibm.com/careers/" },
      { name: "Salesforce", industry: "Software", careers_url: "https://www.salesforce.com/company/careers/" },
      { name: "Oracle", industry: "Software", careers_url: "https://www.oracle.com/careers/" },
    ],
    recruiters: [
      { role: "UX Design Recruiter", type: "Product teams" },
      { role: "Research Talent Partner", type: "UX Research" },
      { role: "Experience Design HR", type: "Design ops" },
    ],
    internships: [
      {
        id: "ux-intern-1",
        role: "UX Designer Intern",
        skills: ["User Research", "Wireframing", "Prototyping"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("UX Designer Intern", ["User Research", "Figma"]),
      },
      {
        id: "ux-intern-2",
        role: "UX Research Intern",
        skills: ["User Testing", "Surveys", "Analytics"],
        platform: "Internshala",
        location: "Mumbai",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("UX Research"),
      },
      {
        id: "ux-intern-3",
        role: "Product Design Intern",
        skills: ["Figma", "Design Thinking", "Prototyping"],
        platform: "Company Careers",
        company: "Zomato",
        location: "Gurgaon",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.zomato.com/careers",
      },
    ],
  },
  {
    careerId: "product-manager",
    companies: [
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Meta", industry: "Technology", careers_url: "https://www.metacareers.com" },
      { name: "Amazon", industry: "E-commerce", careers_url: "https://www.amazon.jobs" },
      { name: "Microsoft", industry: "Technology", careers_url: "https://careers.microsoft.com" },
      { name: "Airbnb", industry: "Travel", careers_url: "https://careers.airbnb.com" },
    ],
    recruiters: [
      { role: "Product Recruiter", type: "PM hiring" },
      { role: "Product Talent Partner", type: "Product org" },
      { role: "MBA Recruiting Lead", type: "Campus hiring" },
    ],
    internships: [
      {
        id: "pm-intern-1",
        role: "Product Management Intern",
        skills: ["Product Strategy", "Data Analysis", "Communication"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Product Management Intern", ["Product Strategy"]),
      },
      {
        id: "pm-intern-2",
        role: "Associate Product Manager Intern",
        skills: ["Roadmapping", "Agile", "SQL"],
        platform: "Internshala",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Product Management"),
      },
      {
        id: "pm-intern-3",
        role: "Business Analyst Intern",
        skills: ["Excel", "SQL", "Presentation"],
        platform: "Company Careers",
        company: "Paytm",
        location: "Noida",
        isRemote: false,
        forFinalYear: true,
        url: "https://paytm.com/careers/",
      },
    ],
  },
  {
    careerId: "mobile-developer",
    companies: [
      { name: "Apple", industry: "Technology", careers_url: "https://www.apple.com/careers/" },
      { name: "Google", industry: "Technology", careers_url: "https://careers.google.com" },
      { name: "Meta", industry: "Technology", careers_url: "https://www.metacareers.com" },
      { name: "Uber", industry: "Transportation", careers_url: "https://www.uber.com/us/en/careers/" },
      { name: "Spotify", industry: "Entertainment", careers_url: "https://www.lifeatspotify.com" },
    ],
    recruiters: [
      { role: "Mobile Engineering Recruiter", type: "iOS/Android teams" },
      { role: "App Development Partner", type: "Mobile org" },
      { role: "Engineering HR Lead", type: "Technical hiring" },
    ],
    internships: [
      {
        id: "mob-intern-1",
        role: "Mobile Developer Intern",
        skills: ["React Native", "Swift", "Kotlin"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Mobile Developer Intern", ["React Native", "Swift"]),
      },
      {
        id: "mob-intern-2",
        role: "Android Developer Intern",
        skills: ["Kotlin", "Java", "Android SDK"],
        platform: "Internshala",
        location: "Pune",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Android Developer"),
      },
      {
        id: "mob-intern-3",
        role: "iOS Developer Intern",
        skills: ["Swift", "SwiftUI", "Xcode"],
        platform: "Company Careers",
        company: "PhonePe",
        location: "Bangalore",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.phonepe.com/careers/",
      },
    ],
  },
  {
    careerId: "devops-engineer",
    companies: [
      { name: "Amazon", industry: "Cloud", careers_url: "https://www.amazon.jobs" },
      { name: "Google", industry: "Cloud", careers_url: "https://careers.google.com" },
      { name: "Microsoft", industry: "Cloud", careers_url: "https://careers.microsoft.com" },
      { name: "HashiCorp", industry: "DevOps Tools", careers_url: "https://www.hashicorp.com/careers" },
      { name: "GitLab", industry: "DevOps", careers_url: "https://about.gitlab.com/jobs/" },
    ],
    recruiters: [
      { role: "DevOps Recruiter", type: "Infrastructure teams" },
      { role: "Cloud Talent Partner", type: "Platform hiring" },
      { role: "SRE HR Manager", type: "Reliability teams" },
    ],
    internships: [
      {
        id: "devops-intern-1",
        role: "DevOps Engineer Intern",
        skills: ["AWS", "Docker", "Kubernetes"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("DevOps Engineer Intern", ["AWS", "Docker"]),
      },
      {
        id: "devops-intern-2",
        role: "Cloud Engineer Intern",
        skills: ["Azure", "Terraform", "CI/CD"],
        platform: "Internshala",
        location: "Hyderabad",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Cloud Engineer"),
      },
      {
        id: "devops-intern-3",
        role: "Site Reliability Intern",
        skills: ["Linux", "Python", "Monitoring"],
        platform: "Company Careers",
        company: "Freshworks",
        location: "Chennai",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.freshworks.com/company/careers/",
      },
    ],
  },
  {
    careerId: "cybersecurity-analyst",
    companies: [
      { name: "CrowdStrike", industry: "Security", careers_url: "https://www.crowdstrike.com/careers/" },
      { name: "Palo Alto Networks", industry: "Security", careers_url: "https://www.paloaltonetworks.com/company/careers" },
      { name: "IBM", industry: "Technology", careers_url: "https://www.ibm.com/careers/" },
      { name: "Cisco", industry: "Networking", careers_url: "https://www.cisco.com/c/en/us/about/careers.html" },
      { name: "Deloitte", industry: "Consulting", careers_url: "https://www2.deloitte.com/us/en/careers.html" },
    ],
    recruiters: [
      { role: "Security Recruiter", type: "Security teams" },
      { role: "Cybersecurity Talent Partner", type: "InfoSec hiring" },
      { role: "Risk & Security HR", type: "Compliance roles" },
    ],
    internships: [
      {
        id: "sec-intern-1",
        role: "Cybersecurity Intern",
        skills: ["Network Security", "SIEM", "Penetration Testing"],
        platform: "LinkedIn",
        location: "Remote",
        isRemote: true,
        forFinalYear: false,
        url: generateLinkedInUrl("Cybersecurity Intern", ["Network Security", "SIEM"]),
      },
      {
        id: "sec-intern-2",
        role: "Security Analyst Intern",
        skills: ["SOC", "Incident Response", "Malware Analysis"],
        platform: "Internshala",
        location: "Delhi",
        isRemote: false,
        forFinalYear: false,
        url: generateInternshalaUrl("Security Analyst"),
      },
      {
        id: "sec-intern-3",
        role: "Information Security Intern",
        skills: ["Vulnerability Assessment", "Compliance", "Risk Analysis"],
        platform: "Company Careers",
        company: "TCS",
        location: "Mumbai",
        isRemote: false,
        forFinalYear: true,
        url: "https://www.tcs.com/careers",
      },
    ],
  },
];

export const getHiringInfoForCareer = (careerId: string): CareerHiringInfo | undefined => {
  return careerHiringData.find(info => info.careerId === careerId);
};

export const generateRecruiterEmail = (
  recruiterRole: string,
  companyName: string,
  careerTitle: string,
  studentName: string
): string => {
  const subject = encodeURIComponent(`Application for ${careerTitle} Opportunity at ${companyName}`);
  const body = encodeURIComponent(
`Dear ${recruiterRole},

I hope this email finds you well. My name is ${studentName}, and I am writing to express my interest in ${careerTitle} opportunities at ${companyName}.

I am a student actively building my skills and exploring career paths in this field. I would love to learn more about potential internship or entry-level positions at your organization.

I have attached my resume for your reference. I would greatly appreciate the opportunity to discuss how my skills and enthusiasm could contribute to your team.

Thank you for your time and consideration. I look forward to hearing from you.

Best regards,
${studentName}`
  );
  
  return `mailto:?subject=${subject}&body=${body}`;
};

// Get internships filtered by profile
export const getFilteredInternships = (
  internships: Internship[],
  isFinalYear: boolean,
  isRemotePreferred: boolean,
  locationFilter: string
): Internship[] => {
  return internships.filter(internship => {
    // Final year students can see all, others can't see final-year-only roles
    if (!isFinalYear && internship.forFinalYear) return false;
    
    // Apply remote filter
    if (isRemotePreferred && !internship.isRemote) return false;
    
    // Apply location filter
    if (locationFilter && locationFilter !== "all") {
      if (locationFilter === "remote" && !internship.isRemote) return false;
      if (locationFilter !== "remote" && internship.location.toLowerCase() !== locationFilter.toLowerCase()) return false;
    }
    
    return true;
  });
};
