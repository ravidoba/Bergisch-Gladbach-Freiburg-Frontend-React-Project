// AdmissionForm.tsx
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdmissionBanner from "../../assets/Admission Banner.png";
import "./Admission.css";

const programs = {
  Engineering: [
    "Computer Engineering",
    "Robotic Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
  ],
  "Business Management": [
    "Human Resource Management",
    "Marketing",
    "Finance",
    "Entrepreneurship",
    "Operations Management",
    "Healthcare Management",
    "International Business",
    "Business Analytics",
  ],
  "Art and Humanities": [
    "History",
    "Literature",
    "Philosophy",
    "Religion",
    "Translation and Interpretation",
    "Art",
    "Music Cultures",
    "Protestant Theology",
  ],
  "Health Science": [
    "Optical Science",
    "Molecular Medicine",
    "Sports Science for Health",
    "Global Urban Health",
    "Neuroscience",
  ],
};

type ProgramKey = keyof typeof programs;

interface FormData {
  firstName: string;
  lastName: string;
  program: ProgramKey;
  course: string;
  lastQualification: string;
  remarks: string;
  file: File | null;
}

const Admission: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    program: "Engineering",
    course: "",
    lastQualification: "",
    remarks: "",
    file: null,
  });

  const [availableCourses, setAvailableCourses] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const selectedProgramCourses = programs[formData.program] || [];
    setAvailableCourses(selectedProgramCourses);
  }, [formData.program]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    console.log("Selected File:", file); // Debugging

    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
      }));
    }
  };


  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.program) newErrors.program = "Program is required.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.lastQualification)
      newErrors.lastQualification = "Last Qualification is required.";
    if (!formData.file) newErrors.file = "File upload is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    // Pause for 2 seconds before showing the success message
    setTimeout(() => {
      toast.success("Form submitted successfully! We will reach out to you soon.");
    }, 2000);

    // Reset the form and errors after the toast
    setErrors({});
    setFormData({
      firstName: "",
      lastName: "",
      program: "Engineering",
      course: "",
      lastQualification: "",
      remarks: "",
      file: null,
    });
  };

  return (
    <div>

      <div className="admission-container" style={{ backgroundImage: `url(${AdmissionBanner})` }}>
        <form className="admission-form" onSubmit={handleSubmit}>
          <h2>Admission Form</h2>
          <div className="admission-user-inputs">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}

            <label>Program</label>
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">Select Program</option>
              {Object.keys(programs).map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            {errors.program && <div className="error">{errors.program}</div>}

            <label>Course</label>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Select Course</option>
              {availableCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <div className="error">{errors.course}</div>}

            <label>Last Qualification</label>
            <input
              type="text"
              name="lastQualification"
              placeholder="Enter Last Qualification"
              value={formData.lastQualification}
              onChange={handleChange}
            />
            {errors.lastQualification && (
              <div className="error">{errors.lastQualification}</div>
            )}

            <label>Upload File</label>
            <input
              type="file"
              accept=".pdf, .jpeg, .jpg, .png"
              onChange={handleFileChange}
            />
            {errors.file && <div className="error">{errors.file}</div>}

            <label>Remarks</label>
            <textarea
              name="remarks"
              placeholder="Enter Remarks"
              value={formData.remarks}
              onChange={handleChange}
              maxLength={500}
            />
            {errors.remarks && <div className="error">{errors.remarks}</div>}

            <button type="submit">Submit</button>
          </div>
        </form>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
};

export default Admission;
