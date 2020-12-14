

const { connect } = require("react-redux")

const { Collapsable } = require("../component/StartHeader");

const MapStatetoProps=(state)=>{
    return{
        islogged:state.islogged
    }
}


const ContainHeader=connect(MapStatetoProps)(Collapsable);
export default ContainHeader;