
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви передивились?', '');
            while (personalMovieDB.count  == '' || personalMovieDB.count  == null || isNaN(personalMovieDB.count )){
                personalMovieDB.count  = +prompt('Скільки фільмів ви передивились?', '');
            }
        },
        rememberMyFilms: function(){
            for (let i = 0; i < 2; i++){
                const a = prompt('Один із останніх фільмів які дивились?',''),
                      b = prompt('Яку дасте оцінку?','');
                      if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                      } else {
                        console.log('error');
                        i--;
                      }
                }   
             },

             detectorPersonalLevel: function(){
                if(personalMovieDB.count < 10){
                    console.log('Ви дивились доволі мало фільмів!');
                }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                    console.log('Ви чудовий глядач!');
                }else if (personalMovieDB.count > 30){
                    console.log('Вітаю! ви кіноман');
                }else {
                    console.log('Сталась помилка!');
                }
            },
            showMyDB: function(hidden){
                if (!hidden) {
                    console.log(personalMovieDB);
                }
            },

            toggleVisibleMyDB: function() {
                if(personalMovieDB.privat) {
                    personalMovieDB.privat = false;
                } else {
                    personalMovieDB.privat = true;
                }
            },
            writeYourGeneres: function() {
                for(let i = 1; i <= 3; i ++){
                    let genre  = prompt(`Ваш улюблений жанр під номерои ${i}`);
                    if(genre === '' || genre == null){
                        console.log("Ви ввели не коректні дані");
                        i--;
                    }else{ 
                        personalMovieDB.genres[i - 1] = genre;
                    }
                }

                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Улюблений жанр ${i + 1} - це ${item}`);
                });
            }
    };








