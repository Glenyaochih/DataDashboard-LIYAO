import { useSelector } from 'react-redux';
import InvoiceBarChart from '../components/InvoiceBarChart';
import MemberPieChart from '../components/MemberPieChart';
import ScreenLoading from '../components/ScreenLoading';

export default function IndexPage() {
  const memberLoading = useSelector(
    (state: any) => state.memberStatistic.loading
  );
  const invoiceLoading = useSelector(
    (state: any) => state.memberStatistic.loading
  );
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 py-5'>
            <h1 className=' py-5 text-center'>World Member</h1>
            <div>
              <MemberPieChart />
            </div>
          </div>
          <div className='col-12 py-5'>
            <h1 className=' py-5 text-center'>Daily Invoice Quantity</h1>
            <InvoiceBarChart />
          </div>
        </div>
      </div>
      <ScreenLoading
        loadingSource={memberLoading && invoiceLoading}
        size={25}
      />
    </div>
  );
}
