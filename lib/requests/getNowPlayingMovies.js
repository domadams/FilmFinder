const movieDB = require('moviedb')("dd9a44e0ed03e924ef9f903947b356cc");

export function getHomeDeliveryData() {
    return new Promise((resolve, reject) => {
        try {
            return resolve(
                movieDB.miscNowPlayingMovies(function(err, res){
                    if(res.results){
                        return res.results;
                    }
                    return null;
                })
            );
        } catch (e) {
            reject(e);
        }
    });
}