import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyCz44WpvZnpYXuR_WwEeRm754szKltvW4M",

    authDomain: "crown-db-5314b.firebaseapp.com",

    projectId: "crown-db-5314b",

    storageBucket: "crown-db-5314b.appspot.com",

    messagingSenderId: "942266842902",

    appId: "1:942266842902:web:08386b2a0bca0805eb9a37"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)




//  FireStore
export const signInWithGoogleRedirect = () => signInWithRedirect( auth, GoogleProvider )
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    if ( !userAuth ) return; // If we not recived userAuth -> Return nothing;
    const userDocRef = doc(db, 'users', userAuth.uid)  //  1. Conexion, 2. 'Documents', 3. 'Collection'
    const userSnapshot = await getDoc(userDocRef)   //  Bussca si existe la Referencia en base de datos
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating a user', error);
        }
    }

    //  Check if User data exists
    return userDocRef;

}

export const createAuthUserEmailPassword = async ( email, password ) => {
    if ( !email || !password ) return; // If we not recived email & password return nothing;
    return await createUserWithEmailAndPassword( auth, email, password )
 }


export const signInWithEmailAndPasswordK = async ( email, password ) => {
    if( !email || !password ) return;
    return await signInWithEmailAndPassword(auth, email, password)

 }