import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beverages, setBeverages] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch beverages when component loads
  useEffect(() => {
    fetchBeverages();
  }, []);

  // Fetch beverages from backend API
  const fetchBeverages = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/beverages');
      const data = await response.json();
      setBeverages(data.beverages);
      // Initialize quantities to 0 for each beverage
      const initialQuantities = {};
      data.beverages.forEach(beverage => {
        initialQuantities[beverage.name] = 0;
      });
      setQuantities(initialQuantities);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching beverages:', error);
      setMessage('Error loading beverages');
      setLoading(false);
    }
  };

  // Handle quantity input change
  const handleQuantityChange = (beverageName, value) => {
    setQuantities({
      ...quantities,
      [beverageName]: parseInt(value) || 0
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    beverages.forEach(beverage => {
      total += beverage.price * quantities[beverage.name];
    });
    return total.toFixed(2);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setMessage('Please enter your name');
      return;
    }

    // Check if at least one beverage is selected
    const hasSelection = Object.values(quantities).some(qty => qty > 0);
    if (!hasSelection) {
      setMessage('Please select at least one beverage');
      return;
    }

    // Create beverage orders array with selected items
    const beverageOrders = beverages
      .filter(beverage => quantities[beverage.name] > 0)
      .map(beverage => ({
        beverage: { name: beverage.name },
        quantity: quantities[beverage.name]
      }));

    const total = calculateTotal();

    // Create order object
    const order = {
      customerName: customerName,
      beverageOrders: beverageOrders,
      totalPrice: parseFloat(total)
    };

    // Send order to backend
    try {
      const response = await fetch('http://localhost:3000/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });

      if (response.ok) {
        setMessage('Order submitted successfully!');
        setCustomerName('');
        setQuantities(Object.keys(quantities).reduce((acc, key) => {
          acc[key] = 0;
          return acc;
        }, {}));
      } else {
        setMessage('Error submitting order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setMessage('Error submitting order');
    }
  };

  if (loading) {
    return <div className="container"><p>Loading beverages...</p></div>;
  }

  return (
    <div className="container">
      <h1>Lemonade Stand</h1>
      <h2>Order Your Beverages</h2>

      {message && <div className="message">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <table className="beverages-table">
          <thead>
            <tr>
              <th>Beverage</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {beverages.map((beverage) => (
              <tr key={beverage.name}>
                <td>{beverage.name}</td>
                <td>${beverage.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    min="0"
                    value={quantities[beverage.name]}
                    onChange={(e) => handleQuantityChange(beverage.name, e.target.value)}
                    className="quantity-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total">
          <strong>Total: ${calculateTotal()}</strong>
        </div>

        <button type="submit" className="submit-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default App;
