import { useEffect } from 'react'
import { Alert } from '../../fruitUI/dist/js/fruitui.modules'
import AlertOne from '../md/code/alertOne.mdx'
import AlertTow from '../md/code/alertTow.mdx'
import AlertThree from '../md/code/alertThree.mdx'

const Alerts = () => {
  useEffect(() => {
    Alert();
  },[])
  return (
    <>
      <br />
      <br />
      <span className="alert">primary</span>⠀
      <AlertOne />
      <br />
      <br />
      <span className="alert primary">primary</span>⠀
      <span className="alert secondary"><p><i className='icon-secondary'></i>secondary</p></span>⠀
      <span className="alert success"><p><i className='icon-success'></i>success</p></span>⠀
      <span className="alert info"><p><i className='icon-info'></i>info</p></span>⠀
      <span className="alert orange">orange</span>⠀
      <span className="alert error"><p><i className='icon-error'></i>error</p></span>⠀
      <span className="alert black">black</span>⠀
      <span className="alert gray">gray</span>⠀
      <span className="alert white">white</span>⠀
      <AlertTow />
      <br />
      <br />
      <span className="alert secondary-flat"><p><i className='icon-secondary'></i>secondary</p></span>⠀
      <span className="alert success-flat"><p><i className='icon-success'></i>success</p></span>⠀
      <span className="alert info-flat"><p><i className='icon-info'></i>info</p></span>⠀
      <span className="alert error-flat"><p><i className='icon-error'></i>error</p></span>⠀
      <AlertThree />
    </>
  )
}

export default Alerts