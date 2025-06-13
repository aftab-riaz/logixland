import Header from "../component/layout/Header.jsx";
import {Footer} from "../component/layout/Footer.jsx";
import {Outlet} from "react-router";


const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>


        </>
    )
}
export default MainLayout;