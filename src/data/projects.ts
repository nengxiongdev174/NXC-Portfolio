export interface Project {
  id: number;
  title: string;
  titleLao: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  accent: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NX CREATIONS Landing",
    titleLao: "ເວັບໄຊຫຼັກ NX CREATIONS",
    description: "ເວັບໄຊລີ້ງດິ້ງຂອງ NX CREATIONS ທີ່ອອກແບບດ້ວຍ cyberpunk aesthetic ພ້ອມ animations ລະດັບ premium",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Web",
    gradient: "from-purple-600/20 to-blue-600/20",
    accent: "#9333ea",
    year: "2025",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    titleLao: "ລະບົບຊື້ຂາຍອອນລາຍ",
    description: "ແພລດຟໍມ e-commerce ຄົບຄ້ວນ ຕັ້ງແຕ່ໜ້າສະແດງສິນຄ້າ, ລະບົບຕະກ້າ, ຈົນເຖິງການຊຳລະ",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    gradient: "from-blue-600/20 to-cyan-600/20",
    accent: "#3b82f6",
    year: "2025",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    titleLao: "ແອັບທະນາຄານ",
    description: "ແອັບພລິເຄຊັນທະນາຄານດິຈິຕອນ ທີ່ໃຊ້ງ່າຍ ໂດຍເນັ້ນ UX ສຳລັບຜູ້ໃຊ້ທຸກໄວ",
    tags: ["React Native", "TypeScript", "Expo", "Node.js"],
    category: "Mobile",
    gradient: "from-emerald-600/20 to-blue-600/20",
    accent: "#10b981",
    year: "2024",
  },
  {
    id: 4,
    title: "Brand Identity System",
    titleLao: "ລະບົບ Brand Identity",
    description: "ການອອກແບບ Brand Identity ຄົບຊຸດ ສຳລັບທຸລະກິດ startup ຊັ້ນນຳ ຕັ້ງແຕ່ logo ຈົນ style guide",
    tags: ["Figma", "Adobe Illustrator", "Branding", "UI/UX"],
    category: "Design",
    gradient: "from-pink-600/20 to-purple-600/20",
    accent: "#ec4899",
    year: "2024",
  },
  {
    id: 5,
    title: "AI Analytics Dashboard",
    titleLao: "Dashboard ວິເຄາະຂໍ້ມູນ AI",
    description: "Dashboard ສຳລັບວິເຄາະຂໍ້ມູນ real-time ດ້ວຍ AI ຊ່ວຍໃຫ້ຕັດສິນໃຈທຸລະກິດໄດ້ຍ່ຽງ",
    tags: ["React", "Python", "FastAPI", "Chart.js"],
    category: "Web",
    gradient: "from-orange-600/20 to-red-600/20",
    accent: "#f97316",
    year: "2024",
  },
  {
    id: 6,
    title: "Restaurant Website",
    titleLao: "ເວັບໄຊຮ້ານອາຫານ",
    description: "ເວັບໄຊຮ້ານອາຫານລະດັບ premium ພ້ອມລະບົບຈອງໂຕະ online ແລະ menu ດິຈິຕອນ",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Web",
    gradient: "from-yellow-600/20 to-orange-600/20",
    accent: "#eab308",
    year: "2023",
  },
];

export const categories = ["ທັງໝົດ", "Web", "Mobile", "Design"] as const;
export type Category = typeof categories[number];
