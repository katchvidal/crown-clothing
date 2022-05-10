#   Creating a Ecommer with React

```
    1.  Structure of Folders
    2.  Adding a Sass & Google Fonts
```

##  Routing
```
    -   We implemented react-router to manage the router
    -   https://www8.zippyshare.com/v/3bg8ZWAR/file.html
        <Browser Router> </Browser Router> Wrap Tag
        <Routes>

            <Route path='/' element={ <Home />}></Route>  
            <Route path='/shop' element={ <Shop /> }></Route>  

        </Routes>

        <Outlet />
```

##  Adding Firebase
```
    -   We implemented Firebase to manage the authentication
        -> NPM INSTALL FIREBASE
    -   we starting a crud with firebase ( create, read, update, delete )

    // Initialize Firebase

    const firebaseApp = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    })

    export const auth = getAuth(); 
    export const signInWithGooglePopup = () => signInWithPopup( auth, provider )
    
```

##  Setting a Form
```
    1.  Create a Initial State: defaultFormFields = { displayName: '', email: '', .... }
    2.  Build a Form ->                 
        <label>Display Name</label>
        <input
            type='text'
            onChange={handleChange}
            name='displayName'
            value={displayName}
            required />
    3.  Controlling a Change ( changeHandler Function )
        const handleChange = (e) => {
            const { name, value } = e.target;   -> Destructuring elements ( name, value )
            setformFields({ ...formFields , [name]: value })
        }
```