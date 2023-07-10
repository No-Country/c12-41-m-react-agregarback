function PrivateRoute({ element: Element, ...rest }) {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token');

    if (!token) {
        navigate('/', { replace: true }); // Redirige a la ruta de inicio ("/") si no hay un token válido
        return null; // No renderizar nada mientras se redirige
    }
    return <Route {...rest} element={<Element />} />;
}

export default PrivateRoute;
