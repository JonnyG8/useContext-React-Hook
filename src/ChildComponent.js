
import { useContext } from "react"
import {FirstName} from './App'

export default function ChildComponent() {
  const name = useContext(FirstName)

  return (
    <div>Hello {name}</div>
  )
}
