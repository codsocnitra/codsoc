import React, { ReactNode } from "react";

type AOSWrapperProps = {
  children: ReactNode;
};

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default AOSWrapper;
