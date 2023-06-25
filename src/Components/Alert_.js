import React from 'react'

function alert(props) {

    const capitalized = (word) => {
        const text = word.toLowerCase();

        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    return (
        <div style={{ height: '50px' }}>
            {props.showalert && <div className={`alert alert-${props.showalert.typ} alert-dismissible fade show `} role="alert">
                <strong>{capitalized(props.showalert.typ)} </strong>:{props.showalert.msg}
                <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label='close'></button>
            </div>}
        </div>
    )
}

export default alert