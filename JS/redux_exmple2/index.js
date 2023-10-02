import { attach } from "./store.js";
import App from "./component/App.js";

// attach co doi so la component, va root
attach(App, document.getElementById('root'))