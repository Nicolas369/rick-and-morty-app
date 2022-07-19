# Rick & Morty App

```
// Note: to enjoy the application more use the full screen of the browser.
```
This is an application made in Angular 13.
Its goal is to show all the Rick & Morty characters, their episodes and planets.

```
Used technology:
  > Angular 13
  > Redux with NGRX
  > RxJS
  > TS
  > SASS
  > HTTP-Interceptor
  > API-REST
```

The Application manages a state of characters, locations and episodes with their respective pages. where an unnecessary query is not made unless the information is not in the store. 
I also implemented an HTTP-Interceptor as a demonstration of where a possible place to put a JWT as authentication for each query would go.

To run the application you need to have Angular CLI and Node.js installed.
To use the application simply clone the repository to your local machine and run the `npm install` and `ng serve` commands in that order.

Enjoy the application. 😃
