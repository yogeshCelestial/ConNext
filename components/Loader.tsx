import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{ height: '200px', width: '100%', padding: '10% 40%' }}>
            <InfinitySpin
                width="250"
                color="teal"
            />
        </div>

    )
}

export default Loader;
