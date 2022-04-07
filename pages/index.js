import Footer from '../components/Combine/Footer';
import Navbars from '../components/Combine/Navbars';
import Layout from '../layout';

export default function Home() {
	return (
		<Layout>
			<Navbars />
			<h1 className='font-bold text-xl'>Hello world</h1>
			<Footer />
		</Layout>
	);
}
