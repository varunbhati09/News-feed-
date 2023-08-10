import React, { useState } from 'react';
import './styles.css'; 
const interestsList = ['technology', 'science', 'politics', 'sports']; 

function Interests({ onSelectInterests }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestToggle = (interest) => {
    const updatedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    setSelectedInterests(updatedInterests);
  };

  const handleSaveInterests = () => {
    onSelectInterests(selectedInterests);
  };

  return (
    <div className="container">
      <h2 className="header">Select Interests</h2>
      <div className="interests">
        {interestsList.map((interest) => (
          <label key={interest} className="interest">
            <input
              type="checkbox"
              value={interest}
              checked={selectedInterests.includes(interest)}
              onChange={() => handleInterestToggle(interest)}
            />
            {interest.charAt(0).toUpperCase() + interest.slice(1)}
          </label>
        ))}
        <button className="button" onClick={handleSaveInterests}>Save Interests</button>
      </div>
    </div>
  );
}

export default Interests;
