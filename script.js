const but = document.querySelector('button');
const con = document.querySelector('.container');


but.addEventListener('click', fetchjoke );

function fetchjoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            con.innerHTML = `${data.setup} - ${data.punchline}`;
        })
        .catch(error => {
            con.innerHTML = 'Oops! Something went wrong. Please try again.';
            console.error('Error fetching joke:', error);
        });
}


const setup = data.setup;
                const punchline = data.punchline;