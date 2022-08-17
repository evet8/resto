import Dashboard from '../../layouts/admin/dashboard/Dashboard';
import Profile from '../../layouts/admin/profile/Profile';


const routes = [
    { path: '/admin', exact:true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', element: Profile },
];

export default routes;