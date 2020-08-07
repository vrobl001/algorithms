module.exports = {
  index,
};

function index(req, res, next) {
  res.render('rule1/index', { title: 'Rule 1' });
}
