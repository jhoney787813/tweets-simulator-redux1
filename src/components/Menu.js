import React from 'react';
import {Container,Navbar,Button} from 'react-bootstrap';
import LogoRedux from '../assets/img/redux.png';
import { useDispatch} from 'react-redux';
import {openCloseAddTweeModalAction} from '../actions/modalsActions';
export default function Menu()
{
//dispactch para ejecutar las acciones
 const dispatch = useDispatch();

 const openCloseAddTweetModal=state=>dispatch(openCloseAddTweeModalAction(state));

 const openCloseModal =()=>{

    openCloseAddTweetModal(true);
 }

    return(
    
        <Navbar bg="dark" variant="dark">
            <Container >
            <Navbar.Brand>
                <img alt="Tweets simulator redux"
                src={LogoRedux}
                width={30}
                height={30}
                className="d-in line-block aling-top mr-4"
                />
                Tweets Simulator REDUX!
            </Navbar.Brand>
            <Button variant="outline-success" onClick={openCloseModal}>Nuevo Tweet</Button>
            </Container>

        </Navbar>
   
    );
}