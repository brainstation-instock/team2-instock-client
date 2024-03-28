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
                        <th className='inventory__header'>INVENTORY ITEM</th>
                        <th className='inventory__header'>CATEGORY</th>
                        <th className='inventory__header'>STATUS</th>
                        <th className='inventory__header'>QUANTITY</th>
                        <th className='inventory__header'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventories.map((inventory) => {

                            return (
                                <tr key={inventory.id} className='inventory__row'>
                                    <td className='inventory__data inventory__data--item'>{inventory.item_name}</td>
                                    <td className='inventory__data inventory__data--category'>{inventory.category}</td>
                                    <td className='inventory__data inventory__data--status'>{inventory.status}</td>
                                    <td className='inventory__data inventory__data--quantity'>{inventory.quantity}</td>
                                    <td className='inventory__action'>
                                        <button className='inventory__delete'>delete</button>
                                        <Link className='inventory__edit'>Edit</Link>
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