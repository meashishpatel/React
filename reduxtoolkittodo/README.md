# My Space
## To use redux toolkit you need to install that first
> npm install @reduxjs/toolkit

> npm install react-redux

## Make a folder app and in that make a file store.js
```javascript
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({})
```

## We will mainly learn about 
- Store
- Reducers
- useSelector
- useDispatch
> Dispatch uses reducer to change tha value in store


## Redux toolkit is a type of wiring so that react and redux can talk to each other
- Always start by making store, ONE APPLICATION CAN HAVE ONLY 1 STORE (that is also called as the single source of truth)
- Features are called as slice