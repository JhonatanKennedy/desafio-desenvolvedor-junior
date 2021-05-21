import React from 'react';
import { Container, ModalContainer, ModalHeader, ButtonClose, BodyModel } from './style';
import { Formik, Form, Field, useField } from 'formik';
import { TextField, Select, Button } from '@material-ui/core';
import Api from '../../../services/api';
import * as yup from 'yup'

export default function Modal({onClose = () => {}, animal }){

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
    console.log(animal)
    async function onHandleSubmit(data){
        try{
            const response = await Api.put(`/animals/${animal._id}`,data);
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
                    <h3>{animal.name}</h3>
                </ModalHeader>
                <BodyModel>
                    <Formik initialValues={{name: animal.name, age:animal.age, type:animal.type, race:animal.race, owner:animal.owner, phone: animal.phone}}
                    validationSchema={validationSchema} 
                    onSubmit = {(data) => (onHandleSubmit(data))}>
                            <Form>
                                <br/>
                                <b>Informações do animal</b>
                                <br/>
                                <br/>
                                    <pre>Nome:    <MyTextField name='name' type='input' as={TextField}/></pre>
                                    <pre>Idade:   <MyTextField name='age' type='input' as={TextField}/></pre>
                                    <pre>Tipo:    <Field name='type' type='select' as={Select} native={true}>
                                                    <option value='Cachorro'>Cachorro</option>
                                                    <option value='Gato' >Gato</option>
                                                  </Field>
                                    </pre>
                                    <pre>Raça:    <MyTextField name='race' type='input' as={TextField}/></pre>
                                <br/>
                                <br/>
                                <b>Informações do dono</b>
                                <br/>
                                <br/>
                                    <pre>Nome:    <MyTextField name='owner' type='input' as={TextField}/></pre>
                                    <pre>Celular: <MyTextField name='phone' type='input' as={TextField}/></pre>
                                <br/>
                                <Button type='submit'>Editar</Button>
                            </Form>
                    </Formik>
                </BodyModel>
            </Container>
        </ModalContainer>
    );
}