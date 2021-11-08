import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Profile from './containers/Profile'
import Signup from './containers/Signup/Signup'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Courses from './containers/Courses'
import Course from './containers/Course'
import CreateCourse from './containers/CreateCourse'

import { Provider } from 'react-redux'
import store from './store'

import Layout from './hocs/Layout'
import './App.css'

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/signup" component={Signup} />
                    <Route
                        exact
                        path="/reset-password"
                        component={ResetPassword}
                    />
                    <Route
                        exact
                        path="/password/reset/confirm/:uid/:token"
                        component={ResetPasswordConfirm}
                    />
                    <Route
                        exact
                        path="/activate/:uid/:token"
                        component={Activate}
                    />
                    <Route exact path="/courses" component={Courses} />
                    <Route
                        exact
                        path="/create_course"
                        component={CreateCourse}
                    />
                    <Route exact path="/course/:id" component={Course} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
)

export default App
