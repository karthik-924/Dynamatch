// import React from 'react'
import { useParams } from 'react-router-dom'
import DLogin from '../components/login/DLogin'
import RLogin from '../components/login/RLogin'

const Login = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      {params.user==='donor'?<DLogin/>:<RLogin/>}
    </div>
  )
}

export default Login
