import {UserContext} from '../App';
const { useEffect, useContext } = require("react");
const { useHistory } = require("react-router-dom/");

const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method: "GET", 
            headers: {
                Accept: "application/json",
                "Context-Type" : "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: "user" });
            history.push('/login', {replace : true});
            if(res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
    }).catch((err) => {
        console.log(err);
        });
    });

    return (
        <>
        </>
    )
}

export default Logout;