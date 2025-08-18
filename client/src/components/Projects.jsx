import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "Portfolio Website",
    image: assets.portfolio,
    description:
      " Personal portfolio showcasing projects, skills, and services with a modern UI.",
    tags: ["React","JavaScript", "Tailwind"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Auth System",
    image: assets.authsystem,
    description:
      "Secure authentication system with JWT, refresh tokens, and role-based access control.",
    tags: ["JWT", "Node.js", "React", "MongoDB"],
    liveLink: "https://auth-system-tan.vercel.app/",
    sourceCode: "https://github.com/moin-dbud/Auth-System",
  },
  {
    title: "Resume Analyzer",
    image: assets.resumeanalyzer,
    description:
      "AI-powered resume analyzer that provides insights on skills, formatting, and relevance.",
    tags: ["Gemini", "JavaScript", "FastAPI", "Tailwind CSS"],
    liveLink: "https://resume-analyzer-three-wine.vercel.app/",
    sourceCode: "https://github.com/moin-dbud/Resume-Analyzer",
  },
  {
    title: "Job Portal",
    image: assets.jobportal,
    description:
      "Full-stack job portal for recruiters and job seekers with dashboard and filters.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://jobverse-client.vercel.app/",
    sourceCode: "https://github.com/moin-dbud/JOB-PORTAL",
  },
  
];

export default function ProjectsSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const paginatedProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section id="project" className="bg-[#090704] w-full py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-orange-400 font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="space-y-28">
          {paginatedProjects.map((project, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row items-center justify-between gap-12"
            >
              {/* Image */}
              <div
                className="w-full md:w-1/2"
                data-aos="fade-right"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full cursor-pointer rounded-xl"
                />
              </div>

              {/* Text */}
              <div
                className="w-full md:w-1/2 text-white space-y-4"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.liveLink}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16 gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setPage((prev) =>
                prev < Math.floor(projects.length / itemsPerPage) ? prev + 1 : prev
              )
            }
            disabled={page >= Math.floor(projects.length / itemsPerPage)}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
