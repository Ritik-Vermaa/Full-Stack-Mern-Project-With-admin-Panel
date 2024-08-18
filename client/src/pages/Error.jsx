import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! Page Not Found</h4>
                <p>
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )
    
}

export default Error;