import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Calculateur de Zakāt al-Māl — zakatfacile.fr";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #f0fdf4 0%, #ffffff 55%, #ecfdf5 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          padding: "0 80px",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #059669 0%, #10b981 100%)",
          }}
        />

        {/* Decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(5, 150, 105, 0.06)",
          }}
        />

        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(5, 150, 105, 0.05)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "28px",
            position: "relative",
          }}
        >
          {/* Label with lines */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{ width: "40px", height: "2px", background: "#059669" }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#059669",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Zakāt al-Māl
            </span>
            <div
              style={{ width: "40px", height: "2px", background: "#059669" }}
            />
          </div>

          {/* Main title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              fontSize: "76px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            <span>Calculez votre</span>
            <span style={{ color: "#059669" }}>Zakāt gratuitement</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "24px",
              color: "#6b7280",
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: "820px",
            }}
          >
            Outil confidentiel · Fondé sur les savants de Ahl as-Sunnah
          </div>

          {/* Domain badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
              padding: "14px 32px",
              background: "#059669",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "white",
                letterSpacing: "0.02em",
              }}
            >
              zakatfacile.fr
            </span>
          </div>
        </div>

        {/* Bottom keywords */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            gap: "24px",
          }}
        >
          {["Niṣāb", "Ḥawl", "2,5 %", "Aucun cookie"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
