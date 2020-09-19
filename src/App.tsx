import React, { FunctionComponent } from "react";

interface AppProps {
  message: string;
}

export const App: FunctionComponent<AppProps> = ({ message }) => (
  <h2> {message} </h2>
);
