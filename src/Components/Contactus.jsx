import { useState } from "react";
import OracelContact from "../assets/OracleContactus.png"



export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Membership is free and open to everyone — students, developers,
            architects, DBAs, and managers. Fill out the form and someone from our
            team will reach out within 48 hours.
          </p>
        </div>

        {/* Form + Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Form */}
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div className="relative">
              <label className="absolute -top-2 left-3 text-xs text-gray-400 bg-white px-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-red-200 bg-red-50 rounded-md px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-red-200 bg-red-50 rounded-md px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-400"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-red-200 bg-red-50 rounded-md px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-400"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              className="w-full border border-red-200 bg-red-50 rounded-md px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-400 resize-none"
            />

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-md shadow-md transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right: Video */}
          <img src={OracelContact} alt="" />
        </div>
      </div>
    </section>
  );
}