goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__40153){
var vec__40156 = p__40153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40156,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__40169 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40169,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40169,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40169,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__40195 = arguments.length;
switch (G__40195) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__40209_40350 = clojure.data.equality_partition;
var G__40210_40351 = "null";
var G__40211_40352 = ((function (G__40209_40350,G__40210_40351){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40209_40350,G__40210_40351))
;
goog.object.set(G__40209_40350,G__40210_40351,G__40211_40352);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__40214_40353 = clojure.data.equality_partition;
var G__40215_40354 = "string";
var G__40216_40355 = ((function (G__40214_40353,G__40215_40354){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40214_40353,G__40215_40354))
;
goog.object.set(G__40214_40353,G__40215_40354,G__40216_40355);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__40219_40363 = clojure.data.equality_partition;
var G__40220_40364 = "number";
var G__40221_40365 = ((function (G__40219_40363,G__40220_40364){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40219_40363,G__40220_40364))
;
goog.object.set(G__40219_40363,G__40220_40364,G__40221_40365);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__40224_40367 = clojure.data.equality_partition;
var G__40225_40368 = "array";
var G__40226_40369 = ((function (G__40224_40367,G__40225_40368){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__40224_40367,G__40225_40368))
;
goog.object.set(G__40224_40367,G__40225_40368,G__40226_40369);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__40229_40376 = clojure.data.equality_partition;
var G__40230_40377 = "function";
var G__40231_40378 = ((function (G__40229_40376,G__40230_40377){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40229_40376,G__40230_40377))
;
goog.object.set(G__40229_40376,G__40230_40377,G__40231_40378);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__40234_40382 = clojure.data.equality_partition;
var G__40235_40383 = "boolean";
var G__40236_40384 = ((function (G__40234_40382,G__40235_40383){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40234_40382,G__40235_40383))
;
goog.object.set(G__40234_40382,G__40235_40383,G__40236_40384);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__40239_40385 = clojure.data.equality_partition;
var G__40240_40386 = "_";
var G__40241_40387 = ((function (G__40239_40385,G__40240_40386){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__40239_40385,G__40240_40386))
;
goog.object.set(G__40239_40385,G__40240_40386,G__40241_40387);
goog.object.set(clojure.data.Diff,"null",true);

var G__40261_40389 = clojure.data.diff_similar;
var G__40262_40390 = "null";
var G__40263_40391 = ((function (G__40261_40389,G__40262_40390){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40261_40389,G__40262_40390))
;
goog.object.set(G__40261_40389,G__40262_40390,G__40263_40391);

goog.object.set(clojure.data.Diff,"string",true);

var G__40264_40392 = clojure.data.diff_similar;
var G__40265_40393 = "string";
var G__40266_40394 = ((function (G__40264_40392,G__40265_40393){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40264_40392,G__40265_40393))
;
goog.object.set(G__40264_40392,G__40265_40393,G__40266_40394);

goog.object.set(clojure.data.Diff,"number",true);

var G__40267_40395 = clojure.data.diff_similar;
var G__40268_40396 = "number";
var G__40269_40397 = ((function (G__40267_40395,G__40268_40396){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40267_40395,G__40268_40396))
;
goog.object.set(G__40267_40395,G__40268_40396,G__40269_40397);

goog.object.set(clojure.data.Diff,"array",true);

var G__40270_40398 = clojure.data.diff_similar;
var G__40271_40399 = "array";
var G__40272_40400 = ((function (G__40270_40398,G__40271_40399){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40270_40398,G__40271_40399))
;
goog.object.set(G__40270_40398,G__40271_40399,G__40272_40400);

goog.object.set(clojure.data.Diff,"function",true);

var G__40273_40401 = clojure.data.diff_similar;
var G__40274_40402 = "function";
var G__40275_40403 = ((function (G__40273_40401,G__40274_40402){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40273_40401,G__40274_40402))
;
goog.object.set(G__40273_40401,G__40274_40402,G__40275_40403);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40276_40404 = clojure.data.diff_similar;
var G__40277_40405 = "boolean";
var G__40278_40406 = ((function (G__40276_40404,G__40277_40405){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40276_40404,G__40277_40405))
;
goog.object.set(G__40276_40404,G__40277_40405,G__40278_40406);

goog.object.set(clojure.data.Diff,"_",true);

var G__40281_40413 = clojure.data.diff_similar;
var G__40282_40414 = "_";
var G__40283_40415 = ((function (G__40281_40413,G__40282_40414){
return (function (a,b){
var fexpr__40289 = (function (){var G__40290 = clojure.data.equality_partition(a);
var G__40290__$1 = (((G__40290 instanceof cljs.core.Keyword))?G__40290.fqn:null);
switch (G__40290__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40290__$1)].join('')));

}
})();
return (fexpr__40289.cljs$core$IFn$_invoke$arity$2 ? fexpr__40289.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40289.call(null,a,b));
});})(G__40281_40413,G__40282_40414))
;
goog.object.set(G__40281_40413,G__40282_40414,G__40283_40415);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
