import './EditWarehouse.scss';
import Header from '../Header/Header';
import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import backIcon from '../../assets/icons/arrow_back-24px.svg'
// const baseUrl = process.env.REACT_APP_BASE_URL;
import { Link } from 'react-router-dom';

function EditWarehouse({ id }) {
    const formRef = useRef()
    const navigate = useNavigate()

    const [warehouse, setWarehouse] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8080/api/warehouses/`);
            setWarehouse(data);
        })();
    }, []);

    if (!warehouse) {
        return <h1>Loading...</h1>
    }

    const editWarehouse = (e) => {
        e.preventDefault();

        function isNumber(str) {
            return /^-?\d+$/.test(str);
        }

        if (`${formRef.current.warehouse_name.value}` === "" || `${formRef.current.address.value}` === "" || `${formRef.current.city.value}` === "" || `${formRef.current.warehouse_id.value}` === "") {
            alert("All fields must be filled!");
            return;
        }

        if (!isNumber(formRef.current.contact_phone.value)) {
            alert("Must be a valid number!");
            return;
        }

        //     // function that updates the form fields
        // const handleChange = (e) => {
        //     const { name, value } = e.target;
        //     setFormData(prevState => ({
        //         ...prevState,
        //         [name]: value
        //     }))
        // }

        axios
            .put(`http://localhost:8080/api/warehouses/${id}`,
                {
                    warehouse_name: formRef.current.warehouse_name.value,
                    address: formRef.current.address.value,
                    city: formRef.current.city.value,
                    status: formRef.current.country.value,
                    contact_position: formRef.current.contact_position.value,
                    contact_phone: formRef.current.contact_phone.value,
                    contact_email: formRef.current.contact_email.value,
                    warehouse_id: formRef.current.warehouse_id.value

                })

        alert("Warehouse successfully edited!")

        navigate('/warehouses');
    }


    return (
        

         <>
             <Header isWarehouse={true} />
             <main className="edit-item">
                 <section className="edit-item-container">
                     <img className="edit-item__back-button" alt="back-icon" src={backIcon} onClick={() => navigate('/warehouses')} role="button" />
                     <h1 className="edit-item__heading">Edit Warehouse</h1>
                 </section>
                 <section>
                     <form onSubmit={editWarehouse} ref={formRef}>
                         <div className="details__edit-form">
                             <div className="details__edit-form-item-details">
                               <h2 className="details__edit-form-heading">Warehouse Details</h2>
                                    <div className="details__edit-form-label">
                                        <label className="details__edit-form-label" htmlFor='warehouse_id'>Warehouse Name
                                            <input type="text" id='warehouse_id' defaultValue={id} placeholder="Warehouse Name"></input>
                                        </label>
                                    </div>
        

                                 <label className="details__edit-form-label" htmlFor='street_address'> Street Address
                                     <input className='details__edit-form-input' type='text' id='street_address' placeholder="Street Address" defaultValue={warehouse.address} />
                                 </label>

                                 <label className="details__edit-form-label" htmlFor='city'> City
                                     <input className='details__edit-form-input' type='text' id='city' placeholder="City" defaultValue={warehouse.city} />
                                 </label>

                             <label className="details__edit-form-label" htmlFor='country'> Country
                                     <input className='details__edit-form-input' type='text' id='country' placeholder="Country" defaultValue={warehouse.country} />
                                 </label>

                             </div>
                             <div className="details__edit-form-item-details details__edit-form-item-details--bottom">
                                 <h2 className="details__edit-form-heading">Contact Details</h2>

                                 <label className="details__edit-form-label" htmlFor='contact_name'> Contact Name
                                     <input className='details__edit-form-input' type='text' id='contact_name' placeholder="Contact Name" defaultValue={warehouse.contact_name} />
                                 </label>

                                 <label className="details__edit-form-label" htmlFor='position'> Position
                                     <input className='details__edit-form-input' type='text' id='position' placeholder="Position" defaultValue={warehouse.contact_position} />
                                 </label>

                                 <label className="details__edit-form-label" htmlFor='phone_number'> Phone Number
                                     <input className='details__edit-form-input' type='text' id='phone_number' placeholder="Phone Number" defaultValue={warehouse.contact_phone} />
                                 </label>

                                 <label className="details__edit-form-label" htmlFor='email'> Email
                                     <input className='details__edit-form-input' type='text' id='email' placeholder="Email" defaultValue={warehouse.email} />
                                 </label>
                                 


                             </div>
                         </div>
                         <div className='details__form-container'>
                                     <Link to='..' className='details__form-link'><button className='details__form-cancel'>Cancel</button></Link>
                                     <button className='details__form-add' type='submit'>Save</button>
                                 </div>

                     </form>
                 </section>
            </main>
            </>
            );

}

            export default EditWarehouse;