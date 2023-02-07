import "./App.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
