import 'firebase/auth';
import AuthService from "../AuthenticationInterface";
import app from "../../../config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, User as FirebaseUser, updateProfile } from 'firebase/auth';
import {User} from "../../../types/User";
const auth = getAuth(app);


const FirebaseAuthService: AuthService = {
    async login(email: string, password: string) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {
            uid: userCredential.user.uid,
            name: userCredential.user.displayName || ''
        };
    },

    async register(email: string, name:string, password: string) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredential.user) {
            await updateProfile(userCredential.user, {
                displayName: name
            });
        }
        return {
            uid: userCredential.user.uid,
            name: userCredential.user.displayName || ''
        };
    },

    async logout() {
        await signOut(auth);
    },

    onAuthStateChanged(callback: (user: User | null) => void) {
        return onAuthStateChanged(auth, (firebaseUser : FirebaseUser | null) => {
            if (firebaseUser) {
                callback({
                    uid: firebaseUser.uid,
                    name: firebaseUser.displayName || ''
                });
            } else {
                callback(null);
            }
        });
    }
}

export default FirebaseAuthService;
