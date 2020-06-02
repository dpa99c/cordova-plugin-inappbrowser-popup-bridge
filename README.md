# cordova-plugin-inappbrowser-popup-bridge

This is a fork of [cordova-plugin-inappbrowser](https://github.com/apache/cordova-plugin-inappbrowser) which adds support for Braintree's PopupBridge libraries for [Android](https://github.com/braintree/popup-bridge-android) and [iOS](https://github.com/braintree/popup-bridge-ios) to support PayPal payments within the context of the InappBrowser element of a Cordova-based app.

The purpose of PopupBridge is to allow Webviews to open emulated popup windows in a browser and send data back to the parent page in the Webview. This is essential for Web-based PayPal checkout flows which use the [Braintree JS SDK](https://github.com/braintree/braintree-web) which supports popup emulation via PopupBridge.

See the [example app project](https://github.com/dpa99c/cordova-plugin-inappbrowser-popup-bridge-test) which demonstrates usage of `cordova-plugin-inappbrowser-popup-bridge`.

## Installation

    cordova plugin add cordova-plugin-inappbrowser-popup-bridge
    
iOS:
- PopupBridge requires [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview).
- Therefore, this plugin depends on [cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine) which adds WKWebView support to Cordova.
    - You need to add this manually: `cordova plugin add cordova-plugin-wkwebview-engine`
    - Or you can use the Ionic variant: `cordova plugin add cordova-plugin-ionic-webview`
- This means the main Cordova app Webview will also use WKWebView on iOS 9+.
    
# Supported platform versions
- This plugin officially supports iOS 9.0+ and Android 4.4+
    - These are the versions supported by PopupBridge
- However, this plugin will compile on iOS 8.0+ and Android 4.1+ 
    - When running on earlier versions on which PopupBridge is not supported, it is the responsibility of the app which uses this plugin how it should behave.
    - For example, fall back to launching the system browser instead of in-app browser. This means the user is taken out of the original app to the default browser app, but at least can fulfill their PayPal payment before manually navigating back to the original app.
    
# Example app

[cordova-plugin-inappbrowser-popup-bridge-test](https://github.com/dpa99c/cordova-plugin-inappbrowser-popup-bridge-test) contains a Cordova project which builds a test app for Android and iOS to illustrate usage of this plugin.
