import Head from 'next/head';
import styles from 'style/';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | Administra tus tareas</title>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.ico"
                    type="image/x-icon"
                />
                <meta name="og:title" content="Home | Administra tus tareas" />
                <meta
                    name="og:url"
                    content="https://timeadministration.vercel.app"
                />
                <meta
                    name="og:image"
                    content="httos://timeadministration.vercel.app/images/logo.png"
                />
                <meta name="og:type" content="article" />
                <meta name="og:description" content="Holaaaaa :D" />
            </Head>
            <p>first steps :D</p>
            <style jsx>{ styles }</style>
        </>
    );
}
