import type { NextPage } from 'next'
import Head from 'next/head'
import Username_field from '../../Reusable_component/Username_field';
import { Button_component } from '../../Reusable_component/Button_component';
import { Btn_reusable } from '../../Reusable_component/Btn_reusable';
import Login_And_Signup from '../../Reusable_component/Login_And_Signup';
import { faAppleAlt, faG } from '@fortawesome/free-solid-svg-icons';

const Register: NextPage = () => {
  return (
    <div className='bg-[#000000] h-screen'>
      <div className='bg-[#E5E5E5]/[0.1] h-screen'>
        <Head>
          <title>Register</title>
        </Head>
      <header>
        <p className='text-white font-[lato] font-[320] text-[32px] leading-[38%] text-left align-top pt-10'>Register</p>
        </header>
        <section>
          <form action="">
            <Username_field Text="text" field_component='text' />
            <Username_field Text="password" field_component='password'/>
            <Button_component nameButton='Login' />
            <Btn_reusable />
            <Login_And_Signup Icon={faAppleAlt} namebtn="Register with Apple" />
            <Login_And_Signup Icon={faG } namebtn="Register with Google" />
          </form>
        </section>
      
      <footer>Already have an account? Login</footer>
      </div>
    </div>
  )
}

export default Register