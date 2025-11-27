// app/(root-layout)/layout.js
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>
      {/* <Navbar type="home" /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}