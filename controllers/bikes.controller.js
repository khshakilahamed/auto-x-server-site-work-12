module.exports.getAllBikes = (req, res, next) => {
    const {ip, query, params, body, headers} = req;

    console.log(ip, query, params, body, headers);
    
    // res.download(__dirname + '/bikes.controller.js'); 

    // res.json({"name" : "abc"});
    res.redirect("/login");


    // res.send('Got it');
 }


module.exports.addABike = (req, res) => {
    res.send("bikes added");
};


module.exports.getBikeDetails = (req, res) => {
    res.send("Details Found");
}

// module.exports = {
//     getAllBikes,
// };