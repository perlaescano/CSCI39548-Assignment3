
import React, { useEffect } from 'react';
const Credits = () => {
    useEffect(() => {
        fetch('https://moj-api.herokuapp.com/credits')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    }, []);


    
  return (
    <div>
      <h1>Credits</h1>
    </div>
  );
}

export default Credits;