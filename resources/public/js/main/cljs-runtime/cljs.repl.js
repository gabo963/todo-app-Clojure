goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59236){
var map__59237 = p__59236;
var map__59237__$1 = cljs.core.__destructure_map(map__59237);
var m = map__59237__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59237__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__59245_59357 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59248_59358 = null;
var count__59249_59359 = (0);
var i__59250_59360 = (0);
while(true){
if((i__59250_59360 < count__59249_59359)){
var f_59361 = chunk__59248_59358.cljs$core$IIndexed$_nth$arity$2(null,i__59250_59360);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59361], 0));


var G__59362 = seq__59245_59357;
var G__59363 = chunk__59248_59358;
var G__59364 = count__59249_59359;
var G__59365 = (i__59250_59360 + (1));
seq__59245_59357 = G__59362;
chunk__59248_59358 = G__59363;
count__59249_59359 = G__59364;
i__59250_59360 = G__59365;
continue;
} else {
var temp__5804__auto___59366 = cljs.core.seq(seq__59245_59357);
if(temp__5804__auto___59366){
var seq__59245_59367__$1 = temp__5804__auto___59366;
if(cljs.core.chunked_seq_QMARK_(seq__59245_59367__$1)){
var c__5568__auto___59368 = cljs.core.chunk_first(seq__59245_59367__$1);
var G__59369 = cljs.core.chunk_rest(seq__59245_59367__$1);
var G__59370 = c__5568__auto___59368;
var G__59371 = cljs.core.count(c__5568__auto___59368);
var G__59372 = (0);
seq__59245_59357 = G__59369;
chunk__59248_59358 = G__59370;
count__59249_59359 = G__59371;
i__59250_59360 = G__59372;
continue;
} else {
var f_59373 = cljs.core.first(seq__59245_59367__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59373], 0));


var G__59374 = cljs.core.next(seq__59245_59367__$1);
var G__59375 = null;
var G__59376 = (0);
var G__59377 = (0);
seq__59245_59357 = G__59374;
chunk__59248_59358 = G__59375;
count__59249_59359 = G__59376;
i__59250_59360 = G__59377;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59378 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59378], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59378)))?cljs.core.second(arglists_59378):arglists_59378)], 0));
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
var seq__59252_59384 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59253_59385 = null;
var count__59254_59386 = (0);
var i__59255_59387 = (0);
while(true){
if((i__59255_59387 < count__59254_59386)){
var vec__59266_59388 = chunk__59253_59385.cljs$core$IIndexed$_nth$arity$2(null,i__59255_59387);
var name_59389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266_59388,(0),null);
var map__59269_59390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266_59388,(1),null);
var map__59269_59391__$1 = cljs.core.__destructure_map(map__59269_59390);
var doc_59392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269_59391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59269_59391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59389], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59393], 0));

if(cljs.core.truth_(doc_59392)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59392], 0));
} else {
}


var G__59394 = seq__59252_59384;
var G__59395 = chunk__59253_59385;
var G__59396 = count__59254_59386;
var G__59397 = (i__59255_59387 + (1));
seq__59252_59384 = G__59394;
chunk__59253_59385 = G__59395;
count__59254_59386 = G__59396;
i__59255_59387 = G__59397;
continue;
} else {
var temp__5804__auto___59398 = cljs.core.seq(seq__59252_59384);
if(temp__5804__auto___59398){
var seq__59252_59399__$1 = temp__5804__auto___59398;
if(cljs.core.chunked_seq_QMARK_(seq__59252_59399__$1)){
var c__5568__auto___59400 = cljs.core.chunk_first(seq__59252_59399__$1);
var G__59401 = cljs.core.chunk_rest(seq__59252_59399__$1);
var G__59402 = c__5568__auto___59400;
var G__59403 = cljs.core.count(c__5568__auto___59400);
var G__59404 = (0);
seq__59252_59384 = G__59401;
chunk__59253_59385 = G__59402;
count__59254_59386 = G__59403;
i__59255_59387 = G__59404;
continue;
} else {
var vec__59271_59405 = cljs.core.first(seq__59252_59399__$1);
var name_59406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59271_59405,(0),null);
var map__59274_59407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59271_59405,(1),null);
var map__59274_59408__$1 = cljs.core.__destructure_map(map__59274_59407);
var doc_59409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274_59408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274_59408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59406], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59410], 0));

if(cljs.core.truth_(doc_59409)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59409], 0));
} else {
}


var G__59411 = cljs.core.next(seq__59252_59399__$1);
var G__59412 = null;
var G__59413 = (0);
var G__59414 = (0);
seq__59252_59384 = G__59411;
chunk__59253_59385 = G__59412;
count__59254_59386 = G__59413;
i__59255_59387 = G__59414;
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

var seq__59275 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59276 = null;
var count__59277 = (0);
var i__59278 = (0);
while(true){
if((i__59278 < count__59277)){
var role = chunk__59276.cljs$core$IIndexed$_nth$arity$2(null,i__59278);
var temp__5804__auto___59415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___59415__$1)){
var spec_59416 = temp__5804__auto___59415__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59416)], 0));
} else {
}


var G__59417 = seq__59275;
var G__59418 = chunk__59276;
var G__59419 = count__59277;
var G__59420 = (i__59278 + (1));
seq__59275 = G__59417;
chunk__59276 = G__59418;
count__59277 = G__59419;
i__59278 = G__59420;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__59275);
if(temp__5804__auto____$1){
var seq__59275__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59275__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59275__$1);
var G__59421 = cljs.core.chunk_rest(seq__59275__$1);
var G__59422 = c__5568__auto__;
var G__59423 = cljs.core.count(c__5568__auto__);
var G__59424 = (0);
seq__59275 = G__59421;
chunk__59276 = G__59422;
count__59277 = G__59423;
i__59278 = G__59424;
continue;
} else {
var role = cljs.core.first(seq__59275__$1);
var temp__5804__auto___59425__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___59425__$2)){
var spec_59426 = temp__5804__auto___59425__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59426)], 0));
} else {
}


var G__59427 = cljs.core.next(seq__59275__$1);
var G__59428 = null;
var G__59429 = (0);
var G__59430 = (0);
seq__59275 = G__59427;
chunk__59276 = G__59428;
count__59277 = G__59429;
i__59278 = G__59430;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
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
var G__59431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59432 = cljs.core.ex_cause(t);
via = G__59431;
t = G__59432;
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
var map__59291 = datafied_throwable;
var map__59291__$1 = cljs.core.__destructure_map(map__59291);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59291__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59292 = cljs.core.last(via);
var map__59292__$1 = cljs.core.__destructure_map(map__59292);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59292__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59292__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59293 = data;
var map__59293__$1 = cljs.core.__destructure_map(map__59293);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59293__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59293__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59293__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59294 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59294__$1 = cljs.core.__destructure_map(map__59294);
var top_data = map__59294__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59294__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59295 = phase;
var G__59295__$1 = (((G__59295 instanceof cljs.core.Keyword))?G__59295.fqn:null);
switch (G__59295__$1) {
case "read-source":
var map__59296 = data;
var map__59296__$1 = cljs.core.__destructure_map(map__59296);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59296__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59296__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59297 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59297__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59297,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59297);
var G__59297__$2 = (cljs.core.truth_((function (){var fexpr__59298 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59298.cljs$core$IFn$_invoke$arity$1 ? fexpr__59298.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59298.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59297__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59297__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59297__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59297__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59300 = top_data;
var G__59300__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59300,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59300);
var G__59300__$2 = (cljs.core.truth_((function (){var fexpr__59301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59301.cljs$core$IFn$_invoke$arity$1 ? fexpr__59301.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59301.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59300__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59300__$1);
var G__59300__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59300__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59300__$2);
var G__59300__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59300__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59300__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59300__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59300__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59302,(3),null);
var G__59308 = top_data;
var G__59308__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59308,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59308);
var G__59308__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59308__$1);
var G__59308__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59308__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59308__$2);
var G__59308__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59308__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59308__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59308__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59308__$4;
}

break;
case "execution":
var vec__59309 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59309,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59290_SHARP_){
var or__5045__auto__ = (p1__59290_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__59312 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59312.cljs$core$IFn$_invoke$arity$1 ? fexpr__59312.cljs$core$IFn$_invoke$arity$1(p1__59290_SHARP_) : fexpr__59312.call(null,p1__59290_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__59313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59313__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59313,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59313);
var G__59313__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59313__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59313__$1);
var G__59313__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59313__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59313__$2);
var G__59313__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59313__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59313__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59313__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59313__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59295__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59317){
var map__59318 = p__59317;
var map__59318__$1 = cljs.core.__destructure_map(map__59318);
var triage_data = map__59318__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__59320 = phase;
var G__59320__$1 = (((G__59320 instanceof cljs.core.Keyword))?G__59320.fqn:null);
switch (G__59320__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59321 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59323 = loc;
var G__59324 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59325_59447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59326_59448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59327_59449 = true;
var _STAR_print_fn_STAR__temp_val__59328_59450 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59327_59449);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59328_59450);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59314_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59314_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59326_59448);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59325_59447);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59321,G__59322,G__59323,G__59324) : format.call(null,G__59321,G__59322,G__59323,G__59324));

break;
case "macroexpansion":
var G__59329 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59330 = cause_type;
var G__59331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59332 = loc;
var G__59333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59329,G__59330,G__59331,G__59332,G__59333) : format.call(null,G__59329,G__59330,G__59331,G__59332,G__59333));

break;
case "compile-syntax-check":
var G__59334 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59335 = cause_type;
var G__59336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59337 = loc;
var G__59338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59334,G__59335,G__59336,G__59337,G__59338) : format.call(null,G__59334,G__59335,G__59336,G__59337,G__59338));

break;
case "compilation":
var G__59339 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59340 = cause_type;
var G__59341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59342 = loc;
var G__59343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59339,G__59340,G__59341,G__59342,G__59343) : format.call(null,G__59339,G__59340,G__59341,G__59342,G__59343));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59344 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59345 = symbol;
var G__59346 = loc;
var G__59347 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59348_59451 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59349_59452 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59350_59453 = true;
var _STAR_print_fn_STAR__temp_val__59351_59454 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59350_59453);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59351_59454);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59316_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59316_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59349_59452);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59348_59451);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59344,G__59345,G__59346,G__59347) : format.call(null,G__59344,G__59345,G__59346,G__59347));
} else {
var G__59352 = "Execution error%s at %s(%s).\n%s\n";
var G__59353 = cause_type;
var G__59354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59355 = loc;
var G__59356 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59352,G__59353,G__59354,G__59355,G__59356) : format.call(null,G__59352,G__59353,G__59354,G__59355,G__59356));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59320__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
