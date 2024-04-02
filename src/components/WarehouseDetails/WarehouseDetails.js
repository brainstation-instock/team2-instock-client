import { useEffect, useState } from 'react';
import './WarehouseDetails.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import back from '../../assets/icons/arrow_back-24px.svg';

const baseUrl = process.env.REACT_APP_BASE_URL;

function WarehouseDetails({id}){

    const [warehouse, setWarehouse] = useState(null);
    

    useEffect(() => {
        (async() => {
            const {data} = await axios.get(`${baseUrl}/api/warehouses/${id}`);
            setWarehouse(data);
        })();
    }, []);

    if(!warehouse){
        return <h1>Loading...</h1>
    }
    
    return(
        <>
            <section className='warehouse'>
                <div className='warehouse__header'>
                    <Link to={'/warehouses'} className='warehouse__back warehouse__link'>
                        <img src={back} alt="back to warehouse list" />
                    </Link>
                    <h1 className='warehouse__name'>{warehouse.warehouse_name}</h1>
                    <Link to={`/warehouses/${warehouse.id}/edit`} className='warehouse__edit warehouse__link'>
                        <span className='warehouse__edit-img'></span>
                        <span className='warehouse__text warehouse__edit-txt'>Edit</span>
                    </Link>
                </div>
                <div className='warehouse__details'>
                    <address className='warehouse__contact warehouse__contact--full'>
                        <h4 className='warehouse__label'>WAREHOUSE ADDRESS:</h4>
                        <p className='warehouse__text warehouse__physical'>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                    </address>
                    <address className='warehouse__contact'>
                        <h4 className='warehouse__label'>CONTACT NAME:</h4>
                        <p className='warehouse__text'>{`${warehouse.contact_name}`}</p>
                        <p className='warehouse__text'>{`${warehouse.contact_position}`}</p>
                    </address>
                    <address className='warehouse__contact'>
                        <h4 className='warehouse__label'>CONTACT INFORMATION:</h4>
                        <p className='warehouse__text'>{`${warehouse.contact_phone}`}</p>
                        <p className='warehouse__text'>{`${warehouse.contact_email}`}</p>
                    </address>
                </div>
            </section>
        </>
    );
}

export default WarehouseDetails;