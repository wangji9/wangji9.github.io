"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Github, 
  BookOpen, 
  MapPin, 
  School,
  FileText,
  Twitter,
  Database,
  ChevronDown,
  ChevronUp,
  Layout,
  Quote
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData, news, publications, projectSections, Publication, Project } from "@/lib/data";

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100">
    <div className="max-w-6xl mx-auto px-6 h-12 flex items-center">
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth">
        <a href="#" className="text-sm font-bold text-zinc-900 shrink-0 border-b-2 border-zinc-900 pb-3 mt-3">Homepage</a>
        <a href="#about" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">About Me</a>
        <a href="#news" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">🔥 News</a>
        <a href="#research" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">💻 Research</a>
        <a href="#publications" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">📚 Publications</a>
        <a href="#projects" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">🚀 Projects</a>
        <a href="#education" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">🎓 Educations</a>
        <a href="#honors" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0">🏆 Honors</a>
      </div>
    </div>
  </nav>
);

const Sidebar = () => (
  <aside className="w-full lg:w-56 flex-shrink-0 lg:sticky lg:top-14 self-start space-y-6">
    <div className="space-y-4 text-center lg:text-left">
      <div className="flex justify-center">
        <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
        <Image
          src={profileData.image || "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=p1zRSlIAAAAJ"}
          alt={profileData.name}
          width={256}
          height={256}
          className="object-cover w-full h-full"
          priority
        />
        </div>
      </div>
      
      <div className="space-y-1">
        <h1 className="text-xl font-serif font-bold text-zinc-900 tracking-tight">
          {profileData.name}
        </h1>
        <p className="text-zinc-500 text-xs font-medium leading-relaxed">
          {profileData.affiliation}
        </p>
        <p className="text-zinc-400 text-[11px] leading-relaxed mt-2 italic">
          PhD Student. Focusing on industrial intelligence, industrial foundation models, and tacit industrial knowledge.
        </p>
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-zinc-100">
      <div className="flex items-center gap-3 text-zinc-700">
        <MapPin size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">Shanghai, China</span>
      </div>
      <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 text-zinc-700 hover:text-blue-600 transition-colors">
        <Mail size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">Email</span>
      </a>
      <a href="#" className="flex items-center gap-3 text-zinc-700 hover:text-blue-600 transition-colors">
        <Twitter size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">Twitter</span>
      </a>
      <a href="#" className="flex items-center gap-3 text-zinc-700 hover:text-blue-600 transition-colors">
        <Database size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">DBLP</span>
      </a>
      <a href={profileData.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 hover:text-blue-600 transition-colors">
        <Github size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">GitHub</span>
      </a>
      <a href={profileData.scholarLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-700 hover:text-blue-600 transition-colors">
        <BookOpen size={15} className="text-zinc-400" />
        <span className="text-xs font-medium">Google Scholar</span>
      </a>
    </div>
  </aside>
);

const PublicationCard = ({ pub }: { pub: Publication }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-6 py-5 border-b border-zinc-100 last:border-0 group transition-all">
      {pub.image ? (
        <div className="w-full sm:w-56 h-36 flex-shrink-0 rounded bg-zinc-50 border border-zinc-200 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 z-10 bg-blue-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br uppercase">
            {pub.journal} {pub.year}
          </div>
          <Image 
            src={pub.image} 
            alt={pub.title} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="w-full sm:w-56 h-36 flex-shrink-0 rounded bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-300">
          <FileText size={32} />
        </div>
      )}
      
      <div className="flex-1 space-y-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {pub.ranking?.map((rank, i) => {
            let bgColor = "bg-blue-50";
            let textColor = "text-blue-700";
            let borderColor = "border-blue-100";

            if (rank === "Q1") {
              bgColor = "bg-green-50";
              textColor = "text-green-700";
              borderColor = "border-green-100";
            } else if (rank === "Q2") {
              bgColor = "bg-amber-50";
              textColor = "text-amber-700";
              borderColor = "border-amber-100";
            } else if (rank.includes("IF")) {
              bgColor = "bg-zinc-100";
              textColor = "text-zinc-600";
              borderColor = "border-zinc-200";
            }

            return (
              <span key={i} className={`text-[10px] font-bold px-1.5 py-0.5 ${bgColor} ${textColor} border ${borderColor} rounded`}>
                {rank}
              </span>
            );
          })}
          {pub.citations !== undefined && (
            <div className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 rounded">
              <Quote size={10} className="fill-zinc-600" />
              Cited by {pub.citations}
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-left group/title flex items-start gap-2"
        >
          <h3 className="text-[17px] font-sans font-bold leading-snug text-zinc-900 group-hover/title:text-blue-700 transition-colors">
            {pub.highlight && <span className="mr-1">🔥</span>}
            {pub.title}
          </h3>
          <span className="mt-1 text-zinc-400 group-hover/title:text-blue-700">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>

        <p className="text-[14px] text-zinc-600 leading-relaxed">
          {pub.authors.split('Ji Wang').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i !== arr.length - 1 && <span className="font-bold text-zinc-900 underline underline-offset-2 decoration-zinc-300">Ji Wang</span>}
            </React.Fragment>
          ))}
        </p>

        <AnimatePresence>
          {isOpen && pub.abstract && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 p-4 bg-zinc-50 rounded-sm border-l-2 border-blue-600">
                <p className="text-[13px] text-zinc-600 leading-relaxed">
                  <span className="font-bold text-zinc-900 block mb-1">Abstract:</span>
                  {pub.abstract}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a 
            href={pub.link || "#"} 
            className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 bg-zinc-100 text-zinc-600 border border-zinc-200 rounded hover:bg-zinc-200 transition-colors"
          >
            <Layout size={12} />
            Project
          </a>
          <span className="text-[11px] text-zinc-400 italic">
            {pub.journal}, {pub.year}
          </span>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, emoji, id }: { title: string; emoji: string; id?: string }) => (
  <div id={id} className="flex items-center gap-2 mb-0 border-b border-zinc-100 pb-1 scroll-mt-20">
    <span className="text-2xl">{emoji}</span>
    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h2>
  </div>
);

const ProjectImageCarousel = ({
  title,
  image,
  images,
}: {
  title: string;
  image?: string;
  images?: string[];
}) => {
  const slides = (images && images.length > 0 ? images : image ? [image] : []) as string[];
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  const canNavigate = slides.length > 1;

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative w-full h-36 mb-4 rounded overflow-hidden shadow-sm">
      <Image
        src={slides[index]}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {canNavigate && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white/80 border border-zinc-200 text-zinc-700 shadow-sm hover:bg-white transition-colors grid place-items-center"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white/80 border border-zinc-200 text-zinc-700 shadow-sm hover:bg-white transition-colors grid place-items-center"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans text-zinc-900">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-6 lg:py-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
        <Sidebar />

        <main className="flex-1 space-y-8">
          {/* Hero section */}
          <div className="space-y-4">
            <div id="about" className="space-y-3 text-[15px] leading-relaxed text-zinc-700">
              <p>
                Hi, I am a{" "}
    <span className="font-medium text-zinc-900">PhD student</span> at{" "}
    <span className="font-medium text-zinc-900">Donghua University</span>,
    majoring in Mechanical Engineering. My research interests focus on{" "}
    <span className="font-bold italic text-zinc-900">
      industrial foundation models, industrial knowledge graphs, and the acquisition and utilization of
      tacit industrial knowledge.
    </span>{" "}
    I also co-founded{" "}
    <span className="font-medium text-zinc-900">Wavefrag Studio</span> as a
    partner (GitHub:{" "}
    <a
      href="https://github.com/wavefrag"
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 hover:underline"
    >
      github.com/wavefrag
    </a>
    ), focusing on the development of acoustic acquisition and imaging products as
    well as software algorithm R&amp;D (details at{" "}
    <a
      href="https://wavefrag.com/"
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 hover:underline"
    >
      wavefrag.com
    </a>
    ).
              </p>
            </div>
          </div>

          {/* News */}
          <section>
            <SectionHeader title="News" emoji="🔥" id="news" />
            <ul className="space-y-2 mt-0 pt-2">
              {[...news].sort((a, b) => b.date.localeCompare(a.date)).map((item) => (
                <li key={item.id} className="flex items-start gap-4 text-[14px]">
                  <span className="italic text-zinc-400 shrink-0 font-medium pt-0.5">{item.date}:</span>
                  <div className="flex gap-2 items-start">
                    <span className="mt-0.5">🔥</span>
                    <p className="text-zinc-700 leading-relaxed">{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Research */}
          <section>
            <SectionHeader title="Research" emoji="💻" id="research" />
            <div className="grid grid-cols-1 gap-6 mt-0 pt-2">
              <div className="space-y-1 group">
                <h3 className="font-bold text-[16px] text-zinc-900 group-hover:text-blue-700 transition-colors">Industrial Visual Sensing | Shanghai University of Engineering Science (SUES)</h3>
                <p className="text-[13px] text-zinc-500 italic">2021.06 - 2024.09, Steel Surface Defect Detection. Supervisor: <span className="underline decoration-zinc-200">Prof. Peiquan Xu</span>.</p>
                <p className="text-[14px] text-zinc-600 leading-relaxed max-w-3xl">Focused on multi-domain perception heads and anchor-free mechanisms for industrial edge deployment. Developed lightweight CNN architectures optimized for real-time inference.</p>
              </div>
              <div className="space-y-1 group">
                <h3 className="font-bold text-[16px] text-zinc-900 group-hover:text-blue-700 transition-colors">Industrial Intelligence | Industrial Intelligence Institute, Donghua University</h3>
                <p className="text-[13px] text-zinc-500 italic">2024.01 - (present), Causal Analysis for Engineering Design. Supervisor: <span className="underline decoration-zinc-200">Prof. Xinyu Li</span>.</p>
                <p className="text-[14px] text-zinc-600 leading-relaxed max-w-3xl">
                  Researching industrial foundation models, industrial knowledge graphs, and the acquisition and utilization of tacit industrial knowledge to address real-world engineering problems in complex industrial scenarios, leveraging LLMs, agents, and knowledge graph technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section>
            <SectionHeader title="Publications" emoji="📚" id="publications" />
            <div className="space-y-0 mt-0">
              {[...publications].sort((a, b) => b.year - a.year).map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <SectionHeader title="Projects" emoji="🚀" id="projects" />
            <div className="mt-0 pt-3 space-y-8">
              {projectSections.map((section) => (
                <div key={section.id} className="space-y-3">
                  <div
                    id={section.id}
                    className="flex items-center gap-2 mb-0 border-b border-zinc-100 pb-1 scroll-mt-20"
                  >
                    <span className="text-xl">
                      {section.id === "section-industrial-intelligence" && "🧠"}
                      {section.id === "section-visual-inspection" && "�️"}
                      {section.id === "section-internship" && "�"}
                    </span>
                    {section.id === "section-wavefrag-acoustics" && (
                      <span className="inline-flex items-center justify-center h-5 w-5">
                        <Image
                          src="/WaveFrag.ico"
                          alt="Wavefrag"
                          width={72}
                          height={72}
                          className="h-[30px] w-[30px]"
                        />
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-zinc-900 tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.projects.map((project) => (
                      <div key={project.id} className="p-4 border border-zinc-100 rounded-lg hover:border-zinc-200 hover:shadow-md transition-all group bg-white">
                        <ProjectImageCarousel title={project.title} image={project.image} images={(project as Project).images} />
                        <h4 className="font-bold text-[16px] mb-1 group-hover:text-blue-700 transition-colors">{project.title}</h4>
                        <p className="text-[13px] text-zinc-600 mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 bg-zinc-50 text-zinc-500 border border-zinc-100 rounded-full">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Educations */}
          <section>
            <SectionHeader title="Educations" emoji="🎓" id="education" />
            <div className="space-y-4 mt-0 pt-3">
              <div className="flex gap-5 group">
                <div className="w-12 h-12 shrink-0 bg-zinc-50 rounded-xl flex items-center justify-center border border-zinc-100 shadow-sm group-hover:bg-blue-50 transition-colors">
                  <School size={24} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-[16px]">Donghua University</h3>
                  <p className="text-[13px] text-zinc-500 italic">2024.01 - (present), PhD Student, Institute of Industrial Intelligence</p>
                </div>
              </div>
            </div>
          </section>

          {/* Honors */}
          <section>
            <SectionHeader title="Honors and Awards" emoji="🏆" id="honors" />
            <ul className="space-y-2 mt-0 pt-2">
              <li className="flex items-start gap-4 text-[14px] group">
                <span className="text-xl group-hover:scale-110 transition-transform">🥇</span>
                <p className="text-zinc-700 font-medium pt-0.5">Graduate National Scholarship, 2023</p>
              </li>
              <li className="flex items-start gap-4 text-[14px] group">
                <span className="text-xl group-hover:scale-110 transition-transform">🥈</span>
                <p className="text-zinc-700 font-medium pt-0.5">Excellent Graduate Student, 2024</p>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="pt-16 pb-8 text-center border-t border-zinc-100">
            <p className="text-[12px] text-zinc-400 font-medium">
              © {new Date().getFullYear()} {profileData.name} · Homepage · Built with Next.js
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
