/**
 * Contains the miscellaneous route handlers.
 * @author Zakariyah Ali <https://github.com/alibaba00101>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
