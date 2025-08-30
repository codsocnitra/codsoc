"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <h1>Application Error</h1>
            <p
              style={{
                color: "red",
              }}
            >
              {error.message}
            </p>
            <button
              onClick={() => reset()}
              style={{
                backgroundColor: "red",
                padding: "10px 20px",
                borderRadius: "10px",
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
