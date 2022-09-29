const bikesController = require("../../controllers/bikes.controller");

const express = require("express");
const viewCount = require("../../middleware/viewCount");
const limiter = require("../../middleware/limiter");
const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("bikes Found");
// });

// router.post("/", (req, res) => {
//     res.send("bikes added");
// });




router.route('/')
    /** 
        * @api {get} /bikes all bikes
        * @apiDescription Get all the bikes
        * @apiPermission admin
        * 
        * @apiHeader {String} Authorization User's access token
        * 
        * @apiParam {Number{1-}}        [page=1] List page
        * @apiParam {Number{1-100}}     [limit=10] Users per page
        * 
        * @apiSuccess {Object[]} all the bikes.
        * 
        * @apiError (Unauthorized 401)    Unauthorize      Only authenticated users can access the data
        * @apiError (Forbidden 403)       Forbidden        Only admins can access the data 
    */
   .get(bikesController.getAllBikes)
    
    /** 
        * @api {Post} /bikes save a bike
        * @apiDescription add a bike
        * @apiPermission admin
        * 
        * @apiHeader {String} Authorization User's access token
        * 
        * @apiParam {Number{1-}}        [page=1] List page
        * @apiParam {Number{1-100}}     [limit=10] Users per page
        * 
        * @apiSuccess {Object[]} add a bike.
        * 
        * @apiError (Unauthorized 401)    Unauthorize      Only authenticated users can access the data
        * @apiError (Forbidden 403)       Forbidden        Only admins can access the data 
    */
    .post(bikesController.addABike);


router.route("/:id").get(viewCount, limiter, bikesController.getBikeDetails);



module.exports = router;