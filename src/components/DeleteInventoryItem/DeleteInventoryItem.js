import './DeleteInventoryItem.scss';
import close from '../../assets/icons/close-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import React, { useState } from 'react';
function DeleteInventoryItem() {
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
                            <h1 className='delete__heading'>Delete Television inventory item?</h1>
                            <h5 className='delete__body'>Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action.</h5>
                        </section>
                        <section className='delete__container-buttons'>
                            <button className='delete__cancel-button' onClick={toggleModal}>Cancel</button>
                            <button className='delete__delete-button' onClick={toggleModal}>Delete</button>
                        </section>
                    </article>
                </main>
            )}
        </>
    )
}
export default DeleteInventoryItem;