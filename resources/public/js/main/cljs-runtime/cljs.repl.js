goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52899){
var map__52901 = p__52899;
var map__52901__$1 = (((((!((map__52901 == null))))?(((((map__52901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52901):map__52901);
var m = map__52901__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52915_53258 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52916_53259 = null;
var count__52917_53260 = (0);
var i__52918_53261 = (0);
while(true){
if((i__52918_53261 < count__52917_53260)){
var f_53262 = chunk__52916_53259.cljs$core$IIndexed$_nth$arity$2(null,i__52918_53261);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53262], 0));


var G__53263 = seq__52915_53258;
var G__53264 = chunk__52916_53259;
var G__53265 = count__52917_53260;
var G__53266 = (i__52918_53261 + (1));
seq__52915_53258 = G__53263;
chunk__52916_53259 = G__53264;
count__52917_53260 = G__53265;
i__52918_53261 = G__53266;
continue;
} else {
var temp__5804__auto___53267 = cljs.core.seq(seq__52915_53258);
if(temp__5804__auto___53267){
var seq__52915_53268__$1 = temp__5804__auto___53267;
if(cljs.core.chunked_seq_QMARK_(seq__52915_53268__$1)){
var c__4550__auto___53269 = cljs.core.chunk_first(seq__52915_53268__$1);
var G__53270 = cljs.core.chunk_rest(seq__52915_53268__$1);
var G__53271 = c__4550__auto___53269;
var G__53272 = cljs.core.count(c__4550__auto___53269);
var G__53273 = (0);
seq__52915_53258 = G__53270;
chunk__52916_53259 = G__53271;
count__52917_53260 = G__53272;
i__52918_53261 = G__53273;
continue;
} else {
var f_53274 = cljs.core.first(seq__52915_53268__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53274], 0));


var G__53275 = cljs.core.next(seq__52915_53268__$1);
var G__53276 = null;
var G__53277 = (0);
var G__53278 = (0);
seq__52915_53258 = G__53275;
chunk__52916_53259 = G__53276;
count__52917_53260 = G__53277;
i__52918_53261 = G__53278;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53279 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53279], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53279)))?cljs.core.second(arglists_53279):arglists_53279)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52952_53280 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52954_53281 = null;
var count__52955_53282 = (0);
var i__52956_53283 = (0);
while(true){
if((i__52956_53283 < count__52955_53282)){
var vec__52994_53286 = chunk__52954_53281.cljs$core$IIndexed$_nth$arity$2(null,i__52956_53283);
var name_53287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52994_53286,(0),null);
var map__52997_53288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52994_53286,(1),null);
var map__52997_53289__$1 = (((((!((map__52997_53288 == null))))?(((((map__52997_53288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52997_53288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52997_53288):map__52997_53288);
var doc_53290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997_53289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997_53289__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53287], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53291], 0));

if(cljs.core.truth_(doc_53290)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53290], 0));
} else {
}


var G__53293 = seq__52952_53280;
var G__53294 = chunk__52954_53281;
var G__53295 = count__52955_53282;
var G__53296 = (i__52956_53283 + (1));
seq__52952_53280 = G__53293;
chunk__52954_53281 = G__53294;
count__52955_53282 = G__53295;
i__52956_53283 = G__53296;
continue;
} else {
var temp__5804__auto___53297 = cljs.core.seq(seq__52952_53280);
if(temp__5804__auto___53297){
var seq__52952_53298__$1 = temp__5804__auto___53297;
if(cljs.core.chunked_seq_QMARK_(seq__52952_53298__$1)){
var c__4550__auto___53299 = cljs.core.chunk_first(seq__52952_53298__$1);
var G__53301 = cljs.core.chunk_rest(seq__52952_53298__$1);
var G__53302 = c__4550__auto___53299;
var G__53303 = cljs.core.count(c__4550__auto___53299);
var G__53304 = (0);
seq__52952_53280 = G__53301;
chunk__52954_53281 = G__53302;
count__52955_53282 = G__53303;
i__52956_53283 = G__53304;
continue;
} else {
var vec__53008_53305 = cljs.core.first(seq__52952_53298__$1);
var name_53306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53008_53305,(0),null);
var map__53011_53307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53008_53305,(1),null);
var map__53011_53308__$1 = (((((!((map__53011_53307 == null))))?(((((map__53011_53307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53011_53307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53011_53307):map__53011_53307);
var doc_53309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011_53308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53306], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53310], 0));

if(cljs.core.truth_(doc_53309)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53309], 0));
} else {
}


var G__53332 = cljs.core.next(seq__52952_53298__$1);
var G__53333 = null;
var G__53334 = (0);
var G__53335 = (0);
seq__52952_53280 = G__53332;
chunk__52954_53281 = G__53333;
count__52955_53282 = G__53334;
i__52956_53283 = G__53335;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53016 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53017 = null;
var count__53018 = (0);
var i__53019 = (0);
while(true){
if((i__53019 < count__53018)){
var role = chunk__53017.cljs$core$IIndexed$_nth$arity$2(null,i__53019);
var temp__5804__auto___53338__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53338__$1)){
var spec_53339 = temp__5804__auto___53338__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53339)], 0));
} else {
}


var G__53342 = seq__53016;
var G__53343 = chunk__53017;
var G__53344 = count__53018;
var G__53345 = (i__53019 + (1));
seq__53016 = G__53342;
chunk__53017 = G__53343;
count__53018 = G__53344;
i__53019 = G__53345;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__53016);
if(temp__5804__auto____$1){
var seq__53016__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53016__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53016__$1);
var G__53348 = cljs.core.chunk_rest(seq__53016__$1);
var G__53349 = c__4550__auto__;
var G__53350 = cljs.core.count(c__4550__auto__);
var G__53351 = (0);
seq__53016 = G__53348;
chunk__53017 = G__53349;
count__53018 = G__53350;
i__53019 = G__53351;
continue;
} else {
var role = cljs.core.first(seq__53016__$1);
var temp__5804__auto___53357__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53357__$2)){
var spec_53358 = temp__5804__auto___53357__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53358)], 0));
} else {
}


var G__53363 = cljs.core.next(seq__53016__$1);
var G__53364 = null;
var G__53365 = (0);
var G__53366 = (0);
seq__53016 = G__53363;
chunk__53017 = G__53364;
count__53018 = G__53365;
i__53019 = G__53366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53384 = cljs.core.ex_cause(t);
via = G__53383;
t = G__53384;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53090 = datafied_throwable;
var map__53090__$1 = (((((!((map__53090 == null))))?(((((map__53090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53090):map__53090);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53090__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53090__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53090__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53091 = cljs.core.last(via);
var map__53091__$1 = (((((!((map__53091 == null))))?(((((map__53091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53091):map__53091);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53092 = data;
var map__53092__$1 = (((((!((map__53092 == null))))?(((((map__53092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53092):map__53092);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53092__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53092__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53092__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53093 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53093__$1 = (((((!((map__53093 == null))))?(((((map__53093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53093):map__53093);
var top_data = map__53093__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53107 = phase;
var G__53107__$1 = (((G__53107 instanceof cljs.core.Keyword))?G__53107.fqn:null);
switch (G__53107__$1) {
case "read-source":
var map__53109 = data;
var map__53109__$1 = (((((!((map__53109 == null))))?(((((map__53109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53109):map__53109);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53113 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53113__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53113,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53113);
var G__53113__$2 = (cljs.core.truth_((function (){var fexpr__53115 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53115.cljs$core$IFn$_invoke$arity$1 ? fexpr__53115.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53115.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53113__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53113__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53113__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53121 = top_data;
var G__53121__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53121,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53121);
var G__53121__$2 = (cljs.core.truth_((function (){var fexpr__53125 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53125.cljs$core$IFn$_invoke$arity$1 ? fexpr__53125.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53125.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53121__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53121__$1);
var G__53121__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53121__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53121__$2);
var G__53121__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53121__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53121__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53121__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53121__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53129 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(3),null);
var G__53133 = top_data;
var G__53133__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53133);
var G__53133__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53133__$1);
var G__53133__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53133__$2);
var G__53133__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53133__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53133__$4;
}

break;
case "execution":
var vec__53145 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53145,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53145,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53145,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53145,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__53145,source__$1,method,file,line,G__53107,G__53107__$1,map__53090,map__53090__$1,via,trace,phase,map__53091,map__53091__$1,type,message,data,map__53092,map__53092__$1,problems,fn,caller,map__53093,map__53093__$1,top_data,source){
return (function (p1__53085_SHARP_){
var or__4131__auto__ = (p1__53085_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__53153 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53153.cljs$core$IFn$_invoke$arity$1 ? fexpr__53153.cljs$core$IFn$_invoke$arity$1(p1__53085_SHARP_) : fexpr__53153.call(null,p1__53085_SHARP_));
}
});})(vec__53145,source__$1,method,file,line,G__53107,G__53107__$1,map__53090,map__53090__$1,via,trace,phase,map__53091,map__53091__$1,type,message,data,map__53092,map__53092__$1,problems,fn,caller,map__53093,map__53093__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__53158 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53158__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53158,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53158);
var G__53158__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53158__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53158__$1);
var G__53158__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53158__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53158__$2);
var G__53158__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53158__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53158__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53158__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53158__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53107__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53176){
var map__53177 = p__53176;
var map__53177__$1 = (((((!((map__53177 == null))))?(((((map__53177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53177):map__53177);
var triage_data = map__53177__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53177__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53196 = phase;
var G__53196__$1 = (((G__53196 instanceof cljs.core.Keyword))?G__53196.fqn:null);
switch (G__53196__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53202 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53203 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53204 = loc;
var G__53205 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53211_53478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53212_53479 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53213_53480 = true;
var _STAR_print_fn_STAR__temp_val__53214_53481 = ((function (_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53213_53480;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53214_53481;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,_STAR_print_fn_STAR__temp_val__53214_53481,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,_STAR_print_fn_STAR__temp_val__53214_53481,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53170_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53170_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,_STAR_print_fn_STAR__temp_val__53214_53481,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53211_53478,_STAR_print_fn_STAR__orig_val__53212_53479,_STAR_print_newline_STAR__temp_val__53213_53480,_STAR_print_fn_STAR__temp_val__53214_53481,sb__4661__auto__,G__53202,G__53203,G__53204,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53212_53479;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53211_53478;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53202,G__53203,G__53204,G__53205) : format.call(null,G__53202,G__53203,G__53204,G__53205));

break;
case "macroexpansion":
var G__53215 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53216 = cause_type;
var G__53217 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53218 = loc;
var G__53219 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53215,G__53216,G__53217,G__53218,G__53219) : format.call(null,G__53215,G__53216,G__53217,G__53218,G__53219));

break;
case "compile-syntax-check":
var G__53220 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53221 = cause_type;
var G__53222 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53223 = loc;
var G__53224 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53220,G__53221,G__53222,G__53223,G__53224) : format.call(null,G__53220,G__53221,G__53222,G__53223,G__53224));

break;
case "compilation":
var G__53225 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53226 = cause_type;
var G__53227 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53228 = loc;
var G__53229 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53225,G__53226,G__53227,G__53228,G__53229) : format.call(null,G__53225,G__53226,G__53227,G__53228,G__53229));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53233 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53234 = symbol;
var G__53235 = loc;
var G__53236 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53238_53492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53239_53493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53240_53494 = true;
var _STAR_print_fn_STAR__temp_val__53241_53495 = ((function (_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53240_53494;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53241_53495;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,_STAR_print_fn_STAR__temp_val__53241_53495,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,_STAR_print_fn_STAR__temp_val__53241_53495,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__53175_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53175_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,_STAR_print_fn_STAR__temp_val__53241_53495,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__53238_53492,_STAR_print_fn_STAR__orig_val__53239_53493,_STAR_print_newline_STAR__temp_val__53240_53494,_STAR_print_fn_STAR__temp_val__53241_53495,sb__4661__auto__,G__53233,G__53234,G__53235,G__53196,G__53196__$1,loc,class_name,simple_class,cause_type,format,map__53177,map__53177__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53239_53493;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53238_53492;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53233,G__53234,G__53235,G__53236) : format.call(null,G__53233,G__53234,G__53235,G__53236));
} else {
var G__53246 = "Execution error%s at %s(%s).\n%s\n";
var G__53247 = cause_type;
var G__53248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53249 = loc;
var G__53250 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53246,G__53247,G__53248,G__53249,G__53250) : format.call(null,G__53246,G__53247,G__53248,G__53249,G__53250));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53196__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
