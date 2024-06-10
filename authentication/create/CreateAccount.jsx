import biglogo from '../../assets/biglogo.png'
import './CreateAccount.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import google from '../../assets/google.png'


const Create = ()=>{

    return(

        <>
       <div className="create">
                <div className="createLeft">
                    <div id="createImg">
                        <img src={biglogo} alt="big" id='biglogo' />

                    </div>

                </div>
                <div className="createRight">
                    <div className='createRightCont'>
                        <div className='createRightTop'>
                            <div className='createRightTopUp'>
                                <div id='createRightTopImg'>
                                    <img src={logo} alt="topImg" id='rightTopLogo' />

                                </div>
                            </div>

                            <div className='createRightTopDown'>

                                <p id='acco'>Create an account </p>
                                <p id='start'>Start your 30-days free trial</p>




                            </div>
                        </div>

                        <div className='createRightBot'>
                            <form action="">

                                <label htmlFor="">Name*</label>
                                <input type="text" name="name" id="name" placeholder='Enter your name' />


                                <label htmlFor="">Email*</label>
                                <input type="email" name="email" id="email" placeholder='Enter your email' />


                                <label htmlFor="">Password*</label>
                                <input type="password" name="password" id="passwords" placeholder='Create a password' />
                                <p id='must'>Must be at least 8 characters</p>


                                <button type="submit" id='get'> <a href="home" id='geta'>Get started</a></button>
                                <button type="button" id='googl'><img src={google} alt="goog" id='google' />Sign In with Google</button>


                            </form>





                        </div>
                        <div id='createBottomBot'>
                            <p id='already'>
                                Already have an account?<span id='bluee'>Log In</span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Create