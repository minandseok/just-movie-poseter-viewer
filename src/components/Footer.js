"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>ⓒ 2025 Movie Poster Viewer</p>
        <p>Made with ❤️ and Next.js</p>
      </div>

      <style jsx>{`
        .footer {
          background: rgba(0, 0, 0, 0.8);
          border-top: 1px solid rgba(100, 255, 218, 0.2);
          padding: 2rem 0;
          margin-top: 4rem;
          backdrop-filter: blur(10px);
        }

        .footer-content {
          text-align: center;
          color: #64ffda;
          font-size: 0.9rem;
        }

        .footer-content p {
          margin: 0.5rem 0;
          opacity: 0.8;
        }

        .footer-content p:first-child {
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
}
