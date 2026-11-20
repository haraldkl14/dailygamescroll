// The game domain list lives in ONE place: "host_permissions" in manifest.json.
// Chrome needs host permission for a site before a rule may modify its headers,
// so this worker turns that same list into the rule's requestDomains.
// After editing the list: chrome://extensions → click the reload icon.

const FEED_INITIATORS = ["localhost", "127.0.0.1"]; // where your feed is served
const RULE_ID = 1;

function gameDomains() {
  const patterns = chrome.runtime.getManifest().host_permissions || [];
  // "https://*.flagle.io/*" -> "flagle.io" (requestDomains also matches subdomains)
  const hosts = patterns.map((p) => new URL(p.replace("://*.", "://")).hostname);
  return [...new Set(hosts)];
}

async function installRule() {
  const requestDomains = gameDomains();
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [RULE_ID],
    addRules: [
      {
        id: RULE_ID,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "x-frame-options", operation: "remove" },
            { header: "content-security-policy", operation: "remove" },
          ],
        },
        condition: {
          requestDomains,                    // only the game sites
          resourceTypes: ["sub_frame"],      // only when loaded inside an iframe
          initiatorDomains: FEED_INITIATORS, // only when the iframe is on your local feed
        },
      },
    ],
  });
  console.log("Daily Scroll rule installed for:", requestDomains.join(", "));
}

chrome.runtime.onInstalled.addListener(installRule); // install + every reload/update
chrome.runtime.onStartup.addListener(installRule);   // belt and braces on browser start
