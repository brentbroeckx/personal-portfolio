import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    var htmlElement = document.getElementsByTagName('html');
    htmlElement.className = 'dark'
  })

  return (
    <>
      <Navbar />
      <Component className="scroll-smooth" {...pageProps} />
    </>
  );
}

export default MyApp;
