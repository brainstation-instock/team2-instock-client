import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import searchIcon from '../../assets/icons/search-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import chvrnRight from '../../assets/icons/chevron_right-24px.svg'
import './WarehouseList.scss'

function WarehouseList() {

    const { idOfWarehouse } = useParams();
    const [warehouses, setWarehouses] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/api/warehouses')
        .then((response) => {
            setWarehouses(response.data)
        })
    }, [])
    return (
    <>
        <header>
            <h1>Warehouses</h1>
            <div>
                
                <form>   
                    <label>
                        <div>
                            <img alt="search-icon" src={searchIcon}/>
                            <input 
                            type="text" 
                            placeholder="Search..." 
                            name="search"/>
                        </div>
                    </label>
                </form>
                <NavLink to={'/warehouses/add'}>
                    <div>
                        <button>
                            + Add New Warehouse
                        </button>
                    </div>
                </NavLink>
            </div>
        </header>
        <main>
            {
                warehouses.map((warehouse) =>{
                    return(
                        <article>
                            <div>
                                <div>
                                    <div>
                                        <h3>Warehouse</h3>
                                        <Link key={warehouse.id} to={`/warehouses/${warehouse.id}`}>
                                        <p>{warehouse.warehouse_name}</p>
                                        <img alt="chevron-right" src={chvrnRight}/>
                                        </Link>
                                    </div>
                                    <div>
                                        <h3>Address</h3>
                                        <p>{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Contact Name</h3>
                                        <p>{warehouse.contact_name}</p>
                                    </div>
                                    <div>
                                        <h3>Contact Information</h3>
                                        <div>
                                        <p>{warehouse.contact_phone}</p>
                                        <p>{warehouse.contact_email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img alt="delete-icon" src={deleteIcon}/>
                                    <img alt="edit-icon" src={editIcon}/>
                                </div>
                
                            </div>
                        </article>
                    )
                })
            }
        </main>
    </>
    )
 
}

export default WarehouseList 
