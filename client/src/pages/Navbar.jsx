import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PlusSquare } from "react-feather";

const Navbar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const handleLogout = () => {
		logout();
	};

	return (
		<header className=' w-full h-[100px] bg-white flex items-center justify-center sm:justify-between'>
			<Link to={"/"}>
				<h1 className='font-bold text-[30px] mx-7 text-[#313232] text-center lg:ml-24 md:text-4xl md:mx-10 flex items-center '>
					Workout Buddy <img className="w-14 ml-3" src="assets/dumbell.png" alt="" />
				</h1>
			</Link>
			{user && (
				<div className='flex  items-center'>
					<Link to='/add'>
						<PlusSquare
							size={45}
							strokeWidth={1.2}
							className='cursor-pointer text-green-600 mr-2 md:hidden'
						/>
					</Link>
					<span className='text-xl mr-5 max-mdl:hidden'>{user.email}</span>
					<button
						className='text-lg font-medium text-green-600 border-2 border-green-600 px-4 py-1 mr-5 rounded-md transition-all hover:text-white hover:bg-green-600'
						onClick={handleLogout}
					>
						Log out
					</button>
				</div>
			)}
			{!user && (
				<div>
					<Link
						to={"/login"}
						className='mr-10 text-lg hover:text-[#23A880] transition-all font-medium max-sm:hidden'
					>
						Login
					</Link>
					<Link
						to={"/signup"}
						className='mr-10 text-lg hover:text-[#23A880] transition-all font-medium max-sm:hidden'
					>
						Signup
					</Link>
				</div>
			)}
		</header>
	);
};
export default Navbar;
