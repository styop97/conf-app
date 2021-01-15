import logo from '../logo.svg';
import NavBar from "./NavBar";
import Home from "./Home";
import Agenda from "./Agenda";
import MainLayout from "../layout/MainLayout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Speakers from "./Speakers";

function App() {
    return (
        <Router>
            <Route exact path="/">
                <MainLayout category='home'>
                    <Home/>
                </MainLayout>
            </Route>
            <Route exact path="/agenda">
                <MainLayout category='agenda'>
                    <Agenda/>
                </MainLayout>
            </Route>
            <Route exact path="/speakers">
                <MainLayout category='speakers'>
                    <Speakers/>
                </MainLayout>
            </Route>
        </Router>
    );
}

export default App;
