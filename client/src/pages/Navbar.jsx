import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const handleLogout = () => {
		logout();
	};

	return (
		<header className=' w-full h-[100px] bg-white flex items-center justify-between'>
			<Link to={"/"}>
				<h1 className='font-bold text-4xl mx-24 text-[#313232]'>
					Workout Buddy
				</h1>
			</Link>
			{user && (
				<div>
					<span className='text-xl mr-5 '>{user.email}</span>
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
						className='mr-5 text-lg hover:text-[#23A880] transition-all font-medium'
					>
						Login
					</Link>
					<Link
						to={"/signup"}
						className='mr-10 text-lg hover:text-[#23A880] transition-all font-medium'
					>
						Signup
					</Link>
				</div>
			)}
		</header>
	);
};
export default Navbar;
