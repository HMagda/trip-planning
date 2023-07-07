import React, { useState } from 'react';

const DestinationInput: React.FC = () => {
  const [destinations, setDestinations] = useState<string[]>(['']);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...destinations];
    values[index] = event.target.value;
    setDestinations(values);
  }

  const handleAddClick = () => {
    setDestinations([...destinations, '']);
  }

  const handleRemoveClick = (index: number) => {
    const values = [...destinations];
    values.splice(index, 1);
    setDestinations(values);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call the API to save destinations
    console.log(destinations);
  }

  return (
    <form onSubmit={handleSubmit}>
      {destinations.map((destination, index) => (
        <div key={index}>
          <input
            type="text"
            value={destination}
            onChange={(event) => handleInputChange(index, event)}
            required
          />
          {destinations.length !== 1 && <button type="button" onClick={() => handleRemoveClick(index)}>Remove</button>}
          {destinations.length - 1 === index && <button type="button" onClick={handleAddClick}>Add</button>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DestinationInput;
