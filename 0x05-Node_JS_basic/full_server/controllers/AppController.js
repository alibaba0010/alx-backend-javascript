/**
 * Contains the miscellaneous route handlers.
 * @author Oyedele Bolaji <https://github.com/Bolaji5821>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
