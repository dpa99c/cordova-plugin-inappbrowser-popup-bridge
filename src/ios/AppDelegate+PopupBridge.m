#if __IPHONE_OS_VERSION_MAX_ALLOWED >= 90000
#import "AppDelegate+PopupBridge.h"
#import <objc/runtime.h>

@implementation AppDelegate(PopupBridge)

+ (void)load {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        
        Class class = [self class];

        SEL originalSelector = @selector(application:didFinishLaunchingWithOptions:);
        SEL swizzledSelector = @selector(PopupBridge_application:didFinishLaunchingWithOptions:);
        
        Method originalMethod = class_getInstanceMethod(class, originalSelector);
        Method swizzledMethod = class_getInstanceMethod(class, swizzledSelector);
        
        BOOL didAddMethod = class_addMethod(class, originalSelector, method_getImplementation(swizzledMethod), method_getTypeEncoding(swizzledMethod));
        
        if (didAddMethod) {
            class_replaceMethod(class, swizzledSelector, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod));
        } else {
            method_exchangeImplementations(originalMethod, swizzledMethod);
        }
    });
}

- (BOOL) PopupBridge_application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    NSLog(@"AppDelegate(PopupBridge):didFinishLaunchingWithOptions");
    [POPPopupBridge setReturnURLScheme:[self getUrlScheme]];
    return [self PopupBridge_application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    NSLog(@"AppDelegate(PopupBridge):application");
    if ([url.scheme localizedCaseInsensitiveCompare:[self getUrlScheme]] == NSOrderedSame) {
        return [POPPopupBridge openURL:url options:options];
    }
    return NO;
}

- (NSString*) getUrlScheme {
    return [NSString stringWithFormat:@"%@.popupbridge", [[NSBundle mainBundle] bundleIdentifier]];
}

@end
#endif
