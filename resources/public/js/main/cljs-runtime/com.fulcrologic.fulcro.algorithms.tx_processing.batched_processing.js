goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.scheduling');
goog.require('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.raw.components');
goog.require('com.fulcrologic.fulcro.specs');
goog.require('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('com.fulcrologic.guardrails.core');
goog.require('edn_query_language.core');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remove_send_BANG_(p__56305,remote,txn_id,ele_idx){
var map__56306 = p__56305;
var map__56306__$1 = (((((!((map__56306 == null))))?(((((map__56306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56306):map__56306);
var app__$1 = map__56306__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56306__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56308 = cljs.core.deref(runtime_atom);
var map__56308__$1 = (((((!((map__56308 == null))))?(((((map__56308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56308):map__56308);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv(((function (map__56308,map__56308__$1,send_queues,old_queue,map__56306,map__56306__$1,app__$1,runtime_atom){
return (function (p__56311){
var map__56312 = p__56311;
var map__56312__$1 = (((((!((map__56312 == null))))?(((((map__56312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56312):map__56312);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56312__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56312__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
});})(map__56308,map__56308__$1,send_queues,old_queue,map__56306,map__56306__$1,app__$1,runtime_atom))
,old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_;
/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56315){
return cljs.core.vector_QMARK_(G__56315);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__56321){
var map__56323 = p__56321;
var map__56323__$1 = (((((!((map__56323 == null))))?(((((map__56323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56323):map__56323);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56323__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__56316 = cljs.core.group_by(parallel_QMARK_,sends);
var map__56316__$1 = (((((!((map__56316 == null))))?(((((map__56316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56316):map__56316);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__56342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56342_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__56345_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56345_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__56358 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__56358,active_queue,send_queue__$1){
return (function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
});})(vec__56358,active_queue,send_queue__$1))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__56362 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__56358,active_queue,send_queue__$1,id_sequence,clusters){
return (function (result,id){
var vec__56373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__56374 = cljs.core.seq(vec__56373);
var first__56375 = cljs.core.first(seq__56374);
var seq__56374__$1 = cljs.core.next(seq__56374);
var map__56376 = first__56375;
var map__56376__$1 = (((((!((map__56376 == null))))?(((((map__56376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56376):map__56376);
var n = map__56376__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56376__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__56374__$1;
var cluster = vec__56373;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
});})(vec__56358,active_queue,send_queue__$1,id_sequence,clusters))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__56362__$1 = (((((!((map__56362 == null))))?(((((map__56362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56362):map__56362);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56362__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$top_keys(p__56392){
var map__56393 = p__56392;
var map__56393__$1 = (((((!((map__56393 == null))))?(((((map__56393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56393):map__56393);
var ast = map__56393__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56393__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56393__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),((function (map__56393,map__56393__$1,ast,type,key,children){
return (function (G__56396){
return cljs.core.coll_QMARK_(G__56396);
});})(map__56393,map__56393__$1,ast,type,key,children))
], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$create_combined_node(app__$1,remote_name,p__56398){
var vec__56399 = p__56398;
var leader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56399,(0),null);
var to_send = vec__56399;
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__56399,leader,to_send){
return (function (acc,p__56402){
var map__56403 = p__56402;
var map__56403__$1 = (((((!((map__56403 == null))))?(((((map__56403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56403):map__56403);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56403__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
});})(vec__56399,leader,to_send))
,cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(leader);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (tx,ast,options,combined_node_id,combined_node_idx,remove_BANG_,vec__56399,leader,to_send){
return (function (combined_result){
var seq__56407 = cljs.core.seq(to_send);
var chunk__56408 = null;
var count__56409 = (0);
var i__56410 = (0);
while(true){
if((i__56410 < count__56409)){
var map__56416 = chunk__56408.cljs$core$IIndexed$_nth$arity$2(null,i__56410);
var map__56416__$1 = (((((!((map__56416 == null))))?(((((map__56416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56416):map__56416);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56416__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__57021 = seq__56407;
var G__57022 = chunk__56408;
var G__57023 = count__56409;
var G__57024 = (i__56410 + (1));
seq__56407 = G__57021;
chunk__56408 = G__57022;
count__56409 = G__57023;
i__56410 = G__57024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56407);
if(temp__5804__auto__){
var seq__56407__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56407__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56407__$1);
var G__57027 = cljs.core.chunk_rest(seq__56407__$1);
var G__57028 = c__4550__auto__;
var G__57029 = cljs.core.count(c__4550__auto__);
var G__57030 = (0);
seq__56407 = G__57027;
chunk__56408 = G__57028;
count__56409 = G__57029;
i__56410 = G__57030;
continue;
} else {
var map__56418 = cljs.core.first(seq__56407__$1);
var map__56418__$1 = (((((!((map__56418 == null))))?(((((map__56418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56418):map__56418);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56418__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__57031 = cljs.core.next(seq__56407__$1);
var G__57032 = null;
var G__57033 = (0);
var G__57034 = (0);
seq__56407 = G__57031;
chunk__56408 = G__57032;
count__56409 = G__57033;
i__56410 = G__57034;
continue;
}
} else {
return null;
}
}
break;
}
});})(tx,ast,options,combined_node_id,combined_node_idx,remove_BANG_,vec__56399,leader,to_send))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (tx,ast,options,combined_node_id,combined_node_idx,remove_BANG_,vec__56399,leader,to_send){
return (function (p__56420){
var map__56421 = p__56420;
var map__56421__$1 = (((((!((map__56421 == null))))?(((((map__56421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56421):map__56421);
var combined_result = map__56421__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56421__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : remove_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));

var seq__56423 = cljs.core.seq(to_send);
var chunk__56424 = null;
var count__56425 = (0);
var i__56426 = (0);
while(true){
if((i__56426 < count__56425)){
var map__56483 = chunk__56424.cljs$core$IIndexed$_nth$arity$2(null,i__56426);
var map__56483__$1 = (((((!((map__56483 == null))))?(((((map__56483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56483):map__56483);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56483__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56483__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_57039 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_57040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_57039);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var map__56486_57043 = result_57040;
var map__56486_57044__$1 = (((((!((map__56486_57043 == null))))?(((((map__56486_57043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56486_57043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56486_57043):map__56486_57043);
var status_code_57045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56486_57044__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_57046__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56486_57044__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_57045)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_57046__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_57045));
}
}catch (e56485){var e_57047 = e56485;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_57040) : result_handler.call(null,result_57040));


var G__57048 = seq__56423;
var G__57049 = chunk__56424;
var G__57050 = count__56425;
var G__57051 = (i__56426 + (1));
seq__56423 = G__57048;
chunk__56424 = G__57049;
count__56425 = G__57050;
i__56426 = G__57051;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56423);
if(temp__5804__auto__){
var seq__56423__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56423__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56423__$1);
var G__57052 = cljs.core.chunk_rest(seq__56423__$1);
var G__57053 = c__4550__auto__;
var G__57054 = cljs.core.count(c__4550__auto__);
var G__57055 = (0);
seq__56423 = G__57052;
chunk__56424 = G__57053;
count__56425 = G__57054;
i__56426 = G__57055;
continue;
} else {
var map__56489 = cljs.core.first(seq__56423__$1);
var map__56489__$1 = (((((!((map__56489 == null))))?(((((map__56489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56489):map__56489);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_57056 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_57057 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_57056);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var map__56492_57058 = result_57057;
var map__56492_57059__$1 = (((((!((map__56492_57058 == null))))?(((((map__56492_57058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56492_57058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56492_57058):map__56492_57058);
var status_code_57060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492_57059__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_57061__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492_57059__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_57060)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_57061__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_57060));
}
}catch (e56491){var e_57064 = e56491;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_57057) : result_handler.call(null,result_57057));


var G__57065 = cljs.core.next(seq__56423__$1);
var G__57066 = null;
var G__57067 = (0);
var G__57068 = (0);
seq__56423 = G__57065;
chunk__56424 = G__57066;
count__56425 = G__57067;
i__56426 = G__57068;
continue;
}
} else {
return null;
}
}
break;
}
});})(tx,ast,options,combined_node_id,combined_node_idx,remove_BANG_,vec__56399,leader,to_send))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
return combined_node;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$node_abort_id(n){
var or__4131__auto__ = (function (){var G__56495 = n;
var G__56495__$1 = (((G__56495 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__56495));
if((G__56495__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(G__56495__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56496 = n;
var G__56496__$1 = (((G__56496 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__56496));
if((G__56496__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(G__56496__$1);
}
}
});
/**
 * Returns true if the given transaction node represents one or more mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_node_QMARK_(p__56498){
var map__56499 = p__56498;
var map__56499__$1 = (((((!((map__56499 == null))))?(((((map__56499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56499):map__56499);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56499__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return ((cljs.core.map_QMARK_(ast)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.boolean$(cljs.core.some(((function (map__56499,map__56499__$1,ast){
return (function (p1__56497_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56497_SHARP_));
});})(map__56499,map__56499__$1,ast))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))));
});
/**
 * Returns true when ALL of the ::txn/send-node entries in `to-send` can be batched into an existing batch.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batchable_QMARK_(to_send,leader){
var abort_id = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(leader);
return cljs.core.boolean$(((cljs.core.seq(to_send)) && (cljs.core.every_QMARK_(((function (abort_id){
return (function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abort_id,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(n));
});})(abort_id))
,to_send)) && (cljs.core.not(cljs.core.some(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_,to_send)))));
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batch_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56505){
return cljs.core.map_QMARK_(G__56505);
}),(function (G__56505){
return cljs.core.contains_QMARK_(G__56505,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__56505){
return ((cljs.core.map_QMARK_(G__56505)) && (cljs.core.contains_QMARK_(G__56505,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var prime_leader = cljs.core.first(send_queue);
var map__56506 = cljs.core.group_by(((function (prime_leader){
return (function (n){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_leader], null),n);
});})(prime_leader))
,send_queue);
var map__56506__$1 = (((((!((map__56506 == null))))?(((((map__56506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56506):map__56506);
var prime_candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,true);
var to_defer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,false);
var map__56507 = (function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remainder","remainder",1046186872),to_defer], null);
var queue = prime_candidates;
while(true){
var leader = cljs.core.first(queue);
var vec__56514 = cljs.core.split_with(((function (result,queue,leader,prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer){
return (function (p1__56502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(leader),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__56502_SHARP_));
});})(result,queue,leader,prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer))
,queue);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56514,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56514,(1),null);
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
var new_result = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.conj,combined_node);
if(cljs.core.seq(remainder)){
var G__57086 = new_result;
var G__57087 = remainder;
result = G__57086;
queue = G__57087;
continue;
} else {
return new_result;
}
break;
}
})();
var map__56507__$1 = (((((!((map__56507 == null))))?(((((map__56507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56507):map__56507);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56507__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var remainder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56507__$1,new cljs.core.Keyword(null,"remainder","remainder",1046186872));
var batch_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var batch_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var batch_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),batch_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),batch_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","raw-body","com.fulcrologic.fulcro.algorithms.tx-processing/raw-body",-819595969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_){
return (function (p__56524){
var map__56525 = p__56524;
var map__56525__$1 = (((((!((map__56525 == null))))?(((((map__56525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56525):map__56525);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56525__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
});})(prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_))
,batch)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),(function (){var or__4131__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(prime_leader);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299),batch,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_){
return (function (combined_result){
var G__56528 = cljs.core.first(batch);
var map__56529 = G__56528;
var map__56529__$1 = (((((!((map__56529 == null))))?(((((map__56529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56529):map__56529);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(combined_result);
var more_result = cljs.core.next(combined_result);
var G__56528__$1 = G__56528;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__56533 = G__56528__$1;
var map__56533__$1 = (((((!((map__56533 == null))))?(((((map__56533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56533):map__56533);
var update_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
if(cljs.core.truth_(update_handler__$1)){
(update_handler__$1.cljs$core$IFn$_invoke$arity$1 ? update_handler__$1.cljs$core$IFn$_invoke$arity$1(result__$2) : update_handler__$1.call(null,result__$2));
} else {
}

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__57089 = cljs.core.first(more_batch__$2);
var G__57090 = cljs.core.next(more_batch__$2);
var G__57091 = cljs.core.first(more_result__$2);
var G__57092 = cljs.core.next(more_result__$2);
G__56528__$1 = G__57089;
more_batch__$1 = G__57090;
result__$1 = G__57091;
more_result__$1 = G__57092;
continue;
} else {
return null;
}
break;
}
});})(prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_){
return (function (p__56539){
var map__56540 = p__56539;
var map__56540__$1 = (((((!((map__56540 == null))))?(((((map__56540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56540):map__56540);
var batch_result = map__56540__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,batch_node_id,batch_node_idx) : remove_BANG_.call(null,app__$1,remote_name,batch_node_id,batch_node_idx));

var G__56544 = cljs.core.first(batch);
var map__56545 = G__56544;
var map__56545__$1 = (((((!((map__56545 == null))))?(((((map__56545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56545):map__56545);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56545__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(body);
var more_result = cljs.core.next(body);
var G__56544__$1 = G__56544;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__56552 = G__56544__$1;
var map__56552__$1 = (((((!((map__56552 == null))))?(((((map__56552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56552):map__56552);
var result_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
var G__56554_57093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch_result,new cljs.core.Keyword(null,"body","body",-2049205669),result__$2);
(result_handler__$1.cljs$core$IFn$_invoke$arity$1 ? result_handler__$1.cljs$core$IFn$_invoke$arity$1(G__56554_57093) : result_handler__$1.call(null,G__56554_57093));

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__57094 = cljs.core.first(more_batch__$2);
var G__57095 = cljs.core.next(more_batch__$2);
var G__57096 = cljs.core.first(more_result__$2);
var G__57097 = cljs.core.next(more_result__$2);
G__56544__$1 = G__57094;
more_batch__$1 = G__57095;
result__$1 = G__57096;
more_result__$1 = G__57097;
continue;
} else {
return null;
}
break;
}
});})(prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if((cljs.core.count(batch) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,212,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_,batch_node){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batched:",cljs.core.count(batch)], null);
});})(prime_leader,map__56506,map__56506__$1,prime_candidates,to_defer,map__56507,map__56507__$1,batch,remainder,batch_node_id,batch_node_idx,remove_BANG_,batch_node))
,null)),null,-1542622714,null);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),batch_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_node], null),remainder)], null);
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56556){
return cljs.core.map_QMARK_(G__56556);
}),(function (G__56556){
return cljs.core.contains_QMARK_(G__56556,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__56556){
return ((cljs.core.map_QMARK_(G__56556)) && (cljs.core.contains_QMARK_(G__56556,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

if(cljs.core.seq(send_queue)){
var map__56570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
var map__56570__$1 = (((((!((map__56570 == null))))?(((((map__56570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56570):map__56570);
var supports_raw_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"supports-raw-body?","supports-raw-body?",132893061));
var vec__56571 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var _active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56571,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__56574 = cljs.core.split_with(((function (map__56570,map__56570__$1,supports_raw_body_QMARK_,vec__56571,_active_nodes,send_queue__$1,send_queue__$2,id_to_send){
return (function (p1__56555_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__56555_SHARP_));
});})(map__56570,map__56570__$1,supports_raw_body_QMARK_,vec__56571,_active_nodes,send_queue__$1,send_queue__$2,id_to_send))
,send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56574,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56574,(1),null);
var leading_mutation_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_(cljs.core.first(to_send));
var batched_reads_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),remote_name], null),false);
var batch_QMARK_ = (function (){var and__4120__auto__ = batched_reads_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return supports_raw_body_QMARK_;
} else {
return and__4120__auto__;
}
})();
if(((leading_mutation_QMARK_) || (cljs.core.not(batch_QMARK_)))){
if(cljs.core.seq(to_send)){
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),to_defer)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends(app__$1,remote_name,send_queue__$2);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.PersistentVector.EMPTY], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$net_send_BANG_(app__$1,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__43106__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__43106__auto__)){
var remote = b2__43106__auto__;
var b2__43106__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__43106__auto____$1)){
var transmit_BANG_ = b2__43106__auto____$1;
try{if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var temp__5802__auto___57113 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___57113)){
var batch_57115 = temp__5802__auto___57113;
var seq__56598_57117 = cljs.core.seq(batch_57115);
var chunk__56599_57118 = null;
var count__56600_57119 = (0);
var i__56601_57120 = (0);
while(true){
if((i__56601_57120 < count__56600_57119)){
var element_node_57121 = chunk__56599_57118.cljs$core$IIndexed$_nth$arity$2(null,i__56601_57120);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_57126 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_57121));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_57121),tx_57126);
}catch (e56604){var e_57129 = e56604;
}} else {
}


var G__57130 = seq__56598_57117;
var G__57131 = chunk__56599_57118;
var G__57132 = count__56600_57119;
var G__57133 = (i__56601_57120 + (1));
seq__56598_57117 = G__57130;
chunk__56599_57118 = G__57131;
count__56600_57119 = G__57132;
i__56601_57120 = G__57133;
continue;
} else {
var temp__5804__auto___57136 = cljs.core.seq(seq__56598_57117);
if(temp__5804__auto___57136){
var seq__56598_57137__$1 = temp__5804__auto___57136;
if(cljs.core.chunked_seq_QMARK_(seq__56598_57137__$1)){
var c__4550__auto___57138 = cljs.core.chunk_first(seq__56598_57137__$1);
var G__57139 = cljs.core.chunk_rest(seq__56598_57137__$1);
var G__57140 = c__4550__auto___57138;
var G__57141 = cljs.core.count(c__4550__auto___57138);
var G__57142 = (0);
seq__56598_57117 = G__57139;
chunk__56599_57118 = G__57140;
count__56600_57119 = G__57141;
i__56601_57120 = G__57142;
continue;
} else {
var element_node_57144 = cljs.core.first(seq__56598_57137__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_57146 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_57144));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_57144),tx_57146);
}catch (e56605){var e_57147 = e56605;
}} else {
}


var G__57148 = cljs.core.next(seq__56598_57137__$1);
var G__57149 = null;
var G__57150 = (0);
var G__57151 = (0);
seq__56598_57117 = G__57148;
chunk__56599_57118 = G__57149;
count__56600_57119 = G__57150;
i__56601_57120 = G__57151;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_57153 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_57153);
}catch (e56606){var e_57155 = e56606;
}} else {
}
}
}catch (e56597){var e_57156 = e56597;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e56583){var e = e56583;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,256,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,transmit_BANG_,b2__43106__auto____$1,remote,b2__43106__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
});})(e,transmit_BANG_,b2__43106__auto____$1,remote,b2__43106__auto__))
,null)),null,1919949960,null);

try{if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var temp__5802__auto___57161 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___57161)){
var batch_57162 = temp__5802__auto___57161;
var seq__56586_57163 = cljs.core.seq(batch_57162);
var chunk__56587_57164 = null;
var count__56588_57165 = (0);
var i__56589_57166 = (0);
while(true){
if((i__56589_57166 < count__56588_57165)){
var element_node_57167 = chunk__56587_57164.cljs$core$IIndexed$_nth$arity$2(null,i__56589_57166);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_57167),"Transmit Exception");


var G__57169 = seq__56586_57163;
var G__57170 = chunk__56587_57164;
var G__57171 = count__56588_57165;
var G__57172 = (i__56589_57166 + (1));
seq__56586_57163 = G__57169;
chunk__56587_57164 = G__57170;
count__56588_57165 = G__57171;
i__56589_57166 = G__57172;
continue;
} else {
var temp__5804__auto___57173 = cljs.core.seq(seq__56586_57163);
if(temp__5804__auto___57173){
var seq__56586_57175__$1 = temp__5804__auto___57173;
if(cljs.core.chunked_seq_QMARK_(seq__56586_57175__$1)){
var c__4550__auto___57177 = cljs.core.chunk_first(seq__56586_57175__$1);
var G__57178 = cljs.core.chunk_rest(seq__56586_57175__$1);
var G__57179 = c__4550__auto___57177;
var G__57180 = cljs.core.count(c__4550__auto___57177);
var G__57181 = (0);
seq__56586_57163 = G__57178;
chunk__56587_57164 = G__57179;
count__56588_57165 = G__57180;
i__56589_57166 = G__57181;
continue;
} else {
var element_node_57182 = cljs.core.first(seq__56586_57175__$1);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_57182),"Transmit Exception");


var G__57184 = cljs.core.next(seq__56586_57175__$1);
var G__57185 = null;
var G__57186 = (0);
var G__57187 = (0);
seq__56586_57163 = G__57184;
chunk__56587_57164 = G__57185;
count__56588_57165 = G__57186;
i__56589_57166 = G__57187;
continue;
}
} else {
}
}
break;
}
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}
}catch (e56585){var e_57189__$1 = e56585;
}} else {
}

var G__56596 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__56595 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__56595.cljs$core$IFn$_invoke$arity$1 ? fexpr__56595.cljs$core$IFn$_invoke$arity$1(G__56596) : fexpr__56595.call(null,G__56596));
}catch (e56584){var e__$1 = e56584;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,266,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,e,transmit_BANG_,b2__43106__auto____$1,remote,b2__43106__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
});})(e__$1,e,transmit_BANG_,b2__43106__auto____$1,remote,b2__43106__auto__))
,null)),null,-1309902762,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__43106__auto____$1,remote,b2__43106__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
});})(b2__43106__auto____$1,remote,b2__43106__auto__))
,null)),null,-1564625709,null);

var G__56613 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__56612 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__56612.cljs$core$IFn$_invoke$arity$1 ? fexpr__56612.cljs$core$IFn$_invoke$arity$1(G__56613) : fexpr__56612.call(null,G__56613));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__43106__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
});})(b2__43106__auto__))
,null)),null,1136743637,null);

var G__56619 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__56618 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__56618.cljs$core$IFn$_invoke$arity$1 ? fexpr__56618.cljs$core$IFn$_invoke$arity$1(G__56619) : fexpr__56618.call(null,G__56619));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_send_queues_BANG_(p__56621){
var map__56622 = p__56621;
var map__56622__$1 = (((((!((map__56622 == null))))?(((((map__56622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56622):map__56622);
var app__$1 = map__56622__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56622__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom){
return (function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__56624 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624,(1),null);
var front = cljs.core.first(serial);
var seq__56629_57201 = cljs.core.seq(p);
var chunk__56630_57202 = null;
var count__56631_57203 = (0);
var i__56632_57204 = (0);
while(true){
if((i__56632_57204 < count__56631_57203)){
var item_57207 = chunk__56630_57202.cljs$core$IIndexed$_nth$arity$2(null,i__56632_57204);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56629_57201,chunk__56630_57202,count__56631_57203,i__56632_57204,item_57207,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_57207,remote);
});})(seq__56629_57201,chunk__56630_57202,count__56631_57203,i__56632_57204,item_57207,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom))
);


var G__57209 = seq__56629_57201;
var G__57210 = chunk__56630_57202;
var G__57211 = count__56631_57203;
var G__57212 = (i__56632_57204 + (1));
seq__56629_57201 = G__57209;
chunk__56630_57202 = G__57210;
count__56631_57203 = G__57211;
i__56632_57204 = G__57212;
continue;
} else {
var temp__5804__auto___57213 = cljs.core.seq(seq__56629_57201);
if(temp__5804__auto___57213){
var seq__56629_57214__$1 = temp__5804__auto___57213;
if(cljs.core.chunked_seq_QMARK_(seq__56629_57214__$1)){
var c__4550__auto___57215 = cljs.core.chunk_first(seq__56629_57214__$1);
var G__57216 = cljs.core.chunk_rest(seq__56629_57214__$1);
var G__57217 = c__4550__auto___57215;
var G__57218 = cljs.core.count(c__4550__auto___57215);
var G__57219 = (0);
seq__56629_57201 = G__57216;
chunk__56630_57202 = G__57217;
count__56631_57203 = G__57218;
i__56632_57204 = G__57219;
continue;
} else {
var item_57220 = cljs.core.first(seq__56629_57214__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56629_57201,chunk__56630_57202,count__56631_57203,i__56632_57204,item_57220,seq__56629_57214__$1,temp__5804__auto___57213,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_57220,remote);
});})(seq__56629_57201,chunk__56630_57202,count__56631_57203,i__56632_57204,item_57220,seq__56629_57214__$1,temp__5804__auto___57213,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom))
);


var G__57223 = cljs.core.next(seq__56629_57214__$1);
var G__57224 = null;
var G__57225 = (0);
var G__57226 = (0);
seq__56629_57201 = G__57223;
chunk__56630_57202 = G__57224;
count__56631_57203 = G__57225;
i__56632_57204 = G__57226;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__56650 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote,serial);
var map__56650__$1 = (((((!((map__56650 == null))))?(((((map__56650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56650):map__56650);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56650__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56650__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (map__56650,map__56650__$1,send_queue__$1,send_node,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node,remote);
});})(map__56650,map__56650__$1,send_queue__$1,send_node,send_queue,vec__56624,p,serial,front,send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom))
);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
});})(send_queues,remote_names,operations,map__56622,map__56622__$1,app__$1,runtime_atom))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__56666_57233 = cljs.core.seq(cljs.core.deref(operations));
var chunk__56667_57234 = null;
var count__56668_57235 = (0);
var i__56669_57236 = (0);
while(true){
if((i__56669_57236 < count__56668_57235)){
var op_57237 = chunk__56667_57234.cljs$core$IIndexed$_nth$arity$2(null,i__56669_57236);
(op_57237.cljs$core$IFn$_invoke$arity$0 ? op_57237.cljs$core$IFn$_invoke$arity$0() : op_57237.call(null));


var G__57238 = seq__56666_57233;
var G__57239 = chunk__56667_57234;
var G__57240 = count__56668_57235;
var G__57241 = (i__56669_57236 + (1));
seq__56666_57233 = G__57238;
chunk__56667_57234 = G__57239;
count__56668_57235 = G__57240;
i__56669_57236 = G__57241;
continue;
} else {
var temp__5804__auto___57242 = cljs.core.seq(seq__56666_57233);
if(temp__5804__auto___57242){
var seq__56666_57243__$1 = temp__5804__auto___57242;
if(cljs.core.chunked_seq_QMARK_(seq__56666_57243__$1)){
var c__4550__auto___57244 = cljs.core.chunk_first(seq__56666_57243__$1);
var G__57245 = cljs.core.chunk_rest(seq__56666_57243__$1);
var G__57246 = c__4550__auto___57244;
var G__57247 = cljs.core.count(c__4550__auto___57244);
var G__57248 = (0);
seq__56666_57233 = G__57245;
chunk__56667_57234 = G__57246;
count__56668_57235 = G__57247;
i__56669_57236 = G__57248;
continue;
} else {
var op_57249 = cljs.core.first(seq__56666_57243__$1);
(op_57249.cljs$core$IFn$_invoke$arity$0 ? op_57249.cljs$core$IFn$_invoke$arity$0() : op_57249.call(null));


var G__57250 = cljs.core.next(seq__56666_57243__$1);
var G__57251 = null;
var G__57252 = (0);
var G__57253 = (0);
seq__56666_57233 = G__57250;
chunk__56667_57234 = G__57251;
count__56668_57235 = G__57252;
i__56669_57236 = G__57253;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$tx_node(var_args){
var G__56683 = arguments.length;
switch (G__56683) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
});})(ast,ast_nodes))
),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
});})(ast,ast_nodes))
)),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$build_env(var_args){
var G__56690 = arguments.length;
switch (G__56690) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__56691,addl){
var map__56692 = p__56691;
var map__56692__$1 = (((((!((map__56692 == null))))?(((((map__56692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56692):map__56692);
var tx_node = map__56692__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56692__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__56695 = options;
var map__56695__$1 = (((((!((map__56695 == null))))?(((((map__56695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56695):map__56695);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56695__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__56697 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__56697__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56697,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__56697);
var G__56697__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56697__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__56697__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56697__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__56697__$2;
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__56698){
var map__56699 = p__56698;
var map__56699__$1 = (((((!((map__56699 == null))))?(((((map__56699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56699):map__56699);
var tx_node = map__56699__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56699__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$lang$maxFixedArity = 3;

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e56705){var e = e56705;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__56707 = env__$1;
var G__56707__$1 = (((G__56707 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__56707));
if((G__56707__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__56707__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
});})(e))
,null)),null,-632471826,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = ((function (do_dispatch){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_dispatch_STAR_(p__56709){
var map__56710 = p__56709;
var map__56710__$1 = (((((!((map__56710 == null))))?(((((map__56710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56710):map__56710);
var ele = map__56710__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56710__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__56713 = original_ast_node;
var map__56713__$1 = (((((!((map__56713 == null))))?(((((map__56713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56713):map__56713);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56713__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__56717 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56717,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__56717;
}
});})(do_dispatch))
;
var dispatch_all = ((function (do_dispatch,dispatch){
return (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});})(do_dispatch,dispatch))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$application_rendered_BANG_(p__56724,options){
var map__56726 = p__56724;
var map__56726__$1 = (((((!((map__56726 == null))))?(((((map__56726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56726):map__56726);
var app__$1 = map__56726__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56726__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some(((function (map__56726,map__56726__$1,app__$1,runtime_atom){
return (function (p1__56722_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__56722_SHARP_)));
});})(map__56726,map__56726__$1,app__$1,runtime_atom))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),((function (map__56726,map__56726__$1,app__$1,runtime_atom){
return (function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__56726,map__56726__$1,app__$1,runtime_atom){
return (function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
});})(map__56726,map__56726__$1,app__$1,runtime_atom))
,queue);
});})(map__56726,map__56726__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.call(null,app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$activate_submissions_BANG_(p__56731){
var map__56732 = p__56731;
var map__56732__$1 = (((((!((map__56732 == null))))?(((((map__56732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56732):map__56732);
var app__$1 = map__56732__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56732__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__56734 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__56734__$1 = (((((!((map__56734 == null))))?(((((map__56734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56734):map__56734);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56734__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56734__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__56734,map__56734__$1,blocked,ready,map__56732,map__56732__$1,app__$1,runtime_atom){
return (function (p1__56729_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(p1__56729_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__56729_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
});})(map__56734,map__56734__$1,blocked,ready,map__56732,map__56732__$1,app__$1,runtime_atom))
,ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (map__56734,map__56734__$1,blocked,ready,dispatched_nodes,map__56732,map__56732__$1,app__$1,runtime_atom){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),((function (map__56734,map__56734__$1,blocked,ready,dispatched_nodes,map__56732,map__56732__$1,app__$1,runtime_atom){
return (function (p1__56730_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__56730_SHARP_,dispatched_nodes);
});})(map__56734,map__56734__$1,blocked,ready,dispatched_nodes,map__56732,map__56732__$1,app__$1,runtime_atom))
),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
});})(map__56734,map__56734__$1,blocked,ready,dispatched_nodes,map__56732,map__56732__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_activation_BANG_(var_args){
var G__56737 = arguments.length;
switch (G__56737) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_queue_processing_BANG_(var_args){
var G__56739 = arguments.length;
switch (G__56739) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_sends_BANG_(var_args){
var G__56742 = arguments.length;
switch (G__56742) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$advance_actions_BANG_(app__$1,p__56743){
var map__56744 = p__56743;
var map__56744__$1 = (((((!((map__56744 == null))))?(((((map__56744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56744):map__56744);
var node = map__56744__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,map__56744,map__56744__$1,node,id,elements){
return (function (p__56746,element){
var map__56747 = p__56746;
var map__56747__$1 = (((((!((map__56747 == null))))?(((((map__56747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56747):map__56747);
var acc = map__56747__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56747__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__56749 = element;
var map__56749__$1 = (((((!((map__56749 == null))))?(((((map__56749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56749):map__56749);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__56750 = dispatch;
var map__56750__$1 = (((((!((map__56750 == null))))?(((((map__56750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56750):map__56750);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56750__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56753 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56753) : complete_QMARK_.call(null,G__56753));
}
})());
} else {
return and__4120__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4120__auto__ = (function (){var or__4131__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56759 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56759) : complete_QMARK_.call(null,G__56759));
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4120__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e56761){var e_57348 = e56761;
var mutation_symbol_57349 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (mutation_symbol_57349,e_57348,map__56749,map__56749__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__56750,map__56750__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_id_before,state,state_before,updated_element,done_QMARK___$1,new_acc,env,map__56747,map__56747__$1,acc,done_QMARK_,new_elements,remotes,map__56744,map__56744__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57348,"The `action` section of mutation",mutation_symbol_57349,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
});})(mutation_symbol_57349,e_57348,map__56749,map__56749__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__56750,map__56750__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_id_before,state,state_before,updated_element,done_QMARK___$1,new_acc,env,map__56747,map__56747__$1,acc,done_QMARK_,new_elements,remotes,map__56744,map__56744__$1,node,id,elements))
,null)),null,-907198254,null);
}
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_57350 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_57350], null));
}catch (e56763){var e_57352 = e56763;
}} else {
}
} else {
}

return new_acc;
}
});})(remotes,map__56744,map__56744__$1,node,id,elements))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$run_actions_BANG_(app__$1,p__56777){
var map__56778 = p__56777;
var map__56778__$1 = (((((!((map__56778 == null))))?(((((map__56778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56778):map__56778);
var node = map__56778__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56778__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56778__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56778,map__56778__$1,node,id,elements){
return (function (new_elements,element){
var map__56782 = element;
var map__56782__$1 = (((((!((map__56782 == null))))?(((((map__56782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56782):map__56782);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__56783 = dispatch;
var map__56783__$1 = (((((!((map__56783 == null))))?(((((map__56783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56783):map__56783);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56783__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var G__56798 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56798) : complete_QMARK_.call(null,G__56798));
})());
} else {
return and__4120__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e56799){var e_57375 = e56799;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_57375,map__56782,map__56782__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__56783,map__56783__$1,action,exec_QMARK_,state_id_before,state,state_before,updated_node,new_acc,env,map__56778,map__56778__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57375,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
});})(e_57375,map__56782,map__56782__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__56783,map__56783__$1,action,exec_QMARK_,state_id_before,state,state_before,updated_node,new_acc,env,map__56778,map__56778__$1,node,id,elements))
,null)),null,511460455,null);
}
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var tx_57376 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_57376], null));
}catch (e56805){var e_57377 = e56805;
}} else {
}
} else {
}

return new_acc;
});})(map__56778,map__56778__$1,node,id,elements))
,cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$fully_complete_QMARK_(app__$1,p__56807){
var map__56809 = p__56807;
var map__56809__$1 = (((((!((map__56809 == null))))?(((((map__56809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56809):map__56809);
var tx_node = map__56809__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = ((function (map__56809,map__56809__$1,tx_node,elements){
return (function (p__56813){
var map__56814 = p__56813;
var map__56814__$1 = (((((!((map__56814 == null))))?(((((map__56814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56814):map__56814);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});})(map__56809,map__56809__$1,tx_node,elements))
;
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::txn/results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$record_result_BANG_(var_args){
var G__56830 = arguments.length;
switch (G__56830) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__56840,txn_id,ele_idx,remote,result,result_key){
var map__56841 = p__56840;
var map__56841__$1 = (((((!((map__56841 == null))))?(((((map__56841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56841):map__56841);
var app__$1 = map__56841__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56841__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_queue,map__56841,map__56841__$1,app__$1,runtime_atom){
return (function (idx,p__56843){
var map__56845 = p__56843;
var map__56845__$1 = (((((!((map__56845 == null))))?(((((map__56845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56845):map__56845);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
});})(active_queue,map__56841,map__56841__$1,app__$1,runtime_atom))
,(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (active_queue,txn_idx,not_found_QMARK_,map__56841,map__56841__$1,app__$1,runtime_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
});})(active_queue,txn_idx,not_found_QMARK_,map__56841,map__56841__$1,app__$1,runtime_atom))
,null)),null,984045456,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6;

/**
 * Add the ::txn/desired-ast-nodes and ::txn/transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

var map__56847 = tx_element;
var map__56847__$1 = (((((!((map__56847 == null))))?(((((map__56847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56847):map__56847);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,537,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__56847,map__56847__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
});})(map__56847,map__56847__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire))
,null)),null,1150677995,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__4120__auto__ = desired_ast;
if(cljs.core.truth_(and__4120__auto__)){
return query_transform;
} else {
return and__4120__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__56850 = tx_element;
var G__56850__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__56850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__56850);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__56850__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__56850__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG_(p__56851,p__56852,ele_idx,remote){
var map__56853 = p__56851;
var map__56853__$1 = (((((!((map__56853 == null))))?(((((map__56853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56853):map__56853);
var app__$1 = map__56853__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56853__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56854 = p__56852;
var map__56854__$1 = (((((!((map__56854 == null))))?(((((map__56854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56854):map__56854);
var tx_node = map__56854__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = ((function (map__56853,map__56853__$1,app__$1,runtime_atom,map__56854,map__56854__$1,tx_node,id,options,parallel_QMARK_){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(map__56853,map__56853__$1,app__$1,runtime_atom,map__56854,map__56854__$1,tx_node,id,options,parallel_QMARK_))
;
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var handler = ((function (update_handler,ast,remove_BANG_,map__56853,map__56853__$1,app__$1,runtime_atom,map__56854,map__56854__$1,tx_node,id,options,parallel_QMARK_){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_result_handler_STAR_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4120__auto__;
}
})())){
try{var map__56859_57434 = result;
var map__56859_57435__$1 = (((((!((map__56859_57434 == null))))?(((((map__56859_57434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56859_57434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56859_57434):map__56859_57434);
var status_code_57436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859_57435__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_57437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859_57435__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_57436)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_57437);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_57436));
}
}catch (e56858){var e_57452 = e56858;
}} else {
}
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote,id,ele_idx) : remove_BANG_.call(null,app__$1,remote,id,ele_idx));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(update_handler,ast,remove_BANG_,map__56853,map__56853__$1,app__$1,runtime_atom,map__56854,map__56854__$1,tx_node,id,options,parallel_QMARK_))
;
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_element_sends_BANG_(app__$1,tx_node,p__56861){
var map__56862 = p__56861;
var map__56862__$1 = (((((!((map__56862 == null))))?(((((map__56862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56862):map__56862);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,to_dispatch,map__56862,map__56862__$1,idx,dispatch,started_QMARK_){
return (function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),((function (remotes,to_dispatch,map__56862,map__56862__$1,idx,dispatch,started_QMARK_){
return (function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
});})(remotes,to_dispatch,map__56862,map__56862__$1,idx,dispatch,started_QMARK_))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
});})(remotes,to_dispatch,map__56862,map__56862__$1,idx,dispatch,started_QMARK_))
,tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK_(p__56864){
var map__56865 = p__56864;
var map__56865__$1 = (((((!((map__56865 == null))))?(((((map__56865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56865):map__56865);
var tx_node = map__56865__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56865__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_(((function (map__56865,map__56865__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__56867){
var map__56868 = p__56867;
var map__56868__$1 = (((((!((map__56868 == null))))?(((((map__56868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56868):map__56868);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
});})(map__56865,map__56865__$1,tx_node,elements))
,elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$element_with_work(remote_names,p__56870){
var map__56871 = p__56870;
var map__56871__$1 = (((((!((map__56871 == null))))?(((((map__56871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56871):map__56871);
var element = map__56871__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_next_send_BANG_(app__$1,p__56873){
var map__56874 = p__56873;
var map__56874__$1 = (((((!((map__56874 == null))))?(((((map__56874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56874):map__56874);
var tx_node = map__56874__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_sends_BANG_(app__$1,p__56876){
var map__56877 = p__56876;
var map__56877__$1 = (((((!((map__56877 == null))))?(((((map__56877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56877):map__56877);
var tx_node = map__56877__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (optimistic_QMARK_,map__56877,map__56877__$1,tx_node,options,elements){
return (function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,node,element);
});})(optimistic_QMARK_,map__56877,map__56877__$1,tx_node,options,elements))
,tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_result_BANG_(app__$1,tx_node,p__56879,remote){
var map__56880 = p__56879;
var map__56880__$1 = (((((!((map__56880 == null))))?(((((map__56880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56880):map__56880);
var tx_element = map__56880__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_57516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_57517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_57517)){
var env_57518 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_57516], null));
try{(handler_57517.cljs$core$IFn$_invoke$arity$1 ? handler_57517.cljs$core$IFn$_invoke$arity$1(env_57518) : handler_57517.call(null,env_57518));
}catch (e56882){var e_57522 = e56882;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,675,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_57522,env_57518,result_57516,handler_57517,map__56880,map__56880__$1,tx_element,results,dispatch,desired_ast_nodes,transmitted_ast_nodes,original_ast_node){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57522,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
});})(e_57522,env_57518,result_57516,handler_57517,map__56880,map__56880__$1,tx_element,results,dispatch,desired_ast_nodes,transmitted_ast_nodes,original_ast_node))
,null)),null,1790111188,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_element_results_BANG_(app__$1,tx_node,p__56883){
var map__56884 = p__56883;
var map__56884__$1 = (((((!((map__56884 == null))))?(((((map__56884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56884):map__56884);
var tx_element = map__56884__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56884,map__56884__$1,tx_element,results,complete_QMARK_){
return (function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
});})(map__56884,map__56884__$1,tx_element,results,complete_QMARK_))
,tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_results_BANG_(app__$1,p__56886){
var map__56887 = p__56886;
var map__56887__$1 = (((((!((map__56887 == null))))?(((((map__56887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56887):map__56887);
var tx_node = map__56887__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56887__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__56887,map__56887__$1,tx_node,elements){
return (function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
});})(map__56887,map__56887__$1,tx_node,elements))
,elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG_(app__$1,p__56889){
var map__56890 = p__56889;
var map__56890__$1 = (((((!((map__56890 == null))))?(((((map__56890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56890):map__56890);
var tx_node = map__56890__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var get_env = ((function (map__56890,map__56890__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});})(map__56890,map__56890__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_env,map__56890,map__56890__$1,tx_node,elements){
return (function (node,p__56892){
var map__56893 = p__56892;
var map__56893__$1 = (((((!((map__56893 == null))))?(((((map__56893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56893):map__56893);
var element = map__56893__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56893__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__56895_57536 = cljs.core.seq(progress);
var chunk__56896_57537 = null;
var count__56897_57538 = (0);
var i__56898_57539 = (0);
while(true){
if((i__56898_57539 < count__56897_57538)){
var vec__56907_57540 = chunk__56896_57537.cljs$core$IIndexed$_nth$arity$2(null,i__56898_57539);
var remote_57541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56907_57540,(0),null);
var value_57542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56907_57540,(1),null);
var env_57543 = get_env(remote_57541,value_57542);
var action_57544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_57544)){
try{(action_57544.cljs$core$IFn$_invoke$arity$1 ? action_57544.cljs$core$IFn$_invoke$arity$1(env_57543) : action_57544.call(null,env_57543));
}catch (e56910){var e_57545 = e56910;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56895_57536,chunk__56896_57537,count__56897_57538,i__56898_57539,e_57545,env_57543,action_57544,vec__56907_57540,remote_57541,value_57542,map__56893,map__56893__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__56890,map__56890__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57545,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__56895_57536,chunk__56896_57537,count__56897_57538,i__56898_57539,e_57545,env_57543,action_57544,vec__56907_57540,remote_57541,value_57542,map__56893,map__56893__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__56890,map__56890__$1,tx_node,elements))
,null)),null,267940355,null);
}} else {
}


var G__57547 = seq__56895_57536;
var G__57548 = chunk__56896_57537;
var G__57549 = count__56897_57538;
var G__57550 = (i__56898_57539 + (1));
seq__56895_57536 = G__57547;
chunk__56896_57537 = G__57548;
count__56897_57538 = G__57549;
i__56898_57539 = G__57550;
continue;
} else {
var temp__5804__auto___57551 = cljs.core.seq(seq__56895_57536);
if(temp__5804__auto___57551){
var seq__56895_57552__$1 = temp__5804__auto___57551;
if(cljs.core.chunked_seq_QMARK_(seq__56895_57552__$1)){
var c__4550__auto___57553 = cljs.core.chunk_first(seq__56895_57552__$1);
var G__57554 = cljs.core.chunk_rest(seq__56895_57552__$1);
var G__57555 = c__4550__auto___57553;
var G__57556 = cljs.core.count(c__4550__auto___57553);
var G__57557 = (0);
seq__56895_57536 = G__57554;
chunk__56896_57537 = G__57555;
count__56897_57538 = G__57556;
i__56898_57539 = G__57557;
continue;
} else {
var vec__56911_57558 = cljs.core.first(seq__56895_57552__$1);
var remote_57559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56911_57558,(0),null);
var value_57560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56911_57558,(1),null);
var env_57562 = get_env(remote_57559,value_57560);
var action_57563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_57563)){
try{(action_57563.cljs$core$IFn$_invoke$arity$1 ? action_57563.cljs$core$IFn$_invoke$arity$1(env_57562) : action_57563.call(null,env_57562));
}catch (e56914){var e_57566 = e56914;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56895_57536,chunk__56896_57537,count__56897_57538,i__56898_57539,e_57566,env_57562,action_57563,vec__56911_57558,remote_57559,value_57560,seq__56895_57552__$1,temp__5804__auto___57551,map__56893,map__56893__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__56890,map__56890__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57566,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__56895_57536,chunk__56896_57537,count__56897_57538,i__56898_57539,e_57566,env_57562,action_57563,vec__56911_57558,remote_57559,value_57560,seq__56895_57552__$1,temp__5804__auto___57551,map__56893,map__56893__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__56890,map__56890__$1,tx_node,elements))
,null)),null,-1293632969,null);
}} else {
}


var G__57569 = cljs.core.next(seq__56895_57552__$1);
var G__57570 = null;
var G__57571 = (0);
var G__57572 = (0);
seq__56895_57536 = G__57569;
chunk__56896_57537 = G__57570;
count__56897_57538 = G__57571;
i__56898_57539 = G__57572;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
});})(get_env,map__56890,map__56890__$1,tx_node,elements))
,tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_tx_node_BANG_(app__$1,p__56915){
var map__56916 = p__56915;
var map__56916__$1 = (((((!((map__56916 == null))))?(((((map__56916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56916):map__56916);
var tx_node = map__56916__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_(app__$1,(function (){var G__56918 = tx_node;
var G__56918__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,G__56918):G__56918);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_(app__$1,G__56918__$1);
} else {
return G__56918__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56919){
return cljs.core.coll_QMARK_(G__56919);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env){
return (function (acc,element){
var map__56920 = element;
var map__56920__$1 = (((((!((map__56920 == null))))?(((((map__56920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56920):map__56920);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56920__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
});})(env))
,outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remotes_active_on_node(p__56922,remotes){
var map__56923 = p__56922;
var map__56923__$1 = (((((!((map__56923 == null))))?(((((map__56923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56923):map__56923);
var tx_node = map__56923__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = ((function (map__56923,map__56923__$1,tx_node,elements){
return (function (p__56925){
var map__56926 = p__56925;
var map__56926__$1 = (((((!((map__56926 == null))))?(((((map__56926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56926):map__56926);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});})(map__56923,map__56923__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_on_element,map__56923,map__56923__$1,tx_node,elements){
return (function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
});})(active_on_element,map__56923,map__56923__$1,tx_node,elements))
,cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG_(p__56928){
var map__56929 = p__56928;
var map__56929__$1 = (((((!((map__56929 == null))))?(((((map__56929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56929):map__56929);
var app__$1 = map__56929__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56929__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56929__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56929,map__56929__$1,app__$1,state_atom,runtime_atom){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
});})(map__56929,map__56929__$1,app__$1,state_atom,runtime_atom))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = ((function (new_queue,map__56929,map__56929__$1,app__$1,state_atom,runtime_atom){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(new_queue,map__56929,map__56929__$1,app__$1,state_atom,runtime_atom))
;
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$transact_sync_BANG_(app__$1,tx,p__56932){
var map__56933 = p__56932;
var map__56933__$1 = (((((!((map__56933 == null))))?(((((map__56933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56933):map__56933);
var options = map__56933__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56933__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mutation_nodes,map__56933,map__56933__$1,options,component,ref){
return (function (ast_node){
var G__56936 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null);
return (com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(G__56936) : com.fulcrologic.fulcro.mutations.mutate.call(null,G__56936));
});})(mutation_nodes,map__56933,map__56933__$1,options,component,ref))
,mutation_nodes));
var map__56935 = cljs.core.group_by(((function (mutation_nodes,ast_node__GT_operation,map__56933,map__56933__$1,options,component,ref){
return (function (p1__56931_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__56931_SHARP_) : ast_node__GT_operation.call(null,p1__56931_SHARP_)))));
});})(mutation_nodes,ast_node__GT_operation,map__56933,map__56933__$1,options,component,ref))
,mutation_nodes);
var map__56935__$1 = (((((!((map__56935 == null))))?(((((map__56935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56935):map__56935);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_57638 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_57639 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_57638));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_57639,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_57638], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = component;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__4120__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var temp__5804__auto___57643 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___57643)){
var refresh_component_BANG__57644 = temp__5804__auto___57643;
(refresh_component_BANG__57644.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__57644.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__57644.call(null,component));
} else {
}
} else {
if(cljs.core.truth_(ref)){
var r_BANG__57645 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__57645)){
(r_BANG__57645.cljs$core$IFn$_invoke$arity$1 ? r_BANG__57645.cljs$core$IFn$_invoke$arity$1(app__$1) : r_BANG__57645.call(null,app__$1));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,847,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (mutation_nodes,ast_node__GT_operation,map__56935,map__56935__$1,optimistic,mixed,optimistic_tx_node,mixed_tx_node,resulting_node_id,map__56933,map__56933__$1,options,component,ref){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
});})(mutation_nodes,ast_node__GT_operation,map__56935,map__56935__$1,optimistic,mixed,optimistic_tx_node,mixed_tx_node,resulting_node_id,map__56933,map__56933__$1,options,component,ref))
,null)),null,-594070978,null);
} else {
}

}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$default_tx_BANG_(var_args){
var G__56940 = arguments.length;
switch (G__56940) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__56941,tx,p__56942){
var map__56943 = p__56941;
var map__56943__$1 = (((((!((map__56943 == null))))?(((((map__56943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56943):map__56943);
var app__$1 = map__56943__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56944 = p__56942;
var map__56944__$1 = (((((!((map__56944 == null))))?(((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944):map__56944);
var options = map__56944__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__56947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var options__$1 = map__56947__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_){
return (function (p1__56938_SHARP_){
return (((p1__56938_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__56938_SHARP_)));
});})(map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_))
,tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = ((function (map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_))
;
var refresh__$1 = (function (){var G__56949 = cljs.core.set(refresh);
var G__56949__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56949,follow_on_reads):G__56949);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56949__$1,ref);
} else {
return G__56949__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_){
return (function (s){
var G__56950 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),((function (map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_){
return (function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
});})(map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_))
,node);
var G__56950__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56950,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__56950);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56950__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__56950__$1;
}
});})(map__56947,map__56947__$1,options__$1,refresh,only_refresh,ref,follow_on_reads,node,accumulate,refresh__$1,map__56943,map__56943__$1,app__$1,runtime_atom,map__56944,map__56944__$1,options,synchronous_QMARK_))
);

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_elements_BANG_(p__56951,send_queue,abort_id){
var map__56952 = p__56951;
var map__56952__$1 = (((((!((map__56952 == null))))?(((((map__56952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56952):map__56952);
var remote = map__56952__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56952,map__56952__$1,remote,abort_BANG_){
return (function (result,p__56954){
var map__56955 = p__56954;
var map__56955__$1 = (((((!((map__56955 == null))))?(((((map__56955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56955):map__56955);
var send_node = map__56955__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__56957_57680 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__56957_57680) : result_handler.call(null,G__56957_57680));

return result;

}
}
});})(map__56952,map__56952__$1,remote,abort_BANG_))
,cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__56952,map__56952__$1,remote,abort_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
});})(map__56952,map__56952__$1,remote,abort_BANG_))
,null)),null,2097930027,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_BANG_(app__$1,abort_id){
var map__56958 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__56958__$1 = (((((!((map__56958 == null))))?(((((map__56958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56958):map__56958);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__56959 = runtime_state;
var map__56959__$1 = (((((!((map__56959 == null))))?(((((map__56959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56959):map__56959);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56958,map__56958__$1,runtime_atom,runtime_state,map__56959,map__56959__$1,remotes,send_queues,remote_names){
return (function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
});})(map__56958,map__56958__$1,runtime_atom,runtime_state,map__56959,map__56959__$1,remotes,send_queues,remote_names))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__56962 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__56962__$1 = (((((!((map__56962 == null))))?(((((map__56962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56962):map__56962);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__56963__$1 = (((((!((map__56963 == null))))?(((((map__56963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56963):map__56963);
var the_remote = map__56963__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__56966 = cljs.core.seq(old_send_queue);
var chunk__56971 = null;
var count__56972 = (0);
var i__56973 = (0);
while(true){
if((i__56973 < count__56972)){
var map__56998 = chunk__56971.cljs$core$IIndexed$_nth$arity$2(null,i__56973);
var map__56998__$1 = (((((!((map__56998 == null))))?(((((map__56998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56998):map__56998);
var send_node = map__56998__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56998__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__56974_57696 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__56975_57697 = null;
var count__56976_57698 = (0);
var i__56977_57699 = (0);
while(true){
if((i__56977_57699 < count__56976_57698)){
var aid_57701 = chunk__56975_57697.cljs$core$IIndexed$_nth$arity$2(null,i__56977_57699);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_57701) : abort_network_BANG_.call(null,the_remote,aid_57701));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,aid_57701,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,aid_57701,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1517629163,null);
}
} else {
}

var G__57005_57705 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__57005_57705) : result_handler.call(null,G__57005_57705));
}catch (e57004){var e_57706 = e57004;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,e_57706,aid_57701,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57706,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,e_57706,aid_57701,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1601085602,null);
}

var G__57707 = seq__56974_57696;
var G__57708 = chunk__56975_57697;
var G__57709 = count__56976_57698;
var G__57710 = (i__56977_57699 + (1));
seq__56974_57696 = G__57707;
chunk__56975_57697 = G__57708;
count__56976_57698 = G__57709;
i__56977_57699 = G__57710;
continue;
} else {
var temp__5804__auto___57712 = cljs.core.seq(seq__56974_57696);
if(temp__5804__auto___57712){
var seq__56974_57715__$1 = temp__5804__auto___57712;
if(cljs.core.chunked_seq_QMARK_(seq__56974_57715__$1)){
var c__4550__auto___57716 = cljs.core.chunk_first(seq__56974_57715__$1);
var G__57718 = cljs.core.chunk_rest(seq__56974_57715__$1);
var G__57719 = c__4550__auto___57716;
var G__57720 = cljs.core.count(c__4550__auto___57716);
var G__57721 = (0);
seq__56974_57696 = G__57718;
chunk__56975_57697 = G__57719;
count__56976_57698 = G__57720;
i__56977_57699 = G__57721;
continue;
} else {
var aid_57722 = cljs.core.first(seq__56974_57715__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_57722) : abort_network_BANG_.call(null,the_remote,aid_57722));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,aid_57722,seq__56974_57715__$1,temp__5804__auto___57712,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,aid_57722,seq__56974_57715__$1,temp__5804__auto___57712,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,591426568,null);
}
} else {
}

var G__57007_57729 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__57007_57729) : result_handler.call(null,G__57007_57729));
}catch (e57006){var e_57731 = e57006;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,e_57731,aid_57722,seq__56974_57715__$1,temp__5804__auto___57712,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57731,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__56974_57696,chunk__56975_57697,count__56976_57698,i__56977_57699,seq__56966,chunk__56971,count__56972,i__56973,e_57731,aid_57722,seq__56974_57715__$1,temp__5804__auto___57712,map__56998,map__56998__$1,send_node,active_QMARK_,result_handler,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-11321472,null);
}

var G__57735 = cljs.core.next(seq__56974_57715__$1);
var G__57736 = null;
var G__57737 = (0);
var G__57738 = (0);
seq__56974_57696 = G__57735;
chunk__56975_57697 = G__57736;
count__56976_57698 = G__57737;
i__56977_57699 = G__57738;
continue;
}
} else {
}
}
break;
}

var G__57739 = seq__56966;
var G__57740 = chunk__56971;
var G__57741 = count__56972;
var G__57742 = (i__56973 + (1));
seq__56966 = G__57739;
chunk__56971 = G__57740;
count__56972 = G__57741;
i__56973 = G__57742;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56966);
if(temp__5804__auto__){
var seq__56966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56966__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56966__$1);
var G__57744 = cljs.core.chunk_rest(seq__56966__$1);
var G__57745 = c__4550__auto__;
var G__57746 = cljs.core.count(c__4550__auto__);
var G__57747 = (0);
seq__56966 = G__57744;
chunk__56971 = G__57745;
count__56972 = G__57746;
i__56973 = G__57747;
continue;
} else {
var map__57008 = cljs.core.first(seq__56966__$1);
var map__57008__$1 = (((((!((map__57008 == null))))?(((((map__57008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57008):map__57008);
var send_node = map__57008__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57008__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__56967_57755 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__56968_57756 = null;
var count__56969_57757 = (0);
var i__56970_57758 = (0);
while(true){
if((i__56970_57758 < count__56969_57757)){
var aid_57761 = chunk__56968_57756.cljs$core$IIndexed$_nth$arity$2(null,i__56970_57758);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_57761) : abort_network_BANG_.call(null,the_remote,aid_57761));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,aid_57761,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,aid_57761,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1407106104,null);
}
} else {
}

var G__57015_57764 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__57015_57764) : result_handler.call(null,G__57015_57764));
}catch (e57014){var e_57768 = e57014;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,e_57768,aid_57761,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57768,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,e_57768,aid_57761,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2005941815,null);
}

var G__57775 = seq__56967_57755;
var G__57776 = chunk__56968_57756;
var G__57777 = count__56969_57757;
var G__57778 = (i__56970_57758 + (1));
seq__56967_57755 = G__57775;
chunk__56968_57756 = G__57776;
count__56969_57757 = G__57777;
i__56970_57758 = G__57778;
continue;
} else {
var temp__5804__auto___57780__$1 = cljs.core.seq(seq__56967_57755);
if(temp__5804__auto___57780__$1){
var seq__56967_57781__$1 = temp__5804__auto___57780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56967_57781__$1)){
var c__4550__auto___57782 = cljs.core.chunk_first(seq__56967_57781__$1);
var G__57783 = cljs.core.chunk_rest(seq__56967_57781__$1);
var G__57784 = c__4550__auto___57782;
var G__57785 = cljs.core.count(c__4550__auto___57782);
var G__57786 = (0);
seq__56967_57755 = G__57783;
chunk__56968_57756 = G__57784;
count__56969_57757 = G__57785;
i__56970_57758 = G__57786;
continue;
} else {
var aid_57787 = cljs.core.first(seq__56967_57781__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_57787) : abort_network_BANG_.call(null,the_remote,aid_57787));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,aid_57787,seq__56967_57781__$1,temp__5804__auto___57780__$1,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,aid_57787,seq__56967_57781__$1,temp__5804__auto___57780__$1,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,561686018,null);
}
} else {
}

var G__57017_57788 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__57017_57788) : result_handler.call(null,G__57017_57788));
}catch (e57016){var e_57790 = e57016;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,e_57790,aid_57787,seq__56967_57781__$1,temp__5804__auto___57780__$1,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_57790,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__56967_57755,chunk__56968_57756,count__56969_57757,i__56970_57758,seq__56966,chunk__56971,count__56972,i__56973,e_57790,aid_57787,seq__56967_57781__$1,temp__5804__auto___57780__$1,map__57008,map__57008__$1,send_node,active_QMARK_,result_handler,seq__56966__$1,temp__5804__auto__,app__$1,map__56962,map__56962__$1,state_atom,runtime_atom,map__56963,map__56963__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,624780786,null);
}

var G__57791 = cljs.core.next(seq__56967_57781__$1);
var G__57792 = null;
var G__57793 = (0);
var G__57794 = (0);
seq__56967_57755 = G__57791;
chunk__56968_57756 = G__57792;
count__56969_57757 = G__57793;
i__56970_57758 = G__57794;
continue;
}
} else {
}
}
break;
}

var G__57795 = cljs.core.next(seq__56966__$1);
var G__57796 = null;
var G__57797 = (0);
var G__57798 = (0);
seq__56966 = G__57795;
chunk__56971 = G__57796;
count__56972 = G__57797;
i__56973 = G__57798;
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
 * Modify the given fulcro app so that it does reads in batches when possible. Requires server support (which is
 *   provided by Fulcro's handle-api-request), and a remote that can handle raw requests (see the latest http-remote).
 * 
 *   Defaults to enabling batching on all remotes, but if any of your client-side remote code or servers do not support
 *   batching, pass the `remotes` option, which is a set of keywords that names the remotes on which batching should
 *   be enabled.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$with_batched_reads(var_args){
var G__57019 = arguments.length;
switch (G__57019) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2(app__$1,null);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,remotes){
var remotes__$1 = (function (){var or__4131__auto__ = remotes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__57020 = app__$1;
var G__57020__$1 = (((G__57020 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__57020));
var G__57020__$2 = (((G__57020__$1 == null))?null:cljs.core.deref(G__57020__$1));
var G__57020__$3 = (((G__57020__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__57020__$2));
if((G__57020__$3 == null)){
return null;
} else {
return cljs.core.keys(G__57020__$3);
}
}
})();
var batching_enabled = ((cljs.core.seq(remotes__$1))?cljs.core.zipmap(remotes__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled);
});

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.js.map
