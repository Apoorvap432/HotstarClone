let movies = [
   {
      name: "Baaghi2",
      des: "A tough army officer searches for his ex-lover's child, who is kidnapped under mysterious circumstances. However his quest is not easy",
      image: "images/baaghi2.webp" 
   },
   {
      name: "Aashiqana",
      des: " NEW EPISODES MON-SAT. A serial killer sparks the story of uptight Yashvardhan and fiesty Chikki. Plagued by misunderstandingd, how far do they have to go to nab the murderer?",
      image: "images/aashiqana.webp"
   },
   {
      name: "Doctor Strange in the Multiverse of Madness",
      des: "When the multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary",
      image: "images/drst.webp"
   },
   {
      name: "The Adventures of Hatim",
      des: "Hatim, a young prince goes from a regular, uneventful life to becoming a force that saves the world from evil Zargham",
      image: "images/hatim.webp"
   },
   {
      name: "Koffee With Karan",
      des: " With a brand new season exploring gripping inside scoops, Karan Johar returns with your favourite celebs on July 7 to find out what's brewing in B-Town",
      image: "images/koffie with karan.jpg"
   },
   {
      name: "Saath Nibhana Saathiya 2",
      des: " A few years after Anant's death, Gehna has completely turned her life around. In this new journey, will she finally find her perfect partner?",
      image: "images/sns2.webp"
   },
   {
      name: "Yeh Hai CHahatein",
      des: "Devastated, Preesha and Rudraksh part ways after losing Saaransh. What happens when destiny brings them together again?",
      image: "images/yhc.webp"
   }
];
const caraousel = document.querySelector('.caraousel');
let sliders = [];

let slideIndex = 0;  // will use this to track the current slide 
const createSlide = () => {
    if(slideIndex >= movies.length)
    {
        slideIndex = 0;
    }

    // create DOM elements 
    let slide = document.createElement('div'); 
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all the elements 
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des)); 
    content.appendChild(h1); 
    content.appendChild(p);
    slide.appendChild(content); // this is missed line 
    slide.appendChild(imgElement);
    
    caraousel.appendChild(slide);

    // ssetting up the images 
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting element class names
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    // empty array m push kr do ye sb 
    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

};

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);


// video cardsd 

const videoCards= [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    } )
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })
});

 