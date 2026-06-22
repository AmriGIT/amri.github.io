import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `Saya adalah Backend Java Developer yang berfokus pada Spring Boot, dengan pengalaman profesional {{BACKEND_EXPERIENCE}} dalam membangun sistem backend yang aman, stabil, dan mudah dikembangkan. Saya terbiasa merancang RESTful API, microservices, optimasi database, serta integrasi dengan MySQL, PostgreSQL, dan MongoDB.
Selain backend, saya juga memiliki pengalaman frontend menggunakan React, HTML, CSS, dan JavaScript, sehingga dapat membantu membangun solusi end-to-end dari sisi tampilan sampai layanan backend.
Saya menyukai kode yang bersih, performa aplikasi yang baik, dan penyelesaian masalah nyata melalui sistem yang bermanfaat untuk pengguna.`;

export const ABOUT_TEXT = `Saya adalah developer yang berpengalaman membangun aplikasi web, backend API, dashboard, dan sistem informasi. Saya terbiasa bekerja dengan Java Spring Boot, React, PHP, Laravel, CodeIgniter, MySQL, PostgreSQL, MongoDB, Redis, Docker, serta deployment ke hosting atau server. Dalam setiap proyek, saya berusaha membuat solusi yang rapi, mudah digunakan, mudah dirawat, dan sesuai kebutuhan bisnis.`;

export const EXPERIENCES = [
  {
    year: "2023 - Sekarang",
    role: "Software Engineer (Fokus Backend)",
    company: "PT Sinarmas Multiartha TBK - Danasaham",
    description: "Merancang, mengembangkan, dan mengoptimasi fitur RESTful API serta layanan integrasi API eksternal untuk sistem perbankan. Bekerja dengan arsitektur microservices menggunakan Spring Cloud, Eureka, dan Kafka untuk handling event-driven. Mengelola database hybrid (MongoDB & PostgreSQL), caching dengan Redis, serta implementasi security dan CI/CD pipeline.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "Kafka", "Redis", "MongoDB", "PostgreSQL", "Jenkins", "Git", "Docker"],
  },
  {
    year: "2026",
    role: "Web Developer Outsourcing",
    company: "CV DOIT Persada Indonesia",
    description: "Bekerja sebagai pekerja lepas untuk jasa pembuatan website bagi klien, mencakup pengembangan aplikasi web berbasis PHP CodeIgniter 4 dengan arsitektur HMVC, integrasi database, serta penyesuaian fitur sesuai kebutuhan bisnis klien.",
    technologies: ["PHP", "CodeIgniter 4", "HMVC", "MySQL", "Pengembangan Web", "Freelance"],
  },
  {
    year: "2025 (Okt - Des)",
    role: "Full-Stack Developer (Pekerja Lepas)",
    company: "Yayasan Manbatul Ulama",
    description: "Mengembangkan landing page dan sistem informasi yayasan dari awal, mencakup frontend responsif serta backend management data. Bertanggung jawab atas desain UI/UX, pengelolaan konten, fitur administrasi, dan integrasi database untuk kebutuhan operasional yayasan.",
    technologies: ["React.js", "Tailwind CSS", "Laravel", "PostgreSQL", "MySQL", "PHP"],
  },
  {
    year: "2025 (Feb - Apr)",
    role: "Java Developer (Pekerja Lepas Remote)",
    company: "PT. Obormas Mitra Elektrindo",
    description: "Mengembangkan dan mengelola integrasi sistem Java dengan perangkat biometric, termasuk fingerprint scanner, passport scanner, dan face recognition. Memastikan komunikasi yang reliable dan stabil antara hardware biometric dengan backend system.",
    technologies: ["Java", "System Integration", "Biometric Devices", "Hardware Communication", "REST API"],
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
      "Sistem Korespondensi Digital",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Danasaham - Platform Investasi Saham",
    image: project1,
    description:
      "Backend sistem investasi saham perbankan dengan microservices, integrasi E-KYC, ISO 8583 untuk transaksi banking, WebSocket real-time, dan SFTP. Deployment dibuat skalabel menggunakan Docker dan Kubernetes.",
    technologies: ["Spring Boot", "Spring Cloud", "Eureka", "Redis", "MongoDB", "Kafka", "Jenkins", "ISO 8583", "E-KYC", "WebSocket", "SFTP", "Docker", "Kubernetes"],
    link: "https://www.danasaham.co.id",
  },
  {
    title: "PT Mitra Graha Andalan - ERP Pembayaran IPL & Air",
    image: project9,
    description:
      "Sistem ERP internal untuk mengelola operasional properti, tenant, unit, meter air, invoice IPL dan air, serta monitoring pembayaran dan tunggakan. Pembayaran didukung melalui kas/cash manual dan integrasi payment gateway Xendit.",
    technologies: ["ERP", "Billing IPL", "Meter Air", "Invoice Management", "Cash Payment", "Xendit", "Payment Gateway", "Dashboard", "Tenant Management", "Unit Management"],
    link: "Proyek Internal - PT Mitra Graha Andalan",
  },
  {
    title: "PT Baron - Sistem Belanja Bahan Dapur",
    image: project7,
    description:
      "Aplikasi pengadaan bahan dapur untuk membantu tim dapur membuat permintaan bahan, membandingkan penawaran supplier, membuat purchase order, dan memantau pengiriman sampai pesanan selesai.",
    technologies: [
      "Laravel 12 API",
      "React Native",
      "TypeScript",
      "React Navigation",
      "Zustand / Redux Toolkit",
      "Axios",
      "React Hook Form",
      "Zod / Yup",
      "AsyncStorage / MMKV",
      "SafeAreaProvider",
      "ESLint",
      "Prettier",
      "Environment Config",
      "Absolute Import Alias",
      "React.js Vite",
      "Tailwind CSS",
      "MySQL",
      "Web Admin",
    ],
  },
  {
    title: "Wincos Warranty - Mobile App Dealer",
    image: project8,
    description:
      "Pengembangan aplikasi mobile React Native untuk mendukung proses dealer, transaksi Super Dealer, garansi, dan pembayaran. Fokus kontribusi mencakup perubahan metode pembayaran Instant dan Bank Transfer, integrasi Midtrans Snap, flow cicilan dealer, refresh detail transaksi, responsive design untuk web dan mobile, penyesuaian UI tablet, serta stabilisasi build iOS terkait Firebase.",
    technologies: [
      "React Native 0.75",
      "Expo Dev Client",
      "React Navigation",
      "Redux",
      "Axios",
      "Responsive Design",
      "Firebase Messaging",
      "Midtrans Snap Payment",
      "EAS Build",
      "Android",
      "iOS",
    ],
  },
  {
    title: "Alat Manajemen Facebook Ads",
    image: project6,
    description:
      "Aplikasi web untuk mengelola kebutuhan Facebook Ads, termasuk proses login, integrasi data, dan otomatisasi berbasis cronjob agar aktivitas digital marketing lebih efisien dan terorganisir.",
    technologies: ["PHP", "CodeIgniter 4", "HMVC", "MySQL", "Cronjob", "Otomatisasi", "Facebook Ads"],
  },
  {
    title: "Sistem Informasi Yayasan Manbatul Ulama",
    image: project5,
    description:
      "Pengembangan full-stack untuk website resmi yayasan: landing page modern, sistem manajemen informasi program, donasi, kegiatan, dashboard admin, dan integrasi database.",
    technologies: ["React.js", "Tailwind CSS", "Laravel", "MySQL"],
    link: "https://manbatululamaa.com",
  },
  {
    title: "Kimia Farma Mobile - Backend Aplikasi Kesehatan",
    image: project2,
    description:
      "Backend microservices untuk aplikasi mobile Kimia Farma, dengan integrasi real-time Kafka, caching Redis, dan CI/CD otomatis untuk performa tinggi.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Redis", "Kafka", "Docker", "Jenkins", "GitLab", "Kubernetes"],
    link: "Proyek Internal - PT Harmonix Teknologi (Peentar)",
  },
  {
    title: "Tanhana - Platform Media Informasi Berita",
    image: project4,
    description:
      "Membangun dan merawat website media berita nasional dengan fitur breaking news, artikel terbaru, berita utama, dan cerpen. Tema dan plugin khusus digunakan untuk optimasi konten dan SEO.",
    technologies: ["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://tanhana.com",
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
