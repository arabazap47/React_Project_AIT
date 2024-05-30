import React from 'react'
import './Css/Services.css'

const Services = ({title,subtitle,bg,icon}) => {
  return (
    <div className='px-2' >
        
                <div className="card_s" style={{background: bg}}>
                    <div className="icons">
                        <p className='log'>{icon}</p>
                    </div>
                    <h2 className='s_title'>{title}</h2>
                    <p className='s_sub'>{subtitle}</p>
                </div>

    </div>
  )
}

export default Services