import './Inventory.css'
import Invent from './Invent'
import InventT from './InventT'
import Filters from '../../assets/Filters.png'
import AddInvent from './AddInvent'
import { useState } from 'react'

const Inventory = ({ShowAddinv})=>{

    const [modalShow, setModalShow] = useState(false)

    const openModal = () =>{
        setModalShow(true)
    }

    const closeModal = () =>{
        setModalShow(false)
    }

    const togglePage = ()=>{
        ShowAddinv((previousState) => !previousState)
    }



    const inver = [
        {
            inv1: 'Total Products',
            inv2: '868',
            inv3: '₦25,000',
            inv4: 'Last 7 days',
            inv5: 'Revenue',
        },

        {
            inv1: 'Top Selling',
            inv2: '5',
            inv3: '₦2,500',
            inv4: 'Last 7 days',
            inv5: 'Cost',
        },

        {
            inv1: 'Low Stocks',
            inv2: '12',
            inv3: '2',
            inv4: 'Ordered',
            inv5: 'Not in stock',
        },


    ]

    const invers = [
        {
            invs1: 'Produts',
            invs2: 'Buying Price',
            invs3: 'Quantity',
            invs4: 'Threshold Value',
            invs5: 'Expiry Date',
            invs6: 'Availability',

        },

        {
            invs1: 'Maggi',
            invs2: '₦450',
            invs3: '20 Packets',
            invs4: '5 Packets',
            invs5: '16/4/24',
            invs6: 'In Stock',

        },

        {
            invs1: 'Bru',
            invs2: '₦430',
            invs3: '12 Packets',
            invs4: '3 Packets',
            invs5: '16/9/24',
            invs6: 'Out of Stock',

        },

        {
            invs1: 'Redbull',
            invs2: '₦400',
            invs3: '15 Packets',
            invs4: '5724',
            invs5: '16/7/24',
            invs6: 'In Stock',

        },

        {
            invs1: 'Bournvita',
            invs2: '₦300',
            invs3: '22 Packets',
            invs4: '10 Packets',
            invs5: '16/6/24',
            invs6: 'Out of Stock',

        },

        {
            invs1: 'Horlicks',
            invs2: '₦300',
            invs3: '10 Packets',
            invs4: '5 Packets',
            invs5: '16/5/24',
            invs6: 'In Stock',

        },

        {
            invs1: 'Harpic',
            invs2: '₦800',
            invs3: '18 Packets',
            invs4: '7 Packets',
            invs5: '16/4/24',
            invs6: 'Out of Stock',

        },

        {
            invs1: 'Ariel',
            invs2: '₦450',
            invs3: '40 Packets',
            invs4: '17 Packets',
            invs5: '16/10/24',
            invs6: 'In Stock',

        },

        {
            invs1: 'Coca Cola',
            invs2: '₦500',
            invs3: '50 Packets',
            invs4: '20 Packets',
            invs5: '16/12/24',
            invs6: 'In Stock',

        },

        {
            invs1: 'Pepsi',
            invs2: '₦700',
            invs3: '18 Packets',
            invs4: '8 Packets',
            invs5: '16/8/24',
            invs6: 'Low Stock',

        },
    ]

    

    return(

        <>
       <div className='invers-pos' style={{position: 'relative'}}>
            {modalShow && <AddInvent/>}
        <div className='over-mains'>
                <div className='over-inv-up'>

                    <div className='over-invP-cont'>

                        <p id='over-invP'>Overall Inventory</p>

                    </div>

                    <div className='over-inv-down'>
                        <div className='col1'>
                            <p id='ovp1'>Categories</p>
                            <p id='ovp2'>14</p>
                            <p id='ovp3'>Last 7 days</p>

                        </div>
                        
                        {inver.map((data, index) => {
                            return (<Invent key={index} inv1={data.inv1} inv2={data.inv2} inv3={data.inv3} inv4={data.inv4} inv5={data.inv5} />)
                        })}

                    </div>

                </div>

                <div className="invers-main">
                    <div className="invers-top">
                        <p id='invsP'>Products</p>
                        <div className="inv-btn-cont">
                            <button type="button" id="obc1" onClick={openModal}>Add Product</button>
                            <button type="button" id="obc2"> <img src={Filters} alt="img" id='supImg' />Filters</button>
                            <button type="button" id="obc3">Download all</button>
                        </div>


                    </div>
                    <table className="invers-table">


                    {invers.map((data, index) => {
                            return (<InventT key={index} invs1={data.invs1} invs2={data.invs2} invs3={data.invs3} invs4={data.invs4} invs5={data.invs5} invs6={data.invs6}/>)
                        })}



                    </table>
                    <div className='invers-bot'>
                        <button type="button" id='obbtn'>Previous</button>
                        <p>Page 1 0f 10</p>
                        <button type="button" id='obbtn'>Next</button>


                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Inventory