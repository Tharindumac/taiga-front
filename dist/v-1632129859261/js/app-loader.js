(function(){var t,e,a,n;window._version="v-1632129859261",window.taigaConfig={api:"http://localhost:9000/api/v1/",eventsUrl:null,tribeHost:null,eventsMaxMissedHeartbeats:5,eventsHeartbeatIntervalTime:6e4,debug:!1,defaultLanguage:"en",themes:["taiga","taiga-legacy","material-design","high-contrast"],defaultTheme:"taiga",publicRegisterEnabled:!0,feedbackEnabled:!0,supportUrl:null,privacyPolicyUrl:null,termsOfServiceUrl:null,maxUploadFileSize:null,enableAsanaImporter:!1,enableGithubImporter:!1,enableJiraImporter:!1,enableTrelloImporter:!1,contribPlugins:[]},window.taigaContribPlugins=[],window._decorators=[],window.addDecorator=function(n,e){return window._decorators.push({provider:n,decorator:e})},window.getDecorators=function(){return window._decorators},a=function(n){return $("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />')},t=function(r){return new Promise(function(o,n){var e=function(n){var e,t,r,i;if(n.isPack)for(e=0,r=(i=n.plugins).length;e<r;e++)t=i[e],window.taigaContribPlugins.push(t);else window.taigaContribPlugins.push(n);return n.css&&a(n.css),n.js?ljs.load(n.js,o):o()},t=function(n,e,t){return console.error("Error loading plugin",r,t)};return $.getJSON(r).then(e,t)})},e=function(n){var e=[];return _.map(n,function(n){return e.push(t(n))}),Promise.all(e)},(n=$.getJSON("/conf.json")).done(function(n){return window.taigaConfig=_.assign({},window.taigaConfig,n)}),n.fail(function(){return console.error("Your conf.json file is not a valid json file, please review it.")}),n.always(function(){var n=$.getJSON("/"+window._version+"/emojis/emojis-data.json").then(function(n){return window.emojis=n});return 0<window.taigaConfig.contribPlugins.length?e(window.taigaConfig.contribPlugins).then(function(){return ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})}):ljs.load("/"+window._version+"/js/app.js",function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})})}).call(this);