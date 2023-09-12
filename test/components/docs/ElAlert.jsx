import { useEffect } from 'react'
import { Alert } from '../../../fruitUI/dist/js/fruitui.modules'

const ElAlert = () => {
  useEffect(() => {
    Alert();
  },[])
  return (
    <>
      <div className="alert">
        <p>hjgjghjfgfj</p>
      </div>   
    </>
  )
}

export default ElAlert