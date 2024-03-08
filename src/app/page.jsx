"use client"

import Navbar from "./Navbar/index.jsx";
import Welcomediv from "./Welcomediv/index.jsx";

export default function Home() {
  return (
    <div className="mainBody">
        <Navbar />
        <Welcomediv/>
    </div>
  );
}
