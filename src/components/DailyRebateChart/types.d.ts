import ChartJs from 'chart.js';

declare module 'chart.js' {
  interface TooltipPositionerMap {
    centerTop: ChartJs.TooltipPositionerFunction<ChartJs.ChartType>;
  }
}
