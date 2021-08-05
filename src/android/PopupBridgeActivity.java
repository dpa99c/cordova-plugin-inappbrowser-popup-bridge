package org.apache.cordova.inappbrowser;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.webkit.WebView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import com.braintreepayments.api.PopupBridgeClient;

public class PopupBridgeActivity extends AppCompatActivity {

    private static WebView webView;
    private PopupBridgeClient popupBridgeClient;
    private final String urlSchemeSuffix = ".popupbridge";

    public static void setWebView(WebView webView){
        PopupBridgeActivity.webView = webView;
    }

    @Override
    protected void onNewIntent(Intent newIntent) {
        super.onNewIntent(newIntent);
        setIntent(newIntent);
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String urlScheme = getApplicationContext().getPackageName() + urlSchemeSuffix;
        popupBridgeClient = new PopupBridgeClient(this, webView, urlScheme);

        // register error listener
        popupBridgeClient.setErrorListener(error -> {
            Log.e("PopupBridgeActivity", error.getMessage());
        });
    }

    @Override
    protected void onResume() {
        super.onResume();

        // call 'deliverResult' in onResume to capture a pending result
        popupBridgeClient.deliverPopupBridgeResult(this);
    }


}
