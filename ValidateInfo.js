export default function ValidateInfo(values){
let errors={}
//Full Name
if(!values.fullName.trim()){
    errors.fullName="FullName required"
}
//Email
if(!values.email){
    errors.email="Email required"
}
else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Email address invalid"
}
if(!values.locality.trim()){
    errors.locality="Locality required"
}
if(!values.aadhar_id){
    errors.aadhar_id="Aadhar Id required"
}
else if(! "^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$".test(values.aadhar_id)){
errors.aadhar_id="Aadhar Id invalid"
}
if(!values.phone_number){
    errors.phone_number="PhoneNumber required"
}
else if(! "^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$".test(values.phone_number)){
    errors.phone_number="Phone Number invalid"
    }
if(!values.password){
    errors.password='password is required'
}else if(values.password.length<8){
    errors.password="password need to be 8 characters or more"
    }
    if(!values.confirmpassword){
        errors.confirmpassword='password is required'
    }else if(values.confirmpassword!==values.password){
        errors.confirmpassword="passwords do not match"
        }
        return errors;
}