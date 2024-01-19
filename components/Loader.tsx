import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ height: '200px', width: '100%', padding: '10% 40%' }}>
            <InfinitySpin
                visible={true}
                width="250"
                color="teal"
                ariaLabel="infinity-spin-loading"
            />
        </div>

    )
}

export default Loader;
