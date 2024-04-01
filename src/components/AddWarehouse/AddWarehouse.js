import React, { useState } from 'react';
import './AddWarehouse.scss';
import Header from '../Header/Header';
import back from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function AddWarehouse() {

    // Created the form data structure
    const [formData, setFormData] = useState({
        warehouse_name: '',
        address: '',
        city: '',
        country: '',
        contact_name: '',
        contact_position: '',
        contact_phone: '',
        contact_email: ''
    });

    // function that updates the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Function to post new data and return to the warehouse list
    const handleAdd = async () => {
        try {
            await axios.post(`${baseUrl}/api/warehouses/`, formData);
            return <Link to='..' />
            ;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header isWarehouse={true} />
            <main className='add-warehouse'>
                <section className='add-warehouse-container'>
                    <Link to=".." className='add-warehouse__back-button'><img src={back} /></Link>
                    <h1 className='add-warehouse__heading'>Add New Warehouse</h1>
                </section>
                <article className='details__form-sections'>
                    <section className='details__form'>
                        <form className='details__form-warehouse'>
                            <h2 className='details__form-heading'>Warehouse Details</h2>
                            <label htmlFor='warehouse-name' className='details__form-label'>Warehouse Name</label>
                            <input className='details__form-input' id='warehouse-name' placeholder="Warehouse Name" name='warehouse_name' value={formData.warehouse_name} onChange={handleChange} />
                            <label htmlFor='street-address' className='details__form-label'>Street Address</label>
                            <input className='details__form-input' id='street-address' placeholder="Street Address" name='address' value={formData.address} onChange={handleChange} />
                            <label htmlFor='city' className='details__form-label'>City</label>
                            <input className='details__form-input' id='city' placeholder="City" name='city' value={formData.city} onChange={handleChange} />
                            <label htmlFor='country' className='details__form-label'>Country</label>
                            <input className='details__form-input' id='country' placeholder="Country" name='country' value={formData.country} onChange={handleChange} />
                        </form>
                    </section>
                    <section className='details__form' id='details__contact'>
                        <form className='details__form-contact'>
                            <h2 className='details__form-heading'>Contact Details</h2>
                            <label htmlFor='contact-name' className='details__form-label'>Contact Name</label>
                            <input className='details__form-input' id='contact-name' placeholder="Contact Name" name='contact_name' value={formData.contact_name} onChange={handleChange} />
                            <label htmlFor='position' className='details__form-label'>Position</label>
                            <input className='details__form-input' id='position' placeholder="Position" name='contact_position' value={formData.contact_position} onChange={handleChange} />
                            <label htmlFor='phone-number' className='details__form-label'>Phone Number</label>
                            <input className='details__form-input' id='phone-number' placeholder="Phone Number" name='contact_phone' value={formData.contact_phone} onChange={handleChange} />
                            <label htmlFor='email' className='details__form-label'>Email</label>
                            <input className='details__form-input' id='email' placeholder="Email" name='contact_email' value={formData.contact_email} onChange={handleChange} />
                        </form>
                    </section>
                </article>
                <div className='details__form-container'>
                    <Link to='..' className='details__form-link'><button className='details__form-cancel'>Cancel</button></Link>
                    <button className='details__form-add' onClick={handleAdd}>+ Add Warehouse</button>
                </div>
            </main>

        </>
    )
}

export default AddWarehouse;