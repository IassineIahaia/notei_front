import React, {Fragment} from "react";
import '../../../../css/register.css';

const Register = () => (
    <Fragment>
        <section className="register">
            <div className="register-form">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    </Fragment>
);

export default Register;

