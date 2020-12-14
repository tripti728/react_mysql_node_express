import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
//import { Button, Row, Form, Col, InputGroup } from "react-bootstrap";
import { Form, FormField, Box, Button, TextInput } from "grommet";

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Too short!")
    .max(20, "Too Long!")
    .required("Required"),

  email: yup.string().email("Invalid Email").required("Required"),
  locality: yup
    .string()
    .min(3, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),

  aadhar_id: yup
    .string()
    .required("Aadhar ID is required")
    .matches(
      "^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$",
      "Must have 12 digits,not starting with 0 and 1,not contain any alphabet and special character,white spaces after 4 digits"
    ),
  phone_number: yup
    .string()
    .min(10)
    .max(10)
    .required("Phone number is required")
    .matches("[0-9]{10}", "must contain 10 digits,"),

  terms: yup.bool().required("Agree terms & conditions"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match"),
    }),
});

const FormExample1 = () => {
  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{}}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <FormField
              name="fullName"
              htmlfor="text-input-id"
              label=" Full Name"
            >
              <TextInput
                id="text-input-id"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" />
            </Box>
          </Form>
        )}
        ;
      </Formik>
    </div>
  );
};
export default FormExample1;
// {
//   /* <div className="container"> */
// }
// <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{}}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <div className="heading">
//             <h1>Let's Signup Now!</h1>
//           </div>
//           <Form.Group as={Col} md="5" controlId="validationFormik101">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Full Name"
//               name="fullName"
//               value={values.fullName}
//               onChange={handleChange}
//               isInvalid={!!errors.fullName}
//             />
//             <Form.Control.Feedback type="invalid" tooltip>
//               {errors.fullName}
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="5" controlId="validationFormikUsername2">
//             <Form.Label>Email ID</Form.Label>
//             <InputGroup>
//               <InputGroup.Prepend>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//               </InputGroup.Prepend>
//               <Form.Control
//                 type="email"
//                 placeholder="name@gmail.com"
//                 aria-describedby="inputGroupPrepend"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 isInvalid={!!errors.email}
//               />
//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.email}
//               </Form.Control.Feedback>
//             </InputGroup>
//           </Form.Group>
//           <Form.Group as={Col} md="5" controlId="validationFormik103">
//             <Form.Label>Locality</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Locality"
//               name="locality"
//               value={values.locality}
//               onChange={handleChange}
//               isInvalid={!!errors.locality}
//             />
//             <Form.Control.Feedback type="invalid" tooltip>
//               {errors.locality}
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="5" controlId="validationFormik105">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid" tooltip>
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="5" controlId="validationFormik105">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Confirm Password"
//               name="confirmPassword"
//               value={values.confirmPassword}
//               onChange={handleChange}
//               isInvalid={!!errors.confirmPassword}
//             />
//             <Form.Control.Feedback type="invalid" tooltip>
//               {errors.confirmPassword}
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="5" controlId="validationFormik105">
//             <Form.Label>Aadhaar Id</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Aadhar ID"
//               name="aadhar_id"
//               value={values.aadhar_id}
//               onChange={handleChange}
//               isInvalid={!!errors.aadhar_id}
//             />
//             <Form.Control.Feedback type="invalid" tooltip>
//               {errors.aadhar_id}
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group>
//             <Form.Group as={Col} md="5" controlId="validationFormik105">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 placeholder="Phone Number"
//                 name="phone_number"
//                 value={values.phone_number}
//                 onChange={handleChange}
//                 isInvalid={!!errors.phone_number}
//               />
//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.phone_number}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Group>

//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik106"
//               //feedbackTooltip
//             />
//           </Form.Group>
//           <Button type="submit">Submit</Button>
//         </Form>
//       )}
//     </Formik>
//   </div>
//   );
// };
//
