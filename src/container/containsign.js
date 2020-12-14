
const { connect } = require("react-redux")
const { SignUp } = require("../component/SignUp")
const { setLog } = require("../action/action")
const { ULogin } = require("../component/Login")




const MapDispatch=(dispatch)=>{
    return{
        setlog:(data)=>dispatch(setLog(data))
    }
}

const ContainLogin=connect(null,MapDispatch)(ULogin);
export default ContainLogin;