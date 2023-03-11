const controller = {}
const title = 'FindTicked';


controller.showlist = (req, res) => {
    res.render('Pages/findticked', {title});
}

module.exports = controller