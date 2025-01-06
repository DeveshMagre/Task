import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white '>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex-shrink-0 flex items-center'>
						<Link
							to='/'
							className='flex items-center space-x-2'
						>
							<img
								className=''
								src={Logo}
								alt='Meal Finder'
							/>
						</Link>
					</div>
					<div className='hidden md:flex md:items-center md:space-x-8'>
						<Link
							to='/search'
							className='text-gray-600 hover:text-gray-900 transition-colors'
						>
							Search
						</Link>
						<Link
							to='/how-it-works'
							className='text-gray-600 hover:text-gray-900 transition-colors'
						>
							How it works?
						</Link>
						<Link
							to='/host'
							className='text-gray-600 hover:text-gray-900 transition-colors'
						>
							Host a Meal
						</Link>
						<Link
							to='/signin'
							className='text-blue-300 hover:text-blue-700 transition-colors'
						>
							Sign in
						</Link>
						<Link
							to='/signup'
							className='bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded-md transition-colors'
						>
							Sign up
						</Link>
					</div>
					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{isOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
				{isOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<Link
								to='/search'
								className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors'
							>
								Search
							</Link>
							<Link
								to='/how-it-works'
								className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors'
							>
								How it works?
							</Link>
							<Link
								to='/host'
								className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors'
							>
								Host a Meal
							</Link>
							<Link
								to='/signin'
								className='block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-blue-700 hover:bg-gray-50 transition-colors'
							>
								Sign in
							</Link>
							<Link
								to='/signup'
								className='block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-lime-400 hover:bg-lime-500  transition-colors'
							>
								Sign up
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
