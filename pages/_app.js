import Layout from '../components/layout';
import NavBar from '../components/NavBar';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
