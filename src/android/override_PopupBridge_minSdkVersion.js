#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

module.exports = function (context) {
    var deferral = context.requireCordovaModule('q').defer();


    var overrideAttribute = "tools:overrideLibrary=\"com.braintreepayments.popupbridge\" ";
    var usesSdkOpen = "<uses-sdk ";

    var projectRoot = context.opts.projectRoot;
    var platformRoot = path.join(projectRoot, 'platforms/android');
    var manifestPath = path.join(platformRoot, 'AndroidManifest.xml');
    //console.log("manifestPath: " + manifestPath);

    fs.readFile(manifestPath, function(err, manifest) {
        if(err || !manifest){
            deferral.reject("Failed to read AndroidManifest.xml: " + err);
        }

        manifest = manifest.toString();

        if(manifest.indexOf(overrideAttribute) == -1){
            //console.log("not found");

            manifest = manifest.replace(usesSdkOpen, usesSdkOpen + overrideAttribute);

            fs.writeFile(manifestPath, manifest, 'utf8', function (err) {
                if (err) {
                    deferral.reject("Failed to write AndroidManifest.xml: " + err);
                }
                //console.log("wrote");
                deferral.resolve();
            });
        }else{
            //console.log("found");
            deferral.resolve();
        }

    });
    return deferral.promise;
};