import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";


function Home() {
  return (
   
    <div>
    <Navbar />
    <Hero />
      <h1 className="text-3xl font-bold underline">Welcome to Loctech React academy</h1>
      <p>We offer a variety of courses to help you learn React and other web development technologies.</p>


       <CourseCard />
    </div>
  );
}

export default Home;