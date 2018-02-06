import React, {Component} from 'react';
import './App.css';
import Modal from "./Modal/Modal";
import Wrapper from "./hoc/Wrapper";
import Control from "./Control/Control";

class App extends Component {
    
    state = {
        purchasable: false,
        purchasing: false,
        title: 'Some Title'
    };
    
    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    };
    
    purchaseHandler = () => {
        this.setState({purchasing: true});
    };
    
    render() {
        return (
            <Wrapper>
                <Modal
                    show={this.state.purchasing}
                    closed={this.cancelPurchaseHandler}
                    title={this.state.title}
                >
                
                </Modal>
                <Control
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Wrapper>
        );
    }
}

export default App;
