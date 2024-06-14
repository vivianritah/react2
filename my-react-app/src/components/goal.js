import React from "react";


function MadeGoal() {
    return <h1>Goal!</h1>;
  }

function MissedGoal(){
  return<h1> Missed! </h1>

  }

// function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//       return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
//   }

function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal /> : <MissedGoal /> }
      </>
    );}
  

export default Goal;

