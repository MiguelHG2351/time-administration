import Layout from 'components/Layout/layout'
import Sidenav from 'components/sidenav'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Sidenav />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp