import React, { useEffect } from 'react';

const Debits = () => {

    useEffect(() => {
        fetch('https://moj-api.herokuapp.com/debits')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    }, []);


  return (
    <div>
      <h1>Debits</h1>
    </div>
  );
}

export default Debits;