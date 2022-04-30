import { useDispatch, useSelector } from "react-redux"
import { authSelectors, authOperations} from "../../redux/auth"


export default function UserMenu(){
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName)
    return (
        <>
        <p>Hello, {name}</p>
        <button type='button' onClick={()=>dispatch(authOperations.logOut())}>LogOut</button>
        </>
    )
}