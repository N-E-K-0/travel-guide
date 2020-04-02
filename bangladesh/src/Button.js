import React from 'react';
import Modal from './Modal';

class Button extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }

    toggleModal = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    render(){
        return(
            <div className="Button">
                <button onClick={this.toggleModal} className=" tc grow bg-red br3 white">
                    Explore
                </button>

                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}
                    name={this.props.name} 
                    src={this.props.src}
                    details={this.props.details} >
                </Modal>
            </div>
        );
    }
};

export default Button;