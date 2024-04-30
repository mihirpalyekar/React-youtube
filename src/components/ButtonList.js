import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Cooking",
  "Valentine",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((ele,index) => (
        <Button key={index} name={ele} />
      ))}
    </div>
  );
};

export default ButtonList;
