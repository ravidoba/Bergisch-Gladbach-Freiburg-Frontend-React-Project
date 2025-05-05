import data from './BGFBTCSE00088385.json';
import './MarksSheet.css';
import { useRef } from 'react';
import Logo from '../../../public/Black color logo.png';
import TranscriptBanner from '../../assets/Transcript Banner.png';

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
}

interface Data {
  studentDetails: StudentDetails;
  semesters: Semester[];
}

const BTech_MarksSheet = () => {
  const { studentDetails, semesters }: Data = data;
  const marksSheetRef = useRef<HTMLDivElement>(null);


  // Function to calculate total credits and GPA (as totalCredits / subjects) for a semester
  const calculateSemesterData = (courses: Course[]) => {
    const totalCredits = parseFloat(
      courses.reduce((sum, course) => sum + course.credits, 0).toFixed(1)
    );
    const numberOfCourses = courses.length;
    const gpa = numberOfCourses > 0 ? (totalCredits / numberOfCourses).toFixed(1) : '0.0';
    return { totalCredits, gpa, numberOfCourses };
  };

  // Calculate overall totals
  let totalCreditsEarned = 0;
  let totalSubjects = 0;

  semesters.forEach(semester => {
    const { totalCredits, numberOfCourses } = calculateSemesterData(semester.courses);
    totalCreditsEarned = parseFloat((totalCreditsEarned + totalCredits).toFixed(1));
    totalSubjects += numberOfCourses;
  });

  const overallGPA = totalSubjects > 0 ? (totalCreditsEarned / totalSubjects).toFixed(1) : '0.0';

  return (
    <div
      className="marksheet-transcript-banner"
      style={{
        backgroundImage: `url(${TranscriptBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw"
      }}
    >
      <div className="marksheet-marks-sheet-container" ref={marksSheetRef}>
        <div className='marksheet-logo-container'>
          <img src={Logo} alt="Logo" />
          <span>Bergisch Gladbach Freiburg University</span>
        </div>

        <h1 className="marksheet-title">Student Transcript</h1>

        <div className="marksheet-student-info">
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Enrollment No:</strong> {studentDetails.id}</p>
          <p><strong>Date of Birth:</strong> {studentDetails.dob}</p>
          <p><strong>Program:</strong> {studentDetails.program}</p>
          <p><strong>Course Start Year:</strong> 2015</p>
          <p><strong>Course Passing Year:</strong> 2019</p>
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
                        <td>{course.credits}</td>
                        <td>{course.grade}</td>
                        <td>{course.examDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="marksheet-semester-summary">
                  <p><strong>Total Credits Earned:</strong> {totalCredits}</p>
                  <p><strong>Semester GPA :</strong> {gpa}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="marksheet-semester-summary">
          <h3><strong>Total of All Semesters</strong></h3>
          <p><strong>Total Credits Earned:</strong> {totalCreditsEarned}</p>
          <p><strong>Total Subjects:</strong> {totalSubjects}</p>
          <p><strong>Overall GPA (Credits ÷ Subjects):</strong> {overallGPA}</p>
        </div>
      </div>
    </div>
  );
};

export default BTech_MarksSheet;
