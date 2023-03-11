const controller = {}
const title = 'ticketinfo';


controller.showlist = (req, res) => {
    res.render('Pages/ticketinfo',{title});
}

module.exports = controller