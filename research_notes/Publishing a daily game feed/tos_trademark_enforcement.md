# ToS, trademark position and enforcement history of daily web games shown in a public iframe feed

Research date: 2026-11-21. Informational only, not legal advice.

Method note (important for the report writer): in this session WebFetch and curl could not reach any primary source. Blocked or unresolvable hosts: help.nytimes.com, nytimes.com, npr.org, hodgsonruss.com, euronews.com, techdirt.com, teuteuf.fr, flagle.io, globle-game.com, krillion.io, magnitudle.com, lovdata.no. Every finding below therefore comes from web-search result summaries and snippets, not from reading full pages. **No game site's own Terms page was read verbatim**, and NYT's ToS is quoted only through secondary reporting. Before relying on any of this, someone needs to read the primary pages and check whether each site sends anti-framing headers (X-Frame-Options or CSP frame-ancestors). Claims marked "unverified / from background knowledge" have no source from this session.

## Q1. What do the NYT Terms of Service / Games terms say about framing, embedding, scraping or display on other sites? Is there an official embed option?

### Takeaway
NYT's Terms limit site content to "personal, non-commercial use" and ban automated scraping and data-mining. Both points are reported by several outlets covering the August 2023 update. I could not retrieve or verify a specific "framing" clause, and I found no official Wordle or Games embed or affiliate programme. Treat showing Wordle inside a third-party commercial feed as outside the permitted use.

### Cited Findings
- NYT Terms: "the contents of the Services, including the Site, are intended for your personal, non-commercial use." In August 2023 NYT added that non-commercial use excludes "the development of any software program, including, but not limited to, training a machine learning or artificial intelligence (AI) system" without written consent (Section 2.1, with a parallel ban in Section 4.1). Sources: [Hypebeast, Aug 2023](https://hypebeast.com/2023/8/new-york-times-prohibits-ai-scaping-content-training-info); [Maginative](https://www.maginative.com/article/the-new-york-times-cracks-down-on-ai-scraping-its-content/); [PopSci](https://www.popsci.com/technology/nyt-generative-ai/)
- The prohibited-use section bars use of "robots, spiders, scripts, service, software or any manual or automatic device, tool, or process designed to data mine or scrape" NYT content. It warns that violations "may result in civil, criminal, and/or administrative penalties, fines, or sanctions against the user and those assisting the user." Sources: [CDP Institute](https://www.cdpinstitute.org/news/nyt-acts-to-protect-against-content-scraping/); [DesignTAXI](https://designtaxi.com/news/424619/The-New-York-Times-Updates-Terms-To-Block-AI-Use-Of-Its-Content/)
- None of the search results showed games-specific terms. One summary noted that the results "don't cover whether the clause mentions games or puzzles." Source: [search summary of the sources above](https://www.maginative.com/article/the-new-york-times-cracks-down-on-ai-scraping-its-content/)

### Inferences
- A public, ad-supported feed that frames nytimes.com/games/wordle is hard to square with "personal, non-commercial use." Even if framing alone isn't scraping, the feed operator is the party "assisting" users, and the clause names such parties.
- If the feed pre-fetches, proxies or automates anything (for example thumbnails, screenshots or a "today's puzzle" preview), it falls straight under the anti-scraping clause.
- Unverified, from background knowledge: NYT Games normally offers only result-sharing (the emoji grid) and links. I know of no official iframe or embed widget for Wordle. NYT very likely sends anti-framing headers, which needs a live test. If it does, the iframe simply won't load. Getting around that (for example with a proxy) would, in the EU, run into the CJEU's VG Bild-Kunst ruling (C-392/19, 2021): framing that circumvents a rightholder's anti-framing measures is a new "communication to the public." This is unverified here.

### Gaps
- I could not read the verbatim current NYT Terms of Service, its last-updated date, or any NYT Games terms. help.nytimes.com and nytimes.com were blocked. I could not confirm whether a clause expressly bans "framing" or "mirroring."
- I did not check whether NYT offers any affiliate, licensing or embed partnership for Games in 2026. No sources found.

## Q2. NYT enforcement history: clone takedowns, Wordle trademark registrations, later enforcement (2022–2026), and action against aggregators or framers

### Takeaway
NYT enforces Wordle aggressively against clones and confusingly similar names, but every recorded action targets copies or similar marks, not framing.
- **2022:** took down Wordle archive sites.
- **March 2024:** sent DMCA notices covering roughly 1,900 GitHub forks of "Reactle," claiming the name, the mechanics, and the green/yellow 5x6 grid.
- **June 2024 to November 2026:** opposed the US trademark application for **WORLDLE** (geography game). The TTAB sustained the opposition on **4 November 2026**.

NYT now holds at least one US WORDLE registration, issued in 2023 or 2025 depending on the source. It has had mixed results in Europe: a German loss in 2024, and a UK invalidation win in 2026.

### Cited Findings
- **2022:** NYT took down a pair of Wordle archive sites that let users replay past puzzles. This was separate from the later clone notices. Sources: [Engadget](https://www.engadget.com/the-new-york-times-is-cracking-down-on-wordle-clones-100004668.html); [CBS News](https://www.cbsnews.com/news/nyt-copyright-takedown-wordle-clones-new-york-times)
- **March 2024:** NYT filed at least three DMCA takedown requests with GitHub covering Wordle clones, including about 1,900 forks of the open-source "Reactle" repository. The story was first reported by 404 Media. Sources: [404 Media](https://404media.co/nytimes-files-copyright-takedowns-against-hundreds-of-wordle-clones); [PC Gamer](https://www.pcgamer.com/games/puzzle/nearly-2000-wordle-clones-targeted-as-nyt-issues-dmca-takedown); [Axios, 15 Mar 2024](https://www.axios.com/2024/03/15/nyt-wordle-clones-takedown-dmca-copyright)
- The notices claimed ownership of the name "Wordle" and its mechanics, and pointed to the green and yellow tiles and the 5x6 grid. Reactle's creator, Chase Wackerfuss, took the repository down. Some creators and copyright lawyers called the notices "overreach." Sources: [NPR, 13 Mar 2024](https://www.npr.org/2024/03/13/1238142507/cease-desist-new-york-times-wordle-spin-offs); [Fortune, 13 Mar 2024](https://fortune.com/2024/03/13/new-york-times-wordle-clones-copyright-knock-offs/)
- **WORLDLE opposition:**
  - Facts: opposition no. 91291631 against application serial 97455658, filed by Worldle LLC for geography games. The notice of opposition was filed **6 June 2024** (ESTTA1363263). Sources: [TTABVUE filing](https://ttabvue.uspto.gov/ttabvue/ttabvue-91291631-OPP-4.pdf); [TTABVUE docket](https://ttabvue.uspto.gov/ttabvue/v?eno=8&mode=frame&pno=91291631&pty=OPP)
  - Ruling: the TTAB (non-precedential opinion mailed **4 November 2026**) sustained NYT's opposition and refused registration. It found WORLDLE likely to cause confusion with WORDLE and called the goods "very closely related." Sources: [TTAB opinion PDF](https://business.cch.com/ipld/NewYorkTimesCompanyWorldleLLCTTAB20261104110626.pdf); [Law360, 6 Nov 2026](https://www.law360.com/articles/2547389/nyt-blocks-worldle-tm-bid-over-confusion-with-wordle-); [VitalLaw](https://www.vitallaw.com/news/trademark-ttab-worldle-likely-to-cause-confusion-with-wordle-mark-for-games/ipm015e51e8ae23764ac3b3c5de53e3fd543e)
  - Scope: early 2024 reporting said NYT wanted a name change. A later correction said NYT had only opposed *registration*, not the game's continued use. Source: [Techdirt, 6 Jun 2024](https://www.techdirt.com/2024/06/06/the-ny-times-challenges-worldles-name-as-the-war-on-wordle-likes-continues/)
  - Applicant identity: CBC named the developer Kory McDonald as the applicant, while the TTAB record lists Worldle LLC. Sources: [CBC As It Happens](https://www.cbc.ca/radio/asithappens/worldle-versus-wordle-1.7224655); [TTAB opinion](https://business.cch.com/ipld/NewYorkTimesCompanyWorldleLLCTTAB20261104110626.pdf). I could not confirm whether Worldle LLC is the same operator as Teuteuf's worldle.teuteuf.fr. **Report writer: flag this ambiguity.**
- **US WORDLE marks (NYT)**, all status data from third-party aggregators:
  - Serial 97208238: reportedly registered 15 Aug 2023. Source: [Markinton](https://markinton.com/trademark/wordle-97208238)
  - Serial 97248806 (Class 41): registered 4 Nov 2025 as Reg. No. 8007319. Source: [Markinton](https://markinton.com/trademark/wordle-97248806)
  - Serial 98106712 (filed 28 Jul 2023, multi-class): pending. Source: [Markinton](https://markinton.com/trademark/wordle-98106712)
  - Serial 97510050: shown as pending or suspended as of July 2026. Sources: [TrademarkElite](https://www.trademarkelite.com/trademark/trademark-detail/97510050/WORDLE); [Markinton](https://markinton.com/trademark/wordle-97510050)
  - Serial 97229034 (Class 9, Jan 2022): dead. Source: [Markinton](https://markinton.com/trademark/wordle-97229034)
- **Germany (2024):** a German court dismissed NYT's case over the Wordle trademark against a German rival "Wordle" (Stefan Heine). Source: [Euronews, 21 Jul 2024](https://www.euronews.com/2024/07/21/new-york-times-unable-to-push-germanys-wordle-out-of-puzzle-market)
- **UK (2026):** UKIPO decision O/0061/26 invalidated the UK designation of Stefan Heine's international registration for WORDLE, on grounds of bad faith and NYT's earlier rights, even though NYT held no UK registration. Sources: [National Law Review](https://natlawreview.com/article/oh-my-wordle-new-york-times-succeeds-invalidating-uk-wordle-trade-mark-without-uk); [JD Supra](https://www.jdsupra.com/legalnews/oh-my-word-le-new-york-times-succeeds-3902527/); [Law360](https://www.law360.com/articles/2438322)

### Inferences
- I found no reported NYT action against a site for *framing* or *linking to* the real Wordle. Every documented target copied the game, its archive, or a similar name. That said, an ad-funded feed that shows the "Wordle" name and logo alongside other "-dle" games combines things NYT has shown it cares about: brand control, the 5x6 grid, and related names.
- The Worldle ruling matters to this feed. NYT has now won a US finding that WORLDLE (one of the user's games) is confusingly similar to WORDLE. A feed listing "Wordle" and "Worldle" side by side doesn't infringe on that basis alone. But it puts the feed operator in the middle of a live dispute, and a Worldle owner can't register its name in the US.
- In the EU and Norway, NYT's trademark position for WORDLE looks weaker. It lost in Germany in 2024 and I found no confirmed EUTM. NYT's main tools there would be copyright, contract (ToS) and unfair-competition law rather than trademark. This is uncertain.

### Gaps
- I could not confirm whether NYT holds an EUTM, a Norwegian registration, or a WIPO registration designating Norway for WORDLE. No EUIPO or Patentstyret records surfaced.
- I don't know whether Worldle LLC appealed the 4 Nov 2026 TTAB decision.
- I found no NYT cease-and-desist letters aimed at aggregators or "Wordle alternatives" portals. Absence of reports doesn't mean absence of letters.
- Background facts from memory, unverified here: NYT bought Wordle from Josh Wardle on 31 Jan 2022 for a reported "low seven figures," and Wordle moved to nytimes.com in Feb 2022.

## Q3. Ownership and ToS of the smaller games; terms on embedding or framing; indie devs on aggregators

### Takeaway
Most of these games are solo-developer or small-studio projects funded by advertising.
- **Worldle and Flagle:** Teuteuf Games, an Irish/US studio, with T&C pages I couldn't read.
- **Globle:** Abe Train / Trainwreck Labs. Not acquired. Monetised with Nitro (Overwolf).
- **Magnitudle:** "Teej," published by GriddleLink Games.
- **Krillion:** solo developer "kp."
- **Plain Game, Daily Roll, wordle.global, WhoWhatWhere, Daily Unfold:** no ownership or terms information found.

I verified no site's anti-framing terms. Because these games live on ad revenue, framing them inside a feed that runs its own ads is the most commercially sensitive part of the plan.

### Cited Findings
- **Teuteuf Games (Worldle, Flagle):**
  - Describes itself as an Irish and American studio specialising in daily puzzle games. CEO Mariano Di Murro. Claimed over a million daily active users across its free-to-play titles in October 2025. I found no reports of an acquisition. Source: [search summary of Teuteuf / Worldle Irish-language announcement, Oct 2025](https://markets.financialcontent.com/borgernewsherald/article/abnewswire-2025-10-2-worldle-goes-gaeilge-global-hit-game-adds-irish-language-announced-at-nexus-irish-games-conference)
  - Flagle.io's about page identifies it as Teuteuf Games. Flagle and the Teuteuf account pages link to "Terms & Conditions," but I couldn't retrieve the text. Sources: [flagle.io/about](https://www.flagle.io/about); [teuteuf.fr](https://teuteuf.fr/); [account.teuteuf.fr](https://account.teuteuf.fr/login)
  - Teuteuf's games have been cloned: there is an open-source "inspired by @teuteuf's Worldle" flag game, and an App Store "Worldle" app credited as "inspired by worldle web app by teuteuf." Sources: [GitHub amckenna41/flagle](https://github.com/amckenna41/flagle); [App Store](https://apps.apple.com/us/app/worldle/id6444031120)
- **Globle:**
  - Created by Abe Train, a Canadian developer and CEO of Trainwreck Labs. Sources: [CJN podcast](https://thecjn.ca/podcasts/meet-the-canadian-behind-globle-the-webs-hot-new-geography-game/); [hey.gg blog](https://www.hey.gg/blog/trainwrecklabs)
  - Forbes (5 Nov 2026) describes a one-person studio "funded primarily by advertising" that chose Nitro, the monetisation business Overwolf bought in 2024, as a partner rather than selling. I found no acquisition of Globle. Source: [Forbes, 5 Nov 2026](https://www.forbes.com/sites/ianshepherd/2026/11/05/globle-shows-how-free-games-can-become-serious-businesses-for-creators/)
  - Unofficial forks exist, such as "globle-unlimited." Source: [GitHub](https://github.com/Andrewq11/globle-unlimited)
- **Magnitudle:** made by "Teej," a solo developer, and published through GriddleLink Games (also behind GlobeHoppr and "Size It Up"). One low-quality aggregator names a different creator. Sources: [magnitudle.com](https://magnitudle.com/); [peerpush.com](https://peerpush.com/p/magnitudle)
- **Krillion:** made by a solo developer using the pseudonym "kp," who isn't named on krillion.io. Sources: [krillionwiki.com](https://krillionwiki.com/basics/who-made-krillion); [aiidelist.com](https://aiidelist.com/blog/krillion-creator-kp-ai-technology)
- No search turned up a direct public complaint from a daily-puzzle developer about an aggregator framing their game and taking traffic or ad revenue. Source: [search summary, no direct hit; nearest material was Gamezop's iframe-distribution model](https://business.gamezop.com/blog/iframe-games)

### Inferences
- For ad-funded indie games like Globle (via Nitro) and the Teuteuf titles, an iframe in a third-party feed may still show the game's own ads. But viewability, ad-network domain policies and frequency caps often make in-iframe ads earn less or get blocked. At the same time, the feed sells ads next to the game. That makes it likely developers will object (by email, a framing block, or a C&D), even if few have done so publicly. This is reasoned, not sourced.
- Several of these developers are reachable solo creators: Teej, kp, Abe Train. Getting written permission is realistic, and it is the cleanest way to remove the ToS risk.

### Gaps
- I couldn't read the Terms & Conditions of teuteuf.fr / flagle.io / worldle.teuteuf.fr, globle-game.com, krillion.io, magnitudle.com, plaingame.fun / playplain.app, playdailyroll.com, wordle.global, playwhowhatwheregame.com or dailyunfold.com. I can't say whether any of them expressly bans framing.
- No information found on who owns Plain Game, Daily Roll, wordle.global, WhoWhatWhere or Daily Unfold.
- I didn't test whether any site sends X-Frame-Options or CSP frame-ancestors headers. Network blocked.
- Note on wordle.global: the name itself contains "Wordle." Given NYT's DMCA and trademark record, that site may itself be a target, and featuring it adds risk. This is an inference; I found nothing on the site.

## Q4. Trademark, passing off and unfair competition: game names and logos, implied affiliation, ads around others' games (Norway, EU, US)

### Takeaway
Using game names *only to identify* the real game you are linking or framing is generally defensible: descriptive or nominative use. Logos, branded presentation and anything that implies partnership raise the risk.

In Norway the general clause, markedsføringsloven § 25 (good business practice between businesses), and § 30 (imitation) are *supplementary* to trademark law. The Supreme Court (HR-2021-2479-A and HR-2021-2480-A, 14 Dec 2021) treats them as residual, with a high threshold. Systematic free-riding on another's product and goodwill can still be caught.

### Cited Findings
- Norwegian Supreme Court, HR-2021-2479-A (Bank Norwegian, 14 Dec 2021): buying competitors' trade names as search keywords did not breach § 25. The court treated § 25 as a discretionary standard that applies where trademark law does not capture the conduct, aligned with EU case law and the balance struck in trademark rules. Sources: [Domstol.no PDF](https://www.domstol.no/globalassets/upload/hret/avgjorelser/2021/desember-2021/hr-2021-2479-a.pdf); [Lovdata](https://lovdata.no/dokument/HRSIV/avgjorelse/hr-2021-2479-a)
- HR-2021-2480-A (Stortorvet Gjestgiveri, 14 Dec 2021): supplementary protection is mainly § 25, and the same applies to § 30 (imitation). No breach on the facts. Both provisions reach conduct that trademark law doesn't necessarily cover. Source: [Domstol.no PDF](https://www.domstol.no/globalassets/upload/hret/avgjorelser/2021/desember-2021/hr-2021-2480-a.pdf)
- Lower courts treat § 25 as a residual provision with a high threshold where the claimed interest isn't protected by special rules. A Borgarting Court of Appeal ruling found that systematic, particularly close imitation breached § 25, and the Supreme Court refused leave to appeal (the Brødrene Dahl matter). Sources: [CLP](https://www.clp.no/aktuelt/ny-dom-om-etterlikning-i-strid-med-markedsfoeringsloven-25); [Oslo tingrett 15.12.2020](https://tendenadvokat.no/dokumenter/Oslo-tingretts-dom-15.12.2020.pdf); [NIR Waterhole paper on the relationship between varemerkeloven and markedsføringsloven](https://tambourine-nonagon-htrz.squarespace.com/s/Forholdet-mellom-varemerkeloven-og-markedsfringsloven.pdf)
- The Norwegian Supreme Court has not decided whether exploiting another's reputation ("snylting," a concept from EU case law) is in itself contrary to § 25. Source: [Rett24, "Bratte varemerker i fritt fall"](https://rett24.no/articles/bratte-varemerker-i-fritt-fall)
- The Næringslivets Konkurranseutvalg (the Norwegian business community's own competition-practice panel) issues non-binding opinions under § 25 and § 30, for example Sak 06-2019. Source: [konkurranseutvalget.no](https://www.konkurranseutvalget.no/uttalelser/sak-06-2019)

### Inferences
- **Norway / § 25:** the risk is less about naming games and more about the overall business model: a commercial feed whose core product is other businesses' games, with the feed taking ad revenue and engagement those businesses would otherwise get. Under the 2021 Supreme Court line, a § 25 claim would probably need more than "you framed my free site." Systematic appropriation, misleading presentation, or circumventing technical barriers would strengthen one. Uncertain; no case law on game framing was found.
- **Trademark (varemerkeloven § 4 / EU Trade Mark Directive Art. 10 and 14), unverified here:** naming a game to identify it, linking to its official source, and showing no logos is closest to permitted descriptive use. Using logos or favicons as feed branding, "official" wording, or a layout that looks like the publisher's suggests a commercial connection, which is the core trademark harm.
- **US, Lanham Act (from background knowledge, unverified here):**
  - § 32 covers registered marks; § 43(a) covers false endorsement, false association and unregistered marks.
  - Nominative fair use (New Kids on the Block v. News America, 9th Cir. 1992) allows using a mark to refer to the owner's product if the use is necessary, takes no more than needed (usually words, not logos), and suggests no sponsorship.
  - NYT's registered WORDLE mark (Class 41) and its WORLDLE win make NYT the most likely US claimant.
- **EU:** there is no fully harmonised business-to-business unfair-competition law. National general clauses (Germany's UWG § 4 No. 3 slavish imitation, France's *concurrence déloyale / parasitisme*, Norway's mfl. § 25 and § 30) do the work. Copyright framing case law (Svensson C-466/12, BestWater C-348/13, VG Bild-Kunst C-392/19) generally allows framing of freely available content *unless* it circumvents anti-framing measures. This is background knowledge, unverified in this session; check it with the copyright researcher.
- Practical mitigations that follow from the above: show plain-text names only (no logos unless permitted); add a clear "not affiliated with or endorsed by …" notice and attribution; link out to the official site; respect frame-blocking headers and never proxy; keep the feed's own ads visually separate from the game; drop or replace any game whose owner objects.

### Gaps
- I couldn't read the text of markedsføringsloven (lov 9. januar 2009 nr. 2) § 25 and § 30 on lovdata.no (blocked). The provision numbers are confirmed by the Supreme Court judgments above.
- I found no Norwegian or EU case on framing, aggregating or embedding third-party *games* under unfair-competition law.
- I didn't verify US case citations (New Kids; Lanham Act sections) in this session.

## Q5. Is a ToS breach enforceable against a site operator who never "agreed" (browsewrap)? EU/Norway and US

### Takeaway
A browsewrap usually binds only if the operator had actual or constructive notice and showed assent under national contract law.
- **EU:** the CJEU in *Ryanair v PR Aviation* (C-30/14, 15 Jan 2015) allowed contractual limits on unprotected databases, but left contract formation to national law. On remand, the Hague Court of Appeal (2018) reportedly held that Ryanair's browsewrap did *not* bind the scraper.
- **US:** browsewraps without conspicuous notice are generally unenforceable (*Nguyen v. Barnes & Noble*, 9th Cir. 2014, unverified here).

Caveat: a feed operator who builds the integration knowingly, and especially one who receives a C&D, will have actual notice, which weakens the browsewrap defence.

### Cited Findings
- CJEU C-30/14 *Ryanair v PR Aviation* (Jan 2015): where a database is protected by neither copyright nor the sui generis right, the Database Directive doesn't stop the owner limiting its use by contract, for example website terms banning screen scraping. Sources: [Global Legal Post](https://www.globallegalpost.com/blogs/ecj-clarifies-database-directive-scope-in-screen-scraping-case-128701); [EU Law Radar](https://eulawradar.com/case-c-3014-ryanair-grounding-a-go-compare-an-airfare-website/); [Lexology](https://www.lexology.com/library/detail.aspx?g=892f2083-6557-4314-9cad-900d710d67c3)
- Whether such terms bind the scraper depends on whether a contract was formed under national law. The Dutch Supreme Court sent that question back to the Hague Court of Appeal. Dutch coverage headlined the result "Ryanair cannot prohibit scraping by browse-wrap" (7 Mar 2018). Source: [Mediareport.nl, 7 Mar 2018](https://mediareport.nl/auteursrecht/07032018/ryanair-kan-scrapen-niet-met-browse-wrap-verbieden/)
- Earlier in the same litigation, a court rejected Ryanair's screen-scraping claim for lack of evidence. Source: [Lexology, "Is this the end of screen scraping?"](https://www.lexology.com/library/detail.aspx?g=01b7f1a1-6ad5-4dc9-9524-4d42c3012e0d)

### Inferences
- **Norway:** contract formation follows avtaleloven (the Contracts Act) and general principles. Just loading a page with a footer "Terms" link is a weak basis for binding a business operator. Unverified; I found no Norwegian browsewrap case.
- **US (background knowledge, unverified):**
  - *Nguyen v. Barnes & Noble* (9th Cir. 2014, 763 F.3d 1171): a browsewrap is unenforceable without actual or constructive notice.
  - Courts have enforced terms against sophisticated commercial actors who had actual knowledge, for example after a C&D (*Register.com v. Verio*, 2d Cir. 2004).
  - Separately, *hiQ v. LinkedIn* (9th Cir. 2022) limited CFAA claims over public pages, though hiQ later lost on breach of contract.
- Even if the ToS doesn't bind, the same conduct can be pursued through trademark, copyright (if anti-framing measures are circumvented) or unfair-competition law (Q4). So "never agreed" lowers contract risk but doesn't remove legal risk.

### Gaps
- I didn't retrieve or verify any US browsewrap cases in this session.
- No Norwegian authority on browsewrap or website terms against businesses was found.

## Q6. Existing daily-game aggregators and hubs: do they embed or link? Any shut down or sent C&Ds?

### Takeaway
Many "daily games" directory and wiki sites exist, for example dailygamestoplay.com, bestdaily.games, playlin.io, krillionhq.com and krillionwiki.com. From search snippets alone I couldn't tell which embed and which only link. I found no reported shutdown or C&D aimed at a hub that only links. The documented takedowns (Q2) hit sites that *copied* games or archives. The licensed alternative is the B2B iframe-distribution model (Gamezop, GameDistribution, Playgama), where developers opt in and get a revenue share.

### Cited Findings
- Aggregator and directory pages exist for these games: "Magnitudle: how to play and games like it" (dailygamestoplay.com), "Magnitudle: Daily Estimation Question, Scoring & Rules" (bestdaily.games), "Magnitudle: Play the Daily Estimation Game" (playlin.io). The playlin.io title suggests it may embed or launch the game, which I didn't verify. Sources: [dailygamestoplay.com](https://dailygamestoplay.com/games/magnitudle); [bestdaily.games](https://bestdaily.games/games/magnitudle/); [playlin.io](https://playlin.io/game/magnitudle/)
- Unofficial fan or explainer sites exist for Krillion. Sources: [krillionhq.com](https://krillionhq.com/); [krillionwiki.com](https://krillionwiki.com/basics/who-made-krillion)
- **Licensed iframe distribution:** Gamezop describes publishers embedding iframe games while developers keep in-game ad revenue. Sources: [Gamezop blog](https://business.gamezop.com/blog/iframe-games); [CrazyGames docs FAQ](https://docs.crazygames.com/faq/)
- A 2026 monetisation comparison reports that Playgama pays a fixed 50% on its own site and iframe partners, and that GameDistribution's developer agreement takes a 33% share of net revenue. Source: [Impulse Media Hub, 2026](https://www.impulsemediahub.com/blog/html5-game-monetization-2026/)
- The archive sites NYT took down in 2022 recreated past puzzles rather than linking. Source: [Engadget](https://www.engadget.com/the-new-york-times-is-cracking-down-on-wordle-clones-100004668.html)

### Inferences
- The norm among daily-game hubs seems to be *listing and linking*, often with explainer content for SEO, rather than framing the live game. That fits the view that link-out is the low-risk default and framing without permission is the outlier. This rests on snippets, not on inspecting the sites.
- For an iframe feed, the closest industry precedent is opt-in distribution (Gamezop / GameDistribution / Playgama): written permission and a revenue share. That suggests a per-game permission or partner model for indie titles, and link-out (or a screenshot plus "Play on nytimes.com") for NYT Wordle.

### Gaps
- I couldn't confirm whether any named hub embeds games in iframes, or whether any hub received a C&D or was shut down. Searches returned no such reports.
- No public statement by a daily-game indie developer about aggregators framing their game was found. That is a known unknown, not evidence that they don't mind.
