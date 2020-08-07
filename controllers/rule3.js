module.exports = {
  index,
};

function index(req, res, next) {
  res.render('rule3/index', { title: 'Rule 3' });
}
