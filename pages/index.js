import Footer from '../components/Combine/Footer';
import Navbars from '../components/Combine/Navbars';
import Layout from '../layout';

export default function Home() {
	return (
		<Layout>
			<Navbars />
			<div className='flex flex-col h-screen my-10 items-center justify-center'>
				<h1 className='font-bold text-9xl'>Hello Content</h1>
			</div>
			<Footer />
		</Layout>
	);
}
