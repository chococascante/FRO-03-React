import React from "react";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <h1>React Firebase</h1>
        <nav>
          <a>Home</a>
          <a>Equipo</a>
        </nav>
      </header>
      <main className="w-screen h-screen flex items-center justify-center">
        {children}
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};
