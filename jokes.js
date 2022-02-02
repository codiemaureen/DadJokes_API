const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');


const buttonText = [
    'Ugh',
    '🤦🏼‍♀️',
    'Omg dad.',
    'seriously',
    'stop it.',
    'please stop',
    'That was the worst',
];

async function fetchJoke(){
    const response = await fetch('https://icanhazdadjoke.com', {
        headers:{
            Accept: 'application/json',
        },
    });
    const joke = await response.json();
    console.log(joke);
};

async function handleClick(){
    const joke = await fetchJoke();
}

