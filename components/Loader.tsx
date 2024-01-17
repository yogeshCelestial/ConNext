import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ height: '300px', width: '100%' }}>
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
