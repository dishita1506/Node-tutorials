const Home = require("../models/home");
const Fav = require("../models/fav");


exports.homepageController = (req, res, next) => {
    Home.fetchAll((houseRegistered) => {
        res.render("store/home", { houseRegistered, pageTitle: "Welcome to home page" });
    });
}

exports.getBookingsController = (req, res) => {

    res.render("store/bookings", { pageTitle: "Welcome to bookings page" });
}
exports.getFavroutieListController = (req, res) => {
    Fav.getFav(fav => {
        Home.fetchAll((houseRegistered) => {
            const favHome = houseRegistered.filter(home => {
                return fav.includes(home.id);

            })
            res.render("store/fav-list", { pageTitle: "Welcome to Fav list page", houseRegistered: favHome });
        })
    })
}
exports.postFavroutieListController = (req, res) => {
    console.log("fav added", req.body);
    Fav.addToFav(req.body.id, err => {
        if (err) {
            console.log("error while marking fav", err)
        }
        res.redirect("/user/fav-list")
    })
}
exports.getHomeIndexController = (req, res) => {

    res.render("store/index", { pageTitle: "Welcome to index page" });
}
exports.getHomeByIdController = (req, res) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, home => {
        if (!home) {
            console.log("Home not found");
            res.redirect("/user");
        }
        else {
            console.log("home details are :", home);
            res.render("store/home-detail", {
                pageTitle: "Home Detail page",
                id: homeId,
                house: home

            });
        }

    })
}
exports.postDeleteFavController = (req, res) => {
    const { id } = req.body;
    console.log("id of fav to be delted", id)
    Fav.deleteFav(id, () => {
        res.redirect("/user/fav-list")
    })

}
exports.notFoundController = (req, res, next) => {
    res.render("404", { pageTitle: "404 not found" })
}