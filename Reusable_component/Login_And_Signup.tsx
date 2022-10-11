import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Value } from './Username_field';

const Login_And_Signup = ({ namebtn, Icon }: { namebtn: string, Icon: any }) => {
	const HandleSubmit = async (e : any) => {
		e.preventDefault()
		const response = await fetch('',
			{
				method: "POST",
				body: JSON.stringify({Value}),
				headers: {
					'Content-Type' : 'application/json'
				},
			}
		)
		const data = await response.json()
		console.log(data);
	}
  return (
	  <div>
		  <FontAwesomeIcon icon={Icon} />
		  <button onClick={HandleSubmit} type="submit">
			  <a>
				  <Link href="#">{namebtn}</Link>
			  </a>
		  </button>
	  </div>
  )
}

export default Login_And_Signup