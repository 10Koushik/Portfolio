import React from "react";
import avatarImg from "../../assets/abc.png";
import TextChanger from "../TextChanger";
import Cv from "../../assets/Koushik.pdf"

const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10 ">
                <h1 className="text-4xl md:text-7xl font-bold flex leading-normal tracking-tighter">
                    <TextChanger />
                </h1>
                <p className="text-base md:text-xl tracking-tight">
                    A passionate software developer crafting efficient, scalable, and user-friendly solutions with cutting-edge technologies.
                </p>
                <a
                    href= {Cv}
                    download="koushik.pdf"
                    className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                >
                    📄 Download CV
                </a>
            </div>
            <div><img className="" src={avatarImg} alt="" /></div>
        </div>
    );
};
export default Home;




// import React from "react";
// import avatarImg from "../../assets/abc.png";

// const Home = () => {
//     return (
//         <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//             <div className="md:w-2/4 md:pt-10 ">
//                 <h1 className="text-5x1 md:text-8x1 font-bold flex leading-normal tracking-tighter">
//                     Hello I am Koushik 
//                 </h1>
//                 <p className="text-sm md:text-2x1 tracking-tight ">
//                     A passionate software developer crafting efficient, scalable, and user-friendly solutions with cutting-edge technologies.
//                 </p>
//                 <button className="mt-5 md:md-10text-white py02 px-3 text-sm md:text-1g md:py-2 md:px-4 hover:opacity-85 
//                 duration-300 hover:scale-105 font-semibold rounded-3x1bg-[#465697]">Contact Me</button>
//             </div>
//             <div><img className="w-2/5" src={avatarImg} alt="" /></div> 
//         </div>
//     );
// };
// export default Home;