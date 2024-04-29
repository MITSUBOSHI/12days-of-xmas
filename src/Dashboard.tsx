import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <h1>Twelve Days of Christmas</h1>
      <div className="container">
        <button><Link to='/quiz'>Quiz</Link></button>
        <button><Link to='/gallery'>Gallery</Link></button>
        <button>
            <a href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%81%AE12%E6%97%A5%E9%96%93" target="_blank">クリスマスの12日間</a>
        </button>
      </div>
    </>
  )
};

export default Dashboard;