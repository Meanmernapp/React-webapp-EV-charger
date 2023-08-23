import React, { useEffect, useState } from 'react';
import { Chart, ArcElement,DoughnutController  } from 'chart.js';
Chart.register(ArcElement,DoughnutController );

const CircleChart = ({ data, dataItem }) => {
  const [chartData, setChartData] = useState({
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.percentage),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 5,
        borderColor: '#000',
        outerWidth: 2,
      },
    ],
  });

  useEffect(() => {
    // Update the chart data whenever the data prop changes
    setChartData({
      labels: data.map((item) => item.name),
      datasets: [
        {
          data: data.map((item) => item.percentage),
          backgroundColor: data.map((item) => item.color),
          borderWidth: 5,
          borderColor: '#000',
          outerWidth: 2,
        },
      ],
    });
  }, [data]);

  useEffect(() => {
    // Create a new chart instance and apply the plugin whenever the dataItem prop changes
    const chart = new Chart('circleChart', {
      type: 'doughnut',
      data: chartData,
      options: { responsive: true, cutout: '80%' },
      plugins: [
        {
          beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const { ctx } = chart;
            ctx.restore();
            const fontSize = (height / 160).toFixed(2);
            ctx.font = `bold ${fontSize}em IBM Plex Sans`;
            ctx.textBaseline = 'top';

            const text = dataItem?.text;
            const iconUrl = dataItem?.icon;

            const iconWidth = 40;
            const iconHeight = 40;
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const iconX = Math.round((width - iconWidth) / 2);
            const lineHeight = parseInt(fontSize, 10) * 5;
            const iconY = height / 2 - lineHeight - iconHeight;
            if (iconUrl) {
              const image = new Image();
              image.src = iconUrl;
              image.onload = () => {
                ctx.drawImage(image, iconX, iconY, iconWidth, iconHeight);
              };
            }
            const textY = height / 2 + lineHeight;
            ctx.fillText(text, textX, textY);

            ctx.save();
          },
        },
      ],
    });

    return () => {
      // Clean up the chart instance when the component unmounts
      chart.destroy();
    };
  }, [chartData, dataItem]);

  return <canvas id="circleChart" />;
};

export default CircleChart;
