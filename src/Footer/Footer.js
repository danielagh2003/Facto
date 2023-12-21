import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        setRandomFact(response.data.text);
      } catch (error) {
        console.error('Eroare la obținerea faptului aleator', error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer>
      <p>Random Fact: {randomFact}</p>
    </footer>
  );
};

export default Footer;