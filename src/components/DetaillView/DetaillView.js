import React from 'react'
import { OompaSingle } from '../OompaSingle/OompaSingle';

export const DetaillView = ({ history }) => {

    return (
        <div className="detaill-view">
            <OompaSingle history={history} />
        </div>
    )
}
