import './AddInventoryItem.scss';
import Header from '../Header/Header';
import backIcon from '../../assets/icons/arrow_back-24px.svg'
import { useRef, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

function AddInventoryItem() {

    const formRef = useRef()
    const navigate = useNavigate()

    const [isInStock, setIsInStock] = useState(true)

    const AddItem = (e) => {
        e.preventDefault();

        function isNumber(str) {
            return /^-?\d+$/.test(str);
        }

        if(formRef.current.item_name.value === "" || formRef.current.description.value === "" || formRef.current.category.value === "" || formRef.current.warehouse_name.value === ""){
            alert("Both fields must be filled!");
            return;
         }

         if(!isNumber(formRef.current.quantity.value)){
            alert("Quantity must be a valid number!");
            return;
         }

        axios
        .post('http://localhost:8080/api/inventories/', 
        {
            item_name: formRef.current.item_name.value,
            description: formRef.current.description.value,
            category: formRef.current.category.value,
            status: formRef.current.status.value,
            quantity: formRef.current.quantity.value,
            warehouse_id: formRef.current.warehouse_id.value,
            
        })

        alert("Item successfully added!")

        navigate('/inventories');

    }
    return (
        <>
            <Header isWarehouse={false}/>
            <main className="add-item">
                <section className="add-item-container">
                    <img className="add-item__back-button" alt="back-icon" src={backIcon} onClick={() => navigate('/')} role="button" />
                    <h1 className="add-item__heading">Add New Inventory Item</h1>
                </section>
                <section>
                    <form onSubmit={AddItem} ref={formRef}>
                        <div className="details__add-form">
                            <div className="details__add-form-item-details">
                                <h2 className="details__add-form-heading">Item Details</h2>

                                <label className="details__add-form-label" htmlFor='item_name'> Item Name
                                    <input className='details__add-form-input' type='text' id='item_name' placeholder="Item Name"/>
                                </label>

                                
                                <label className="details__add-form-label" htmlFor='description'> Description
                                    <div className="textarea-container">
                                        <textarea className='details__add-form-input--textarea' type='textarea' id='description' placeholder="Please enter a brief item description..."/>
                                    </div>
                                </label>
                                

                                <label className="details__add-form-label" htmlFor='category'> Category
                                    <select className='details__add-form-input--dropdown' id='category' defaultValue={''}>
                                        <option value="" disabled>Please select</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Apparel">Apparel</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gear">Gear</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </label>
                            </div>
                            <div className="details__add-form-stock">
                                <h2 className="details__add-form-heading">Item Availability</h2>
                                <div className="details__add-form-status">
                                    <h3 className="details__add-form-status-label">Status</h3>
                                    <label className="details__add-form-status-inputs" htmlFor='status'> 
                                        <div className="details__add-form-status-inputs--in-stock">
                                        <input id='in' type="radio" value="In Stock" defaultChecked name="status" onChange={() => setIsInStock(true)} /> <p className="stock-txt">In Stock</p>
                                        </div>
                                        <div className="details__add-form-status-inputs--out-of-stock">
                                        <input id='out' type="radio" value="Out Of Stock" name="status" onChange={() => setIsInStock(false)}/> <p className="stock-txt">Out Of Stock</p>
                                        </div>
                                    </label>
                                </div>
                                { isInStock && 
                                    <label className={`details__add-form-label`} htmlFor='quantity'> Quantity
                                    <input className='details__add-form-input--qty' id='quantity' type="text" defaultValue="0"/>
                                    </label>}

                                <label className="details__add-form-label" htmlFor='warehouse_id'>
                                    <select className='details__add-form-input--dropdown' id='warehouse_id' defaultValue={''}>
                                        <option value="" disabled>Please select</option>
                                        <option value="1">Manhattan</option>
                                        <option value="2">Washington</option>
                                        <option value="3">Jersey</option>
                                        <option value="4">San Francisco</option>
                                        <option value="5">Santa Monica</option>
                                        <option value="6">Seattle</option>
                                        <option value="7">Miami</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="details__add-form-btns">
                            <div className="details__add-form-btns-c">
                                <button className='details__add-form-cancel' onClick={() => navigate('/')}>Cancel</button>
                            </div>
                            <div className="details__add-form-btns-a">
                                <button className='details__add-form-add' type="submit">+ Add Item</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default AddInventoryItem;