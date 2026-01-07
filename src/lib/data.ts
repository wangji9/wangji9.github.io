export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  image?: string;
  highlight?: boolean;
  abstract?: string;
  citations?: number;
  ranking?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  link?: string;
  tags: string[];
}

export interface ProjectSection {
  id: string;
  title: string;
  projects: Project[];
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

  export const profileData = {
    name: "Ji Wang",
    title: "PhD Student",
    affiliation: "Industrial Intelligence Institute, Donghua University",
    email: "wangji@mail.dhu.edu.cn",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/2-1767763472618.png?width=8000&height=8000&resize=contain",
    interests: [
    "Industrial Foundation Models",
    "Industrial Knowledge Graphs",
    "Tacit Industrial Knowledge"
  ],
  scholarLink: "https://scholar.google.com.hk/citations?user=p1zRSlIAAAAJ&hl=zh-CN",
  githubLink: "https://github.com/",
  aboutMe: `I am a PhD student at Donghua University, focusing on the intersection of AI and Industrial Engineering. My work involves developing lightweight models for defect detection (e.g., DAssd-Net), visual perception for robots, and leveraging Large Language Models for industrial causal analysis. I also co-founded Wavefrag Studio as a partner, focusing on the development of acoustic acquisition and imaging products as well as software algorithm R&D (details at https://wavefrag.com/ ; https://github.com/wavefrag).`,
  education: [
    {
      degree: "PhD Student",
      institution: "Donghua University",
      period: "2024 - Present",
      description: "Institute of Industrial Intelligence, College of Mechanical Engineering"
    }
  ],
};

export const news: NewsItem[] = [
  { id: "news-11", date: "2026.01", content: "Co-founded Wavefrag Studio, building acoustic acquisition & imaging products and related algorithm software (wavefrag.com)." },
  { id: "news-10", date: "2024.05", content: "Joined Shanghai Nanyang Hongyou Intelligent Technology as an AI Engineer." },
  { id: "news-9", date: "2023.07", content: "Joined Chongqing Aoxiong Online Information Technology as an Algorithm Intern Engineer." },
  { id: "news-8", date: "2022.05", content: "Joined Yanfeng Visteon Electronics Technology as an Algorithm Intern." },
  { id: "news-7", date: "2025.12", content: "Our paper on agentic AI for wind turbine assembly has been published in Journal of Engineering Design." },
  { id: "news-6", date: "2025.10", content: "New research on layer-wise anomaly prediction for 3D printing published in Journal of Engineering Design." },
  { id: "news-5", date: "2025.09", content: "Our work on LLM-based causal analysis for welding defects is now available in Journal of Industrial Information Integration." },
  { id: "news-4", date: "2024.10", content: "EMFastDet, a lightweight driver fatigue detection model, has been published in Applied Intelligence." },
  { id: "news-3", date: "2023.12", content: "Published a comprehensive review on visual sensing and depth perception for welding robots in Sensors." },
  { id: "news-2", date: "2023.06", content: "DAssd-Net, our lightweight steel surface defect detection model, has been published in Sensors." },
  { id: "news-1", date: "2022.12", content: "Our research on the design and analysis of welding inspection robots is published in Scientific Reports." },
];

export const publications: Publication[] = [
  {
    id: "pub-8",
    title: "Analysis of causes of welding defects in bridge weathering steel based on large language models",
    authors: "Ji Wang, Weibin Zhuang, Tianyuan Liu, Jinsong Bao, Xinyu Li",
    journal: "Journal of Industrial Information Integration",
    year: 2025,
    highlight: true,
    link: "https://doi.org/10.1016/j.jii.2025.100954",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754452512.png?width=8000&height=8000&resize=contain",
    abstract: "The analysis of the causes of welding defects in bridge weathering steel necessitates a multifaceted approach integrating alloy element influences, crack control, and parameter optimization, as single-perspective methodologies inadequately address root causes and hinder effective solution development. To address these challenges, a large language model-based method for analyzing the causes of welding defects in bridge weathering steel is proposed. This method first integrates information from different welding perspectives through a multi-perspective associative memory mechanism and employs a hybrid retrieval strategy to retrieve factual memory and historical information, enabling precise recall of relevant content and providing comprehensive support for problem-solving. Second, a \"inhibition-cognition\" task optimization strategy refines the problem-solving process by suppressing irrelevant information, decomposing tasks, and iteratively revising through cognitive simulation, thereby establishing a clear and efficient problem-solving pathway.",
    citations: 1,
    ranking: ["中科院1区", "Q1", "TOP", "IF 11.6"]
  },
  {
    id: "pub-7",
    title: "Recommending engineering knowledge with context-aware agentic AI: a case study in on-site wind turbines assembly",
    authors: "C Chen, X Wu, W Zhuang, Ji Wang, J Bao, X Li",
    journal: "Journal of Engineering Design",
    year: 2025,
    highlight: true,
    link: "#",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754572633.png?width=8000&height=8000&resize=contain",
    abstract: "With the rapid development of the renewable energy industry, the demand for on-site assembly of wind turbines has been increasing. However, the assembly process of wind turbines involves complex process knowledge and high contextual constraints, and traditional knowledge recommendation methods have certain limitations in addressing these challenges. To improve the efficiency and accuracy of workers in acquiring specialized knowledge at the assembly site, this paper proposes a context-driven multi-agent collaborative solution generation method. This method fully considers contextual constraints and interdisciplinary collaboration issues by constructing a multi-agent system that combines specialized knowledge of wind turbine assembly with situational information, thereby recommending knowledge related to specific tasks.",
    citations: 0,
    ranking: ["中科院2区", "Q2", "IF 3.4"]
  },
  {
    id: "pub-1",
    title: "A layer-wise anomaly prediction method for 3D printing process leveraging multimodal data",
    authors: "X Wu, C Chen, W Zhuang, Ji Wang, J Bao, X Li",
    journal: "Journal of Engineering Design",
    year: 2025,
    highlight: true,
    link: "#",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754645273.png?width=8000&height=8000&resize=contain",
    abstract: "Reliable anomaly detection in 3D printing is critical for ensuring part quality and process stability, yet conventional datadriven methods often fail under cold-start conditions and long-range dependencies. To overcome these challenges, this paper proposes a layer-wise anomaly prediction framework that combines large language model (LLM) reasoning with multimodal physical sensing. A stage-adaptive Prompt adjustment mechanism is introduced, which dynamically integrates material properties, process parameters, sensor states, and task semantics with time-series data as a unified input. This enables the model to capture both global semantics and local temporal variations across print layers.",
    citations: 0,
    ranking: ["中科院2区", "Q2", "IF 3.4"]
  },
  {
    id: "pub-6",
    title: "A real-time and lightweight driver fatigue detection model using anchor-free and visual-attention mechanisms",
    authors: "Ji Wang, B Li, Z Li, P Xu, L Li",
    journal: "Applied Intelligence",
    year: 2024,
    highlight: true,
    link: "https://doi.org/10.1007/s10489-024-05696-4",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754701196.png?width=8000&height=8000&resize=contain",
    abstract: "Driver fatigue is a major cause of traffic accidents. This paper proposes a real-time and lightweight driver fatigue detection model (EMFastDet) based on anchor-free and visual-attention mechanisms. The model uses a lightweight backbone to extract features and an anchor-free detection head to locate facial landmarks. A visual-attention mechanism is integrated to enhance the feature representation of key regions like eyes and mouth. Experimental results on several datasets demonstrate that the proposed model achieves a good balance between accuracy and speed, making it suitable for deployment on edge devices.",
    citations: 4,
    ranking: ["中科院2区", "Q2", "IF 3.5"]
  },
  {
    id: "pub-4",
    title: "DAssd-Net: a lightweight steel surface defect detection model based on multi-branch dilated convolution aggregation and multi-domain perception detection head",
    authors: "Ji Wang, P Xu, L Li, F Zhang",
    journal: "Sensors",
    year: 2023,
    highlight: true,
    link: "https://doi.org/10.3390/s23125488",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754823583.png?width=8000&height=8000&resize=contain",
    abstract: "Steel surface defect detection is crucial for quality control in the steel industry. This paper proposes DAssd-Net, a lightweight steel surface defect detection model. The model features a multi-branch dilated convolution aggregation module to capture multi-scale context information and a multi-domain perception detection head to improve the localization of various types of defects. The model is designed to be computationally efficient while maintaining high detection accuracy, enabling real-time inspection on industrial production lines.",
    citations: 21,
      ranking: ["中科院三区", "Q2", "IF 3.5"]
    },
    {
      id: "pub-5",
      title: "Visual sensing and depth perception for welding robots and their industrial applications",
      authors: "Ji Wang, L Li, P Xu",
      journal: "Sensors",
      year: 2023,
      highlight: true,
      link: "https://doi.org/10.3390/s23249700",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754762056.png?width=8000&height=8000&resize=contain",
      abstract: "Welding robots are widely used in modern manufacturing. This paper provides a comprehensive review of visual sensing and depth perception technologies for welding robots. We discuss various sensing techniques, including structured light, stereo vision, and time-of-flight sensors, and their applications in weld seam tracking, pool monitoring, and defect inspection. We also highlight current challenges and future research directions in the field of intelligent welding robotics.",
      citations: 23,
      ranking: ["中科院三区", "Q2", "IF 3.5"]
    },
    {
      id: "pub-2",
      title: "Design and analysis of welding inspection robot",
      authors: "P Zhang, Ji Wang, F Zhang, P Xu, L Li, B Li",
      journal: "Scientific Reports",
      year: 2022,
      highlight: true,
      link: "https://doi.org/10.1038/s41598-022-27209-4",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754864619.png?width=8000&height=8000&resize=contain",
      abstract: "Periodic inspection of weld seam quality is important for assessing equipment reliability. To save labor costs and improve efficiency, an autonomous navigation and inspection robot is developed. The development process involves the design of chassis damping, target detection mechanism, control system, and algorithms. For performing weld inspection in complex, outdoor, environments, an algorithm is developed for the robot to avoid any obstacles. This algorithm for planning the inspection route is based on an improved timed-elastic-band (TEB) algorithm. The developed robot is capable of conducting inspection tasks in complex and dangerous environments efficiently and autonomously.",
      citations: 10,
      ranking: ["中科院二区", "Q2", "IF 3.9"]
    }
];

const internshipProjects: Project[] = [
  {
    id: "proj-intern-1",
    title: "PDF Keyword Search & Identification (AI Intern)",
    description: "Designed keyword-based content localization rules for complex PDFs. Used PP-OCRv2 for key region identification and constructed synthetic datasets for model fine-tuning, achieving a 15% improvement in accuracy.",
    tags: ["PP-OCRv2", "NLP", "PDF Analysis"],
  },
  {
    id: "proj-intern-2",
    title: "Electronic Seal & Document Detection (Algorithm Intern)",
    description: "Optimized segmentation algorithms for electronic seals, improving accuracy by 25.9% and reducing rejection rate by 28.3%. Developed corner detection and classification models for various certificates.",
    tags: ["Computer Vision", "Segmentation", "Corner Detection"],
  },
  {
    id: "proj-intern-3",
    title: "Lightweight Driver Fatigue Detection (Algorithm Intern)",
    description: "Developed an Anchor-Free lightweight detection model (3.19MB) for DMS. Achieved 4.71ms inference time on DSP and mAP0.5 of 0.7. Participated in dataset collection and labeling.",
    image: "/driver-fatigue-detection.png",
    tags: ["Anchor-Free", "DMS", "Edge AI"],
  },
];

const visualInspectionProjects: Project[] = [
  {
    id: "proj-2",
    title: "EMFastDet",
    description: "A real-time, lightweight driver fatigue detection system using visual attention mechanisms for vehicle-mounted platforms. Optimized for Snapdragon chips.",
    tags: ["Deep Learning", "Edge Computing", "SA8155P"],
  },
  {
    id: "proj-3",
    title: "DAssd-Net",
    description: "Lightweight defect detection model for steel surfaces, achieving high accuracy with minimal computational overhead using MobileNetv2 backbone.",
    tags: ["Industrial Inspection", "CNN", "MobileNetv2"],
    image: "/Dassd-net.png",
  },
  {
    id: "proj-1",
    title: "Welding Inspection Robot",
    description: "Design and development of an autonomous robot for inspecting weld seam quality in complex environments.",
    tags: ["Robotics", "Computer Vision", "Hardware Design"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/00601f25-80c7-4552-a858-00fca7a46999/image-1767754864619.png?width=8000&height=8000&resize=contain",
  },
];

const industrialIntelligenceProjects: Project[] = [
  {
    id: "proj-hc-llm-kg-diagnosis",
    title: "LLM+KG-based Vehicle Fault Diagnosis",
    description: "Developed a fault diagnosis framework that integrates Large Language Models (LLMs) with a domain Knowledge Graph (KG). The system combines KG-grounded retrieval, structured knowledge injection, and multi-step reasoning to support accurate diagnosis, interpretable evidence tracing, and robust troubleshooting dialogue for driving/vehicle faults.",
    images: ["/HC-dialogue.png", "/HC-KG.png", "/HC-knowledge.png"],
    tags: ["Industrial LLM", "Knowledge Graph", "Fault Diagnosis", "RAG", "Reasoning"],
  },
  {
    id: "proj-weld-defect-llm",
    title: "LLM-assisted Welding Defect Root-Cause Analysis",
    description: "Proposed an LLM-based framework for root-cause analysis of welding defects in bridge weathering steel. The approach fuses multi-perspective welding knowledge via an associative memory mechanism, combines factual and historical retrieval for precise evidence recall, and uses an inhibition–cognition task optimization loop to suppress irrelevant information, decompose tasks, and iteratively refine reasoning.",
    image: "/weld-dialogue.png",
    tags: ["Industrial LLM", "Knowledge Retrieval", "Causal Analysis", "Manufacturing"],
  },
];

const wavefragAcousticsProjects: Project[] = [
  {
    id: "proj-wavefrag-acoustics",
    title: "Wavefrag Acoustics: Acquisition • Imaging • Diagnosis",
    description:
      "Acoustic acquisition and imaging products plus algorithm R&D, covering acoustic signal acquisition, acoustic imaging, acoustic fault diagnosis, and acoustic foundation models. Links: https://wavefrag.com/ ; https://github.com/wavefrag",
    tags: [
      "Wavefrag",
      "acoustics",
      "acoustic imaging",
      "signal acquisition",
      "fault diagnosis",
      "foundation models",
    ],
    images: ["/acoustic-production.png", "/acoustic-software.png"],
  },
];

export const projectSections: ProjectSection[] = [
  {
    id: "section-industrial-intelligence",
    title: "Industrial Intelligence Projects",
    projects: industrialIntelligenceProjects,
  },
  {
    id: "section-wavefrag-acoustics",
    title: "Wavefrag Acoustics Projects",
    projects: wavefragAcousticsProjects,
  },
  {
    id: "section-visual-inspection",
    title: "Visual Inspection Projects",
    projects: visualInspectionProjects,
  },
  {
    id: "section-internship",
    title: "Internship Projects",
    projects: internshipProjects,
  },
];

// Flat list kept for the current UI (src/app/page.tsx), in categorized order.
export const projects: Project[] = projectSections.flatMap((s) => s.projects);

