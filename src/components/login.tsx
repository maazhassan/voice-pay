

export default function Login() {
    return(
        <>
            <div className="container">
                <div className="login">
                    <input type="text" placeholder=" Username..."></input>
                    <span className="password-span">
                       <input type="password" placeholder=" Password..."></input>
                        <a href="#">Forgot Password?</a> 
                    </span>
                    
                    <button>Login</button>
                    <a href="#">
                        Don't have an account? Click here.
                    </a>

                    <div className=""></div>
                </div>
            </div>
        </>
    );
}