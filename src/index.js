import ReactDOM from "react-dom";
import App from'./app'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


ReactDOM.render(<App/>,document.querySelector("#root"));