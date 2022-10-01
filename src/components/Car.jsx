const Car = ({ driver_name, car_no, index, checkOut }) => {
  const getCheckinString = () => {
    var currentdate = new Date();
    return (
      "Checkin : " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " (" +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ")"
    );
  };
  const getCheckoutString = () => {
    var currentdate = new Date();
    return (
      "Checkout : " +
      (parseInt(currentdate.getDate()) + 1) +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " (" +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ")"
    );
  };

  return (
    <>
      <div className="car">
        <div className="details">
          <h3>{car_no}</h3>
          <h3>{driver_name}</h3>
        </div>
        <div className="time">
          <div>{getCheckinString()}</div>
          <div>{getCheckoutString()}</div>
        </div>
        <div className="btn">
          <button onClick={() => checkOut(index)}>Checkout</button>
        </div>
      </div>
      <style jsx="true">{`
        .car {
          background: #05aa22;
          padding: 10px 20px;
          margin: 10px;
        }
        .time {
          margin: 10px 0px;
        }
        .details {
          display: flex;
          justify-content: space-between;
        }
        .btn {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Car;
