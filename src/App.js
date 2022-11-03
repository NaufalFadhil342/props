import './App.css';
import { Job } from './job';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Job Vacancy</h1>
      </div>
      <div className="content">
        <Job salary={90000} position="Senior SDE" company="Amazon" />
        <Job salary={12000} position="Junior SDE" company="Google" />
        <Job salary={10000} position="Project Manager" company="Netflix" />
      </div>
    </div>
  );
}

export default App;
