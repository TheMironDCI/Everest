import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="join-container container form-container">
      <h1 className="join-text contact-text">Join</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Courses</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>English</option>
            <option>Russian</option>
            <option>Frontend</option>
            <option>Dispaching</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Telephone Number</label>
          <input type="tel" className="form-control" value={console.log()}/>
        </div>
        <div className="form-group">
          <button className="btn join-submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Join;
