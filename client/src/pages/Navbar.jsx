import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PlusSquare, LogOut } from "react-feather";
import useWindowSize from '../../hooks/useWindowSize'
const Navbar = () => {
	const {width} = useWindowSize();
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const handleLogout = () => {
		logout();
	};

	return (
		<header
			className=' w-full h-[100px] bg-white flex items-center'
			style={{ justifyContent: width<=550 ? "center" : "space-between" }}
		>
			<Link to={"/"}>
				<h1 className='font-bold text-[30px] mx-7 text-[#313232] lg:ml-24 md:text-4xl md:mx-10 max-sm:text-[24px] flex items-center'
				style={{fontSize: !user && "30px"}}>
					Workout Buddy{" "}
					<img className='w-10 ml-1 md:w-16 md:ml-3' src='assets/dumbell.png' />
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
						className='text-lg font-medium text-green-600 border-2 border-green-600 px-4 py-1 mr-5 rounded-md transition-all hover:text-white hover:bg-green-600 max-sm:hidden'
						onClick={handleLogout}
					>
						Log out
					</button>
					<LogOut
						size={40}
						strokeWidth={1.5}
						onClick={handleLogout}
						className='mr-5 text-green-600 sm:hidden'
					/>
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
