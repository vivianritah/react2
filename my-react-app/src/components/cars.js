import React from "react";

class Car extends React.Component {
  render() {
    const carList = [
      { carName: 'Hilux', price: 3500000, year: 2017 },
      { carName: 'Primo', price: 3000000, year: 2018 },
      { carName: 'Subaru', price: 2000000, year: 2019 }
    ];


    return (
      <div className="cars">
        <h1>List of my cars {this.props.name}</h1>
        {carList.length>0 &&
        <h2> There are {carList.length} cars in the garage</h2>
        }

        {carList.length>0 ?         <ul>
          {carList.map((car, index) => (
            <li key={index}>
              <div>Car Name: {car.carName}</div>
              <div>Price: {car.price}</div>
              <div>Year: {car.year}</div>
            </li>
          ))}
        </ul> : <p>There are no cars</p>}


      </div>
    );
  }
}

export default Car;