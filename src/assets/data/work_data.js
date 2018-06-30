import clickyGame from '../images/work/clicky-game.PNG';
import mongodb from '../images/work/MongoDB-Scraper.PNG';
import yaatra from '../images/work/TravelApp.PNG';
import myreads from '../images/work/myreads.PNG';
import portfolio from '../images/work/react_portfolio.PNG';
import goodtimes from '../images/work/Good-times-source.PNG';

export default [
    {
        name: 'MongoDB - NY Times Scraper',
        info: 'This application was built with bootstrape and MongoDB. It scrapes data from NY Times and returns articles to the DOM.',
        img: mongodb,
        alt: 'MongoDB',
        codeLink: "https://github.com/midstreamer/Mongodb_homework",
        demoLink: "https://git.heroku.com/vast-cove-16118.git"
    },
    {
        name: 'Yaatra - Travel App',
        info: 'This is a travel app built using Google Maps, MySQL database, Node, Materialize, Layerslider.',
        img: yaatra,    
        alt: 'Yaatra',
        codeLink: "https://github.com/midstreamer/TravelApp",
        demoLink: "https://travelappjustdoit.herokuapp.com/"
    },
    {
        name: 'My reads - Book App',
        info: 'This project was built using React. The application searched the books API and returns books that the user can save to their bookshelves',
        img: myreads,
        alt: 'My reads',
        codeLink: "https://github.com/midstreamer/udacityReactApp",
        demoLink: ""
    },
    {   
        name: 'React-Clicky-Game',
        info: 'This is a simple click game built using React.',
        img: clickyGame,
        alt: 'Clicky Game',
        codeLink: "https://github.com/midstreamer/reactHomework",
        demoLink: "https://midstreamer.github.io/reactHomework/"
    },
    {
        name: 'React Portfolio',
        info: 'This is my portfolio built using React, Materialize framework for the design.',
        img: portfolio,
        alt: 'Portfolio',
        codeLink: "",
        demoLink: ""
    },
    {   name: 'Goodtimes Movie Search App',
        info: 'This is a movie search app using using Moviedb API, Youtube API, and NY Times API. The application allows users to return movie reviews and trailers for the movies that they are interested.',
        img: goodtimes,
        alt: 'Goodtimes',
        codeLink: "https://github.com/midstreamer/GoodTimesContentSourcer",
        demoLink: "https://midstreamer.github.io/GoodTimesContentSourcer/"
    },
];