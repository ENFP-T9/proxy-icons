# proxy-icons

iOS Stash（Clash / mihomo）策略组图标。仓库内为 PNG 原文件，可通过 raw.githubusercontent.com 直接加载。

## 图标

| 预览 | 文件名 | 用途/策略组 | 来源 |
| --- | --- | --- | --- |
| <img src="icons/Tailscale.png" width="32" alt="Tailscale"> | `Tailscale.png` | Home | [tailscale.png](https://raw.githubusercontent.com/tailscale/tailscale/main/client/systray/tailscale.png) |
| <img src="icons/Proxy.png" width="32" alt="Proxy"> | `Proxy.png` | Select | [Proxy.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png) |
| <img src="icons/Amy.png" width="32" alt="Amy"> | `Amy.png` | AmyTelecom | [Amy.png](https://raw.githubusercontent.com/Orz-3/mini/master/Color/Amy.png) |
| <img src="icons/Global.png" width="32" alt="Global"> | `Global.png` | Global | [Area.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Area.png) |
| <img src="icons/ChatGPT.png" width="32" alt="ChatGPT"> | `ChatGPT.png` | ChatGPT | [ChatGPT.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/ChatGPT.png) |
| <img src="icons/GrokBot.png" width="32" alt="GrokBot"> | `GrokBot.png` | GrokBot（白底圆形，深色模式下可见） | [grokbot.png 白底圆形](https://wsrv.nl/?url=raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-png/light/grokbot.png&w=256&h=256&fit=contain&cbg=white&bg=white&mask=circle&output=png) |
| <img src="icons/GrokBot-Gray.png" width="32" alt="GrokBot Gray"> | `GrokBot-Gray.png` | GrokBot（灰色备选） | [grokbot.png 灰色](https://wsrv.nl/?url=raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-png/light/grokbot.png&w=256&h=256&fit=contain&we&cbg=00000000&filt=duotone&start=8E8E93&stop=8E8E93&output=png) |
| <img src="icons/Apple.png" width="32" alt="Apple"> | `Apple.png` | Apple | [Apple.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png) |
| <img src="icons/Spotify.png" width="32" alt="Spotify"> | `Spotify.png` | Spotify | [spotify.png](https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/png/spotify.png) |
| <img src="icons/PlayStation.png" width="32" alt="PlayStation"> | `PlayStation.png` | PlayStation | [PlayStation.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/PlayStation.png) |
| <img src="icons/Speedtest.png" width="32" alt="Speedtest"> | `Speedtest.png` | Speedtest | [ookla-speedtest.png](https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/png/ookla-speedtest.png) |
| <img src="icons/PikPak.png" width="32" alt="PikPak"> | `PikPak.png` | PikPak | [PikPak.png](https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/PikPak.png) |
| <img src="icons/AppleTV.png" width="32" alt="Apple TV+"> | `AppleTV.png` | Apple TV+ | [AppleTV.png](https://raw.githubusercontent.com/Orz-3/mini/master/Color/AppleTV.png) |
| <img src="icons/Ubisoft.png" width="32" alt="Ubisoft"> | `Ubisoft.png` | Ubisoft | [ubisoft 黑色 256×256](https://wsrv.nl/?url=cdn.simpleicons.org/ubisoft/000000&w=256&h=256&fit=contain&output=png) |
| <img src="icons/X.png" width="32" alt="X"> | `X.png` | X（推特） | [X.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/X.png) |
| <img src="icons/China.png" width="32" alt="China"> | `China.png` | China（亦用于 TW） | [China.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/China.png) |
| <img src="icons/Final.png" width="32" alt="Final"> | `Final.png` | Final | [Final.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png) |
| <img src="icons/Hong_Kong.png" width="32" alt="Hong Kong"> | `Hong_Kong.png` | HK | [Hong_Kong.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Hong_Kong.png) |
| <img src="icons/Japan.png" width="32" alt="Japan"> | `Japan.png` | JP | [Japan.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png) |
| <img src="icons/Singapore.png" width="32" alt="Singapore"> | `Singapore.png` | SG | [Singapore.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png) |
| <img src="icons/United_States.png" width="32" alt="United States"> | `United_States.png` | US | [United_States.png](https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png) |
| <img src="icons/FallBack.png" width="32" alt="FallBack"> | `FallBack.png` | Mostly | [FallBack.png](https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/FallBack.png) |

GrokBot 两张图的原图均为 [lobehub/lobe-icons `grokbot.png`](https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-png/light/grokbot.png)。`GrokBot.png` 是白底圆形版本；`GrokBot-Gray.png` 是透明底、`#8E8E93` 灰色版本。

## 在 Stash 中引用

在策略组里把 `icon` 写成 raw 地址，把 `<name>.png` 换成上表中的文件名：

```yaml
icon: https://raw.githubusercontent.com/ENFP-T9/proxy-icons/main/icons/<name>.png
```

例如 ChatGPT：

```yaml
icon: https://raw.githubusercontent.com/ENFP-T9/proxy-icons/main/icons/ChatGPT.png
```

## 添加新图标

1. 把 PNG 放进 `icons/`，文件名用简短、稳定的 ASCII，例如 `icons/ChatGPT.png`。
2. 在上方表格加一行：预览、文件名、用途/策略组、来源。

## 来源与版权

图标来自以下项目，版权归各自所有者。本仓库只保存副本，方便 Stash 引用：

- [Koolson/Qure](https://github.com/Koolson/Qure)
- [Orz-3/mini](https://github.com/Orz-3/mini)
- [fmz200/wool_scripts](https://github.com/fmz200/wool_scripts)
- [lobehub/lobe-icons](https://github.com/lobehub/lobe-icons)
- [homarr-labs/dashboard-icons](https://github.com/homarr-labs/dashboard-icons)
- [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons)
- [tailscale/tailscale](https://github.com/tailscale/tailscale)
