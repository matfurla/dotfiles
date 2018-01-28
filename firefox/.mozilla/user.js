/******************************************************************************
 * user.js                                                                    *
 * https://github.com/pyllyukko/user.js                                       *
 ******************************************************************************/

/******************************************************************************
 * SECTION: STARTUP                                                           *
 ******************************************************************************/

// PREF: Disable slow startup options

user_pref("browser.slowStartup.notificationDisabled",            true);
user_pref("browser.slowStartup.maxSamples",                      0);
user_pref("browser.slowStartup.samples",                         0);
user_pref("browser.rights.3.shown",                              true);
user_pref("browser.startup.homepage_override.mstone",            "ignore");
user_pref("startup.homepage_welcome_url",                        "");
user_pref("startup.homepage_welcome_url.additional",             "");
user_pref("startup.homepage_override_url",                       "");
user_pref("browser.laterrun.enabled",                            false);

/******************************************************************************
 * SECTION: HTML5 / APIs / DOM                                                *
 ******************************************************************************/

// PREF: Disable web notifications
// https://support.mozilla.org/t5/Firefox/I-can-t-find-Firefox-menu-I-m-trying-to-opt-out-of-Web-Push-and/m-p/1317495#M1006501
user_pref("dom.webnotifications.enabled",			false);

// PREF: Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
user_pref("dom.enable_performance",				false);

// PREF: Make sure the User Timing API does not provide a new high resolution timestamp
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
user_pref("dom.enable_user_timing",				false);

// PREF: Disable Location-Aware Browsing (geolocation)
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled",					false);

// PREF: When geolocation is enabled, use Mozilla geolocation service instead of Google
// https://bugzilla.mozilla.org/show_bug.cgi?id=689252
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// PREF: When geolocation is enabled, don't log geolocation requests to the console
user_pref("geo.wifi.logging.enabled", false);

// PREF: Don't reveal your internal IP when WebRTC is enabled (Firefox >= 42)
// https://wiki.mozilla.org/Media/WebRTC/Privacy
// https://github.com/beefproject/beef/wiki/Module%3A-Get-Internal-IP-WebRTC
user_pref("media.peerconnection.ice.default_address_only",	true); // Firefox 42-51
user_pref("media.peerconnection.ice.no_host",			true); // Firefox >= 52

// PREF: Disable battery API (Firefox < 52)
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
// https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
user_pref("dom.battery.enabled",				false);

// PREF: Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled",				false);

// PREF: Disable "beacon" asynchronous HTTP transfers (used for analytics)
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled",					false);

// PREF: Disable speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://wiki.mozilla.org/HTML5_Speech_API
user_pref("media.webspeech.recognition.enable",			false);

// PREF: Disable speech synthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
user_pref("media.webspeech.synth.enabled",			false);

// PREF: Disable sensor API
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled",				false);

// PREF: Disable gamepad API to prevent USB device enumeration
// https://www.w3.org/TR/gamepad/
// https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled",				false);

// PREF: Disable virtual reality devices APIs
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
user_pref("dom.vr.enabled",					false);

// PREF: Disable vibrator API
user_pref("dom.vibrator.enabled",           false);

// PREF: Disable resource timing API
// https://www.w3.org/TR/resource-timing/#privacy-security
user_pref("dom.enable_resource_timing",				false);

/******************************************************************************
 * SECTION: Misc                                                              *
 ******************************************************************************/

// PREF: Disable face detection
user_pref("camera.control.face_detection.enabled",		false);

// PREF: Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode",				"US");
user_pref("browser.search.region",				"US");
user_pref("browser.search.geoip.url",				"");

// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
user_pref("intl.accept_languages",				"en-us, en");

// PREF: Don't use OS values to determine locale, force using Firefox locale setting
// http://kb.mozillazine.org/Intl.locale.matchOS
user_pref("intl.locale.matchOS",				false);

// PREF: Prevent leaking application locale/date format using JavaScript
// https://bugzilla.mozilla.org/show_bug.cgi?id=867501
// https://hg.mozilla.org/mozilla-central/rev/52d635f2b33d
user_pref("javascript.use_us_english_locale",			true);

// PREF: Don't trim HTTP off of URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
user_pref("browser.urlbar.trimURLs",				false);

// PREF: Don't monitor OS online/offline connection state
// https://trac.torproject.org/projects/tor/ticket/18945
user_pref("network.manage-offline-status",			false);

// PREF: Disable video stats to reduce fingerprinting threat
// https://bugzilla.mozilla.org/show_bug.cgi?id=654550
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-100468785
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-148922065
user_pref("media.video_stats.enabled",				false);

// PREF: Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
user_pref("general.buildID.override",				"20100101");
user_pref("browser.startup.homepage_override.buildID",		"20100101");

// PREF: Prevent font fingerprinting
// https://browserleaks.com/fonts
// https://github.com/pyllyukko/user.js/issues/120
user_pref("browser.display.use_document_fonts",			1);

/******************************************************************************
 * SECTION: Extensions / plugins                                              *
 ******************************************************************************/

// PREF: Ensure you have a security delay when installing add-ons (milliseconds)
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay",			1000);

// PREF: Require signatures
// https://wiki.mozilla.org/Addons/Extension_Signing
//user_pref("xpinstall.signatures.required",		true);

// PREF: Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled",			false);

// PREF: Opt-out of themes (Persona) updates
// https://support.mozilla.org/t5/Firefox/how-do-I-prevent-autoamtic-updates-in-a-50-user-environment/td-p/144287
user_pref("lightweightThemes.update.enabled",			false);

// PREF: Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
user_pref("plugin.state.flash",					0);

// PREF: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);

// PREF: When Flash crash reports are enabled, don't send the visited URL in the crash report
user_pref("dom.ipc.plugins.reportCrashURL",			false);

// PREF: When Flash is enabled, download and use Mozilla SWF URIs blocklist
// https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
// https://github.com/mozilla-services/shavar-plugin-blocklist
user_pref("browser.safebrowsing.blockedURIs.enabled", true);

// PREF: Disable Shumway (Mozilla Flash renderer)
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
user_pref("shumway.disabled", true);

// PREF: Disable Gnome Shell Integration NPAPI plugin
user_pref("plugin.state.libgnome-shell-browser-plugin",		0);

// PREF: Updates addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
user_pref("extensions.update.enabled",				true);

// PREF: Enable add-on and certificate blocklists (OneCRL) from Mozilla
// https://wiki.mozilla.org/Blocklisting
// https://blocked.cdn.mozilla.net/
// http://kb.mozillazine.org/Extensions.blocklist.enabled
// http://kb.mozillazine.org/Extensions.blocklist.url
// https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
// Updated at interval defined in extensions.blocklist.interval (default: 86400)
user_pref("extensions.blocklist.enabled",			true);
user_pref("services.blocklist.update_enabled",			true);

// PREF: Decrease system information leakage to Mozilla blocklist update servers
// https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.url",				"https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");

/******************************************************************************
 * SECTION: Firefox (anti-)features / components                              *
 ******************************************************************************/

// PREF: Disable WebIDE
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
user_pref("devtools.webide.enabled",				false);
user_pref("devtools.webide.autoinstallADBHelper",		false);
user_pref("devtools.webide.autoinstallFxdtAdapters",		false);

// PREF: Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
user_pref("devtools.debugger.remote-enabled",			false);
user_pref("devtools.chrome.enabled",				false);
user_pref("devtools.debugger.force-local",			true);

// PREF: Disable Mozilla telemetry/experiments
// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://support.mozilla.org/t5/Firefox-crashes/Mozilla-Crash-Reporter/ta-p/1715
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://gecko.readthedocs.io/en/latest/browser/experiments/experiments/manifest.html
// https://wiki.mozilla.org/Telemetry/Experiments
user_pref("toolkit.telemetry.enabled",				false);
user_pref("toolkit.telemetry.unified",				false);
user_pref("experiments.supported",				false);
user_pref("experiments.enabled",				false);
user_pref("experiments.manifest.uri",				"");

// PREF: Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
user_pref("network.allow-experiments",				false);

// PREF: Disable sending Firefox crash reports to Mozilla servers
// https://wiki.mozilla.org/Breakpad
// http://kb.mozillazine.org/Breakpad
// https://dxr.mozilla.org/mozilla-central/source/toolkit/crashreporter
// https://bugzilla.mozilla.org/show_bug.cgi?id=411490
// A list of submitted crash reports can be found at about:crashes
user_pref("breakpad.reportURL",					"");

// PREF: Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
user_pref("browser.tabs.crashReporting.sendReport",		false);
user_pref("browser.crashReports.unsubmittedCheck.enabled",	false);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled",					false);

// PREF: Disable the UITour backend
// https://trac.torproject.org/projects/tor/ticket/19047#comment:3
user_pref("browser.uitour.enabled",				false);

// PREF: Enable Firefox Tracking Protection
// https://wiki.mozilla.org/Security/Tracking_protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// https://support.mozilla.org/en-US/kb/tracking-protection-pbm
// https://kontaxis.github.io/trackingprotectionfirefox/
// https://feeding.cloud.geek.nz/posts/how-tracking-protection-works-in-firefox/
user_pref("privacy.trackingprotection.enabled",			true);
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// PREF: Enable contextual identity Containers feature (Firefox >= 52)
// NOTICE: Containers are not available in Private Browsing mode
// https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
user_pref("privacy.userContext.enabled",			true);

// PREF: Enable hardening against various fingerprinting vectors (Tor Uplift project)
// https://wiki.mozilla.org/Security/Tor_Uplift/Tracking
// https://bugzilla.mozilla.org/show_bug.cgi?id=1333933
user_pref("privacy.resistFingerprinting",			true);

// PREF: Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.healthreport.uploadEnabled",		false);
user_pref("datareporting.healthreport.service.enabled",		false);
user_pref("datareporting.policy.dataSubmissionEnabled",		false);

// PREF: Disable Heartbeat  (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
user_pref("browser.selfsupport.url",				"");

// PREF: Disable Firefox Hello (disabled) (Firefox < 49)
// https://wiki.mozilla.org/Loop
// https://support.mozilla.org/t5/Chat-and-share/Support-for-Hello-discontinued-in-Firefox-49/ta-p/37946
// NOTICE-DISABLED: Firefox Hello requires setting `media.peerconnection.enabled` and `media.getusermedia.screensharing.enabled` to true, `security.OCSP.require` to false to work.
//user_pref("loop.enabled",		false);

// PREF: Disable Firefox Hello metrics collection
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains",					false);

// PREF: Enable blocking reported web forgeries
// https://wiki.mozilla.org/Security/Safe_Browsing
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
// CIS 2.3.4
user_pref("browser.safebrowsing.enabled",			true); // Firefox < 50
user_pref("browser.safebrowsing.phishing.enabled",		true); // firefox >= 50

// PREF: Enable blocking reported attack sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
// CIS 2.3.5
user_pref("browser.safebrowsing.malware.enabled",		true);

// PREF: Disable querying Google Application Reputation database for downloaded binary files
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
user_pref("browser.safebrowsing.downloads.remote.enabled",	false);

// PREF: Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
user_pref("browser.pocket.enabled",				false);
user_pref("extensions.pocket.enabled",				false);

// PREF: Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
user_pref("extensions.shield-recipe-client.enabled",		false);
user_pref("app.shield.optoutstudies.enabled",			false);

// PREF: Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/******************************************************************************
 * SECTION: Automatic connections                                             *
 ******************************************************************************/

// PREF: Disable prefetching of <link rel="next"> URLs
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
user_pref("network.prefetch-next",				false);

// PREF: Disable DNS prefetching
// http://kb.mozillazine.org/Network.dns.disablePrefetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch",			true);
user_pref("network.dns.disablePrefetchFromHTTPS",		true);

// PREF: Disable the predictive service (Necko)
// https://wiki.mozilla.org/Privacy/Reviews/Necko
user_pref("network.predictor.enabled",				false);

// PREF: Reject .onion hostnames before passing the to DNS
// https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
// RFC 7686
user_pref("network.dns.blockDotOnion",				true);

// PREF: Disable search suggestions in the search bar
// http://kb.mozillazine.org/Browser.search.suggest.enabled
user_pref("browser.search.suggest.enabled",			false);

// PREF: Disable "Show search suggestions in location bar results"
user_pref("browser.urlbar.suggest.searches",			false);
// PREF: When using the location bar, don't suggest URLs from browsing history
user_pref("browser.urlbar.suggest.history",			false);

// PREF: Disable SSDP
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
user_pref("browser.casting.enabled",				false);

// PREF: Disable speculative pre-connections
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
// https://bugzilla.mozilla.org/show_bug.cgi?id=814169
user_pref("network.http.speculative-parallel-limit",		0);

// PREF: Disable downloading homepage snippets/messages from Mozilla
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
user_pref("browser.aboutHomeSnippets.updateUrl",		"");

/******************************************************************************
 * SECTION: HTTP                                                              *
 ******************************************************************************/

// PREF: Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1",	false);
// it is still allowed through HTTPS. uncomment the following to disable it completely.
//user_pref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// PREF: Enable CSP 1.1 script-nonce directive support
// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
user_pref("security.csp.experimentalEnabled",			false);

// PREF: Enable Content Security Policy (CSP)
// https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
user_pref("security.csp.enable",				false);

// PREF: Enable Subresource Integrity
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable",				false);

// PREF: DNT HTTP header (disabled)
// https://www.mozilla.org/en-US/firefox/dnt/
// https://en.wikipedia.org/wiki/Do_not_track_header
// https://dnt-dashboard.mozilla.org
// https://github.com/pyllyukko/user.js/issues/11
// NOTICE: Do No Track must be enabled manually
//user_pref("privacy.donottrackheader.enabled",		        true);

// PREF: Don't send referer headers when following links across different domains (disabled)
// https://github.com/pyllyukko/user.js/issues/227
// user_pref("network.http.referer.XOriginPolicy",		2);

// PREF: Make sure that third-party cookies (if enabled) never persist beyond the session.
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
// http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
// https://developer.mozilla.org/en-US/docs/Cookies_Preferences_in_Mozilla#network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly",		true);

// PREF: Spoof User-agent (disabled)
//user_pref("general.useragent.override",                       "Mozilla/5.0 (Windows NT 6.1; rv:45.0) Gecko/20100101 Firefox/45.0");
//user_pref("general.appname.override",                         "Netscape");
//user_pref("general.appversion.override",			"5.0 (Windows)");
//user_pref("general.platform.override",                        "Win32");
//user_pref("general.oscpu.override",                           "Windows NT 6.1");

/*******************************************************************************
 * SECTION: Caching                                                            *
 ******************************************************************************/

// PREF: Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",			false);

// PREF: Clear history when Firefox closes
// https://support.mozilla.org/en-US/kb/Clear%20Recent%20History#w_how-do-i-make-firefox-clear-my-history-automatically
// NOTICE: Installing user.js will remove your browsing history, caches and local storage.
// NOTICE: Installing user.js **will remove your saved passwords** (https://github.com/pyllyukko/user.js/issues/27)
// NOTICE: Clearing open windows on Firefox exit causes 2 windows to open when Firefox starts https://bugzilla.mozilla.org/show_bug.cgi?id=1334945
user_pref("privacy.sanitize.sanitizeOnShutdown",		true);
user_pref("privacy.clearOnShutdown.cache",			true);
user_pref("privacy.clearOnShutdown.cookies",			true);
user_pref("privacy.clearOnShutdown.downloads",			true);
user_pref("privacy.clearOnShutdown.formdata",			true);
user_pref("privacy.clearOnShutdown.history",			true);
user_pref("privacy.clearOnShutdown.offlineApps",		true);
user_pref("privacy.clearOnShutdown.sessions",			true);
user_pref("privacy.clearOnShutdown.openWindows",		true);

// PREF: Set time range to "Everything" as default in "Clear Recent History"
user_pref("privacy.sanitize.timeSpan",				0);

// PREF: Clear everything but "Site Preferences" in "Clear Recent History"
user_pref("privacy.cpd.offlineApps",				true);
user_pref("privacy.cpd.cache",					true);
user_pref("privacy.cpd.cookies",				true);
user_pref("privacy.cpd.downloads",				true);
user_pref("privacy.cpd.formdata",				true);
user_pref("privacy.cpd.history",				true);
user_pref("privacy.cpd.sessions",				true);

// PREF: Don't remember browsing history
user_pref("places.history.enabled",				false);

// PREF: Disable disk cache
// http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.disk.enable",				false);

// PREF: Disable memory cache (disabled)
// http://kb.mozillazine.org/Browser.cache.memory.enable
//user_pref("browser.cache.memory.enable",		true);

// PREF: Disable Caching of SSL Pages
// CIS Version 1.2.0 October 21st, 2011 2.5.8
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl",			false);

// PREF: Disable password manager
// CIS Version 1.2.0 October 21st, 2011 2.5.2
user_pref("signon.rememberSignons",				false);

// PREF: Disable form autofill, don't save information entered in web page forms and the Search Bar
user_pref("browser.formfill.enable",				false);

// PREF: Cookies expires at the end of the session (when the browser closes)
// http://kb.mozillazine.org/Network.cookie.lifetimePolicy#2
user_pref("network.cookie.lifetimePolicy",			2);

// PREF: Require manual intervention to autofill known username/passwords sign-in forms
// http://kb.mozillazine.org/Signon.autofillForms
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("signon.autofillForms",				false);

// PREF: Disable formless login capture
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled",			false);

// PREF: When username/password autofill is enabled, still disable it on non-HTTPS sites
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
user_pref("signon.autofillForms.http",				false);

// PREF: Show in-content login form warning UI for insecure login fields
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
user_pref("security.insecure_field_warning.contextual.enabled", true);

// PREF: Disable the password manager for pages with autocomplete=off (disabled)
// https://bugzilla.mozilla.org/show_bug.cgi?id=956906
// OWASP ASVS V9.1
// Does not prevent any kind of auto-completion (see browser.formfill.enable, signon.autofillForms)
//user_pref("signon.storeWhenAutocompleteOff",			false);

// PREF: Delete Search and Form History
// CIS Version 1.2.0 October 21st, 2011 2.5.6
user_pref("browser.formfill.expire_days",			0);

// PREF: Clear SSL Form Session Data
// http://kb.mozillazine.org/Browser.sessionstore.privacy_level#2
// Store extra session data for unencrypted (non-HTTPS) sites only.
// CIS Version 1.2.0 October 21st, 2011 2.5.7
// NOTE: CIS says 1, we use 2
user_pref("browser.sessionstore.privacy_level",			2);

// PREF: Delete temporary files on exit
// https://bugzilla.mozilla.org/show_bug.cgi?id=238789
user_pref("browser.helperApps.deleteTempFileOnExit",		true);

// PREF: Do not create screenshots of visited pages (relates to the "new tab page" feature)
// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
user_pref("browser.pagethumbnails.capturing_disabled",		true);

// PREF: Don't fetch and permanently store favicons for Windows .URL shortcuts created by drag and drop
// NOTICE: .URL shortcut files will be created with a generic icon
// Favicons are stored as .ico files in $profile_dir\shortcutCache
user_pref("browser.shell.shortcutFavicons",                     false);

/*******************************************************************************
 * SECTION: UI related                                                         *
 *******************************************************************************/

// PREF: Enable insecure password warnings (login forms in non-HTTPS pages)
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1319119
// https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
user_pref("security.insecure_password.ui.enabled",		true);

// PREF: Disable right-click menu manipulation via JavaScript (disabled)
//user_pref("dom.event.contextmenu.enabled",		        false);

// PREF: Disable "Are you sure you want to leave this page?" popups on page close
// https://support.mozilla.org/en-US/questions/1043508
// Does not prevent JS leaks of the page close event.
// https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
//user_pref("dom.disable_beforeunload",                         true);

// PREF: Disable the "new tab page" feature and show a blank tab instead
// https://wiki.mozilla.org/Privacy/Reviews/New_Tab
// https://support.mozilla.org/en-US/kb/new-tab-page-show-hide-and-customize-top-sites#w_how-do-i-turn-the-new-tab-page-off
user_pref("browser.newtabpage.enabled",				false);

// PREF: Disable Activity Stream
// https://wiki.mozilla.org/Firefox/Activity_Stream
user_pref("browser.newtabpage.activity-stream.enabled",		false);

// PREF: Disable new tab tile ads & preload
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
// TODO: deprecated? not in DXR, some dead links
user_pref("browser.newtabpage.enhanced",			false);
user_pref("browser.newtab.preload",				false);
user_pref("browser.newtabpage.directory.ping",			"");
user_pref("browser.newtabpage.directory.source",		"data:text/plain,{}");

// PREF: Force Punycode for Internationalized Domain Names
// http://kb.mozillazine.org/Network.IDN_show_punycode
// https://www.xudongz.com/blog/2017/idn-phishing/
// https://wiki.mozilla.org/IDN_Display_Algorithm
// https://en.wikipedia.org/wiki/IDN_homograph_attack
// https://www.mozilla.org/en-US/security/advisories/mfsa2017-02/
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6
user_pref("network.IDN_show_punycode",				true);

// PREF: Disable inline autocomplete in URL bar
// http://kb.mozillazine.org/Inline_autocomplete
user_pref("browser.urlbar.autoFill",				false);
user_pref("browser.urlbar.autoFill.typed",			false);

// PREF: Disable CSS :visited selectors
// https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/
// https://dbaron.org/mozilla/visited-privacy
user_pref("layout.css.visited_links_enabled",			false);

// PREF: Disable URL bar autocomplete and history/bookmarks suggestions dropdown
// http://kb.mozillazine.org/Disabling_autocomplete_-_Firefox#Firefox_3.5
user_pref("browser.urlbar.autocomplete.enabled",		false);

// PREF: Do not check if Firefox is the default browser
user_pref("browser.shell.checkDefaultBrowser",			false);

// PREF: When password manager is enabled, lock the password storage periodically
// CIS Version 1.2.0 October 21st, 2011 2.5.3 Disable Prompting for Credential Storage
user_pref("security.ask_for_password",				2);

// PREF: Lock the password storage every 1 minutes (default: 30)
user_pref("security.password_lifetime",				1);

/******************************************************************************
 * SECTION: Cryptography                                                      *
 ******************************************************************************/

// PREF: Enable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
user_pref("network.stricttransportsecurity.preloadlist",	true);

// PREF: Enable Online Certificate Status Protocol
// https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol
// https://www.imperialviolet.org/2014/04/19/revchecking.html
// https://www.maikel.pro/blog/current-state-certificate-revocation-crls-ocsp/
// https://wiki.mozilla.org/CA:RevocationPlan
// https://wiki.mozilla.org/CA:ImprovingRevocation
// https://wiki.mozilla.org/CA:OCSP-HardFail
// https://news.netcraft.com/archives/2014/04/24/certificate-revocation-why-browsers-remain-affected-by-heartbleed.html
// https://news.netcraft.com/archives/2013/04/16/certificate-revocation-and-the-performance-of-ocsp.html
// NOTICE: OCSP leaks your IP and domains you visit to the CA when OCSP Stapling is not available on visited host
// NOTICE: OCSP is vulnerable to replay attacks when nonce is not configured on the OCSP responder
// NOTICE: OCSP adds latency (performance)
// NOTICE: Short-lived certificates are not checked for revocation (security.pki.cert_short_lifetime_in_days, default:10)
// CIS Version 1.2.0 October 21st, 2011 2.2.4
user_pref("security.OCSP.enabled",				0);

// PREF: Enable OCSP Stapling support
// https://en.wikipedia.org/wiki/OCSP_stapling
// https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
// https://www.digitalocean.com/community/tutorials/how-to-configure-ocsp-stapling-on-apache-and-nginx
user_pref("security.ssl.enable_ocsp_stapling",			false);

// PREF: Enable OCSP Must-Staple support (Firefox >= 45)
// https://blog.mozilla.org/security/2015/11/23/improving-revocation-ocsp-must-staple-and-short-lived-certificates/
// https://www.entrust.com/ocsp-must-staple/
// https://github.com/schomery/privacy-settings/issues/40
// NOTICE: Firefox falls back on plain OCSP when must-staple is not configured on the host certificate
user_pref("security.ssl.enable_ocsp_must_staple",		false);

// PREF: Require a valid OCSP response for OCSP enabled certificates
// https://groups.google.com/forum/#!topic/mozilla.dev.security/n1G-N2-HTVA
// Disabling this will make OCSP bypassable by MitM attacks suppressing OCSP responses
// NOTICE: `security.OCSP.require` will make the connection fail when the OCSP responder is unavailable
// NOTICE: `security.OCSP.require` is known to break browsing on some [captive portals](https://en.wikipedia.org/wiki/Captive_portal)
user_pref("security.OCSP.require",				false);

// PREF: Disable TLS Session Tickets
// https://www.blackhat.com/us-13/briefings.html#NextGen
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf
// https://bugzilla.mozilla.org/show_bug.cgi?id=917049
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
user_pref("security.ssl.disable_session_identifiers",		true);

// PREF: Only allow TLS 1.[0-3]
// http://kb.mozillazine.org/Security.tls.version.*
// 1 = TLS 1.0 is the minimum required / maximum supported encryption protocol. (This is the current default for the maximum supported version.)
// 2 = TLS 1.1 is the minimum required / maximum supported encryption protocol.
user_pref("security.tls.version.min",				1);
user_pref("security.tls.version.max",				4);

// PREF: Disable insecure TLS version fallback
// https://bugzilla.mozilla.org/show_bug.cgi?id=1084025
// https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645
user_pref("security.tls.version.fallback-limit",		3);

// PREF: Enfore Public Key Pinning
// https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// "2. Strict. Pinning is always enforced."
user_pref("security.cert_pinning.enforcement_level",		2);

// PREF: Disallow SHA-1
// https://bugzilla.mozilla.org/show_bug.cgi?id=1302140
// https://shattered.io/
user_pref("security.pki.sha1_enforcement_level",		1);

// PREF: Warn the user when server doesn't support RFC 5746 ("safe" renegotiation)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",	false);

// PREF: Disallow connection to servers not supporting safe renegotiation (disabled)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.require_safe_negotiation
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
// TODO: `security.ssl.require_safe_negotiation` is more secure but makes browsing next to impossible (2012-2014-... - `ssl_error_unsafe_negotiation` errors), so is left disabled
//user_pref("security.ssl.require_safe_negotiation",		true);

// PREF: Disable automatic reporting of TLS connection errors
// https://support.mozilla.org/en-US/kb/certificate-pinning-reports
// we could also disable security.ssl.errorReporting.enabled, but I think it's
// good to leave the option to report potentially malicious sites if the user
// chooses to do so.
// you can test this at https://pinningtest.appspot.com/
user_pref("security.ssl.errorReporting.automatic",		false);

// PREF: Pre-populate the current URL but do not pre-fetch the certificate in the "Add Security Exception" dialog
// http://kb.mozillazine.org/Browser.ssl_override_behavior
// https://github.com/pyllyukko/user.js/issues/210
user_pref("browser.ssl_override_behavior",			1);

/******************************************************************************
 * SECTION: Cipher suites                                                     *
 ******************************************************************************/

// PREF: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha",				false);
user_pref("security.ssl3.rsa_null_md5",				false);
user_pref("security.ssl3.ecdhe_rsa_null_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha",			false);
user_pref("security.ssl3.ecdh_rsa_null_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha",			false);

// PREF: Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
user_pref("security.ssl3.rsa_seed_sha",				false);

// PREF: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5",			false);
user_pref("security.ssl3.rsa_rc2_40_md5",			false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha",			false);
// 128-bit ciphers
user_pref("security.ssl3.rsa_camellia_128_sha",			false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha",			false);

// PREF: Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha",			false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha",		false);
user_pref("security.ssl3.rsa_rc4_128_md5",			false);
user_pref("security.ssl3.rsa_rc4_128_sha",			false);
user_pref("security.tls.unrestricted_rc4_fallback",		false);

// PREF: Disable 3DES (effective key size is < 128)
// https://en.wikipedia.org/wiki/3des#Security
// http://en.citizendium.org/wiki/Meet-in-the-middle_attack
// http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.dhe_dss_des_ede3_sha",			false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha",		false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha",		false);
user_pref("security.ssl3.rsa_des_ede3_sha",			false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha",		false);

// PREF: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha",			false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha",		false);

// PREF: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha",			false);

// PREF: Enable ciphers with ECDHE and key size > 128bits
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",		true); // 0xc014
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",		true); // 0xc00a

// PREF: Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",	true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",		true); // 0xc02f

// PREF: Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256",	true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256",	true);

// PREF: Disable ciphers susceptible to the logjam attack
// https://weakdh.org/
user_pref("security.ssl3.dhe_rsa_camellia_256_sha",		false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha",			false);

// PREF: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha",			false);
user_pref("security.ssl3.dhe_dss_aes_256_sha",			false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha",		false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha",		false);

// PREF: Fallbacks due compatibility reasons
user_pref("security.ssl3.rsa_aes_256_sha",			true); // 0x35
user_pref("security.ssl3.rsa_aes_128_sha",			true); // 0x2f