import './EditInventoryItem.scss';
import Header from '../Header/Header';
import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import backIcon from '../../assets/icons/arrow_back-24px.svg'

function EditInventoryItem() {
    const formRef = useRef()
    const navigate = useNavigate()

    const [isInStock, setIsInStock] = useState(true)

    const [item, setItem] = useState(null)

    const { id } = useParams()

    useEffect(()=>{
    axios
    .get(`http://localhost:8080/api/inventories/${id}`)
    .then((response)=>{
        setItem(response.data)
    })
    }, [])

    
    if(!item){
        return(
            <p>Loading...</p>
        )
    }

    const editItem = (e) => {
        e.preventDefault();

        function isNumber(str) {
            return /^-?\d+$/.test(str);
        }

          if(`${formRef.current.item_name.value}` === "" || `${formRef.current.description.value}` === "" || `${formRef.current.category.value}` === "" || `${formRef.current.warehouse_id.value}` === ""){
              alert("Both fields must be filled!");
              return;
           }

         if(!isNumber(formRef.current.quantity.value)){
            alert("Quantity must be a valid number!");
            return;
         }

        axios
        .put(`http://localhost:8080/api/inventories/${id}`, 
        {
            item_name: formRef.current.item_name.value,
            description: formRef.current.description.value,
            category: formRef.current.category.value,
            status: formRef.current.status.value,
            quantity: formRef.current.quantity.value,
            warehouse_id: formRef.current.warehouse_id.value
            
        })

        alert("Item successfully edited!")

        navigate('/inventories');

    }
    return (
        <>
            <Header isWarehouse={false}/>
            <main className="edit-item">
                <section className="edit-item-container">
                    <img className="edit-item__back-button" alt="back-icon" src={backIcon} onClick={() => navigate('/inventories')} role="button" />
                    <h1 className="edit-item__heading">Edit Inventory Item</h1>
                </section>
                <section>
                    <form onSubmit={editItem} ref={formRef}>
                        <div className="details__edit-form">
                            <div className="details__edit-form-item-details">
                                <h2 className="details__edit-form-heading">Item Details</h2>

                                <label className="details__edit-form-label" htmlFor='item_name'> Item Name
                                    <input className='details__edit-form-input' type='text' id='item_name' placeholder="Item Name" defaultValue={item.item_name}/>
                                </label>

                                
                                <label className="details__edit-form-label" htmlFor='description'> Description
                                    <div className="textarea-container">
                                        <textarea className='details__edit-form-input--textarea' type='textarea' id='description' placeholder="Please enter a brief item description..." defaultValue={item.description}/>
                                    </div>
                                </label>
                                

                                <label className="details__edit-form-label" htmlFor='category'> Category
                                    <select className='details__edit-form-input--dropdown' id='category' defaultValue={item.category}>
                                        <option value="" disabled>Please select</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Apparel">Apparel</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gear">Gear</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </label>
                            </div>
                            <div className="details__edit-form-stock">
                                <h2 className="details__edit-form-heading">Item Availability</h2>
                                <div className="details__edit-form-status">
                                    <h3 className="details__edit-form-status-label">Status</h3>
                                    <label className="details__edit-form-status-inputs" htmlFor='status'> 
                                        <div className="details__edit-form-status-inputs--in-stock">
                                        <input id='in' type="radio" value="In Stock" defaultChecked name="status" onChange={() => setIsInStock(true)} /> <p className="stock-txt">In Stock</p>
                                        </div>
                                        <div className="details__edit-form-status-inputs--out-of-stock">
                                        <input id='out' type="radio" value="Out Of Stock" name="status" onChange={() => setIsInStock(false)}/> <p className="stock-txt">Out Of Stock</p>
                                        </div>
                                    </label>
                                </div>
                                { isInStock && 
                                    <label className={`details__edit-form-label`} htmlFor='quantity'> Quantity
                                    <input className='details__edit-form-input--qty' id='quantity' type="text" defaultValue={isInStock ? item.quantity : '0'}/>
                                    </label>}

                                <label className="details__edit-form-label" htmlFor='warehouse_id'> Warehouse
                                    <select className='details__edit-form-input--dropdown' id='warehouse_id' defaultValue={item.warehouse_id}>
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
                        <div className="details__edit-form-btns">
                            <div className="details__edit-form-btns-c">
                                <button className='details__edit-form-cancel' onClick={() => navigate('/inventories')}>Cancel</button>
                            </div>
                            <div className="details__edit-form-btns-a">
                                <button className='details__edit-form-edit' type="submit">Edit Item</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default EditInventoryItem;