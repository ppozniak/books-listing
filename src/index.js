import React from "react";
import { render } from "react-dom";
import AppContainer from "./containers/AppContainer";
import "./styles/global-styles.scss";

const appRootNode = document.getElementById("root");
render(<AppContainer />, appRootNode);
