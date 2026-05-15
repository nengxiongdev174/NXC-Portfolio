export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "⚡",
    color: "#9333ea",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    color: "#3b82f6",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "#10b981",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
      { name: "Flutter", level: 65 },
    ],
  },
  {
    category: "Design",
    icon: "🎨",
    color: "#ec4899",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 80 },
      { name: "Adobe Illustrator", level: 75 },
      { name: "UI/UX Design", level: 90 },
    ],
  },
  {
    category: "DevOps",
    icon: "🚀",
    color: "#f97316",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "AWS", level: 70 },
    ],
  },
];
