import React from 'react';

const Control = props => {
    return (
        <div>
            <button
                // disabled={!props.purchasable}
                className="OrderButton"
                onClick={props.ordered}
            >Click Me
            </button>
        </div>
    )
};

export default Control;