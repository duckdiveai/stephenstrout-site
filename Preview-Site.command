#!/bin/zsh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

choose_port() {
  for candidate in 4321 8000 8080 9000; do
    if ! lsof -nP -iTCP:"$candidate" -sTCP:LISTEN >/dev/null 2>&1; then
      echo "$candidate"
      return 0
    fi
  done
  return 1
}

PORT="$(choose_port)"

if [ -z "$PORT" ]; then
  echo "Could not find an open port."
  echo "Please close another local server and try again."
  read -k 1
  exit 1
fi

URL="http://localhost:$PORT"

echo "Opening Stephen Strout portfolio from:"
echo "$SCRIPT_DIR"
echo
if [ "$PORT" = "4321" ]; then
  echo "Starting local site at $URL"
else
  echo "Port 4321 was busy, so this preview is using $URL"
fi
echo "Safari should open automatically in a moment."
echo "Leave this window open while previewing the site."
echo "When you are done, press Control + C."
echo

open "$URL"
python3 -m http.server "$PORT"
