export interface ParsedUrl { protocol: string; host: string; port: string; pathname: string; search: string; hash: string; params: Record<string,string>; }

export function parseUrl(input: string): ParsedUrl {
  const u = new URL(input);
  const params: Record<string,string> = {};
  u.searchParams.forEach((v,k) => { params[k] = v; });
  return { protocol: u.protocol, host: u.hostname, port: u.port, pathname: u.pathname, search: u.search, hash: u.hash, params };
}

export function normalizeUrl(input: string): string {
  const u = new URL(input);
  u.hostname = u.hostname.toLowerCase();
  if ((u.protocol === "http:" && u.port === "80") || (u.protocol === "https:" && u.port === "443")) u.port = "";
  if (u.pathname === "") u.pathname = "/";
  const sorted = Array.from(u.searchParams.entries()).sort(([a],[b]) => a.localeCompare(b));
  u.search = "";
  for (const [k,v] of sorted) u.searchParams.append(k,v);
  u.hash = "";
  return u.toString();
}

export function compareUrls(a: string, b: string): boolean {
  try { return normalizeUrl(a) === normalizeUrl(b); } catch { return false; }
}

export function extractParams(input: string): Record<string,string> {
  return parseUrl(input).params;
}

export function withParam(input: string, key: string, value: string): string {
  const u = new URL(input);
  u.searchParams.set(key, value);
  return u.toString();
}

export function removeParam(input: string, key: string): string {
  const u = new URL(input);
  u.searchParams.delete(key);
  return u.toString();
}
