import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TasksContextProvider from './contexts/TasksContext';


function App() {
  return (
    <TasksContextProvider>
      <div id="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="app-wrapper">
                <Header />
                <AddTask />
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TasksContextProvider>
  );
}


export default App;