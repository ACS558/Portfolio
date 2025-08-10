import React, { useRef, useState, useEffect } from "react"; // Import useEffect
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const HireMeModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'sent', 'error'

  // This useEffect hook will run whenever the 'status' changes.
  useEffect(() => {
    // If the email was just sent successfully...
    if (status === "sent") {
      // ...wait for 2 seconds (2000 milliseconds) and then close the modal.
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      // This is a cleanup function. If the user closes the modal manually
      // before the 2 seconds are up, it will clear the timer.
      return () => clearTimeout(timer);
    }
  }, [status, onClose]); // The effect depends on 'status' and 'onClose'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        setStatus("sent");
        form.current.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        setStatus("error");
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">Get in Touch</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <form ref={form} onSubmit={sendEmail} className="p-6 space-y-5">
          {/* The form inputs remain the same */}
          <div>
            <label
              htmlFor="contactPerson"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="contactPerson"
              id="contactPerson"
              required
              className="w-full bg-gray-700 text-white rounded-md p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-gray-700 text-white rounded-md p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Hi, I'd like to discuss..."
              required
              className="w-full bg-gray-700 text-white rounded-md p-2.5"
            ></textarea>
          </div>
          <div className="flex justify-end pt-2">
            {status === "sent" ? (
              <p className="text-green-400">Message sent!</p>
            ) : status === "error" ? (
              <p className="text-red-400">Failed to send. Please try again.</p>
            ) : (
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-2 px-5 rounded-full inline-flex items-center gap-2"
              >
                {status === "sending" ? "Sending..." : "Send"}
                {status !== "sending" && <Send size={16} />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
