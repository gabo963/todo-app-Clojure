goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing');

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remove_send_BANG_(p__63430,remote,txn_id,ele_idx){
var map__63431 = p__63430;
var map__63431__$1 = cljs.core.__destructure_map(map__63431);
var app__$1 = map__63431__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63431__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63432 = cljs.core.deref(runtime_atom);
var map__63432__$1 = cljs.core.__destructure_map(map__63432);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__63436){
var map__63437 = p__63436;
var map__63437__$1 = cljs.core.__destructure_map(map__63437);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
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
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63445){
return cljs.core.vector_QMARK_(G__63445);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__63450){
var map__63451 = p__63450;
var map__63451__$1 = cljs.core.__destructure_map(map__63451);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63451__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__63448 = cljs.core.group_by(parallel_QMARK_,sends);
var map__63448__$1 = cljs.core.__destructure_map(map__63448);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63448__$1,false);
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

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__63459_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__63459_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__63461_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__63461_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__63464 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63464,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__63467 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__63469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__63470 = cljs.core.seq(vec__63469);
var first__63471 = cljs.core.first(seq__63470);
var seq__63470__$1 = cljs.core.next(seq__63470);
var map__63472 = first__63471;
var map__63472__$1 = cljs.core.__destructure_map(map__63472);
var n = map__63472__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63472__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__63470__$1;
var cluster = vec__63469;
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
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__63467__$1 = cljs.core.__destructure_map(map__63467);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63467__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$top_keys(p__63477){
var map__63478 = p__63477;
var map__63478__$1 = cljs.core.__destructure_map(map__63478);
var ast = map__63478__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63479){
return cljs.core.coll_QMARK_(G__63479);
})], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$create_combined_node(app__$1,remote_name,p__63491){
var vec__63492 = p__63491;
var leader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63492,(0),null);
var to_send = vec__63492;
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__63509){
var map__63510 = p__63509;
var map__63510__$1 = cljs.core.__destructure_map(map__63510);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63510__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(leader);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var seq__63514 = cljs.core.seq(to_send);
var chunk__63515 = null;
var count__63516 = (0);
var i__63517 = (0);
while(true){
if((i__63517 < count__63516)){
var map__63542 = chunk__63515.cljs$core$IIndexed$_nth$arity$2(null,i__63517);
var map__63542__$1 = cljs.core.__destructure_map(map__63542);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__63991 = seq__63514;
var G__63992 = chunk__63515;
var G__63993 = count__63516;
var G__63994 = (i__63517 + (1));
seq__63514 = G__63991;
chunk__63515 = G__63992;
count__63516 = G__63993;
i__63517 = G__63994;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63514);
if(temp__5804__auto__){
var seq__63514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63514__$1);
var G__63995 = cljs.core.chunk_rest(seq__63514__$1);
var G__63996 = c__5568__auto__;
var G__63997 = cljs.core.count(c__5568__auto__);
var G__63998 = (0);
seq__63514 = G__63995;
chunk__63515 = G__63996;
count__63516 = G__63997;
i__63517 = G__63998;
continue;
} else {
var map__63550 = cljs.core.first(seq__63514__$1);
var map__63550__$1 = cljs.core.__destructure_map(map__63550);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63550__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__63999 = cljs.core.next(seq__63514__$1);
var G__64000 = null;
var G__64001 = (0);
var G__64002 = (0);
seq__63514 = G__63999;
chunk__63515 = G__64000;
count__63516 = G__64001;
i__63517 = G__64002;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__63558){
var map__63559 = p__63558;
var map__63559__$1 = cljs.core.__destructure_map(map__63559);
var combined_result = map__63559__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63559__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : remove_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));

var seq__63561 = cljs.core.seq(to_send);
var chunk__63562 = null;
var count__63563 = (0);
var i__63564 = (0);
while(true){
if((i__63564 < count__63563)){
var map__63584 = chunk__63562.cljs$core$IIndexed$_nth$arity$2(null,i__63564);
var map__63584__$1 = cljs.core.__destructure_map(map__63584);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64003 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_64004 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64003);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__63588_64005 = result_64004;
var map__63588_64006__$1 = cljs.core.__destructure_map(map__63588_64005);
var status_code_64007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63588_64006__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63588_64006__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64007)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64008__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64007));
}
}catch (e63587){var e_64009 = e63587;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_64004) : result_handler.call(null,result_64004));


var G__64010 = seq__63561;
var G__64011 = chunk__63562;
var G__64012 = count__63563;
var G__64013 = (i__63564 + (1));
seq__63561 = G__64010;
chunk__63562 = G__64011;
count__63563 = G__64012;
i__63564 = G__64013;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63561);
if(temp__5804__auto__){
var seq__63561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63561__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63561__$1);
var G__64014 = cljs.core.chunk_rest(seq__63561__$1);
var G__64015 = c__5568__auto__;
var G__64016 = cljs.core.count(c__5568__auto__);
var G__64017 = (0);
seq__63561 = G__64014;
chunk__63562 = G__64015;
count__63563 = G__64016;
i__63564 = G__64017;
continue;
} else {
var map__63591 = cljs.core.first(seq__63561__$1);
var map__63591__$1 = cljs.core.__destructure_map(map__63591);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63591__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_64018 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_64019 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_64018);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__63593_64020 = result_64019;
var map__63593_64021__$1 = cljs.core.__destructure_map(map__63593_64020);
var status_code_64022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593_64021__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63593_64021__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64022)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_64023__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64022));
}
}catch (e63592){var e_64024 = e63592;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_64019) : result_handler.call(null,result_64019));


var G__64025 = cljs.core.next(seq__63561__$1);
var G__64026 = null;
var G__64027 = (0);
var G__64028 = (0);
seq__63561 = G__64025;
chunk__63562 = G__64026;
count__63563 = G__64027;
i__63564 = G__64028;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
return combined_node;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$node_abort_id(n){
var or__5045__auto__ = (function (){var G__63600 = n;
var G__63600__$1 = (((G__63600 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__63600));
if((G__63600__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(G__63600__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__63601 = n;
var G__63601__$1 = (((G__63601 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__63601));
if((G__63601__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(G__63601__$1);
}
}
});
/**
 * Returns true if the given transaction node represents one or more mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_node_QMARK_(p__63603){
var map__63604 = p__63603;
var map__63604__$1 = cljs.core.__destructure_map(map__63604);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63604__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return ((cljs.core.map_QMARK_(ast)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.boolean$(cljs.core.some((function (p1__63602_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__63602_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))));
});
/**
 * Returns true when ALL of the ::txn/send-node entries in `to-send` can be batched into an existing batch.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batchable_QMARK_(to_send,leader){
var abort_id = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(leader);
return cljs.core.boolean$(((cljs.core.seq(to_send)) && (((cljs.core.every_QMARK_((function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abort_id,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(n));
}),to_send)) && (cljs.core.not(cljs.core.some(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_,to_send)))))));
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batch_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__63614){
return cljs.core.map_QMARK_(G__63614);
}),(function (G__63614){
return cljs.core.contains_QMARK_(G__63614,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__63614){
return ((cljs.core.map_QMARK_(G__63614)) && (cljs.core.contains_QMARK_(G__63614,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var prime_leader = cljs.core.first(send_queue);
var map__63623 = cljs.core.group_by((function (n){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_leader], null),n);
}),send_queue);
var map__63623__$1 = cljs.core.__destructure_map(map__63623);
var prime_candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63623__$1,true);
var to_defer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63623__$1,false);
var map__63624 = (function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remainder","remainder",1046186872),to_defer], null);
var queue = prime_candidates;
while(true){
var leader = cljs.core.first(queue);
var vec__63629 = cljs.core.split_with(((function (result,queue,leader,prime_leader,map__63623,map__63623__$1,prime_candidates,to_defer){
return (function (p1__63611_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(leader),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__63611_SHARP_));
});})(result,queue,leader,prime_leader,map__63623,map__63623__$1,prime_candidates,to_defer))
,queue);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63629,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63629,(1),null);
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
var new_result = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.conj,combined_node);
if(cljs.core.seq(remainder)){
var G__64029 = new_result;
var G__64030 = remainder;
result = G__64029;
queue = G__64030;
continue;
} else {
return new_result;
}
break;
}
})();
var map__63624__$1 = cljs.core.__destructure_map(map__63624);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63624__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var remainder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63624__$1,new cljs.core.Keyword(null,"remainder","remainder",1046186872));
var batch_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var batch_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var batch_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),batch_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),batch_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","raw-body","com.fulcrologic.fulcro.algorithms.tx-processing/raw-body",-819595969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63634){
var map__63635 = p__63634;
var map__63635__$1 = cljs.core.__destructure_map(map__63635);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63635__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
}),batch)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(prime_leader);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299),batch,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var G__63637 = cljs.core.first(batch);
var map__63638 = G__63637;
var map__63638__$1 = cljs.core.__destructure_map(map__63638);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63638__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(combined_result);
var more_result = cljs.core.next(combined_result);
var G__63637__$1 = G__63637;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__63642 = G__63637__$1;
var map__63642__$1 = cljs.core.__destructure_map(map__63642);
var update_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63642__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
if(cljs.core.truth_(update_handler__$1)){
(update_handler__$1.cljs$core$IFn$_invoke$arity$1 ? update_handler__$1.cljs$core$IFn$_invoke$arity$1(result__$2) : update_handler__$1.call(null,result__$2));
} else {
}

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__64031 = cljs.core.first(more_batch__$2);
var G__64032 = cljs.core.next(more_batch__$2);
var G__64033 = cljs.core.first(more_result__$2);
var G__64034 = cljs.core.next(more_result__$2);
G__63637__$1 = G__64031;
more_batch__$1 = G__64032;
result__$1 = G__64033;
more_result__$1 = G__64034;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__63643){
var map__63644 = p__63643;
var map__63644__$1 = cljs.core.__destructure_map(map__63644);
var batch_result = map__63644__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63644__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,batch_node_id,batch_node_idx) : remove_BANG_.call(null,app__$1,remote_name,batch_node_id,batch_node_idx));

var G__63646 = cljs.core.first(batch);
var map__63647 = G__63646;
var map__63647__$1 = cljs.core.__destructure_map(map__63647);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63647__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(body);
var more_result = cljs.core.next(body);
var G__63646__$1 = G__63646;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__63650 = G__63646__$1;
var map__63650__$1 = cljs.core.__destructure_map(map__63650);
var result_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63650__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
var G__63651_64035 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch_result,new cljs.core.Keyword(null,"body","body",-2049205669),result__$2);
(result_handler__$1.cljs$core$IFn$_invoke$arity$1 ? result_handler__$1.cljs$core$IFn$_invoke$arity$1(G__63651_64035) : result_handler__$1.call(null,G__63651_64035));

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__64036 = cljs.core.first(more_batch__$2);
var G__64037 = cljs.core.next(more_batch__$2);
var G__64038 = cljs.core.first(more_result__$2);
var G__64039 = cljs.core.next(more_result__$2);
G__63646__$1 = G__64036;
more_batch__$1 = G__64037;
result__$1 = G__64038;
more_result__$1 = G__64039;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if((cljs.core.count(batch) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,212,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batched:",cljs.core.count(batch)], null);
}),null)),null,2147410403,null);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),batch_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_node], null),remainder)], null);
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__63659){
return cljs.core.map_QMARK_(G__63659);
}),(function (G__63659){
return cljs.core.contains_QMARK_(G__63659,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__63659){
return ((cljs.core.map_QMARK_(G__63659)) && (cljs.core.contains_QMARK_(G__63659,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

if(cljs.core.seq(send_queue)){
var map__63664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
var map__63664__$1 = cljs.core.__destructure_map(map__63664);
var supports_raw_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63664__$1,new cljs.core.Keyword(null,"supports-raw-body?","supports-raw-body?",132893061));
var vec__63665 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var _active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63665,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63665,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__63668 = cljs.core.split_with((function (p1__63656_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__63656_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63668,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63668,(1),null);
var leading_mutation_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_(cljs.core.first(to_send));
var batched_reads_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),remote_name], null),false);
var batch_QMARK_ = (function (){var and__5043__auto__ = batched_reads_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return supports_raw_body_QMARK_;
} else {
return and__5043__auto__;
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

var b2__24559__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__24559__auto__)){
var remote = b2__24559__auto__;
var b2__24559__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__24559__auto____$1)){
var transmit_BANG_ = b2__24559__auto____$1;
try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___64040 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___64040)){
var batch_64041 = temp__5802__auto___64040;
var seq__63694_64042 = cljs.core.seq(batch_64041);
var chunk__63695_64043 = null;
var count__63696_64044 = (0);
var i__63697_64045 = (0);
while(true){
if((i__63697_64045 < count__63696_64044)){
var element_node_64046 = chunk__63695_64043.cljs$core$IIndexed$_nth$arity$2(null,i__63697_64045);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_64047 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_64046));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_64046),tx_64047);
}catch (e63702){var e_64048 = e63702;
}} else {
}


var G__64049 = seq__63694_64042;
var G__64050 = chunk__63695_64043;
var G__64051 = count__63696_64044;
var G__64052 = (i__63697_64045 + (1));
seq__63694_64042 = G__64049;
chunk__63695_64043 = G__64050;
count__63696_64044 = G__64051;
i__63697_64045 = G__64052;
continue;
} else {
var temp__5804__auto___64053 = cljs.core.seq(seq__63694_64042);
if(temp__5804__auto___64053){
var seq__63694_64054__$1 = temp__5804__auto___64053;
if(cljs.core.chunked_seq_QMARK_(seq__63694_64054__$1)){
var c__5568__auto___64055 = cljs.core.chunk_first(seq__63694_64054__$1);
var G__64056 = cljs.core.chunk_rest(seq__63694_64054__$1);
var G__64057 = c__5568__auto___64055;
var G__64058 = cljs.core.count(c__5568__auto___64055);
var G__64059 = (0);
seq__63694_64042 = G__64056;
chunk__63695_64043 = G__64057;
count__63696_64044 = G__64058;
i__63697_64045 = G__64059;
continue;
} else {
var element_node_64060 = cljs.core.first(seq__63694_64054__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_64061 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_64060));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_64060),tx_64061);
}catch (e63704){var e_64062 = e63704;
}} else {
}


var G__64063 = cljs.core.next(seq__63694_64054__$1);
var G__64064 = null;
var G__64065 = (0);
var G__64066 = (0);
seq__63694_64042 = G__64063;
chunk__63695_64043 = G__64064;
count__63696_64044 = G__64065;
i__63697_64045 = G__64066;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_64067 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_64067);
}catch (e63706){var e_64068 = e63706;
}} else {
}
}
}catch (e63692){var e_64069 = e63692;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e63674){var e = e63674;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,256,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
}),null)),null,-213854246,null);

try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___64070 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___64070)){
var batch_64071 = temp__5802__auto___64070;
var seq__63678_64072 = cljs.core.seq(batch_64071);
var chunk__63679_64073 = null;
var count__63680_64074 = (0);
var i__63681_64075 = (0);
while(true){
if((i__63681_64075 < count__63680_64074)){
var element_node_64076 = chunk__63679_64073.cljs$core$IIndexed$_nth$arity$2(null,i__63681_64075);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_64076),"Transmit Exception");


var G__64077 = seq__63678_64072;
var G__64078 = chunk__63679_64073;
var G__64079 = count__63680_64074;
var G__64080 = (i__63681_64075 + (1));
seq__63678_64072 = G__64077;
chunk__63679_64073 = G__64078;
count__63680_64074 = G__64079;
i__63681_64075 = G__64080;
continue;
} else {
var temp__5804__auto___64081 = cljs.core.seq(seq__63678_64072);
if(temp__5804__auto___64081){
var seq__63678_64082__$1 = temp__5804__auto___64081;
if(cljs.core.chunked_seq_QMARK_(seq__63678_64082__$1)){
var c__5568__auto___64083 = cljs.core.chunk_first(seq__63678_64082__$1);
var G__64084 = cljs.core.chunk_rest(seq__63678_64082__$1);
var G__64085 = c__5568__auto___64083;
var G__64086 = cljs.core.count(c__5568__auto___64083);
var G__64087 = (0);
seq__63678_64072 = G__64084;
chunk__63679_64073 = G__64085;
count__63680_64074 = G__64086;
i__63681_64075 = G__64087;
continue;
} else {
var element_node_64088 = cljs.core.first(seq__63678_64082__$1);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_64088),"Transmit Exception");


var G__64089 = cljs.core.next(seq__63678_64082__$1);
var G__64090 = null;
var G__64091 = (0);
var G__64092 = (0);
seq__63678_64072 = G__64089;
chunk__63679_64073 = G__64090;
count__63680_64074 = G__64091;
i__63681_64075 = G__64092;
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
}catch (e63676){var e_64093__$1 = e63676;
}} else {
}

var G__63690 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__63689 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63689.cljs$core$IFn$_invoke$arity$1 ? fexpr__63689.cljs$core$IFn$_invoke$arity$1(G__63690) : fexpr__63689.call(null,G__63690));
}catch (e63675){var e__$1 = e63675;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,266,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,163890697,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,-931715328,null);

var G__63708 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63707 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63707.cljs$core$IFn$_invoke$arity$1 ? fexpr__63707.cljs$core$IFn$_invoke$arity$1(G__63708) : fexpr__63707.call(null,G__63708));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,-428673564,null);

var G__63710 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63709 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63709.cljs$core$IFn$_invoke$arity$1 ? fexpr__63709.cljs$core$IFn$_invoke$arity$1(G__63710) : fexpr__63709.call(null,G__63710));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_send_queues_BANG_(p__63711){
var map__63712 = p__63711;
var map__63712__$1 = cljs.core.__destructure_map(map__63712);
var app__$1 = map__63712__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63712__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__63713 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63713,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63713,(1),null);
var front = cljs.core.first(serial);
var seq__63717_64094 = cljs.core.seq(p);
var chunk__63718_64095 = null;
var count__63719_64096 = (0);
var i__63720_64097 = (0);
while(true){
if((i__63720_64097 < count__63719_64096)){
var item_64098 = chunk__63718_64095.cljs$core$IIndexed$_nth$arity$2(null,i__63720_64097);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63717_64094,chunk__63718_64095,count__63719_64096,i__63720_64097,item_64098,send_queue,vec__63713,p,serial,front,send_queues,remote_names,operations,map__63712,map__63712__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_64098,remote);
});})(seq__63717_64094,chunk__63718_64095,count__63719_64096,i__63720_64097,item_64098,send_queue,vec__63713,p,serial,front,send_queues,remote_names,operations,map__63712,map__63712__$1,app__$1,runtime_atom))
);


var G__64099 = seq__63717_64094;
var G__64100 = chunk__63718_64095;
var G__64101 = count__63719_64096;
var G__64102 = (i__63720_64097 + (1));
seq__63717_64094 = G__64099;
chunk__63718_64095 = G__64100;
count__63719_64096 = G__64101;
i__63720_64097 = G__64102;
continue;
} else {
var temp__5804__auto___64103 = cljs.core.seq(seq__63717_64094);
if(temp__5804__auto___64103){
var seq__63717_64104__$1 = temp__5804__auto___64103;
if(cljs.core.chunked_seq_QMARK_(seq__63717_64104__$1)){
var c__5568__auto___64105 = cljs.core.chunk_first(seq__63717_64104__$1);
var G__64106 = cljs.core.chunk_rest(seq__63717_64104__$1);
var G__64107 = c__5568__auto___64105;
var G__64108 = cljs.core.count(c__5568__auto___64105);
var G__64109 = (0);
seq__63717_64094 = G__64106;
chunk__63718_64095 = G__64107;
count__63719_64096 = G__64108;
i__63720_64097 = G__64109;
continue;
} else {
var item_64110 = cljs.core.first(seq__63717_64104__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__63717_64094,chunk__63718_64095,count__63719_64096,i__63720_64097,item_64110,seq__63717_64104__$1,temp__5804__auto___64103,send_queue,vec__63713,p,serial,front,send_queues,remote_names,operations,map__63712,map__63712__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_64110,remote);
});})(seq__63717_64094,chunk__63718_64095,count__63719_64096,i__63720_64097,item_64110,seq__63717_64104__$1,temp__5804__auto___64103,send_queue,vec__63713,p,serial,front,send_queues,remote_names,operations,map__63712,map__63712__$1,app__$1,runtime_atom))
);


var G__64111 = cljs.core.next(seq__63717_64104__$1);
var G__64112 = null;
var G__64113 = (0);
var G__64114 = (0);
seq__63717_64094 = G__64111;
chunk__63718_64095 = G__64112;
count__63719_64096 = G__64113;
i__63720_64097 = G__64114;
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
var map__63724 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote,serial);
var map__63724__$1 = cljs.core.__destructure_map(map__63724);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63724__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63724__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__63729_64115 = cljs.core.seq(cljs.core.deref(operations));
var chunk__63730_64116 = null;
var count__63731_64117 = (0);
var i__63732_64118 = (0);
while(true){
if((i__63732_64118 < count__63731_64117)){
var op_64119 = chunk__63730_64116.cljs$core$IIndexed$_nth$arity$2(null,i__63732_64118);
(op_64119.cljs$core$IFn$_invoke$arity$0 ? op_64119.cljs$core$IFn$_invoke$arity$0() : op_64119.call(null));


var G__64120 = seq__63729_64115;
var G__64121 = chunk__63730_64116;
var G__64122 = count__63731_64117;
var G__64123 = (i__63732_64118 + (1));
seq__63729_64115 = G__64120;
chunk__63730_64116 = G__64121;
count__63731_64117 = G__64122;
i__63732_64118 = G__64123;
continue;
} else {
var temp__5804__auto___64124 = cljs.core.seq(seq__63729_64115);
if(temp__5804__auto___64124){
var seq__63729_64125__$1 = temp__5804__auto___64124;
if(cljs.core.chunked_seq_QMARK_(seq__63729_64125__$1)){
var c__5568__auto___64126 = cljs.core.chunk_first(seq__63729_64125__$1);
var G__64127 = cljs.core.chunk_rest(seq__63729_64125__$1);
var G__64128 = c__5568__auto___64126;
var G__64129 = cljs.core.count(c__5568__auto___64126);
var G__64130 = (0);
seq__63729_64115 = G__64127;
chunk__63730_64116 = G__64128;
count__63731_64117 = G__64129;
i__63732_64118 = G__64130;
continue;
} else {
var op_64131 = cljs.core.first(seq__63729_64125__$1);
(op_64131.cljs$core$IFn$_invoke$arity$0 ? op_64131.cljs$core$IFn$_invoke$arity$0() : op_64131.call(null));


var G__64132 = cljs.core.next(seq__63729_64125__$1);
var G__64133 = null;
var G__64134 = (0);
var G__64135 = (0);
seq__63729_64115 = G__64132;
chunk__63730_64116 = G__64133;
count__63731_64117 = G__64134;
i__63732_64118 = G__64135;
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
var G__63744 = arguments.length;
switch (G__63744) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$build_env(var_args){
var G__63756 = arguments.length;
switch (G__63756) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__63757,addl){
var map__63758 = p__63757;
var map__63758__$1 = cljs.core.__destructure_map(map__63758);
var tx_node = map__63758__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__63759 = options;
var map__63759__$1 = cljs.core.__destructure_map(map__63759);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63759__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63759__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__63760 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__63760__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63760,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__63760);
var G__63760__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63760__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__63760__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63760__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__63760__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__63761){
var map__63762 = p__63761;
var map__63762__$1 = cljs.core.__destructure_map(map__63762);
var tx_node = map__63762__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63762__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e63764){var e = e63764;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__63767 = env__$1;
var G__63767__$1 = (((G__63767 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__63767));
if((G__63767__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__63767__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
}),null)),null,-1801382700,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_dispatch_STAR_(p__63768){
var map__63769 = p__63768;
var map__63769__$1 = cljs.core.__destructure_map(map__63769);
var ele = map__63769__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63769__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__63770 = original_ast_node;
var map__63770__$1 = cljs.core.__destructure_map(map__63770);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63770__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__63772 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63772,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__63772;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$application_rendered_BANG_(p__63775,options){
var map__63776 = p__63775;
var map__63776__$1 = cljs.core.__destructure_map(map__63776);
var app__$1 = map__63776__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63776__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__63774_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__63774_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$activate_submissions_BANG_(p__63781){
var map__63782 = p__63781;
var map__63782__$1 = cljs.core.__destructure_map(map__63782);
var app__$1 = map__63782__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63782__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__63783 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__63783__$1 = cljs.core.__destructure_map(map__63783);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63783__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63783__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63779_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(p1__63779_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__63779_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__63780_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__63780_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_activation_BANG_(var_args){
var G__63785 = arguments.length;
switch (G__63785) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_queue_processing_BANG_(var_args){
var G__63787 = arguments.length;
switch (G__63787) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_sends_BANG_(var_args){
var G__63789 = arguments.length;
switch (G__63789) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$advance_actions_BANG_(app__$1,p__63790){
var map__63791 = p__63790;
var map__63791__$1 = cljs.core.__destructure_map(map__63791);
var node = map__63791__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63791__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63791__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63792,element){
var map__63793 = p__63792;
var map__63793__$1 = cljs.core.__destructure_map(map__63793);
var acc = map__63793__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63793__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63793__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__63794 = element;
var map__63794__$1 = cljs.core.__destructure_map(map__63794);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63794__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63794__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63794__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63794__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__63795 = dispatch;
var map__63795__$1 = cljs.core.__destructure_map(map__63795);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63795__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var or__5045__auto__ = done_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__5043__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__5043__auto__;
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
}catch (e63796){var e_64141 = e63796;
var mutation_symbol_64142 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64141,"The `action` section of mutation",mutation_symbol_64142,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
}),null)),null,-285740482,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_64143 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_64143], null));
}catch (e63797){var e_64144 = e63797;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$run_actions_BANG_(app__$1,p__63801){
var map__63802 = p__63801;
var map__63802__$1 = cljs.core.__destructure_map(map__63802);
var node = map__63802__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63802__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63802__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__63803 = element;
var map__63803__$1 = cljs.core.__destructure_map(map__63803);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63803__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63803__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63803__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63803__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__63804 = dispatch;
var map__63804__$1 = cljs.core.__destructure_map(map__63804);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63804__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__5043__auto__;
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
}catch (e63805){var e_64145 = e63805;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64145,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
}),null)),null,1458754964,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_64146 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_64146], null));
}catch (e63806){var e_64147 = e63806;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$fully_complete_QMARK_(app__$1,p__63807){
var map__63808 = p__63807;
var map__63808__$1 = cljs.core.__destructure_map(map__63808);
var tx_node = map__63808__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63808__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__63809){
var map__63810 = p__63809;
var map__63810__$1 = cljs.core.__destructure_map(map__63810);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63810__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::txn/results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$record_result_BANG_(var_args){
var G__63818 = arguments.length;
switch (G__63818) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__63819,txn_id,ele_idx,remote,result,result_key){
var map__63820 = p__63819;
var map__63820__$1 = cljs.core.__destructure_map(map__63820);
var app__$1 = map__63820__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63820__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__63821){
var map__63822 = p__63821;
var map__63822__$1 = cljs.core.__destructure_map(map__63822);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63822__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
}),null)),null,-177911563,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::txn/desired-ast-nodes and ::txn/transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

var map__63823 = tx_element;
var map__63823__$1 = cljs.core.__destructure_map(map__63823);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,537,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
}),null)),null,1083648210,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__5043__auto__ = desired_ast;
if(cljs.core.truth_(and__5043__auto__)){
return query_transform;
} else {
return and__5043__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__63824 = tx_element;
var G__63824__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__63824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__63824);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__63824__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__63824__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG_(p__63825,p__63826,ele_idx,remote){
var map__63827 = p__63825;
var map__63827__$1 = cljs.core.__destructure_map(map__63827);
var app__$1 = map__63827__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63827__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63828 = p__63826;
var map__63828__$1 = cljs.core.__destructure_map(map__63828);
var tx_node = map__63828__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_result_handler_STAR_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__63831_64149 = result;
var map__63831_64150__$1 = cljs.core.__destructure_map(map__63831_64149);
var status_code_64151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63831_64150__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_64152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63831_64150__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_64151)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_64152);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_64151));
}
}catch (e63830){var e_64153 = e63830;
}} else {
}
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote,id,ele_idx) : remove_BANG_.call(null,app__$1,remote,id,ele_idx));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_element_sends_BANG_(app__$1,tx_node,p__63835){
var map__63837 = p__63835;
var map__63837__$1 = cljs.core.__destructure_map(map__63837);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63837__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK_(p__63841){
var map__63842 = p__63841;
var map__63842__$1 = cljs.core.__destructure_map(map__63842);
var tx_node = map__63842__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63842__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__63844){
var map__63845 = p__63844;
var map__63845__$1 = cljs.core.__destructure_map(map__63845);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63845__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63845__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$element_with_work(remote_names,p__63846){
var map__63847 = p__63846;
var map__63847__$1 = cljs.core.__destructure_map(map__63847);
var element = map__63847__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63847__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_next_send_BANG_(app__$1,p__63848){
var map__63849 = p__63848;
var map__63849__$1 = cljs.core.__destructure_map(map__63849);
var tx_node = map__63849__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63849__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_sends_BANG_(app__$1,p__63850){
var map__63851 = p__63850;
var map__63851__$1 = cljs.core.__destructure_map(map__63851);
var tx_node = map__63851__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63851__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63851__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_result_BANG_(app__$1,tx_node,p__63853,remote){
var map__63854 = p__63853;
var map__63854__$1 = cljs.core.__destructure_map(map__63854);
var tx_element = map__63854__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63854__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_64154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_64155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_64155)){
var env_64156 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_64154], null));
try{(handler_64155.cljs$core$IFn$_invoke$arity$1 ? handler_64155.cljs$core$IFn$_invoke$arity$1(env_64156) : handler_64155.call(null,env_64156));
}catch (e63855){var e_64157 = e63855;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,675,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64157,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
}),null)),null,943649283,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_element_results_BANG_(app__$1,tx_node,p__63856){
var map__63857 = p__63856;
var map__63857__$1 = cljs.core.__destructure_map(map__63857);
var tx_element = map__63857__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63857__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63857__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_results_BANG_(app__$1,p__63860){
var map__63861 = p__63860;
var map__63861__$1 = cljs.core.__destructure_map(map__63861);
var tx_node = map__63861__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63861__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG_(app__$1,p__63867){
var map__63868 = p__63867;
var map__63868__$1 = cljs.core.__destructure_map(map__63868);
var tx_node = map__63868__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__63871){
var map__63872 = p__63871;
var map__63872__$1 = cljs.core.__destructure_map(map__63872);
var element = map__63872__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__63873_64158 = cljs.core.seq(progress);
var chunk__63874_64159 = null;
var count__63875_64160 = (0);
var i__63876_64161 = (0);
while(true){
if((i__63876_64161 < count__63875_64160)){
var vec__63888_64162 = chunk__63874_64159.cljs$core$IIndexed$_nth$arity$2(null,i__63876_64161);
var remote_64163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63888_64162,(0),null);
var value_64164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63888_64162,(1),null);
var env_64165 = get_env(remote_64163,value_64164);
var action_64166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64166)){
try{(action_64166.cljs$core$IFn$_invoke$arity$1 ? action_64166.cljs$core$IFn$_invoke$arity$1(env_64165) : action_64166.call(null,env_64165));
}catch (e63891){var e_64167 = e63891;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63873_64158,chunk__63874_64159,count__63875_64160,i__63876_64161,e_64167,env_64165,action_64166,vec__63888_64162,remote_64163,value_64164,map__63872,map__63872__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__63868,map__63868__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64167,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__63873_64158,chunk__63874_64159,count__63875_64160,i__63876_64161,e_64167,env_64165,action_64166,vec__63888_64162,remote_64163,value_64164,map__63872,map__63872__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__63868,map__63868__$1,tx_node,elements))
,null)),null,-1647005581,null);
}} else {
}


var G__64168 = seq__63873_64158;
var G__64169 = chunk__63874_64159;
var G__64170 = count__63875_64160;
var G__64171 = (i__63876_64161 + (1));
seq__63873_64158 = G__64168;
chunk__63874_64159 = G__64169;
count__63875_64160 = G__64170;
i__63876_64161 = G__64171;
continue;
} else {
var temp__5804__auto___64172 = cljs.core.seq(seq__63873_64158);
if(temp__5804__auto___64172){
var seq__63873_64173__$1 = temp__5804__auto___64172;
if(cljs.core.chunked_seq_QMARK_(seq__63873_64173__$1)){
var c__5568__auto___64174 = cljs.core.chunk_first(seq__63873_64173__$1);
var G__64175 = cljs.core.chunk_rest(seq__63873_64173__$1);
var G__64176 = c__5568__auto___64174;
var G__64177 = cljs.core.count(c__5568__auto___64174);
var G__64178 = (0);
seq__63873_64158 = G__64175;
chunk__63874_64159 = G__64176;
count__63875_64160 = G__64177;
i__63876_64161 = G__64178;
continue;
} else {
var vec__63892_64179 = cljs.core.first(seq__63873_64173__$1);
var remote_64180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892_64179,(0),null);
var value_64181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63892_64179,(1),null);
var env_64182 = get_env(remote_64180,value_64181);
var action_64183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64183)){
try{(action_64183.cljs$core$IFn$_invoke$arity$1 ? action_64183.cljs$core$IFn$_invoke$arity$1(env_64182) : action_64183.call(null,env_64182));
}catch (e63895){var e_64184 = e63895;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63873_64158,chunk__63874_64159,count__63875_64160,i__63876_64161,e_64184,env_64182,action_64183,vec__63892_64179,remote_64180,value_64181,seq__63873_64173__$1,temp__5804__auto___64172,map__63872,map__63872__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__63868,map__63868__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64184,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__63873_64158,chunk__63874_64159,count__63875_64160,i__63876_64161,e_64184,env_64182,action_64183,vec__63892_64179,remote_64180,value_64181,seq__63873_64173__$1,temp__5804__auto___64172,map__63872,map__63872__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__63868,map__63868__$1,tx_node,elements))
,null)),null,-280964530,null);
}} else {
}


var G__64185 = cljs.core.next(seq__63873_64173__$1);
var G__64186 = null;
var G__64187 = (0);
var G__64188 = (0);
seq__63873_64158 = G__64185;
chunk__63874_64159 = G__64186;
count__63875_64160 = G__64187;
i__63876_64161 = G__64188;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_tx_node_BANG_(app__$1,p__63900){
var map__63901 = p__63900;
var map__63901__$1 = cljs.core.__destructure_map(map__63901);
var tx_node = map__63901__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63901__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_(app__$1,(function (){var G__63902 = tx_node;
var G__63902__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,G__63902):G__63902);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_(app__$1,G__63902__$1);
} else {
return G__63902__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__63905){
return cljs.core.coll_QMARK_(G__63905);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__63907 = element;
var map__63907__$1 = cljs.core.__destructure_map(map__63907);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63907__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remotes_active_on_node(p__63908,remotes){
var map__63909 = p__63908;
var map__63909__$1 = cljs.core.__destructure_map(map__63909);
var tx_node = map__63909__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63909__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__63910){
var map__63911 = p__63910;
var map__63911__$1 = cljs.core.__destructure_map(map__63911);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63911__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63911__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG_(p__63912){
var map__63913 = p__63912;
var map__63913__$1 = cljs.core.__destructure_map(map__63913);
var app__$1 = map__63913__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63913__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63913__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
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
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$transact_sync_BANG_(app__$1,tx,p__63918){
var map__63919 = p__63918;
var map__63919__$1 = cljs.core.__destructure_map(map__63919);
var options = map__63919__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63919__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63919__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__63920 = cljs.core.group_by((function (p1__63917_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__63917_SHARP_) : ast_node__GT_operation.call(null,p1__63917_SHARP_)))));
}),mutation_nodes);
var map__63920__$1 = cljs.core.__destructure_map(map__63920);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63920__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63920__$1,false);
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
var node_64189 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_64190 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_64189));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_64190,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_64189], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__5043__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto___64191 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___64191)){
var refresh_component_BANG__64192 = temp__5804__auto___64191;
(refresh_component_BANG__64192.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__64192.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__64192.call(null,component));
} else {
}
} else {
if(cljs.core.truth_(ref)){
var r_BANG__64193 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__64193)){
(r_BANG__64193.cljs$core$IFn$_invoke$arity$1 ? r_BANG__64193.cljs$core$IFn$_invoke$arity$1(app__$1) : r_BANG__64193.call(null,app__$1));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,847,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
}),null)),null,-67297337,null);
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
var G__63923 = arguments.length;
switch (G__63923) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__63924,tx,p__63925){
var map__63926 = p__63924;
var map__63926__$1 = cljs.core.__destructure_map(map__63926);
var app__$1 = map__63926__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63927 = p__63925;
var map__63927__$1 = cljs.core.__destructure_map(map__63927);
var options = map__63927__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63927__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__63928 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__63928__$1 = cljs.core.__destructure_map(map__63928);
var options__$1 = map__63928__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63928__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63928__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63928__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63921_SHARP_){
return (((p1__63921_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__63921_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__63929 = cljs.core.set(refresh);
var G__63929__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__63929,follow_on_reads):G__63929);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63929__$1,ref);
} else {
return G__63929__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__63930 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__63930__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63930,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__63930);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63930__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__63930__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_elements_BANG_(p__63931,send_queue,abort_id){
var map__63932 = p__63931;
var map__63932__$1 = cljs.core.__destructure_map(map__63932);
var remote = map__63932__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63932__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__63933){
var map__63934 = p__63933;
var map__63934__$1 = cljs.core.__destructure_map(map__63934);
var send_node = map__63934__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63934__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63934__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__63935_64195 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__63935_64195) : result_handler.call(null,G__63935_64195));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
}),null)),null,-589985036,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_BANG_(app__$1,abort_id){
var map__63936 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__63936__$1 = cljs.core.__destructure_map(map__63936);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__63937 = runtime_state;
var map__63937__$1 = cljs.core.__destructure_map(map__63937);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63937__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63937__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
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
var map__63938 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__63938__$1 = cljs.core.__destructure_map(map__63938);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63938__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__63939__$1 = cljs.core.__destructure_map(map__63939);
var the_remote = map__63939__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63939__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__63940 = cljs.core.seq(old_send_queue);
var chunk__63945 = null;
var count__63946 = (0);
var i__63947 = (0);
while(true){
if((i__63947 < count__63946)){
var map__63970 = chunk__63945.cljs$core$IIndexed$_nth$arity$2(null,i__63947);
var map__63970__$1 = cljs.core.__destructure_map(map__63970);
var send_node = map__63970__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63970__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63970__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__63948_64196 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__63949_64197 = null;
var count__63950_64198 = (0);
var i__63951_64199 = (0);
while(true){
if((i__63951_64199 < count__63950_64198)){
var aid_64200 = chunk__63949_64197.cljs$core$IIndexed$_nth$arity$2(null,i__63951_64199);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_64200) : abort_network_BANG_.call(null,the_remote,aid_64200));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,aid_64200,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,aid_64200,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-421817515,null);
}
} else {
}

var G__63976_64201 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__63976_64201) : result_handler.call(null,G__63976_64201));
}catch (e63975){var e_64202 = e63975;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,e_64202,aid_64200,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64202,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,e_64202,aid_64200,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1859137886,null);
}

var G__64203 = seq__63948_64196;
var G__64204 = chunk__63949_64197;
var G__64205 = count__63950_64198;
var G__64206 = (i__63951_64199 + (1));
seq__63948_64196 = G__64203;
chunk__63949_64197 = G__64204;
count__63950_64198 = G__64205;
i__63951_64199 = G__64206;
continue;
} else {
var temp__5804__auto___64207 = cljs.core.seq(seq__63948_64196);
if(temp__5804__auto___64207){
var seq__63948_64208__$1 = temp__5804__auto___64207;
if(cljs.core.chunked_seq_QMARK_(seq__63948_64208__$1)){
var c__5568__auto___64209 = cljs.core.chunk_first(seq__63948_64208__$1);
var G__64210 = cljs.core.chunk_rest(seq__63948_64208__$1);
var G__64211 = c__5568__auto___64209;
var G__64212 = cljs.core.count(c__5568__auto___64209);
var G__64213 = (0);
seq__63948_64196 = G__64210;
chunk__63949_64197 = G__64211;
count__63950_64198 = G__64212;
i__63951_64199 = G__64213;
continue;
} else {
var aid_64214 = cljs.core.first(seq__63948_64208__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_64214) : abort_network_BANG_.call(null,the_remote,aid_64214));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,aid_64214,seq__63948_64208__$1,temp__5804__auto___64207,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,aid_64214,seq__63948_64208__$1,temp__5804__auto___64207,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1497743217,null);
}
} else {
}

var G__63978_64215 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__63978_64215) : result_handler.call(null,G__63978_64215));
}catch (e63977){var e_64216 = e63977;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,e_64216,aid_64214,seq__63948_64208__$1,temp__5804__auto___64207,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64216,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__63948_64196,chunk__63949_64197,count__63950_64198,i__63951_64199,seq__63940,chunk__63945,count__63946,i__63947,e_64216,aid_64214,seq__63948_64208__$1,temp__5804__auto___64207,map__63970,map__63970__$1,send_node,active_QMARK_,result_handler,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1270793907,null);
}

var G__64217 = cljs.core.next(seq__63948_64208__$1);
var G__64218 = null;
var G__64219 = (0);
var G__64220 = (0);
seq__63948_64196 = G__64217;
chunk__63949_64197 = G__64218;
count__63950_64198 = G__64219;
i__63951_64199 = G__64220;
continue;
}
} else {
}
}
break;
}

var G__64221 = seq__63940;
var G__64222 = chunk__63945;
var G__64223 = count__63946;
var G__64224 = (i__63947 + (1));
seq__63940 = G__64221;
chunk__63945 = G__64222;
count__63946 = G__64223;
i__63947 = G__64224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63940);
if(temp__5804__auto__){
var seq__63940__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63940__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63940__$1);
var G__64225 = cljs.core.chunk_rest(seq__63940__$1);
var G__64226 = c__5568__auto__;
var G__64227 = cljs.core.count(c__5568__auto__);
var G__64228 = (0);
seq__63940 = G__64225;
chunk__63945 = G__64226;
count__63946 = G__64227;
i__63947 = G__64228;
continue;
} else {
var map__63979 = cljs.core.first(seq__63940__$1);
var map__63979__$1 = cljs.core.__destructure_map(map__63979);
var send_node = map__63979__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63979__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63979__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__63941_64229 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__63942_64230 = null;
var count__63943_64231 = (0);
var i__63944_64232 = (0);
while(true){
if((i__63944_64232 < count__63943_64231)){
var aid_64233 = chunk__63942_64230.cljs$core$IIndexed$_nth$arity$2(null,i__63944_64232);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_64233) : abort_network_BANG_.call(null,the_remote,aid_64233));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,aid_64233,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,aid_64233,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-927653920,null);
}
} else {
}

var G__63985_64234 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__63985_64234) : result_handler.call(null,G__63985_64234));
}catch (e63984){var e_64235 = e63984;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,e_64235,aid_64233,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64235,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,e_64235,aid_64233,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1245588122,null);
}

var G__64236 = seq__63941_64229;
var G__64237 = chunk__63942_64230;
var G__64238 = count__63943_64231;
var G__64239 = (i__63944_64232 + (1));
seq__63941_64229 = G__64236;
chunk__63942_64230 = G__64237;
count__63943_64231 = G__64238;
i__63944_64232 = G__64239;
continue;
} else {
var temp__5804__auto___64240__$1 = cljs.core.seq(seq__63941_64229);
if(temp__5804__auto___64240__$1){
var seq__63941_64241__$1 = temp__5804__auto___64240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63941_64241__$1)){
var c__5568__auto___64242 = cljs.core.chunk_first(seq__63941_64241__$1);
var G__64243 = cljs.core.chunk_rest(seq__63941_64241__$1);
var G__64244 = c__5568__auto___64242;
var G__64245 = cljs.core.count(c__5568__auto___64242);
var G__64246 = (0);
seq__63941_64229 = G__64243;
chunk__63942_64230 = G__64244;
count__63943_64231 = G__64245;
i__63944_64232 = G__64246;
continue;
} else {
var aid_64247 = cljs.core.first(seq__63941_64241__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_64247) : abort_network_BANG_.call(null,the_remote,aid_64247));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,aid_64247,seq__63941_64241__$1,temp__5804__auto___64240__$1,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,aid_64247,seq__63941_64241__$1,temp__5804__auto___64240__$1,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-294246737,null);
}
} else {
}

var G__63987_64248 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__63987_64248) : result_handler.call(null,G__63987_64248));
}catch (e63986){var e_64249 = e63986;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,e_64249,aid_64247,seq__63941_64241__$1,temp__5804__auto___64240__$1,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64249,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__63941_64229,chunk__63942_64230,count__63943_64231,i__63944_64232,seq__63940,chunk__63945,count__63946,i__63947,e_64249,aid_64247,seq__63941_64241__$1,temp__5804__auto___64240__$1,map__63979,map__63979__$1,send_node,active_QMARK_,result_handler,seq__63940__$1,temp__5804__auto__,app__$1,map__63938,map__63938__$1,state_atom,runtime_atom,map__63939,map__63939__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2126738477,null);
}

var G__64250 = cljs.core.next(seq__63941_64241__$1);
var G__64251 = null;
var G__64252 = (0);
var G__64253 = (0);
seq__63941_64229 = G__64250;
chunk__63942_64230 = G__64251;
count__63943_64231 = G__64252;
i__63944_64232 = G__64253;
continue;
}
} else {
}
}
break;
}

var G__64254 = cljs.core.next(seq__63940__$1);
var G__64255 = null;
var G__64256 = (0);
var G__64257 = (0);
seq__63940 = G__64254;
chunk__63945 = G__64255;
count__63946 = G__64256;
i__63947 = G__64257;
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
var G__63989 = arguments.length;
switch (G__63989) {
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

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2(app__$1,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,remotes){
var remotes__$1 = (function (){var or__5045__auto__ = remotes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__63990 = app__$1;
var G__63990__$1 = (((G__63990 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__63990));
var G__63990__$2 = (((G__63990__$1 == null))?null:cljs.core.deref(G__63990__$1));
var G__63990__$3 = (((G__63990__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__63990__$2));
if((G__63990__$3 == null)){
return null;
} else {
return cljs.core.keys(G__63990__$3);
}
}
})();
var batching_enabled = ((cljs.core.seq(remotes__$1))?cljs.core.zipmap(remotes__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.js.map
