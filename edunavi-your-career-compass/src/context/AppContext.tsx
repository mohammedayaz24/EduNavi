import React, { createContext, useContext, useState, ReactNode } from "react";
import { Career, careers as initialCareers, getRecommendedCareers } from "@/data/careerData";

interface StudentProfile {
  name: string;
  email: string;
  college: string;
  major: string;
  graduationYear: string;
}

interface AppContextType {
  currentStep: "landing" | "profile" | "interests" | "careers" | "roadmap";
  setCurrentStep: (step: "landing" | "profile" | "interests" | "careers" | "roadmap") => void;
  studentProfile: StudentProfile | null;
  setStudentProfile: (profile: StudentProfile) => void;
  selectedInterests: string[];
  setSelectedInterests: (interests: string[]) => void;
  toggleInterest: (interest: string) => void;
  recommendedCareers: Career[];
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career | null) => void;
  toggleSubTopicComplete: (moduleId: string, topicId: string, subTopicId: string) => void;
  careers: Career[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<"landing" | "profile" | "interests" | "careers" | "roadmap">("landing");
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [careers, setCareers] = useState<Career[]>(initialCareers);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(interest)) {
        return prev.filter(i => i !== interest);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, interest];
    });
  };

  const recommendedCareers = getRecommendedCareers(selectedInterests);

  const toggleSubTopicComplete = (moduleId: string, topicId: string, subTopicId: string) => {
    setCareers(prevCareers => 
      prevCareers.map(career => ({
        ...career,
        modules: career.modules.map(module => 
          module.id === moduleId
            ? {
                ...module,
                topics: module.topics.map(topic =>
                  topic.id === topicId
                    ? {
                        ...topic,
                        subTopics: topic.subTopics.map(subTopic =>
                          subTopic.id === subTopicId
                            ? { ...subTopic, completed: !subTopic.completed }
                            : subTopic
                        ),
                      }
                    : topic
                ),
              }
            : module
        ),
      }))
    );

    if (selectedCareer) {
      setSelectedCareer(prev => {
        if (!prev) return null;
        return {
          ...prev,
          modules: prev.modules.map(module =>
            module.id === moduleId
              ? {
                  ...module,
                  topics: module.topics.map(topic =>
                    topic.id === topicId
                      ? {
                          ...topic,
                          subTopics: topic.subTopics.map(subTopic =>
                            subTopic.id === subTopicId
                              ? { ...subTopic, completed: !subTopic.completed }
                              : subTopic
                          ),
                        }
                      : topic
                  ),
                }
              : module
          ),
        };
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        studentProfile,
        setStudentProfile,
        selectedInterests,
        setSelectedInterests,
        toggleInterest,
        recommendedCareers,
        selectedCareer,
        setSelectedCareer,
        toggleSubTopicComplete,
        careers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
