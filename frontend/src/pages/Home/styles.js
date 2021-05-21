import styled from 'styled-components';

export const TopContainer = styled.div`
    height: 18vh;
    width: 100vw;
    background-color: #2196f3;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    -webkit-box-shadow: -1px 4px 21px 0px rgba(0,0,0,0.72); 
    box-shadow: -1px 4px 21px 0px rgba(0,0,0,0.72);

    h2{
        margin-left: 5vw;
        margin-bottom: 4vh;
        color: #f3fcfd; 
        font-size: 3rem;
    }
`;
export const StyleTable = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    font-size: 1.6rem;

    table{
        color: #2d2c3c;
        border-collapse: collapse;
        width: 85vw;
    }
    thead{
        border-bottom: 0.1rem solid #C0BFBA;
        color: #9ba4ad;
    }
    th{
        text-align: left;
        padding: 1rem 0rem;
        border: 1rem;
    }
    td{
        padding: 1rem 0rem;
        border-bottom: 0.1rem solid #C0BFBA;
    }
`;

export const ButtonContainer = styled.div`
    display: block;
`;
export const PlusButton = styled.button`
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
`;
export const DeleteButton = styled.button`
    background-color: #D70000;
    cursor: pointer;
    padding: 0.2rem;
`;

