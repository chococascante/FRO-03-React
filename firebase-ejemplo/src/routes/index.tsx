import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
} from "react-router-dom";
import { HomePage } from "../components/features";
import { NotFound } from "../components/features/404";
import { Login } from "../components/features/login";
import { SignUp } from "../components/features/signup";
import { FirebaseProvider } from "../contexts/use-firebase";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <FirebaseProvider>
          <RouterRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/404" element={<NotFound />} />
          </RouterRoutes>
        </FirebaseProvider>
      </Router>
    </QueryClientProvider>
  );
};
