import logo from './logo.svg';
import './App.css';
import DataTable from './components/datatables/DataTable';
import DataTables from './components/datatablecomponets/DataTables';
import TableWrapper from './components/datatables/DataTable';
import YearRangeSlider from './components/reactSlider/ReactSlider';

function App() {
  return (
    <div className="App">
    {/* <DataTables /> */}
    <TableWrapper />
    <YearRangeSlider />
    </div>
  );
}

export default App;
