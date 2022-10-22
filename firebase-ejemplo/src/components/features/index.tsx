import React from "react";
import { ProtectedPage } from "../layouts/ProtectedPage";

export const HomePage = () => {
  return (
    <ProtectedPage>
      <div>HomePage</div>
    </ProtectedPage>
  );
};
