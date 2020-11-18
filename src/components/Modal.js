import React from 'react';
import {Modal as ModalBops} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {openCloseAddTweeModalAction} from '../actions/modalsActions';

export default function Modal(props)
{
    const {children} = props;

    // dispacth de acciones para ejecutarlas

    const  dispatch = useDispatch();
    const  closeModal = state=> dispatch(openCloseAddTweeModalAction(state));
    // useSelector para acceder a un  valor en el storage
    const isOpenModal= useSelector(state=>state.modals.stateModalAddTweet);


    return(
        <ModalBops show={isOpenModal}
            onHide={()=>closeModal(false)}
            size="lg"
            centered
        >
            {children}
        </ModalBops>
    );
}