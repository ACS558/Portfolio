import React from "react";
import { X } from "lucide-react";

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
      >
        <X size={32} />
      </button>
      <div
        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.imageUrl}
          alt={`Certificate for ${cert.name}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/1200x800/ffffff/1e293b?text=Image+Not+Found`;
          }}
        />
      </div>
    </div>
  );
};

export default CertificateModal;
