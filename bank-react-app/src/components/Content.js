import React, { useState } from 'react';
import Debits from './Debits';
import Credits from './Credits';

const Content = () => {
    const [page, setPage] = useState(<Debits />);

    const showDebits = () => {
        setPage(<Debits />);
    }

    const showCredits = () => {
        setPage(<Credits />)
    }


    return (
        <div>
            <button onClick={showDebits}>Debits</button>
            <button onClick={showCredits}>Credits</button>
            {page}
        </div>
    );
}

export default Content;