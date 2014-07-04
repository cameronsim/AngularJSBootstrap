'use strict';

/* Services */


//var serviceModule = angular.module('myApp.services',[]);



define([],function($http,$scope){

    var services = {};


    services.generateTokenService = function($resource){

        var service = $resource("service/oauthToken");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };


//    services.agentStatService = function($resource){
//
//        var service = $resource("service/agents/ping");
//
//        return {
//            get : function(data, onSuccess, onFail){
//                service.get(data, onSuccess, onFail);
//            }
//        }
//    };

    services.apiInitService = function($resource){

        var service = $resource("service/api/init");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.apiListService = function($resource){

        var service = $resource("service/api/list");

        return { 
        	get : function(data, onSuccess, onFail){
        		service.get(data, onSuccess, onFail);
        	}
        }
    };

    services.listSourcesService = function($resource){

        var service = $resource("service/source/list");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.fieldListService = function($resource){

        var service = $resource("service/api/fieldList");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.saveFieldViewService = function($resource){

        var service = $resource("service/api/saveFieldView/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };

    services.dataModelListService = function($resource){

        var service = $resource("service/model/list");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.saveDataModelService = function($resource){

        var service = $resource("service/model/save/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };

    services.keyListService = function($resource){

        var service = $resource("service/api/keys/");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.apiDownloadService = function($resource){

        var service = $resource("service/api/download/");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.emailService = function($resource){

        var service = $resource("service/admin/mail");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };
    
    services.querySearchService = function($resource){

        var service = $resource("service/search/query");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };
    
//    services.saveApiService = function($resource){
//
//        var service = $resource("service/api/save/");
//
//        return {
//        	save : function(data, onSuccess, onFail){
//        		service.save(data, onSuccess, onFail);
//        	}
//        }
//    };

    services.saveFieldRuleService = function($resource){

        var service = $resource("service/api/saveFieldRule/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };

//    services.saveFieldRulesService = function($resource){
//
//        var service = $resource("service/api/saveFieldRules/");
//
//        return {
//            save : function(data, onSuccess, onFail){
//                service.save(data, onSuccess, onFail);
//            }
//        }
//    };

    services.deleteApiFieldRulesListService = function($resource){

        var service = $resource("service/api/deleteFieldRules/", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };

    services.deleteApiListService = function($resource){

        var service = $resource("service/api/delete/", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };



    services.apiTemplateAllPrivateService = function($resource){

        var service = $resource("service/apiTemplate/privateList/");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };



    /**
     * SOURCE TEMPLATES
     */

    services.sourceTemplateListService = function($resource){

        var service = $resource("service/sourceTemplate/list/");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.saveSourceFromTemplateService = function($resource){

        var service = $resource("service/sourceFromTemplate/create/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };

    /**
     * SOURCE
     */

    services.saveApiService = function($resource){

        var service = $resource("service/source/save/webservice/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };


    services.deleteSourceListService = function($resource){

        var service = $resource("service/source/delete/", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };


//    services.saveApiTemplateListService = function($resource){
//
//        var service = $resource("service/api/save/templatelist", {}, {saveData : {method:'POST', isArray: true}});
//
//        return {
//            save : function(data, onSuccess, onFail){
//                service.saveData(data, onSuccess, onFail);
//            }
//        }
//    };

    services.saveApiListService = function($resource){

        var service = $resource("service/api/save/list", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };
    
    services.apiDeployListService = function($resource){

        var service = $resource("service/api/deploy", {}, {saveData : {method:'POST', isArray: true}});

        return { 
        	save : function(data, onSuccess, onFail){
        		service.saveData(data, onSuccess, onFail);
        	}
        }
    };

    services.unDeployApiListService = function($resource){

        var service = $resource("service/api/undeploy", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };

    services.deleteUserService = function($resource){

        var service = $resource("service/user/delete", {}, {saveData : {method:'POST', isArray: true}});

        return {
            save : function(data, onSuccess, onFail){
                service.saveData(data, onSuccess, onFail);
            }
        }
    };
    
    services.saveClientService = function($resource){

        var service = $resource("service/signup");

        return { 
        	save : function(data, onSuccess, onFail){
        		service.save(data, onSuccess, onFail);
        	}
        }
    };

    services.loginService = function($resource, $http){

        var service = $resource("service/login");

        return { 
        	save : function(data, onSuccess, onFail){
        		service.save(data, onSuccess, onFail);
        	}
        }
    };

    services.resetPasswordService = function($resource, $http){

        var service = $resource("service/changepassword");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };


    
    services.logoutService = function($resource, $http){

        var service = $resource("service/logout");

        return { 
        	save : function(data, onSuccess, onFail){
        		service.save(data, onSuccess, onFail);
        	}
        }
    };

//    services.httpGetService = function($http){
//
//        delete $http.defaults.headers.common['X-Requested-With'];
//
//        return function(url,auth,params){
//
//            var config = {
////                headers:  {
////                    'Accept': 'application/json;odata=verbose'
////                },
//                'params': params
//            };
//
//            return $http.get(url, config);
//            //return $http.get(url,config,params);
//            //return $http(config).get(url, config);
//        }
//    };
//
//    services.httpPostService = function($http){
//
//        return function(url, payload){
//
//            payload.source="WEB";
//
//            var headers={
//                'Content-Type':'application/json;charset=utf-8',
//                'clientKey':'SDFSDFGADFGSD345345345',
//                'Accept': 'application/json'
//            };
//
//            var config={"headers":headers};
//
//            delete $http.defaults.headers.common['X-Requested-With'];
//
//            return $http.post(url, payload, config);
//        }
//    };

    services.userListService = function($resource){

        var service = $resource("service/user/list");

        return {
            get : function(data, onSuccess, onFail){
                service.get(data, onSuccess, onFail);
            }
        }
    };

    services.saveUserService = function($resource, $http){

        var service = $resource("service/user/save/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };


    services.verifyApiService = function($resource){

        var service = $resource("service/api/verify/");

        return {
            save : function(data, onSuccess, onFail){
                service.save(data, onSuccess, onFail);
            }
        }
    };
    
    
    services.authInterceptor = function($q, $location, $rootScope){

             return function(promise) {
                 return promise.then(function(response) {
                     return response;
                 }, function(response) {
                     if(response.status === 401) {
                        // globalEventBus.dispatch({type: conf.GLOBAL_EVENT_TYPE.SESSION_EXPIRED});
                         $location.path("/login");
                         //$rootScope.hash = "cause=session_expired";
                     }
                     if(response.status === 423){
                        //globalEventBus.dispatch({type: conf.GLOBAL_EVENT_TYPE.SESSION_EXPIRED});
                     	$location.path("/login");
                     	//$rootScope.hash = "cause=locked";
                     }
                     return $q.reject(response);
                 });
             };
    };

    return services;

});
