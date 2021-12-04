import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import Login from './containers/Login'
import Profile from './containers/Profile'
import Character from './containers/CourseStudent/Character'
import Signup from './containers/Signup'
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
import CourseMonsters from './containers/CourseStudent/CourseMonsters'
import CourseHabits from './containers/CourseStudent/CourseHabits'
import CourseShop from './containers/CourseStudent/CourseShop'
import CourseAddTask from './containers/CourseAdmin/CourseAddTask'
import CourseAdminShop from './containers/CourseAdmin/CourseAdminShop'
import CourseStats from './containers/CourseAdmin/CourseStats'
import CourseTaskList from './containers/CourseAdmin/CourseTaskList'
import ClosedQuestion from './containers/AddTask/ClosedQuestion'
import GroupQuiz from './containers/AddTask/GroupQuiz'
import HabitQuestion from './containers/AddTask/HabitQuestion'
import OpenQuestion from './containers/AddTask/OpenQuestion'
import MonsterPage from './containers/MonsterPage'
import MonsterPageForm from './containers/MonsterPageForm'
import MonsterAdminPage from './containers/MonsterAdminPage'

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                        exact
                        path="/course/:course_id/add-closed-question"
                        component={ClosedQuestion}
                    />
                    <Route
                        exact
                        path="/course/:course_id/add-group-quiz"
                        component={GroupQuiz}
                    />
                    <Route
                        exact
                        path="/course/:course_id/add-habit-question"
                        component={HabitQuestion}
                    />
                    <Route
                        exact
                        path="/course/:course_id/add-open-question"
                        component={OpenQuestion}
                    />
                    <Route
                        exact
                        path="/course/:course_id/tasklist"
                        component={CourseTaskList}
                    />
                    <Route
                        exact
                        path="/course/:course_id/addtask"
                        component={CourseAddTask}
                    />
                    <Route
                        exact
                        path="/course/:course_id/statistics"
                        component={CourseStats}
                    />
                    <Route
                        exact
                        path="/course/:course_id/adminshop"
                        component={CourseAdminShop}
                    />
                    <Route
                        exact
                        path="/course/:course_id/character"
                        component={Character}
                    />
                    <Route
                        exact
                        path="/course/:course_id/monsters"
                        component={CourseMonsters}
                    />
                    <Route
                        exact
                        path="/course/:course_id/habits"
                        component={CourseHabits}
                    />
                    <Route
                        exact
                        path="/course/:id/shop"
                        component={CourseShop}
                    />
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
                    <Route
                        exact
                        path="/course/:course_id/monsters/:monster_id"
                        component={MonsterPage}
                    />
                    <Route
                        exact
                        path="/course/:course_id/monsters/:monster_id/submit"
                        component={MonsterPageForm}
                    />
                    <Route
                        exact
                        path="/course/:course_id/monsters/:monster_id/admin"
                        component={MonsterAdminPage}
                    />
                </Switch>
            </Layout>
        </Router>
    </Provider>
)

export default App
