import React, { useState } from 'react';

const pizzaEdges = [
  { id: 1, name: 'Thin Crust', price: 10 },
  { id: 2, name: 'Thick Crust', price: 12 },
  { id: 3, name: 'Gluten-Free', price: 15 },
];

const extraMaterials = [
  { id: 1, name: 'Extra Cheese', price: 2 },
  { id: 2, name: 'Pepperoni', price: 3 },
  { id: 3, name: 'Mushrooms', price: 2 },
];

const OrderPage = () => {
  const [selectedEdge, setSelectedEdge] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [pizzaCount, setPizzaCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleEdgeChange = (edge) => {
    setSelectedEdge(edge);
    calculateTotalPrice();
  };

  const handleExtraChange = (extra) => {
    const isSelected = selectedExtras.includes(extra);
    if (isSelected) {
      setSelectedExtras(selectedExtras.filter((e) => e !== extra));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
    calculateTotalPrice();
  };

  const handlePizzaCountChange = (count) => {
    setPizzaCount(count);
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    const edgePrice = selectedEdge ? selectedEdge.price : 0;
    const extrasPrice = selectedExtras.reduce((acc, extra) => acc + extra.price, 0);
    const totalPrice = (edgePrice + extrasPrice) * pizzaCount;
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <h1>Order Page</h1>
      <h2>Pizza Edge:</h2>
      <ul>
        {pizzaEdges.map((edge) => (
          <li key={edge.id}>
            <input
              type="radio"
              name="edge"
              value={edge.id}
              checked={selectedEdge === edge}
              onChange={() => handleEdgeChange(edge)}
            />
            <span>{edge.name} (${edge.price})</span>
          </li>
        ))}
      </ul>
      <h2>Extra Materials:</h2>
      <ul>
        {extraMaterials.map((extra) => (
          <li key={extra.id}>
            <input
              type="checkbox"
              name="extra"
              value={extra.id}
              checked={selectedExtras.includes(extra)}
              onChange={() => handleExtraChange(extra)}
            />
            <span>{extra.name} (${extra.price})</span>
          </li>
        ))}
      </ul>
      <h2>Pizza Count:</h2>
      <input
        type="number"
        value={pizzaCount}
        onChange={(e) => handlePizzaCountChange(parseInt(e.target.value))}
      />
      <h2>Total Price: ${totalPrice}</h2>
      <Link to="/order-success">
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default OrderPage;