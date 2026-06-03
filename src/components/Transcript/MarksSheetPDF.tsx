import './MarksSheetPDF.css';
import { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Logo from '../../../public/Black color logo.png';

// Define TypeScript types
interface Course {
  title: string;
  code: string;
  credits: number;
  grade: string;
  examDate: string;
}

interface Semester {
  semester: string;
  courses: Course[];
}

interface StudentDetails {
  name: string;
  id: string;
  dob: string;
  program: string;
  courseStartYear:string;
  coursecompletionYear:string;
}

interface MarksSheetProps {
  data: Data;
}
interface Data {
  studentDetails: StudentDetails;
  semesters: Semester[];
}
const MarksSheetPDF: React.FC<MarksSheetProps> = ({ data }) => {
  const { studentDetails, semesters } = data;
  const marksSheetRef = useRef<HTMLDivElement>(null);

  const calculateSemesterData = (courses: Course[]) => {
    const totalCredits = parseFloat(
      courses.reduce((sum, course) => sum + course.credits, 0).toFixed(1)
    );
    const numberOfCourses = courses.length;
    const gpa = numberOfCourses > 0
      ? (totalCredits / numberOfCourses).toFixed(1)
      : '0.0';
    return { totalCredits, gpa, numberOfCourses };
  };

  let totalCreditsEarned = 0;
  let totalSubjects = 0;

  semesters.forEach(semester => {
    const { totalCredits, numberOfCourses } = calculateSemesterData(semester.courses);
    totalCreditsEarned = parseFloat((totalCreditsEarned + totalCredits).toFixed(1));
    totalSubjects += numberOfCourses;
  });

  const overallGPA = totalSubjects > 0
    ? (totalCreditsEarned / totalSubjects).toFixed(1)
    : '0.0';

  const handleDownloadPDF = () => {
    const element = marksSheetRef.current!;
    const options = {
      margin: 5,
      filename: `${studentDetails.id}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="marksheet-transcript-banner">
      <div className="marksheet-marks-sheet-container" ref={marksSheetRef}>
        <div className='marksheet-logo-container'>
          <img src={Logo} alt="Logo" />
          <span>Bergisch Gladbach Freiburg University</span>
        </div>
        <h1 className="marksheet-title">Student Transcript</h1>
        <div className="marksheet-student-info">
          <p><strong>Name :</strong> {studentDetails.name}</p>
          <p><strong>Enrollment No. :</strong> {studentDetails.id}</p>
          <p><strong>Date of Birth :</strong> {studentDetails.dob}</p>
          <p><strong>Program :</strong> {studentDetails.program}</p>
          <p><strong>Course Start Year :</strong> {studentDetails.courseStartYear}</p>
          <p><strong>Course Completion Year :</strong> {studentDetails.coursecompletionYear}</p>
          <br />
        </div>

        {semesters.map((semester, index) => {
          const { totalCredits, gpa } = calculateSemesterData(semester.courses);
          return (
            <div key={index} className={`marksheet-semester-wrapper ${index % 2 === 1 ? "marksheet-page-break" : ""}`}>
              <div className="marksheet-semester">
                <h2 className="marksheet-semester-title">{semester.semester}</h2>
                <table className="marksheet-courses-table">
                  <thead>
                    <tr>
                      <th>Course Title</th>
                      <th>Course Code</th>
                      <th>Credits</th>
                      <th>Grade</th>
                      <th>Exam Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.courses.map((course, idx) => (
                      <tr key={idx}>
                        <td>{course.title}</td>
                        <td>{course.code}</td>
                        <td>{course.credits.toFixed(1)}</td>
                        <td>{course.grade}</td>
                        <td>{course.examDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="marksheet-semester-summary">
                  <p><strong>Total Credits Earned :</strong> {totalCredits.toFixed(1)}</p>
                  <p><strong>Semester GPA :</strong> {gpa}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="marksheet-semester-summary">
          <h3><strong>Total of All Semesters</strong></h3>
          <p><strong>Total Credits Earned :</strong> {totalCreditsEarned.toFixed(1)}</p>
          <p><strong>Total GPA :</strong> {overallGPA}</p>
          <p><strong>Grade : </strong> B</p>
        </div>

        <div className="marksheet-footer">
          <p><strong>Issued by:</strong> Bergisch Gladbach Freiburg University</p>
        </div>
      </div>

      <button className="marksheet-download-btn" onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default MarksSheetPDF;
