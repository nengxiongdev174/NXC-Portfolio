export interface ExperienceItem {
  id: number;
  roleEn: string;
  roleTh: string;
  roleLo: string;
  company: string;
  location: string;
  period: string;
  periodType: "current" | "past";
  descriptionEn: string;
  descriptionTh: string;
  descriptionLo: string;
  highlightsEn: string[];
  highlightsTh: string[];
  highlightsLo: string[];
  technologies: string[];
  accentColor: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    roleEn: "Founder & Lead Developer",
    roleTh: "ผู้ก่อตั้งและหัวหน้านักพัฒนา",
    roleLo: "ຜູ້ກໍ່ຕັ້ງ ແລະ Lead Developer",
    company: "NX CREATIONS",
    location: "Vientiane, Laos",
    period: "2024 - Present",
    periodType: "current",
    descriptionEn: "Founded and leading a modern digital agency specializing in high-performance web applications, brand identities, and custom digital software.",
    descriptionTh: "ก่อตั้งและนำทีมดิจิทัลสตูดิโอ พัฒนาเว็บแอปพลิเคชันประสิทธิภาพสูง ออกแบบ Brand Identity และซอฟต์แวร์ตามความต้องการของลูกค้า",
    descriptionLo: "ກໍ່ຕັ້ງ ແລະ ນຳທີມ digital studio ພັດທະນາ web application ຄຸນນະພາບສູງ, ອອກແບບ Brand Identity ແລະ digital software",
    highlightsEn: [
      "Architected 10+ scalable web & mobile projects with Next.js & React Native",
      "Directed end-to-end design systems and UI/UX engineering for client startups",
      "Streamlined deployment pipelines using Docker, Vercel, and CI/CD automation",
    ],
    highlightsTh: [
      "วางโครงสร้างและพัฒนาเว็บและโมบายแอปกว่า 10+ โปรเจกต์ด้วย Next.js และ React Native",
      "ออกแบบ Design System และ UI/UX ครบวงจรสำหรับธุรกิจและสตาร์ทอัป",
      "เพิ่มประสิทธิภาพระบบ Deployment ด้วย Docker, Vercel และระบบอัตโนมัติ CI/CD",
    ],
    highlightsLo: [
      "ວາງໂຄງສ້າງ ແລະ ພັດທະນາ web & mobile apps 10+ ໂປຣເຈັກດ້ວຍ Next.js ແລະ React Native",
      "ອອກແບບ Design System ແລະ UI/UX ຄົບວົງຈອນສຳລັບທຸລະກິດ ແລະ startup",
      "ເພີ່ມປະສິດທິພາບລະບົບ Deployment ດ້ວຍ Docker, Vercel ແລະ CI/CD",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL"],
    accentColor: "#9333ea",
  },
  {
    id: 2,
    roleEn: "Full-Stack Web Developer",
    roleTh: "นักพัฒนาเว็บ Full-Stack",
    roleLo: "ນັກພັດທະນາ Full-Stack Web",
    company: "Freelance & Digital Solutions",
    location: "Remote",
    period: "2023 - 2024",
    periodType: "past",
    descriptionEn: "Delivered customized web solutions for e-commerce, reservation platforms, and internal business management dashboards.",
    descriptionTh: "ส่งมอบโซลูชันเว็บตามสั่งสำหรับระบบอีคอมเมิร์ซ ระบบจองออนไลน์ และแดชบอร์ดจัดการธุรกิจภายในองค์กร",
    descriptionLo: "ສົ່ງມອບ web solutions ຕາມສັ່ງ ສຳລັບລະບົບ e-commerce, ລະບົບຈອງ online ແລະ dashboard ຈັດການທຸລະກິດ",
    highlightsEn: [
      "Built responsive e-commerce web applications with Stripe and local payment gateways",
      "Developed secure RESTful and GraphQL APIs handling authenticated transactions",
      "Optimized frontend performance, achieving 95+ Google Lighthouse scores",
    ],
    highlightsTh: [
      "พัฒนาเว็บอีคอมเมิร์ซที่รองรับทุกหน้าจอ พร้อมเชื่อมต่อระบบชำระเงิน Stripe และเกตเวย์ท้องถิ่น",
      "พัฒนา RESTful APIs ที่ปลอดภัยสำหรับระบบยืนยันตัวตนและการทำธุรกรรม",
      "ปรับแต่งความเร็วหน้าเว็บจนได้คะแนน Google Lighthouse 95+ ทุกโปรเจกต์",
    ],
    highlightsLo: [
      "ພັດທະນາ e-commerce web apps ທີ່ຮອງຮັບທຸກໜ້າຈໍ ພ້ອມເຊື່ອມຕໍ່ລະບົບຊຳລະເງິນ",
      "ພັດທະນາ RESTful APIs ທີ່ມີຄວາມປອດໄພສູງສຳລັບການເຮັດທຸລະກຳ",
      "ປັບແຕ່ງຄວາມໄວໜ້າເວັບຈົນໄດ້ຄະແນນ Google Lighthouse 95+",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "REST APIs"],
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    roleEn: "Frontend Developer & UI/UX Designer",
    roleTh: "นักพัฒนา Frontend & นักออกแบบ UI/UX",
    roleLo: "Frontend Developer & UI Designer",
    company: "Creative Tech Projects",
    location: "Vientiane, Laos",
    period: "2022 - 2023",
    periodType: "past",
    descriptionEn: "Focused on crafting high-fidelity interactive prototypes in Figma and translating them into pixel-perfect, accessible React components.",
    descriptionTh: "มุ่งเน้นการสร้างสรรค์ Interactive Prototype ความละเอียดสูงใน Figma และนำมาพัฒนาเป็น React Component ที่แม่นยำระดับพิกเซล",
    descriptionLo: "ເນັ້ນການສ້າງ interactive prototypes ໃນ Figma ແລະ ນຳມາຂຽນເປັນ React components ທີ່ສວຍງາມ ແລະ ໃຊ້ງານງ່າຍ",
    highlightsEn: [
      "Designed full component design systems and wireframes in Figma",
      "Implemented smooth micro-interactions, dark/light themes, and CSS animations",
      "Collaborated with cross-functional teams to refine user journeys and accessibility",
    ],
    highlightsTh: [
      "ออกแบบ Component Design System และโครงร่างหน้าจอ (Wireframes) ใน Figma",
      "พัฒนา Micro-interactions, ธีมมืด/สว่าง และ CSS Animations ที่ลื่นไหล",
      "ทำงานร่วมกับทีมเพื่อปรับปรุงประสบการณ์ผู้ใช้งานและรองรับ Accessibility",
    ],
    highlightsLo: [
      "ອອກແບບ Component Design System ແລະ Wireframes ໃນ Figma",
      "ພັດທະນາ micro-interactions ແລະ CSS animations ທີ່ລື່ນໄຫຼ",
      "ຮ່ວມມືກັບທີມເພື່ອປັບປຸງ user journey ແລະ accessibility",
    ],
    technologies: ["JavaScript", "React", "HTML5/CSS3", "Figma", "Git", "Sass"],
    accentColor: "#10b981",
  },
];
