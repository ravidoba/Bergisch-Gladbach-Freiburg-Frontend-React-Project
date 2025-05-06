import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transcript.css";
import SearchIcon from "../../assets/Icons/search-interface-symbol.png";
import TranscriptBanner from "../../assets/Transcript Banner.png";

const TranscriptPage: React.FC = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const validEnrollmentNumbers = [
    "BGFBTCSE00088385",
    "BGFMTCSE00084346",
    "BGFMTCSE00074975",
    "BGFBTCSE00078594",

  ];

  const handleSearch = () => {
    const trimmedEnrollmentNumber = enrollmentNumber.trim();

    if (validEnrollmentNumbers.includes(trimmedEnrollmentNumber)) {
      setError("");
      navigate(`/transcript/${trimmedEnrollmentNumber}`);
    } else {
      setError("No record found. Please check the enrollment number.");
    }
  };

  const handleDownload = () => {
    const trimmedEnrollmentNumber = enrollmentNumber.trim();

    if (validEnrollmentNumbers.includes(trimmedEnrollmentNumber)) {
      setError("");
      navigate(`/transcript/pdf/${trimmedEnrollmentNumber}`);
    } else {
      setError("No record found. Please check the enrollment number.");
    }
  };

  return (
    <div>
      <div className="transcript-banner" style={{ backgroundImage: `url(${TranscriptBanner})` }}>
        <div className="transcript-container">
          <div className="overlay">
            <h1>Transcript</h1>
            <div className="search-bar">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter Enrollment Number"
                  value={enrollmentNumber}
                  onChange={(e) => setEnrollmentNumber(e.target.value)}
                />
                <button onClick={handleSearch}>
                  <img src={SearchIcon} alt="Search" className="search-icon" />
                </button>
              </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            {!error && !enrollmentNumber && <p>Please enter a valid enrollment number to search.</p>}
            <button onClick={handleDownload}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptPage;
