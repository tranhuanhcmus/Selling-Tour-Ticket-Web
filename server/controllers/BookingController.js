const controller = {}
const title = 'BookingPage';


controller.showlist = (req, res) => {
    res.render('Pages/Booking',{title});
}

module.exports = controller