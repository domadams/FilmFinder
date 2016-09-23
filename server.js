/*******************************************************
 * Server Entry Point
 * Load the server and set it to listen on the port
 * specified in config.
 ******************************************************/
import config from 'config';
import app from './app';

const server = app().listen(
        config.get('port'),
        config.get('host'),
        () => console.log(`FilmFinder started ${JSON.stringify(server.address())}`)
);