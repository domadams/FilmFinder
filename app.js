/*******************************************************
 * Main Application
 * Exported function returns an instantiated Express
 * Application with middleware providing:
 * - Static File Routing
 * - Router - This provides a separate avenue for API / HTML response handlers
 ******************************************************/
import express from 'express';
import { join as joinPath } from 'path';
import helmet from 'helmet';
import router from './components/server';

export default () => express()
    .use(express.static(joinPath(__dirname, 'public')))
    .use(helmet())
    .use(router());