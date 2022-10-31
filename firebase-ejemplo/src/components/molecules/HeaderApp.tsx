import React from "react";
import { useFirebase } from "../../contexts/use-firebase";

export const HeaderApp = () => {
  const { firebaseUser } = useFirebase();
  return <div>HeaderApp</div>;
};
