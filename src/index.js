import ReactDOM from 'react-dom/client';
import './index.css';
import route from "./routes/router";

document.title = process.env.REACT_APP_TITLE

ReactDOM.createRoot(document.getElementById('root')).render(route);