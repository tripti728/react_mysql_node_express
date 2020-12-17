import React from "react";
 import { Editor } from "@tinymce/tinymce-react";
import { Button } from "grommet";

class AddEditor extends React.Component {

   handleEditorChange = (content, editor) => {
     console.log("Content was updated:", content);
     this.props.testfunc(content)
   };

   SubmitData = (props) => {
     alert(this.props.content);
     props.setValue(this.props.news);
    console.log(this.props.news);
   };
   render() {
     console.log("Props from Addnews", this.props)
     return (
       <div>
        <Editor
           initialValue={this.props.value}
           init={{
             height: 500,
             menubar: false,
             plugins: [
              "advlist autolink lists link image charmap print preview anchor",
               "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
               "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
         }}
           onEditorChange={this.handleEditorChange}
 function={this.props.function(this.props.content)}
         />         <button type="button" onClick={this.SubmitData} />      </div>     );
   }
 }

export default AddEditor;
