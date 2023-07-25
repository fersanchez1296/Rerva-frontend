import Lottie from 'lottie-react'
import developingAnimationData from '../../assets/animations/developing/developing.animations.json'
export const Developing = ({children} : any) => {
  return (
    <div className='animations-container'>
        <Lottie animationData={developingAnimationData} className='animation developing'/>
        {children}
    </div>
  )
}