import React from "react";
import { useState } from "react";

const App =()=>{
  const [data, setData] = useState({data:[]});  

  const handelClick=async ()=>{
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
      });
    const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error ", err);
    } 
  };

  console.log(data);
  
  
    return(
    <>
    <div>
      <button className="btn" onClick={handelClick}>Get Data</button>
    </div>
    </>
  );
}


export default App;