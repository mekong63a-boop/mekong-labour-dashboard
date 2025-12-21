export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#020817",
        color: "white",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        MEKONG Labour Dashboard
      </h1>
      <p style={{ fontSize: "16px", opacity: 0.8, textAlign: "center", maxWidth: "480px" }}>
        Hệ thống quản lý HR cho lao động xuất khẩu, tuyển dụng, đào tạo và quản lý thực tập sinh
        Việt - Nhật.
      </p>
    </main>
  );
}
