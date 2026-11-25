import Navbar from "../components/Navbar";
import Hero from "../components/Hero"



function Courses() {
  return (
    <div>
        <Navbar />
        <Hero />
        <h1 className="text-3xl font-bold underline">Courses</h1>
        <p>Explore our wide range of courses designed to help you master React and web development.</p>
    </div>
  );
}

export default Courses;