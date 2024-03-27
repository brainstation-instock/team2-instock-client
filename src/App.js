import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inventories from './pages/Inventories/Inventories';
import Warehouses from './pages/Warehouses/Warehouses';
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import EditInventoryItem from './components/EditInventoryItem/EditInventoryItem';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import InventoryItem from './components/InventoryItem/InventoryItem';
import WarehouseInventory from './components/WarehouseInventory/WarehouseInventory';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Warehouses />} />
        <Route path='/warehouses' element={<Navigate to='/' />} />
        <Route path='/inventories' element={<Inventories />} />
        <Route path='/inventories/add' element={<AddInventoryItem />} />
        <Route path='/warehouses/add' element={<AddWarehouse />} />
        <Route path='/inventories/:id/edit' element={<EditInventoryItem />} />
        <Route path='/warehouses/:id/edit' element={<EditWarehouse />} />
        <Route path='/inventories/:id' element={<InventoryItem />} />
        <Route path='/warehouses/:id/inventory' element={<WarehouseInventory />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    </BrowserRouter>
    <input type="text" placeholder="This is a test"></input>
    </>
  );
}

export default App;
