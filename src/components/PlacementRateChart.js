import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PlacementRateChart() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Placements',
            data: [3, 5, 4, 6, 7, 8],
            backgroundColor: '#4f46e5'
          },
          {
            label: 'Openings Filled',
            data: [2, 4, 3, 5, 6, 7],
            backgroundColor: '#10b981'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="h-64">
      <canvas ref={canvasRef} />
    </div>
  );
}