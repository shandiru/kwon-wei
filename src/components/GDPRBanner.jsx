import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Consent Banner */}
      {visible && (
        <div className="fixed bottom-6 right-6 max-w-sm p-6 bg-black text-white z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 rounded-none">
          <h3 className="text-lg font-bold mb-2 tracking-tight">COOKIE SETTINGS</h3>
          <p className="text-xs mb-6 text-gray-400 leading-relaxed">
            We use cookies to enhance your experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.{" "}
            <Link
              to="/privacy-policy"
              className="underline text-white hover:text-[#E5162D] transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 text-xs font-bold border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              DECLINE
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 text-xs font-bold bg-[#E5162D] text-white border border-[#E5162D] hover:bg-transparent hover:text-[#E5162D] transition-all duration-300"
            >
              ACCEPT
            </button>
          </div>
        </div>
      )}

      {/* Revisit Settings Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-12 h-12 bg-black border border-white flex items-center justify-center hover:bg-[#E5162D] transition-all duration-300 group shadow-xl"
            title="Privacy Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Settings"
              className="w-5 h-5 invert brightness-0 group-hover:filter-none"
            />
          </button>
        </div>
      )}
    </>
  );
}