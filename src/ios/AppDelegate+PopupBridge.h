#if __IPHONE_OS_VERSION_MAX_ALLOWED >= 90000
#import "AppDelegate.h"
#import "POPPopUpBridge.h"

@interface AppDelegate (PopupBridge)

- (BOOL) PopupBridge_application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;

@end
#endif
