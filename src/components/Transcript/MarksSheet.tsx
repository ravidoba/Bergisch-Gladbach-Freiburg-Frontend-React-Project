import data from './BGFBTCSE00088385.json';
import './MarksSheet.css';
import TranscriptBanner from "../../assets/Transcript Banner.png";
import { useRef } from 'react';

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

const MarksSheet = () => {
  const { studentDetails, semesters }: Data = data;
  const marksSheetRef = useRef<HTMLDivElement>(null);

  const calculateGPA = (courses: Course[]) => {
    const gradePoints: { [key: string]: number } = { A: 1.0, B: 2.0, C: 3.0, D: 4.0, E: 5.0 };
    let totalCredits = 0;
    let weightedGradeSum = 0;

    courses.forEach(course => {
      const gradePoint = gradePoints[course.grade];
      totalCredits += course.credits;
      weightedGradeSum += gradePoint * course.credits;
    });

    const gpa = weightedGradeSum / totalCredits;
    return { totalCredits, gpa: gpa.toFixed(2) };
  }

  // Calculate total credits and GPA for all semesters
  const totalCreditsAllSemesters = semesters.reduce((sum, semester) => {
    const { totalCredits } = calculateGPA(semester.courses);
    return sum + totalCredits;
  }, 0);

  const weightedGradeSumAllSemesters = semesters.reduce((sum, semester) => {
    const { totalCredits, gpa } = calculateGPA(semester.courses);
    const totalGradePoints = totalCredits * parseFloat(gpa);
    return sum + totalGradePoints;
  }, 0);

  const overallGPA = (weightedGradeSumAllSemesters / totalCreditsAllSemesters).toFixed(2);


  return (
    <div className="transcript-banner" style={{ backgroundImage: `url(${TranscriptBanner})` }}>

      <div className="marks-sheet-container" ref={marksSheetRef}>
        <h1 className="title">Student Transcript</h1>
        <div className="student-info">
          <p><strong>Student Name:</strong> {studentDetails.name}</p>
          <p><strong>Student ID:</strong> {studentDetails.id}</p>
          <p><strong>Date of Birth:</strong> {studentDetails.dob}</p>
          <p><strong>Program:</strong> {studentDetails.program}</p>
        </div>
        {semesters.map((semester, index) => {
          const { totalCredits, gpa } = calculateGPA(semester.courses);

          return (
            <div key={index} className="semester">
              <h2 className="semester-title">{semester.semester}</h2>
              <table className="courses-table">
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
                  {semester.courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.title}</td>
                      <td>{course.code}</td>
                      <td>{course.credits}</td>
                      <td>{course.grade}</td>
                      <td>{course.examDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="semester-summary">
                <p><strong>Total Credits Earned:</strong> {totalCredits}</p>
                <p><strong>Overall GPA:</strong> {gpa}</p>
              </div>
              {/* Display grand total at the end of the last semester */}
              {index === semesters.length - 1 && (
                <div className="semester-summary">
                  <h3><strong>Total of All Semesters</strong></h3>
                  <p><strong>Total Credits Earned:</strong> {totalCreditsAllSemesters}</p>
                  <p><strong>Overall GPA (All Semesters):</strong> {overallGPA}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarksSheet;
