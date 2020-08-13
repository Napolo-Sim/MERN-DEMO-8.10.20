import React from 'react'

const TranslationInput = (props) => {
    return (
        <form onSubmit={props.submitText}>
            <div className="form-group">
                <input
                    name="text"
                    type="text"
                    className="form-control"
                    placeholder="Enter Text"
                    onChange={props.editText}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TranslationInput
