InvoiceBarChart;
import InvoiceBarChart from './components/InvoiceBarChart';
import MemberPieChart from './components/MemberPieChart';

function App() {
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
    </div>
  );
}

export default App;
