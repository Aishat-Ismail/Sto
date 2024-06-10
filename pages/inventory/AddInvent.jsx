import './AddInvent.css'

const AddInvent =()=>{

    return(

        <>
         <div className='addinver-main'>
                <div className='addinv-cont'>
                    <div className='addinv-pcont'>
                        <p id='addinvP'>New Inventory</p>
                    </div>

                    <div className='addinv-input-cont'>

                        <div className='inv-input' >
                            <label htmlFor="" id='inv-label'>Product Name</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter product name' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Product ID</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter product ID' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Category</label>
                            <input type="text" name="" id="inv-inp" placeholder='Select product category' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Buying Price</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter buying price' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Quantity</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter product quantity' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Unit</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter product unit' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Expiry Date</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter expiry date' />
                        </div>

                        <div className='inv-input'>
                            <label htmlFor="" id='inv-label'>Threshold Value</label>
                            <input type="text" name="" id="inv-inp" placeholder='Enter threshold value' />
                        </div>
                        {/* <div className='inv-check'>
                            <input type="checkbox" name="" id="inv-check" />
                            <span id='span-check'>Notify on the date of delivery</span>

                        </div> */}

                        <div className='inv-btn-bot'>
                            <div className='inv-btn-bots'>
                            <button type="button" id='inv-btn3'>Discard</button>
                            <button type="button" id='inv-btn4'>Add Products</button>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default AddInvent