import '../css/estilos.css';
import { messages } from './message.js';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderToDom from './render-to-dom.js';


import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';


// function Teacher(){
//     return(
//         <li className="Teacher">
//             {props.name}
//             <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
//         </li>
//     )
// }

// class Teachers extends Component{
//     render(){
//         return(
//             <ul className="Teachers">
//             {this.props.data.teachers.map(teacherData => {
//                 return <Teacher {...teacherData}/>
//             })}
//             </ul>
//         )
//     }
// }

render(<Teachers data={data}/>, document.getElementById('container'))
console.log(data);

data.teachers.forEach(teacher => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderToDom(element);
});


document.write(messages.firstMessage);
messages.delayedMessage();
const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
console.log('Hola mundo!, desde webpack.config.js');
