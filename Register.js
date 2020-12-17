import React, { useState } from "react";
import {
  Heading,
  Box,
  TextInput,
  FormField,
  Form,
  Text,
  Button,
  MaskedInput,
} from "grommet";
import {
  User,
  View,
  Hide,
  MailOption,
  Directions,
  Lock,
  Phone,
} from "grommet-icons";
import SignUp from "../http-common";
import AddnewsServices from "../services/AddnewsServices";
import RegisterDataServices from "../services/RegisterServices";
export const Register = () => {
  //let history = useHistory();
  const [reveal, setReveal] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    locality: "",
    aadhar: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const SubmitData = async (event) => {
    event.preventDefault();
    let result = {
      fullname: value.fullname,
      email: value.email,
      locality: value.locality,
      aadhar: value.aadhar,
      phone: value.phone,
      password: value.password,
    };
    alert(result);

    RegisterDataServices.create(result)
      .then((response) => {
        setValue(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // let message = await Register();
    // console.log(message);
    // setMessage(message);
  };

  const validation = () => {
    const { password, confirmpassword } = value;
    if (password === confirmpassword) {
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
          onSubmit={SubmitData}
        >
          <Box overflow="auto">
            <Box direction="row-responsive">
              <Box margin={("right", "2vw")} direction="column">
                <FormField label="Full Name" name="fullname" required>
                  <TextInput icon={<User />} name="fullname" type="text" />
                </FormField>
                <FormField label="Email" name="email" required>
                  <MaskedInput
                    name="email"
                    icon={<MailOption />}
                    type="email"
                    pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[com]{3}"
                    mask={[
                      {
                        regexp: /^[\w\-_.]+$/,
                        placeholder: "example",
                      },
                      { fixed: "@" },
                      {
                        regexp: /^[\w]+$/,
                        placeholder: "my",
                      },
                      { fixed: "." },
                      {
                        regexp: /^[\w]+$/,
                        placeholder: "com",
                      },
                    ]}
                  ></MaskedInput>
                </FormField>
                <FormField label="Locality" name="locality" required>
                  <TextInput
                    name="locality"
                    icon={<Directions />}
                    type="text"
                  />
                </FormField>
                <Box direction="row">
                  <FormField label="Aadhar ID" name="aadhar" required>
                    <MaskedInput
                      name="aadhar"
                      pattern="[1-9]{1,4}[ ]{1}[0-9]{1,4}[ ]{1}[0-9]{1,4}"
                      mask={[
                        {
                          length: 4,
                          regexp: /^[1-9]{1,4}$/,
                          placeholder: "xxxx",
                        },
                        { fixed: " " },

                        {
                          length: 4,
                          regexp: /^[0-9]{1,4}$/,
                          placeholder: "xxxx",
                        },
                        { fixed: " " },
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
              <Box margin={("left", "2vw")} direction="column">
                <FormField name="phone" label="Phone Number" required>
                  <MaskedInput
                    name="phone"
                    icon={<Phone />}
                    pattern="[6-9]{1,5}[-]{1}[0-9]{1,5}"
                    mask={[
                      {
                        length: 5,
                        regexp: /^[6-9]{1,5}$/,
                        placeholder: "xxxxx",
                      },

                      { fixed: "-" },
                      {
                        length: 5,
                        regexp: /^[0-9]{1,5}$/,
                        placeholder: "xxxxx",
                      },
                    ]}
                  />
                </FormField>

                <FormField
                  label="Password"
                  name="password"
                  required
                  validate={validation}
                >
                  <TextInput name="password" icon={<Lock />} type="password" />
                </FormField>
                <Box direction="row">
                  <FormField
                    label=" Confirm Password"
                    name="confirmpassword"
                    required
                    validate={validation}
                  >
                    <TextInput
                      plain
                      type={reveal ? "text" : "password"}
                      name="confirmpassword"
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
            </Box>
            <Box direction="row" justify="center" margin={{ top: "medium" }}>
              <Button
                type="submit"
                label="Signup"
                primary
                margin={("right", "1vw")}
              />
              <Button label="Login" primary margin={("right", "1vw")} />
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
