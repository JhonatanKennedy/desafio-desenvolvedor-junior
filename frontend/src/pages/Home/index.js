import React, { useEffect, useState } from 'react';
import { TopContainer, StyleTable, ButtonContainer } from './styles';
import Api from '../../services/api';
import ModalEdit from '../../components/ModalEdit/index';
import ModalCreate from '../../components/ModalCreate/index';
import ModalDelete from '../../components/ModalDelete/index';


export default function Home(){
    const [animals,setAnimals] = useState([]);
    
    useEffect(() => {
        async function getAnimals(){
            try{
                const response = await Api.get('/animals');
                setAnimals(response.data);
            }catch ( error ){
                console.log(error);
            }
        }
        getAnimals();
    },[]);

    return(
        <>
            <TopContainer>
                <h2>Petshop Animals</h2>
            </TopContainer>
            <br/>
            <br/>
            <StyleTable>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Tipo</th>
                            <th>Raça</th>
                            <th>Dono</th>
                            <th>Contato</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animals?.map((element) => (
                            <tr key={element._id}>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.type}</td>
                                <td>{element.race}</td>
                                <td>{element.owner}</td>
                                <td>{element.phone}</td>
                                <td><ModalEdit animal={element}/></td>
                                <td><ModalDelete _id={element._id} name={element.name}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </StyleTable>
            <ButtonContainer>
                <ModalCreate/>
            </ButtonContainer>
            
        </>
    );
}