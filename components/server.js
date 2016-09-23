/*******************************************************
 * Server Component Entry Point
 *
 * This exports a function, which takes the application config and returns
 * an Express middleware handle to render the application using React-Router
 ******************************************************/
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import routes from './routes';

/***************************************************
 * @param title - title we want to render
 * @param content - content we want to pass in
 * @returns {string} of content to render in browser
 **************************************************/
function htmlTemplate(title, content){
    return(
        `<!doctype html>
        <html lang="en">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=EDGE">
                <meta httpEquiv="Content-type" content="text/html;charset=utf-8">
                <meta name="keywords" content="Acca, Accumulator, Bets">
                <meta name="description" content="I am an accumulator betting predictor">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                <link rel="stylesheet" href="/bundle.css">
                <title>${title}</title>
            </head>
            <body>
                <div id="content">${content}</div>
                <script type="text/javascript" src="/app.js"></script>
            </body>
        </html>`
    )
}

export default () => {
    return (req, res) => {
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                // You can also check renderProps.components or renderProps.routes for
                // your "not found" component or route respectively, and send a 404 as
                // below, if you're using a catch-all route.
                const content = renderToString(<RouterContext {...renderProps} />);
                res.status(200).send(htmlTemplate('Film Finder', content));
            } else {
                res.status(404).send(htmlTemplate('Film Finder', 'NOT FOUND'));
            }
        })
    }
}