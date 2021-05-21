import React, { useState } from 'react';
import { OutsideButton } from './style';
import Modal from './Modal/index';
 
export default function ModalCreate(){
    const [show,setShow] = useState(false);

    return(
        <>
            <OutsideButton onClick={() => setShow(true)}>
                +
            </OutsideButton>
            {show ? <Modal onClose={() => setShow(false)}/> : null}
        </>
    );

}