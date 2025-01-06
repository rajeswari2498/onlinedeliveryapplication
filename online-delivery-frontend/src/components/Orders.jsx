import React from 'react';
import './Orders.css';

const Orders = ({ orders }) => {
  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <div className="orders-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ITEM QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>#{order.id}</td>
                <td>{order.date}</td>
                <td>
                  {/* Display the order status and apply the relevant CSS class */}
                  <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.items} item{order.items > 1 ? 's' : ''}</td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
