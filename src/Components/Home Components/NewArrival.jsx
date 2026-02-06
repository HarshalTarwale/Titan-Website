import React from "react";
import Heading1 from "../Heading1.jsx";
import NewCard from "./NewCard.jsx";

const NewArrival = () => {
  return (
    <div className="w-full flex justify-center px-[12vw] text-white mb-[30vh]">
      <div className=" w-full ">
        <Heading1
          text="New Arrivals"
          style={{ WebkitTextStroke: "0.5px white" }}
        />
        <div className="newcard-holder mt-[10vh] flex justify-between">
          <NewCard imageSrc="public/Home/Arrival images/OMEGA50 anniversary - Charles Helleu 1.png" />
          <NewCard imageSrc="public/Home/Arrival images/NASA Took OMEGA's Speedmaster to the Moon; Swatch Took it Across the Galaxy 1.png" />
          <NewCard imageSrc="public/Home/Arrival images/NASA Took OMEGA's Speedmaster to the Moon; Swatch Took it Across the Galaxy (1) 1.png" />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
