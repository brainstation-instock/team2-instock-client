import './AddInventoryItem.scss';
import Header from '../Header/Header';
import backIcon from '../../assets/icons/arrow_back-24px.svg'
import { useRef } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

function AddInventoryItem() {

    const formRef = useRef()
    const navigate = useNavigate()

    const AddItem = (e) => {
        e.preventDefault();

        if(formRef.current.item_name.value === "" || formRef.current.description.value === "" || formRef.current.category.value === "" || formRef.current.warehouse_name.value === ""){
            alert("Both fields must be filled!");
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
            <section>
                <img alt="back-icon" src={backIcon} onClick={() => navigate('/')} role="button" />
                <h1>Add New Inventory Item</h1>
            </section>
            <section>
                <form onSubmit={AddItem} ref={formRef}>
                    <div>
                        <div>
                            <h2>Item Details</h2>

                            <label htmlFor='item_name'> Item Name
                                <input type='text' id='item_name' placeholder="Item Name"/>
                            </label>

                            <label htmlFor='description'> Description
                                <input type='text' id='description' placeholder="Please enter a brief item description..."/>
                            </label>

                            <label htmlFor='category'> Category
                                <select id='category' defaultValue={''}>
                                    <option value="" disabled>Please select</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Health">Health</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <h2>Item Availability</h2>

                            <label htmlFor='status'> Status
                                <input id='status' type="radio" value="In Stock" defaultChecked name="status"/> In Stock
                                <input id='status' type="radio" value="Out Of Stock" name="status"/> Out Of Stock
                            </label>

                            <label htmlFor='quantity'> Quantity
                                <input id='quantity' type="text" defaultValue="0"/>
                            </label>

                            <label htmlFor='warehouse_id'>
                                <select id='warehouse_id' defaultValue={''}>
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
                    <div>
                        <button onClick={() => navigate('/')}>Cancel</button>
                        <button type="submit">+ Add Item</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddInventoryItem;