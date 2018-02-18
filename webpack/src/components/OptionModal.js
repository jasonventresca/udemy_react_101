import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option: {!!props.selectedOption && <p>{props.selectedOption}</p>}</h3>
    <button
      onClick={props.handleDeselectOption}
    >Ok</button>
  </Modal>
);

export default OptionModal;
