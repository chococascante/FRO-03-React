import React, { PropsWithChildren } from "react";
import { useFirebase } from "../../contexts/use-firebase";
import { useNavigate } from "react-router-dom";

export const AuthPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { firebaseUser, hasAuthLoaded } = useFirebase();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (firebaseUser) {
      navigate("/");
    }
  }, [firebaseUser]);

  if (hasAuthLoaded) {
    return <p>Estoy cargando, deme un toque...</p>;
  }

  return <>{children}</>;
};
