## Starterkit for a REACT project :rocket:

Features:

- Context API
- Firebase configuration
- Material UI

_Created from react 16.13.1 (08/2020)_

## Usage

to start dev mode use `npm start`

### Context API

- copy `src/scripts/contexts/userContext.js` and paste it in the same folder with a new name (eg. cartContext)
- modify cartContext `initialState` and `reducer`
- import cartContext in `src/scripts/contexts/index.js`
- set the provider using `withContext( App )` (usually in src/index.js)

when you want to use the context

- `import contexts from "..../scripts/contexts";`
- use the hook: `const [cart, dispatcher] = contexts.cart.useContext();` (cart contains the value of the context; dispatcher starts events that trigger the reducer function, which updates the context)

### Firebase configuration

- userContext was configured to detect changes in the user's auth
- `src/scripts/firebase.js` declares which services are needed by the app (auth, firestore, storage, ...)
- modify `.env` to set your firebase API key

### Material UI

- modify `src/scripts/material/theme.js` to set your preferences in the theme (colors, responsiveness, global styles, typo, ...)
