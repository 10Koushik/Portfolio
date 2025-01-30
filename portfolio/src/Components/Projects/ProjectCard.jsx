import React from 'react'

const ProjectCard = ({ bannerImg, title, main }) => {
  return (
    <div className="w-80 h-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-[260px]">
        <img
          src={bannerImg}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-300">{main}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
