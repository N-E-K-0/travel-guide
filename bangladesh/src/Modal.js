import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdropstyle">
        <div className="modalstyle">
          <div>
            {this.props.children}
          </div>
          <div>
            <h1>{this.props.name}</h1>
          </div>
          <div>
            <img src={this.props.src} alt="division" />
          </div>
          <div className='tl'>
            <p>{this.props.details}</p>
          </div>
          <div className="footer">
            <button className="button" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;