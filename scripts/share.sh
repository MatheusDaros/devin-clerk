#!/usr/bin/env bash
# Shares the dev server at a public https://<random>.trycloudflare.com link
# (a Cloudflare quick tunnel, no account needed). The link works while this
# runs; stop it with Ctrl+C.
set -euo pipefail

VERSION="2026.9.1"
PORT="${PORT:-3000}"

if [ "$(uname -s)" != "Linux" ]; then
  echo "npm run share downloads cloudflared for Linux only. Elsewhere, install cloudflared and run: cloudflared tunnel --url http://localhost:$PORT" >&2
  exit 1
fi

case "$(uname -m)" in
  x86_64 | amd64) ARCH="amd64" ;;
  aarch64 | arm64) ARCH="arm64" ;;
  *) echo "Unsupported CPU architecture: $(uname -m)" >&2; exit 1 ;;
esac

BIN="${XDG_CACHE_HOME:-$HOME/.cache}/cloudflared-$VERSION/cloudflared"
if [ ! -x "$BIN" ]; then
  mkdir -p "$(dirname "$BIN")"
  curl -fsSL -o "$BIN.tmp" "https://github.com/cloudflare/cloudflared/releases/download/$VERSION/cloudflared-linux-$ARCH"
  chmod +x "$BIN.tmp"
  mv "$BIN.tmp" "$BIN"
fi

if ! curl -fsS -o /dev/null "http://localhost:$PORT"; then
  echo "Nothing is answering on http://localhost:$PORT. Start the dev server first (npm run dev)." >&2
  exit 1
fi

exec "$BIN" tunnel --no-autoupdate --url "http://localhost:$PORT"
