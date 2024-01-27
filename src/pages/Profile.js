import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    id: 1,
    username: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      phoneNumber: '', 
    },
  });

  const [isEditingAddress, setIsEditingAddress] = useState(false);

  useEffect(() => {
    // Fetch user details from an API or other data source
    // Simulating data fetching for demonstration purposes
    // Replace this with actual API calls in a real application
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    // Simulated API response
    const mockUserDetails = {
      id: 1,
      username: 'Sita Ram',
      email: 'sitaram@gmail.com',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        phoneNumber: '',
      },
    };

    setUserDetails(mockUserDetails);
  };

  const handleAddressChange = (field, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      address: {
        ...prevDetails.address,
        [field]: value,
      },
    }));
  };

  const handleEditAddress = () => {
    setIsEditingAddress(true);
  };

  const handleSaveChanges = () => {
    if (userDetails.address.phoneNumber.length === 10) {
      setIsEditingAddress(false);
      // Implement logic to save the updated details to the server
      console.log('Updated details:', userDetails);
      // Simulated API call or save logic
    } else {
      alert('Phone number must be 10 digits.');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        <p>Welcome, {userDetails.fullName}!</p>
      </div>

      <div className="profile-section">
        <h3>User Details</h3>
        <p>
          <strong>Username:</strong> {userDetails.username}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Address:</strong>{' '}
          {isEditingAddress ? (
            <>
              <label>
                Street:
                <input
                  type="text"
                  value={userDetails.address.street}
                  onChange={(e) => handleAddressChange('street', e.target.value)}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  value={userDetails.address.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  value={userDetails.address.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                />
              </label>
              <label>
                Postal Code:
                <input
                  type="text"
                  value={userDetails.address.postalCode}
                  onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={userDetails.address.phoneNumber}
                  onChange={(e) => handleAddressChange('phoneNumber', e.target.value)}
                />
              </label>
            </>
          ) : (
            <>
              {userDetails.address.street}, {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.postalCode}
              <br />
              <strong>Phone Number:</strong> {userDetails.address.phoneNumber}
            </>
          )}
        </p>

        <div className="address-form">
          {isEditingAddress ? (
            <button onClick={handleSaveChanges}>Save Changes</button>
          ) : (
            <button onClick={handleEditAddress}>Edit Address</button>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default Profile;