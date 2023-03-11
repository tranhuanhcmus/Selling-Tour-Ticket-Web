const controller = {}
const title = 'Booking-details';


controller.showlist = (req, res) => {
    res.render('Pages/Booking-details', {title});
}

module.exports = controller