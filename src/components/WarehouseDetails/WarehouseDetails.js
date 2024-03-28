import { useEffect, useState } from 'react';
import './WarehouseDetails.scss';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function WarehouseDetails({id}){

    const [warehouse, setWarehouse] = useState(null);
    console.log(`${baseUrl}/api/warehouses/${id}`);

    useEffect(() => {
        (async() => {
            const detail = await axios.get(`${baseUrl}/api/warehouses/${id}`);
            console.log(detail);
        })();
    });

    return(
        <>
            <section className='warehouse'>
                <h1>Warehouse number {id}</h1>
            </section>
        </>
    );
}

export default WarehouseDetails;