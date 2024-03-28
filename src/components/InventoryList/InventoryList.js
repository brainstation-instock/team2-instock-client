import { useState, useEffect } from 'react'
import axios from 'axios'
import searchIcon from '../../assets/icons/search-24px.svg'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import chvrnRight from '../../assets/icons/chevron_right-24px.svg'
import './InventoryList.scss'
import {NavLink, Link} from 'react-router-dom'
import sortIcon from '../../assets/icons/sort-24px.svg'

function InventoryList() {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/api/inventories')
        .then((response) => {
            setItems(response.data)
        })
    }, [])

    const itemsArr = items.inventories

    console.log(itemsArr)

    if(!itemsArr){
        return(
            <p>Loading..</p>
        )
    }

    return (
    <main className="items">
        <header className="items-header">
            <h1 className="items-header__title">Inventory</h1>
            <div className="items-header__search-bar">
                
                <form>   
                    <label>
                        <div className="items-header__search-bar__container">
                            <input 
                            className="items-header__search-bar--input"
                            type="text" 
                            placeholder="Search..." 
                            name="search"/>
                            <img className="items-header__search-bar--icon" alt="search-icon" src={searchIcon}/>
                        </div>
                    </label>
                </form>
                <NavLink to={'/inventories/add'}>
                    <div className="items-header__add-container">
                        <button className="items-header__add-container__btn">
                            + Add New item
                        </button>
                    </div>
                </NavLink>
            </div>
        </header>
        <section className="items-list">
            <div className="items-list__table-header">
                <div className="items-list__table-header--item">
                    <h2 className="items-list__table-header--item-txt">INVENTORY ITEM</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="items-list__table-header--category">
                    <h2>CATEGORY</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="items-list__table-header--status">
                    <h2>STATUS</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="items-list__table-header--qty">
                    <h2>QTY</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <div div className="items-list__table-header--warehouse">
                    <h2>WAREHOUSE</h2>
                    <img alt='sort-icon' src={sortIcon}/>
                </div>
                <h2 div className="items-list__table-header--actions">ACTIONS</h2>
            </div>
            {
                itemsArr.map((item) => (
                        <article key={item.id} className="items-list__container">
                            <div className="items-list__card">
                                <div className="items-list__card-info">
                                <div className="items-list__card-info-ic">
                                    <div className="items-list__card-info-ic--item">
                                        <h3 className="items-list__card-info-ic--item-label">INVENTORY ITEM</h3>
                                        <Link key={item.id} to={`/inventories/${item.id}`} className="items-list__card-info-ic--item-ic">
                                            <p className="items-list__card-info-ic--item-ic-name">{item.item_name}</p>
                                            <img className="items-list__card-info-ic--item-ic-chevron" alt="chevron-right" src={chvrnRight}/>
                                        </Link>
                                    </div>
                                    <div className="items-list__card-info-ic--category">
                                        <h3 className="items-list__card-info-ic--category-label">CATEGORY</h3>
                                        <p className= 'items-list__card-info-ic--category-txt'>{item.category}</p>
                                    </div>
                                </div>
                                <div className="items-list__card-info-sq">
                                    <div className="items-list__card-info-sq--status">
                                        <h3 className={`items-list__card-info-sq--status-label`}>STATUS</h3>
                                        <div className={`items-list__card-info-sq--status-container--${item.status === "In Stock" ? 'in-stock' : 'out-of-stock'}`}>
                                        <p className={`items-list__card-info-sq--status-txt--${item.status === "In Stock" ? 'in-stock' : 'out-of-stock'}`}>{item.status}</p>
                                        </div>
                                    </div>
                                    <div className="items-list__card-info-sq--quantity">
                                        <h3 className="items-list__card-info-sq--quantity-label">QTY</h3>
                                        <div className="items-list__card-info-sq--quantity">
                                        <p className="items-list__card-info-sq--quantity-txt">{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="items-list__card-info-sq--warehouse">
                                        <h3 className="items-list__card-info-sq--warehouse-label">WAREHOUSE</h3>
                                        <p className="items-list__card-info-sq--warehouse-label-txt">{item.warehouse_name}</p>
                                    </div>
                                </div>
                            </div>
                                <div className="items-list__card-info-de">
                                    <Link to={`/items/${item.id}/delete`}>
                                    <img className="items-list__card-info-de-delete" alt="delete-icon" src={deleteIcon}/>
                                    </Link>
                                    <Link to={`/items/${item.id}/edit`}>
                                    <img className="items-list__card-info-de-edit" alt="edit-icon" src={editIcon}/>
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

export default InventoryList 
