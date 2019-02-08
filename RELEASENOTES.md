<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->
# Release Notes

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