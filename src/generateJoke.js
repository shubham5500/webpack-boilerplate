import axios from "axios";

async function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com", config);
  console.log({ res });

  const jokeDiv = document.getElementById("jokePara");

  jokeDiv.innerText = res.data.joke;
}

export default generateJoke;
