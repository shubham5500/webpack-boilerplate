import generateJoke from "./generateJoke";
import laughing from '../src/assets/abc.png'
import './styles/main.scss';

const jokeDiv = document.getElementById('joke');
const img = document.createElement('img');
const p = document.createElement("p");
p.setAttribute('id', 'jokePara');

jokeDiv.appendChild(p)
const btn = document.createElement('button');
btn.classList.add('btn', 'jokeBtn');
btn.innerText = 'Generate Joke';
btn.addEventListener('click', generateJoke)
img.src = laughing;
jokeDiv.appendChild(img);
jokeDiv.appendChild(btn);

const user = {age: 'ashd'};

console.log(generateJoke(),user, );