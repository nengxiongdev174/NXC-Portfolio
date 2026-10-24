export interface ExperienceItem {
  id: number;
  roleEn: string;
  roleTh: string;
  roleLo: string;
  company: string;
  companyTh?: string;
  companyLo?: string;
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
    roleEn: "Full-Stack Developer",
    roleTh: "Full-Stack Developer",
    roleLo: "Full-Stack Developer",
    company: "CSC Complex Center",
    companyTh: "บริษัท CSC Complex Center",
    companyLo: "ບໍລິສັດ CSC Complex Center",
    location: "Vientiane, Laos",
    period: "2025 - 2026",
    periodType: "current",
    descriptionEn: "Designed, developed, and maintained end-to-end enterprise web applications and internal productivity platforms.",
    descriptionTh: "ออกแบบ พัฒนา และดูแลระบบเว็บแอปพลิเคชันแบบ End-to-End ครอบคลุมระบบบริหารงานภายในองค์กรกว่า 10+ โปรเจกต์",
    descriptionLo: "ອອກແບບ, ພັດທະນາ ແລະ ດູແລລະບົບເວັບແອັບພລິເຄຊັນແບບ End-to-End ຄອບຄຸມຫຼາຍກວ່າ 10+ ໂປຣເຈັກພາຍໃນອົງກອນ",
    highlightsEn: [
      "Designed, developed, and maintained end-to-end web applications (System Analysis, UX/UI, Frontend & Backend).",
      "Built and integrated APIs, managed source code with Git/GitHub, and deployed systems to production servers with PM2.",
      "Developed more than 10 internal projects, such as a meeting room booking system, a Helpdesk system, a point-of-sale (POS) system, and more.",
      "Used AI-assisted tools for coding and code review, reducing development time, and wrote system documentation / skill files (skill.md).",
    ],
    highlightsTh: [
      "ออกแบบ พัฒนา และดูแลระบบเว็บแอปพลิเคชันแบบ End-to-End (System Analysis, UX/UI, Frontend & Backend)",
      "พัฒนาและเชื่อมต่อ API, บริหารจัดการ Source Code ด้วย Git/GitHub และ Deploy ระบบขึ้น Production Server ด้วย PM2",
      "พัฒนามากกว่า 10 โปรเจกต์ที่ใช้งานภายในองค์กร เช่น ระบบจองห้องประชุม, ระบบ Helpdesk, ระบบจัดการการขาย (POS) และอื่น ๆ",
      "ใช้ AI-Assisted Tools ช่วยเขียนโค้ด, รีวิวโค้ด (Code Review), ลดเวลาในการพัฒนา และจัดทำ System Documentation / Skill Files (skill.md)",
    ],
    highlightsLo: [
      "ອອກແບບ, ພັດທະນາ ແລະ ດູແລລະບົບເວັບແອັບພລິເຄຊັນແບບ End-to-End (System Analysis, UX/UI, Frontend & Backend).",
      "ພັດທະນາ ແລະ ເຊື່ອມຕໍ່ API, ບໍລິຫານ Source Code ດ້ວຍ Git/GitHub ແລະ Deploy ລະບົບຂຶ້ນ Production Server ດ້ວຍ PM2.",
      "ພັດທະນາຫຼາຍກວ່າ 10 ໂປຣເຈັກທີ່ໃຊ້ງານພາຍໃນອົງກອນ ເຊັ່ນ: ລະບົບຈອງຫ້ອງປະຊຸມ, ລະບົບ Helpdesk, ລະບົບຈັດການການຂາຍ (POS) ແລະ ອື່ນໆ.",
      "ນຳໃຊ້ AI-Assisted Tools ຊ່ວຍໃນການຂຽນໂຄ້ດ, ຮີວິວໂຄ້ດ (Code Review), ຫຼຸດຜ່ອນເວລາໃນການພັດທະນາ ແລະ ຈັດການຂຽນ System Documentation / Skill Files (skill.md).",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PM2", "Git/GitHub", "POS", "AI Tools"],
    accentColor: "#9333ea",
  },
  {
    id: 2,
    roleEn: "Full-Stack Developer & UX/UI Designer",
    roleTh: "Full-Stack Developer & UX/UI Designer",
    roleLo: "Full-Stack Developer & UX/UI Designer",
    company: "Odien Mall",
    companyTh: "บริษัท โอเดียน มอลล์ (Odien Mall)",
    companyLo: "ບໍລິສັດ ໂອດ້ຽນ ມໍລ໌ (Odien Mall)",
    location: "Vientiane, Laos",
    period: "2024 - 2025",
    periodType: "past",
    descriptionEn: "Analyzed requirements, designed intuitive UX/UI, and engineered full-stack web applications and RESTful APIs.",
    descriptionTh: "วิเคราะห์ความต้องการ ออกแบบ UX/UI ที่ใช้งานง่าย และพัฒนาเว็บแอปพลิเคชันทั้ง Frontend และ Backend RESTful API ด้วย Python และ PostgreSQL",
    descriptionLo: "ວິເຄາະຄວາມຕ້ອງການ, ອອກແບບ UX/UI ທີ່ໃຊ້ງານງ່າຍ ແລະ ພັດທະນາເວັບແອັບພລິເຄຊັນທັງ Frontend ແລະ Backend RESTful API ດ້ວຍ Python ແລະ PostgreSQL",
    highlightsEn: [
      "Analyzed requirements and designed the UX/UI of web applications for internal use, focusing on ease of use and meeting user needs.",
      "Developed the frontend with HTML, CSS, Bootstrap, and JavaScript to match the design.",
      "Developed the backend and RESTful APIs with Python (Flask) and managed PostgreSQL databases; coordinated with the team, fixed bugs, and improved system stability.",
    ],
    highlightsTh: [
      "วิเคราะห์ความต้องการและออกแบบ UX/UI ของเว็บแอปพลิเคชัน เน้นใช้งานง่าย และตอบสนองความต้องการของผู้ใช้ในองค์กร",
      "พัฒนา Frontend ด้วย HTML, CSS, Bootstrap, JavaScript ให้ตรงตามการออกแบบ",
      "พัฒนา Backend และ RESTful API ด้วย Python (Flask) พร้อมจัดการฐานข้อมูลด้วย PostgreSQL ประสานงานกับทีม แก้ไข Bug และปรับปรุงระบบให้ทำงานได้เสถียร",
    ],
    highlightsLo: [
      "ວິເຄາະຄວາມຕ້ອງການ ແລະ ອອກແບບ UX/UI ຂອງເວັບແອັບພລິເຄຊັນ ເນັ້ນໃຊ້ງານງ່າຍ ແລະ ຕອບສະໜອງຄວາມຕ້ອງການຂອງຜູ້ໃຊ້ໃນອົງກອນ.",
      "ພັດທະນາ Frontend ດ້ວຍ HTML, CSS, Bootstrap, JavaScript ໃຫ້ຕົງຕາມການອອກແບບ.",
      "ພັດທະນາ Backend ແລະ RESTful API ດ້ວຍ Python (Flask) ພ້ອມຈັດການຖານຂໍ້ມູນດ້ວຍ PostgreSQL, ປະສານງານກັບທີມ, ແກ້ໄຂ Bug ແລະ ປັບປຸງລະບົບໃຫ້ເຮັດວຽກໄດ້ສະຖຽນລະພາບ.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "PostgreSQL", "RESTful APIs", "UX/UI"],
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    roleEn: "Frontend Developer Intern",
    roleTh: "Frontend Developer (นักศึกษาฝึกงาน)",
    roleLo: "Frontend Developer (ນັກສຶກສາຝຶກງານ)",
    company: "Odien Mall",
    companyTh: "บริษัท โอเดียน มอลล์ (Odien Mall)",
    companyLo: "ບໍລິສັດ ໂອດ້ຽນ ມໍລ໌ (Odien Mall)",
    location: "Vientiane, Laos",
    period: "2023",
    periodType: "past",
    descriptionEn: "Interned as a Frontend Developer, developing user interfaces with HTML, CSS, JavaScript, and Bootstrap. Exceptional performance led directly to a full-time role upon graduation.",
    descriptionTh: "ฝึกงานในตำแหน่ง Frontend Developer พัฒนาหน้าเว็บและ User Interface ด้วย HTML, CSS, JavaScript และ Bootstrap มุ่งมั่นพัฒนาจนได้รับการบรรจุเข้าทำงานประจำทันทีหลังสำเร็จการศึกษา",
    descriptionLo: "ຝຶກງານໃນຕຳແໜ່ງ Frontend Developer ພັດທະນາໜ້າເວັບ ແລະ User Interface ດ້ວຍ HTML, CSS, JavaScript ແລະ Bootstrap ຕັ້ງໃຈພັດທະນາຈົນໄດ້ຮັບການບັນຈຸເຂົ້າເຮັດວຽກປະຈຳທັນທີຫຼັງຮຽນຈົບ",
    highlightsEn: [
      "Designed and developed responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Collaborated with the development team to improve UI layouts, cross-device responsiveness, and styling consistency.",
      "Assisted in testing user interface components and fixing UI bugs across different browsers.",
      "Demonstrated strong learning agility and dedication, resulting in an immediate full-time employment offer as Full-Stack Developer & UX/UI Designer upon graduation.",
    ],
    highlightsTh: [
      "ออกแบบและพัฒนาหน้าเว็บแบบ Responsive โดยใช้ HTML5, CSS3, JavaScript และ Bootstrap",
      "ประสานงานกับทีมพัฒนาเพื่อปรับปรุง UI Layout ความลื่นไหล และการจัดวางให้แสดงผลได้อย่างสวยงามบนทุกอุปกรณ์",
      "มีส่วนร่วมในการทดสอบการใช้งาน UI และแก้ไขปัญหาการแสดงผล (UI Bug Fixes) บนเบราว์เซอร์ต่างๆ",
      "แสดงผลงานและความมุ่งมั่นในการเรียนรู้อย่างโดดเด่น จนได้รับความไว้วางใจและบรรจุเข้าทำงานประจำทันทีหลังสำเร็จการศึกษา",
    ],
    highlightsLo: [
      "ອອກແບບ ແລະ ພັດທະນາໜ້າເວັບແບບ Responsive ໂດຍນຳໃຊ້ HTML5, CSS3, JavaScript ແລະ Bootstrap.",
      "ປະສານງານກັບທີມພັດທະນາເພື່ອປັບປຸງ UI Layout ແລະ ຄວາມຖືກຕ້ອງໃນການສະແດງຜົນໃນທຸກອຸປະກອນ.",
      "ມີສ່ວນຮ່ວມໃນການທົດສອບ UI ແລະ ແກ້ໄຂບັນຫາການສະແດງຜົນ (UI Bugs) ໃນບຣາວເຊີຕ່າງໆ.",
      "ສະແດງໃຫ້ເຫັນເຖິງຄວາມຕັ້ງໃຈ ແລະ ຜົນງານທີ່ໂດດເດັ່ນ ຈົນໄດ້ຮັບຄວາມໄວ້ວາງໃຈບັນຈຸເຂົ້າເຮັດວຽກປະຈຳທັນທີຫຼັງຮຽນຈົບ.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
    accentColor: "#10b981",
  },
];
