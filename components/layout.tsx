import Footer from './footer'
import Navbar from './navbar'

function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
