#!/bin/bash
set -euo pipefail

# Only needed in the managed Claude Code on the web environment.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# sgmllib3k (feedparser dependency) fails to build under the container's
# Debian-patched setuptools unless distutils comes from the stdlib.
if ! python3 -c "import sgmllib" 2>/dev/null; then
  SETUPTOOLS_USE_DISTUTILS=stdlib pip install --quiet sgmllib3k
fi

pip install --quiet -r "$CLAUDE_PROJECT_DIR/scripts/requirements.txt"

# yt-dlp prefers certifi's CA bundle, which doesn't include the CA of the
# environment's TLS-intercepting proxy. Append the system bundle (where the
# proxy CA lives, per SSL_CERT_FILE) so YouTube fetches can verify TLS.
CERTIFI_BUNDLE="$(python3 -c 'import certifi; print(certifi.where())')"
SYSTEM_BUNDLE="${SSL_CERT_FILE:-/etc/ssl/certs/ca-certificates.crt}"
if [ -f "$SYSTEM_BUNDLE" ] && ! grep -qF "# claude-session-proxy-ca" "$CERTIFI_BUNDLE"; then
  {
    echo ""
    echo "# claude-session-proxy-ca"
    cat "$SYSTEM_BUNDLE"
  } >> "$CERTIFI_BUNDLE"
fi

echo "Fetcher dependencies installed and CA bundle patched."
