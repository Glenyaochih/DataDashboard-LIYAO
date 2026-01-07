import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberAsync } from '../redux/slice/memberStatistics/memberSlice';
import type { AppDispatch } from '../redux/store';
import { PieChart } from '@mui/x-charts';

export default function MemberPieChart() {
  const dispatch: AppDispatch = useDispatch();
  const members = useSelector((state: any) => state.memberStatistic.member);

  //typescript 型別
  interface country {
    country: string;
    value: number;
  }
  const pieData = members.map((item: country, index: number) => {
    return { id: index, value: item.value, label: item.country };
  });

  useEffect(() => {
    dispatch(getMemberAsync());
  }, []);

  return (
    <PieChart
      series={[
        {
          data: pieData,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 50, additionalRadius: -30, color: 'gray' },
        },
      ]}
      slotProps={{
        legend: {
          direction: 'horizontal',
          position: { vertical: 'bottom', horizontal: 'center' },
        },
      }}
      width={700}
      height={700}
    />
  );
}
