import React from 'react';
import './Dashboard.css';

function Dashboard({ orders }) {
  // Add a fallback for when orders is undefined or null
  const totalOrders = orders?.length || 0;
  const totalIncome = orders?.reduce((total, order) => total + order.total, 0) || 0;
  const completedOrders = orders?.filter(order => order.status.toLowerCase() === 'completed').length || 0;
  const processingOrders = orders?.filter(order => order.status.toLowerCase() === 'processing').length || 0;

  return (
    <div className="dashboard-container">
      {/* <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">Welcome, Admin</div>
      </header> */}

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Orders</h3>
          <p>{completedOrders}</p>
        </div>
        <div className="stat-card">
          <h3>Processing Orders</h3>
          <p>{processingOrders}</p>
        </div>
      </div>

      <div className="order-summary">
        <h3>Latest Orders</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Safeguard added in case orders are not yet available */}
            {orders?.slice(0, 5).map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                    {order.status}
                  </span>
                </td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
