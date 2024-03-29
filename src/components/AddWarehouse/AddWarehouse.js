import './AddWarehouse.scss';
import Header from '../Header/Header';
import back from '../../assets/icons/arrow_back-24px.svg';

function AddWarehouse() {
    return (
        <>
            <Header isWarehouse={true} />
            <main className='add-warehouse'>
                <section className='add-warehouse-container'>
                    <img className='add-warehouse__back-button' src={back} />
                    <h1 className='add-warehouse__heading'>Add New Warehouse</h1>
                </section>
                <article className='details__form-sections'>
                    <section className='details__form'>
                        <form className='details__form-warehouse'>
                            <h2 className='details__form-heading'>Warehouse Details</h2>
                            <label htmlFor='warehouse-name' className='details__form-label'>Warehouse Name</label>
                            <input className='details__form-input' id='warehouse-name' placeholder="Warehouse Name" />
                            <label htmlFor='street-address' className='details__form-label'>Street Address</label>
                            <input className='details__form-input' id='street-address' placeholder="Street Address" />
                            <label htmlFor='city' className='details__form-label'>City</label>
                            <input className='details__form-input' id='city' placeholder="City" />
                            <label htmlFor='country' className='details__form-label'>Country</label>
                            <input className='details__form-input' id='country' placeholder="Country" />
                        </form>
                    </section>
                    <section className='details__form' id='details__contact'>
                        <form className='details__form-contact'>
                            <h2 className='details__form-heading'>Contact Details</h2>
                            <label htmlFor='contact-name' className='details__form-label'>Contact Name</label>
                            <input className='details__form-input' id='contact-name' placeholder="Contact Name" />
                            <label htmlFor='position' className='details__form-label'>Position</label>
                            <input className='details__form-input' id='position' placeholder="Position" />
                            <label htmlFor='phone-number' className='details__form-label'>Phone Number</label>
                            <input className='details__form-input' id='phone-number' placeholder="Phone Number" />
                            <label htmlFor='email' className='details__form-label'>Email</label>
                            <input className='details__form-input' id='email' placeholder="Email" />
                        </form>
                    </section>
                </article>
                <div className='details__form-container'>
                    <button className='details__form-cancel'>Cancel</button>
                    <button className='details__form-add'>+ Add Warehouse</button>
                </div>
            </main>

        </>
    )
}

export default AddWarehouse;