import * as React from "react";
import Img from "./logo.png";
import "./react.css";

export const generateHelloWorld = (): string => {
  return "hello world.";
};

export const App: React.FC = () => {
  return (
    <div>
      <div>
        {generateHelloWorld()}
        <img src={Img}></img>
      </div>
    </div>
  );
};
