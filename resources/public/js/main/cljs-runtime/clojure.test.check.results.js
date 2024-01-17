goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__44996_45008 = clojure.test.check.results.pass_QMARK_;
var G__44997_45009 = "_";
var G__44998_45010 = ((function (G__44996_45008,G__44997_45009){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__44996_45008,G__44997_45009))
;
goog.object.set(G__44996_45008,G__44997_45009,G__44998_45010);

var G__44999_45011 = clojure.test.check.results.result_data;
var G__45000_45012 = "_";
var G__45001_45013 = ((function (G__44999_45011,G__45000_45012){
return (function (this$){
return null;
});})(G__44999_45011,G__45000_45012))
;
goog.object.set(G__44999_45011,G__45000_45012,G__45001_45013);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__45002_45014 = clojure.test.check.results.pass_QMARK_;
var G__45003_45015 = "null";
var G__45004_45016 = ((function (G__45002_45014,G__45003_45015){
return (function (this$){
return false;
});})(G__45002_45014,G__45003_45015))
;
goog.object.set(G__45002_45014,G__45003_45015,G__45004_45016);

var G__45005_45017 = clojure.test.check.results.result_data;
var G__45006_45018 = "null";
var G__45007_45019 = ((function (G__45005_45017,G__45006_45018){
return (function (this$){
return null;
});})(G__45005_45017,G__45006_45018))
;
goog.object.set(G__45005_45017,G__45006_45018,G__45007_45019);

//# sourceMappingURL=clojure.test.check.results.js.map
