import React from "react";
import avatarImg from "../../assets/abc.png";
import TextChanger from "../TextChanger";

const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10 ">
                <h1 className="text-4xl md:text-7xl font-bold flex leading-normal tracking-tighter">
                    <TextChanger/>
                </h1>
                <p className="text-base md:text-xl tracking-tight">
                    A passionate software developer crafting efficient, scalable, and user-friendly solutions with cutting-edge technologies.
                </p>
                <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
                duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
            </div>
            <div><img className="" src={avatarImg} alt="" /></div> 
        </div>
    );
};
export default Home;