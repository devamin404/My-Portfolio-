import { Header, About, Projects, Contact } from "./Data";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        pauseOnHover
        theme="dark"
      />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
