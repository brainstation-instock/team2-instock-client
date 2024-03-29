import { useEffect, useState } from 'react';
import './WarehouseInventoryList.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

function WarehouseInventoryList({id}){

    const [inventories, setInventories] = useState(null);

    useEffect(() => {
        (async() => {
            const {data} = await axios.get(`${baseUrl}/api/warehouses/${id}/inventories`); 
            setInventories(data);
        })();
    }, []);

    if(!inventories){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <table className='inventory'>
                <thead className='inventory__headers'>
                    <tr className='inventory__headers-row'>
                        <th className='inventory__header'><span className='inventory__text inventory__text--left'>INVENTORY ITEM</span></th>
                        <th className='inventory__header'><span className='inventory__text'>CATEGORY</span></th>
                        <th className='inventory__header'><span className='inventory__text'>STATUS</span></th>
                        <th className='inventory__header'><span className='inventory__text'>QUANTITY</span></th>
                        <th className='inventory__header'><span className='inventory__text inventory__text--right'>ACTION</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map((inventory) => {

                            const statusStyle = inventory.status === 'In Stock' ? 'inventory__data--in' : 'inventory__data--out';

                            return (
                                <tr key={inventory.id} className='inventory__row'>
                                    <td className='inventory__data inventory__data--item'>
                                        <Link to={`/inventories/${inventory.id}`} className='inventory__link'>{inventory.item_name}</Link>
                                    </td>
                                    <td className='inventory__data inventory__data--category'>{inventory.category}</td>
                                    <td className='inventory__data inventory__data--status'>
                                        <p className={`${statusStyle}`}>{inventory.status}</p>
                                    </td>
                                    <td className='inventory__data inventory__data--quantity'>{inventory.quantity}</td>
                                    <td className='inventory__actions'>
                                        <button className='inventory__action inventory__action--delete'></button>
                                        <Link to={`/inventories/${inventory.id}/edit`} className='inventory__action inventory__action--edit'></Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default WarehouseInventoryList;