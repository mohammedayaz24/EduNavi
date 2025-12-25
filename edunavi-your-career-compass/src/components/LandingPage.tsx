import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Target, 
  BookOpen, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Award
} from "lucide-react";

export function LandingPage() {
  const { setCurrentStep } = useApp();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              AI-Powered Career Guidance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Navigate Your Future with{" "}
              <span className="gradient-text">Confidence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Discover your perfect career path with personalized recommendations, 
              structured learning roadmaps, and curated resources tailored to your interests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => setCurrentStep("profile")}
                className="group"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our comprehensive platform guides you from exploration to expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Smart Career Matching"
              description="Select your interests and get AI-powered career recommendations that align with your passions and skills."
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Structured Roadmaps"
              description="Follow detailed learning paths with modules, topics, and sub-topics organized for optimal skill development."
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Progress Tracking"
              description="Monitor your growth with real-time progress bars at every level — from sub-topics to overall career progress."
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Curated Resources"
              description="Access hand-picked free and premium learning resources from top platforms like YouTube, Udemy, and Coursera."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="50+ Interest Areas"
              description="Explore diverse fields across Technology, Design, and Business to find your perfect career match."
            />
            <FeatureCard
              icon={<Award className="h-6 w-6" />}
              title="Internship Insights"
              description="Discover relevant internship opportunities and prepare yourself for real-world experience."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="50+" label="Areas of Interest" />
            <StatCard number="10+" label="Career Paths" />
            <StatCard number="100+" label="Learning Resources" />
            <StatCard number="Free" label="To Get Started" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Discover Your Path?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have found their dream careers through EduNavi.
            </p>
            <Button 
              size="xl" 
              onClick={() => setCurrentStep("profile")}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Get Started — It's Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="gradient-bg rounded-lg p-1.5">
                <Compass className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">EduNavi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EduNavi. Empowering students to navigate their futures.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card-elevated p-6">
      <div className="gradient-bg w-12 h-12 rounded-xl flex items-center justify-center text-primary-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{number}</p>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}
