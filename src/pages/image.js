import React from "react"

function Image() {
  let src = "none"
  if (typeof window !== "undefined") {
    var search = window.location.search
    var params = new URLSearchParams(search)
    src = `/certificates/${params.get("name")}.jpg`
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={src} style={{ height: "80%" }} alt="certificate" />
    </div>
  )
}

export default Image
