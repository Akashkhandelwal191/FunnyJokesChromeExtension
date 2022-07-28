window.addEventListener("load",()=>{
    getJokes();
});

const  getJokes = async() =>{

    try{
        const res = await fetch("https://icanhazdadjoke.com/slack");
        const data = await res.json();
        const myJoke = document.querySelector("#MyJoke");
        myJoke.innerHTML = data.attachments[0].text;
        console.log(myJoke);

    }catch(error){}
};