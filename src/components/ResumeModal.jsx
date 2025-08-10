import React from "react";
import { X, Download } from "lucide-react";

const ResumeModal = ({ isOpen, onClose, cvPath, resumeImage }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full md:w-3/4 lg:w-1/2 max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">My Resume</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <img
            src={resumeImage}
            alt="Resume"
            className="w-full h-auto rounded-md shadow-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x1131/ffffff/1e293b?text=Resume+Not+Found";
            }}
          />
        </div>
        <div className="flex justify-end p-4 border-t border-gray-700">
          <a
            href={cvPath}
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Download size={20} /> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
