import { userInfo } from "../interfaces/global";
import { useState, useEffect } from "react";
import HorizontalLinearStepper from "../components/HorizontalStepper";
import { StepperStyle } from "../utils/styling";
import { saveData } from "../utils/helper";
import { Typography } from "@mui/material";

function Home() {
  const [user, setUser] = useState<userInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  } as userInfo);
  const [step, setStep] = useState(0);
  const [formValidated, setFormValidated] = useState(false);

  //on page load check localStorage for saved data
  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    const step = localStorage.getItem("step");
    if (step) {
      setStep(parseInt(step));
    }
    const validation = localStorage.getItem("validation");
    if (validation) {
      setFormValidated(JSON.parse(validation));
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
      saveData("validation", "false");
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
      <Typography textAlign="center" variant="h1" gutterBottom>
        PokeForm!
      </Typography>
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
    </div>
  );
}

export default Home;
