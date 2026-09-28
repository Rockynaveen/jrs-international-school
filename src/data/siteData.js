// Curated photography and verified authentic data from jrsinternationalschooluppal.com
export const images = {
  // Hero campus & children
  heroStudent: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
  heroChildrenGroup: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  
  // Learning & classrooms
  learningJoy: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
  classroomModern: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  scienceLab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  stemLearning: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  
  // Sports & activities
  sportsField: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
  swimmingPool: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
  basketballCourt: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
  skatingAndGames: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
  yogaZen: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
  
  // Arts & culture
  artPainting: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  musicPerformance: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
  danceDramatics: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
  
  // Campus & spaces
  libraryModern: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
  campusExterior: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  computerLab: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  canteenDining: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  outdoorGarden: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",

  // Early childhood & pre-primary
  prePrimaryPlay: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
  butterfliesGroup: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  honeyBeesExplore: "https://images.unsplash.com/photo-1567057420215-0afa9cf75cc8?auto=format&fit=crop&w=1200&q=80",
};

export const schoolContact = {
  name: "JRS International School",
  tagline: "Indian Ethos. International Standards.",
  address: "Korremula X Road, Narapally, Near Uppal Depot, Hyderabad, Telangana",
  phone: "+91 8367777545, 8367777548",
  primaryPhone: "+91 8367777545",
  secondaryPhone: "+91 8367777548",
  email: "info@jrsinternationalschooluppal.com",
  secondaryEmail: "Jrsinternational6@gmail.com",
  timing: "8:15 AM – 3:30 PM",
  cbseAffiliationNumber: "3630478",
  cbseAffiliationText: "CBSE Affiliation # 3630478 (Central Board of Secondary Education)",
  foundation: "CBSE School with IIT and NIT Foundation",
  brochureUrl: "http://jrsinternationalschooluppal.com/wp-content/uploads/2022/01/Brochure-2020-JRS.pdf",
  social: {
    facebook: "https://www.facebook.com/AtJRSSchool/",
    twitter: "https://twitter.com/AtJRSSchool",
    instagram: "https://www.instagram.com/jrs_international_school/",
    youtube: "https://www.youtube.com/channel/UCep-jmPHdWe-dCOYkAOCL1Q",
  },
};

export const programmesData = [
  {
    id: "01",
    code: "pre-primary",
    name: "PRE-PRIMARY",
    tagline: "Play • Explore • Discover",
    subLevels: ["Pre-Primary Graduation", "Early Phonics", "Sensory Discovery"],
    description: "A nurturing and creative environment cultivating early wonder through interactive play, motor skill development, and foundational linguistic curiosity.",
    image: images.prePrimaryPlay,
    features: ["Montessori-inspired activity zones", "Foundational phonics & numeracy", "Art, painting & creative expression", "Emotional, social & physical wellness"],
    accent: "#F7C95E",
  },
  {
    id: "02",
    code: "primary",
    name: "PRIMARY",
    tagline: "Question • Create • Connect",
    subLevels: ["Classes I to V (NCERT Syllabus)"],
    description: "CBSE curriculum infused with practical and interactive learning, blending theoretical concepts with hands-on projects, science quizzes, and environmental awareness.",
    image: images.classroomModern,
    features: ["Comprehensive CBSE curriculum coverage", "IIT & NIT Foundation groundwork", "Language immersion & public speaking", "Physical fitness, yoga & skating"],
    accent: "#0B6DB7",
  },
  {
    id: "03",
    code: "middle-school",
    name: "MIDDLE & HIGH SCHOOL",
    tagline: "Think • Collaborate • Lead",
    subLevels: ["Classes VI to X (CBSE Board)"],
    description: "Empowering adolescents with scientific temper, advanced computer labs, sports leagues, and competitive examination preparation grounded in strong moral values.",
    image: images.stemLearning,
    features: ["Advanced science & robotics laboratories", "Rigorous IIT & NIT Foundation program", "Annual sports olympiads & tournaments", "Holistic co-curricular enrichment clubs"],
    accent: "#EF8750",
  },
];
