import React from 'react'
import '../../style/global.css'

function PrimaryButton({Cta}) {
  return (
    <div>
        <button className='PrimaryButton'>
            {Cta}
        </button>
    </div>
  )
}

export default PrimaryButton