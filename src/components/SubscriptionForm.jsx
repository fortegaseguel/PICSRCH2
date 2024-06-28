import { color } from 'framer-motion';
import React, { useState } from 'react';

const SubscriptionForm = ({ buttonColor, textColor }) => { 
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email ${email} has been submitted for notifications!`);
    // Aquí se agrega la lógica para manejar el envío del email, como una llamada a una API.
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="flex w-[20%] bg-white rounded-full overflow-hidden shadow-lg outline" style={{ "outline": "1px solid #F87E68" }}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 p-2 pl-6 text-[#F87E68] leading-tight focus:outline-none w-1/2"
          style={{ color: textColor }}
        />
        <button
          type="submit"
          className="text-white rounded-r-full px-6 focus:outline-none"
          style={{ backgroundColor: buttonColor }}
        >
          Get notified
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
