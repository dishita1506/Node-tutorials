const Home = require("../models/home");


exports.addHomeGetController = (req, res) => {
    res.render("host/edit-home", { pageTitle: "Page to add home!", editing: false })
}

exports.addHomePostController = (req, res) => {
    const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.img)
    home.save();

    // console.log("registered house:", houseRegistered);

    res.render("host/home-added", {
        pageTitle: "Home added successfully!",
    });
}
exports.hostHomeListController = (req, res) => {
    Home.fetchAll((houseRegistered) => {
        res.render("host/host-home-list", { houseRegistered, pageTitle: "Welcome to home page" });
    });
}

exports.getEditHomeController = (req, res) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === "true";

    if (!editing) {
        return res.redirect("/host-home-list");
    }

    Home.findById(homeId, (home) => {
        if (!home) {
            console.log("home not found for editing")
            return res.redirect("/host/host-home-list");
        }

        res.render("host/edit-home", {
            pageTitle: "Edit Your Home!",
            editing: editing,
            home
        });
    });
};

exports.postEditHomeController = (req, res) => {
    const { id, houseName, price, location, img } = req.body;
    const home = new Home(houseName, price, location, img);
    home.id = id;
    home.save();
    res.redirect("/host/host-home-list");
}
exports.postDeleteHomeController = (req, res) => {
    console.log("i m in delete controller")
    const { id } = req.body;
    console.log("Delete ID:", id);
    Home.deleteById(id, () => {
        res.redirect("/host/host-home-list");
    });
};