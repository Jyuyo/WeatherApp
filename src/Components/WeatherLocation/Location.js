import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => (
    <div className='locationContainer'>
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;