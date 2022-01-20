const jokes = document.querySelector('.jokes');
const dadBtn = document.querySelector('.dadBtn');

const getDadJoke = async () => {
  try {
    const res = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    return res.data.joke;
  } catch (e) {
    console.log('Sorry son, dady is busy at the moment! ', e);
  }
};

const addDadJoke = async () => {
  try {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
  } catch (e) {
    console.log('Error! ', e);
  }
};

dadBtn.addEventListener('click', addDadJoke);

const chuckBtn = document.querySelector('.chuckBtn');

const getChuckJoke = async () => {
  try {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    // console.log(res);
    return res.data.value;
  } catch (e) {
    console.log('Sorry son, Chuck is saving the world! ', e);
  }
};

const addChuckJoke = async () => {
  try {
    const jokeText = await getChuckJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
  } catch (e) {
    console.log('Error! ', e);
  }
};

chuckBtn.addEventListener('click', addChuckJoke);

const h2 = document.querySelector('h2');

const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get(
      'https://api.cryptonator.com/api/ticker/btc-usd'
    );
    return response.data.ticker.price;
  } catch (e) {
    console.log('Error! ', e);
  }
};

const addBitcoinPrice = async () => {
  try {
    const bitcoinPrice = await fetchBitcoinPrice();
    h2.textContent = `Current rate: 1 BTC = ${Math.round(bitcoinPrice)} $`;
  } catch (e) {
    console.log('No jokes available! : ', e);
  }
};

h2.addEventListener('click', addBitcoinPrice);
