const DELAY = 1000; // 1s


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const logWithDelay = async (...args) => {
    console.log(...args);
    await delay(DELAY);
}

const logMessages = async () => {
    await logWithDelay('> Loading Dotan...');
    await logWithDelay('> Loading Shahar...');
    await logWithDelay('> Loading Guests...');
    await logWithDelay();
    await logWithDelay('\x1b[36m%s\x1b[0m', 'Here we go!');    
}

logMessages()