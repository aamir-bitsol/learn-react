import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Name(){
    const {user} = useContext(UserContext);
    return <h1>{user.name}</h1>
  }
  