import Link from "next/link"
export const Button_component = ({nameButton}:{nameButton:string}) => {
  return (
	  <div>
		  <button type="submit">
			  <a>
				  <Link href="#">{ nameButton }</Link>
			  </a>
		  </button>
	</div>
  )
}
