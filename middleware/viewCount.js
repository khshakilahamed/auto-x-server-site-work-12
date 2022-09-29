let count = 0;

const viewCount = (req, res, next) => {
    count++;
    console.log(count);

    // res.send("Bikes Found");
    next();
};

module.exports = viewCount;