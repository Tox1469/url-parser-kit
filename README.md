[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/url-parser-kit/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/url-parser-kit/actions)
[![License](https://img.shields.io/github/license/Tox1469/url-parser-kit?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/url-parser-kit?style=flat-square)](https://github.com/Tox1469/url-parser-kit/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/url-parser-kit?style=flat-square)](https://github.com/Tox1469/url-parser-kit/stargazers)

---

# url-parser-kit

Parser, normalizador e comparador de URLs com extração de query params.

## Instalação

```bash
npm install url-parser-kit
```

## Uso

```ts
import { parseUrl, normalizeUrl, compareUrls } from "url-parser-kit";
parseUrl("https://a.com/x?b=1");
normalizeUrl("HTTPS://A.com:443/?b=1&a=2");
compareUrls("https://a.com/", "https://A.COM");
```

## API

- `parseUrl(url)`
- `normalizeUrl(url)`
- `compareUrls(a, b)`
- `extractParams(url)`
- `withParam(url, k, v)`
- `removeParam(url, k)`

## Licença

MIT