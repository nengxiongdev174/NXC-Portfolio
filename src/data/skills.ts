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
      { name: "HTML / CSS / Bootstrap", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "🔧",
    color: "#3b82f6",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Prisma ORM", level: 82 },
      { name: "Python (Flask)", level: 80 },
      { name: "Navicat / Database Tools", level: 85 },
      { name: "Postman / Swagger API", level: 88 },
    ],
  },
  {
    category: "DevOps, Cloud & AI Tools",
    icon: "🚀",
    color: "#f97316",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "PM2 / Server Deployment", level: 85 },
      { name: "Vercel / Cloudflare", level: 80 },
      { name: "AWS EC2 / Nginx", level: 75 },
      { name: "Docker", level: 60 },
      { name: "AI Tools (Cursor, Claude, Antigravity, Copilot)", level: 95 },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "#10b981",
    skills: [
      { name: "React Native", level: 70 },
      { name: "Expo", level: 70 },
      { name: "Android Studio", level: 60 },
    ],
  },
  {
    category: "Design",
    icon: "🎨",
    color: "#ec4899",
    skills: [
      { name: "Figma (UI/UX Design)", level: 90 },
      { name: "Canva", level: 85 },
      { name: "Photoshop", level: 70 },
      { name: "Adobe XD", level: 65 },
    ],
  },
];
