import React, { useState } from "react";
import {
  FormField,
  TextInput,
  Box,
  Button,
  Form,
  Heading,
  MaskedInput,
  Text,
  Grommet,
  ResponsiveContext,
} from "grommet";
import { useHistory } from "react-router-dom";
import {
  User,
  MailOption,
  Lock,
  Directions,
  Phone,
  Hide,
  View,
} from "grommet-icons";

import { RegisterUser, getMsg } from "../call/UserCall";

// This example shows a way to perform validation across multiple fields.
export const SignUp = () => {
  let history = useHistory();
  const [reveal, setReveal] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState({
    Username: "",
    email: "",
    password: "",
    cpassword: "",
    city: "",
    mobile: "",
    aadhar: "",
  });
  const HandleData = async (event) => {
    event.preventDefault();

    let obj = {
      username: value.Username,
      email: value.email,
      password: value.password,
      city: value.city,
      mobile: value.mobile,
      aadhar: value.aadhar,
      permission: false,
      role: "reporter",
    };
    console.log(obj);

    let msg = await RegisterUser(obj);
    console.log(msg);
    setMessage(msg);
  };

  const checkPass = () => {
    const { password, cpassword } = value;
    if (password === cpassword) {
    } else {
      return " Not Matching password";
    }
  };

  return (
    <Box align="center" justify="between" height="100vh" overflow="auto">
      <Box margin={("top", "-1vh")} align="center" height="100vh">
        <Heading>SignUp</Heading>
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={HandleData}
        >
          <Box overflow="auto">
            <Box direction="row-responsive">
              <Box margin={("right", "2vw")} direction="column">
                <FormField label="Username" name="Username" required>
                  <TextInput icon={<User />} name="Username" type="text" />
                </FormField>
                <FormField label="Email" name="email" required>
                  <TextInput
                    name="email"
                    icon={<MailOption />}
                    type="email"
                    pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[com]{3}"
                    placeholder="abc@gmail.com"
                  />
                </FormField>
                <FormField
                  label="Password"
                  name="password"
                  required
                  validate={checkPass}
                >
                  <TextInput name="password" icon={<Lock />} type="password" />
                </FormField>
                <Box direction="row">
                  <FormField
                    label=" Confirm Password"
                    name="cpassword"
                    required
                    validate={checkPass}
                  >
                    {/* <TextInput name="cpassword" icon={< Lock/>} type="password" onKeyUp={checkPass}/> */}
                    <TextInput
                      plain
                      type={reveal ? "text" : "password"}
                      name="cpassword"
                      icon={<Lock />}
                    />
                  </FormField>
                  <Button
                    icon={
                      reveal ? <View size="medium" /> : <Hide size="medium" />
                    }
                    onClick={() => setReveal(!reveal)}
                  />
                </Box>
              </Box>
              <Box margin={("left", "2vw")} direction="column">
                <FormField label="City" name="city" required>
                  <TextInput icon={<Directions />} name="city" type="text" />
                </FormField>
                <FormField name="mobile" label="Mobile no" required>
                  <MaskedInput
                    name="mobile"
                    icon={<Phone />}
                    pattern="[0-9]{1,3}[-]{1}[0-9]{1,3}[-]{1}[0-9]{1,4}"
                    mask={[
                      {
                        length: 3,
                        regexp: /^[0-9]{1,3}$/,
                        placeholder: "xxx",
                      },

                      { fixed: "-" },
                      {
                        length: 3,
                        regexp: /^[0-9]{1,3}$/,
                        placeholder: "xxx",
                      },
                      { fixed: "-" },
                      {
                        length: 4,
                        regexp: /^[0-9]{1,4}$/,
                        placeholder: "xxxx",
                      },
                    ]}
                  />
                </FormField>

                <FormField label="Aadhar No" name="aadhar" required>
                  <MaskedInput
                    name="aadhar"
                    pattern="[0-9]{1,4}[-]{1}[0-9]{1,4}[-]{1}[0-9]{1,4}"
                    mask={[
                      {
                        length: 4,
                        regexp: /^[0-9]{1,4}$/,
                        placeholder: "xxxx",
                      },
                      { fixed: "-" },

                      {
                        length: 4,
                        regexp: /^[0-9]{1,4}$/,
                        placeholder: "xxxx",
                      },
                      { fixed: "-" },
                      {
                        length: 4,
                        regexp: /^[0-9]{1,4}$/,
                        placeholder: "xxxx",
                      },
                    ]}
                  ></MaskedInput>
                </FormField>
              </Box>
            </Box>
            <Box direction="row" justify="center" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Signup"
                primary
                margin={("right", "1vw")}
              />
              <Button
                label="Login"
                margin={("left", "1vw")}
                onClick={() => {
                  history.push("/Login");
                }}
              />
            </Box>
          </Box>
        </Form>
        {message && (
          <Box pad={{ horizontal: "medium" }}>
            <Text color="#00C781">{message}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
