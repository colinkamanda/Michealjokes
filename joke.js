const btnEl= document.getElementById("btn");
const jokeEl=document.getElementById("jokes");

const apiKey="ZxLavkVKAkMcuvR8RiVZ8Q==YuT3jFRyulzplTx2";


const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"






async function getJoke(){
try {
    jokeEl.innerText ="loading...";
    btnEl.innerText=true;
    btnEl.innerText="geting..."
    const response = await fetch(apiUrl,apiKey);
const data = await response.json();
jokeEl.innerText= data[0].joke
btnEl.innerText=false;
    btnEl.innerText="GET JOKES"
} catch (error) {
    "An Error happened, try again later or check your Network"
}
}

btnEl.addEventListener("click", getJoke);