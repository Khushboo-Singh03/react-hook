import React, { useState, useEffect } from 'react';

const HOC = (WrappedComponent, entity) => {
  return function WithData() {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
          const json = await res.json();
          setData(json);
          console.log('JSON Data', json);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    const filteredData = data.filter((d) => {
      if (entity === 'users') {
        const { name } = d;
        return name.indexOf(term) >= 0;
      }
      if (entity === 'todos') {
        const { title } = d;
        return title.indexOf(term) >= 0;
      }
      return false; // Return false if entity is neither 'users' nor 'todos'.
    });

    return (
      <>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponent data={filteredData} />
      </>
    );
  };
};

export default HOC;
