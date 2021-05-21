import React, { useState } from 'react';
import Modal from './Modal/index';
import { AiFillEdit } from 'react-icons/ai';
import { OutsideButton } from './style';


export default function ModalEdit({animal}){

    const [show, setShow] = useState(false);

    return (
        <>
            <OutsideButton onClick={() => setShow(true)}>
                <AiFillEdit color="#dcbc3b" size={20}/>
            </OutsideButton>
            {show ? <Modal onClose={() => setShow(false)} animal={animal}/> :null}
        </>
    );
  }