import React from "react";

import { formStyle } from "../utils/styling";
import { saveData } from "../utils/helper";
import { userInfo } from "../interfaces/global";
import { FormProps } from "../interfaces/global";
import { Box, Button, FormLabel, Input } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserForm = ({
  userData,
  handleChange,
  resetForm,
  isValidForm,
  setValidation,
}: FormProps) => {
  const phoneRGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const handleValidation = (event: any) => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        toast.warn("You have to fill out all the fields first :)", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        inputs[i].focus();
        return;
      }
    }

    if (!phoneRGEX.test(userData.phoneNumber)) {
      toast.error("Phone number is not in the correct format", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const userInfo: userInfo = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        email: inputs[2].value,
        phoneNumber: inputs[3].value,
        address: inputs[4].value,
      };
      saveData("userInfo", JSON.stringify(userInfo));
      saveData("validation", "true");
      console.log("User Info: ", userInfo);
      setValidation(true);

      toast.success(
        "All good, you're allowed to continue and select your favorite Pokemon!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <div style={formStyle.form}>
      <form>
        <FormLabel>
          First Name
          <Input
            name="firstName"
            style={formStyle.formInput}
            type="text"
            value={userData.firstName}
            onChange={(event: any) => handleChange(event)}
            placeholder="First Name"
            required
            disabled={isValidForm}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Last Name:
          <Input
            name="lastName"
            style={formStyle.formInput}
            type="text"
            value={userData.lastName}
            onChange={(event: any) => handleChange(event)}
            placeholder="Last Name"
            required
            disabled={isValidForm}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Email:
          <Input
            name="email"
            style={formStyle.formInput}
            type="email"
            value={userData.email}
            onChange={(event: any) => handleChange(event)}
            placeholder="johndoe@email.com"
            required={true}
            disabled={isValidForm}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Phone Number
          <Input
            name="phoneNumber"
            style={formStyle.formInput}
            type="tel"
            value={userData.phoneNumber}
            onChange={(event: any) => handleChange(event)}
            placeholder="(XXX) XXX-XXXX"
            required
            disabled={isValidForm}
          />
        </FormLabel>
        <br />
        <FormLabel>
          Address <br />
          <Input
            name="address"
            type="address"
            value={userData.address}
            onChange={(e: any) => handleChange(e)}
            placeholder="Address"
            required={true}
            fullWidth
            disabled={isValidForm}
          />
        </FormLabel>
        <br />
        <Box
          sx={{
            color: "red",
            display: "flex",
            marginTop: "1.5em",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={resetForm}>
            {isValidForm ? "Edit" : "Clear Form"}
          </Button>
          <Button onClick={handleValidation}>Validate</Button>
        </Box>
      </form>
    </div>
  );
};

export default UserForm;
