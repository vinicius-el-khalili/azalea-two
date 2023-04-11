import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
        
        <Head>
        <title>Vinicius El Khalili</title>
        <meta name="description" content="My portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        {children}
        
        </>
    );
}
 
export default Layout;