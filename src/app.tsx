import * as React from "react";
import Img from "./logo.png";
import "./react.css";

export const generateHelloWorld = (): string => {
  return "hello world.";
};

export const App: React.FC = () => {
  const [isMounted, setMount] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div data-testid="text">
      {isMounted && (
        <div>
          {generateHelloWorld()}
          <img src={Img}></img>
        </div>
      )}
    </div>
  );
};
