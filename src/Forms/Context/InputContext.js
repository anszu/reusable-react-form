// Context used to control input elements by passing value and onChange handler

import React from "react";

const InputContext = React.createContext({});

export const InputProvider = InputContext.Provider;
export const InputConsumer = InputContext.Consumer;