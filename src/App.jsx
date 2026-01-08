import React, { useState } from 'react';
import { 
  User, GraduationCap, Microscope, Stethoscope, Mic, Award, FileText, 
  Mail, Linkedin, Download, Menu, X, ChevronRight, Activity, 
  CheckCircle, Briefcase, PlayCircle, Globe, Phone, BookOpen, 
  Languages, Code, Users, Heart, Cpu, Printer, Quote, Youtube, Music, Send
} from 'lucide-react';

// --- DATA SECTION ---

const contactInfo = {
  name: "Hichem Bensaada, M.D., M.Sc.",
  title: "Physician-Scientist | Biotechnology Researcher",
  tagline: "Clinical Expertise → Nanomedicine Research → Translational Science",
  email: "Dr.Bensaada.H@gmx.com",
  phone: "+7 901 706 5069",
  linkedin: "https://www.linkedin.com/in/dr-bensaada-hichem/",
  telegram: "https://t.me/Hich00b",
  podcast: "https://biomedical-podcast.mave.digital/",
  youtube: "https://www.youtube.com/@TheBiomedicalPodcast",
  spotify: "https://open.spotify.com/show/2RdHOP1EQ87ya6o7xL5tqZ",
  location: "Moscow, Russia | Setif, Algeria"
};

const timelineData = [
  { year: "2008-2014", title: "Medical Education (M.D.)", desc: "University of Ferhat Abbas Setif 1, Algeria" },
  { year: "2014-2015", title: "Medical Intern", desc: "University Hospital Setif, Algeria (4 rotations)" },
  { year: "2016-2021", title: "General Practitioner", desc: "ENAGeo & Public Hospitals, Algeria" },
  { year: "2019-2020", title: "Research/Professor Assistant", desc: "University of Manizales, Colombia" },
  { year: "2022-2023", title: "Oil RIG Medical Emergency Doctor", desc: "PetroVietnam Drilling, Algeria" },
  { year: "2023-2025", title: "Biotechnology M.Sc.", desc: "Sechenov University (Red Diploma, GPA 5.0/5.0)" },
  { year: "2024-Present", title: "Advanced Research", desc: "Institute of Immunology FMBA & Skoltech" }
];

const educationData = [
  {
    degree: "M.Sc. Biotechnology (Pharmaceutical Ecology)",
    institution: "I.M. Sechenov First Moscow State Medical University",
    period: "2023-2025",
    gpa: "5.0/5.0 (Perfect Score)",
    honors: "Red Diploma (Highest Distinction)",
    thesis: "siRNA Delivery Using Single-Walled Carbon Nanotubes (SWCNTs) and Plant-Derived Exosome-Like Nanoparticles (PELNs): Design, Characterization, and In Vitro Evaluation",
    thesisDetails: "The work was carried out at the A.P. Nelyubin Institute of Pharmacy of Sechenov University and at the National Research Center Institute of Immunology of the Federal Medical Biological Agency of Russia (NRC Institute of Immunology FMBA of Russia), and The Laboratory of NanoMaterials at Skoltech University. Supervisor: Professor Smirnov Valery Valerievich",
    location: "Moscow, Russia",
    documents: [
      { name: "Red Diploma", type: "Certificate", filename: "red-diploma.pdf" },
      { name: "Transcript (GPA 5.0)", type: "Transcript", filename: "transcript-gpa-5.pdf" },
      { name: "Certificate of Honor", type: "Certificate", filename: "certificate-of-honor.pdf" },
      { name: "My Master Thesis", type: "Certificate", filename: "my-master-thesis.pdf" },
      { name: "Independent Thesis Evaluation Certificates", type: "Certificate", filename: "independent-thesis-evaluation-certificates.pdf" }
    ]
  },
  {
    degree: "Doctor of Medicine (M.D.)",
    institution: "University of Ferhat Abbas Setif 1",
    period: "2008-2014",
    honors: "Medical Council of Canada Equivalency (E118201852IMM)",
    rotations: ["Cardiology", "Pediatrics", "Obstetrics & Gynecology", "Pediatric Surgery"],
    location: "Setif, Algeria",
    documents: [
      { name: "M.D. Diploma", type: "Diploma", filename: "md-diploma.pdf" },
      { name: "Recognition of Diploma CANADA Report", type: "Report", filename: "recognition-of-diploma-canada-report.pdf" },
      { name: "Clinical Rotation Certificates", type: "Certificate", filename: "clinical-rotation-certificates.pdf" }
    ]
  },
  {
    degree: "Baccalaureate",
    institution: "Experimental Sciences",
    period: "2008",
    honors: "With High Honors",
    location: "El Eulma, Algeria",
    documents: [
      { name: "Baccalaureate Diploma", type: "Diploma", filename: "baccalaureate-diploma.pdf" }
    ]
  }
];

const researchExperience = [
  {
    title: "Research Assistant",
    institution: "Institute of Immunology, FMBA of Russia",
    period: "March 2024 - Present",
    location: "Moscow, Russia",
    supervisors: ["Pr. Smirnov Valery Valerievich,", "Dr. Turenko Vladislav Nikolaevich,", "Dr. Evgeny A. Turetskiy"],
    achievements: [
      "Developed advanced methods to study pharmacokinetics, drug interactions, and metabolic pathways",
      "Worked on siRNA delivery platforms targeting prion diseases with personalized formulations",
      "Applied novel ultra-purification techniques to isolate exosome-like vesicles from ginger",
      "Collaborated with Skoltech University on carbon nanotube platforms for siRNA delivery",
      "Conducted analyses using HPLC-MS, GC, TLC, UV-Vis-IR Spectroscopy, DLS, Fluorescence Spectroscopy",
      "Performed molecular biology assays (ELISA, PCR, Cell culture with HeLa, HEK 293 cells)",
      "Conducted in vivo pharmacokinetics and gene therapy research using murine models"
    ],
    skills: ["HPLC-MS/MS", "siRNA Design", "Exosome Isolation", "Pharmacokinetics", "Cell Culture", "Molecular Biology"],
    documents: [{ name: "Internship Certificate", type: "Certificate", filename: "fmba-internship-certificate.pdf" }]
  },
  {
    title: "Research Intern",
    institution: "Skoltech University, Laboratory of Nanomaterials",
    period: "July 2024 - Present",
    location: "Moscow, Russia",
    supervisors: ["Dr. Anastasia Goldt"],
    achievements: [
      "Created stable dispersions of functionalized CoMoCAT and HiPCO Single-Walled Carbon Nanotubes (SWCNTs)",
      "Employed filtration and purification techniques to isolate SWCNTs for biomedical applications",
      "Used UV-Vis-IR spectroscopy, Raman spectroscopy, and photoluminescence analysis (Fluorolog-QM)",
      "Functionalized SWCNTs with oligonucleotides and RNA molecules for targeted siRNA delivery",
      "Established joint research project between Skoltech and Sechenov University"
    ],
    skills: ["Carbon Nanotubes", "Raman Spectroscopy", "Nanomaterial Synthesis", "Biomedical Applications"],
    documents: [{ name: "Internship Certificate", type: "Certificate", filename: "skoktech-internship-certificate.pdf" }]
  },
  {
    title: "Research Intern",
    institution: "Russian Biotechnological University (ROSBIOTECH)",
    period: "May 2024",
    location: "Moscow, Russia",
    supervisors: ["Pr. Elena Slynko,", "Dr. Alkhair Ali"],
    achievements: [
      "Laboratory of Genetics and PCR Analysis: DNA extraction, PCR, gel electrophoresis",
      "Laboratory of Biopolymers: Studied anti-microbial properties of biopolymers with Shungite additive",
      "Tested microbial resistance on E. coli, Candida albicans, and Bacillus subtilis",
      "Conducted mechanical testing on biopolymer films and packaging materials",
      "Investigated recycling techniques for biopolymers"
    ],
    skills: ["PCR Analysis", "DNA Extraction", "Biopolymers", "Microbial Testing"],
    documents: [{ name: "Internship Certificate", type: "Certificate", filename: "rosbiotech-internship-certificate.pdf" }]
  },
  {
    title: "Professor Assistant & Researcher",
    institution: "University of Manizales, Colombia",
    period: "July 2019 - June 2020",
    location: "Caldas, Colombia",
    supervisors: ["Pr. Jhon Fredy Betancur,", "Pr. Juan Carlos Carmona Hernández"],
    achievements: [
      "Investigated mutation diversification of cytochrome P450 (CYP) genes in Colombian population",
      "Researched antioxidant activity of polyphenols from Colombian fruits",
      "Publication in Molecules journal: 'Antioxidant Activity of Polyphenols, from Mauritia flexuosa (Aguaje)'",
      "Taught biochemistry principles and experimental techniques to medical students"
    ],
    skills: ["Molecular Biology", "Antioxidant Research", "Teaching", "Publication"],
    documents: [{ name: "Research Certificate", type: "Certificate", filename: "university-manizales-certificate.pdf" }]
  },
  {
    title: "Research Assistant",
    institution: "University of Caldas, Colombia",
    period: "August 2019 - June 2020",
    location: "Caldas, Colombia",
    supervisors: ["Pr. Clara Helena González-Correa"],
    achievements: [
      "Investigated handgrip strength measurements as predictor of overall health and chronic conditions",
      "Collected handgrip strength data and anthropometric measurements from volunteers",
      "Conducted Bioelectrical Impedance Analysis (BIA) for body composition assessment"
    ],
    skills: ["Clinical Research", "Data Collection", "Health Assessment"]
  }
];

const clinicalExperience = [
  {
    title: "Oil RIG Medical Emergency Doctor",
    institution: "PetroVietnam Drilling Division (recruited by OSCO)",
    period: "January 2022 - July 2023",
    location: "Algeria",
    achievements: [
      "Sole medical authority for remote drilling rig (PVD11) with 100+ personnel",
      "Authored and implemented Water Tank Cleaning Protocol adopted as site-wide SOP",
      "Directed weekly emergency drills (medevac, mass casualty) improving response time",
      "Managed medical/surgical emergencies in resource-limited setting",
      "Implemented COVID-19 containment protocols with 0 outbreaks",
      "Trained workers on first aid and emergency preparedness"
    ],
    documents: [
    { name: "RIG Pass Training Certificate", type: "Certificate", filename: "rig-pass-training.pdf" },
    { name: "Recommendation Letters", type: "Document", filename: "recommendation-letters-pvd.pdf" },
    { name: "Compliments/Performance Emails", type: "Document", filename: "compliments-emails-pvd.pdf" }
    ]
  },
  {
    title: "General Practitioner",
    institution: "Private Medical Office of Dr Lyazid ABBAS",
    period: "May 2021 - December 2021",
    location: "El Eulma, Algeria",
    achievements: [
      "Diagnosed and treated wide range of illnesses through comprehensive clinical examinations",
      "Performed minor surgical procedures and ultrasound examinations",
      "Administered diagnostic tests and provided health education",
      "Collaborated with healthcare professionals for multidisciplinary care"
    ],
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "office-lyazid-work-cerificate.pdf" }]
  },
  {
    title: "General Practitioner",
    institution: "National Company of Geophysics (ENAGeo)",
    period: "September 2016 - July 2019",
    location: "Algeria",
    achievements: [
      "Conducted daily patient evaluations and treatment plans",
      "Performed medical visits for hiring, return to work, and periodic occupational medicine",
      "Managed medical emergencies and evacuation according to company plan",
      "Provided first aid training to workers",
      "Ensured compliance with hygiene, safety, and environmental protection standards"
    ],
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "enageo-work-cerificate.pdf" }]
  },
  {
    title: "General Practitioner",
    institution: "Public Hospital EPSP Borj Omar Driss",
    period: "February 2016 - August 2016",
    location: "Illizi, Algeria",
    achievements: [
      "Implemented national public health programs focusing on prevention and epidemiology",
      "Led patient consultations with emphasis on maternal and child health protection",
      "Participated in health education initiatives and community medical expertise",
      "Served as key point of contact for after-hours care"
    ],
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "epsp-bod-work-cerificate.pdf" }]
  },
  {
    title: "Medical Intern",
    institution: "University Hospital & Clinics of Setif (CHU Setif)",
    period: "November 2014 - October 2015",
    location: "Setif, Algeria",
    rotations: [
      { department: "Pediatrics", period: "Feb-Apr 2015" },
      { department: "Obstetrics and Gynecology", period: "May-Jul 2015" },
      { department: "Cardiology", period: "Nov 2014-Jan 2015" },
      { department: "Pediatric Surgery", period: "Aug-Oct 2015" }
    ],
    achievements: [
      "Assisted with medical procedures and patient care under supervision",
      "Supported day-to-day functioning of each department",
      "Developed practical skills in diverse medical specialties"
    ],
    documents: [{ name: "Medical Internship Certificates", type: "Certificate", filename: "clinical-rotation-certificates.pdf" }]
  }
];

const teachingExperience = [
  {
    title: "Expert Consultant - Practicum",
    institution: "ITMO University",
    period: "March 2025 - Present",
    location: "Moscow, Russia",
    role: "Innovation Management in Biotech",
    achievements: [
      "Provided expert insights on innovation management and biopharmaceutical applications",
      "Focused on plant-derived exosome-like nanoparticle research",
      "Mentored students and evaluated project outcomes",
      "Guided student teams in developing scalable solutions for natural exosome isolation"
    ]
  },
  {
    title: "Lecturer (Medical Physiology & Biochemistry)",
    institution: "Afghanistan Girls Online University (AGIOEARMC)",
    period: "September 2024 - Present",
    location: "Remote",
    achievements: [
      "Deliver comprehensive lectures to medical students via digital platforms",
      "Create engaging course materials tailored to online learning",
      "Support AGIOEARMC's mission to empower Afghan women through accessible education",
      "Adapt teaching strategies for diverse learning needs in challenging geopolitical context"
    ],
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "afghan-medical-school-certficate.pdf" }]
  },
  {
    title: "Professor Assistant",
    institution: "University of Manizales, Faculty of Medicine",
    period: "July 2019 - June 2020",
    location: "Caldas, Colombia",
    achievements: [
      "Led and supported development of medical courses taught in English",
      "Created lesson plans and instructional materials",
      "Delivered presentations on various medical topics",
      "Mentored students who successfully graduated and secured medical positions",
      "Assessed student performance in classroom and extracurricular settings"
    ],
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "afghan-medical-school-certficate.pdf" }]
  }
];

const voluntaryService = [
  {
    title: "Volunteer Lecturer",
    institution: "Afghanistan Girls Online University",
    period: "September 2024 - Present",
    description: "Supporting accessible education for Afghan women through online teaching in Medical Physiology and Biochemistry",
    documents: [{ name: "Work Certificate", type: "Certificate", filename: "afghan-medical-school-certficate.pdf" }]
  },
  {
    title: "Football Team Physician",
    institution: "Elite Jeunesse El Eulma (EJEE) Club",
    period: "September 2021 - December 2022",
    location: "El Eulma, Algeria",
    achievements: [
      "Coordinated pre-participation screenings and evaluations",
      "Managed injuries during official games and training sessions",
      "Organized and supervised rehabilitation programs",
      "Provided education on nutrition, strength conditioning, and substance abuse",
      "Maintained accurate medical records for all athletes"
    ],
    documents: [{ name: "Certificate", type: "Certificate", filename: "ejee-club-work-cerificate.pdf" }]
  },
  {
    title: "Member",
    institution: "The Algerian Red Crescent",
    period: "Since 2009",
    description: "Active participation in humanitarian and medical relief activities",
    documents: ["Certificate"]
  }
];

const skillsMatrix = [
  { 
    category: "Laboratory & Research", 
    skills: ["HPLC-MS/MS","GC", "Dynamic Light Scattering", "Fluorescence Spectroscopy", "TLC", "Cell Culture (HeLa, HEK)", "Atomic Force Microscopy (AFM)", "ImageJ", "GraphPad Prism", "ADME/PK Profiling", "PCR/RT-PCR", "Raman Spectroscopy", "Spectrophotometry", "UV-Vis-NIR", "siRNA Design", "Plant Exosome Isolation", "ELISA", "Western Blotting", "Cytotoxicity assays (MTT)", "Lyophilization", "DNA Extraction", "Gel Electrophoresis"] 
  },
  { 
    category: "Clinical & Professional", 
    skills: ["Emergency Medicine", "ACLS", "Occupational Health", "Pharmacovigilance", "Minor Surgery", "Clinical Procedures", "Clinical Management", "Medical Education & Supervision", "Diagnostic Skills" , "Ultrasound", "Patient Education","GCP (Good Clinical Practice)" ,"HSE Protocols" , "Digital Health & Technology", "Clinical Trial Design"] 
  },
  { 
    category: "Bioinformatics & Data", 
    skills: ["RStudio", "Python", "BLAST", "Clustal Omega", "mfold", "PyMOL", "Genome Browser","SQL (Healthcare Data)" , "Ensembl"] 
  },
  { 
    category: "Digital Competencies", 
    skills: ["React.js & Vite", "Tailwind CSS", "Git & GitHub", "Cloudflare Pages", "WordPress & WooCommerce", "Elementor Pro", "HTML5/CSS3", "Docker Compose", "Adobe Photoshop/GIMP", "SEO (Yoast/Rank Math)", "Microsoft Office Suite", "BioRender"] 
  },
  { 
    category: "Languages", 
    skills: ["Arabic (Native)", "English (C1)", "French (C1)", "Spanish (B1)", "Maltese (B1)", "Russian (A2)"] 
  }
];

const certifications = [
  { id: 1, title: "Advanced Cardiac Life Support (ACLS)", issuer: "NHCPS/AHA", category: "Clinical", date: "2022", filename: "acls-certification.pdf" },
  { id: 2, title: "COVID-19 Training for Healthcare Workers", issuer: "Stanford University", category: "Clinical", date: "2021", filename: "stanford-online-certificat.pdf" },
  { id: 3, title: "RIG Pass Training", issuer: "British Safety Services", category: "Safety", date: "2023", filename: "rig-pass-training.pdf" },
  { id: 4, title: "Single-Cell RNA Library Preparation", issuer: "RUDN University/ASCA", category: "Research", date: "2024", filename: "certificate-of-workshop-training-single-cell-rna-library-preparation-using-human-cells.pdf" },
  { id: 7, title: "Advanced Training in Engineering Physiology", issuer: "Sechenov University", category: "Diploma", date: "2024", highlight: true, filename: "engineering-physiology-training-certificate.pdf" },
  { id: 8, title: "Training in Phytotherapy", issuer: "BIOS & Laboratorios Herssen", category: "Research", date: "2019", filename: "phytotherapy-training.pdf" },
  { id: 9, title: "IELTS Academic Certificate", issuer: "British Council", category: "Language", date: "2022", score: "7.5/9", filename: "ielts.pdf" },
  { id: 10, title: "TEFL Certificate", issuer: "TEFL Professional Development", category: "Language", date: "2020", filename: "tefl.pdf" },
  { id: 11, title: "Multiple CME Certificates", issuer: "WebMD, Medscape, National Lipid Association", category: "CME", date: "2020-2022", count: "50+", filename: "cme-certificates.pdf" },
  { id: 12, title: "Skoltech Scholarship for Summer Internship", issuer: "Skoltech University", category: "Internship", date: "2024", filename: "skoktech-internship-certificate.pdf" },
  { id: 13, title: "ROSBIOTECH Spring Internship Winner", issuer: "Russian Biotechnological University", category: "Internship", date: "2024", filename: "rosbiotech-internship-certificate.pdf" },
  { id: 14, title: "Research Assistant", issuer: "Institute of Immunology, FMBA of Russia", category: "Internship", date: "2024-Present", filename: "fmba-internship-certificate.pdf" }
];

const awards = [
  { 
    title: "Red Diploma (Highest Honors)", 
    institution: "Sechenov University", 
    year: "2025", 
    description: "M.Sc. Biotechnology with perfect GPA 5.0/5.0",
    filename: "red-diploma.pdf" 
  },
  { 
    title: "Open Doors Scholarship Winner", 
    institution: "Global Universities Project", 
    year: "2023", 
    description: "Full tuition scholarship for Clinical Medicine & Public Health track",
    filename: "open-door-winner-diploma.pdf" 
  },
  { 
    title: "2nd Place - HealthTech Sans Frontiers", 
    institution: "Sechenov University Inter-University Case Championship", 
    year: "2024", 
    description: "Project: 'Natural Delivery Platform for Gene Therapy'",
    filename: "sechenovtech-certificate.pdf" 
  },
  { 
    title: "Certificate of Honor for Scientific Activities", 
    institution: "Sechenov University", 
    year: "2025",
    description: "For outstanding research performance during M.Sc. studies",
    filename: "certificate-of-honor.pdf" 
  },
  { 
    title: "Baccalaureate with High Honors", 
    institution: "Experimental Sciences", 
    year: "2008",
    description: "Graduated with high honors in national baccalaureate exams",
    filename: "baccalaureate-diploma.pdf" 
  }
];

const publications = [
  {
    authors: "Bensaada, H., Soto-Garcia, M. F., & Carmona-Hernandez, J. C.",
    title: "Antioxidant Activity of Polyphenols, from Mauritia flexuosa (Aguaje), Based on Controlled Dehydration",
    journal: "Molecules",
    year: "2022",
    volume: "27(10), 3065",
    link: "https://doi.org/10.3390/molecules27103065"
  }
];

const conferences = [
  {
    title: "Innovative Drugs: From Molecule to the Patient",
    organizer: "Sechenov University",
    date: "November 2024",
    location: "Moscow, Russia",
    role: "Poster Presenter",
    presentation: "ANTIOXIDANT ACTIVITY OF POLYPHENOLS, FROM MAURITIA FLEXUOSA (AGUAJE)",
    filename: "conference-innovative-drugs-from-molecule-to-the-patient.pdf"
  },
  {
    title: "Advance Your Drug Development Expertise",
    organizer: "Sechenov University",
    date: "July 2025",
    location: "Moscow, Russia",
    role: "Presenter",
    presentation: "Findings from my MSc thesis on novel drug-delivery platforms (carbon nanotubes and plant-derived exosomes)",
    filename: "conference-advance-your-drug-development-expertise.pdf"
  }
];

const networksMemberships = [
  { name: "The Algerian National Order of Physicians", since: "2015" },
  { name: "Association for Single Cell Analysis (ASCA)", since: "2024" },
  { name: "AIESEC (International Association of Students in Economics and Business)", since: "2010" },
  { name: "National Organization of Algerian Students (O.N.E.A)", since: "2010-2015" },
  { name: "Scientific Club Association of the Faculty of Medicine of Setif", since: "2010-2015" },
  { name: "The Algerian Red Crescent", since: "2009" }
];

const podcastEpisodes = [
  { title: "Smart Hearts: AI in Cardiology", desc: "Exploring how artificial intelligence is revolutionizing cardiac care." },
  { title: "Polyphenols: From Leaf to Life", desc: "The science behind antioxidant activity in natural compounds." },
  { title: "Next-Gen RNA Technologies", desc: "Discussing the future of siRNA and gene therapy platforms." }
];

const references = [
  {
    name: "Pr. Smirnov Valery Valerievich",
    position: "PhD, Associate Professor",
    institution: "Sechenov University",
    department: "Pharmaceutical and Toxicological Chemistry",
    email: "smirnov_v_v_1@staff.sechenov.ru"
  },
  {
    name: "Pr. Dmitry Olegovich Bokov",
    position: "PhD, Associate Professor",
    institution: "Sechenov University",
    department: "Pharmaceutical Natural Science & Analytical Chemistry",
    phone: "+7-925-358-8427",
    email: "bokov_d_o@staff.sechenov.ru"
  },
  {
    name: "Dr. Turenko Vladislav Nikolaevich",
    position: "Senior laboratory assistant",
    institution: "Sechenov University",
    department: "Pharmaceutical and Toxicological Chemistry",
    email: "turenko_v_n@staff.sechenov.ru"
  },
  {
    name: "Pr. Jhon Fredy Betancur P",
    position: "President of the Superior Council",
    institution: "University of Manizales, Colombia",
    phone: "+57-321-7192-283",
    email: "jbetancur@umanizales.edu.co"
  },
  {
    name: "Pr. Juan Carlos Carmona-Hernández",
    position: "Professor",
    institution: "University of Manizales, Colombia",
    phone: "+57-300-5868-133",
    email: "jucaca@umanizales.edu.co"
  }
];

// --- COMPONENTS ---

const SectionTitle = ({ id, icon: Icon, title, subtitle }) => (
  <div id={id} className="flex flex-col gap-2 mb-8 pt-12 border-b border-slate-200 pb-4 scroll-mt-24">
    <div className="flex items-center gap-3">
      <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white shadow-lg">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-600 ml-16">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "", gradient = false }) => (
  <div className={`rounded-xl shadow-lg border border-slate-200 p-6 transition-all duration-300 hover:shadow-xl ${gradient ? 'bg-gradient-to-br from-white to-blue-50/50' : 'bg-white'} ${className}`}>
    {children}
  </div>
);

const TimelineItem = ({ year, title, desc, isLast }) => (
  <div className="relative pl-8 pb-8">
    {!isLast && <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-blue-200"></div>}
    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border-4 border-white shadow-lg"></div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
      <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full uppercase tracking-wider w-fit">
        {year}
      </span>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
    </div>
    <p className="text-slate-600 text-sm mt-2">{desc}</p>
  </div>
);

const ExperienceCard = ({ title, institution, period, location, achievements, skills, documents, children }) => (
  <Card className="mb-6 border-l-4 border-l-blue-600">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-blue-600 font-semibold">{institution}</p>
        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
          <span>{period}</span>
          {location && <span className="flex items-center gap-1"><Globe size={12} /> {location}</span>}
        </div>
      </div>
    </div>
    
    {achievements && (
      <div className="mb-4">
        <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    )}
    
    {skills && (
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

    {documents && (
      <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-lg">
        <h4 className="font-semibold text-slate-800 mb-2 text-xs uppercase">Documents</h4>
        <div className="space-y-2">
          {documents.map((doc, idx) => {
            // Handle both string and object formats
            const docName = typeof doc === 'string' ? doc : doc.name;
            const docFilename = typeof doc === 'string' ? 
              doc.toLowerCase().replace(/\s+/g, '-') + '.pdf' : 
              doc.filename || doc.name.toLowerCase().replace(/\s+/g, '-') + '.pdf';
            
            return (
              <a 
                key={idx} 
                href={`/documents/${docFilename}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer no-underline"
              >
                <div className="flex items-center gap-3">
                  <FileText size={16} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">{docName}</span>
                </div>
                <Download size={16} className="text-blue-600" />
              </a>
            );
          })}
        </div>
      </div>
    )}
    
    {children}
  </Card>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'summary', label: 'Executive Summary', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'research', label: 'Research Experience', icon: Microscope },
    { id: 'clinical', label: 'Clinical Experience', icon: Stethoscope },
    { id: 'teaching', label: 'Teaching Experience', icon: BookOpen },
    { id: 'voluntary', label: 'Voluntary Service', icon: Heart },
    { id: 'scicomm', label: 'Science Communication', icon: Mic },
    { id: 'skills', label: 'Skills & Languages', icon: Languages },
    { id: 'certs', label: 'Certifications & Awards', icon: Award }, // Combined here
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const filteredCerts = certifications.filter(c => 
    activeTab === 'All' || c.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 text-slate-800 font-sans print:bg-white">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b px-4 py-3 flex justify-between items-center shadow-sm print:hidden">
        <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
          Dr. Hichem Bensaada
        </span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="p-2 hover:bg-slate-100 rounded-md"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex max-w-7xl mx-auto">
        
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-0 h-screen w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300 p-6 z-40 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto border-r border-slate-700 flex flex-col shadow-2xl print:hidden`}>
          <div className="mb-8 pt-12 lg:pt-0 text-center lg:text-left">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full mb-4 mx-auto lg:mx-0 flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-blue-500/30 relative">
              <img 
                src="/images/profile-picture.webp" 
                alt="Dr. Hichem Bensaada"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 25%" }} /* Adjust face position */
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-slate-700 flex items-center justify-center text-3xl font-bold text-white absolute inset-0" style={{ display: 'none' }}>
                HB
              </div>
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Hichem Bensaada</h1>
            <p className="text-sm text-blue-400 mt-2 font-medium">M.D., M.Sc. Biotechnology</p>
            <p className="text-xs text-slate-400 mt-1">Physician-Scientist</p>
          </div>
          
          <nav className="space-y-1 flex-1">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all hover:bg-white/5 hover:text-white group text-left"
              >
                <item.icon size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="pt-6 border-t border-slate-700">
            <div className="flex gap-3 justify-center">
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"><Linkedin size={18} /></a>
              <a href={`mailto:${contactInfo.email}`} className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"><Mail size={18} /></a>
              <a href={contactInfo.podcast} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-purple-600 rounded-lg transition-colors"><Mic size={18} /></a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-12 lg:ml-0 mt-14 lg:mt-0 max-w-6xl print:p-0 print:m-0">
          
          {/* Header */}
          <header className="mb-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden print:bg-white print:text-black print:shadow-none print:rounded-none">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Profile Picture Placeholder for Print/Header */}
                  <div className="w-48 h-48 bg-slate-200 rounded-full flex-shrink-0 border-8 border-white/30 overflow-hidden flex items-center justify-center relative shadow-2xl">
                    <img 
                      src="/images/profile-picture.webp" 
                      alt="Dr. Hichem Bensaada"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 20%" }} /* Adjust face position */
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials */}
                    <span className="text-slate-400 font-bold text-4xl absolute" style={{ display: 'none' }}>
                      HB
                    </span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent print:text-black">
                      {contactInfo.name}
                    </h1>
                    <p className="text-lg lg:text-xl text-blue-200 font-medium mb-6 print:text-slate-600">{contactInfo.title}</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 rounded-full print:hidden"></div>
                    <div className="text-slate-300 text-lg mb-8 leading-relaxed border-l-4 border-cyan-500 pl-4 bg-white/5 py-4 rounded-r-xl backdrop-blur-sm print:text-black print:bg-transparent print:border-l-black">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-yellow-400 print:text-black" size={20} />
                        <span className="font-semibold">Red Diploma M.Sc. (GPA 5.0/5.0)</span>
                      </div>
                      <p className="text-sm mt-1 text-slate-400 print:text-slate-600">
                        Elite Academic Credentials • Clinical Expertise → Nanomedicine Research → Translational Science
                      </p>
                    </div>
                  </div>
              </div>
              
              <div className="flex flex-wrap gap-4 print:hidden">
                <button onClick={() => scrollTo('contact')} className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg flex items-center gap-2">
                  Contact Me <ChevronRight size={18} />
                </button>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <button 
                  onClick={handlePrint}
                  className="bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700 transition-all shadow-lg flex items-center gap-2"
                >
                  <Printer size={18} /> Download PDF
                </button>
              </div>
            </div>
          </header>

          {/* Section 1: Executive Summary */}
          <SectionTitle id="summary" icon={User} title="Executive Summary" />
          <section className="grid md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-7 space-y-6">
              <Card gradient={true}>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Physician-Scientist Profile</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  A medical doctor with elite biotechnology credentials (Red Diploma M.Sc., GPA 5.0/5.0), 
                  specializing in translational research and advanced drug delivery systems. Combines 7+ years 
                  of clinical experience in diverse settings with cutting-edge research in nanomedicine, 
                  siRNA delivery, and plant-derived exosome engineering.
                </p>
                <h4 className="font-bold text-sm text-slate-500 uppercase tracking-wide mb-3">Key Differentiators</h4>
                <ul className="space-y-3">
                  {[
                    "Red Diploma M.Sc. Biotechnology (Highest Honors, GPA 5.0/5.0)",
                    "7+ years clinical experience across hospital, GP, and offshore settings",
                    "Advanced research in siRNA delivery, carbon nanotubes, and exosome engineering",
                    "International research collaboration (Russia, Colombia, Algeria)",
                    "Science communication via The Biomedical Podcast",
                    "Medical Council of Canada equivalency for M.D. degree"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="md:col-span-5">
              <Card>
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Activity size={20} className="text-blue-600" /> 
                  Career Timeline
                </h3>
                <div className="mt-2">
                  {timelineData.map((item, idx) => (
                    <TimelineItem key={idx} {...item} isLast={idx === timelineData.length - 1} />
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Section 2: Education */}
          <SectionTitle id="education" icon={GraduationCap} title="Education" />
          <div className="space-y-8 mb-20">
            {educationData.map((edu, index) => (
              <Card key={index} className={index === 0 ? "border-l-4 border-l-red-500 relative overflow-hidden" : "border-l-4 border-l-blue-500"}>
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg shadow-lg">
                    HIGHEST DISTINCTION
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-lg text-slate-600 font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <span>{edu.period}</span>
                    <span className="flex items-center gap-1"><Globe size={12} /> {edu.location}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {edu.honors && (
                      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                        <Award className={index === 0 ? "text-red-600" : "text-blue-600"} size={20} />
                        <div>
                          <div className="font-bold text-slate-900">{edu.honors}</div>
                          {edu.gpa && <div className="text-sm text-slate-700">{edu.gpa}</div>}
                        </div>
                      </div>
                    )}
                    {edu.thesis && (
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-xs text-slate-500 uppercase mb-2">Master Thesis</h4>
                        <p className="text-sm italic text-slate-800 mb-2">"{edu.thesis}"</p>
                        {edu.thesisDetails && <p className="text-xs text-slate-600 italic">{edu.thesisDetails}</p>}
                      </div>
                    )}
                    {edu.rotations && (
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Clinical Rotations</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.rotations.map((rot, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200">{rot}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {edu.documents && (
                    <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-sm text-slate-800 mb-3">Available Documents</h4>
                      <div className="space-y-2">
                        {edu.documents.map((doc, i) => {
                          const docName = doc.name;
                          const docFilename = doc.filename;
                          
                          return (
                            <a
                              key={i}
                              href={`/documents/${docFilename}`}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors no-underline"
                            >
                              <div className="flex items-center gap-3">
                                <FileText size={16} className="text-slate-400" />
                                <span className="text-sm font-medium text-slate-700">{docName}</span>
                              </div>
                              <Download size={16} className="text-blue-600" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Section 3: Research Experience */}
          <SectionTitle id="research" icon={Microscope} title="Research Experience" />
          <div className="space-y-8 mb-20">
            {researchExperience.map((research, index) => (
              <ExperienceCard key={index} {...research}>
                {research.supervisors && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-800 mb-2">Supervisors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {research.supervisors.map((supervisor, idx) => (
                        <span key={idx} className="text-sm text-slate-600">{supervisor}</span>
                      ))}
                    </div>
                  </div>
                )}
              </ExperienceCard>
            ))}
          </div>

          {/* Section 4: Clinical Experience */}
          <SectionTitle id="clinical" icon={Stethoscope} title="Clinical Experience" />
          <div className="space-y-8 mb-20">
            {clinicalExperience.map((exp, index) => (
              <ExperienceCard key={index} {...exp}>
                 {exp.title === "Oil RIG Medical Emergency Doctor" && (
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                       <h4 className="flex items-center gap-2 font-bold text-blue-800 mb-2"><Quote size={16}/> Endorsement Highlights</h4>
                       <div className="space-y-3 text-sm text-slate-700 italic">
                          <p>"He improved our protocol for periodic cleaning of drinking water tanks... wrote a detailed document that we currently apply." - <span className="font-semibold not-italic">Abdelhalim Handis, GBRS Drilling Supervisor</span></p>
                          <p>"Unwavering dedication to health and safety... pivotal role in emergency preparedness." - <span className="font-semibold not-italic">Truong To Dien, Toolpusher, PetroVietnam</span></p>
                          <p>"Tremendous job in spreading positive safety culture." - <span className="font-semibold not-italic">Nacer Yahiaoui, GBRS Superintendent</span></p>
                       </div>
                    </div>
                 )}
              </ExperienceCard>
            ))}
          </div>

          {/* Section 5: Teaching Experience */}
          <SectionTitle id="teaching" icon={BookOpen} title="Teaching Experience" />
          <div className="space-y-8 mb-20">
            {teachingExperience.map((teaching, index) => (
              <ExperienceCard key={index} {...teaching} />
            ))}
          </div>

          {/* Section 5.1: Voluntary Service (ADDED NEW SECTION HERE) */}
          <SectionTitle id="voluntary" icon={Heart} title="Voluntary Service" />
          <div className="space-y-8 mb-20">
            {voluntaryService.map((service, index) => (
              <ExperienceCard key={index} {...service} />
            ))}
          </div>

          {/* Section 6: Science Communication */}
          <SectionTitle id="scicomm" icon={Mic} title="Science Communication" />
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                  <Mic size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">The Biomedical Podcast</h3>
                  <p className="text-slate-400 text-sm">Creator, Host, Writer & Director</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">Science podcast focused on cutting‑edge biomedical research.</p>
              
              {/* Episodes List */}
              <div className="space-y-3 mb-6">
                 <div className="p-3 bg-white/10 rounded-lg">
                   <div className="font-bold text-sm">Latest Episodes</div>
                   <ul className="text-xs text-slate-300 mt-1 space-y-1">
                       <li>• Smart Hearts: AI in Cardiology</li>
                       <li>• Polyphenols: From Leaf to Life</li>
                       <li>• Next-Gen RNA Technologies</li>
                   </ul>
                 </div>
              </div>

              <div className="flex gap-3">
                 <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 rounded-lg text-sm font-bold hover:bg-red-500 transition-colors">
                   <Youtube size={16} /> YouTube
                 </a>
                 <a href={contactInfo.spotify} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-600 rounded-lg text-sm font-bold hover:bg-green-500 transition-colors">
                   <Music size={16} /> Spotify
                 </a>
              </div>
            </Card>

            {/* HealthTech Award */}
            <Card>
                <div className="flex items-center gap-3 mb-4">
                    <Award className="text-yellow-500" size={24} />
                    <div>
                        <h3 className="font-bold text-slate-800">HealthTech Entrepreneurship (Interuniversity Championship)</h3>
                        <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">2nd Place Winner</span>
                    </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">SechenovTech "HealthTech Sans Frontiers"</p>
                <p className="text-sm font-medium text-slate-800">Project: "Natural Delivery Platform for Gene Therapy"</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-col gap-3">
                        {/* FIX THIS: Change from div to anchor tag */}
                        <a 
                            href="/documents/sechenovtech-certificate.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors group no-underline border border-slate-200"
                        >
                            <div className="flex items-center gap-3">
                                <FileText size={16} className="text-slate-500 group-hover:text-blue-600" />
                                <span className="text-sm font-bold text-slate-700 group-hover:text-blue-800">Download Certificate</span>
                            </div>
                            <Download size={16} className="text-slate-400 group-hover:text-blue-600" />
                        </a>
                    </div>
                </div>
            </Card>
          </div>

          {/* Section 7: Skills Matrix */}
          <SectionTitle id="skills" icon={Cpu} title="Technical Skills Matrix" />
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             {skillsMatrix.map((category, index) => (
                <Card key={index} className={category.category === "Languages" ? "border-l-4 border-l-amber-500" : ""}>
                   <h4 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2 flex items-center justify-between">
                      {category.category}
                      {category.category === "Languages" && <Globe size={16} className="text-amber-500"/>}
                   </h4>
                   <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                         <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full border shadow-sm ${
                            // Color logic based on category index
                            index === 0 ? 'bg-purple-50 text-purple-700 border-purple-100' : // Lab
                            index === 1 ? 'bg-green-50 text-green-700 border-green-100' :   // Clinical
                            index === 2 ? 'bg-blue-50 text-blue-700 border-blue-100' :     // Bioinfo
                            index === 3 ? 'bg-cyan-50 text-cyan-700 border-cyan-100' :     // Digital
                            'bg-amber-50 text-amber-700 border-amber-100'                  // Languages
                         }`}>
                            {skill}
                         </span>
                      ))}
                   </div>
                </Card>
             ))}
          </div>

          {/* Section 8: Certifications & Awards */}
          <SectionTitle id="certs" icon={Award} title="Certifications, Awards & Honors" />
          <div className="mb-20">
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", "Diploma", "Language", "CME", "Internship", "Clinical", "Research", "Safety", "Awards"].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === cat 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               {/* Advanced Training (Highlight) */}
               {(activeTab === 'All' || activeTab === 'Research' || activeTab === 'Diploma') && (
                  <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-indigo-100 text-indigo-700">Diploma</span>
                        <span className="text-xs text-slate-500">2024</span>
                      </div>
                      <div className="font-bold text-slate-800 text-sm mb-1">Advanced Training in Engineering Physiology</div>
                      <div className="text-xs text-slate-600">Sechenov University</div>
                      <a 
                        href="/documents/engineering-physiology-training-certificate.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 pt-3 border-t border-indigo-100 flex items-center justify-between cursor-pointer hover:text-indigo-600 text-slate-400"
                      >
                        <span className="text-xs font-medium">View Diploma</span>
                        <Download size={14}/>
                      </a>
                  </div>
                )}

               {/* Regular Certs */}
               {filteredCerts.map(cert => (
                  <div key={cert.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        cert.category === 'Clinical' ? 'bg-red-100 text-red-700' :
                        cert.category === 'Research' ? 'bg-blue-100 text-blue-700' :
                        cert.category === 'Safety' ? 'bg-green-100 text-green-700' :
                        cert.category === 'Language' ? 'bg-purple-100 text-purple-700' :
                        cert.category === 'Teaching' ? 'bg-yellow-100 text-yellow-700' :
                        cert.category === 'Diploma' ? 'bg-indigo-100 text-indigo-700' :
                        cert.category === 'CME' ? 'bg-orange-100 text-orange-700' :
                        cert.category === 'Internship' ? 'bg-teal-100 text-teal-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {cert.category}
                      </span>
                      <span className="text-xs text-slate-500">{cert.date}</span>
                    </div>
                    <div className="font-bold text-slate-800 text-sm mb-1">{cert.title}</div>
                    <div className="text-xs text-slate-600 mb-4">{cert.issuer}</div>
                    <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between cursor-pointer text-slate-400 hover:text-blue-600">
                      <a 
                        href={`/documents/${cert.filename}`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 hover:text-blue-600"
                      >
                        <Download size={14}/> Download
                      </a>
                    </div>
                  </div>
                ))}
                    

              {/* Awards (Only show if tab is All or Awards) */}
              {(activeTab === 'All' || activeTab === 'Awards') && awards.map((award, index) => (
                 <div key={`award-${index}`} className="bg-yellow-50/50 border border-yellow-200 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-yellow-100 text-yellow-700">Award</span>
                        <span className="text-xs text-slate-500">{award.year}</span>
                    </div>
                    <div className="font-bold text-slate-800 text-sm mb-1">{award.title}</div>
                    <div className="text-xs text-slate-600">{award.institution}</div>
                    <div className="mt-3 pt-3 border-t border-yellow-100 flex items-center justify-between cursor-pointer text-slate-400 hover:text-yellow-600">
                      <a 
                        href={`/documents/${award.filename}`}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 hover:text-yellow-600"
                      >
                        <Download size={14}/> View Award
                      </a>
                    </div>
                 </div>
              ))}
            </div>
          </div>

          {/* Section 9: Publications */}
          <SectionTitle id="publications" icon={FileText} title="Publications & Conferences" />
          <div className="space-y-8 mb-20">
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Publications</h3>
              {publications.map((pub, index) => (
                <div key={index} className="mb-6 last:mb-0 p-4 bg-slate-50 rounded-lg">
                  <div className="text-sm text-slate-700 mb-2">{pub.authors}</div>
                  <div className="font-bold text-slate-900 mb-2">{pub.title}</div>
                  <div className="text-sm text-slate-600 mb-2">{pub.journal}, {pub.volume} ({pub.year})</div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                    <Globe size={14} /> View Publication
                  </a>
                </div>
              ))}
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Conference Presentations</h3>
              <div className="space-y-6">
                {conferences.map((conf, index) => (
                  <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0 flex justify-between items-start">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800">{conf.title}</h4>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">{conf.organizer} • {conf.date} • {conf.location}</div>
                        {conf.presentation && <div className="text-sm text-slate-700 italic">"{conf.presentation}"</div>}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{conf.role}</span>
                        <button className="text-xs flex items-center gap-1 text-slate-400 hover:text-blue-600">
                          <a 
                            href={`/documents/${conf.filename}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Download size={12}/> View Details
                          </a>
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Section 10: Contact & References */}
          <SectionTitle id="contact" icon={Mail} title="Contact & References" />
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300">
              <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-white group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20"><Mail size={18} /></div>
                  <div><div className="text-sm text-slate-400">Email</div><div>{contactInfo.email}</div></div>
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20"><Linkedin size={18} /></div>
                  <div><div className="text-sm text-slate-400">LinkedIn</div><div>linkedin.com/in/dr-bensaada-hichem</div></div>
                </a>
                <a href={contactInfo.telegram} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20"><Send size={18} /></div>
                  <div><div className="text-sm text-slate-400">Telegram</div><div>@Hich00b</div></div>
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg"><Phone size={18} /></div>
                  <div><div className="text-sm text-slate-400">Phone</div><div>{contactInfo.phone}</div></div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/10 rounded-lg"><Globe size={18} /></div>
                  <div><div className="text-sm text-slate-400">Location</div><div>{contactInfo.location}</div></div>
                </div>
              </div>
            </Card>

            <Card>  
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900 text-xl">Professional References</h3>
                
                {/* UPDATED BUTTON: Changed from <button> to <a> */}
                <a 
                  href="/documents/my-professional-references.pdf" 
                  download
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded flex items-center gap-1 text-slate-600 transition-colors cursor-pointer"
                >
                  <Download size={12}/> Download List
                </a>
            </div>

            <div className="space-y-4">
              {/* This displays the first 3 references as a preview, hiding the rest */}
              {references.slice(0, 3).map((ref, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-800">{ref.name}</div>
                  <div className="text-sm text-slate-600">{ref.position}</div>
                  <div className="text-sm text-slate-700">{ref.institution}</div>
                  <div className="text-xs text-slate-500 mt-1 italic">Contact details available on request</div>
                </div>
              ))}
    
                <div className="text-center text-sm text-slate-500 italic mt-4">
                    Full reference list with emails/phone numbers available in download.
                </div>
              </div>
            </Card>
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} Hichem Bensaada, M.D., M.Sc.</p>
            <p className="text-xs">Designed for Academic & Professional Applications • Updated with complete CV information</p>
          </footer>
        </main>
      </div>
    </div>
  );
}