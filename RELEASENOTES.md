# Release Notes

### 5.0.2
* (android) bugfix: Add missing FragmentActivity casts.
	* Resolves [#12](https://github.com/dpa99c/cordova-plugin-inappbrowser-popup-bridge/issues/12)

### 5.0.1
(Android) bugfix: On resuming from background, create popupBridgeClient if it's not already created.
- Add defensive coding to catch unhandled exceptions.

### 5.0.0
(Android) BREAKING: Update from `popup-bridge-android@1` to `popup-bridge-android@4`.
- Fixes PopupBridge functionality when default browser is changed from Chrome to a 3rd party browser (e.g. Firefox)
- Requires the Cordova activity to run as `singleTask`
    - Add `<preference name="AndroidLaunchMode" value="singleTask" />` to `<platform name="android">` in `config.xml` 


### 4.1.4 (Aug 06, 2021)
(Android) Crashfix: add custom PopupBridge class from popup-bridge-android containing crashfix
* Patched from [this v4 commit](https://github.com/braintree/popup-bridge-android/commit/4bff178bca04d0e56d8f6a5f277b07eb1a72f51e) 
* Resolves [#26](https://github.com/braintree/popup-bridge-android/issues/26)

### 4.1.3 (Jul 06, 2021)
(Android) Whitelist the Chrome package to allow the plugin to invoke it on API 30

### 4.1.1 (Sep 01, 2020)
(iOS) Support setting inappbrowser statusbar content colour via preference in `config.xml`
Cherrypicked from https://github.com/apache/cordova-plugin-inappbrowser/pull/765

### 4.1.0 (Aug 03, 2020)
(ios) Update POPPopUpBridge iOS to latest v1.1.0

### 4.0.3 (Jul 23, 2020)
(ios): Fix incorrect view height from the second open time.
See https://github.com/apache/cordova-plugin-inappbrowser/pull/738

### 4.0.2 (Jul 07, 2020)
Remove legacy engines constraints. Resolves #8.

### 4.0.1 (Jul 07, 2020)
Fix intermittent calling of "beforeload" callback on Android.
See https://github.com/apache/cordova-plugin-inappbrowser/issues/686

### 4.0.0 (Jun 18, 2020)
Rebase the plugin onto `cordova-plugin-inappbrowser@4.0.0` to add the latest features and bug fixes, 
including `cordova-ios@6` compatibility.

### 2.0.0 (Feb 19, 2020)
Rebase the plugin onto `cordova-plugin-inappbrowser@3.2.1-dev` to add the latest features and bug fixes.

### 1.0.22 (Sep 26, 2019)
Fix status bar height on iPhone X-family devices.

### 1.0.21 (Sep 25, 2019)
Fix IAB issues with iOS 13: align with latest version of `cordova-plugin-inappbrowser` master branch.
Update to latest version to fix iOS 13 issues with PopupBridge library. 

### 1.0.20 (Jun 25, 2019)
Update legacy Xpath reference to `<application>` element in AndroidManifest.xml so it works with `cordova-android@8`.

### 1.0.19 (Jun 19, 2019)
Fix hook scripts to be compatible with `cordova@9` CLI.

### 1.0.18 (Feb 8, 2019)
Fix statusbar height on iPhone X family

### 1.0.17 (Aug 21, 2018)
Port across WKWebView browser options from cordova-plugin-inappbrowser-wkwebview

### 1.0.16 (Aug 10, 2018)
For Android, remove `<edit-config>` block which adds tools namespace since that's being added by update_manifest.js anyway, and since `<edit-config>` seems problematic.

### 1.0.15 (Jul 23, 2018)
Guard against native Android crash when closing dialog

### 1.0.14 (Jul 23, 2018)
Fix reported edge-case native Android crashes arising from this plugin

### 1.0.13 (Jun 29, 2018)
Fix previous release issue

### 1.0.12 (Jun 29, 2018)
Prevent native iOS crashes when evaluating Javascript

### 1.0.11 (Apr 23, 2018)
Add support for `cordova-android@7`

### 1.0.10 (Jan 30, 2018)
Enable posting of messages from IAB Webview to Cordova Webview on Android and iOS

### 1.0.9 (Jan 30, 2018)
Bug fix for iOS crash when current IAB URL is nil

### 1.0.8 (Jan 24, 2018)
- Fix for the previous hiding strategy which caused JS errors in target pages on iOS 11 due to loading the target page while WKWebView instance was in a detached state.
- This strategy has been tested and should work on iOS 9/10/11

### 1.0.7 (Jan 17, 2018)
- Make hiding mechanism conditional depending on iOS version.
    - Since the frame.origin method works fine on iOS 9&10 but causes native input issues (e.g. date picket) on iOS 11.
    - And the makeKeyAndVisible method works fine on iOS 11 but causes content sizing issues on iOS 9&10.

### 1.0.6 (Jan 16, 2018)
* Fix iOS 11 bug where opening IAB as hidden causes native pickers in main Cordova WKWebView to misbehave.

### 1.0.5 (Dec 12, 2017)
* Ensure IAB dialog is not null before attempting to show/hide. Prevents native crash if show() or hide() is called twice concurrently.

### 1.0.4 (Nov 17, 2017)
* Disable 3D touch link preview and gesture navigation.

### 1.0.3 (Nov 15, 2017)
* Fix built-in JS dialogs (alert, confirm, prompt) on iOS

### 1.0.2 (Sep 28, 2017)
* Fix handling of load errors caused by failed navigation
* Fix content sizing bug caused by 4573c87d0b74c087ef35e40f4311674bc92e7947

### 1.0.1 (Sep 8, 2017)
* Fix content sizing issue on iOS

### 1.0.0 (Sep 7, 2017)
* Initial release
