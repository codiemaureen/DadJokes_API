const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
    'Ugh',
    '🤦🏼‍♀️',
    'Omg dad.',
    'seriously',
    'stop it.',
    'please stop',
    'That was the worst',
    'Not Funny',
];

//fetch a random joke
async function fetchJoke(){
    //turn loader on
    loader.classList.remove('hidden');
    //hide button while loading
    jokeButton.classList.add('hidden')
    const response = await fetch('https://icanhazdadjoke.com', {
        headers:{
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    //turn loader off
    loader.classList.add('hidden');
    jokeButton.classList.remove('hidden')
    return data;
};

//generate a random response
function randomItemFromArray(arr, not){
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not){
        console.log('We used that one last time!');
        return randomItemFromArray(arr,not);
    };
    return item;
}

//generate jokes when button is clicked
async function handleClick(){
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(
        buttonText,
        jokeButton.textContent
    );
}

jokeButton.addEventListener('click', handleClick);