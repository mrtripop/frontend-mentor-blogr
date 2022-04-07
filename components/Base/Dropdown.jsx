const Dropdown = ({
	children = '',
	list = [{ title: 'Dashboard', href: '/connect' }],
}) => {
	return (
		<div className='flex items-center justify-center w-36 h-10 px-10 '>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				class='text-white font-ubuntu font-light px-4 py-2.5 text-center inline-flex items-center'
				type='button'
			>
				{children + ' '}
				<svg
					class='ml-2 w-4 h-4'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M19 9l-7 7-7-7'
					></path>
				</svg>
			</button>

			<div
				id='dropdown'
				class='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
				data-popper-placement='bottom'
			>
				<ul
					class='py-1 text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownDefault'
				>
					{list.map((data, index) => {
						<li key={index}>
							<a
								href={data.href}
								class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
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
