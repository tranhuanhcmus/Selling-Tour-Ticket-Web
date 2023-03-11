const controller = {}
const title = 'QNA';


controller.showlist = (req, res) => {
    res.render('Pages/qna',{title});
}

module.exports = controller