import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import Projects from "./Components/Projects/projects";

function App() {

  return ( 
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
       <Navbar/>
       <Home/>
       <Projects/>
       <Footer/>
    </div>
  );
}

export default App;
