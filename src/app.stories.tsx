import React from "react";
import { App } from "./app";

export default {
  title: "App",
  component: App,
  parameters: {
    info: { inline: true },
  },
};

export const Component = () => <App></App>;

Component.story = {
  name: "Component",
};
