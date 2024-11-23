import page from "../lib/page.js";
import createView from "./views/createView.js";
import dashboardView from "./views/dashboardView.js";
import detailsView from "./views/detailsView.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
import registerView from "./views/registerView.js";



page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/details', detailsView);
page('/details', detailsView);


page();