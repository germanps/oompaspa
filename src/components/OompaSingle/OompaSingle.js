import React from 'react'
import './OompaSingle.scss'
import { useParams, Redirect } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { formatGender } from '../../Utils/utils'
import { Spinner } from '../Spinner/Spinner';

export const OompaSingle = ({ history }) => {
    const { id } = useParams()
    const { data, loading } = useFetch(`/${id}`)
    //check id
    if (!parseInt(id)) {
        return <Redirect to="/" />
    }

    const handleGoBack = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    return (
        <div className="oompa-single">
            {
                loading ?
                    (
                        <Spinner />
                    )
                    :
                    (
                        <div className="container">
                            <div className="row mt-4 flex-wrapper">
                                <div className="col-md-4">
                                    <img src={data.image} className="img-fluid img-thumbnail" alt={data} />
                                </div>
                                <div className="col-md-8" >
                                    <h2>{data.first_name}</h2>
                                    <div className="detaills">
                                        <span>{formatGender(data.gender)}</span>
                                        <span>{data.profession}</span>
                                    </div>
                                    {/* Is not such dangerous! */}
                                    <p dangerouslySetInnerHTML={{ __html: data.description }} />
                                    <button
                                        className="btn btn-info"
                                        onClick={handleGoBack}
                                    >
                                        Home
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
