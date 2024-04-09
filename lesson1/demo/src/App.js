// import logo from './logo.svg';
import './App.css';
import Class_DoTrongHuy from './Component/Class_DoTrongHuy';
import Func_JSX_TrongHuy from './Component/Func_JSX_TrongHuy';
import Func_Trọng from './Component/Func_JSX_TrongHuy';

function App() {
  return (
    <section className = "app">
        <h1> demo JSX</h1>
        {/* function Component demo */}

        <Func_JSX_TrongHuy />
        <Func_JSX_TrongHuy fullName = "Đỗ Trọng Huy" age = "20" />

        <Class_DoTrongHuy />
        <hr />
        <Class_DoTrongHuy info = "Học ReactJS" time ="11 buổi" />
    </section>
  );
}

export default App;
