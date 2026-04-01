import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a dedicated Backend Java Developer specializing in Spring Boot, with 3 years of professional experience building scalable and secure backend systems. I excel in designing RESTful APIs, microservices, database optimization, and integrating with various databases like MySQL, PostgreSQL, and MongoDB.
Additionally, with 5 years of frontend experience using technologies such as React, HTML/CSS/JavaScript, I bring full-stack capabilities to deliver end-to-end solutions that ensure seamless user experiences.
Passionate about clean code, performance optimization, and solving real-world problems, I aim to contribute to innovative teams building robust applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 (Oct - Dec)",
    role: "Full-Stack Developer (Freelance)",
    company: "Yayasan Manbatul Ulama",
    description: "Mengembangkan landing page dan sistem informasi yayasan dari awal, mencakup frontend responsif serta backend management data. Bertanggung jawab atas desain UI/UX, pengelolaan konten, fitur administrasi, dan integrasi database untuk kebutuhan operasional yayasan.",
    technologies: ["React.js", "Tailwind CSS", "Laravel", "PostgreSQL", "MySQL", "PHP"],
  },
  {
    year: "2025 (Feb - Apr)",
    role: "Java Developer (Freelance Remote)",
    company: "PT. Obormas Mitra Elektrindo",
    description: "Mengembangkan dan mengelola integrasi sistem Java dengan perangkat biometric, termasuk fingerprint scanner, passport scanner, dan face recognition. Memastikan komunikasi yang reliable dan stabil antara hardware biometric dengan backend system.",
    technologies: ["Java", "System Integration", "Biometric Devices", "Hardware Communication", "REST API"],
  },
  {
    year: "2023 - Present",
    role: "Software Engineer (Backend Focus)",
    company: "PT Sinarmas Multiartha TBK - Danasaham",
    description: "Merancang, mengembangkan, dan mengoptimasi fitur RESTful API serta layanan integrasi API eksternal untuk sistem perbankan. Bekerja dengan arsitektur microservices menggunakan Spring Cloud, Eureka, dan Kafka untuk handling event-driven. Mengelola database hybrid (MongoDB & PostgreSQL), caching dengan Redis, serta implementasi security dan CI/CD pipeline.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "Kafka", "Redis", "MongoDB", "PostgreSQL", "Jenkins", "Git", "Docker"],
  },
  {
    year: "2022 - 2023",
    role: "Backend Java Developer",
    company: "PT Harmonix Teknologi Peentar",
    description: "Membangun dan mengoptimasi RESTful API menggunakan Spring Boot, termasuk autentikasi JWT, optimasi performa database, dan integrasi Redis/Kafka. Berkolaborasi dengan tim cross-functional untuk delivery fitur tepat waktu serta mengelola CI/CD dengan Jenkins dan containerization Docker.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "JWT", "Jenkins", "GitLab", "Docker"],
  },
  {
    year: "2016 - 2022",
    role: "Fullstack Developer",
    company: "MAN Sukoharjo, Jawa Tengah",
    description: "Mengembangkan sistem informasi berbasis web untuk madrasah, termasuk sistem informasi madrasah, PPDB online, dan sistem korespondensi digital menggunakan PHP CodeIgniter. Mengelola hosting, domain, maintenance website sekolah (WordPress), serta administrasi dokumen dan website.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "WordPress", "HTML", "CSS", "JavaScript"],
    projects: [
      "Sistem Informasi Madrasah Berbasis Web",
      "Sistem Penerimaan Peserta Didik Baru (PPDB) Online",
      "Sistem Korespondensi Digital"
    ]
  },
];

export const PROJECTS = [
  {
    title: "Danasaham - Platform Investasi Saham",
    image: project1,
    description:
      "Backend sistem investasi saham perbankan dengan microservices, integrasi E-KYC, ISO 8583 transaksi banking, real-time WebSocket, dan SFTP. Deploy skalabel menggunakan Docker & Kubernetes.",
    technologies: ["Spring Boot", "Spring Cloud", "Eureka", "Redis", "MongoDB", "Kafka", "Jenkins", "ISO 8583", "E-KYC", "WebSocket", "SFTP", "Docker", "Kubernetes"],
    link: "https://www.danasaham.co.id"
  },
  {
    title: "Kimia Farma Mobile - Backend Aplikasi Kesehatan",
    image: project2,
    description:
      "Backend microservices untuk aplikasi mobile Kimia Farma, dengan integrasi real-time Kafka, caching Redis, dan CI/CD otomatis untuk performa tinggi.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Redis", "Kafka", "Docker", "Jenkins", "GitLab", "Kubernetes"],
    link: "Internal Project - PT Harmonix Teknologi (Peentar)"
  },
  {
    title: "Tanhana - Platform Media Informasi Berita",
    image: project4,
    description:
      "Membangun dan maintain website media berita nasional dengan fitur breaking news, artikel terbaru, berita utama, dan cerpen. Custom theme & plugin untuk optimasi konten dan SEO.",
    technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://tanhana.com"
  },
  {
    title: "Sistem Informasi Yayasan Manbatul Ulama",
    image: project5,
    description:
      "Full-stack development untuk website resmi yayasan: landing page modern, sistem manajemen informasi (program, donasi, kegiatan), dashboard admin, dan integrasi database.",
    technologies: ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
    link: "https://manbatululamaa.com" // jika sudah live full; jika masih dev, bisa diganti "Ongoing Project"
  },
  {
    title: "Sistem Informasi Madrasah (PPDB Online & Korespondensi)",
    image: project3,
    description:
      "Pengembangan sistem web terintegrasi untuk madrasah: informasi sekolah, penerimaan siswa baru online (PPDB), dan manajemen korespondensi digital.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Sukoharjo Makmur",
  phoneNo: "087887661979",
  email: "rahmatamri123@gmail.com",
};
