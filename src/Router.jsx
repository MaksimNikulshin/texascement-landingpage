//Import components
import { Outlet } from "react-router-dom";
import Footer from "@components/App/Footer";
import Header from "@components/App/Header";

export default function Router() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
