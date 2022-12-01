//making joke using axios and GET

const btn = document.querySelector("#btn");
const jokes = document.querySelector("#jokes");

const addNewJoke = async () => {
    const newJokeText = await getStarWars();
    const newLi = document.createElement("li");
    newLi.append(newJokeText);
    jokes.append(newLi);

}

const getStarWars = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get(`https://icanhazdadjoke.com/`, config);
        console.log(res.data.joke);
        return res.data.joke;
    }
    catch (e) { 
        return "No Jokes avilable sorry!!!"
    }
    
}

btn.addEventListener("click", addNewJoke)