/* =========================
   MOVIE DATA
========================= */

const movies = [

    {
        title: "Spider-Man: Brand New Day",
        poster: "assets/posters/spiderman.jpg",
        video: "assets/videos/movie-name.mp4",
        rating: "8.5",
        year: "2026",
        genre: "Action, Adventure, Superhero",

        // Add your legally hosted/owned video file here
        video: ""
    },


    {
        title: "Dhurandhar",
        poster: "assets/posters/dhurandhar.jpg",
        video: "assets/videos/movie-name.mp4",
        rating: "8.2",
        year: "2026",
        genre: "Action, Thriller",
        video: ""
    },


    {
        title: "Dhoom Dhaam",
        poster: "assets/posters/dhoomdhaam.jpg",
        video: "assets/videos/movie-name.mp4",
        rating: "7.5",
        year: "2026",
        genre: "Comedy, Adventure",
        video: ""
    },


    {
        title: "Hail Mary",
        poster: "assets/posters/hailmary.jpg",
        video: "assets/videos/movie-name.mp4",
        rating: "7.8",
        year: "2026",
        genre: "Drama",
        video: ""
    },


    {
        title: "Super Mario Galaxy Movie",
        poster: "assets/posters/mario.jpg",
        video: "assets/videos/movie-name.mp4",
        rating: "8.0",
        year: "2026",
        genre: "Animation, Adventure",
        video: ""
    },


    {
        title: "Toy Story 5",
        poster: "assets/posters/toystory5.jpg",
        video: "assets/videos/Bluelocknagimovie.mp4",
        rating: "8.1",
        year: "2026",
        genre: "Animation, Comedy",
        video: ""
    },


    {
        title: "The Minecraft Movie",
        poster: "assets/posters/TheMinecraftMovie.jpg",
        video: "assets/videos/TheMinecraftMovie.mp4",
        rating: "8.4",
        year: "2026",
        genre: "Adventure, Drama",
        video: ""
    }
    

];


/* =========================
   MOVIE GRID
========================= */

const movieGrid =
    document.getElementById("movieGrid");


function displayMovies(movieList) {

    if (!movieGrid) return;


    movieGrid.innerHTML = "";


    movieList.forEach(function (movie) {


        const movieCard =
            document.createElement("div");


        movieCard.className =
            "movie-card";


        movieCard.innerHTML = `

            <img
                src="${movie.poster}"
                alt="${movie.title}"
            >


            <div class="movie-info">


                <h3 class="movie-title">
                    ${movie.title}
                </h3>


                <div class="movie-meta">


                    <div class="movie-rating">
                        <span>⭐</span>
                        ${movie.rating}
                    </div>


                    <div>
                        ${movie.year}
                    </div>


                </div>


                <div class="movie-genre">
                    ${movie.genre}
                </div>


            </div>

        `;


        /* OPEN MOVIE DETAILS */

        movieCard.addEventListener(
            "click",
            function () {

                const movieData =
                    encodeURIComponent(
                        JSON.stringify(movie)
                    );


                window.location.href =
                    "movie.html?movie=" +
                    movieData;

            }
        );


        movieGrid.appendChild(
            movieCard
        );

    });


}


/* SHOW MOVIES */

displayMovies(movies);


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("search");


if (searchInput) {


    searchInput.addEventListener(
        "input",
        function () {


            const searchValue =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const filteredMovies =
                movies.filter(
                    function (movie) {

                        return (

                            movie.title
                                .toLowerCase()
                                .includes(
                                    searchValue
                                )

                            ||

                            movie.genre
                                .toLowerCase()
                                .includes(
                                    searchValue
                                )

                        );

                    }
                );


            displayMovies(
                filteredMovies
            );

        }
    );

}


/* =========================
   HERO POSTER SLIDER
========================= */

const slides =
    document.querySelectorAll(
        ".slide"
    );


const prevButton =
    document.querySelector(
        ".prev-btn"
    );


const nextButton =
    document.querySelector(
        ".next-btn"
    );


const dotsContainer =
    document.querySelector(
        ".slider-dots"
    );


let currentSlide = 0;

let sliderInterval;


/* CREATE DOTS */

function createDots() {


    if (!dotsContainer) return;


    slides.forEach(
        function (slide, index) {


            const dot =
                document.createElement(
                    "div"
                );


            dot.className =
                "slider-dot";


            if (index === 0) {

                dot.classList.add(
                    "active"
                );

            }


            dot.addEventListener(
                "click",
                function () {

                    showSlide(
                        index
                    );


                    restartSlider();

                }
            );


            dotsContainer.appendChild(
                dot
            );

        }
    );

}


createDots();


/* SHOW SLIDE */

function showSlide(index) {


    if (slides.length === 0) return;


    const dots =
        document.querySelectorAll(
            ".slider-dot"
        );


    slides.forEach(
        function (slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    dots.forEach(
        function (dot) {

            dot.classList.remove(
                "active"
            );

        }
    );


    if (index >= slides.length) {

        currentSlide = 0;

    }

    else if (index < 0) {

        currentSlide =
            slides.length - 1;

    }

    else {

        currentSlide = index;

    }


    slides[
        currentSlide
    ].classList.add(
        "active"
    );


    if (dots[currentSlide]) {

        dots[
            currentSlide
        ].classList.add(
            "active"
        );

    }

}


/* NEXT */

function nextSlide() {

    showSlide(
        currentSlide + 1
    );

}


/* PREVIOUS */

function previousSlide() {

    showSlide(
        currentSlide - 1
    );

}


/* BUTTON EVENTS */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            nextSlide();

            restartSlider();

        }
    );

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            previousSlide();

            restartSlider();

        }
    );

}


/* AUTO SLIDER */

function startSlider() {


    if (slides.length === 0) return;


    sliderInterval =
        setInterval(
            function () {

                nextSlide();

            },
            5000
        );

}


function restartSlider() {


    clearInterval(
        sliderInterval
    );


    startSlider();

}


startSlider();


/* =========================
   SIGN IN SYSTEM
========================= */

const signInBtn =
    document.getElementById(
        "signInBtn"
    );


const loginModal =
    document.getElementById(
        "loginModal"
    );


const closeLogin =
    document.getElementById(
        "closeLogin"
    );


const loginForm =
    document.getElementById(
        "loginForm"
    );


const loginMessage =
    document.getElementById(
        "loginMessage"
    );


/* OPEN LOGIN */

if (
    signInBtn &&
    loginModal
) {

    signInBtn.addEventListener(
        "click",
        function () {

            loginModal.classList.add(
                "show"
            );

        }
    );

}


/* CLOSE LOGIN */

if (
    closeLogin &&
    loginModal
) {

    closeLogin.addEventListener(
        "click",
        function () {

            loginModal.classList.remove(
                "show"
            );

        }
    );

}


/* CLOSE WHEN CLICKING OUTSIDE */

if (loginModal) {


    loginModal.addEventListener(
        "click",
        function (event) {


            if (
                event.target ===
                loginModal
            ) {

                loginModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* LOGIN SUBMIT */

if (loginForm) {


    loginForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "loginEmail"
                    )
                    .value
                    .trim();


            const password =
                document
                    .getElementById(
                        "loginPassword"
                    )
                    .value;


            if (
                email &&
                password
            ) {


                localStorage.setItem(
                    "virtualTheaterUser",
                    email
                );


                if (loginMessage) {

                    loginMessage.textContent =
                        "Signed in successfully!";

                }


                setTimeout(
                    function () {


                        loginModal.classList.remove(
                            "show"
                        );


                        updateAccountButton();


                        loginForm.reset();


                    },
                    800
                );

            }


        }
    );

}


/* UPDATE ACCOUNT BUTTON */

function updateAccountButton() {


    if (!signInBtn) return;


    const savedUser =
        localStorage.getItem(
            "virtualTheaterUser"
        );


    if (savedUser) {

        signInBtn.textContent =
            "👤 Account";

    }

    else {

        signInBtn.textContent =
            "Sign In";

    }

}


/* LOAD ACCOUNT STATUS */

updateAccountButton();


/* =========================
   ESC KEY CLOSES LOGIN
========================= */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape" &&
            loginModal
        ) {

            loginModal.classList.remove(
                "show"
            );

        }

    }
);