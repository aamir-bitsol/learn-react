import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Value(){
    const {user} = useContext(UserContext)
    return <p>{user.value}</p>
  }