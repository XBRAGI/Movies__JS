
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'Америка': '8.1',
		  'Гарри Поттер': '5'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 15 символов. Если это происходит - 
возвращаем пользователя к вопросам опять *

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл по другому*/


/* Вариант с одним циклом:

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const lastOfMovie = prompt('Один из последних просмотренных фильмов?');
	const scoreOfMovie = prompt('На сколько оцените его?');
	
	if (lastOfMovie != '' && scoreOfMovie != '' && lastOfMovie != null && scoreOfMovie != null && lastOfMovie.length < 50) {
		personalMovieDB.movies[lastOfMovie] = scoreOfMovie;
		console.log('Всё получилось');
	} else {
		console.log('Вы не ввели данные');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Ошибка');
}

console.log(personalMovieDB); */


// Вариант с другим циклом:

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let numOfQuestion = 0;

while (numOfQuestion < 2) {
	const lastOfMovie = prompt('Один из последних просмотренных фильмов?');
	const scoreOfMovie = prompt('На сколько оцените его?');
	numOfQuestion = numOfQuestion + 1;
	
	if (lastOfMovie !== '' && scoreOfMovie !== '' && lastOfMovie !== null && scoreOfMovie !== null && lastOfMovie.length < 50) {
		personalMovieDB.movies[lastOfMovie] = scoreOfMovie;
		console.log('Всё получилось');
	} else {
		console.log('Вы не ввели данные');
		numOfQuestion = numOfQuestion - 1;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Ошибка');
}

console.log(personalMovieDB);