// Open a blank page on startup, don't offer session restore unless crashed
user_pref("browser.startup.page",1);
user_pref("browser.sessionrestore.resume_session_once",false);
user_pref("browser.sessionrestore.resume_from_crash", true);
// Disable tab groups, AI tab-group naming, AI chat.
user_pref("browser.tabs.groups.enabled",false);
user_pref("browser.tabs.groups.smart.userEnabled",false);
user_perf("browser.ml.chat.enabled", false);
// Disable search "mode" suggestions
user_pref("browser.urlbar.shortcuts.actions",false); 
user_pref("browser.urlbar.shortcuts.bookmarks",false);
user_pref("browser.urlbar.shortcuts.history",false);
user_pref("browser.urlbar.shortcuts.tabs",false);
// Allow firefox to phone google for search suggestions in non-private sessions
user_pref("browser.search.suggest.enabled", true); 
user_pref("browser.search.suggest.enabled.private", false);
// Control what local stuff gets suggested
user_pref("browser.urlbar.suggest.history", true); 
user_pref("browser.urlbar.suggest.topsites", true);
user_pref("browser.urlbar.suggest.bookmark",true);
user_pref("browser.urlbar.suggest.recentsearches",true);
user_pref("browser.urlbar.suggest.engines",false);
user_pref("browser.urlbar.suggest.trending",false);
// Disable Firefox Suggest
user_pref("browser.urlbar.suggest.quicksuggest.enabled",false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored",false);
user_pref("browser.urlbar.suggest.quicksuggest.all",false);
// HTTPS Only
user_pref("dom.security.https_only_mode",true);
// Don't save credit card info, credentials
user_pref("extensions.formautofill.creditCards.enabled",false);
user_pref("signon.rememberSignons",false);
// Use GPC where possible
user_pref("privacy.globalprivacycontrol.enabled",true);
user_pref("privacy.globalprivacycontrol.functionality.enabled",true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled",true);
// Isolate cookies to the domains that provide them
user_pref("privacy.firstparty.isolate",true);
// No geolocation
user_pref("geo.enabled",false);
// Firefox Sync (but just for browser config)
user_pref("services.sync.engine.addons", true);
user_pref("services.sync.engine.prefs", true);
user_pref("services.sync.engine.bookmarks", false);
user_pref("services.sync.engine.history", false);
user_pref("services.sync.engine.tabs", false);
user_pref("services.sync.engine.passwords", false);
user_pref("services.sync.engine.addresses", false);
user_pref("services.sync.engine.creditcards", false);


