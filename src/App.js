import React from 'react';
import './App.css';
import CollegeDetails from './CollegeDetails';
import college from './college';
function App() {
  const display = () => {
    var a=[]
    for(var i=0;i<college.colleges.length;i++){
      a.push(<CollegeDetails id={i+1} />)

    }
    return a;
        
  }
  
  return (
    <div className="App">
     <h4 style={{marginLeft:"10px",color:"#716E6D"}}>Colleges in North India</h4>
     {display()}
    </div>
  );
}

export default App;
