import { useState } from 'react';
export let Value : any;
const Username_field = ({ field_component, Text }: { field_component: string; Text:string}) => {
	
	const [field_fullfill_input] = useState(field_component)
	const [valueInput, setInput] = useState("")
	
	const handleChange = (e: any) => {
		Value = e.target.value;
		if (typeof Value === 'string') {
			if (Value) {
				setInput(Value)
			}
		}
	}
	return (
		<div>
			<label htmlFor={field_component} className='text-white font-[lato] font-[400] text-[16px] leading-[151%] regular  align-left '> {field_component}</label>
			<input type={Text}  id={field_component} placeholder={field_fullfill_input} value={valueInput} onChange={handleChange} />
	    </div>)
}
export default Username_field