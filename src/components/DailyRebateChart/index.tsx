import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Legend,
  Tooltip,
  Title,
  ChartData,
} from 'chart.js';
import dayjs from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { BAR_BORDER_RADIUS, BAR_THICKNESS, BG_COLOR } from './options';
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Legend, Tooltip, Title);
Chart.defaults.font.family = `Pretendard`;
Chart.defaults.font.size = 10;
Tooltip.positioners.centerTop = function (elements) {
  if (!elements.length) return false;
  const index = elements[0].index;
  const chart = this.chart;
  return {
    x: elements[0].element.x,
    y: chart.getDatasetMeta(1).data[index].y,
  };
};

interface DailyRebateChartProps {
  data: UserTransactionChartInfoResponse[];
}

export default function DailyRebateChart({ data }: DailyRebateChartProps) {
  const chartRef = useRef<Chart<'bar', number[], string>>(null);
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const labels = data.map((item) => dayjs(item.date).format(`MM/DD`));
  const gasFeesArr = data.map((item) => item.totalGasAmt);
  const rebatesArr = data.map((item) => item.totalRebateAmt);

  const chartData: ChartData<'bar', string | number[], string | number> = {
    labels: labels,
    datasets: [
      {
        label: `Gas Fee`,
        data: gasFeesArr,
        backgroundColor: BG_COLOR[0].dark,
        barThickness: BAR_THICKNESS,
        borderRadius: BAR_BORDER_RADIUS,
        order: 2,
      },
      {
        label: `Rebates`,
        data: rebatesArr,
        backgroundColor: BG_COLOR[1].dark,
        barThickness: BAR_THICKNESS,
        borderRadius: BAR_BORDER_RADIUS,
        order: 1,
      },
    ],
  };

  const updateHoveredColor = useCallback(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        dataset.backgroundColor = Array.from({
          length: chartData.datasets[datasetIndex].data.length,
        }).map((_, index) => {
          return hoveredIndex === index ? BG_COLOR[datasetIndex].dark : BG_COLOR[datasetIndex].light;
        });
      });
      chart.update();
    }
  }, [chartData.datasets, hoveredIndex]);

  const updateToDefaultColor = useCallback(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        dataset.backgroundColor = Array.from({
          length: chartData.datasets[datasetIndex].data.length,
        }).map(() => {
          return BG_COLOR[datasetIndex].dark;
        });
      });
      chart.update();
    }
  }, [chartData.datasets]);

  useEffect(() => {
    if (onMouseHover && hoveredIndex !== null) {
      updateHoveredColor();
    } else {
      updateToDefaultColor();
    }
  }, [hoveredIndex, onMouseHover, updateHoveredColor, updateToDefaultColor]);

  return (
    <Bar
      height={`100 %`}
      data={chartData}
      ref={chartRef}
      onMouseEnter={() => setOnMouseHover(true)}
      onMouseOut={() => setOnMouseHover(false)}
      options={{
        hover: {
          mode: `nearest`,
          intersect: false,
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            stacked: false,
          },
        },
        plugins: {
          legend: {
            onClick: function (evt, item, legend) {
              if (item.datasetIndex === 0) {
                if (!item.hidden) {
                  const originLegend = legend;
                  originLegend.chart.data.datasets[1].data = gasFeesArr.concat(gasFeesArr).concat(gasFeesArr);
                  Chart.defaults.plugins.legend.onClick.call(this, evt, item, originLegend);
                } else {
                  const originLegend = legend;
                  originLegend.chart.data.datasets[1].data = rebatesArr.concat(rebatesArr).concat(rebatesArr);
                  Chart.defaults.plugins.legend.onClick.call(this, evt, item, originLegend);
                }
              } else {
                Chart.defaults.plugins.legend.onClick.call(this, evt, item, legend);
              }
            },
            display: true,
            position: `bottom`,
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              boxHeight: 8,
            },
          },
          tooltip: {
            position: `centerTop`,
            xAlign: `center`,
            mode: `index`,
            intersect: false,
            backgroundColor: `#FFFFFF`,
            borderWidth: 1,
            borderColor: `#B3B3B3`,
            titleColor: `#1A1A1A`,
            bodyColor: `#1A1A1A`,
            titleAlign: `center`,
            bodyAlign: `left`,
            cornerRadius: 8,
            usePointStyle: true,
            titleMarginBottom: 6,
            bodySpacing: 6,
            padding: {
              top: 8,
              left: 16,
              right: 16,
              bottom: 8,
            },
            callbacks: {
              labelTextColor: (tooltipItem) => {
                return BG_COLOR[tooltipItem.datasetIndex].dark;
              },
              title: (tooltipItems) => {
                setHoveredIndex(tooltipItems[0].dataIndex);
                return chartData.labels ? chartData.labels[tooltipItems[0].dataIndex] + `` : ``;
              },
              afterLabel: (tooltipItem) => {
                const datasetIndex = tooltipItem.datasetIndex;
                const dataIndex = tooltipItem.dataIndex;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const datasetValue: any = chartData.datasets[datasetIndex].data[dataIndex];
                if (datasetIndex === 1) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const previousDatasetValue: any = chartData.datasets[datasetIndex - 1].data[dataIndex];
                  const difference = datasetValue - previousDatasetValue;
                  return `${difference} ETH`;
                } else {
                  return `${datasetValue} ETH`;
                }
              },
              label: (tooltipItem) => {
                const datasetIndex = tooltipItem.datasetIndex;
                const datasetLabel = chartData.datasets[datasetIndex].label;
                return datasetLabel;
              },
            },
          },
        },
      }}
    />
  );
}
