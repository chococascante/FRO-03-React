import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
} from "react-router-dom";
import { ListaTodos } from "../components/organisms/ListaTodos";
import { NotFoundPage } from "../components/pages/404";

export const Routes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<ListaTodos />} />

        <Route path="*" element={<NotFoundPage />} />
      </RouterRoutes>
    </Router>
  );
};
