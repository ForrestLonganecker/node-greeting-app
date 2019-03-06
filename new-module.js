exports.add = (a, b) => {
    console.log(a + b);
};

exports.currentDate = () => {
    var d = new Date().toDateString();
    console.log(d);
};