# Angular Weather-app

## Description

Mini project for learning TypeScript and Angular7.
I understand this application have a security bug (OWM Api key is public), but this 
project is only to learning Angular.
In this project I don't practise test (among others Unit, Integration, E2E, Functional etc.).

## Stack

* TypeScript3
* Angular7
* Material angular
* Docker

## Install

if you install npm and node (10.15.3)

```sh
cd weather-app
npm install
```

## Run server

### All

Prepare [environments](weather-app/src/environments) (OWM API KEY)

### Developer

```sh
cd weather-app
ng --open
```

### Production

```sh
cd weather-app
npm start
```

## Run server with docker

### Developer

```sh
cd weather-app
ng build
```

### Production

```sh
cd weather-app
npm run-script build
```

### Docker

```sh
cd ../
docker-compose up -d
```

## License

* OpenGPL v3 or later

## Author

* Łukasz Staniszewski < kontakt@lukaszstaniszewski.pl >