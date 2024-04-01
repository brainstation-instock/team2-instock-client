import React from 'react';
import axios from 'axios';
import '../../styles/components/DeleteModal/DeleteModal.scss';
import close from '../../assets/icons/close-24px.svg';

const baseUrl = process.env.REACT_APP_BASE_URL;

function DeleteWarehouse({ toggleModal, warehouse, refreshWarehouses }) {
    const { id, warehouse_name } = warehouse;

    // Button toggle events
    const handleCancel = () => {
        toggleModal();
    }
    const handleDelete = async () => {
        try {
            await axios.delete(`${baseUrl}/api/warehouses/${id}`);
            toggleModal();
            refreshWarehouses();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
                <main className='delete'>
                    <div className='delete__overlay' onClick={handleCancel}></div>
                    <article className='delete__modal'>
                        <section className='delete__container'>
                            <img className='delete__close' src={close} alt='close button' onClick={handleCancel} />
                            <h1 className='delete__heading'>Delete {warehouse_name} warehouse?</h1>
                            <h5 className='delete__body'>Please confirm that you'd like to delete {warehouse_name} from the list of warehouses. You won't be able to undo this action.</h5>
                        </section>
                        <section className='delete__container-buttons'>
                            <button className='delete__cancel-button' onClick={handleCancel}>Cancel</button>
                            <button className='delete__delete-button' onClick={handleDelete}>Delete</button>
                        </section>
                    </article>
                </main>
        </>
    )
}
export default DeleteWarehouse;