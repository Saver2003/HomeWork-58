import React from 'react';
import './Modal.css';
import Wrapper from "../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.closed}/>
        <div className="Modal"
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            <p>{props.title}</p>
            <p>This is Modal content</p>
            <button onClick={props.closed}>Closed</button>
        </div>
    </Wrapper>

);

export default Modal;