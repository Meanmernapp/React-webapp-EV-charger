import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const CircleChart = ({ data, dataItem }) => {
  // chart data
  const chartData = {
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
  };

  return (
    <Doughnut
      data={chartData}
      options={{ responsive: true, cutout: '80%' }}
      plugins={[
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
            const iconUrl = dataItem?.icon; // Update to use the 'icon' property

            const iconWidth = 40; // Set the width of the image
            const iconHeight = 40; // Set the height of the image

            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const iconX = Math.round((width - iconWidth) / 2); // Center the image
            const lineHeight = parseInt(fontSize, 10) * 5; // Adjust the line height as needed

            // Draw the icon above the text
            const iconY = height / 2 - lineHeight - iconHeight; // Adjust the vertical position
            if (iconUrl) {
              const image = new Image();
              image.src = iconUrl;
              image.onload = () => {
                ctx.drawImage(image, iconX, iconY, iconWidth, iconHeight);
              };
            }

            // Draw the text below the icon
            const textY = height / 2 + lineHeight;
            ctx.fillText(text, textX, textY);

            ctx.save();
          },
        },
      ]}
    />
  );
};

export default CircleChart;
