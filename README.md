# Daily Scroll

A personal, local-only, TikTok-style vertical feed of daily web games. Each game
is a full-screen slide with the game in an iframe; you snap from one to the next.

Plain HTML/CSS/JS: no framework, no build step.

## Run it

From this folder:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in Chrome. (`npx serve -l 8000` works too.)

Open the page through `localhost` or `127.0.0.1`, not `file://`. The optional
extension only acts on iframes embedded from those two hosts.

## Controls

| Action | How |
|---|---|
| Next / previous game | Scroll on the dark margin or the top/bottom bars, the **↑ Previous** / **Next game ↓** buttons, or `↓`/`J` and `↑`/`K` |
| Scroll *inside* a game | Scroll with the pointer over the game |
| Jump to any game | **☰ Games** (or `M`) |
| Mark today's game done | **Mark done** in the top right (or `D`). Resets at local midnight. |
| Link to a game | The URL hash is the position, e.g. `http://localhost:8000/#5` |

Keys only reach the feed when focus isn't inside a game. After you've clicked
into a game, click the dark margin once and the keys work again.

## Add / remove / reorder games

Edit the `GAMES` list at the top of `app.js`:

```js
const GAMES = [
  { name: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html" },
  // ...
];
```

The order of the list is the order of the feed. `name` is also the key for the
"Done" state, so renaming a game clears its Done mark for today.

If you use the extension and the new game refuses to be framed, also add its
domain to the extension (below).

## Optional: Chrome extension to allow blocked games (`/extension`)

Some sites send `X-Frame-Options` or a `Content-Security-Policy: frame-ancestors`
header that tells the browser "don't show me inside someone else's page". The
extension removes those two response headers, **only** when all three hold:

- the request is to one of the listed game domains (or a subdomain), **and**
- it's loading inside an iframe (`resourceTypes: ["sub_frame"]`), **and**
- the iframe is on a page served from `localhost` or `127.0.0.1`.

Visiting those sites normally, or framing them from anywhere else, is untouched.

### Install

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (toggle, top right).
3. Click **Load unpacked** and pick the `extension` folder of this repo.
4. Reload the feed tab.

Chrome may show a "Disable developer mode extensions" bubble on startup.
That's expected for unpacked extensions. Click away from it rather than on
Disable.

### Edit the domain list

The only list is `host_permissions` in `extension/manifest.json`:

```json
"https://*.flagle.io/*",
```

`*.` covers the bare domain and all subdomains. After editing, go to
`chrome://extensions` and click the extension's ↻ reload icon. On every
install or reload, `background.js` rebuilds the rule from that list. Chrome
needs host permission for a site before a rule can modify its headers (tested:
without it the rule silently does nothing), so this one list serves as both the
permission and the filter.

If you serve the feed from a host other than `localhost` / `127.0.0.1`, change
`FEED_INITIATORS` in `extension/background.js`.

## Known limitations

- **Separate stats and streaks.** Inside an iframe, Chrome keeps a game's
  storage separate from the real site (storage partitioning). Your streak in
  the feed and on the real site are two different streaks.
- **Logins.** Sites that need a login (NYT for Wordle stats, for example) often
  can't use their cookies inside a third-party iframe, so you may appear
  logged out. Use "Open in new tab" for those.
- **Blocked games aren't detected automatically.** When Chrome refuses to
  frame a site, the iframe still fires its `load` event (with Chrome's error
  page inside), and a cross-origin parent can't tell the difference. So the
  4-second fallback card only catches games that hang or load very slowly.
  For a blocked game, use the always-visible "Doesn't load? Open in new tab →"
  link, or install the extension.
- **The extension doesn't fix everything.** Some sites check in JavaScript
  whether they're framed (`window.top !== window.self`) and break or redirect
  themselves. Ads, consent popups, or sign-in flows may also misbehave inside
  a frame.
- **Scroll chaining.** If a game page has no scrollable area of its own,
  Chrome may pass your scroll up to the feed. Native snapping then decides
  where to land, and it may move you to the next game.
- **Lazy loading** loads the current game plus the next one. Games you've
  already visited stay loaded, so your in-progress state survives scrolling
  back.
