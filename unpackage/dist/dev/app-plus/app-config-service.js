
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/toolMan/toolMan","pages/toolMan/videoPlay","pages/staMan/staMan","pages/taskMan/taskMan","pages/peoMan/peoMan","pages/login/index","pages/login/loginByAcount","pages/login/loginByFinger"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"explame","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","enablePullDownRefresh":false,"animationType":"pop-in","animationDuration":"300"},"tabBar":{"color":"#7A7E83","selectedColor":"#3387E5","borderStyle":"black","backgroundColor":"#F8F8F8","height":"50px","fontSize":"10px","iconWidth":"24px","spacing":"3px","list":[{"pagePath":"pages/toolMan/toolMan","iconPath":"static/tabarIcon/toolMan.png","selectedIconPath":"static/tabarIcon/toolManA.png","text":"组件"},{"pagePath":"pages/staMan/staMan","iconPath":"static/tabarIcon/staMan.png","selectedIconPath":"static/tabarIcon/staManA.png","text":"表格"},{"pagePath":"pages/taskMan/taskMan","iconPath":"static/tabarIcon/taskMan.png","selectedIconPath":"static/tabarIcon/taskManA.png","text":"任务管理"},{"pagePath":"pages/peoMan/peoMan","iconPath":"static/tabarIcon/userMan.png","selectedIconPath":"static/tabarIcon/userManA.png","text":"人员管理"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"example","compilerVersion":"2.6.1","entryPagePath":"pages/toolMan/toolMan","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/toolMan/toolMan","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"support":true,"color":"#2BD009","style":"circle","contentdown":"下拉刷新"},"scrollIndicator":false}},{"path":"/pages/toolMan/videoPlay","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/staMan/staMan","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"数据统计","enablePullDownRefresh":true,"pullToRefresh":{"support":true,"style":"circle","color":"#000000"},"animationType":"fade-in","animationDuration":300,"scrollIndicator":"none"}},{"path":"/pages/taskMan/taskMan","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/peoMan/peoMan","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"人员管理"}},{"path":"/pages/login/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/loginByAcount","meta":{},"window":{"navigationBarTitleText":"密码登录"}},{"path":"/pages/login/loginByFinger","meta":{},"window":{"navigationBarTitleText":"指纹登录"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
