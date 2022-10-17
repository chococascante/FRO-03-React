import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const firebaseCredentials: FirebaseOptions = {
  apiKey: "AIzaSyAeHTgHh7dP6z5Szgy-D8ZSqyMvX9BG_CI",
  authDomain: "clasereact-2f233.firebaseapp.com",
  projectId: "clasereact-2f233",
  storageBucket: "clasereact-2f233.appspot.com",
  messagingSenderId: "841639803877",
  appId: "1:841639803877:web:d239a00abd115cb3d40d0c",
  measurementId: "G-J8XQD4BP85",
};

export interface FirebaseContextProps {
  app: FirebaseApp | null;
  firebaseUser: User | undefined;
  hasAuthLoaded: boolean;
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
  firebaseUser: undefined,
  hasAuthLoaded: true,
  login: () => Promise.resolve(undefined),
  register: () => Promise.resolve(undefined),
});

export const FirebaseProvider = ({ children }: any) => {
  const [app, setApp] = React.useState<FirebaseApp | null>(null);
  const [firebaseUser, setFirebaseUser] = React.useState<User | undefined>(
    undefined
  );
  const [hasAuthLoaded, setHasAuthLoaded] = React.useState(true);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      setFirebaseUser(user.user);
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setFirebaseUser(user.user);

      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const authStateChanged = React.useCallback(
    async (user: User | null) => {
      if (!user) {
        setHasAuthLoaded(false);
        return;
      }

      setFirebaseUser(user);
      setHasAuthLoaded(false);
      navigate("/");
    },
    [navigate]
  );

  React.useEffect(() => {
    const app = initializeApp(firebaseCredentials);
    setApp(app);
  }, []);

  React.useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, [authStateChanged]);

  const contextValue: FirebaseContextProps = {
    app,
    firebaseUser,
    hasAuthLoaded,
    login,
    register,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () =>
  useContext<FirebaseContextProps>(FirebaseContext);
