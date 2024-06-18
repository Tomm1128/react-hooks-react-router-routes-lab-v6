import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
