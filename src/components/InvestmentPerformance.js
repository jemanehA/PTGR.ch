import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../styles/InvestmentPerformance.css';

const InvestmentPerformance = () => {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const chartData = {
    labels: ['Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024', 'Apr, 2024', 'May, 2024', 'Jun, 2024', 'Jul, 2024', 'Aug, 2024', 'Sep, 2024', 'Oct, 2024', 'Nov, 2024'],
    datasets: [
      {
        label: 'Bitcoin',
        data: [37740, 42466, 42672, 63012, 70719, 61112, 68732, 61446, 64625, 57969, 63723, 62384],
        borderColor: '#FF9900',
        backgroundColor: '#FF9900',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'PTGR Solid',
        data: [100000, 115976, 117552, 170649, 207776, 167190, 203169, 193821, 180789, 168493, 164086, 169873],
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'PTGR Balanced',
        data: [100000, 125770, 129917, 192282, 228394, 172236, 203403, 171925, 166208, 156295, 153923, 173823],
        borderColor: '#9B1B30',
        fill: false,
        backgroundColor: '#9B1B30',
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'PTGR Growth',
        data: [100000, 131596, 136078, 223466, 293015, 215150, 238908, 197845, 176169, 139357, 146928, 156732],
        borderColor: '#000000',
        fill: false,
        backgroundColor: '#000000',
        tension: 0.4,
        borderWidth: 2,
      }
    ]
  };

  const calculatePercentage = (data) => {
    const initialValue = data[0];
    const finalValue = data[data.length - 1];
    return ((finalValue - initialValue) / initialValue) * 100;
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000, // Total animation duration
      easing: 'linear', // Smooth linear animation
      x: {
        type: 'number',
        from: 0, // Start from the first data point (Dec, 2023)
        delay: 0, // No delay for the x-axis animation
      },
      y: {
        type: 'number',
        from: (ctx) => {
          // Start y-values from the first data point
          if (ctx.type === 'data' && ctx.mode === 'default') {
            return ctx.chart.scales.y.getPixelForValue(100000); // Adjust this value if needed
          }
        },
        delay: (ctx) => {
          // Delay each point's y-value animation based on its index
          return ctx.dataIndex * 200; // Adjust delay for smooth progression
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: ''
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value (in USD)'
        }
      }
    }
  };

  return (
    <div className="container">
      {/* Chart Section */}
      <div className="chart-container" ref={chartRef}>
        {isVisible && <Line data={chartData} options={chartOptions} />}
      </div>

      {/* Performance Circles Section */}
      <p className="responsive-text">
        The Crypto Assets Management Performance starting from January 2023 up to December 2024
      </p>
      <div className="circle-container d-flex flex-wrap">
        <div className="circle1 bitcoin">
          <div className="circle1-bar" style={{ '--progress': `${calculatePercentage(chartData.datasets[0].data).toFixed(2)}%` }}></div>
          <div className="circle1-text">
            Bitcoin
            <div className="circle1-percentage">{calculatePercentage(chartData.datasets[0].data).toFixed(2)}%</div>
          </div>
        </div>
        <div className="circle1 solid">
          <div className="circle1-bar" style={{ '--progress': `${calculatePercentage(chartData.datasets[1].data).toFixed(2)}%` }}></div>
          <div className="circle1-text">
            PTGR <br />Solid
            <div className="circle1-percentage">{calculatePercentage(chartData.datasets[1].data).toFixed(2)}%</div>
          </div>
        </div>
        <div className="circle1 balanced">
          <div className="circle1-bar" style={{ '--progress': `${calculatePercentage(chartData.datasets[2].data).toFixed(2)}%` }}></div>
          <div className="circle1-text">
            PTGR <br />Balanced
            <div className="circle1-percentage">{calculatePercentage(chartData.datasets[2].data).toFixed(2)}%</div>
          </div>
        </div>
        <div className="circle1 growth">
          <div className="circle1-bar" style={{ '--progress': `${calculatePercentage(chartData.datasets[3].data).toFixed(2)}%` }}></div>
          <div className="circle1-text">
            PTGR <br />Growth
            <div className="circle1-percentage">{calculatePercentage(chartData.datasets[3].data).toFixed(2)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPerformance;