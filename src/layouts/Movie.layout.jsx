import axios from "axios";
import React, { useEffect, useContext } from "react";


// Components
import Navbar from "../components/Navbar/navbar.component";

const MovieLayout = (props) => {
 
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default MovieLayout;