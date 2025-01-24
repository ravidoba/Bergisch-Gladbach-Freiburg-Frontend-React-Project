import React, { useState } from "react";
import data from "./12345.json";
import Navbar from "../Navbar/Navbar";
import "./Transcript.css";
import SearchIcon from "../../assets/Icons/search-interface-symbol.png";
import TranscriptBanner from "../../assets/Transcript Banner.png";
import Footer from "../Footer/Footer";

interface Course {
  code: string;
  title: string;
  grade: string;
  credits: number;
}

interface Semester {
  semester: string;
  term: string;
  courses: Course[];
}

interface StudentData {
  name: string;
  dob: string;
  enrollmentNo: string;
  course: string;
  courseStartYear: string;
  courseCompletionYear: string;
  semesters: Semester[];
}

const typedData: { [key: string]: StudentData } = data;

const TranscriptPage: React.FC = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = () => {
    const trimmedEnrollmentNumber = enrollmentNumber.trim();

    console.log("Searching for enrollment number:", trimmedEnrollmentNumber);
    console.log("Available keys:", Object.keys(typedData));

    if (typedData[trimmedEnrollmentNumber]) {
      setStudentData(typedData[trimmedEnrollmentNumber]);
      setError("");
    } else {
      setStudentData(null);
      setError("No record found. Please check the enrollment number.");
    }
  };

  return (
    <div>
      <Navbar />
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
            {studentData ? (
              <div className="student-info">
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>{studentData.name || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Date of Birth:</strong></td>
                      <td>{studentData.dob || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Enrollment No:</strong></td>
                      <td>{studentData.enrollmentNo || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Course:</strong></td>
                      <td>{studentData.course || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Course Start Year:</strong></td>
                      <td>{studentData.courseStartYear || "N/A"}</td>
                    </tr>
                    <tr>
                      <td><strong>Course Completion Year:</strong></td>
                      <td>{studentData.courseCompletionYear || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
                {studentData.semesters.map((semester, index) => (
                  <div key={index} className="semester-section">
                    <h3>{semester.semester} - {semester.term}</h3>
                    <table className="course-table">
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Title</th>
                          <th>Grade</th>
                          <th>Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester.courses.map((course, idx) => (
                          <tr key={idx}>
                            <td>{course.code}</td>
                            <td>{course.title}</td>
                            <td>{course.grade}</td>
                            <td>{course.credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ) : (
              !error && <p>Please enter a valid enrollment number to search.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TranscriptPage;
