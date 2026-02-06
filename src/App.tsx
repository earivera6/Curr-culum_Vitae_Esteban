import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
