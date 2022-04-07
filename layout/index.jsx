import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className='flex-col'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
