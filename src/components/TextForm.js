import React from 'react'

export const TextForm = (props) => {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="3"></textarea>
            </div>

            <button className='btn btn-primary'>Convert to Uppercase</button>
        </>
    )
}
