import './Suppliers.css'
import AddSuppliers from './AddSuppliers'
import Supplier from './Supplier'
import Filters from '../../assets/Filters.png'
import { useState } from 'react'

const Suppliers = ({ShowAddSup}) => {
    const [modalShow, setModalShow] = useState(false)

    const openModal = () =>{
        setModalShow(true)
    }

    const closeModal = () =>{
        setModalShow(false)
    }

    const togglePage = ()=>{
        ShowAddSup((previousState) => !previousState)
    }

    const supplier = [

        {
            sud1: 'Supplier Name',
            sud2: 'Product',
            sud3: 'Contact Number',
            sud4: 'Email',
            sud5: 'Type',
            sud6: 'On the Way',

        },

        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '13',

        },

        {
            sud1: 'Tom Homan',
            sud2: 'Maaza',
            sud3: '7687764556',
            sud4: 'homan@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Chaarin Char',
            sud2: 'Diary Milk',
            sud3: '7687764556',
            sud4: 'chaarin@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Hoofman Hoof',
            sud2: 'Saffron',
            sud3: '7687764556',
            sud4: 'hoofman@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '12',

        },
        {
            sud1: 'Richie Char',
            sud2: 'Marie Gold',
            sud3: '7687764556',
            sud4: 'richie@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Lizzy Gold',
            sud2: 'Sardine',
            sud3: '7687764556',
            sud4: 'lizzygold@gmail.com',
            sud5: 'Taking Return',
            sud6: '9',

        },

        {
            sud1: 'Denker Duke',
            sud2: 'Milo',
            sud3: '7687764556',
            sud4: 'denverduke@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Joe Nike',
            sud2: 'Orange',
            sud3: '7687764556',
            sud4: 'joenike@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Denver Duke',
            sud2: 'Apple',
            sud3: '7687764556',
            sud4: 'denver@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },

        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },
        {
            sud1: 'Faideen Deen',
            sud2: 'Apple',
            sud3: '7687764556',
            sud4: 'faideendeen@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },
        {
            sud1: 'Richard Martin',
            sud2: 'Kit Kat',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },

        {
            sud1: 'Aisha Martin',
            sud2: 'Good Day',
            sud3: '7687764556',
            sud4: 'aishat@gmail.com',
            sud5: ' Not Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Richard Martin',
            sud2: 'Coca Cola',
            sud3: '7687764556',
            sud4: 'richard@gmail.com',
            sud5: 'Taking Return',
            sud6: '-',

        },

        {
            sud1: 'Hope Martin',
            sud2: 'Pepsi',
            sud3: '7687764556',
            sud4: 'hopemartin@gmail.com',
            sud5: 'Taking Return',
            sud6: '7',

        },
    ]

    return (

        <>
        <div className='suppliers-pos' style={{position : "relative"}}>
        {modalShow && <AddSuppliers/>}
            <div className="suppliers-main">
                <div className="suppliers-top">
                    <p id='supP'>Suppliers</p>
                    <div className="sup-btn-cont">
                        <button type="button" id="sbc1" onClick={openModal}>Add Product</button>
                        <button type="button" id="sbc2"> <img src={Filters} alt="img" id='supImg' />Filters</button>
                        <button type="button" id="sbc3">Download all</button>
                    </div>


                </div>
                <table className="suppliers-table">
                    

                    {supplier.map((data, index) => {
                        return (<Supplier key={index} sud1={data.sud1} sud2={data.sud2} sud3={data.sud3} sud4={data.sud4} sud5={data.sud5} sud6={data.sud6} />)
                    })}


                </table>
                <div className='suppliers-bot'>
                    <button type="button" id='spbtn'>Previous</button>
                    <p>Page 1 0f 10</p>
                    <button type="button" id='spbtn'>Next</button>


                </div>

            </div>

        </div>
       
        </>
    )
}
export default Suppliers