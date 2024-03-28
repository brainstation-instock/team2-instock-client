import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import searchIcon from '../../assets/icons/search-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import chvrnRight from '../../assets/icons/chevron_right-24px.svg'
import './WarehouseList.scss'
import {NavLink, Link} from 'react-router-dom'
import sortIcon from '../../assets/icons/sort-24px.svg'

function WarehouseList() {

    const { idOfItem } = useParams();
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/api/inventories')
        .then((response) => {
            setItems(response.data)
        })
    }, [])

    const itemsArr = items.inventories

    if(!warehouseArr){
        return(
            <p>Loading..</p>
        )
    }

    return (
    <main className="warehouses">
        <header className="warehouses-header">
            <h1 className="warehouses-header__title">Warehouses</h1>
            <div className="warehouses-header__search-bar">
                
                <form>   
                    <label>
                        <div className="warehouses-header__search-bar__container">
                            <input 
                            className="warehouses-header__search-bar--input"
                            type="text" 
                            placeholder="Search..." 
                            name="search"/>
                            <img className="warehouses-header__search-bar--icon" alt="search-icon" src={searchIcon}/>
                        </div>
                    </label>
                </form>
                <NavLink to={'/warehouses/add'}>
                    <div className="warehouses-header__add-container">
                        <button className="warehouses-header__add-container__btn">
                            + Add New Warehouse
                        </button>
                    </div>
                </NavLink>
            </div>
        </header>
        <section className="warehouses-list">
            <div className="warehouses-list__table-header">
                <div div className="warehouses-list__table-header--warehouse">
                    <h2>WAREHOUSE</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="warehouses-list__table-header--address">
                    <h2>ADDRESS</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="warehouses-list__table-header--contact-name">
                    <h2>CONTACT NAME</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="warehouses-list__table-header--contact-info">
                    <h2>CONTACT INFORMATION</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <h2 div className="warehouses-list__table-header--actions">ACTIONS</h2>
            </div>
            {
                warehouseArr.map((warehouse) => (
                        <article key={warehouse.id} className="warehouses-list__container">
                            <div className="warehouses-list__card">
                                <div className="warehouses-list__card-info">
                                <div className="warehouses-list__card-info-wa">
                                    <div className="warehouses-list__card-info-wa--warehouse">
                                        <h3 className="warehouses-list__card-info-wa--warehouse-label">WAREHOUSE</h3>
                                        <Link key={warehouse.id} to={`/warehouses/${warehouse.id}`} className="warehouses-list__card-info-wa--warehouse-nc">
                                            <p className="warehouses-list__card-info-wa--warehouse-nc-name">{warehouse.warehouse_name}</p>
                                            <img className="warehouses-list__card-info-wa--warehouse-nc-chevron" alt="chevron-right" src={chvrnRight}/>
                                        </Link>
                                    </div>
                                    <div className="warehouses-list__card-info-wa--address">
                                        <h3 className="warehouses-list__card-info-wa--address-label">ADDRESS</h3>
                                        <p className="warehouses-list__card-info-wa--address-txt">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                                    </div>
                                </div>
                                <div className="warehouses-list__card-info-cc">
                                    <div className="warehouses-list__card-info-cc--contact-name">
                                        <h3 className="warehouses-list__card-info-cc--contact-name-label">CONTACT NAME</h3>
                                        <p className="warehouses-list__card-info-cc--contact-name-txt">{warehouse.contact_name}</p>
                                    </div>
                                    <div className="warehouses-list__card-info-cc--contact-info">
                                        <h3 className="warehouses-list__card-info-cc--contact-info-label">CONTACT INFORMATION</h3>
                                        <div className="warehouses-list__card-info-cc--contact-info-ph">
                                        <p className="warehouses-list__card-info-cc--contact-info-ph--phone">{warehouse.contact_phone}</p>
                                        <p className="warehouses-list__card-info-cc--contact-info-ph--email">{warehouse.contact_email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="warehouses-list__card-info-de">
                                    <Link to={`/warehouses/${warehouse.id}/delete`}>
                                    <img className="warehouses-list__card-info-de-delete" alt="delete-icon" src={deleteIcon}/>
                                    </Link>
                                    <Link to={`/warehouses/${warehouse.id}/edit`}>
                                    <img className="warehouses-list__card-info-de-edit" alt="edit-icon" src={editIcon}/>
                                    </Link>
                                </div>
                            </div>
                
                            
                        </article>
                ))
                    }
            
        </section>
    </main> 
    )
 
}

export default WarehouseList 
