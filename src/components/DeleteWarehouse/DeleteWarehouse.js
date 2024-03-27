import './DeleteWarehouse.scss';
import close from '../../assets/icons/close-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import React, { useState } from 'react';

function DeleteWarehouse() {
    // Declare variable for useState
    const [modal, setModal] = useState(true); // Change to false once the icon button
    {/* <img className='delete__icon' src={deleteIcon} alt='delete button' onClick={toggleModal} /> */}
    
    // Toggle visibility
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            {modal && (
                <main className='delete'>
                    <div className='delete__overlay' onClick={toggleModal}></div>
                    <article className='delete__modal'>
                        <section className='delete__container'>
                            <img className='delete__close' src={close} alt='close button' onClick={toggleModal} />
                            <h1 className='delete__heading'>Delete Washington warehouse?</h1>
                            <h5 className='delete__body'>Please confirm that you'd like to delete Washington from the list of warehouses. You won't be able to undo this action.</h5>
                        </section>
                        <section className='delete__container-buttons'>
                            <button className='delete__cancel-button' onClick={toggleModal}><h3 className='delete__cancel-button--heading'>Cancel</h3></button>
                            <button className='delete__delete-button'><h3 className='delete__delete-button--heading'>Delete</h3></button>
                        </section>
                    </article>
                </main>
            )}
        </>
    )
}

export default DeleteWarehouse;