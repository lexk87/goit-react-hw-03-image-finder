import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalBody, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    render() {
        return createPortal(
            <ModalOverlay>
                <ModalBody>
                    <ModalImg src="" alt="" />
                </ModalBody>
            </ModalOverlay>,
            modalRoot
        );
    }
}
