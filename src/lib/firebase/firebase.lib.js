import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'


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

export const SignOutpK = async() => {
    return await signOut( auth )
}

export const onAuthStateChnagedListerK = ( callback ) => onAuthStateChanged(auth, callback )

export const AddCollectionAndMethods = async( collectionKey, objectsToAdd, field   ) => { 
    const collectionRef = collection( db, collectionKey );
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc( collectionRef , object[field].toLowerCase());
        batch.set( docRef, object )
    })

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query( collectionRef )
    const querySnapShot = await getDocs( q )
    const categoryMap = querySnapShot.docs.reduce(( acc, docSnapShot ) => {
        const { title, items } = docSnapShot.data()
        acc[title.toLowerCase()] = items
        return acc;
    }, {})

    return categoryMap;
}

/**
 * next: callback
 * error: errorcallback
 * complete: completecallback
 */