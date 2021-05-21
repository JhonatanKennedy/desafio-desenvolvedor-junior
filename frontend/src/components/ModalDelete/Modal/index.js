import React from 'react';
import { Container, ModalContainer, ButtonYes,ButtonCancel, DeleteContainer } from './style';
import Api from '../../../services/api';
import { GiCancel } from 'react-icons/gi';


export default function Modal({onClose = () => {}, _id, name}){
    console.log(_id)
    function handleClickOutside(e){
        if(e.target.id === 'modal'){
            onClose();
        }
    }
    async function onHandleDelete(){
        try{
            const response = await Api.delete(`/Animals/${_id}`);
            window.location.reload();
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <ModalContainer onClick={handleClickOutside} id='modal'>
            <Container>
                <DeleteContainer>
                    <GiCancel color = "#f0477f " size={30}/>
                    <b>Realmente deseja apagar o animal {name} ?</b>
                    <div>
                        <ButtonYes onClick={onHandleDelete}>Delete</ButtonYes>
                        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>    
                    </div>                    
                </DeleteContainer>
            </Container>
        </ModalContainer>
    );
}