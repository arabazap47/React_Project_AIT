import React from 'react'
import { serviceData } from './products'
import './Css/Services.css'

const Services = ({title,subtitle,bg,icon}) => {
  return (
    <div className='px-2'>
        
                <div className="card_s" style={{background: bg}}>
                    <div className="icon">
                        <p className='log'>{icon}</p>
                    </div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>

    </div>
  )
}

export default Services