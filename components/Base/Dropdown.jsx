const Dropdown = ({ children = '', list = [{ title: '', href: '#' }] }) => {
	return (
		<div className='flex items-center justify-center w-36 h-10 px-10 '>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				className='text-white font-ubuntu font-light px-4 py-2.5 text-center inline-flex items-center'
				type='button'
			>
				{children + ' '}
				<svg
					className='ml-2 w-4 h-4'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'
					></path>
				</svg>
			</button>

			<div
				id='dropdown'
				className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
				data-popper-placement='bottom'
			>
				<ul
					className='py-1 text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownDefault'
				>
					{list.map((data, index) => {
						<li key={index}>
							<a
								href={data.href}
								className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								{data.title}
							</a>
						</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
