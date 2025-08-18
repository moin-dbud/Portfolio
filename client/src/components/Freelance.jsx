import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGlobe, FaPaintBrush, FaRobot, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { assets } from "../assets/assets"; 

export default function Freelance() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaGlobe className="text-blue-400 text-2xl" />,
      title: "Website Development",
      points: [
        "Custom landing pages",
        "Portfolio & personal branding sites",
        "E-commerce features (cart, orders)",
        "Fully responsive and SEO-optimized",
      ],
      image: assets.web, 
    },
    {
      icon: <FaPaintBrush className="text-pink-400 text-2xl" />,
      title: "UI/UX Design",
      points: [
        "Modern, minimal design",
        "Mobile-first layouts",
        "Interactive prototypes (Figma)",
        "User-focused interfaces",
      ],
      image: assets.uiux, 
    },
    {
      icon: <FaRobot className="text-purple-400 text-2xl" />,
      title: "AI & Automation Tools",
      points: [
        "AI-powered web apps",
        "API integrations",
        "Automation scripts & backend services",
        "Real-time apps",
      ],
      image: assets.ai, 
    },
  ];

  const benefits = [
    { text: "Affordable & beginner-friendly pricing", color: "text-green-400" },
    { text: "Fast turnaround with quality", color: "text-blue-400" },
    { text: "1:1 communication throughout", color: "text-teal-400" },
    { text: "Free basic SEO & mobile optimization", color: "text-red-400" },
  ];

  return (
    <section id="service" className="bg-[#090704] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-orange-500 text-3xl md:text-4xl font-semibold text-center"
          data-aos="fade-up"
        >
          Freelancing Services
        </h2>
        <p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping small businesses go digital — affordably and beautifully.
        </p>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-64 h-48 object-cover rounded-xl shadow-lg mb-6"
              />
              <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  {service.icon}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-1 text-gray-300">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="https://wa.me/7249339058"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ef8c00] hover:bg-white text-white hover:text-[#ef8c00] px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition"
          >
            <FaWhatsapp /> Let’s Connect on WhatsApp
          </a>
        </div>

        {/* Why Work With Me */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-lg font-bold text-pink-400 mb-6">
            Why Work With Me?
          </h3>
          <div className="flex flex-col items-center space-y-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className={`${benefit.color} text-lg`} />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
