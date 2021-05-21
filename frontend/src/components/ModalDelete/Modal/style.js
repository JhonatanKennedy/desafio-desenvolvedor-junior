import styled from 'styled-components';


export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left:0;
    top:0;
    z-index: 10;
    background: rgba(10,23,55,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    background: #f3fcfd;
    height: 30vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`;
export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    div{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`;

export const ButtonYes = styled.button`
    padding: 1vw;
    background: #f0477f;
    color: #f6f8f8;
    border-radius: 15px;
    border: 1px solid #f0477f;
    cursor: pointer;

    &:hover{
        background: #2d2c3c;
        color: #f0477f;
        border-color:#2d2c3c;
    }
`;
export const ButtonCancel = styled.button`
    padding: 1vw;
    background: #f6f8f8;
    color: #2d2c3c;
    border-radius: 15px;
    border: 1px solid #2d2c3c;

    cursor: pointer;
    
    &:hover{
        background: #2d2c3c;
        color: #f6f8f8;
        border-color:#f6f8f8;
    }
`;
