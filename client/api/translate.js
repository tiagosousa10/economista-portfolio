// /api/translate.js — Serverless Function (Vercel)
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => resolve(JSON.parse(data || "{}")));
      req.on("error", reject);
    });

   const upstream = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: String(body.q || ""),
        source: body.source || "pt",
        target: body.target || "en",
        format: "text",
      }),
    });

    const json = await upstream.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(json);
  } catch (e) {
    console.error("[/api/translate] error:", e);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({ error: "Translate proxy failed" });
  }
}
