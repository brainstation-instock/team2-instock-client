import React, { useState } from 'react';
import '../../styles/components/DeleteModal/DeleteModal.scss';
import close from '../../assets/icons/close-24px.svg';

function DeleteWarehouse({ toggleModal, warehouse }) {

    // Button toggle events
    const handleCancel = () => {
        toggleModal();
    }
    const handleDelete = () => {
        // Will need to add the DELETE API endpoint here
        toggleModal();
    }

    return (
        <>
            <main className='delete'>
                <div className='delete__overlay' onClick={handleCancel}></div>
                <article className='delete__modal'>
                    <section className='delete__container'>
                        <img className='delete__close' src={close} alt='close button' onClick={handleCancel} />
                        <h1 className='delete__heading'>Delete {warehouse} warehouse?</h1>
                        <h5 className='delete__body'>Please confirm that you'd like to delete {warehouse} from the list of warehouses. You won't be able to undo this action.</h5>
                    </section>
                    <section className='delete__container-buttons'>
                        <button className='delete__cancel-button' onClick={toggleModal}>Cancel</button>
                        <button className='delete__delete-button'>Delete</button>
                    </section>
                </article>
            </main>
        </>
    )
}
export default DeleteWarehouse;