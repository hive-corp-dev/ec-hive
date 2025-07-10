export default function Container({ children, className }) {
  return (
    <div className={`jf-container ${className ? className : ""}`}>
      {children}
    </div>
  );
}
