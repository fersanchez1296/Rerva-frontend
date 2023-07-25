import { useEffect } from 'react'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import serverErrorAnimationData from '../../assets/animations/error/serverError-animations-variant-2.json'
import { SnackBar } from '../snackBar/SnackBar'
export const ServerError = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        },5000)   
    },[])

  return (
    <div className='animations-container'>
        <Lottie animationData={serverErrorAnimationData} className='animation server-error'/>
        <SnackBar msg='En 5 segundos serás redireccionado a la página de inicio' variant='warning'/>
    </div>
  )
}