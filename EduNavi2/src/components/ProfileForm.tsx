import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Building2, GraduationCap, Calendar, ArrowRight } from "lucide-react";

export function ProfileForm() {
  const { setStudentProfile, setCurrentStep } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    major: "",
    graduationYear: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentProfile(formData);
    setCurrentStep("interests");
  };

  const currentYear = new Date().getFullYear();
  const graduationYears = Array.from({ length: 6 }, (_, i) => (currentYear + i).toString());

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Create Your Profile</h1>
          <p className="text-muted-foreground">
            Tell us about yourself so we can personalize your experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="college" className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              College/University
            </Label>
            <Input
              id="college"
              placeholder="Enter your college name"
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="major" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              Major/Field of Study
            </Label>
            <Input
              id="major"
              placeholder="e.g., Computer Science"
              value={formData.major}
              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Expected Graduation Year
            </Label>
            <Select
              value={formData.graduationYear}
              onValueChange={(value) => setFormData({ ...formData, graduationYear: value })}
              required
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {graduationYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full group">
            Continue to Interests
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </div>
  );
}
