import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-404">404</h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-description">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="button error-button">
        Return Home
      </Link>
    </div>
  );
}
