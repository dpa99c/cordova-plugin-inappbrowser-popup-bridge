#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    q = require('q');

module.exports = function (context) {
    var deferral = q.defer();

    var toolsAttribute = "xmlns:tools=\"http://schemas.android.com/tools\"";
    var manifestOpen = "<manifest";

    var overrideAttribute = "tools:overrideLibrary=\"com.braintreepayments.popupbridge\"";
    var usesSdkOpen = "<uses-sdk";

    var scheme = "${applicationId}.popupbridge";
    var intentFilter = '<intent-filter>\n' +
        '<action android:name="android.intent.action.VIEW" />\n' +
        '<category android:name="android.intent.category.DEFAULT" />\n' +
        '<category android:name="android.intent.category.BROWSABLE" />\n' +
        '<data android:scheme="'+scheme+'" />\n' +
        '</intent-filter>'
    var activityClose = "</activity>";

    var projectRoot = context.opts.projectRoot;
    var platformRoot = path.join(projectRoot, 'platforms/android');
    var manifestPath = path.join(platformRoot, 'AndroidManifest.xml');
    //console.log("manifestPath: " + manifestPath);
    if(!fs.existsSync(manifestPath)) {
        //AndroidManifest is now under app directory
        platformRoot = path.join(projectRoot, 'platforms/android/app/src/main');
        // console.log(platformRoot);
        manifestPath = path.join(platformRoot, 'AndroidManifest.xml');
    }

    fs.readFile(manifestPath, function(err, manifest) {
        if(err || !manifest){
            deferral.reject("Failed to read AndroidManifest.xml: " + err);
        }

        manifest = manifest.toString();

        var shouldWrite = false;
        if(manifest.indexOf(overrideAttribute) === -1) {
            manifest = manifest.replace(usesSdkOpen, usesSdkOpen + " " + overrideAttribute + " ");
            shouldWrite = true;
        }

        if(manifest.indexOf(toolsAttribute) === -1) {
            manifest = manifest.replace(manifestOpen, manifestOpen + " " + toolsAttribute + " ");
            shouldWrite = true;
        }

        if(manifest.indexOf(scheme) === -1) {
            manifest = manifest.replace(activityClose, intentFilter+"\n"+activityClose);
            shouldWrite = true;
        }

        if(shouldWrite){
            fs.writeFile(manifestPath, manifest, 'utf8', function (err) {
                if (err) {
                    deferral.reject("Failed to write AndroidManifest.xml: " + err);
                }
                //console.log("wrote");
                deferral.resolve();
            });
        }else{
            //console.log("no write required");
            deferral.resolve();
        }

    });
    return deferral.promise;
};
