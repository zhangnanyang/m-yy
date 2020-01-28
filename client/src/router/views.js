import Login from '../containers/Login';
import Home from '../containers/Home';
import One from '../containers/One';
import Two from '../containers/Two';
import Therr from '../containers/Therr';
import Add from '../containers/Add';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/home/one',
                name: 'one',
                component: One,
            },
            {
                path: '/home/two',
                name: 'two',
                component: Two,
            },
            {
                path: '/home/therr',
                name: 'therr',
                component: Therr,
            },
            {
                path: '/home/add',
                name: 'add',
                component: Add,
            },
        ],
    },
];
