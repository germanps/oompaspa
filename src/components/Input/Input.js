import React from 'react'
import './Input.scss'
import lens from '../../assets/ic_search.png'
import PropTypes from 'prop-types'

export const Input = ({ handleInputChange }) => {
    const inputLens = {
        backgroundImage: `url(${lens})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "10px",
        backgroundPosition: "right 5px bottom 5px"
    }
    return (
        <div className="input-wrapper">
            <label htmlFor="search" className="sr-only">Búsqueda</label>
            <input
                id="search"
                type="text"
                placeholder="Search"
                name="search"
                onChange={handleInputChange}
                style={inputLens}
                className="control"
                autoComplete="off"
            />
        </div>
    )
}

Input.propTypes = {
    handleInputChange: PropTypes.func.isRequired
}