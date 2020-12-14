import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import FormSuccess from './FormSuccess';
const Form =()=>{
    const [isSubmitted,setIsSubmitted]=useState(false)
    function submitForm(){
        setIsSubmitted(true);
    }
    return(
    <div>
        <SignUpForm></SignUpForm>
        {!isSubmitted?<SignUpForm submitForm={submitForm}/>:<FormSuccess/>}
    </div>
    )
}
export default Form;