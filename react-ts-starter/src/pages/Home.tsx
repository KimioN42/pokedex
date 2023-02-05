import { Pokemon, userInfo } from "../interfaces/global";
import { useState, useEffect } from "react";
import HorizontalLinearStepper from "../components/MUI/MUI-Stepper";
import { StepperStyle } from "../utils/styling";
import { ToastContainer } from "react-toastify";

function Home() {
  const [user, setUser] = useState<userInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  } as userInfo);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [step, setStep] = useState(0);
  const [formValidated, setFormValidated] = useState(false);

  //on page load check localStorage for saved data
  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    const pokemonData = localStorage.getItem("pokemon");
    if (pokemonData) {
      setPokemon(JSON.parse(pokemonData));
    }
    const step = localStorage.getItem("step");
    if (step) {
      setStep(parseInt(step));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    // console.log("Changing event: ", e.target.name, e.target.value);
    // console.log("Updated User: ", updatedUser);
    setUser(updatedUser);
  };

  const resetForm = () => {
    if (formValidated === true) {
      setFormValidated(false);
    } else {
      localStorage.clear();
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      } as userInfo);
    }
  };

  return (
    <div>
      <div style={StepperStyle.stepper}>
        <HorizontalLinearStepper
          activeStep={step}
          setActiveStep={setStep}
          userData={user}
          setUserData={setUser}
          handleChange={handleChange}
          isValidForm={formValidated}
          setValidation={setFormValidated}
          resetForm={resetForm}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
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

export default Home;
