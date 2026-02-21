let registeredHomes = [];
const fs = require("fs");
const path = require("path");
const rootDir = require("..//utils/pathUtil")
const homeDataPath = path.join(rootDir, 'data', 'home.json');
module.exports = class Home {
    constructor(houseName, price, location, img) {
        this.houseName = houseName,
            this.price = price,
            this.location = location,
            this.img = img
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            if (this.id) { //edit home 
                registeredHomes = registeredHomes.map(home => {
                    return home.id === this.id ? this : home
                })
            }
            else { //add-home
                this.id = Math.random().toString();
                registeredHomes.push(this);
            }
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
                console.log("error in writing data in file", err)
            })
        })
    }


    static fetchAll(callback) {
        fs.readFile(homeDataPath, (err, data) => {
            console.log("data in file :", data);
            console.log("error in writing data in file", err)
            if (!err) {
                callback(JSON.parse(data));
            }
            else {
                callback([]);
            }
        })

    }
    static findById(homeID, callback) {
        this.fetchAll(homes => {
            const homeFound = homes.find(home => home.id === homeID)
            callback(homeFound);
        })
    }

    static deleteById(homeId, callback) {
        Home.fetchAll((homes) => {
            const updatedHomes = homes.filter(home => home.id !== homeId);

            fs.writeFile(homeDataPath, JSON.stringify(updatedHomes), (err) => {
                if (err) console.log(err);
                callback();
            });
        });
    }
}