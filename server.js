const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults =[
    "Yo Mama so fat she sued Xbox 360 for guessing her weight.",
    "You're so fat that when you were diagnosed with a flesh eating bacteria - the doctors gave you 87 years to live.",
    "You're so fat you've got more chins than a Hong Kong phone book.",
    "Yo Mama so fat she's on both sides of the family.",
    "Yo Mama so fat that even Dora couldn't explore her.",
    "Yo Mama so fat that she doesn't need the internet; she's already world wide.",
    "You're so fat that when you farted you started global warming.",
    "You're so fat the back of your neck looks like a pack of hot-dogs.",
    "You're so fat that when you fell from your bed you fell from both sides.",
    "You're so fat when you get on the scale it says \"To be continued.\"",
    "You're so fat when you go swimming the whales start singing \"We Are Family\".",
    "You're so fat when you stepped on the scale, Buzz Lightyear popped out and said \"To infinity and beyond!\"",
    "You're so fat when you turn around, people throw you a welcome back party.",
    "You're so fat when you were in school you sat by everybody.",
    "You're so fat when you went to the circus the little girl asked if she could ride the elephant.",
    "You're so fat when you go on an airplane, you have to pay baggage fees for your ass.",
    "You're so fat whenever you go to the beach the tide comes in.",
    "You're so fat I could slap your butt and ride the waves.",
    "You're so fat I'd have to grease the door frame and hold a Twinkie on the other side just to get you through.",
    "Yo Mama so dumb I told her Christmas was around the corner and she went looking for it.",
    "You're so dumb it took you 2 hours to watch 60 minutes.",
    "Yo Mama so dumb she bought tickets to Xbox Live.",
    "You're so dumb that you thought The Exorcist was a workout video.",
    "You're so ugly that you went to the salon and it took 3 hours just to get an estimate.",
    "You're so ugly that even Scooby Doo couldn't solve that mystery."];

function getRandomInsult(){
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}
function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult",(req,res)=>{
    res.json({
        insult:getRandomInsult()
    })
    .end();
})

app.use("/public", express.static("./public"));

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);