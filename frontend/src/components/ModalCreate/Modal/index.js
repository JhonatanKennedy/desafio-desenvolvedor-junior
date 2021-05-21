import React from 'react';
import { Container, ModalContainer, ModalHeader, ButtonClose,BodyModel } from './style';
import { Formik, Field, Form, useField } from 'formik';
import { TextField, Button, Select } from '@material-ui/core';
import Api from '../../../services/api';
import * as yup from 'yup';

export default function Modal({onClose = () => {}}){

    const validationSchema = yup.object({
        name: yup.string().required("É preciso informar um nome"),
        age: yup.number().required("É preciso informar uma idade")
        .positive("É preciso um número positivo"),
        race: yup.string().required("É preciso informar uma raça"),
        owner: yup.string().required("É preciso informar um dono"),
        phone: yup.string().required("É preciso informar um telefone")
    })

    const MyTextField = ({placeholder, ...props}) =>{
        const [field,meta] = useField(props);
        const errorText = meta.error && meta.touched ? meta.error: "";
        return <TextField placeholder={placeholder} {...field} helperText={errorText} error={!!errorText}/>

    }

    
    function handleClickOutside(e){
        if(e.target.id === 'modal'){
            onClose();
        }
    }
    async function onHandleSubmit(data){
        try{
            const response = await Api.post('/animals',data);
            window.location.reload();
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <ModalContainer onClick={handleClickOutside} id='modal'>
            <Container>
                <ModalHeader>
                    <ButtonClose onClick={onClose}>x</ButtonClose>
                    <h3>Cadastro</h3>
                </ModalHeader>
                <BodyModel>
                    <Formik initialValues={{name: '', age:'', type:'Cachorro', race:'', owner:'', phone:''}} 
                    validationSchema={validationSchema}
                    onSubmit = {(data) => 
                    (onHandleSubmit(data))}>
                            <Form>
                                <br/>
                                <b>Informações do animal</b>
                                <br/>
                                <br/>
                                    <pre>Nome:    <MyTextField name='name' type='input' as={TextField} placeholder='Doguinho'/></pre>
                                    <pre>Idade:   <MyTextField name='age' type='input' as={TextField} placeholder='3'  /></pre>
                                    <pre>Tipo:    <Field name='type' type='select' as={Select} native={true}>
                                                    <option value='Cachorro'>Cachorro</option>
                                                    <option value='Gato' >Gato</option>
                                                  </Field>
                                    </pre>
                                    <pre>Raça:    <MyTextField name='race' type='input' as={TextField} placeholder='Husky Siberiano'  /></pre>
                                <br/>
                                <br/>
                                <b>Informações do dono</b>
                                <br/>
                                <br/>
                                    <pre>Nome:    <MyTextField name='owner' type='input' as={TextField} placeholder='João Andrade' /></pre>
                                    <pre>Celular: <MyTextField name='phone' type='input' as={TextField} placeholder='81 982388888'/></pre>
                                <br/>
                                <Button type='submit'>Cadastrar</Button>
                            </Form>
                    </Formik>
                </BodyModel>
            </Container>
        </ModalContainer>
    );
}