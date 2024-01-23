goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__49822 = libspec;
var seq__49823 = cljs.core.seq(vec__49822);
var first__49824 = cljs.core.first(seq__49823);
var seq__49823__$1 = cljs.core.next(seq__49823);
var lib = first__49824;
var spec = seq__49823__$1;
var libspec__$1 = vec__49822;
var vec__49825 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825,(0),null);
var vec__49828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825,(1),null);
var seq__49829 = cljs.core.seq(vec__49828);
var first__49830 = cljs.core.first(seq__49829);
var seq__49829__$1 = cljs.core.next(seq__49829);
var _ = first__49830;
var first__49830__$1 = cljs.core.first(seq__49829__$1);
var seq__49829__$2 = cljs.core.next(seq__49829__$1);
var alias = first__49830__$1;
var post_spec = seq__49829__$2;
var post = vec__49828;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__49831 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49831,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__49831;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__49832 = cljs.core.seq(new_as_aliases);
var chunk__49833 = null;
var count__49834 = (0);
var i__49835 = (0);
while(true){
if((i__49835 < count__49834)){
var vec__49842 = chunk__49833.cljs$core$IIndexed$_nth$arity$2(null,i__49835);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49842,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49842,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__49871 = seq__49832;
var G__49872 = chunk__49833;
var G__49873 = count__49834;
var G__49874 = (i__49835 + (1));
seq__49832 = G__49871;
chunk__49833 = G__49872;
count__49834 = G__49873;
i__49835 = G__49874;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49832);
if(temp__5804__auto__){
var seq__49832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49832__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49832__$1);
var G__49875 = cljs.core.chunk_rest(seq__49832__$1);
var G__49876 = c__5568__auto__;
var G__49877 = cljs.core.count(c__5568__auto__);
var G__49878 = (0);
seq__49832 = G__49875;
chunk__49833 = G__49876;
count__49834 = G__49877;
i__49835 = G__49878;
continue;
} else {
var vec__49845 = cljs.core.first(seq__49832__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__49879 = cljs.core.next(seq__49832__$1);
var G__49880 = null;
var G__49881 = (0);
var G__49882 = (0);
seq__49832 = G__49879;
chunk__49833 = G__49880;
count__49834 = G__49881;
i__49835 = G__49882;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__49849 = arguments.length;
switch (G__49849) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__49850 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__49850__$1 = cljs.core.__destructure_map(map__49850);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49850__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__49851 = ret__$1;
var G__49851__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49851,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__49851);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49851__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__49851__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49854,p__49855){
var map__49856 = p__49854;
var map__49856__$1 = cljs.core.__destructure_map(map__49856);
var ret__$1 = map__49856__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__49857 = p__49855;
var seq__49858 = cljs.core.seq(vec__49857);
var first__49859 = cljs.core.first(seq__49858);
var seq__49858__$1 = cljs.core.next(seq__49858);
var spec_key = first__49859;
var libspecs = seq__49858__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__49860 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__49860__$1 = cljs.core.__destructure_map(map__49860);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__49864 = ret__$1;
var G__49864__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49864,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__49864);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49864__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__49864__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
