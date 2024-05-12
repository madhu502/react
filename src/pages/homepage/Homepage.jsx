import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";

const Homepage = () => {
  
  //Print Hello!, when page load (Automatic)
  useEffect(() => {
    console.log("Hello!");
  });

  //trigger test api
  testApi().then((res) => {
    console.log(res); //test api is working
  });

  return <div>HomePage!!!</div>;
};

export default Homepage;
