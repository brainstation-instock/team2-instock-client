import './InventoryItem.scss';
import Header from '../Header/Header';
import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import backIcon from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
const baseUrl = process.env.REACT_APP_BASE_URL;



function InventoryItem() {

    const [item, setItem] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/inventories/${id}`)
            .then((response) => {
                setItem(response.data)
            })
  

    // useEffect(() => {
    //     axios
    //         .get(inventoriesUrl)
    //         .then((response) => {
    //             setItem(response.data)
    //         });

        // axios
        // .get(`http://localhost:8080/api/warehouses/${id}`)
        // .then((response) => {
        //     setItem(response.data)
        // });
    }, [])

    // const getWarehouses = () => {
    //     axios.get(warehousesUrl).then((response) => {
    //         setItem(response.data);
    //     })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }


    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:8080/api/warehouses/${id}`)
    //         .then((response) => {
    //             setItem(response.data)
    //         })
    // }, [])

    if (!item) {
        return (
            <p>Loading...</p>
        )
        
    }

    


    return (

        <>
            <Header isWarehouse={false} />
            <main className='edit-item'>
            <article className='edit-item-container'>
                <section className='edit-item-header'>
                <div className='edit-item-titlearr'> 
                    <h1 className='edit-item-maintitle'>{item.item_name} </h1>
                    
                    <Link to={'/inventories'} className='warehouse__back warehouse__link'>
                        <img src={backIcon} alt="back to inventories list" className='edit-item-bckarr' />
                    </Link>
                    </div>
                    <Link to={`/inventories/${id}/edit`} className='warehouse__back warehouse__link'>
                        <img src={editIcon} alt="back to inventories list" className='edit-item-pencil' />
                    </Link>
                </section>


                <div className='edit-item-body'>
                    <div className='edit-item-boxleft'> 
                    <div className='edit-item-bodescript'>
                        <p className='edit-item-title'> Item Description </p>
                        <p className='edit-item-descripinfo'> {item.description}</p>
                    </div>
                    <div className='edit-item-category'>
                        <p className='edit-item-title'> Category </p>
                        <p className='edit-item-categorytype'>{item.category} </p>
                    </div>
                    </div>
                    <div className='edit-item-boxright'> 
                    <div className='edit-item-inoroutstock'>
                        <div className='edit-item-inoroutstock2'> 
                        <p className='edit-item-title'> Status</p>
                        <div className={`items-list__card-info-sq--status-container--${item.status === "In Stock" ? 'in-stock' : 'out-of-stock'}`}>
                            <p className={`items-list__card-info-sq--status-txt--${item.status === "In Stock" ? 'in-stock' : 'out-of-stock'}`}>{item.status.toUpperCase()} </p>
                        </div>
                        </div>
                        <div className='edit-item-quantity'>
                            <p className='edit-item-title'> Quantity </p>
                            <p className='edit-item-quantity-info'>{item.quantity} </p>
                        </div>

                    </div>

                    <div className='edit-item-whatwarehouse'> 
                        <p> Warehouse </p>
                        <p> {item.warehouse_name}</p>
                    </div>
                    </div>


                </div>
            </article>


            </main>

        </>
    )
}

export default InventoryItem;
