import React from "react";

const Button = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //we will see the page after 1sec
  const addPost = async () => {
    "use server"; //We can use this function to render at server
    console.log("add post");
  };
  return (
    <>
      <button className="cursor-pointer" onClick={addPost}>
        click me
      </button>
    </>
  );
};

export default Button;
