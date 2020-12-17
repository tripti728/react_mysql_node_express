import React, { useState, setState, history } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  TextInput,
  TextArea,
} from "grommet";
import { grommet } from "grommet/themes";
import http from "../http-common";
import AddNewsDataService from "../services/AddNewsDataService";
import { Editor } from "@tinymce/tinymce-react";
const AddNews = (props) => {
  //let history = useHistory();
  const [values, setValue] = useState({
    newstitle: "",
    news: "",
    locality: "",
    //image: "",
    //video: "",
  });

  // const ChangeData = (event) => {
  //   console.log("Event call .....", event.target)
  //   const { name, value } = event.target;
  //   setValue({ ...values, [name]: value });
  // };
  const ChangeData = (content) => {
    console.log("Event call .....", content);
    // const { name, value } = event.target;
    setValue({ ...values, news: content });
  };
  const SubmitData = (event) => {
    event.preventDefault();
    let result = {
      newstitle: values.newstitle,
      news: values.news,
      locality: values.locality,
    };

    const handleOnChange = (event, editor) => {
      const data = editor.getData();
      setValue((values.news = data));
    };

    alert(JSON.stringify(result));
    console.log(props);
    console.log(result);

    AddNewsDataService.create(result)
      .then((response) => {
        setValue(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box align="center" pad="large">
      <Form onSubmit={SubmitData}>
        <FormField label="NewsTitle">
          <TextInput
            // id="text-input"
            type="text"
            name="newstitle"
            placeholder="NewsTitle"
            value={values.newstitle}
            onChange={ChangeData}
          />
        </FormField>

        <Box
          width="large"
          height="medium"
          border={{ color: "brand", size: "medium" }}
        >
          <Editor
            name="news"
            value={values.news}
            testfunc={ChangeData}
            editor={Editor}
          ></Editor>
          {/* <TextArea
            type="text"
            name="news"
            placeholder="Write something.."
            value={values.news}
            onChange={ChangeData}
            fill
          /> */}
        </Box>
        <FormField label="Locality">
          <TextInput
            //   id="text-input"
            type="text"
            name="locality"
            placeholder="Locality"
            value={values.locality}
            onChange={ChangeData}
          />
        </FormField>
        {/* <FormField label="Image" htmlFor="file">
        <TextInput id="text-input" name="image" placeholder="Browse Image" />
      </FormField> */}
        <Button
          type="submit"
          label="Submit"
          primary
          margin={("right", "1vw")}
        />
      </Form>
    </Box>
  );
};

// <Form
//   value={value}
//   onChange={(nextValue) => setValue(nextValue)}
//   onSubmit={SubmitData}
// >
//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label>News Title :</Label>
//         <Input
//           type="text"
//           name="newstitle"
//           placeholder="give your news title here.."
//         />
//       </FormGroup>
//     </Col>
//   </Row>
//   <FormGroup>
//     <Label>Content:</Label>
//     <br></br>
//     <MyEditor></MyEditor>
//   </FormGroup>

//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label>Locality:</Label>
//         <Input type="text" name="locality" placeholder="locality" />
//       </FormGroup>
//     </Col>
//   </Row>
//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label>Upload Image:</Label>
//         <br></br>
//         <input type="file" name="image" />
//       </FormGroup>
//     </Col>
//     <br></br>
//     <Col md={6}>
//       <FormGroup>
//         <Label>Upload Video:</Label>
//         <br></br>
//         <input type="file" name="video" />
//       </FormGroup>
//     </Col>
//   </Row>
//   <FormGroup>
//     <Button type="submit" primary label="Submit" color="primary">
//       submit
//     </Button>
//     <Button type="reset" label="Reset" color="primary">
//       Reset
//     </Button>
//   </FormGroup>
// </Form>
//   );
// };
export default AddNews;
