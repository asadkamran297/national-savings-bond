import React,{Component} from "react";
import ReactDOM from 'react-dom';

export default function Home() {
    return (
        <div>
           Hell
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
