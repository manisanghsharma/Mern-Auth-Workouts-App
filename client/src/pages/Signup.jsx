import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const {signup, error, loading} = useSignup()

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(email, password);
	};
	return (
		<div className='flex justify-center items-center mt-[100px]'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className='p-5 rounded-lg bg-white flex flex-col gap-4 items-start'
			>
				<h2 className='text-2xl font-bold'>Sign Up</h2>
				<label htmlFor='email' className='font-medium text-lg'>
					Email:
				</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
					id='email'
					className='outline-none p-2 border-[2px] border-gray-200 rounded-md w-[300px] focus:border-2 focus:border-black'
				/>
				<label htmlFor='pass' className='font-medium text-lg'>
					Password:
				</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					id='pass'
					className='outline-none rounded-md border-2 border-gray-200 p-2 w-[300px] focus:border-2 focus:border-black'
				/>
				<div>
					<button
						disabled={loading}
						type='submit'
						className='rounded-md mt-2 px-3 py-2 text-white bg-green-600 hover:bg-green-700 transition-all'
					>
						Sign Up
					</button>
					<Link
						to='/login'
						className='ml-4 text-[17px] font-medium hover:text-green-600 transition-all'
					>
						Already a user? Login
					</Link>
				</div>
				{error && (
					<div className='w-full text-center py-2 border-2 border-red-500 rounded-lg text-red-700 bg-red-100'>
						{error}
					</div>
				)}
			</form>
		</div>
	);
};
export default Signup;
