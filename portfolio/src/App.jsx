import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
function App() {

  return ( 
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
       <Navbar/>
       <Home/>
       <About/>
       <Experience/>
       <Footer/>
    </div>
  );
}

export default App;
