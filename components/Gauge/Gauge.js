import React from 'react'
import GaugeChart from 'react-gauge-chart'
import theme from '../../theme/base'

const { TEXT, PRIMARY } = theme



export const Gauge = ({ id, percent, style = {} }) => (
    <GaugeChart 
        id={`gauge-chart-${id}`}
        percent={percent / 100} 
        style={style}
        formatTextValue={value => value}
        textColor={TEXT}
        colors={["#FF4E43", "#FFA400", "#0CCE6A"]}
        needleColor={PRIMARY}
        needleBaseColor={PRIMARY}
        />  
)