import s from "../Navbar.module.css";
import BestFriendItem from "./BestFriendItem";

const BestFriends = (props) => {
    let state = props.sidebarPage
    let friendsName = state.friend.map(f => <BestFriendItem id={f.id} name={f.name}/>)
    return (
        <div className={s.bestFriends}>
            {friendsName}
        </div>
    )
}

export default BestFriends