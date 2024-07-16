import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ parentComponent: ParentComponent }) => {
  const isLoggedIn = useSelector(({ login: { isLoggedIn } = {} }) => isLoggedIn)

  let auth = { token: isLoggedIn }

  const outlet = ParentComponent ? (
    <ParentComponent>
      <Outlet />
    </ParentComponent>
  ) : (
    <Outlet />
  )

  return auth.token ? outlet : <Navigate to='/login' />
}

export default PrivateRoute
