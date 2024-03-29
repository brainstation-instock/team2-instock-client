import './WarehouseInventory.scss';
import Header from '../Header/Header';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails';
import { useParams } from 'react-router-dom';
import WarehouseInventoryList from '../WarehouseInventoryList/WarehouseInventoryList';

function WarehouseInventory() {

    const { id } = useParams();

    return (
        <>
            <Header isWarehouse={true}/>
            <div className='details'>
                <WarehouseDetails id={id}/>
                <WarehouseInventoryList id={id}/>
            </div>
        </>
    )
}

export default WarehouseInventory;