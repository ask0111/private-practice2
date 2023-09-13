import logo from './logo.svg';
import './App.css';
import DataTable from './components/datatables/DataTable';
import DataTables from './components/datatablecomponets/DataTables';
import TableWrapper from './components/datatables/DataTable';
import YearRangeSlider from './components/reactSlider/ReactSlider';
import MultiStepForm from './components/mutliStepForm/MultiStepForm';

function App() {
  return (
    <div className="App">
    {/* <DataTables /> */}
    {/* <TableWrapper />
    <YearRangeSlider /> */}
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <MultiStepForm />
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
