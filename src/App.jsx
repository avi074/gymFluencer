import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import groupedImages from "./utils/images"
function App() {
  console.log(groupedImages)
  return (
    <>
      <Header />
      <div className='flex-grow overflow-x-hidden'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
