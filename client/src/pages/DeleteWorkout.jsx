import { Trash2 } from "react-feather"
import axios from 'axios'
import { useAuthContext } from "../../hooks/useAuthContext"
const DeleteWorkout = ({workout}) => {
    const {user} = useAuthContext();
    const deleteWorkout = async() =>{
        if(!user) {
            return
        }

        try{
            await axios.delete(`${import.meta.env.VITE_API}/${workout._id}`, {
							headers: {
								Authorization: `Bearer ${user.token}`,
							},
						});
        }catch(err){
            console.log(err.message);
        }
    }

  return (
		<div className='flex items-center justify-center absolute top-5 right-7 cursor-pointer p-[10px] rounded-full hover:bg-[#ededed] transition-all'>
			<Trash2 size={25} onClick={deleteWorkout} />
		</div>
	);
}
export default DeleteWorkout