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
