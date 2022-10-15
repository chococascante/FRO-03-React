import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { createContext } from "react";

const firebaseCredentials: FirebaseOptions = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export interface FirebaseContextProps {
  app: FirebaseApp | null;
  login: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  register: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
}

const FirebaseContext = createContext<FirebaseContextProps>({
  app: null,
  login: () => Promise.resolve(undefined),
  register: () => Promise.resolve(undefined),
});

export const FirebaseProvider = ({ children }: any) => {
  const [app, setApp] = React.useState<FirebaseApp | null>(null);
  const [firebaseUser, setFirebaseUser] = React.useState<
    UserCredential | undefined
  >(undefined);

  const login = async (email: string, password: string) => {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    setFirebaseUser(user);
    return user;
  };

  const register = async (email: string, password: string) => {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setFirebaseUser(user);
    return user;
  };

  React.useEffect(() => {
    const app = initializeApp(firebaseCredentials);
    setApp(app);
  }, []);

  const contextValue: FirebaseContextProps = {
    app,
    login,
    register,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
