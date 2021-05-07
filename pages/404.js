import React from "react"
export default function Custom404({ statusCode }) {
  return <div className = "Box-shift">
<h3>Error code {statusCode}</h3>
<p>{statusCode ? `An error ${statusCode} occured on sever`: "The error occured on client"}</p>
<div>
  
</div>
  </div>
}