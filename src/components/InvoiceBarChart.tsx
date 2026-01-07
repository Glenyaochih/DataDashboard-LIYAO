import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '../redux/store';
import { getInvoiceAsync } from '../redux/slice/dailyInvoice/invoiceSlice';
import { BarChart } from '@mui/x-charts';
// import { type BarSeriesType } from '@mui/x-charts/models';

export default function InvoiceBarChart() {
  const dispatch: AppDispatch = useDispatch();
  const invoices = useSelector((state: any) => state.dailyInvoice.invoices);
  //typescript 型別
  interface invoiceType {
    date: string;
    count: number;
  }

  useEffect(() => {
    dispatch(getInvoiceAsync());
  }, []);

  return (
    <BarChart
      sx={{ width: '100%', color: 'white' }}
      xAxis={[
        {
          id: 'date',
          data: invoices?.map((item: invoiceType) => item.date),
          categoryGapRatio: 0.2,
          barGapRatio: 0.1,
          dataKey: 'month',
          label: 'Date',

          // sx: {
          //   '& .MuiChartsAxis-line': {
          //     stroke: '#ffffff',
          //     strokeWidth: 2,
          //   },
          //   // 2. 修改刻度顏色
          //   '& .MuiChartsAxis-tick': {
          //     stroke: '#ffffff',
          //   },
          //   // 3. 修改刻度文字顏色
          //   '& .MuiChartsAxis-tickLabel': {
          //     fill: '#ffffff',
          //     fontWeight: 'bold',
          //   },
          //   // 4. 修改軸標題顏色 (Label)
          //   '& .MuiChartsAxis-label': {
          //     fill: 'ffffff',
          //   },
          // },
        },
      ]}
      yAxis={[
        {
          id: 'barCategories',
          label: 'Quantity',
          // sx: {
          //   '& .MuiChartsAxis-line': {
          //     stroke: '#ffffff',
          //     strokeWidth: 2,
          //   },
          //   // 2. 修改刻度顏色
          //   '& .MuiChartsAxis-tick': {
          //     stroke: '#ffffff',
          //   },
          //   // 3. 修改刻度文字顏色
          //   '& .MuiChartsAxis-tickLabel': {
          //     fill: '#ffffff',
          //     fontWeight: 'bold',
          //   },
          //   // 4. 修改軸標題顏色 (Label)
          //   '& .MuiChartsAxis-label': {
          //     fill: 'ffffff',
          //   },
          // },
        },
      ]}
      series={[
        {
          data: invoices.length
            ? invoices?.map((item: invoiceType) => item.count)
            : [1, 2, 3],
        },
      ]}
      height={600}
    />
  );
}
