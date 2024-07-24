import React from "react";

const ProgressBar = ({ progress = 1 }) => {
  console.log(progress, "progress");
  const sections = 6;

  return (
    <div className="relative lgw-[638px] md:-w-[500px] sm:w-[400px] w-[300px] h-4 bg-gray-200 rounded-full overflow-hidden">
      {[...Array(sections)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute top-0 bottom-0 transition-all duration-300 ease-in-out ${
              index + 1 <= progress ? "bg-yellow-400" : "bg-gray-300"
            }`}
            style={{
              left: `${(index / sections) * 100}%`,
              right: `${100 - ((index + 1) / sections) * 100}%`,
              transform: index + 1 <= progress ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
            }}
          />
          {index < sections - 1 && (
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10 transition-opacity duration-300"
              style={{
                left: `${((index + 1) / sections) * 100}%`,
                opacity: index + 1 < progress ? 0 : 1,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
