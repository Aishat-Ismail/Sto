import './AddSuppliers.css'
import addsup from '../../assets/addsup.png'

const AddSuppliers = () => {

    return (

        <>
            <div className='addsup-main'>
                <div className='addsup-cont'>

                    <p id='new-supP'>New Supplier</p>
                    <div className='sup-profile-cont'>
                        <div className='spc-main'>
                            <div className='sup-profile'>
                                <img src={addsup} alt="img" id='addsupImg' />
                                <div className='prof-p'>
                                    <p id='sup-drag'>Drag image here</p>
                                    <p id='sup-or'>or</p>
                                    <p id='sup-brow'> Browse Image</p>
                                </div>
                            </div>
                        </div>

                        <div className='spc-input-cont'> 
                            <div className='spc-input' >
                                <label htmlFor="" id='spc-label'>Supplier Name</label>
                                <input type="text" name="" id="spc-inp" placeholder='Enter supplier name' />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor=""  id='spc-label'>Product</label>
                                <input type="text" name="" id="spc-inp" placeholder='Enter product' />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Category</label>
                                <input type="text" name="" id="spc-inp" placeholder='Select product category' />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Buying Price</label>
                                <input type="text" name="" id="spc-inp" placeholder='Enter buying price' />
                            </div>
                            <div className='spc-input'>
                                <label htmlFor="" id='spc-label'>Contact Number</label>
                                <input type="text" name="" id="spc-inp" placeholder='Enter supplier number' />
                            </div>
                            <div className='spc-inputs'>
                                <label htmlFor="" id='spc-label'>Type</label>
                                <div className='spc-btns'>
                                    <button type="button" id='spc-btn1'>Not taking return</button>
                                    <button type="button" id='spc-btn2'>Taking return</button>
                                </div>
                            </div>
                        </div>
                        <div className='spc-btn-bot'>
                            <div className='spc-btn-bots'>
                            <button type="button" id='spc-btn3'>Discard</button>
                            <button type="button" id='spc-btn4'>Add Supplier</button>
                            </div>
                            
                        </div>
                    </div>




                </div>


            </div>

        </>
    )
}
export default AddSuppliers