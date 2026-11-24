// ── Edit your games here ──────────────────────────────────────────────
// Order = feed order. `name` is also the key for the daily "Done" state,
// so renaming a game resets its Done mark for today.
const GAMES = [
  { name: "Wordle",       url: "https://www.nytimes.com/games/wordle/index.html" },
  { name: "Worldle",      url: "https://worldle.teuteuf.fr" },
  { name: "Flagle",       url: "https://www.flagle.io/" },
  { name: "Globle",       url: "https://globle-game.com" },
  { name: "Plain Game",   url: "https://plaingame.fun" },
  { name: "Krillion",     url: "https://krillion.io" },
  { name: "Daily Roll",   url: "https://playdailyroll.com/" },
  { name: "Speed",        url: "https://wordle.global/en/speed" },
  { name: "WhoWhatWhere", url: "https://playwhowhatwheregame.com/" },
  { name: "Magnitudle",   url: "https://magnitudle.com/" },
  { name: "Daily Unfold", url: "https://www.dailyunfold.com/" },
  { name: "Tradle",          url: "https://oec.world/en/games/tradle" },
  { name: "Travle",          url: "https://travle.earth" },
  { name: "TimeGuessr",      url: "https://timeguessr.com" },
  { name: "MapTap",          url: "https://maptap.gg" },
  { name: "Framed",          url: "https://framed.wtf" },
  { name: "Bandle",          url: "https://bandle.app" },
  { name: "Costcodle",       url: "https://costcodle.com" },
  { name: "Contexto",        url: "https://contexto.me" },
  { name: "Waffle",          url: "https://wafflegame.net" },
  { name: "Nerdle",          url: "https://www.nerdlegame.com" },
  { name: "Squaredle",       url: "https://squaredle.app" },
  { name: "Catfishing",      url: "https://catfishing.net" },
  { name: "Clues by Sam",    url: "https://cluesbysam.com" },
  { name: "Chronophoto",     url: "https://www.chronophoto.app" },
  { name: "Quordle",         url: "https://www.merriam-webster.com/games/quordle" },
  { name: "Semantle",        url: "https://semantle.com" },
  { name: "Octordle",        url: "https://www.britannica.com/games/octordle" },
  { name: "Weaver",          url: "https://wordwormdormdork.com" },
  { name: "Immaculate Grid", url: "https://www.immaculategrid.com" },
  { name: "Angle",           url: "https://angle.wtf" },
];

// ── Settings ──────────────────────────────────────────────────────────
const LOAD_TIMEOUT_MS = 4000; // show the fallback card if no load event by then
const STORAGE_KEY = "dailygamescroll.done";

// ── Done state (resets each new local day) ────────────────────────────
const today = () => new Date().toLocaleDateString("sv"); // YYYY-MM-DD, local time

function readDone() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && saved.date === today() && Array.isArray(saved.names)) return new Set(saved.names);
  } catch {}
  return new Set();
}

function writeDone(set) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today(), names: [...set] }));
  } catch {}
}

let done = readDone();

// ── DOM refs ──────────────────────────────────────────────────────────
const feed = document.getElementById("feed");
const titleEl = document.getElementById("game-title");
const progressEl = document.getElementById("progress");
const doneBtn = document.getElementById("done-toggle");
const doneCountEl = document.getElementById("done-count");
const menuBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const scrim = document.getElementById("scrim");
const slideTpl = document.getElementById("slide-template");

let current = 0;
let pending = null; // index we're scrolling towards (so rapid presses stack up)
let pendingTimer = 0;

// ── Build slides ──────────────────────────────────────────────────────
const slides = GAMES.map((game, i) => {
  const node = slideTpl.content.firstElementChild.cloneNode(true);
  node.dataset.index = i;
  node.setAttribute("aria-label", `${game.name}, game ${i + 1} of ${GAMES.length}`);
  node.querySelector(".placeholder-name").textContent = game.name;
  node.querySelector(".fallback-name").textContent = game.name;
  for (const a of node.querySelectorAll("a.newtab")) a.href = game.url;
  node.querySelector(".prev").disabled = i === 0;
  node.querySelector(".next").disabled = i === GAMES.length - 1;
  node.querySelector(".prev").addEventListener("click", () => goTo(i - 1));
  node.querySelector(".next").addEventListener("click", () => goTo(i + 1));
  node.querySelector(".keep-waiting").addEventListener("click", () => {
    node.querySelector(".fallback").hidden = true;
    node.dataset.state = "waiting"; // show whatever the frame has rendered so far
  });
  feed.appendChild(node);
  return node;
});

// ── Lazy loading: current + next only ─────────────────────────────────
function ensureLoaded(i) {
  const slide = slides[i];
  if (!slide || slide.dataset.state) return; // already loading / loaded
  const game = GAMES[i];
  const wrap = slide.querySelector(".frame-wrap");
  const iframe = document.createElement("iframe");
  iframe.title = game.name;
  iframe.allow = "clipboard-read; clipboard-write; fullscreen; autoplay; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.src = game.url; // set before insertion so there's no about:blank load event
  slide.dataset.state = "loading";

  const timer = setTimeout(() => {
    if (slide.dataset.state === "loading") {
      slide.dataset.state = "timeout";
      slide.querySelector(".fallback").hidden = false;
    }
  }, LOAD_TIMEOUT_MS);

  iframe.addEventListener("load", () => {
    clearTimeout(timer);
    slide.dataset.state = "loaded";
    slide.querySelector(".fallback").hidden = true;
  });

  wrap.prepend(iframe);
}

// ── Current-slide tracking ────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) setCurrent(Number(entry.target.dataset.index));
    }
  },
  { threshold: 0.6 }
);
slides.forEach((s) => observer.observe(s));

function setCurrent(i) {
  if (pending === i) clearPending();
  current = i;
  ensureLoaded(i);
  ensureLoaded(i + 1);
  updateChrome();
  history.replaceState(null, "", `#${i + 1}`);
}

function updateChrome() {
  const game = GAMES[current];
  titleEl.textContent = game.name;
  progressEl.textContent = `${current + 1} / ${GAMES.length}`;
  document.title = `${game.name} · Daily Scroll`;
  const isDone = done.has(game.name);
  doneBtn.setAttribute("aria-pressed", String(isDone));
  doneBtn.querySelector(".label").textContent = isDone ? "Done ✓" : "Mark done";
  doneCountEl.textContent = `${GAMES.filter((g) => done.has(g.name)).length}/${GAMES.length} done today`;
  slides.forEach((s, i) => s.classList.toggle("is-done", done.has(GAMES[i].name)));
  renderMenu();
}

// ── Navigation ────────────────────────────────────────────────────────
function clearPending() {
  pending = null;
  clearTimeout(pendingTimer);
}

function goTo(i, { smooth = true } = {}) {
  if (i < 0 || i >= GAMES.length) return;
  pending = i;
  clearTimeout(pendingTimer);
  pendingTimer = setTimeout(clearPending, 1200);
  ensureLoaded(i);
  slides[i].scrollIntoView({ behavior: smooth ? "smooth" : "instant", block: "start" });
}

const step = (delta) => goTo((pending ?? current) + delta);

document.addEventListener("keydown", (e) => {
  // Keydowns inside a game iframe never reach this document, so this only
  // fires when focus is on the feed itself.
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.closest?.("input, textarea, select, [contenteditable]")) return;
  const key = e.key;
  if (key === "Escape" && !menu.hidden) return closeMenu();
  if (!menu.hidden) return; // let the menu handle its own keys
  if (key === "ArrowDown" || key === "j" || key === "J") {
    e.preventDefault();
    step(1);
  } else if (key === "ArrowUp" || key === "k" || key === "K") {
    e.preventDefault();
    step(-1);
  } else if (key === "m" || key === "M") {
    openMenu();
  } else if (key === "d" || key === "D") {
    toggleDone();
  }
});

// Wheel over the feed's own area (margins, bars) = exactly one game per
// gesture. Native snapping alone can bounce back on a single mouse-wheel
// notch and can skip several games on a trackpad fling. Wheel events inside
// a game iframe never reach this document, so games scroll as normal.
const WHEEL_THRESHOLD = 30; // px of accumulated delta before we move
const GESTURE_GAP_MS = 220; // quiet time that ends a gesture (trackpad inertia)
let wheelAccum = 0;
let wheelLocked = false;
let wheelQuietTimer = 0;
window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey || !menu.hidden) return; // pinch-zoom / scrolling the menu
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    clearTimeout(wheelQuietTimer);
    wheelQuietTimer = setTimeout(() => {
      wheelLocked = false;
      wheelAccum = 0;
    }, GESTURE_GAP_MS);
    if (wheelLocked) return;
    const unit = e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1;
    wheelAccum += e.deltaY * unit;
    if (Math.abs(wheelAccum) >= WHEEL_THRESHOLD) {
      step(Math.sign(wheelAccum));
      wheelLocked = true;
    }
  },
  { passive: false }
);

// Clicking the margin takes focus back from an iframe so keys work again.
feed.addEventListener("pointerdown", (e) => {
  if (e.target.classList.contains("slide")) document.activeElement?.blur();
});

// ── Done toggle ───────────────────────────────────────────────────────
function toggleDone() {
  done = readDone(); // pick up a day rollover / other tabs
  const name = GAMES[current].name;
  done.has(name) ? done.delete(name) : done.add(name);
  writeDone(done);
  updateChrome();
}
doneBtn.addEventListener("click", toggleDone);

// Re-check when coming back to the tab (e.g. left open overnight).
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    done = readDone();
    updateChrome();
  }
});
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY) {
    done = readDone();
    updateChrome();
  }
});

// ── Jump menu ─────────────────────────────────────────────────────────
function renderMenu() {
  menuList.replaceChildren(
    ...GAMES.map((game, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "menu-item";
      if (i === current) btn.setAttribute("aria-current", "true");
      btn.innerHTML = `<span class="num"></span><span class="name"></span><span class="check" aria-hidden="true"></span>`;
      btn.querySelector(".num").textContent = i + 1;
      btn.querySelector(".name").textContent = game.name;
      if (done.has(game.name)) {
        btn.classList.add("is-done");
        btn.querySelector(".check").textContent = "✓";
        btn.setAttribute("aria-label", `${game.name}, done`);
      }
      btn.addEventListener("click", () => {
        closeMenu();
        goTo(i, { smooth: Math.abs(i - current) <= 1 });
      });
      li.append(btn);
      return li;
    })
  );
}

function openMenu() {
  menu.hidden = false;
  scrim.hidden = false;
  menuBtn.setAttribute("aria-expanded", "true");
  (menuList.querySelector("[aria-current]") || menuList.querySelector("button"))?.focus();
}

function closeMenu() {
  menu.hidden = true;
  scrim.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.focus();
}

menuBtn.addEventListener("click", () => (menu.hidden ? openMenu() : closeMenu()));
scrim.addEventListener("click", closeMenu);
menu.addEventListener("keydown", (e) => {
  if (e.key === "Escape") return closeMenu();
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  e.preventDefault();
  const items = [...menuList.querySelectorAll("button")];
  const at = items.indexOf(document.activeElement);
  const next = (at + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
  items[next].focus();
});

// ── Start (honour #N in the URL) ──────────────────────────────────────
const indexFromHash = () =>
  Math.min(Math.max(parseInt(location.hash.slice(1), 10) - 1 || 0, 0), GAMES.length - 1);

const start = indexFromHash();
setCurrent(start);
if (start > 0) goTo(start, { smooth: false });

// Typing e.g. #5 into the address bar jumps there.
window.addEventListener("hashchange", () => goTo(indexFromHash(), { smooth: false }));
