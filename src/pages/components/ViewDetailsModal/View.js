import React from "react";
import View from "../dashboard/View";
import "./Modal.css";

function View ({ setOpenModal }) {
  return (
    <div className="container">
    <div className="popup" id="popup-1">
      <div className="overlay"></div>
      <div className="content">
        <div className="close-btn" onclick="togglepopup()">&times;</div>
        <div className="top">
          <h2>Expense List</h2>
        </div>
        <div className="mid">
          <h3>Zuri Chat</h3>
          <p>#2223311</p>
        </div>
        <div className="mid-two">
          <h3>{expense.author_name}</h3>
          <p>{new Date(expense.created_at * 1000).toLocaleDateString()}</p>
        </div>
        <div className="tablet">
          <table style="width: 100%">
            <div className="table-head">
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>total</th>
              </tr>
            </div>
            <tr>
              <td>Coffee</td>
              <td>4</td>
              <td>N800</td>
              <td>N3200</td>
            </tr>
            <tr>
              <td>T Fare</td>
              <td>1</td>
              <td>N2000</td>
              <td>N2000</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>N5200</td>
            </tr>
          </table>
        </div>
        <div className="bottom">
          <h3>Status</h3>
          <h4>{expense.status}</h4>
        </div>

        <div className="export">
          <div className="space-btn">
            <button>download receipt</button>
          </div>

          <div className="space-btn">
            <button>print receipt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default View;