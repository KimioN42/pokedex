import { Pokemon, userInfo } from "../interfaces/global";
import { useState, useEffect } from "react";
import { saveData } from "../utils/helper";
import HorizontalLinearStepper from "../components/MUI/MUI-Stepper";
import { StepperStyle } from "../utils/styling";
import UserForm from "../components/UserForm";

function Home() {
  //user state
  const [user, setUser] = useState<userInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  } as userInfo);

  //pokemon state
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  //on page load, check if there is a user and pokemon saved on localStorage
  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    const pokemonData = localStorage.getItem("pokemon");
    if (pokemonData) {
      setPokemon(JSON.parse(pokemonData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    // console.log("Changing event: ", e.target.name, e.target.value);
    // console.log("Updated User: ", updatedUser);
    setUser(updatedUser);
    saveData("userInfo", JSON.stringify(updatedUser));
  };

  const resetForm = () => {
    localStorage.clear();
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    } as userInfo);
  };

  //checks if there is a user saved on localStorage (which only happens if you have validated the form)
  const handleValidation = () => {
    const updatedUser = localStorage.getItem("userInfo");
    if (updatedUser) {
      setUser(JSON.parse(updatedUser));
      return true;
    } else {
      return false;
    }
  };

  return (
    <div style={StepperStyle.stepper}>
      <HorizontalLinearStepper
        userData={user}
        setUserData={setUser}
        handleChange={handleChange}
        checkValidation={handleValidation}
        resetForm={resetForm}
      />
    </div>
  );
}

export default Home;
