
import styled from 'styled-components'

// Modal styles
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    max-height: 80%;
    overflow-y: auto;
`

export const CloseButton = styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover {
        background-color: darkred;
    }
`
