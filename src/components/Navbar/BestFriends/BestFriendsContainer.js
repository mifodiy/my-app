
import {connect} from "react-redux";
import BestFriends from "./BestFriends";
let mapStateToProps = (state) =>{
    return {
        sidebarPage: state.sidebarPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{}
}
const BestFriendsContainer = connect(mapStateToProps,mapDispatchToProps)(BestFriends);


export default BestFriendsContainer