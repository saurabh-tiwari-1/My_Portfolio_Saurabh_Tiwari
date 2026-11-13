import React from "react";
import { achievements } from "../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-4 md:px-10 lg:px-20 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Competitions & <span className="text-purple-500">Hackathons</span>
        </h2>

        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          My participation in technical events, competitions, and experiences
          that help me grow as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-[#151515] border border-gray-800 rounded-2xl p-7
              hover:border-purple-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]
              transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-purple-400 mt-1">{item.organization}</p>
                </div>

                <span
                  className="text-xs text-gray-300 bg-purple-500/10
                  border border-purple-500/30 rounded-full px-3 py-2"
                >
                  {item.date}
                </span>
              </div>

              <p className="text-gray-400 leading-7 mb-6">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-purple-300 bg-[#252525]
                    px-3 py-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
