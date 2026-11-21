# Alternatives and Precedents for Publishing a Daily-Games Feed Without Unpermitted Framing

Research date: 2026-11-21. Informational only, not legal advice. Method note: WebFetch was blocked for most hosts in this session (e.g. sdk.poki.com failed DNS under the session's network allowlist; a GitHub repo returned 404). Most findings below come from WebSearch result summaries/snippets, which are easy to take out of context; only github.com/qubit10/dles was fetched in full. Primary terms pages (Poki, CrazyGames, GameDistribution, Discord, brreg.no, Datatilsynet) should be re-checked directly before relying on specifics.

## 1. Existing daily-game hubs and portals: embed, license, or link out?

### Takeaway
The independent "daily games hub" category (dles lists, Dailies.games, The Word Finder's library, Hubdle, Dle Hunt) appears to be overwhelmingly link-out directories, while the businesses that actually show games inside their own pages (Puzzmo, Arkadium, Poki, CrazyGames, GameDistribution, Yandex Games, Discord Activities) do so only for games they own, commissioned, or received under a developer agreement/SDK with an ad or subscription revenue share.

### Cited Findings
**Link-out directories (closest precedent to the user's product)**
- "dles" (github.com/qubit10/dles, a fork of aukspot/dles): "a curated collection of 500+ daily web games" that are "free and do not require a login or subscription"; each game is a hyperlink to the external site; 544 entries, last updated 2025-12-02; new games are suggested via a Tally form or GitHub issue and contributors edit `dles.json`; no stated licence and no mention of obtaining creators' permission or a creator-removal process (only removal of broken links) — [GitHub qubit10/dles](https://github.com/qubit10/dles) (fetched)
- Dailies.games brings daily browser games such as Wordle, Connections, Songless and GeoGuessr into one place and adds a creator/community layer where players can support and rank creators — [Product Hunt: dailies games](https://www.producthunt.com/products/dailies-games). Whether it embeds or links out was not stated in any result I could see.
- The Word Finder describes "the ultimate daily games library (500+ games in one place)" — [The Word Finder blog](https://www.thewordfinder.com/blog/?p=1761)
- Hubdle launched 2025-02-11 as an "all-in-one hub for daily gaming" (Wordle-style, movie trivia, geography) — [Product Hunt: Hubdle launches](https://www.producthunt.com/products/hubdle/launches)
- Dle Hunt: "the home for daily puzzle games — the growing family of ·dle games inspired by Wordle" — [Product Hunt: Dle Hunt](https://www.producthunt.com/products/dle-hunt)
- Media roundups (e.g. PC Gamer's "16 more daily games") also simply link out — [PC Gamer](https://www.pcgamer.com/best-games-like-wordle)

**Licensed / white-label hubs**
- Puzzmo (Zach Gage, Orta Therox) was acquired by Hearst Newspapers in Dec 2023, terms undisclosed; Gage and Therox kept leading game development — [PocketGamer.biz](https://www.pocketgamer.biz/zach-gage-and-orta-theroxs-puzzle-platform-puzzmo-acquired-by-hearst-newspapers); [Nieman Lab](https://www.niemanlab.org/reading/zach-gages-puzzmo-gets-acquired-as-the-newspaper-games-space-heats-up/)
- Puzzmo licenses a branded version of its site to other publishers; deals "are structured as rev-shares on both subscription and advertising revenue"; early licensees include Digg, Postmedia and Polygon; Postmedia launched it across 120+ Canadian news brands (Apr 2024) — [Axios (2023-10-20)](https://www.axios.com/2023/10/20/puzzmo-hearst-zach-gage-new-york-times); [Business Wire (Postmedia)](https://www.businesswire.com/news/home/20240404561282/en/Postmedia-Launches-Puzzmo-Hearst-Newspapers%E2%80%99-Online-Puzzle-Games-Experience-Exclusively-in-Canada)
- Arkadium licenses embeddable games (including daily crosswords) to publishers; partners have included USA Today, The Washington Post, Daily Mail; its partner page claims 300+ companies and partners staying 5+ years; it runs a separate game-licensing offering and an "Arkadium for Developers" third-party publishing program (2024) — [Arkadium partners](https://partners.arkadium.com/); [Arkadium game licensing](https://corporate.arkadium.com/game-licensing/); [Gamespress: Arkadium third-party publishing](https://www.gamespress.com/Arkadium-Unveils-New-Third-Party-Publishing-for-Game-Developers-Alongs); [Axios: Publishers promote play (2024-08-27)](https://www.axios.com/2024/08/27/puzzle-games-publishers)
- Teuteuf Games (Worldle, Travle, Flagle, Statele, Wheretaken, Whentaken, GeoGrid) describes itself as an Irish/American studio and publisher of daily puzzle games with >1M DAU across titles — [Worldle/Travle press release](https://abnews-wire.blogspot.com/2024/11/worldle-creators-announce-travle-new.html); Publisher Collective ran a Jan 2026 "Partner Spotlight" on Teuteuf (ad-monetisation partner; commercial terms not described) — [Publisher Collective](https://www.publisher-collective.com/blog/partner-spotlight-teuteuf-games)
- A document titled Teuteuf Games "Distribution Integration Guide" (marked Private and Confidential, hosted on Scribd) says partners "Obtain the iFrame snippet from Teuteuf Games once a partnership agreement has been signed," with iframe and JavaScript embedding methods — [Scribd: Integration Guide](https://www.scribd.com/document/811311925/Integration-Guide). Authenticity/currency unverified; treat as a strong lead that Teuteuf offers embedding only via signed partnership.

**Portals with developer agreements**
- Poki: curated, hand-reviewed; developers apply via submission form; prefers "Web Exclusive" deals; a non-exclusive option is described as a one-time licence fee without revenue share; no public universal percentage — [sdk.poki.com/deals (via search snippet)](https://sdk.poki.com/deals); [Playgama comparison](https://playgama.com/blog/business-faqs/poki-vs-crazygames-vs-gamedistribution-revenue-share/). A third-party guide claims "100% of revenue on traffic you bring, 50/50 on traffic Poki brings" — [Cinevva guide](https://app.cinevva.com/guides/publish-game-poki) — unverified and conflicts with the "percentages not published" claim.
- Poki's June 2026 "State of Web Gaming" report exists — [Poki blog 2026-06-25](https://poki.com/blog/state-of-web-gaming-report-2026) (contents not retrieved).
- CrazyGames: Basic Launch (no SDK, no monetisation, limited audience) then Full Launch (SDK required); only ads served through the CrazyGames SDK are allowed; developer earns a revenue share on SDK ads; submission needs build, SDK integration, metadata, thumbnails, cover and trailer — [CrazyGames docs FAQ](https://docs.crazygames.com/faq/); [CrazyGames requirements](https://docs.crazygames.com/requirements/intro/); [CrazyGames developer terms (2023-04-14 PDF)](https://files.crazygames.com/documents/developer_terms_20230414.pdf). €100 payout minimum via Tipalti is a third-party, unverified claim — [Cinevva CrazyGames guide](https://app.cinevva.com/guides/publish-game-crazygames)
- GameDistribution: publishers paste an official snippet; the game is chosen via GET parameters on an `embed.gamedistribution.com` iframe URL — [GitHub GameDistribution/gd-embed-game](https://github.com/GameDistribution/gd-embed-game). A 2017 Medium post claimed a three-way split (publisher site / developer / GD) leaving developers ~33% — [GameArter Medium](https://medium.com/gamearter/https-medium-com-gamearter-right-way-of-game-distribution-in-our-opinion-6f0088a3bd11) (dated; current terms not verified).
- Yandex Games runs a distribution program with documented placement methods for partner sites — [Yandex Games distribution](https://yandex.com/project/games/distrib); [Yandex placement methods](https://yandex.com/support/games-distr/en/usageurl)
- Discord Activities are web apps that run in an iframe inside Discord (desktop, mobile, web) via the Embedded App SDK (`@discord/embedded-app-sdk`), which handles the postMessage handshake; activities must be enabled in the app's developer settings — [Discord docs: How Activities Work](https://docs.discord.com/developers/activities/how-activities-work); [Discord Embedded App SDK](https://discord.com/build/embedded-app-sdk); [GitHub discord/embedded-app-sdk](https://github.com/discord/embedded-app-sdk). This is a channel for the developer's own game, not for re-hosting others'.

### Inferences
- There is no precedent among reputable hubs for framing third-party daily games without agreement; the legitimate in-page models all involve either ownership (Puzzmo, Arkadium originals), a white-label licence with rev-share (Puzzmo, Arkadium), or a developer-submitted build plus SDK (Poki, CrazyGames, GameDistribution, Yandex).
- The "dles"-style list is the lowest-risk existing model that matches a daily-games feed; the differentiator for the user would be UX (vertical feed, done-state tracking), not hosting.

### Gaps
- Whether Dailies.games, Hubdle, Dle Hunt or The Word Finder embed any games, and whether they obtained creator permission: not verifiable (pages could not be fetched).
- Current exact rev-share percentages for Poki, CrazyGames, GameDistribution, and Puzzmo/Arkadium licensing deals: not published or not retrievable.
- PlayHop (Yandex) specifics and any 2026 changes to Discord Activities policy: not researched in depth.

## 2. Official embed/distribution programs and whether NYT licenses its games

### Takeaway
Self-serve embed codes exist mainly on distribution networks (GameDistribution snippet, itch.io official embed, Yandex, Arkadium for publishers); major daily-game owners appear to embed only under signed deals (Teuteuf lead) and NYT shows no public licensing/embed program and actively enforces against Wordle clones.

### Cited Findings
- GameDistribution provides an official copy/paste iframe snippet for publishers — [gd-embed-game](https://github.com/GameDistribution/gd-embed-game)
- itch.io applies a site lock automatically on new uploads and says embeds must use its official embed code rather than direct CDN links — summarised from itch.io forum threads in search results ([itch.io post](https://itch.io/post/1066830); [itch.io post](https://itch.io/post/15800405)); exact policy page not retrieved.
- CrazyGames documents that developers can block unwanted iframe embedding with a `Content-Security-Policy: frame-ancestors` header, and offers sitelock guidance — [CrazyGames docs: sitelock](https://docs.crazygames.com/resources/html5/sitelock)
- NYT bought Wordle in Jan 2022, saying it would "initially remain free" — [MacRumors](https://www.macrumors.com/2022/01/31/new-york-times-buys-wordle/); Wordle is bundled in NYT's games subscription (~$50/yr standalone) — [NPR (2024-03-13)](https://www.npr.org/2024/03/13/1238142507/cease-desist-new-york-times-wordle-spin-offs)
- In 2024 NYT sent DMCA takedowns to "hundreds" of Wordle clone developers citing the Wordle name and look-and-feel; NYT said it has no issue with similar word games that don't infringe its "Wordle" trademarks or copyrighted gameplay — [Axios (2024-03-15)](https://www.axios.com/2024/03/15/nyt-wordle-clones-takedown-dmca-copyright); [Fortune (2024-03-13)](https://fortune.com/2024/03/13/new-york-times-wordle-clones-copyright-knock-offs/)
- Earlier, Wordle Archive shut down after an NYT legal demand (2022) — [GameSpot](https://www.gamespot.com/articles/wordle-archive-shuts-down-after-new-york-times-issues-legal-demand/1100-6501588/)
- Teuteuf provides iframe/JS snippets only after a signed partnership (unverified confidential doc) — [Scribd](https://www.scribd.com/document/811311925/Integration-Guide)
- Arkadium supplies embeddable games to publishers under licensing deals — [Arkadium game licensing](https://corporate.arkadium.com/game-licensing/)

### Inferences
- NYT games (Wordle, Connections, Strands, Mini) should be treated as link-out only; NYT's enforcement history makes it the highest-risk embed target, and use of the "Wordle" mark in the product's own branding is also risky.
- For Teuteuf titles (Worldle, Flagle, Travle), the realistic legitimate path to in-feed play is a partnership request to Teuteuf; otherwise link out.
- oEmbed is not used by any of the daily-game sources found; no daily-game provider was found publishing an oEmbed endpoint.

### Gaps
- Could not verify whether NYT has any B2B licensing for Wordle/Connections (search found none). Could not fetch NYT's terms or check frame headers.
- Did not find indie daily games (Globle, Framed, Costcodle, Tradle) publishing public "embed this game" pages; absence not confirmed.

## 3. Asking indie developers for permission; developer attitudes to aggregators

### Takeaway
Developer attitudes range from "happy as long as it's played" to aggressive retaliation against sites that iframe their games with ads; the decisive factors appear to be monetisation on top of their work and lack of permission, so a written permission (email is common) plus attribution, link-back and no ads around their game is the practical norm.

### Cited Findings
- Sqword developer Josh Simmons found aggregator sites embedding his free word game in iframes with ads, without permission, and made the game display a shock image when iframed — [404 Media](https://www.404media.co/sqword-game-dev-sneaks-goatse-onto-a-dozen-sites-that-stole-his-game/); [PC Gamer](https://www.pcgamer.com/websites-stole-and-monetized-a-free-browser-game-so-the-designer-replaced-it-with-goatse); [TechRadar](https://www.techradar.com/gaming/consoles-pc/dev-who-swapped-his-game-with-image-of-goatse-to-troll-sites-that-stole-it-says-its-one-of-his-greatest-achievements)
- On itch.io forums, some developers called unauthorised embedding theft (pointing out an authorised embed route exists), while others said "as long as my game is played I'm happy" — [itch.io post](https://itch.io/post/1066758); [itch.io post](https://itch.io/post/1066888)
- Developers discuss sitelocks and frame blocking to stop unwanted embedding; one notes hostname checks can be fooled inside iframes — [html5gamedevs: website stealing my games](https://html5gamedevs.com/topic/40123-solved-website-stealing-my-games-what-can-i-do)
- Teuteuf's apparent requirement of a signed partnership before supplying embed code — [Scribd](https://www.scribd.com/document/811311925/Integration-Guide)

### Inferences
- A reasonable permission request: short email naming the game, describing exactly how it will appear (embedded vs link-out card, screenshot use, name/logo use), offering attribution and link-back, stating whether ads/monetisation appear near it, offering a revenue share or none, and asking for written yes; keep a record and honour removal within a stated time.
- Games may silently add `frame-ancestors`/X-Frame-Options at any time, so even permitted embeds need a fallback to open in a new tab.

### Gaps
- No public statements found from the creators of Globle, Framed, Costcodle, Tradle, or Connections-likes specifically about aggregators. No Reddit r/WebGames/r/wordle threads surfaced in search (Reddit results were absent).
- No published template licence for daily-game embedding found.

## 4. Design alternatives that avoid framing

### Takeaway
A feed of self-made cards (name, short description, own screenshot or no screenshot, link) that opens each game in a new tab, an Android Custom Tab, or an iOS SFSafariViewController, with done-state tracked locally by the user, keeps most of the "daily routine" UX while removing the core framing issue; this is what the dles/Dailies/Hubdle category already does.

### Cited Findings
- Google recommends Custom Tabs for third-party web content and in-app browsing; web.dev says WebView is not recommended for building in-app browsers due to lack of site isolation; a 2024 Georgia Tech IMC study of ~146.5K apps calls Custom Tabs the recommended alternative for third-party content — [Android developers: web content in apps](https://developer.android.com/guide/webapps); [web.dev: Web on Android](https://web.dev/articles/web-on-android); [Georgia Tech IMC 2024 paper](https://faculty.cc.gatech.edu/~frankli/papers/dhruv_imc2024.pdf)
- itch.io's own guidance mentions recommending a link that opens a game in a new tab/window as an alternative to embedding — [itch.io topic](https://itch.io/t/406185/can-we-have-an-option-to-open-our-games-in-a-new-window-or-tab)
- dles lists 544 games as plain outbound links with community-sourced additions — [GitHub qubit10/dles](https://github.com/qubit10/dles)
- Some sites now block framing via CSP `frame-ancestors` — [CrazyGames docs](https://docs.crazygames.com/resources/html5/sitelock)

### Inferences (pros/cons, not sourced)
- Cards + new tab: lowest legal risk, the game's own site gets the traffic/ads (aligned with creators' interests), robust to frame blocking; con: context switch, cannot auto-detect completion (user taps "done" or the app infers from return).
- Custom Tab / SFSafariViewController: near in-app feel on mobile, still the publisher's real page and cookies/ads; con: app wrapper needs store policy compliance; still no completion detection.
- Local done-state launcher (localStorage / per-device): privacy-friendly and cookie-light (strictly necessary storage, see section 6); con: no cross-device sync without accounts.
- Browser extension that only opens tabs (e.g. "open today's set"): no framing; con: distribution friction, store review.
- Start-page/bookmark approach: simplest; least differentiated.
- Screenshots of others' games may still raise copyright questions; using own text descriptions, or screenshots with permission/press kits, lowers risk. Trademarks (e.g. "Wordle") should be used only nominatively to identify the game, not in product branding.

### Gaps
- No case law or authority specific to Norway on framing vs linking was researched here (other researchers may cover it).

## 5. Building an original catalogue (own or open-source daily games)

### Takeaway
Self-hosting is legitimate when the code licence permits it (MIT/Apache/CC0), but licence checks matter (some popular forks are noncommercial or GPL), and names, look-and-feel and word lists can carry separate restrictions, as NYT's Wordle takedowns show.

### Cited Findings
- MIT-licensed Wordle-likes: jakerella/guessle (JavaScript, last push Aug 2024); clupasq/word-mastermind (MIT, Node/Docker, listed on awesome-selfhosted); weiteck/turdle (MIT or Apache-2.0, terminal) — [GitHub jakerella/guessle](https://github.com/jakerella/guessle); [GitHub weiteck/turdle](https://github.com/weiteck/turdle)
- xem/MiniWordle is public domain / CC0 — [GitHub xem/MiniWordle](https://github.com/xem/MiniWordle)
- Licences to watch: Hugo0/wordle ("Wordle Global") uses PolyForm Noncommercial (no commercial use); mcarr823/react-words is GPL-3.0 — [GitHub Hugo0/wordle](https://github.com/Hugo0/wordle/); [Ecosyste.ms react-words](https://awesome.ecosyste.ms/projects/github.com%2Fmcarr823%2Freact-words)
- Some clones use word lists from separate sources (e.g. worple uses Knuth's GraphBase five-letter word list; grepdle uses the system dictionary), so word-list provenance is a separate licensing question — [GitHub wetherc/worple](https://github.com/wetherc/worple); [GitHub tfaughnan/grepdle](https://www.github.com/tfaughnan/grepdle)
- NYT DMCA notices targeted the Wordle name and look-and-feel; NYT says non-infringing similar word games are fine — [Axios](https://www.axios.com/2024/03/15/nyt-wordle-clones-takedown-dmca-copyright)
- Commissioning/licensing originals: Arkadium (licensing), Puzzmo (white-label rev-share), and portal ecosystems (Poki/CrazyGames developers) show a market of developers who license games — [Arkadium game licensing](https://corporate.arkadium.com/game-licensing/); [Axios on Puzzmo](https://www.axios.com/2023/10/20/puzzmo-hearst-zach-gage-new-york-times)
- FandomWire Play is an example of a media site running a hub of original daily puzzles — [FandomWire Play](https://fandomwire.com/fandomwire-play/)

### Inferences
- The safest original-catalogue path: build a small set of own daily games (word, geography, number, flag) with original names and visual design, using public-domain or permissively licensed word/geodata (e.g. Natural Earth for maps — not verified here), then link out to third-party games alongside.
- For a Norwegian audience, a Norwegian-language word game is a plausible differentiator (inference).

### Gaps
- Did not verify licences of popular geography daily-game clones (Globle's source repo licence could not be found via search). Did not verify cwackerfuss/react-wordle status (fetch returned 404).
- Norwegian word-list licensing (e.g. Norsk Ordbank / Språkrådet data terms) not researched.

## 6. Practical launch checklist from Norway

### Takeaway
A sole proprietorship (enkeltpersonforetak) is registered via Altinn's "Samordnet registermelding" and gets an organisasjonsnummer; since 1 Jan 2025 Norway's new ekomloven §3-15 requires GDPR-standard consent for non-essential cookies/tracking, with Datatilsynet guidance (Apr 2025) and active enforcement, so analytics/ads need a real consent banner while a local-only done-state can likely stay consent-free as strictly necessary.

### Cited Findings
- Registration of an enkeltpersonforetak is done in Altinn via "Samordnet registermelding" (Coordinated register notification); the Enhetsregisteret assigns the organisasjonsnummer — [Brønnøysundregistrene: Register your sole proprietorship](https://www.brreg.no/?p=36543); [Brreg guidance on Samordnet registermelding](https://brreg.no/?p=3276)
- Fee conflict: SNL's Enhetsregisteret article says registration in Enhetsregisteret is free; SNL's enkeltpersonforetak article says a fee applies from 2024 — [SNL: Enhetsregisteret](https://snl.no/Enhetsregisteret); contradicted by [SNL: enkeltpersonforetak](https://snl.no/enkeltpersonforetak). Check brreg.no for current fees.
- A government proposal to simplify/relax mandatory ENK registration exists; a 2024–2025 Storting law decision on Enhetsregisteret changes appears in results — [Regjeringen: Vil gjøre det enklere å registrere enkeltpersonforetak](https://www.regjeringen.no/no/aktuelt/vil-gjore-det-enklere-a-registrere-enkeltpersonforetak/id2923533/); [Stortinget lovvedtak 2024-25 nr. 82](https://www.stortinget.no/no/Saker-og-publikasjoner/Vedtak/Beslutninger/Lovvedtak/2024-2025/vedtak-202425-082/?m=0) (whether in force and its content not verified)
- Skatteetaten has a "getting started" page for new ENK owners (tax/MVA obligations) — [Skatteetaten: Kom i gang](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/ny-som-naringsdrivende/oppstart/?pageid=482534)
- New Electronic Communications Act in force 2025-01-01; cookie rule moved from §2-7b to §3-15; consent must meet GDPR standard; implied consent removed — [Usercentrics](https://usercentrics.com/knowledge-hub/e-com-act-regulatory-updates-for-cookie-use-in-norway/); [CookieHub](https://cookiehub.com/blog/norways-new-electronic-communications-act-2025-everything-your-website-needs-to-know); [Piwik PRO](https://piwik.pro/blog/norwegian-e-com-act-2025/)
- Conflict on browser-settings consent: Usercentrics says the browser-settings route was eliminated; Cookie Information says passive mechanisms such as pre-set browser consents may be relied on — [Usercentrics](https://usercentrics.com/knowledge-hub/e-com-act-regulatory-updates-for-cookie-use-in-norway/); contradicted by [Cookie Information](https://cookieinformation.com/blog/norwegian-cookie-guidelines-explained/)
- Datatilsynet published guidance on 2025-04-03 and is auditing sites' consent collection — [Cookie Information: Norwegian cookie guidelines](https://cookieinformation.com/regulations/cookie-guidelines/norwegian-cookie-guidelines); [Cookie Information interview with Jan Sandtrø](https://cookieinformation.com/blog/2025-norwegian-e-com-act-tech-law-expert-interview/)

### Inferences (checklist; items not individually sourced above should be verified)
1. Business: register ENK in Altinn (free/fee per brreg.no); register for MVA only if turnover crosses the threshold (verify current threshold with Skatteetaten).
2. Domain: .no domains require a Norwegian organisasjonsnummer for organisations via Norid (verify); otherwise any TLD.
3. Privacy policy (personvernerklæring) per GDPR: controller identity (name, org.nr, contact), what is stored (prefer local-only done-state), processors (hosting, analytics), legal bases, retention, rights, Datatilsynet complaint route.
4. Cookies: avoid non-essential trackers at launch or use a consent banner meeting GDPR standard (equal "reject" option, no pre-ticked boxes); outbound links themselves set no cookies on the user's domain.
5. Contact and takedown: a visible contact address and a "creators: request removal / correction" form with a stated response time (e.g. 48–72 h); log permissions received.
6. Attribution: per card, game name, creator name, link to official site; no use of others' logos/marks in own branding.
7. Terms of use: disclaim affiliation ("not affiliated with The New York Times/Teuteuf…").
8. Ads/monetisation: if any, keep them off creators' content and consider revenue share for permitted embeds.

### Gaps
- Norid rules for .no registration by individuals vs ENK not verified this session.
- Current MVA threshold and ENK registration fee not verified from primary sources.
- Norwegian marketing-law (markedsføringsloven) or e-commerce-law (ehandelsloven §8 information duties) requirements for site operator info not researched; likely relevant.
