import React from 'react';
import PropTypes from "prop-types";
export default function Animals ({url}) {
return (
    <>
    <img src={url} />
    </>
)
}

Animals.propTypes = {
url: PropTypes.string.isRequired
};