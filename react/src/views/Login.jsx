import { Link } from "react-router-dom";

export default function Login(){

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Belum Punya Akun? <Link to="/signup">Daftar Sekarang</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}