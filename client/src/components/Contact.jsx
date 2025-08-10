import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, phone, subject, message } = formData;

  try {
    const res = await fetch("https://formspree.io/f/movlywrd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Failed to send message.");
  }
};


  return (
    <section id="contact" className="bg-[#090704] text-white py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8" data-aos="fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
          Get in Touch
        </h2>
        <p className="text-gray-300 mt-2 italic">
          Have a project in mind or just want to connect? I’d love to hear from you.
        </p>
         {/* Contact Info */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col mt-7 items-center gap-2">
            <FaPhoneAlt className="text-pink-400 text-xl" />
            <span className=" font-semibold">Call Me</span>
            <a href="tel:+917249339058" className="text-gray-300 hover:text-white">
              +91 72493 39058
            </a>
          </div>
          <div className="flex flex-col mt-7 items-center gap-2">
            <FaEnvelope className="text-purple-400 text-xl" />
            <span className="font-semibold">Email Me</span>
            <a href="mailto:moinsheikh1303@gmail.com" className="text-gray-300 hover:text-white">
              moinsheikh1303@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#f0faff] p-6 md:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-gray-300"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border-2 border-black text-black rounded-lg w-full focus:outline-none focus:border-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-2 border-black text-black rounded-lg w-full focus:outline-none focus:border-orange-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border-2 border-black text-black rounded-lg w-full focus:outline-none focus:border-orange-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 border-2 border-black text-black rounded-lg w-full focus:outline-none focus:border-orange-400"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 border-2 border-black text-black rounded-lg w-full mt-4 h-32 focus:outline-none focus:border-orange-400"
        ></textarea>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </form>

      {/* Footer */}
      <p
        className="text-center text-gray-400 mt-10 text-sm"
      >
        Built with ❤️ by Me
      </p>
    </section>
  );
};

export default Contact;
