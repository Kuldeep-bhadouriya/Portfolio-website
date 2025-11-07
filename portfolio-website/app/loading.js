export default function Loading() {
  return (
    <div
      className="loading-container"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loading-spinner" aria-hidden="true"></div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
}
