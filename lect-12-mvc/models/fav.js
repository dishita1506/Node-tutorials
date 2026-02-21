const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const FavDataPath = path.join(rootDir, "data", "fav.json");

module.exports = class Fav {

    static addToFav(homeId, callback) {

        fs.readFile(FavDataPath, (err, data) => {

            let fav = [];

            if (!err && data.length > 0) {
                fav = JSON.parse(data);
            }

            if (fav.includes(homeId)) {
                return callback("Home already marked as favourite");
            }

            fav.push(homeId);

            fs.writeFile(FavDataPath, JSON.stringify(fav), (err) => {
                callback(err ? "Error saving favourite" : null);
            });

        });
    }

    static getFav(callback) {
        fs.readFile(FavDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        });
    }

    static deleteFav(id, callback) {
        fs.readFile(FavDataPath, (err, data) => {
            let fav = [];
            if (!err) {
                fav = JSON.parse(data);
            }
            const updatedFav = fav.filter((homeId) => {
                return homeId != id;
            })
            fs.writeFile(FavDataPath, JSON.stringify(updatedFav), (err) => {
                callback(err ? "error delteing fav" : null);
            })
        })
    }
};