import React from 'react'

export const SlideLayout = ({ title, children }) => {
    return (<div style={{ width: '100vw', height: '100vh' }}>
        <div style={{height: '20%'}}>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
        </div>
        <div style={{height: '80%', display: 'flex', justifyContent: 'center'}}>
            {children}
        </div>
    </div>
    )
}