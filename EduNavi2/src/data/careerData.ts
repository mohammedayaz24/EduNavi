export interface SubTopic {
  id: string;
  name: string;
  freeResource: { title: string; url: string; platform: string };
  paidResource: { title: string; url: string; platform: string };
  completed: boolean;
}

export interface Topic {
  id: string;
  name: string;
  subTopics: SubTopic[];
}

export interface Module {
  id: string;
  name: string;
  icon: string;
  topics: Topic[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  icon: string;
  salary: string;
  demand: "High" | "Medium" | "Growing";
  interests: string[];
  modules: Module[];
}

export interface InterestCategory {
  name: string;
  interests: string[];
}

export const interestCategories: InterestCategory[] = [
  {
    name: "Technology",
    interests: [
      "Web Development",
      "Mobile App Development",
      "Data Science",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Cybersecurity",
      "Blockchain",
      "Game Development",
      "IoT (Internet of Things)",
      "Embedded Systems",
      "Robotics",
      "AR/VR Development",
      "Database Management",
      "Network Engineering",
      "Software Testing",
      "API Development",
    ],
  },
  {
    name: "Design",
    interests: [
      "UI Design",
      "UX Design",
      "Graphic Design",
      "Motion Design",
      "Brand Design",
      "Illustration",
      "3D Design",
      "Product Design",
      "Interaction Design",
      "Design Systems",
      "Typography",
      "Color Theory",
      "Visual Design",
      "Icon Design",
      "Web Design",
      "Print Design",
    ],
  },
  {
    name: "Product & Business",
    interests: [
      "Product Management",
      "Business Analysis",
      "Project Management",
      "Agile Methodologies",
      "Startup Development",
      "Digital Marketing",
      "SEO/SEM",
      "Content Strategy",
      "Growth Hacking",
      "E-commerce",
      "Sales Strategy",
      "Customer Success",
      "Market Research",
      "Competitive Analysis",
      "Business Development",
      "Entrepreneurship",
    ],
  },
];

export const careers: Career[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Build beautiful, interactive user interfaces using modern web technologies",
    icon: "Monitor",
    salary: "$70K - $150K",
    demand: "High",
    interests: ["Web Development", "UI Design", "UX Design", "Web Design", "Interaction Design"],
    modules: [
      {
        id: "html",
        name: "HTML Fundamentals",
        icon: "FileCode",
        topics: [
          {
            id: "html-basics",
            name: "HTML Basics",
            subTopics: [
              {
                id: "html-structure",
                name: "Document Structure",
                freeResource: { title: "HTML Crash Course", url: "https://youtube.com/watch?v=UB1O30fR-EE", platform: "YouTube" },
                paidResource: { title: "HTML & CSS Bootcamp", url: "https://udemy.com/course/html-css-bootcamp", platform: "Udemy" },
                completed: false,
              },
              {
                id: "html-elements",
                name: "HTML Elements & Tags",
                freeResource: { title: "HTML Elements Tutorial", url: "https://youtube.com/watch?v=hu-q2zYwEYs", platform: "YouTube" },
                paidResource: { title: "Web Development Bootcamp", url: "https://udemy.com/course/web-development-bootcamp", platform: "Udemy" },
                completed: false,
              },
              {
                id: "html-attributes",
                name: "Attributes & Values",
                freeResource: { title: "HTML Attributes Guide", url: "https://youtube.com/watch?v=kUMe1FH4CHE", platform: "YouTube" },
                paidResource: { title: "Complete HTML Course", url: "https://coursera.org/learn/html", platform: "Coursera" },
                completed: false,
              },
            ],
          },
          {
            id: "html-forms",
            name: "Forms & Inputs",
            subTopics: [
              {
                id: "form-elements",
                name: "Form Elements",
                freeResource: { title: "HTML Forms Tutorial", url: "https://youtube.com/watch?v=fNcJuPIZ2WE", platform: "YouTube" },
                paidResource: { title: "Forms & Validation", url: "https://udemy.com/course/html-forms", platform: "Udemy" },
                completed: false,
              },
              {
                id: "form-validation",
                name: "Form Validation",
                freeResource: { title: "Form Validation Guide", url: "https://youtube.com/watch?v=In0nB0ABaUk", platform: "YouTube" },
                paidResource: { title: "Advanced Forms", url: "https://scrimba.com/learn/htmlforms", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
          {
            id: "html-semantic",
            name: "Semantic HTML",
            subTopics: [
              {
                id: "semantic-elements",
                name: "Semantic Elements",
                freeResource: { title: "Semantic HTML5", url: "https://youtube.com/watch?v=kGW8Al_cga4", platform: "YouTube" },
                paidResource: { title: "Modern HTML5", url: "https://udemy.com/course/modern-html5", platform: "Udemy" },
                completed: false,
              },
              {
                id: "accessibility",
                name: "Accessibility Basics",
                freeResource: { title: "Web Accessibility", url: "https://youtube.com/watch?v=z8xUCzToff8", platform: "YouTube" },
                paidResource: { title: "A11y Course", url: "https://coursera.org/learn/accessibility", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "css",
        name: "CSS Styling",
        icon: "Palette",
        topics: [
          {
            id: "css-basics",
            name: "CSS Fundamentals",
            subTopics: [
              {
                id: "css-selectors",
                name: "Selectors & Specificity",
                freeResource: { title: "CSS Selectors", url: "https://youtube.com/watch?v=1PnVor36_40", platform: "YouTube" },
                paidResource: { title: "CSS Complete Guide", url: "https://udemy.com/course/css-complete", platform: "Udemy" },
                completed: false,
              },
              {
                id: "css-colors",
                name: "Colors & Backgrounds",
                freeResource: { title: "CSS Colors Tutorial", url: "https://youtube.com/watch?v=0W6qz0-aDaM", platform: "YouTube" },
                paidResource: { title: "CSS Design Course", url: "https://scrimba.com/learn/cssdesign", platform: "Scrimba" },
                completed: false,
              },
              {
                id: "css-typography",
                name: "Typography",
                freeResource: { title: "CSS Typography", url: "https://youtube.com/watch?v=YXJpV8oy9oU", platform: "YouTube" },
                paidResource: { title: "Web Typography", url: "https://udemy.com/course/web-typography", platform: "Udemy" },
                completed: false,
              },
            ],
          },
          {
            id: "css-layout",
            name: "Layout Systems",
            subTopics: [
              {
                id: "css-flexbox",
                name: "Flexbox",
                freeResource: { title: "Flexbox Tutorial", url: "https://youtube.com/watch?v=JJSoEo8JSnc", platform: "YouTube" },
                paidResource: { title: "Flexbox Mastery", url: "https://udemy.com/course/flexbox-mastery", platform: "Udemy" },
                completed: false,
              },
              {
                id: "css-grid",
                name: "CSS Grid",
                freeResource: { title: "CSS Grid Course", url: "https://youtube.com/watch?v=9zBsdzdE4sM", platform: "YouTube" },
                paidResource: { title: "Grid Layout Course", url: "https://scrimba.com/learn/cssgrid", platform: "Scrimba" },
                completed: false,
              },
              {
                id: "css-responsive",
                name: "Responsive Design",
                freeResource: { title: "Responsive Web Design", url: "https://youtube.com/watch?v=srvUrASNj0s", platform: "YouTube" },
                paidResource: { title: "Responsive Design Course", url: "https://coursera.org/learn/responsive-design", platform: "Coursera" },
                completed: false,
              },
            ],
          },
          {
            id: "css-animations",
            name: "Animations & Effects",
            subTopics: [
              {
                id: "css-transitions",
                name: "Transitions",
                freeResource: { title: "CSS Transitions", url: "https://youtube.com/watch?v=Nloq6uzF8RQ", platform: "YouTube" },
                paidResource: { title: "CSS Animations Course", url: "https://udemy.com/course/css-animations", platform: "Udemy" },
                completed: false,
              },
              {
                id: "css-keyframes",
                name: "Keyframe Animations",
                freeResource: { title: "CSS Keyframes", url: "https://youtube.com/watch?v=f1WMjDx4snI", platform: "YouTube" },
                paidResource: { title: "Advanced CSS Animations", url: "https://scrimba.com/learn/cssanimations", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "Code",
        topics: [
          {
            id: "js-basics",
            name: "JavaScript Basics",
            subTopics: [
              {
                id: "js-variables",
                name: "Variables & Data Types",
                freeResource: { title: "JavaScript Basics", url: "https://youtube.com/watch?v=W6NZfCO5SIk", platform: "YouTube" },
                paidResource: { title: "JavaScript Bootcamp", url: "https://udemy.com/course/javascript-bootcamp", platform: "Udemy" },
                completed: false,
              },
              {
                id: "js-functions",
                name: "Functions",
                freeResource: { title: "JS Functions", url: "https://youtube.com/watch?v=N8ap4k_1QEQ", platform: "YouTube" },
                paidResource: { title: "JS Functions Deep Dive", url: "https://scrimba.com/learn/jsfunctions", platform: "Scrimba" },
                completed: false,
              },
              {
                id: "js-arrays",
                name: "Arrays & Objects",
                freeResource: { title: "JS Arrays & Objects", url: "https://youtube.com/watch?v=oigfaZ5ApsM", platform: "YouTube" },
                paidResource: { title: "Data Structures in JS", url: "https://udemy.com/course/js-data-structures", platform: "Udemy" },
                completed: false,
              },
            ],
          },
          {
            id: "js-dom",
            name: "DOM Manipulation",
            subTopics: [
              {
                id: "dom-basics",
                name: "DOM Basics",
                freeResource: { title: "DOM Tutorial", url: "https://youtube.com/watch?v=0ik6X4DJKCc", platform: "YouTube" },
                paidResource: { title: "DOM Mastery", url: "https://udemy.com/course/dom-mastery", platform: "Udemy" },
                completed: false,
              },
              {
                id: "dom-events",
                name: "Event Handling",
                freeResource: { title: "JS Events", url: "https://youtube.com/watch?v=YiOlaiscqDY", platform: "YouTube" },
                paidResource: { title: "Event-Driven JS", url: "https://scrimba.com/learn/events", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
          {
            id: "js-async",
            name: "Async JavaScript",
            subTopics: [
              {
                id: "js-promises",
                name: "Promises",
                freeResource: { title: "JS Promises", url: "https://youtube.com/watch?v=DHvZLI7Db8E", platform: "YouTube" },
                paidResource: { title: "Async JS Course", url: "https://udemy.com/course/async-javascript", platform: "Udemy" },
                completed: false,
              },
              {
                id: "js-async-await",
                name: "Async/Await",
                freeResource: { title: "Async/Await Tutorial", url: "https://youtube.com/watch?v=V_Kr9OSfDeU", platform: "YouTube" },
                paidResource: { title: "Modern Async JS", url: "https://coursera.org/learn/async-js", platform: "Coursera" },
                completed: false,
              },
              {
                id: "js-fetch",
                name: "Fetch API",
                freeResource: { title: "Fetch API Tutorial", url: "https://youtube.com/watch?v=cuEtnrL9-H0", platform: "YouTube" },
                paidResource: { title: "Working with APIs", url: "https://scrimba.com/learn/apis", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "react",
        name: "React",
        icon: "Atom",
        topics: [
          {
            id: "react-basics",
            name: "React Fundamentals",
            subTopics: [
              {
                id: "react-components",
                name: "Components & JSX",
                freeResource: { title: "React Crash Course", url: "https://youtube.com/watch?v=w7ejDZ8SWv8", platform: "YouTube" },
                paidResource: { title: "React Complete Guide", url: "https://udemy.com/course/react-complete-guide", platform: "Udemy" },
                completed: false,
              },
              {
                id: "react-props",
                name: "Props & State",
                freeResource: { title: "React Props & State", url: "https://youtube.com/watch?v=IYvD9oBCuJI", platform: "YouTube" },
                paidResource: { title: "React State Management", url: "https://scrimba.com/learn/reactstate", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
          {
            id: "react-hooks",
            name: "React Hooks",
            subTopics: [
              {
                id: "hooks-usestate",
                name: "useState & useEffect",
                freeResource: { title: "React Hooks Tutorial", url: "https://youtube.com/watch?v=O6P86uwfdR0", platform: "YouTube" },
                paidResource: { title: "React Hooks Course", url: "https://udemy.com/course/react-hooks", platform: "Udemy" },
                completed: false,
              },
              {
                id: "hooks-custom",
                name: "Custom Hooks",
                freeResource: { title: "Custom Hooks Guide", url: "https://youtube.com/watch?v=Jl4q2cccwf0", platform: "YouTube" },
                paidResource: { title: "Advanced React Hooks", url: "https://coursera.org/learn/advanced-react", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description: "Design and build server-side applications, APIs, and database systems",
    icon: "Server",
    salary: "$75K - $160K",
    demand: "High",
    interests: ["Web Development", "API Development", "Database Management", "Cloud Computing", "DevOps"],
    modules: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: "Terminal",
        topics: [
          {
            id: "node-basics",
            name: "Node.js Fundamentals",
            subTopics: [
              {
                id: "node-intro",
                name: "Introduction to Node.js",
                freeResource: { title: "Node.js Crash Course", url: "https://youtube.com/watch?v=fBNz5xF-Kx4", platform: "YouTube" },
                paidResource: { title: "Node.js Complete Guide", url: "https://udemy.com/course/nodejs-complete", platform: "Udemy" },
                completed: false,
              },
              {
                id: "node-modules",
                name: "Modules & NPM",
                freeResource: { title: "NPM Tutorial", url: "https://youtube.com/watch?v=jHDhaSSKmB0", platform: "YouTube" },
                paidResource: { title: "Node.js & NPM", url: "https://scrimba.com/learn/nodejs", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
          {
            id: "express",
            name: "Express.js",
            subTopics: [
              {
                id: "express-basics",
                name: "Express Fundamentals",
                freeResource: { title: "Express.js Tutorial", url: "https://youtube.com/watch?v=L72fhGm1tfE", platform: "YouTube" },
                paidResource: { title: "Express Complete Course", url: "https://udemy.com/course/expressjs", platform: "Udemy" },
                completed: false,
              },
              {
                id: "express-middleware",
                name: "Middleware",
                freeResource: { title: "Express Middleware", url: "https://youtube.com/watch?v=lY6icfhap2o", platform: "YouTube" },
                paidResource: { title: "Advanced Express", url: "https://coursera.org/learn/express", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "databases",
        name: "Databases",
        icon: "Database",
        topics: [
          {
            id: "sql",
            name: "SQL Databases",
            subTopics: [
              {
                id: "sql-basics",
                name: "SQL Fundamentals",
                freeResource: { title: "SQL Tutorial", url: "https://youtube.com/watch?v=HXV3zeQKqGY", platform: "YouTube" },
                paidResource: { title: "SQL Bootcamp", url: "https://udemy.com/course/sql-bootcamp", platform: "Udemy" },
                completed: false,
              },
              {
                id: "postgresql",
                name: "PostgreSQL",
                freeResource: { title: "PostgreSQL Course", url: "https://youtube.com/watch?v=qw--VYLpxG4", platform: "YouTube" },
                paidResource: { title: "PostgreSQL Mastery", url: "https://scrimba.com/learn/postgresql", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
          {
            id: "nosql",
            name: "NoSQL Databases",
            subTopics: [
              {
                id: "mongodb",
                name: "MongoDB",
                freeResource: { title: "MongoDB Crash Course", url: "https://youtube.com/watch?v=-56x56UppqQ", platform: "YouTube" },
                paidResource: { title: "MongoDB Complete", url: "https://udemy.com/course/mongodb-complete", platform: "Udemy" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    description: "Master both frontend and backend development to build complete applications",
    icon: "Layers",
    salary: "$80K - $170K",
    demand: "High",
    interests: ["Web Development", "API Development", "UI Design", "Database Management", "Cloud Computing"],
    modules: [
      {
        id: "fullstack-frontend",
        name: "Frontend Stack",
        icon: "Monitor",
        topics: [
          {
            id: "modern-frontend",
            name: "Modern Frontend",
            subTopics: [
              {
                id: "react-nextjs",
                name: "React & Next.js",
                freeResource: { title: "Next.js Tutorial", url: "https://youtube.com/watch?v=mTz0GXj8NN0", platform: "YouTube" },
                paidResource: { title: "Next.js Complete", url: "https://udemy.com/course/nextjs-complete", platform: "Udemy" },
                completed: false,
              },
              {
                id: "typescript",
                name: "TypeScript",
                freeResource: { title: "TypeScript Course", url: "https://youtube.com/watch?v=BwuLxPH8IDs", platform: "YouTube" },
                paidResource: { title: "TypeScript Pro", url: "https://scrimba.com/learn/typescript", platform: "Scrimba" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to drive business decisions using statistics and ML",
    icon: "BarChart3",
    salary: "$85K - $180K",
    demand: "High",
    interests: ["Data Science", "Machine Learning", "Artificial Intelligence", "Database Management"],
    modules: [
      {
        id: "python-ds",
        name: "Python for Data Science",
        icon: "Code",
        topics: [
          {
            id: "python-basics",
            name: "Python Fundamentals",
            subTopics: [
              {
                id: "python-intro",
                name: "Python Basics",
                freeResource: { title: "Python Tutorial", url: "https://youtube.com/watch?v=_uQrJ0TkZlc", platform: "YouTube" },
                paidResource: { title: "Python Bootcamp", url: "https://udemy.com/course/python-bootcamp", platform: "Udemy" },
                completed: false,
              },
              {
                id: "numpy-pandas",
                name: "NumPy & Pandas",
                freeResource: { title: "NumPy & Pandas", url: "https://youtube.com/watch?v=vmEHCJofslg", platform: "YouTube" },
                paidResource: { title: "Data Analysis with Python", url: "https://coursera.org/learn/data-analysis-python", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
      {
        id: "ml-fundamentals",
        name: "Machine Learning",
        icon: "Brain",
        topics: [
          {
            id: "ml-basics",
            name: "ML Fundamentals",
            subTopics: [
              {
                id: "supervised-learning",
                name: "Supervised Learning",
                freeResource: { title: "ML Crash Course", url: "https://youtube.com/watch?v=Gv9_4yMHFhI", platform: "YouTube" },
                paidResource: { title: "Machine Learning A-Z", url: "https://udemy.com/course/machinelearning", platform: "Udemy" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ui-designer",
    title: "UI Designer",
    description: "Create visually stunning and user-friendly interface designs",
    icon: "Figma",
    salary: "$60K - $130K",
    demand: "Growing",
    interests: ["UI Design", "Graphic Design", "Visual Design", "Typography", "Color Theory", "Icon Design"],
    modules: [
      {
        id: "design-fundamentals",
        name: "Design Fundamentals",
        icon: "Palette",
        topics: [
          {
            id: "design-principles",
            name: "Design Principles",
            subTopics: [
              {
                id: "color-theory",
                name: "Color Theory",
                freeResource: { title: "Color Theory Basics", url: "https://youtube.com/watch?v=L1CK9bE3H_s", platform: "YouTube" },
                paidResource: { title: "Color Design Course", url: "https://udemy.com/course/color-design", platform: "Udemy" },
                completed: false,
              },
              {
                id: "typography-design",
                name: "Typography",
                freeResource: { title: "Typography Fundamentals", url: "https://youtube.com/watch?v=sByzHoiYFX0", platform: "YouTube" },
                paidResource: { title: "Typography Mastery", url: "https://skillshare.com/classes/typography", platform: "Skillshare" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Design intuitive user experiences through research and prototyping",
    icon: "Users",
    salary: "$65K - $140K",
    demand: "High",
    interests: ["UX Design", "Interaction Design", "Product Design", "Design Systems", "Market Research"],
    modules: [
      {
        id: "ux-research",
        name: "UX Research",
        icon: "Search",
        topics: [
          {
            id: "user-research",
            name: "User Research Methods",
            subTopics: [
              {
                id: "interviews",
                name: "User Interviews",
                freeResource: { title: "User Research Guide", url: "https://youtube.com/watch?v=Ovj4hFxko7c", platform: "YouTube" },
                paidResource: { title: "UX Research Course", url: "https://coursera.org/learn/ux-research", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Lead product strategy and guide teams to build successful products",
    icon: "Target",
    salary: "$90K - $200K",
    demand: "High",
    interests: ["Product Management", "Agile Methodologies", "Business Analysis", "Market Research", "Startup Development"],
    modules: [
      {
        id: "pm-fundamentals",
        name: "PM Fundamentals",
        icon: "ClipboardList",
        topics: [
          {
            id: "product-strategy",
            name: "Product Strategy",
            subTopics: [
              {
                id: "roadmapping",
                name: "Product Roadmapping",
                freeResource: { title: "Product Roadmap Guide", url: "https://youtube.com/watch?v=AEG6jGpNLT0", platform: "YouTube" },
                paidResource: { title: "Product Management Course", url: "https://udemy.com/course/product-management", platform: "Udemy" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer",
    description: "Build native and cross-platform mobile applications",
    icon: "Smartphone",
    salary: "$75K - $160K",
    demand: "High",
    interests: ["Mobile App Development", "UI Design", "UX Design"],
    modules: [
      {
        id: "react-native",
        name: "React Native",
        icon: "Smartphone",
        topics: [
          {
            id: "rn-basics",
            name: "React Native Basics",
            subTopics: [
              {
                id: "rn-intro",
                name: "Getting Started",
                freeResource: { title: "React Native Tutorial", url: "https://youtube.com/watch?v=0-S5a0eXPoc", platform: "YouTube" },
                paidResource: { title: "React Native Complete", url: "https://udemy.com/course/react-native-complete", platform: "Udemy" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description: "Bridge development and operations with automation and CI/CD",
    icon: "GitBranch",
    salary: "$80K - $170K",
    demand: "High",
    interests: ["DevOps", "Cloud Computing", "Network Engineering", "Cybersecurity"],
    modules: [
      {
        id: "devops-fundamentals",
        name: "DevOps Fundamentals",
        icon: "Settings",
        topics: [
          {
            id: "cicd",
            name: "CI/CD Pipelines",
            subTopics: [
              {
                id: "github-actions",
                name: "GitHub Actions",
                freeResource: { title: "GitHub Actions Tutorial", url: "https://youtube.com/watch?v=R8_veQiYBjI", platform: "YouTube" },
                paidResource: { title: "DevOps Complete", url: "https://udemy.com/course/devops-complete", platform: "Udemy" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect systems and data from cyber threats and vulnerabilities",
    icon: "Shield",
    salary: "$70K - $150K",
    demand: "Growing",
    interests: ["Cybersecurity", "Network Engineering"],
    modules: [
      {
        id: "security-fundamentals",
        name: "Security Fundamentals",
        icon: "Lock",
        topics: [
          {
            id: "security-basics",
            name: "Security Basics",
            subTopics: [
              {
                id: "security-intro",
                name: "Introduction to Cybersecurity",
                freeResource: { title: "Cybersecurity Basics", url: "https://youtube.com/watch?v=bPVaOlJ6ln0", platform: "YouTube" },
                paidResource: { title: "Cybersecurity Course", url: "https://coursera.org/learn/cybersecurity", platform: "Coursera" },
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getRecommendedCareers(selectedInterests: string[]): Career[] {
  if (selectedInterests.length === 0) return [];
  
  return careers.filter(career => 
    career.interests.some(interest => selectedInterests.includes(interest))
  ).sort((a, b) => {
    const aMatches = a.interests.filter(i => selectedInterests.includes(i)).length;
    const bMatches = b.interests.filter(i => selectedInterests.includes(i)).length;
    return bMatches - aMatches;
  });
}

export function calculateProgress(modules: Module[]): number {
  let totalSubTopics = 0;
  let completedSubTopics = 0;
  
  modules.forEach(module => {
    module.topics.forEach(topic => {
      topic.subTopics.forEach(subTopic => {
        totalSubTopics++;
        if (subTopic.completed) completedSubTopics++;
      });
    });
  });
  
  return totalSubTopics === 0 ? 0 : Math.round((completedSubTopics / totalSubTopics) * 100);
}

export function calculateModuleProgress(module: Module): number {
  let totalSubTopics = 0;
  let completedSubTopics = 0;
  
  module.topics.forEach(topic => {
    topic.subTopics.forEach(subTopic => {
      totalSubTopics++;
      if (subTopic.completed) completedSubTopics++;
    });
  });
  
  return totalSubTopics === 0 ? 0 : Math.round((completedSubTopics / totalSubTopics) * 100);
}

export function calculateTopicProgress(topic: Topic): number {
  const total = topic.subTopics.length;
  const completed = topic.subTopics.filter(st => st.completed).length;
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}
