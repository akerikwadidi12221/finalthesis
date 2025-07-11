import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({children}:{children:ReactNode}){
  return(
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}
