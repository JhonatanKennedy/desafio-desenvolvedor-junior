import React,{ useState } from 'react';
import { OutsideButton } from './style';
import { FaTrash } from 'react-icons/fa';
import Modal from './Modal/index';

export default function ModalDelete({_id, name}){
    const [show, setShow] = useState(false);

    return(
        <>
            <OutsideButton onClick={() => setShow(true)}>
                <FaTrash color='#f0477f' size={18}/>
            </OutsideButton>
            {show ? <Modal _id={_id} name={name} onClose={() => setShow(false)}/> : null}
        </>
    );
}