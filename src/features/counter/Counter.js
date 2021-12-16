import React from "react";
import "./Counter.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  resetAmount
} from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div className="btns-container">
        <div
          className="button"
        >
          {" "}
          <div className="by-amount-btn">
            <p>Decrement by</p>{" "}
            <input
            type='search'
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            ></input>
          </div>
          <button className="calculate"
          onClick={() => dispatch(decrementByAmount(amount))}
          > Substract </button>
        </div>
        <div className="counter">
          <button
            className="btn-decrement"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <div className="count">
            {count}
            <button className="calculate" onClick={()=> dispatch(resetAmount())}> Reset </button>
          </div>
          <button
            className="btn-increment"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>
        <div
          className="button"
        >
          {" "}
          <div className="by-amount-btn">
            <p>Increment by</p>{" "}
            <input
            type='search'
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            ></input>
          </div>
          <button className="calculate"
          onClick={() => dispatch(incrementByAmount(amount))}
          > Add </button>
        </div>
      </div>
    </div>
  );
}
