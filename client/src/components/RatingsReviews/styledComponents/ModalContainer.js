import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000000;

  .modal-content {
    overflow: auto;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 48em;
    border-radius: 0.5rem;
    z-index: 10000000000;
}

  .close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
}

  .close-button:hover {
    background-color: darkgray;
  }

  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    z-index: 10000000000;
  }

`;

export default ModalContainer;
