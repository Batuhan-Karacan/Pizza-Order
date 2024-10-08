import React from 'react';

const OrderSuccessPage = () => {
  const order = JSON.parse(localStorage.getItem('order'));

  return (
    <div>
      <h1>Order Successful!</h1>
      <h2>Your Order:</h2>
      <ul>
        <li>Pizza Edge: {order.edge.name}</li>
        <li>Extra Materials: {order.extras.map((extra) => extra.name).join(', ')}</li>
        <li>Pizza Count: {order.pizzaCount}</li>
      </ul>
      <h2>Total Price: ${order.totalPrice}</h2>
    </div>
  );
};

export default OrderSuccessPage;