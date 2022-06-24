import React, { useState, useEffect } from 'react'
import { BuilderComponent, builder } from '@builder.io/react'

builder.init('100492d1ecd74efb94d139f7644a92ea')

export const MyTestComponent = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null)
  
    useEffect(() => { 
      builder.get('test', { url: window.location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])
  
    return <BuilderComponent model="test" content={builderContentJson} />
  }