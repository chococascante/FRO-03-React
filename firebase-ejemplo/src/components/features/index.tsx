import React from "react";
import { PokeApiContextProvider } from "../../contexts/use-pokemon-api";
import { NextButton } from "../atoms/NextButton";
import { ProtectedPage } from "../layouts/ProtectedPage";

export const HomePage = () => {
  return (
    <ProtectedPage>
      <PokeApiContextProvider>
        <div>HomePage</div>
        <NextButton />
      </PokeApiContextProvider>
    </ProtectedPage>
  );
};
