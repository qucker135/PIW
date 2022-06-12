import { auth, firestore } from "./init";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
    getAuth
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();
export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                 name: user.displayName,
                 authProvider: "google",
                 email: user.email,
                 roles: ["admin", "doctor"]
             });
         }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

const githubProvider = new GithubAuthProvider();
export const logInWithGithub = async () => {
    try {
        const response = await signInWithPopup(auth, githubProvider);
        const user = response.user;
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                 name: user.displayName,
                 authProvider: "github",
                 email: user.email,
                 roles: ["admin", "doctor"]
             });
         }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};



export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: name,
                authProvider: "emailpassword",
                email: user.email
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};



export const logout = () => {
    signOut(auth);
};



 export const logInWithEmailAndPassword = async (email, password) => {
     try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        console.log(user);
        console.log(user.uid);
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( docs.exists()) {
                console.log(docs);
                console.log(docs);
                console.log(docs._document);
                console.log(docs._document.data.value.mapValue.fields.name.stringValue);
                /*
                const auth = getAuth();
                updateProfile(auth.currentUser, {
                    displayName: docs._document.data.value.mapValue.fields.name.stringValue
                })
                .then(()=>{
                    console.log("Name successfully updated!");
                })
                .catch(()=>{
                    console.log("Error updating name");
                });
                */
                user.displayName = docs._document.data.value.mapValue.fields.name.stringValue;
        }
        user.displayName = docs._document.data.value.mapValue.fields.name.stringValue;
     } catch (err) {
         console.error(err);
         alert(err.message);
     }
     };