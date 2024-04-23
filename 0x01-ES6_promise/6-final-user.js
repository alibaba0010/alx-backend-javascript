import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = ((firstName = '', lastName = '', fileName = '') => Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]));
export default handleProfileSignup;
