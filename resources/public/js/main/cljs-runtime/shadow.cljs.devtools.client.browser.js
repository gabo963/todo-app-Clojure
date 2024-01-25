goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51321 = arguments.length;
var i__5770__auto___51322 = (0);
while(true){
if((i__5770__auto___51322 < len__5769__auto___51321)){
args__5775__auto__.push((arguments[i__5770__auto___51322]));

var G__51323 = (i__5770__auto___51322 + (1));
i__5770__auto___51322 = G__51323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50927){
var G__50928 = cljs.core.first(seq50927);
var seq50927__$1 = cljs.core.next(seq50927);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50928,seq50927__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50930 = cljs.core.seq(sources);
var chunk__50931 = null;
var count__50932 = (0);
var i__50933 = (0);
while(true){
if((i__50933 < count__50932)){
var map__50941 = chunk__50931.cljs$core$IIndexed$_nth$arity$2(null,i__50933);
var map__50941__$1 = cljs.core.__destructure_map(map__50941);
var src = map__50941__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50941__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50942){var e_51324 = e50942;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51324);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51324.message)].join('')));
}

var G__51325 = seq__50930;
var G__51326 = chunk__50931;
var G__51327 = count__50932;
var G__51328 = (i__50933 + (1));
seq__50930 = G__51325;
chunk__50931 = G__51326;
count__50932 = G__51327;
i__50933 = G__51328;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50930);
if(temp__5804__auto__){
var seq__50930__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50930__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50930__$1);
var G__51329 = cljs.core.chunk_rest(seq__50930__$1);
var G__51330 = c__5568__auto__;
var G__51331 = cljs.core.count(c__5568__auto__);
var G__51332 = (0);
seq__50930 = G__51329;
chunk__50931 = G__51330;
count__50932 = G__51331;
i__50933 = G__51332;
continue;
} else {
var map__50943 = cljs.core.first(seq__50930__$1);
var map__50943__$1 = cljs.core.__destructure_map(map__50943);
var src = map__50943__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50944){var e_51333 = e50944;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51333);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51333.message)].join('')));
}

var G__51334 = cljs.core.next(seq__50930__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__50930 = G__51334;
chunk__50931 = G__51335;
count__50932 = G__51336;
i__50933 = G__51337;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50949 = cljs.core.seq(js_requires);
var chunk__50950 = null;
var count__50951 = (0);
var i__50952 = (0);
while(true){
if((i__50952 < count__50951)){
var js_ns = chunk__50950.cljs$core$IIndexed$_nth$arity$2(null,i__50952);
var require_str_51338 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51338);


var G__51339 = seq__50949;
var G__51340 = chunk__50950;
var G__51341 = count__50951;
var G__51342 = (i__50952 + (1));
seq__50949 = G__51339;
chunk__50950 = G__51340;
count__50951 = G__51341;
i__50952 = G__51342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50949);
if(temp__5804__auto__){
var seq__50949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50949__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50949__$1);
var G__51343 = cljs.core.chunk_rest(seq__50949__$1);
var G__51344 = c__5568__auto__;
var G__51345 = cljs.core.count(c__5568__auto__);
var G__51346 = (0);
seq__50949 = G__51343;
chunk__50950 = G__51344;
count__50951 = G__51345;
i__50952 = G__51346;
continue;
} else {
var js_ns = cljs.core.first(seq__50949__$1);
var require_str_51347 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51347);


var G__51348 = cljs.core.next(seq__50949__$1);
var G__51349 = null;
var G__51350 = (0);
var G__51351 = (0);
seq__50949 = G__51348;
chunk__50950 = G__51349;
count__50951 = G__51350;
i__50952 = G__51351;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50958){
var map__50959 = p__50958;
var map__50959__$1 = cljs.core.__destructure_map(map__50959);
var msg = map__50959__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50959__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50959__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50960(s__50961){
return (new cljs.core.LazySeq(null,(function (){
var s__50961__$1 = s__50961;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50961__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__50968 = cljs.core.first(xs__6360__auto__);
var map__50968__$1 = cljs.core.__destructure_map(map__50968);
var src = map__50968__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50968__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__50961__$1,map__50968,map__50968__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50959,map__50959__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50960_$_iter__50962(s__50963){
return (new cljs.core.LazySeq(null,((function (s__50961__$1,map__50968,map__50968__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50959,map__50959__$1,msg,info,reload_info){
return (function (){
var s__50963__$1 = s__50963;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__50963__$1);
if(temp__5804__auto____$1){
var s__50963__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50963__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50963__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50965 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50964 = (0);
while(true){
if((i__50964 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__50964);
cljs.core.chunk_append(b__50965,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51352 = (i__50964 + (1));
i__50964 = G__51352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50965),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50960_$_iter__50962(cljs.core.chunk_rest(s__50963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50965),null);
}
} else {
var warning = cljs.core.first(s__50963__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50960_$_iter__50962(cljs.core.rest(s__50963__$2)));
}
} else {
return null;
}
break;
}
});})(s__50961__$1,map__50968,map__50968__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50959,map__50959__$1,msg,info,reload_info))
,null,null));
});})(s__50961__$1,map__50968,map__50968__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__50959,map__50959__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50960(cljs.core.rest(s__50961__$1)));
} else {
var G__51353 = cljs.core.rest(s__50961__$1);
s__50961__$1 = G__51353;
continue;
}
} else {
var G__51354 = cljs.core.rest(s__50961__$1);
s__50961__$1 = G__51354;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50971_51355 = cljs.core.seq(warnings);
var chunk__50972_51356 = null;
var count__50973_51357 = (0);
var i__50974_51358 = (0);
while(true){
if((i__50974_51358 < count__50973_51357)){
var map__50977_51359 = chunk__50972_51356.cljs$core$IIndexed$_nth$arity$2(null,i__50974_51358);
var map__50977_51360__$1 = cljs.core.__destructure_map(map__50977_51359);
var w_51361 = map__50977_51360__$1;
var msg_51362__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51360__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51360__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51360__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51360__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51365)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51363),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51364),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51362__$1)].join(''));


var G__51366 = seq__50971_51355;
var G__51367 = chunk__50972_51356;
var G__51368 = count__50973_51357;
var G__51369 = (i__50974_51358 + (1));
seq__50971_51355 = G__51366;
chunk__50972_51356 = G__51367;
count__50973_51357 = G__51368;
i__50974_51358 = G__51369;
continue;
} else {
var temp__5804__auto___51370 = cljs.core.seq(seq__50971_51355);
if(temp__5804__auto___51370){
var seq__50971_51371__$1 = temp__5804__auto___51370;
if(cljs.core.chunked_seq_QMARK_(seq__50971_51371__$1)){
var c__5568__auto___51372 = cljs.core.chunk_first(seq__50971_51371__$1);
var G__51373 = cljs.core.chunk_rest(seq__50971_51371__$1);
var G__51374 = c__5568__auto___51372;
var G__51375 = cljs.core.count(c__5568__auto___51372);
var G__51376 = (0);
seq__50971_51355 = G__51373;
chunk__50972_51356 = G__51374;
count__50973_51357 = G__51375;
i__50974_51358 = G__51376;
continue;
} else {
var map__50978_51377 = cljs.core.first(seq__50971_51371__$1);
var map__50978_51378__$1 = cljs.core.__destructure_map(map__50978_51377);
var w_51379 = map__50978_51378__$1;
var msg_51380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978_51378__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978_51378__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978_51378__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50978_51378__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51383)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51381),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51382),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51380__$1)].join(''));


var G__51384 = cljs.core.next(seq__50971_51371__$1);
var G__51385 = null;
var G__51386 = (0);
var G__51387 = (0);
seq__50971_51355 = G__51384;
chunk__50972_51356 = G__51385;
count__50973_51357 = G__51386;
i__50974_51358 = G__51387;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50957_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50957_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50982){
var map__50983 = p__50982;
var map__50983__$1 = cljs.core.__destructure_map(map__50983);
var msg = map__50983__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50983__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50984 = cljs.core.seq(updates);
var chunk__50986 = null;
var count__50987 = (0);
var i__50988 = (0);
while(true){
if((i__50988 < count__50987)){
var path = chunk__50986.cljs$core$IIndexed$_nth$arity$2(null,i__50988);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51150_51388 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51154_51389 = null;
var count__51155_51390 = (0);
var i__51156_51391 = (0);
while(true){
if((i__51156_51391 < count__51155_51390)){
var node_51392 = chunk__51154_51389.cljs$core$IIndexed$_nth$arity$2(null,i__51156_51391);
if(cljs.core.not(node_51392.shadow$old)){
var path_match_51393 = shadow.cljs.devtools.client.browser.match_paths(node_51392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51393)){
var new_link_51394 = (function (){var G__51192 = node_51392.cloneNode(true);
G__51192.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51393),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51192;
})();
(node_51392.shadow$old = true);

(new_link_51394.onload = ((function (seq__51150_51388,chunk__51154_51389,count__51155_51390,i__51156_51391,seq__50984,chunk__50986,count__50987,i__50988,new_link_51394,path_match_51393,node_51392,path,map__50983,map__50983__$1,msg,updates,reload_info){
return (function (e){
var seq__51193_51395 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51195_51396 = null;
var count__51196_51397 = (0);
var i__51197_51398 = (0);
while(true){
if((i__51197_51398 < count__51196_51397)){
var map__51203_51399 = chunk__51195_51396.cljs$core$IIndexed$_nth$arity$2(null,i__51197_51398);
var map__51203_51400__$1 = cljs.core.__destructure_map(map__51203_51399);
var task_51401 = map__51203_51400__$1;
var fn_str_51402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203_51400__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203_51400__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51404 = goog.getObjectByName(fn_str_51402,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51403)].join(''));

(fn_obj_51404.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51404.cljs$core$IFn$_invoke$arity$2(path,new_link_51394) : fn_obj_51404.call(null,path,new_link_51394));


var G__51405 = seq__51193_51395;
var G__51406 = chunk__51195_51396;
var G__51407 = count__51196_51397;
var G__51408 = (i__51197_51398 + (1));
seq__51193_51395 = G__51405;
chunk__51195_51396 = G__51406;
count__51196_51397 = G__51407;
i__51197_51398 = G__51408;
continue;
} else {
var temp__5804__auto___51409 = cljs.core.seq(seq__51193_51395);
if(temp__5804__auto___51409){
var seq__51193_51410__$1 = temp__5804__auto___51409;
if(cljs.core.chunked_seq_QMARK_(seq__51193_51410__$1)){
var c__5568__auto___51411 = cljs.core.chunk_first(seq__51193_51410__$1);
var G__51412 = cljs.core.chunk_rest(seq__51193_51410__$1);
var G__51413 = c__5568__auto___51411;
var G__51414 = cljs.core.count(c__5568__auto___51411);
var G__51415 = (0);
seq__51193_51395 = G__51412;
chunk__51195_51396 = G__51413;
count__51196_51397 = G__51414;
i__51197_51398 = G__51415;
continue;
} else {
var map__51209_51416 = cljs.core.first(seq__51193_51410__$1);
var map__51209_51417__$1 = cljs.core.__destructure_map(map__51209_51416);
var task_51418 = map__51209_51417__$1;
var fn_str_51419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209_51417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51209_51417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51421 = goog.getObjectByName(fn_str_51419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51420)].join(''));

(fn_obj_51421.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51421.cljs$core$IFn$_invoke$arity$2(path,new_link_51394) : fn_obj_51421.call(null,path,new_link_51394));


var G__51422 = cljs.core.next(seq__51193_51410__$1);
var G__51423 = null;
var G__51424 = (0);
var G__51425 = (0);
seq__51193_51395 = G__51422;
chunk__51195_51396 = G__51423;
count__51196_51397 = G__51424;
i__51197_51398 = G__51425;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51392);
});})(seq__51150_51388,chunk__51154_51389,count__51155_51390,i__51156_51391,seq__50984,chunk__50986,count__50987,i__50988,new_link_51394,path_match_51393,node_51392,path,map__50983,map__50983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51393], 0));

goog.dom.insertSiblingAfter(new_link_51394,node_51392);


var G__51426 = seq__51150_51388;
var G__51427 = chunk__51154_51389;
var G__51428 = count__51155_51390;
var G__51429 = (i__51156_51391 + (1));
seq__51150_51388 = G__51426;
chunk__51154_51389 = G__51427;
count__51155_51390 = G__51428;
i__51156_51391 = G__51429;
continue;
} else {
var G__51430 = seq__51150_51388;
var G__51431 = chunk__51154_51389;
var G__51432 = count__51155_51390;
var G__51433 = (i__51156_51391 + (1));
seq__51150_51388 = G__51430;
chunk__51154_51389 = G__51431;
count__51155_51390 = G__51432;
i__51156_51391 = G__51433;
continue;
}
} else {
var G__51434 = seq__51150_51388;
var G__51435 = chunk__51154_51389;
var G__51436 = count__51155_51390;
var G__51437 = (i__51156_51391 + (1));
seq__51150_51388 = G__51434;
chunk__51154_51389 = G__51435;
count__51155_51390 = G__51436;
i__51156_51391 = G__51437;
continue;
}
} else {
var temp__5804__auto___51438 = cljs.core.seq(seq__51150_51388);
if(temp__5804__auto___51438){
var seq__51150_51439__$1 = temp__5804__auto___51438;
if(cljs.core.chunked_seq_QMARK_(seq__51150_51439__$1)){
var c__5568__auto___51440 = cljs.core.chunk_first(seq__51150_51439__$1);
var G__51441 = cljs.core.chunk_rest(seq__51150_51439__$1);
var G__51442 = c__5568__auto___51440;
var G__51443 = cljs.core.count(c__5568__auto___51440);
var G__51444 = (0);
seq__51150_51388 = G__51441;
chunk__51154_51389 = G__51442;
count__51155_51390 = G__51443;
i__51156_51391 = G__51444;
continue;
} else {
var node_51445 = cljs.core.first(seq__51150_51439__$1);
if(cljs.core.not(node_51445.shadow$old)){
var path_match_51446 = shadow.cljs.devtools.client.browser.match_paths(node_51445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51446)){
var new_link_51447 = (function (){var G__51210 = node_51445.cloneNode(true);
G__51210.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51210;
})();
(node_51445.shadow$old = true);

(new_link_51447.onload = ((function (seq__51150_51388,chunk__51154_51389,count__51155_51390,i__51156_51391,seq__50984,chunk__50986,count__50987,i__50988,new_link_51447,path_match_51446,node_51445,seq__51150_51439__$1,temp__5804__auto___51438,path,map__50983,map__50983__$1,msg,updates,reload_info){
return (function (e){
var seq__51211_51450 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51213_51451 = null;
var count__51214_51452 = (0);
var i__51215_51453 = (0);
while(true){
if((i__51215_51453 < count__51214_51452)){
var map__51219_51454 = chunk__51213_51451.cljs$core$IIndexed$_nth$arity$2(null,i__51215_51453);
var map__51219_51455__$1 = cljs.core.__destructure_map(map__51219_51454);
var task_51456 = map__51219_51455__$1;
var fn_str_51457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51455__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51455__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51459 = goog.getObjectByName(fn_str_51457,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51458)].join(''));

(fn_obj_51459.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51459.cljs$core$IFn$_invoke$arity$2(path,new_link_51447) : fn_obj_51459.call(null,path,new_link_51447));


var G__51460 = seq__51211_51450;
var G__51461 = chunk__51213_51451;
var G__51462 = count__51214_51452;
var G__51463 = (i__51215_51453 + (1));
seq__51211_51450 = G__51460;
chunk__51213_51451 = G__51461;
count__51214_51452 = G__51462;
i__51215_51453 = G__51463;
continue;
} else {
var temp__5804__auto___51464__$1 = cljs.core.seq(seq__51211_51450);
if(temp__5804__auto___51464__$1){
var seq__51211_51465__$1 = temp__5804__auto___51464__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51211_51465__$1)){
var c__5568__auto___51466 = cljs.core.chunk_first(seq__51211_51465__$1);
var G__51467 = cljs.core.chunk_rest(seq__51211_51465__$1);
var G__51468 = c__5568__auto___51466;
var G__51469 = cljs.core.count(c__5568__auto___51466);
var G__51470 = (0);
seq__51211_51450 = G__51467;
chunk__51213_51451 = G__51468;
count__51214_51452 = G__51469;
i__51215_51453 = G__51470;
continue;
} else {
var map__51220_51471 = cljs.core.first(seq__51211_51465__$1);
var map__51220_51472__$1 = cljs.core.__destructure_map(map__51220_51471);
var task_51473 = map__51220_51472__$1;
var fn_str_51474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51220_51472__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51220_51472__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51476 = goog.getObjectByName(fn_str_51474,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51475)].join(''));

(fn_obj_51476.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51476.cljs$core$IFn$_invoke$arity$2(path,new_link_51447) : fn_obj_51476.call(null,path,new_link_51447));


var G__51479 = cljs.core.next(seq__51211_51465__$1);
var G__51480 = null;
var G__51481 = (0);
var G__51482 = (0);
seq__51211_51450 = G__51479;
chunk__51213_51451 = G__51480;
count__51214_51452 = G__51481;
i__51215_51453 = G__51482;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51445);
});})(seq__51150_51388,chunk__51154_51389,count__51155_51390,i__51156_51391,seq__50984,chunk__50986,count__50987,i__50988,new_link_51447,path_match_51446,node_51445,seq__51150_51439__$1,temp__5804__auto___51438,path,map__50983,map__50983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51446], 0));

goog.dom.insertSiblingAfter(new_link_51447,node_51445);


var G__51483 = cljs.core.next(seq__51150_51439__$1);
var G__51484 = null;
var G__51485 = (0);
var G__51486 = (0);
seq__51150_51388 = G__51483;
chunk__51154_51389 = G__51484;
count__51155_51390 = G__51485;
i__51156_51391 = G__51486;
continue;
} else {
var G__51488 = cljs.core.next(seq__51150_51439__$1);
var G__51489 = null;
var G__51490 = (0);
var G__51491 = (0);
seq__51150_51388 = G__51488;
chunk__51154_51389 = G__51489;
count__51155_51390 = G__51490;
i__51156_51391 = G__51491;
continue;
}
} else {
var G__51492 = cljs.core.next(seq__51150_51439__$1);
var G__51493 = null;
var G__51494 = (0);
var G__51495 = (0);
seq__51150_51388 = G__51492;
chunk__51154_51389 = G__51493;
count__51155_51390 = G__51494;
i__51156_51391 = G__51495;
continue;
}
}
} else {
}
}
break;
}


var G__51496 = seq__50984;
var G__51497 = chunk__50986;
var G__51498 = count__50987;
var G__51499 = (i__50988 + (1));
seq__50984 = G__51496;
chunk__50986 = G__51497;
count__50987 = G__51498;
i__50988 = G__51499;
continue;
} else {
var G__51500 = seq__50984;
var G__51501 = chunk__50986;
var G__51502 = count__50987;
var G__51503 = (i__50988 + (1));
seq__50984 = G__51500;
chunk__50986 = G__51501;
count__50987 = G__51502;
i__50988 = G__51503;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50984);
if(temp__5804__auto__){
var seq__50984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50984__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50984__$1);
var G__51504 = cljs.core.chunk_rest(seq__50984__$1);
var G__51505 = c__5568__auto__;
var G__51506 = cljs.core.count(c__5568__auto__);
var G__51507 = (0);
seq__50984 = G__51504;
chunk__50986 = G__51505;
count__50987 = G__51506;
i__50988 = G__51507;
continue;
} else {
var path = cljs.core.first(seq__50984__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51224_51508 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51228_51509 = null;
var count__51229_51510 = (0);
var i__51230_51511 = (0);
while(true){
if((i__51230_51511 < count__51229_51510)){
var node_51512 = chunk__51228_51509.cljs$core$IIndexed$_nth$arity$2(null,i__51230_51511);
if(cljs.core.not(node_51512.shadow$old)){
var path_match_51513 = shadow.cljs.devtools.client.browser.match_paths(node_51512.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51513)){
var new_link_51514 = (function (){var G__51274 = node_51512.cloneNode(true);
G__51274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51513),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51274;
})();
(node_51512.shadow$old = true);

(new_link_51514.onload = ((function (seq__51224_51508,chunk__51228_51509,count__51229_51510,i__51230_51511,seq__50984,chunk__50986,count__50987,i__50988,new_link_51514,path_match_51513,node_51512,path,seq__50984__$1,temp__5804__auto__,map__50983,map__50983__$1,msg,updates,reload_info){
return (function (e){
var seq__51275_51515 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51277_51516 = null;
var count__51278_51517 = (0);
var i__51279_51518 = (0);
while(true){
if((i__51279_51518 < count__51278_51517)){
var map__51285_51519 = chunk__51277_51516.cljs$core$IIndexed$_nth$arity$2(null,i__51279_51518);
var map__51285_51520__$1 = cljs.core.__destructure_map(map__51285_51519);
var task_51521 = map__51285_51520__$1;
var fn_str_51522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51285_51520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51285_51520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51524 = goog.getObjectByName(fn_str_51522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51523)].join(''));

(fn_obj_51524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51524.cljs$core$IFn$_invoke$arity$2(path,new_link_51514) : fn_obj_51524.call(null,path,new_link_51514));


var G__51525 = seq__51275_51515;
var G__51526 = chunk__51277_51516;
var G__51527 = count__51278_51517;
var G__51528 = (i__51279_51518 + (1));
seq__51275_51515 = G__51525;
chunk__51277_51516 = G__51526;
count__51278_51517 = G__51527;
i__51279_51518 = G__51528;
continue;
} else {
var temp__5804__auto___51529__$1 = cljs.core.seq(seq__51275_51515);
if(temp__5804__auto___51529__$1){
var seq__51275_51530__$1 = temp__5804__auto___51529__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51275_51530__$1)){
var c__5568__auto___51531 = cljs.core.chunk_first(seq__51275_51530__$1);
var G__51532 = cljs.core.chunk_rest(seq__51275_51530__$1);
var G__51533 = c__5568__auto___51531;
var G__51534 = cljs.core.count(c__5568__auto___51531);
var G__51535 = (0);
seq__51275_51515 = G__51532;
chunk__51277_51516 = G__51533;
count__51278_51517 = G__51534;
i__51279_51518 = G__51535;
continue;
} else {
var map__51289_51536 = cljs.core.first(seq__51275_51530__$1);
var map__51289_51537__$1 = cljs.core.__destructure_map(map__51289_51536);
var task_51538 = map__51289_51537__$1;
var fn_str_51539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289_51537__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289_51537__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51541 = goog.getObjectByName(fn_str_51539,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51540)].join(''));

(fn_obj_51541.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51541.cljs$core$IFn$_invoke$arity$2(path,new_link_51514) : fn_obj_51541.call(null,path,new_link_51514));


var G__51542 = cljs.core.next(seq__51275_51530__$1);
var G__51543 = null;
var G__51544 = (0);
var G__51545 = (0);
seq__51275_51515 = G__51542;
chunk__51277_51516 = G__51543;
count__51278_51517 = G__51544;
i__51279_51518 = G__51545;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51512);
});})(seq__51224_51508,chunk__51228_51509,count__51229_51510,i__51230_51511,seq__50984,chunk__50986,count__50987,i__50988,new_link_51514,path_match_51513,node_51512,path,seq__50984__$1,temp__5804__auto__,map__50983,map__50983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51513], 0));

goog.dom.insertSiblingAfter(new_link_51514,node_51512);


var G__51547 = seq__51224_51508;
var G__51548 = chunk__51228_51509;
var G__51549 = count__51229_51510;
var G__51550 = (i__51230_51511 + (1));
seq__51224_51508 = G__51547;
chunk__51228_51509 = G__51548;
count__51229_51510 = G__51549;
i__51230_51511 = G__51550;
continue;
} else {
var G__51551 = seq__51224_51508;
var G__51552 = chunk__51228_51509;
var G__51553 = count__51229_51510;
var G__51554 = (i__51230_51511 + (1));
seq__51224_51508 = G__51551;
chunk__51228_51509 = G__51552;
count__51229_51510 = G__51553;
i__51230_51511 = G__51554;
continue;
}
} else {
var G__51555 = seq__51224_51508;
var G__51556 = chunk__51228_51509;
var G__51557 = count__51229_51510;
var G__51558 = (i__51230_51511 + (1));
seq__51224_51508 = G__51555;
chunk__51228_51509 = G__51556;
count__51229_51510 = G__51557;
i__51230_51511 = G__51558;
continue;
}
} else {
var temp__5804__auto___51559__$1 = cljs.core.seq(seq__51224_51508);
if(temp__5804__auto___51559__$1){
var seq__51224_51560__$1 = temp__5804__auto___51559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51224_51560__$1)){
var c__5568__auto___51561 = cljs.core.chunk_first(seq__51224_51560__$1);
var G__51562 = cljs.core.chunk_rest(seq__51224_51560__$1);
var G__51563 = c__5568__auto___51561;
var G__51564 = cljs.core.count(c__5568__auto___51561);
var G__51565 = (0);
seq__51224_51508 = G__51562;
chunk__51228_51509 = G__51563;
count__51229_51510 = G__51564;
i__51230_51511 = G__51565;
continue;
} else {
var node_51566 = cljs.core.first(seq__51224_51560__$1);
if(cljs.core.not(node_51566.shadow$old)){
var path_match_51567 = shadow.cljs.devtools.client.browser.match_paths(node_51566.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51567)){
var new_link_51568 = (function (){var G__51290 = node_51566.cloneNode(true);
G__51290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51567),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51290;
})();
(node_51566.shadow$old = true);

(new_link_51568.onload = ((function (seq__51224_51508,chunk__51228_51509,count__51229_51510,i__51230_51511,seq__50984,chunk__50986,count__50987,i__50988,new_link_51568,path_match_51567,node_51566,seq__51224_51560__$1,temp__5804__auto___51559__$1,path,seq__50984__$1,temp__5804__auto__,map__50983,map__50983__$1,msg,updates,reload_info){
return (function (e){
var seq__51291_51569 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51293_51570 = null;
var count__51294_51571 = (0);
var i__51295_51572 = (0);
while(true){
if((i__51295_51572 < count__51294_51571)){
var map__51299_51575 = chunk__51293_51570.cljs$core$IIndexed$_nth$arity$2(null,i__51295_51572);
var map__51299_51576__$1 = cljs.core.__destructure_map(map__51299_51575);
var task_51577 = map__51299_51576__$1;
var fn_str_51578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299_51576__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51299_51576__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51580 = goog.getObjectByName(fn_str_51578,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51579)].join(''));

(fn_obj_51580.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51580.cljs$core$IFn$_invoke$arity$2(path,new_link_51568) : fn_obj_51580.call(null,path,new_link_51568));


var G__51581 = seq__51291_51569;
var G__51582 = chunk__51293_51570;
var G__51583 = count__51294_51571;
var G__51584 = (i__51295_51572 + (1));
seq__51291_51569 = G__51581;
chunk__51293_51570 = G__51582;
count__51294_51571 = G__51583;
i__51295_51572 = G__51584;
continue;
} else {
var temp__5804__auto___51585__$2 = cljs.core.seq(seq__51291_51569);
if(temp__5804__auto___51585__$2){
var seq__51291_51586__$1 = temp__5804__auto___51585__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51291_51586__$1)){
var c__5568__auto___51587 = cljs.core.chunk_first(seq__51291_51586__$1);
var G__51588 = cljs.core.chunk_rest(seq__51291_51586__$1);
var G__51589 = c__5568__auto___51587;
var G__51590 = cljs.core.count(c__5568__auto___51587);
var G__51591 = (0);
seq__51291_51569 = G__51588;
chunk__51293_51570 = G__51589;
count__51294_51571 = G__51590;
i__51295_51572 = G__51591;
continue;
} else {
var map__51300_51592 = cljs.core.first(seq__51291_51586__$1);
var map__51300_51593__$1 = cljs.core.__destructure_map(map__51300_51592);
var task_51594 = map__51300_51593__$1;
var fn_str_51595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51300_51593__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51300_51593__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51597 = goog.getObjectByName(fn_str_51595,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51596)].join(''));

(fn_obj_51597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51597.cljs$core$IFn$_invoke$arity$2(path,new_link_51568) : fn_obj_51597.call(null,path,new_link_51568));


var G__51598 = cljs.core.next(seq__51291_51586__$1);
var G__51599 = null;
var G__51600 = (0);
var G__51601 = (0);
seq__51291_51569 = G__51598;
chunk__51293_51570 = G__51599;
count__51294_51571 = G__51600;
i__51295_51572 = G__51601;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51566);
});})(seq__51224_51508,chunk__51228_51509,count__51229_51510,i__51230_51511,seq__50984,chunk__50986,count__50987,i__50988,new_link_51568,path_match_51567,node_51566,seq__51224_51560__$1,temp__5804__auto___51559__$1,path,seq__50984__$1,temp__5804__auto__,map__50983,map__50983__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51567], 0));

goog.dom.insertSiblingAfter(new_link_51568,node_51566);


var G__51602 = cljs.core.next(seq__51224_51560__$1);
var G__51603 = null;
var G__51604 = (0);
var G__51605 = (0);
seq__51224_51508 = G__51602;
chunk__51228_51509 = G__51603;
count__51229_51510 = G__51604;
i__51230_51511 = G__51605;
continue;
} else {
var G__51606 = cljs.core.next(seq__51224_51560__$1);
var G__51607 = null;
var G__51608 = (0);
var G__51609 = (0);
seq__51224_51508 = G__51606;
chunk__51228_51509 = G__51607;
count__51229_51510 = G__51608;
i__51230_51511 = G__51609;
continue;
}
} else {
var G__51610 = cljs.core.next(seq__51224_51560__$1);
var G__51611 = null;
var G__51612 = (0);
var G__51613 = (0);
seq__51224_51508 = G__51610;
chunk__51228_51509 = G__51611;
count__51229_51510 = G__51612;
i__51230_51511 = G__51613;
continue;
}
}
} else {
}
}
break;
}


var G__51614 = cljs.core.next(seq__50984__$1);
var G__51615 = null;
var G__51616 = (0);
var G__51617 = (0);
seq__50984 = G__51614;
chunk__50986 = G__51615;
count__50987 = G__51616;
i__50988 = G__51617;
continue;
} else {
var G__51618 = cljs.core.next(seq__50984__$1);
var G__51619 = null;
var G__51620 = (0);
var G__51621 = (0);
seq__50984 = G__51618;
chunk__50986 = G__51619;
count__50987 = G__51620;
i__50988 = G__51621;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51301){
var map__51302 = p__51301;
var map__51302__$1 = cljs.core.__destructure_map(map__51302);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51302__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51303){
var map__51304 = p__51303;
var map__51304__$1 = cljs.core.__destructure_map(map__51304);
var _ = map__51304__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51305,done,error){
var map__51306 = p__51305;
var map__51306__$1 = cljs.core.__destructure_map(map__51306);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51306__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51307,done,error){
var map__51308 = p__51307;
var map__51308__$1 = cljs.core.__destructure_map(map__51308);
var msg = map__51308__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51309){
var map__51310 = p__51309;
var map__51310__$1 = cljs.core.__destructure_map(map__51310);
var src = map__51310__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51311 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51311) : done.call(null,G__51311));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51312){
var map__51313 = p__51312;
var map__51313__$1 = cljs.core.__destructure_map(map__51313);
var msg__$1 = map__51313__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51313__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51314){var ex = e51314;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51315){
var map__51316 = p__51315;
var map__51316__$1 = cljs.core.__destructure_map(map__51316);
var env = map__51316__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51316__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51317){
var map__51318 = p__51317;
var map__51318__$1 = cljs.core.__destructure_map(map__51318);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51319){
var map__51320 = p__51319;
var map__51320__$1 = cljs.core.__destructure_map(map__51320);
var svc = map__51320__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51320__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
