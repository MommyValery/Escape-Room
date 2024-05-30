import { Link } from "react-router-dom/cjs/react-router-dom.min";

 const NotFoundPage = () => {
    return (
        <>
        <h1>404 
            <p>Not Found</p>
        <Link to="/">Return to main page</Link>
        </h1>
        </>
    )
};

export default NotFoundPage