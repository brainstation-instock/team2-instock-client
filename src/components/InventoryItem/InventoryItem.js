import './InventoryItem.scss';
import Header from '../Header/Header';

function InventoryItem() {
    return (
        <>
            <Header isWarehouse={false}/>
            <h1>Inventory Item Component</h1>
        </>
    )
}

export default InventoryItem;