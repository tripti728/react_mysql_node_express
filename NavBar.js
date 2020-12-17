import React from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "grommet";
import { Register } from "./Register";
import AddNews from "./AddNews";
import { Editor } from "@tinymce/tinymce-react";
import News from "./news";

export function NavBar(props) {
  return (
    <Box height="100vh">
      <Switch>
        <Route path="/addnews" component={AddNews}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </Box>
  );
}
