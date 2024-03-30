import './EditInventoryItem.scss';
import Header from '../Header/Header';
import { useRef } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function EditInventoryItem() {
    const formRef = useRef()
    const navigate = useNavigate()

    const AddItem = (e) => {
        e.preventDefault();

        if(formRef.current.item_name.value === "" || formRef.current.description.value === "" || formRef.current.category.value === "" || formRef.current.warehouse_name.value === ""){
            alert("Both fields must be filled!");
            return;
        }

        axios
        .post('http://localhost:8080/api/warehouses/')
    }
    return (
        <>
            <Header isWarehouse={false}/>
            <section>
                <img alt="back-icon" src={backIcon} />
                <h1>Edit Inventory Item</h1>
            </section>
            <section>
                <form>
                    <div>
                        <div>
                            <h2>Item Details</h2>

                            <label> Item Name
                                <input placeholder="Item Name"/>
                            </label>

                            <label> Description
                                <input placeholder="Please enter a brief item description..."/>
                            </label>

                            <label> Category
                                <select>
                                    <option value="" disabled selected>Please select</option>
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

                            <label> Status
                                <input type="radio" value="In Stock" defaultChecked name="status"/> In Stock
                                <input type="radio" value="Out Of Stock" name="status"/> Out Of Stock
                            </label>

                            <label> Quantity
                                <input type="text" defaultValue="0"/>
                            </label>

                            <label>
                                <select> Warehouse
                                    <option value="" disabled selected>Please select</option>
                                    <option>Manhattan</option>
                                    <option>Washington</option>
                                    <option>Jersey</option>
                                    <option>San Francisco</option>
                                    <option>Santa Monica</option>
                                    <option>Seattle</option>
                                    <option>Miami</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default EditInventoryItem;