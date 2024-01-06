<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 -->


# My Space
## Steps:
* Create a new folder in src named as context and in that create a file names as userContext.js then write 
```javascript
import React from "react";

const userContext = React.createContext();

export default userContext;
```
* In that make another file as userContextProvider.jsx
```javascript
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
```
* To get the access of user context
    * Modify the app.jsx
    ```JavaScript XML.
    import "./App.css";
    import UserContextProvider from "./context/userContextProvider";

    function App() {
    return (
        <UserContextProvider>
        <h1>React</h1>
        </UserContextProvider>
    );
    }

    export default App;
    ```

    * Create another folder components And two files in them
    <br>Login.jsx
    ```JavaScript XML
        import React, {useState, useContext} from 'react'
    import UserContext from '../context/UserContext'

    function Login() {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const {setUser} = useContext(UserContext)

        const handleSubmit = (e) => {
            e.preventDefault()
            setUser({username, password})
        }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            placeholder='username'  />
            {" "}
            <input type='text' 
            value={password}
            onChange={(e) => setPassword(e.target.value) }
            placeholder='password'  />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
    }

    export default Login
    ```
    Profile.jsx
    ```JavaScript XML
    import React, {useContext} from 'react'
    import UserContext from '../context/UserContext'

    function Profile() {
        const {user} = useContext(UserContext)
        
        if (!user) return <div>please login</div>

        return <div>Welcome {user.username}</div>
    }

    export default Profile
    ```

    * Modify app.jsx
    ```JavaScript XML
    import "./App.css";
    import Login from "./components/Login";
    import Profile from "./components/Profile";
    import UserContextProvider from "./context/UserContextProvider";

    function App() {
    return (
        <UserContextProvider>
        <h1>React</h1>
        <Login />
        <Profile />
        </UserContextProvider>
    );
    }

    export default App;

    ```