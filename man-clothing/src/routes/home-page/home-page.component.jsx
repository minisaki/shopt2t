import Footer from "../../components/layout/footer/footer.component";
import Header from "../../components/layout/header/header.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './home-page.styles.scss';


const HomePage = () => {
  return (
    <Fragment >
      <ToastContainer theme="colored" />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  )
}

export default HomePage;