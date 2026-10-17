export interface Project {
  id: number;
  title: string;
  titleEn: string;
  titleTh: string;
  titleLo: string;
  description: string;
  descriptionEn: string;
  descriptionTh: string;
  descriptionLo: string;
  tags: string[];
  category: "Web" | "Mobile" | "Design";
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
    titleEn: "NX CREATIONS Landing",
    titleTh: "NX CREATIONS เว็บไซต์หลัก",
    titleLo: "ເວັບໄຊຫຼັກ NX CREATIONS",
    description: "Flagship landing page for NX CREATIONS featuring a cutting-edge cyberpunk aesthetic with fluid, high-performance animations.",
    descriptionEn: "Flagship landing page for NX CREATIONS featuring a cutting-edge cyberpunk aesthetic with fluid, high-performance animations.",
    descriptionTh: "เว็บไซต์หลักของ NX CREATIONS ที่ออกแบบในสไตล์ Cyberpunk พร้อมแอนิเมชันลื่นไหลระดับพรีเมียม",
    descriptionLo: "ເວັບໄຊລີ້ງດິ້ງຂອງ NX CREATIONS ທີ່ອອກແບບດ້ວຍ cyberpunk aesthetic ພ້ອມ animations ລະດັບ premium",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Web",
    gradient: "from-purple-600/20 to-blue-600/20",
    accent: "#9333ea",
    year: "2025",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    titleEn: "E-Commerce Platform",
    titleTh: "ระบบอีคอมเมิร์ซครบวงจร",
    titleLo: "ລະບົບຊື້ຂາຍອອນລາຍ",
    description: "End-to-end e-commerce solution featuring dynamic product catalogs, interactive cart management, and secure checkout.",
    descriptionEn: "End-to-end e-commerce solution featuring dynamic product catalogs, interactive cart management, and secure checkout.",
    descriptionTh: "แพลตฟอร์มอีคอมเมิร์ซครบวงจร ตั้งแต่ระบบแสดงสินค้า จัดการตะกร้า ไปจนถึงระบบชำระเงินที่ปลอดภัย",
    descriptionLo: "ແພລດຟໍມ e-commerce ຄົບຄ້ວນ ຕັ້ງແຕ່ໜ້າສະແດງສິນຄ້າ, ລະບົບຕະກ້າ, ຈົນເຖິງການຊຳລະ",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    gradient: "from-blue-600/20 to-cyan-600/20",
    accent: "#3b82f6",
    year: "2025",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    titleEn: "Mobile Banking App",
    titleTh: "แอปพลิเคชันธนาคารดิจิทัล",
    titleLo: "ແອັບທະນາຄານ",
    description: "Intuitive digital banking application built with seamless UX workflows tailored for users of all generations.",
    descriptionEn: "Intuitive digital banking application built with seamless UX workflows tailored for users of all generations.",
    descriptionTh: "แอปพลิเคชันธนาคารดิจิทัลที่ใช้งานง่าย เน้นการออกแบบ UX ที่ลื่นไหลสำหรับผู้ใช้ทุกวัย",
    descriptionLo: "ແອັບພລິເຄຊັນທະນາຄານດິຈິຕອນ ທີ່ໃຊ້ງ່າຍ ໂດຍເນັ້ນ UX ສຳລັບຜູ້ໃຊ້ທຸກໄວ",
    tags: ["React Native", "TypeScript", "Expo", "Node.js"],
    category: "Mobile",
    gradient: "from-emerald-600/20 to-blue-600/20",
    accent: "#10b981",
    year: "2024",
  },
  {
    id: 4,
    title: "Brand Identity System",
    titleEn: "Brand Identity System",
    titleTh: "ระบบ Brand Identity",
    titleLo: "ລະບົບ Brand Identity",
    description: "Full-spectrum branding and design system for tech startups, including logos, typography guidelines, and design tokens.",
    descriptionEn: "Full-spectrum branding and design system for tech startups, including logos, typography guidelines, and design tokens.",
    descriptionTh: "การออกแบบ Brand Identity ครบวงจรสำหรับสตาร์ทอัปชั้นนำ ตั้งแต่โลโก้ไปจนถึง Design System ที่สมบูรณ์แบบ",
    descriptionLo: "ການອອກແບບ Brand Identity ຄົບຊຸດ ສຳລັບທຸລະກິດ startup ຊັ້ນນຳ ຕັ້ງແຕ່ logo ຈົນ style guide",
    tags: ["Figma", "Adobe Illustrator", "Branding", "UI/UX"],
    category: "Design",
    gradient: "from-pink-600/20 to-purple-600/20",
    accent: "#ec4899",
    year: "2024",
  },
  {
    id: 5,
    title: "AI Analytics Dashboard",
    titleEn: "AI Analytics Dashboard",
    titleTh: "แดชบอร์ดวิเคราะห์ข้อมูล AI",
    titleLo: "Dashboard ວິເຄາະຂໍ້ມູນ AI",
    description: "Real-time AI-powered analytics dashboard delivering predictive insights and interactive visualizations for business decisions.",
    descriptionEn: "Real-time AI-powered analytics dashboard delivering predictive insights and interactive visualizations for business decisions.",
    descriptionTh: "แดชบอร์ดวิเคราะห์ข้อมูลแบบ Real-time ขับเคลื่อนด้วย AI ช่วยยกระดับการตัดสินใจทางธุรกิจได้อย่างแม่นยำ",
    descriptionLo: "Dashboard ສຳລັບວິເຄາະຂໍ້ມູນ real-time ດ້ວຍ AI ຊ່ວຍໃຫ້ຕັດສິນໃຈທຸລະກິດໄດ້ຍ່ຽງ",
    tags: ["React", "Python", "FastAPI", "Chart.js"],
    category: "Web",
    gradient: "from-orange-600/20 to-red-600/20",
    accent: "#f97316",
    year: "2024",
  },
  {
    id: 6,
    title: "Restaurant Website",
    titleEn: "Restaurant Website",
    titleTh: "เว็บไซต์ร้านอาหารระดับพรีเมียม",
    titleLo: "ເວັບໄຊຮ້ານອາຫານ",
    description: "Sophisticated culinary website featuring online reservation management, interactive menus, and smooth ordering.",
    descriptionEn: "Sophisticated culinary website featuring online reservation management, interactive menus, and smooth ordering.",
    descriptionTh: "เว็บไซต์ร้านอาหารระดับพรีเมียม พร้อมระบบจองโต๊ะออนไลน์และเมนูดิจิทัลที่สวยงามใช้งานง่าย",
    descriptionLo: "ເວັບໄຊຮ້ານອາຫານລະດັບ premium ພ້ອມລະບົບຈອງໂຕະ online ແລະ menu ດິຈິຕອນ",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Web",
    gradient: "from-yellow-600/20 to-orange-600/20",
    accent: "#eab308",
    year: "2023",
  },
];

export const projectCategories = ["all", "web", "mobile", "design"] as const;
export type ProjectCategoryKey = typeof projectCategories[number];
