import signUpUser from "./4-user-promise.js" 
import  uploadPhoto from "./5-photo-reject.js"


 const handleProfileSignup = ((firstName, lastName, fileName)=> {
    return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]);
})
export default handleProfileSignup