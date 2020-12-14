import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Box} from "grommet";
import { Editor } from '@tinymce/tinymce-react';

const AddNews=()=>{
    
    
    return(
       <Box>
        <Form>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label >News Title :</Label>
                <Input type="text" name="text"  placeholder="give your news title here.." />
             </FormGroup>
            </Col>
        
        </Row>
            <FormGroup>
                <Label>Content:</Label>
                <br></br>
                {/* {<Input type="textarea" id="textarea" rows={5} name="address" placeholder="post your news here..."/>} */}
                <Editor></Editor>
            </FormGroup>
    
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label>Locality:</Label>
                <Input type="text" name="city" placeholder="locality"/>
            </FormGroup>
            </Col>
        
        </Row>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label>Upload Image:</Label>
                <br></br>
                <input type="file" name="img"/>
                <Button type="submit" size="sm"> 
                  Upload 
                </Button>
            </FormGroup>
            </Col>
            <br></br>
            <Col md={6}>
            <FormGroup>
                <Label>Upload Video:</Label>
                <br></br>
                <input type="file" name="vdo"/>
                <Button type="submit" size="sm"> 
                  Upload 
                </Button>
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
        <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" color="primary" > submit </Button>
        <Button type="reset" label="Reset" color="primary" > Reset </Button>
        </Box>
        </FormGroup>
            {/* <FormGroup>
                <Button  type="submit" size="sm"  color="primary">
                Add News
                </Button>
            </FormGroup>
            < */}
      
    </Form>
    </Box>
)

};

export default AddNews;

/*<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blogit</title>
  <link rel="shortcut icon" href="http://example.com/myicon.ico" />
  <script src="../js/jquery-3.5.1.js"></script>

  <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
  <script>
    tinymce.init({
      selector: '#mytextarea'

    });</script>



  <script src="../js/editor.js"></script>

  <link rel="stylesheet" href="../css/style.css">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../css/editor.css">

</head>

<body>
  <!-- Navbar -->
  <header>

    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-inverse navbar-toggle " data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
          </button>
          <a class="navbar-brand" href="editor.html"><img src="../image/blog.png" alt=""></a>
        </div>
        <div class="collapse navbar-collapse justify-center" id="myNavbar">
          <ul class="ulist">
            <li class="list"><button type="button" class="btn1 buttonx btn btn-dark" data-filter="home">Home</button>
            </li>
            <li class="list"><button type="button" class="btn1 buttonx btn btn-dark" data-filter="create">Create
                Blog</button></li>
            <li class="list"><button type="button" class="btn1 buttonx btn btn-dark"
                data-filter="profile">Profile</button></li>

            <li class="list"><button type="button" class="btn1 buttonx btn btn-dark"
                data-filter="logout">Logout</button></li>
          </ul>

        </div>
      </div>
    </nav>
  </header>

  <!-- Create blog Editor -->
  <div class="container" id="contain1">

    <form class="form-horizontal" role="form" id="myForm1">
      <h1 class="text-center head">Create Blog</h1>


      <div class="form-group row">
        <label for="Title" class="col-sm-3 control-label">Title</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="title" placeholder="Blog Title">
        </div>
      </div>
      <div class="form-group row">
        <label for="image" class="col-sm-3 control-label">Image Path</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="Bimage" placeholder="Blog Image Path">
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-3 control-label  " for="Category">Category</label>
        <div class="col-sm-6 col-md-4">
          <select id="Category" class="form-control">
            <option value="1">IT</option>
            <option value="2">Technology</option>
            <option value="3">Lifestyle</option>
          </select>
        </div>
      </div>
      <div class="form-group">

        <div id="mytextarea"></div>
      </div>
      <button type="submit" id="but1" class="btn btn1 btn-block">Post</button>
    </form>
  </div>
<!-- Sidenav category buttons -->
  <div class="container-fluid" id="home">
    <div class="row content">
      <div class="col-sm-3 sidenav">
        <h4>Categories</h4>
        <ul class="nav nav-pills nav-stacked">
          <li class="active"><button class="btn  btn-block buttonz" id="allBlogButton" data-filter="all">All
              Blogs</button></li>
          <li><button class="btn btn-block buttonz" id="techCatButton"
              data-filter="Technology">Technology</button></li>
          <li><button class="btn  btn-block buttonz" id="lifestyleCatButton"
              data-filter="Lifestyle">Lifestyle</button></li>
          <li><button class="btn  btn-block buttonz" id="ITCatButton" data-filter="IT">IT</button></li>
        </ul><br>
        <div class="input-group">
          <input type="search" class="form-control" placeholder="Search Blog.." id="sea">
          <span class="input-group-btn">
            <button class="btn btn-default .search1" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
<!-- Blogs Container -->
      <div>
      <div class="wrapperblog mainc">

      </div>
<!-- Pagination buttons -->
<div class="container-fluid paginationButton" >
  <button class="paginatebtn btn-primary" id="prev" type="button">Prev</button>
  <button class="paginatebtn btn-primary" id="next" type="button">Next</button>
</div>
<footer class="text-center ">BlogIt@Pvt.Ltd</footer> 
    </div>
  </div>
  </div>
  <!-- <footer class="bg-primary text-center container-fluid">BlogIt@Pvt.Ltd</footer> -->
<!-- Profile Container -->
  <div class="container text-center" id="profile">
  </div>

  

</body>

</html> */








