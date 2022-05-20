import Context from './Context';
import useStorage from '../utils/useStorage';
import http from '../../api';

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorage('token')

    if (token) {
        http.defaults.headers.authorization = `Token ${token}`
        console.log(token)
    }

    return (
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;