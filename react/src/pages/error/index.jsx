import Header from "../../components/header"
import './index.css'

const ErrorPage = () => {

    return (
        <>
            <Header />
            <div className="error-container">
                <div className="error-content">
                    <strong className="error-code">Error 404</strong>
                    <p className="error-desc">This page doesnt exists.</p>
                </div>
            </div>
        </>
    )
}

export default ErrorPage