import Dashboard from '../../layouts/admin/dashboard/Dashboard';
import Reservations from '../../layouts/admin/profile/Profile';
// import Reservations from '../../layouts/admin/reservations/Reservations';


const routes = [
    { path: '/admin', exact:true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', element: Dashboard },
    { path: '/admin/reservations', exact: true, name: 'Reservations', element: Reservations },
        // { path: '/admin/reservations', exact: true, name: 'Reservations', element: Reservations },
];

export default routes;