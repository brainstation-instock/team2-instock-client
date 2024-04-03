import Header from '../../components/Header/Header';
import './Warehouses.scss';
import WarehouseList from '../../components/WarehouseList/WarehouseList';

function Warehouses() {

    return (
        <>
        <Header isWarehouse={true}/>
        <WarehouseList/>
        </>
    )
}

export default Warehouses;