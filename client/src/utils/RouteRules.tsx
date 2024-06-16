import { Outlet, Navigate } from 'react-router-dom';

type MainRouteType = {rule: string}
const MainRoute = ({rule}:MainRouteType) => {
    const auth: boolean = true;
    if(auth){
        alert(`authed: ${auth}, rule: ${rule}`)
        if (rule === 'admin'){
            return <Outlet />
        }else if(rule === 'user') {
            return <Outlet />
        }else {
            return <Navigate to={'/auth'} />    
        }
    }else{
        return <Navigate to={'/auth'} />
    }
}

const AdminRoutes = ({rule}:MainRouteType): JSX.Element => {
    const auth:boolean = true;
    
    if (auth && rule === 'admin') {
        return <Outlet />;
    }else if (auth && rule ==='user'){
        return <Navigate to={'/'} />
    } else {
        return <Navigate to="/auth" />;
    }
}

const UserRoutes = ({rule}:MainRouteType):JSX.Element => {
    const auth:boolean = true;
    
    if (auth && rule === 'user') {
        return <Outlet />;
    }else if (auth && rule ==='admin'){
        return <Navigate to={'/admin'} />
    } else {
        return <Navigate to="/auth" />;
    }
}

const Authed = ({rule}:MainRouteType):JSX.Element => {
    const auth:boolean = true;
    if (auth && rule === 'user') {
        return <Navigate to={'/'} />;
    }else if (auth && rule ==='admin'){
        return <Navigate to={'/admin'} />
    }else {
        return <Navigate to="/auth" />;
    } 
}


export {
    AdminRoutes,
    UserRoutes,
    Authed,
    MainRoute
}