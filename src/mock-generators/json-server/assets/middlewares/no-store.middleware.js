/**
 * This middleware force all petitions to "GET", so the "POST/PUT/ANYTHING" will not rewrite your data
 * Useful if the API does not apply at 100% of the REST API standards
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    req.method = 'GET';
  }
  next();
};
