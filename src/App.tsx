import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Menu from "./components/Navbar/Menu/Menu";
import Admission from "./components/Admission/Admission";
import Transcript from "./components/Transcript/Transcript";

// Campus Pages
import Athletics from "./components/Campus/Athletics/Athletics";
import Museums from "./components/Campus/Museums/Museums";
import Libraries from "./components/Campus/Libraries/Libraries";
import Engineering from "./components/Academics/Engineering/Engineering";
import BusinessManagement from "./components/Academics/BusinessManagement/BusinessManagement";
import ArtAndHumanities from "./components/Academics/ArtAndHumanities/ArtAndHumanities";
import HealthScience from "./components/Academics/HealthScience/HealthScience";
import ReportCopyrightInfringement from "./components/Footer/SecurityAndBranch/ReportCopyrightInfringement/ReportCopyrightInfringement";
import ReportSecurityIssue from "./components/Footer/SecurityAndBranch/ReportSecurityIssue/ReportSecurityIssue";
import TrademarkNotice from "./components/Footer/SecurityAndBranch/TrademarkNotice/TrademarkNotice";
import AboutUs from "./components/AboutUs/AboutUs";
import WorkAt from "./components/WorkAt/WorkAt";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MarksSheet from "./components/Transcript/MarksSheet";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/transcript" element={<Transcript />} />
        <Route path="/marks-sheet" element={<MarksSheet />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/work-at" element={<WorkAt />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Add new Academic related pages */}
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/business-management" element={<BusinessManagement />} />
        <Route path="/art-and-humanities" element={<ArtAndHumanities />} />
        <Route path="/health-science" element={<HealthScience />} />

        {/* Add new Campus related pages */}
        <Route path="/libraries" element={<Libraries />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/athletics" element={<Athletics />} />

        {/* Add Footer related pages */}
        <Route path="/report-copyright-infringement" element={<ReportCopyrightInfringement />} />
        <Route path="/report-security-issue" element={<ReportSecurityIssue />} />
        <Route path="/trademark-notice" element={<TrademarkNotice />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
