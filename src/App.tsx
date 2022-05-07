import React, {FC, useState} from "react"

export const App: FC = () => {
  const [count, setCount] = useState(0)
  return <>
  <h1>React App - {process.env.NODE_ENV} </h1>
  <button onClick={() => setCount(count+1)}>add {count}</button>
  </>
}