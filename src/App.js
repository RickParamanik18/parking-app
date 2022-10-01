import { useEffect, useState } from "react";
import Car from "./components/Car";

function App() {
  const PARKING_LIMIT = 10;
  const [formData, setFormData] = useState({});
  const [parkedCars, setParkedCars] = useState([]);
  const [records, setRecords] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    parkedCars.length < PARKING_LIMIT
      ? setParkedCars((prev) => [...prev, formData])
      : alert("no slot availale");
    e.target[0].value = e.target[1].value = "";
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const checkOut = (index) => {
    setParkedCars((prev) => {
      return prev.filter((item, i) => {
        return i != index;
      });
    });
  };

  useEffect(()=>{
    setParkedCars([
      {car_no:"WB40TN2020",driver_name:"Rick"},
      {car_no:"TN40AD1920",driver_name:"Pradip"},
    ])
  },[])

  return (
    <>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Car No"
            name="car_no"
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            placeholder="Driver Name"
            name="driver_name"
            onChange={changeHandler}
            required
          />
          <button type="submit">Checkin</button>
        </form>
      </div>
      <h3 className="parking-info">
        {parkedCars.length < PARKING_LIMIT
          ? `${PARKING_LIMIT - parkedCars.length} parking slots available`
          : "All slots are occupied"}
      </h3>

      <div className="garage">
        {parkedCars.map((carData, index) => (
          <Car
            driver_name={carData.driver_name}
            car_no={carData.car_no}
            index={index}
            checkOut={checkOut}
            key={index}
          />
        ))}
      </div>

      <style jsx="true">{`
        .search-bar,
        .parking-info {
          display: flex;
          justify-content: center;
        }
        .garage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px 50px;
        }
        form input {
          margin: 20px 10px;
        }
        @media only screen and (max-width: 600px) {
          .garage {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default App;
