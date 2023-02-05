import React from "react";

import { formStyle } from "../utils/styling";
import { saveData } from "../utils/helper";
import { userInfo } from "../interfaces/global";
import { FormProps } from "../interfaces/global";
import { Box, Button, FormLabel, Input, Typography } from "@mui/material";
import Form from "antd/es/form/Form";

const UserForm = ({ userData, handleChange, resetForm }: FormProps) => {
  const phoneRGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const handleValidation = (event: any) => {
    event.preventDefault();
    if (!phoneRGEX.test(userData.phoneNumber)) {
      alert("Invalid Phone Number");
    } else {
      const userInfo: userInfo = {
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        phoneNumber: event.target[3].value,
        address: event.target[4].value,
      };
      saveData("userInfo", JSON.stringify(userInfo));
      console.log("User Info: ", userInfo);
    }
  };

  return (
    <div style={formStyle.form}>
      <Form>
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
          <Button onClick={resetForm}>Clear Form</Button>
          <Button type="submit" onClick={handleValidation}>
            Validate
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default UserForm;
