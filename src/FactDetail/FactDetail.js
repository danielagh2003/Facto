import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FactDetail = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        setFact(response.data.text);
      } catch (error) {
        console.error('Error fetching random fact', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Random Fact Detail</h2>
      <p>{fact}</p>
    </div>
  );
};

export default FactDetail;