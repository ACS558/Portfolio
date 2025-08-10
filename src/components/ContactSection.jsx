import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = ({ email, phone }) => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for new opportunities. My inbox is always
          open, so feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a
            href={`mailto:${email}`}
            className="bg-gray-700 p-6 rounded-lg flex flex-col items-center group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Mail
              size={32}
              className="text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300 break-all">
              {email}
            </p>
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="bg-gray-700 p-6 rounded-lg flex flex-col items-center group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Phone
              size={32}
              className="text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
              {phone}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
