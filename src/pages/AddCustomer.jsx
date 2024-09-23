import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting customer data:", { customer_name: name, email, phone });
  
    axios.post('http://localhost:5000/customers', {
      customer_name: name,
      email,
      phone
    })
    .then(response => {
      console.log("Customer added:", response.data);
      setName('');
      setEmail('');
      setPhone('');
    })
    .catch(error => {
      console.error("There was an error while adding this customer!", error);
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer</h2>

      {/* Name field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      {/* Email field */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      {/* Phone field */}
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />

      {/* Submit button */}
      <button type="submit">Add New Customer</button>
    </form>
  );
}

export default AddCustomer;