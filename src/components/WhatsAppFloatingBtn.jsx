import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloatingBtn() {
  return (
    <>
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          left: 30px; /* Positioned at bottom left */
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          box-shadow: 0px 4px 15px rgba(37, 211, 102, 0.4);
          z-index: 9999;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          animation: pulse-animation 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          background-color: #128C7E;
        }

        @keyframes pulse-animation {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 50px;
            height: 50px;
            font-size: 28px;
            bottom: 20px;
            left: 20px;
          }
        }
      `}</style>
      
      {/* 
        You can customize the pre-filled message by changing the "text" parameter in the URL.
        Number extracted from user request: 7390999498
      */}
      <a 
        href="https://wa.me/917390999498?text=Hi%20Nitin,%20I'd%20like%20to%20discuss%20a%20project!" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
