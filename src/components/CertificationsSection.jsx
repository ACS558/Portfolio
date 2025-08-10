import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const CertificationsSection = ({ certifications, onCertClick }) => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const CERTS_LIMIT = 3;
  const displayedCerts = showAllCerts
    ? certifications
    : certifications.slice(0, CERTS_LIMIT);

  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <Award className="inline-block mr-3" /> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={cert.imageUrl}
                alt={cert.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/1e293b/ffffff?text=Certificate`;
                }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-300 flex-grow">
                  {cert.name}
                </h3>
                <p className="text-gray-400 mt-2">{cert.issuer}</p>
                <p className="text-gray-300 font-semibold bg-gray-600 px-3 py-1 rounded-full text-sm self-start mt-4">
                  {cert.date}
                </p>
                <div className="mt-6 flex justify-end gap-2">
                  {cert.url !== "#" && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-sm py-2 px-4 rounded-full hover:bg-gray-600/50 inline-flex items-center gap-1.5"
                    >
                      <ExternalLink size={16} /> Verify
                    </a>
                  )}
                  <button
                    onClick={() => onCertClick(cert)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {certifications.length > CERTS_LIMIT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              {showAllCerts ? "Show Less" : "Show More"}
              {showAllCerts ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
