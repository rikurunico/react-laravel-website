import { useRef } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../axios-client";

export default function signup(){

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser,setToken} = useStateContext();

    const onSubmit = (ev) => {
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        axiosClient.post('/signup', payload)
          .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.errors);
            }
          })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Daftar Akun
                    </h1>
                    <input ref={nameRef} type="text" placeholder="Nama Lengkap" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Konfirmasi Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Sudah Punya Akun? <Link to="/login">Masuk Sekarang</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}