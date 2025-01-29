import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";

function App() {

  return ( 
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
