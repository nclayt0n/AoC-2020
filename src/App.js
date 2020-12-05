import React from 'react';
import classnames from 'classnames';
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom';

import HomePage from './pages/Home';
import DayOne from './pages/DayOne';
import DayTwo from './pages/DayTwo';
import DayThree from './pages/DayThree';
import DayFour from './pages/DayFour';
import DayFive from './pages/DayFive';


import { FaChevronLeft,FaTree,FaHome } from 'react-icons/fa';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    const medium = window.matchMedia('(max-width: 768px)');
    const [collapseSidebar, setCollapseSidebar] = React.useState(medium.matches);
    const location = useLocation();

    const NavLink = ({ to, className, activeClass, activeWhenExact = true, ...props }) => {
        let match = useRouteMatch({
            path: to,
            exact: activeWhenExact
        });

        return (
            <Link
                className={classnames(className, {
                    [activeClass]: match
                })}
                to={to}
                onClick={() => {
                    if (medium.matches) {
                        setCollapseSidebar(true);
                    }
                }}
                {...props}
            />
        );
    };

    return (
        <div className="site-row">
            <nav
                className={classnames('sidebar', {
                    'sidebar-slim': collapseSidebar
                })}
            >
                <div className="sidebar-wrapper">
                    <div className="sidebar-header">
                        <button className="btn collapse-button" onClick={() => setCollapseSidebar(!collapseSidebar)}>
                            <FaChevronLeft />
                        </button>
                    </div>

                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/">
                                <FaHome />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/day-one">
                                <FaTree />
                                <span>Day One</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/day-two">
                                <FaTree />
                                <span>Day Two</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/day-three">
                                <FaTree />
                                <span>Day Three</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/day-four">
                                <FaTree />
                                <span>Day Four</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClass="active" to="/day-five">
                                <FaTree />
                                <span>Day Five</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-wrapper px-4 px-md-12 py-8">
                <main className="page" role="main">
                    <Switch>
                        <Route exact path="/">
                            <ScrollToTop />
                            <HomePage />
                        </Route>
                        <Route path="/day-one">
                            <ScrollToTop />
                            <DayOne />
                        </Route>
                        <Route path="/day-two">
                            <ScrollToTop />
                            <DayTwo />
                        </Route>
                        <Route path="/day-three">
                            <ScrollToTop />
                            <DayThree />
                        </Route>
                        <Route path="/day-four">
                            <ScrollToTop />
                            <DayFour />
                        </Route>
                        <Route path="/day-five">
                            <ScrollToTop />
                            <DayFive />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default App;
