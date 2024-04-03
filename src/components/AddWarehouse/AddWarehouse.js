import React, { useState, useRef } from 'react';
import './AddWarehouse.scss';
import Header from '../Header/Header';
import back from '../../assets/icons/arrow_back-24px.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import errorLogo from '../../assets/icons/error-24px.svg';
import { convertToPhone, isEmailValid } from '../../utils/validation';

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

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const errorRef = useRef({});
    const isFormValid = useRef(null);

    const navigate = useNavigate();

    // function that updates the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
        errorRef.current[name] = '';
    }

    // Function to post new data and return to the warehouse list
    const handleAdd = async () => {

        if(!formData.warehouse_name){
            errorRef.current.warehouse_name = 'This field is required';
        }

        if(!formData.address){
            errorRef.current.address = 'This field is required';
        }

        if(!formData.city){
            errorRef.current.city = 'This field is required';
        }
        
        if(!formData.country){
            errorRef.current.country = 'This field is required';
        }

        if(!formData.contact_name){
            errorRef.current.contact_name = 'This field is required';
        }
        
        if(!formData.contact_position){
            errorRef.current.contact_position = 'This field is required';
        }
        
        if(!formData.contact_phone){
            errorRef.current.contact_phone = 'This field is required';
        }else{
            errorRef.current.contact_phone = convertToPhone(formData.contact_phone).isValid ? '' : convertToPhone(formData.contact_phone).message;
        }
        
        if(!formData.contact_email){
            errorRef.current.contact_email = 'This field is required';
        }
        else{
            errorRef.current.contact_email = isEmailValid(formData.contact_email);
        }

        setIsFormSubmitted({});

        if(!errorRef.current.warehouse_name && !errorRef.current.address && !errorRef.current.city && !errorRef.current.contact_name && !errorRef.current.contact_position && !errorRef.current.contact_phone && !errorRef.current.contact_email){
            isFormValid.current = true;
        }
        try {
            if(isFormValid.current){
                const response = await axios.post(`${baseUrl}/api/warehouses/`, formData);
                navigate('/');
            }
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
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.warehouse_name ? 'details__form-input--error' : ''}`}
                            id='warehouse-name' placeholder="Warehouse Name" name='warehouse_name' value={formData.warehouse_name}
                             onChange={handleChange}
                            />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.warehouse_name ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.warehouse_name}
                            </span>
                            <label htmlFor='street-address' className='details__form-label'>Street Address</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.address ? 'details__form-input--error' : ''}`} id='street-address' placeholder="Street Address" name='address' value={formData.address} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.address ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.address}
                            </span>
                            <label htmlFor='city' className='details__form-label'>City</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.city ? 'details__form-input--error' : ''}`} id='city' placeholder="City" name='city' value={formData.city} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.city ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.city}
                            </span>
                            <label htmlFor='country' className='details__form-label'>Country</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.country ? 'details__form-input--error' : ''}`} id='country' placeholder="Country" name='country' value={formData.country} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.country ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.country}
                            </span>
                        </form>
                    </section>
                    <section className='details__form' id='details__contact'>
                        <form className='details__form-contact'>
                            <h2 className='details__form-heading'>Contact Details</h2>
                            <label htmlFor='contact-name' className='details__form-label'>Contact Name</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.contact_name ? 'details__form-input--error' : ''}`} id='contact-name' placeholder="Contact Name" name='contact_name' value={formData.contact_name} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.contact_name ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.contact_name}
                            </span>
                            <label htmlFor='position' className='details__form-label'>Position</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.contact_position ? 'details__form-input--error' : ''}`} id='position' placeholder="Position" name='contact_position' value={formData.contact_position} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.contact_position ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.contact_position}
                            </span>
                            <label htmlFor='phone-number' className='details__form-label'>Phone Number</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.contact_phone ? 'details__form-input--error' : ''}`} id='phone-number' placeholder="Phone Number" name='contact_phone' value={formData.contact_phone} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.contact_phone ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.contact_phone}
                            </span>
                            <label htmlFor='email' className='details__form-label'>Email</label>
                            <input className={`details__form-input ${isFormSubmitted && errorRef.current.contact_email ? 'details__form-input--error' : ''}`} id='email' placeholder="Email" name='contact_email' value={formData.contact_email} onChange={handleChange} />
                            <span className={`details__error details__error${isFormSubmitted && errorRef.current.contact_email ? '--show' : ''}`}>
                                <img className='details__icon' src={errorLogo} alt="red circle with a exclamation inside" />{errorRef.current.contact_email}
                            </span>
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