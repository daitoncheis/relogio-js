//criando variaveis
const handHours = document.querySelector('.hand-hours');
const handMinutes = document.querySelector('.hand-minutes');
const handSeconds = document.querySelector('.hand-seconds');

//setando a hora
const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}
// intervalo 

setInterval(() => {

    const { seconds, minutes, hours } = getTime();
    handSeconds.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`; 
    handMinutes.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    handHours.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);