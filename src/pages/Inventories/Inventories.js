import Header from '../../components/Header/Header';
import './Inventories.scss';
import InventoryList from '../../components/InventoryList/InventoryList';

function Inventories() {
    return (
        <>
            <Header isWarehouse={false}/>
            <InventoryList/>
        </>
    )
}

export default Inventories;