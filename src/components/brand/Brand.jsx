import React from 'react'
import './Brand.css'

import { Google,Shopify,Slack,Dropbox,Atlasian } from './imports'
const Brand = () => {
  return (
    <div className='brands-section'>

    <div>
     <img src={Google} alt='google'></img>

    </div>

    <div>
     <img src={Shopify} alt='shopify'></img>

    </div>

    <div>
     <img src={Slack} alt='slack'></img>

    </div>
    <div>
     <img src={Dropbox} alt='dropbox'></img>

    </div>
    <div>
     <img src={Atlasian} alt='altsian'></img>

    </div>
    </div>
  )
}

export default Brand