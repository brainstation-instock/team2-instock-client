
import { useState, useEffect } from 'react'
import React from 'react' // imported React for toggleModal functionality
import { NavLink, Link } from 'react-router-dom' // consolidated all react-router-dom calls
import axios from 'axios'
import searchIcon from '../../assets/icons/search-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import chvrnRight from '../../assets/icons/chevron_right-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import './WarehouseList.scss'
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse'

const baseUrl = process.env.REACT_APP_BASE_URL;
const warehousesUrl = `${baseUrl}/api/warehouses`;

function WarehouseList() {

    // Declare variables
    const [warehouses, setWarehouses] = useState([]);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        axios
        .get(warehousesUrl)
        .then((response) => {
            setWarehouses(response.data)
        })
    }, [])

    const warehouseArr = warehouses.warehouses

    if(!warehouseArr){
        return(
            <p>Loading..</p>
        )
    }

    // Toggle visibility with toggleModal
    const toggleModal = (warehouseId) => {
        setModal(warehouseId);
        // Disable scrolling when the modal is opened
        document.body.style.overflow = 'hidden';
    };
    // Allow scrolling when the modal is closed
    const closeModal = () => {
        setModal(null);
        document.body.style.overflow = 'auto';
    };
    // Refresh Warehouses after Delete button is selected
    const refreshWarehouses = () => {
        axios.get(warehousesUrl).then((response) => {
            setWarehouses(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
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
                <div className="warehouses-list__table-header--warehouse">
                    <h2>WAREHOUSE</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div className="warehouses-list__table-header--address">
                    <h2>ADDRESS</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div className="warehouses-list__table-header--contact-name">
                    <h2>CONTACT NAME</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div className="warehouses-list__table-header--contact-info">
                    <h2>CONTACT INFORMATION</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <h2 className="warehouses-list__table-header--actions">ACTIONS</h2>
            </div>
            {
                warehouseArr.map((warehouse) => (
                        <article key={warehouse.id} className="warehouses-list__container">
                            <div className="warehouses-list__card">
                                <div className="warehouses-list__card-info">
                                <div className="warehouses-list__card-info-wa">
                                    <div className="warehouses-list__card-info-wa--warehouse">
                                        <h3 className="warehouses-list__card-info-wa--warehouse-label">WAREHOUSE</h3>
                                        <Link key={warehouse.id} to={`/warehouses/${warehouse.id}/inventories`} className="warehouses-list__card-info-wa--warehouse-nc">
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
                                    <img className="warehouses-list__card-info-de-delete" alt="delete-icon" src={deleteIcon} onClick={() => toggleModal(warehouse.id)}/>
                                    <Link to={`/warehouses/${warehouse.id}/edit`}>
                                    <img className="warehouses-list__card-info-de-edit" alt="edit-icon" src={editIcon}/>
                                    </Link>
                                </div>
                            </div>
                            {modal === warehouse.id && 
                            <DeleteWarehouse toggleModal={closeModal} warehouse={warehouse} refreshWarehouses={refreshWarehouses} />}
                        </article>
                ))
                    }
        </section>
    </main> 
    )
 
}

export default WarehouseList 
