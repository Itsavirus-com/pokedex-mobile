## Pokedex

### Getting Started

Install the dependencies:

```sh
yarn install
```

Additional for iOS setup (Skip this if you only setup the project for Android)

```sh
yarn pod-install
```

### Run server and start the app

Before running the server, make sure to change the API_URL in the env.development.js file,
change the value to your laptop IP Address. Example: http://192.168.1.XXX:3000

After that your can run the server:

```sh
yarn start
```

And then run the app to device:

```sh
Android: yarn android
iOS: yarn ios
```

The script above will start the app on selected emulator or connected device that you targeted.
NOTE: If you run the in real device, make sure it connected to the same network as your laptop

### API

#### Get all pokemons

```sh
http://YOUR_LAPTOP_IP_ADDRESS/pokemons
```

#### Get pokemons with pagination

```sh
http://YOUR_LAPTOP_IP_ADDRESS/pokemons?_page=7&_limit=20
```

#### Get a specific pokemon

```sh
http://YOUR_LAPTOP_IP_ADDRESS/:pokemon-id
example: http://YOUR_LAPTOP_IP_ADDRESS/100
```
