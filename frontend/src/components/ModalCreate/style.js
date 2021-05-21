import styled from 'styled-components';

export const OutsideButton = styled.button`
    position: fixed;
    border-radius: 50%;
    border: none;
    color: #f3fcfd;
    background-color: #61a76f;
    padding: 1.5rem 2.1rem;
    font-size: 2.4rem;
    cursor: pointer;
    z-index: 1;
    bottom: 7%;
    right: 3%;
    &:hover{
        color: black;
    }
`;