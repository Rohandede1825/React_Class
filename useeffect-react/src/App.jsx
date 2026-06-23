import React, { useState, useEffect } from "react";

function App() {

  useEffect(()=>{
    console.log("useEffect called");
  },[])

  

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;