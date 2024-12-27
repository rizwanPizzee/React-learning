import React, {useState, useEffect} from 'react';
import Chart from 'chart.js/auto';

function MyGraph(){
    const xValues = [3, 5, 10, 15, 20, 25, 30];
    const yValues = [1010, 700, 650, 800, 680, 850, 950];

    useEffect(()=>{
        const chartId = document.getElementById('my-chart').getContext('2d');
        const myChart = new Chart(chartId, {
            type:"line",
            data:{
                labels: xValues,
                datasets: [{
                    fill: false,
                    tension: 0.1,
                    backgroundColor: 'black',
                    borderColor: 'blue',
                    data: yValues
                }]
            },
            options:{
                plugins:{
                    legend: {display: false},
                    title:{
                        display: true,
                        text: 'Student Marks Graph'
                    }
                },
                
                scales: {
                    y: {min: 500, max: 1100},
                }
            }
        });

        return ()=>{
            myChart.destroy();
        };
    }, []);
    
    return (
        <div>
            <h1>Student Obtained Marks From 1100</h1>
            <canvas id='my-chart' style={{width : '300px', maxWidth: '1200px', maxHeight: '800px'}}>
            </canvas>
        </div>
    );

}

export default MyGraph;