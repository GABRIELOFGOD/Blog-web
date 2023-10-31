import { Outlet } from 'react-router-dom'

// ============= IMPORTING COMPONENTS ================ //
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className=' px-2 md:px-8 lg:px-12 min-h-[85vh] text-primary'>
        <Outlet />
      </div>
      <Footer />
    </div>  
  )
}

export default Layout