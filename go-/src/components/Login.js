import React, { Component, useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <div>
            
            {user && <button onClick={logout}>Cerrar sesión</button>}
            {
                !user &&
                <div>
                    <input type="email" id="email" placeholder="correo electrónico" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" id="password" placeholder="contraseña" onChange={(event) => setPassword(event.target.value)} />
                    <button onClick={submit}>Crear cuenta</button>
                    <button onClick={login}>Iniciar sesión</button>
                </div>
            }
        </div>
    )
}