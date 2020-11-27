import React from 'react'
import './OompaItem.scss'
import { formatGender } from '../../Utils/utils'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const OompaItem = ({ oompa }) => {
    return (

        <div className="oompa-item card">
            <img src={oompa.image} className="card-img-top" alt={oompa.first_name} />
            <div className="card-body oompa-item__body">
                <Link to={`./oompa/${oompa.id}`} className="oompa-item__body--link">
                    <h3 className="title">{oompa.first_name}</h3>
                </Link>
                <p className="oompa-item__body--text">{formatGender(oompa.gender)}</p>
                <p className="oompa-item__body--text">{oompa.profession}</p>
            </div>
        </div>

    )
}

OompaItem.propTypes = {
    oompa: PropTypes.object.isRequired
}