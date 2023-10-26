const btnEl=document.getElementById('btn');
const jokeEl=document.getElementById("joke")

const apiKey="r2YzR0f5PLfXwEvIbkzj7Q==F9wtNnYITlLRO9sm";

const option={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey,
    }
}

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    jokeEl.innerText="Updating....";
    btnEl.disabled=true;
    btnEl.innerText-"Loading...";
    const response= await fetch(apiURL,option);
    const data= await response.json();

    btnEl.disabled=false;
    btnEl.innerText-"TELL ME A JOKE";

    jokeEl.innerText=data[0].joke
}

btn.addEventListener("click",getJoke)