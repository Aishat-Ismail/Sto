
import biglogo from '../../assets/biglogo.png'
import './Login.css'
import logo from '../../assets/logo.png'
import google from '../../assets/google.png'


const Login = () => {
    

    return (

        <>
            <div className="login">
                <div className="loginLeft">
                    <div id="loginImg">
                        <img src={biglogo} alt="big" id='biglogo' />

                    </div>

                </div>
                <div className="loginRight">
                    <div className='rightCont'>
                        <div className='rightTop'>
                            <div className='rightTopUp'>
                                <div id='rightTopImg'>
                                    <img src={logo} alt="topImg" id='rightTopLogo' />

                                </div>
                            </div>

                            <div className='rightTopDown'>

                                <p id='logon'>Log in to your account</p>
                                <p id='welcome'>Welcome back! please enter your details</p>




                            </div>
                        </div>

                        <div className='rightBot'>
                            <form action="">


                                <label htmlFor="" id='lab'>Email</label>
                                <input type="email" name="email" id="mail" placeholder='Enter your email' />


                                <label htmlFor="">Password</label>
                                <input type="password" name="password" id="password" placeholder='********' />




                                <div className='spanCont'>
                                    <div id='spanMain'>
                                        <input type="checkbox" name="checkbox" id="checkbox" />
                                        <span id='remember'>Remember for 30days</span>
                                    </div>
                                    <p id='forgot'>Forgot password</p>
                                </div>

                                <button type="submit" id='sign' ><a href="home" id='signa'>Sign In</a></button>
                                <button type="button" id='goog'><img src={google} alt="goog" id='google' />Sign In with Google</button>


                            </form>





                        </div>
                        <div id='bottomBot'>
                            <p id='dont'>
                                Don't have account?<span id='bluuue'>Sign Up</span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Login