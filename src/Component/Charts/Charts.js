
import React from "react";


import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js' ;
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const BarCharts = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow','Red', 'Blue', 'Yellow'],//, 'Green', 'Purple', 'Orange'
        datasets:[{
            label :'369',
            data : [3,6,9,10,8,6],
            backgroundColor:'#dedede',
            borderColor:'black',
            borderWidth:1,

        }]
    }
    const options ={} 
    return (
        <div>
            <Bar
            data ={data}
            options = {options}
            ></Bar>
            
        </div>
    )
}
export default BarCharts