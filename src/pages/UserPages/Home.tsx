import { RootState } from '../../state/main';
import { useSelector } from 'react-redux';
// import {  } from '../../state/Slices/AuthState';


export default function Home(){
    const user = useSelector((state: RootState) => state.auth);
    console.log(user);
    return(
        <>
            <h1> {user.firstName} </h1>
            <h1> {user.lastName} </h1>
            <h1> {user.email} </h1>
        </>
    ); 
}