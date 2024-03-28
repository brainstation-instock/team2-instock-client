import './WarehouseInventory.scss';
import Header from '../Header/Header';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails';
import { useParams } from 'react-router-dom';

function WarehouseInventory() {

    const { id } = useParams();

    return (
        <>
            <Header isWarehouse={false}/>
            <WarehouseDetails id={id}/>
        </>
    )
}

export default WarehouseInventory;