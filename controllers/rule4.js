module.exports = {
  index,
};

function index(req, res, next) {
  res.render('rule4/index', { title: 'Rule 4' });
}
