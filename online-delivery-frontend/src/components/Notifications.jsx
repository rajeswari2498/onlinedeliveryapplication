import React, { useState } from 'react';
import './Notifications.css'

function Notifications() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Function to trigger email client
  const sendEmailNotification = () => {
    const subject = "Order Confirmation"; // Subject of the email
    const body = encodeURIComponent(message); // Encoding the message
    const mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
  };

  // Function to trigger SMS client (for mobile devices)
  const sendSMSNotification = () => {
    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <div>
      <h2>Send Notifications</h2>
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      
      {/* Phone Input */}
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      
      {/* Message Input */}
      <textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      
      {/* Buttons to trigger email and SMS */}
      <button onClick={sendEmailNotification}>Send Email</button>
      <button onClick={sendSMSNotification}>Send SMS</button>
    </div>
  );
}

export default Notifications;
