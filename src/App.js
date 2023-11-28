import "./App.css";
import Header from "./components/Header";
import BurgerModal from "./components/BurgerModal";
import Main from "./components/Main";
import About from "./components/About";
import Electricity from "./components/Electricity";
import Cases from "./components/Cases";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BurgerModal />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
