import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="page notfound container">
      <div className="notfound-card">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link className="btn primary" to="/">Go Home</Link>
      </div>
    </div>
  );
}
