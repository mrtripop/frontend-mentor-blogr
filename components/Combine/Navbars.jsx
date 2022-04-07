import Image from 'next/image';
import Button from '../Base/Button';
import Dropdown from '../Base/Dropdown';

const Navbars = () => {
	return (
		<div className='flex-col w-screen h-[700px] rounded-bl-[6rem] py-20 px-44 bg-gradient-to-r from-[#FF8F70] to-[#FF3D54] '>
			<nav class='container flex justify-between'>
				<div className=' flex flex-row'>
					<div className='w-[101] h-[40]'>
						<Image src='/images/logo.svg' width={101} height={40} />
					</div>
					<div className='mx-10 flex flex-row'>
						<Dropdown>Product</Dropdown>
						<Dropdown>Company</Dropdown>
						<Dropdown>Connect</Dropdown>
					</div>
				</div>

				<div className='flex flex-row'>
					<Button className='btn-transperant'>Login</Button>
					<Button className='btn-background'>Sign Up</Button>
				</div>
			</nav>
			<div className='flex justify-center pt-24'>
				<h1 className='text-white font-overpass font-semibold text-6xl'>
					A modern publishing platform
				</h1>
			</div>
			<div className='flex font-overpass justify-center pt-8'>
				<p className='text-xl text-gray-200'>
					Grow your audience and build you online brand
				</p>
			</div>
			<div className='flex flex-row justify-center pt-8 gap-4'>
				<Button className='btn-background'>start for free</Button>
				<Button className='btn-outlined'>Learn More</Button>
			</div>
		</div>
	);
};

export default Navbars;
