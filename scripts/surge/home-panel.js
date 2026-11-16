/**
 * Surge 面板：外出时检查家里服务是否可达
 * 参数（argument）：policy=策略组&targets=名称|URL;名称|URL;...
 * 示例：argument=policy=🏠 Home&targets=Emby|http://192.168.1.10:8096/;PVE|https://192.168.1.2:8006/
 * 内网地址只写在手机配置的 argument 里，本脚本不含任何地址。
 * HTTP 状态码 < 500 视为可达（401/403 也说明服务在线）。
 */
const args = {};
($argument || "").split("&").forEach(kv => {
  const i = kv.indexOf("=");
  if (i > 0) args[kv.slice(0, i).trim()] = decodeURIComponent(kv.slice(i + 1).trim());
});
const policy = args.policy || "🏠 Home";
const targets = (args.targets || "").split(";").map(s => s.split("|")).filter(p => p.length === 2);

let via = policy;
try {
  const g = $surge.selectGroupDetails();
  const d = (g && g.decisions) || {}, opts = (g && g.groups && g.groups[policy]) || [];
  via = d[policy] || opts[0] || policy; // 未手动选过时取组内第一个（默认项）
} catch (e) {}

if (!targets.length) {
  $done({ title: "🏠 家里", content: "未配置 targets 参数", icon: "house.fill", "icon-color": "#8E8E93" });
} else {
  const lines = new Array(targets.length);
  let left = targets.length, ok = 0;
  targets.forEach(([name, url], i) => {
    const start = Date.now();
    const origin = url.replace(/^(https?:\/\/[^\/]+).*$/, "$1");
    $httpClient.get({ url, timeout: 5, policy, insecure: true, headers: { Referer: origin } }, (err, resp) => {
      const ms = Date.now() - start;
      if (!err && resp && resp.status < 500) { ok++; lines[i] = `✅ ${name}  ${ms}ms`; }
      else lines[i] = `❌ ${name}  ${err ? "不通" : "HTTP " + resp.status}`;
      if (--left === 0) {
        const all = ok === targets.length, none = ok === 0;
        $done({
          title: `🏠 家里 ${ok}/${targets.length} · 经 ${via}`,
          content: lines.join("\n"),
          icon: all ? "house.fill" : "exclamationmark.triangle.fill",
          "icon-color": all ? "#34C759" : none ? "#FF3B30" : "#FF9500"
        });
      }
    });
  });
}
