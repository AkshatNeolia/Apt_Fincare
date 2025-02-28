"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    accounts: number[]; // Define the expected type
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [6969, 3642, 450], 
                backgroundColor: ["#0747b6", "#2265D8", "#2191fa"],
            },
        ],
        labels: ["Bank 1", "Bank 2","Bank 3"],
    };

    return <Doughnut data={data} 
    options= {{
        cutout: '60%',
        plugins:{
            legend:{
                display: false
            }
        }
    }}
    />;
};

export default DoughnutChart;
