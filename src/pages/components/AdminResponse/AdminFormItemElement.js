import React from "react";
export default function FormItemElement(props) {
  return (
    <div className="items">
      <div className="form-group">
        <p>Items</p>
      </div>

      <div className="tablet">
        <table>
          <div className="table-head">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td>Coffee</td>
              <td>NGN 600</td>
              <td>4 Cups</td>
            </tr>
           
          </div>
        </table>
      </div>
    </div>
  );
}
