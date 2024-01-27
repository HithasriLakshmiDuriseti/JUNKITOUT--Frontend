import { useState } from 'react';

const MyWastePage = () => {
  const [email, setEmail] = useState('');
  const [wasteData, setWasteData] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleShowData = () => {
    // Assuming you have an API endpoint to fetch waste data for a specific email
    fetch(`http://localhost:8081/api/getMyWaste?email=${email}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setWasteData(data.data);
          setShowData(true);
        } else {
          // Handle the case when there is an error or no data is found
          console.error('Error fetching waste data:', data.message);
        }
      })
      .catch(error => {
        // Handle network errors or other issues
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>MyWaste Page</h2>
      <div>
        <label htmlFor="emailInput">Enter your email:</label>
        <input
          type="email"
          id="emailInput"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleShowData}>Show</button>
      </div>

      {showData && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Weight</th>
                <th>Coins</th>
              </tr>
            </thead>
            <tbody>
              {wasteData.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.weight}</td>
                  <td>{row.coins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyWastePage;
