module.exports = {
  index,
};

function index(req, res, next) {
  res.render('rule2/index', { title: 'Rule 2' });
}
