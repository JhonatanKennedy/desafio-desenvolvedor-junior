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
    justify-content: flex-end;
`;
export const Container = styled.div`
    background: #f3fcfd;
    height: 100vh;
    width: 25vw;
`;
export const ModalHeader = styled.div`
    height: 18vh;
    background: #61a76f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    
    h3{
        padding: 3%;
        color: #f3fcfd;
        font-size: 2rem;
    }
`;
export const ButtonClose = styled.button`
    font-size: 3rem;
    background: #61a76f;
    padding: 1% 3%;
    color: #0f1d28;
    cursor: pointer;
    &:hover{
        color:#f3fcfd;
    }
`;
export const BodyModel = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    p{
        font-size: 1rem;
    }
    button, input,select{
        font-size: 1.6rem;
    }
    pre{
        display: flex;
        align-items: center;
        color: #2d2c3c;
    }
    b{
        color: #9ba4ad;
    }
    button{
        &:hover{
            color: #f3fcfd;
            background: #2d2c3c;
        }
    }

`;