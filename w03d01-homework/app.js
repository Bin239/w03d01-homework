


let character = prompt("What is your pet's name? Remeber, don't let ");
$(".character").text(`Your Pet's name is ${character}`);

class Tamagotchi {
    constructor() {
        this.hunger = 0;
        this.sleepiness = 0;
        this.bored = 0;
    }
}

$(".image3").hide();

let myTamagotchi = new Tamagotchi()

function hungerLevel() {
    myTamagotchi.hunger++;
    $(".hunger").text("Hunger: " + myTamagotchi.hunger);
    feedMessage();
    petDead();
}
let hungerIncreases = setInterval(hungerLevel, 1500);


function sleepLevel() {
    myTamagotchi.sleepiness++;
    $(".sleepiness").text("Sleepiness: " + myTamagotchi.sleepiness);
    restMeMessage();
    petDead();
}
let sleepIncreases = setInterval(sleepLevel, 1500);


function boredLevel() {
    myTamagotchi.bored++;
    $(".bored").text("Bored: " + myTamagotchi.bored);
    petMeMessage();
    petDead();
}
let boreIncreases = setInterval(boredLevel, 1000);


function petMe() {
    if (myTamagotchi.bored > 2) {
        myTamagotchi.bored -= 2;
    }
}

function restMe() {
    if (myTamagotchi.sleepiness > 2) {
        myTamagotchi.sleepiness--;
    }
}

function feedMe() {
    if (myTamagotchi.hunger > 2) {
        myTamagotchi.hunger -= 2;
    }
    $(".hunger").text("Hunger: " + myTamagotchi.hunger);
}

function feedMessage() {
    if (myTamagotchi.hunger > 7) {
        $(".hunger").append(" Feed Me, I am hungry");
    }
}

function restMeMessage() {
    if (myTamagotchi.sleepiness > 7) {
        $(".sleepiness").append(" Turn off the lights");
    }
}

function petMeMessage() {
    if (myTamagotchi.bored > 7) {
        $(".bored").append(" Pet Me Now");
    }
}

$(".feed").on("click", (e) => {
    feedMe();
})
$(".light").on("click", (e) => {

    restMe();
})

$(".play").on("click", (e) => {

    petMe();
})


$('body').on('click', (e) => {
    $(".hunger").text("Hunger: " + myTamagotchi.hunger);
});

$('body').on('click', (e) => {
    $(".sleepiness").text("Sleepiness: " + myTamagotchi.sleepiness);
});

$('body').on('click', (e) => {
    $(".bored").text("Bored: " + myTamagotchi.bored);
});

setTimeout(() => {
    
}, 1000);

function petDead() {
    if (myTamagotchi.hunger > 9 || myTamagotchi.sleepiness > 9 || myTamagotchi.bored > 9) {
        //$(".image2").append("Your pet died");
        clearInterval(hungerIncreases);
        clearInterval(sleepIncreases);
        clearInterval(boreIncreases);
        $(".image2").hide();
        $(".image3").show();
        setTimeout(function(){ alert("Your Pet Died"); }, 300);

    }
}



function startGame() {
    alert("Dont'l let your pet Die")
}

// $(".start").click(function (e) {
//   startGame();
//     $(".start").hide();
//     sleepLevel();
//     boredLevel();
//     hungerLevel();
     
    
// })

animateGif(); 
function animateGif() {
    $(".image2").velocity({
        translateX: [-400, 100]
    },


        {
            duration: 40000,
            delay: 0,
            easing: "linear",
            complate: animateGif,
            loop: true
        })
}




