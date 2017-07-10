import * as firebase from 'firebase';
export class AuthService {
    signupUser(email: string, pass: string) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(error => console.log(error))
    }

    signinUser(email: string, pass: string) {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .catch(error => console.log(error))
            .then(response => console.log(response))
    }
}