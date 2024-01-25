goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Get the current thread id on the JVM. Returns 0 on JS.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$current_thread_id(){
return (0);
});
/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__54833){
var map__54834 = p__54833;
var map__54834__$1 = cljs.core.__destructure_map(map__54834);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54834__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54984 = arguments.length;
var i__5770__auto___54985 = (0);
while(true){
if((i__5770__auto___54985 < len__5769__auto___54984)){
args__5775__auto__.push((arguments[i__5770__auto___54985]));

var G__54986 = (i__5770__auto___54985 + (1));
i__5770__auto___54985 = G__54986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq54836){
var G__54837 = cljs.core.first(seq54836);
var seq54836__$1 = cljs.core.next(seq54836);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54837,seq54836__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54987 = arguments.length;
var i__5770__auto___54988 = (0);
while(true){
if((i__5770__auto___54988 < len__5769__auto___54987)){
args__5775__auto__.push((arguments[i__5770__auto___54988]));

var G__54989 = (i__5770__auto___54988 + (1));
i__5770__auto___54988 = G__54989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq54841){
var G__54842 = cljs.core.first(seq54841);
var seq54841__$1 = cljs.core.next(seq54841);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54842,seq54841__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54990 = arguments.length;
var i__5770__auto___54991 = (0);
while(true){
if((i__5770__auto___54991 < len__5769__auto___54990)){
args__5775__auto__.push((arguments[i__5770__auto___54991]));

var G__54992 = (i__5770__auto___54991 + (1));
i__5770__auto___54991 = G__54992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq54851){
var G__54852 = cljs.core.first(seq54851);
var seq54851__$1 = cljs.core.next(seq54851);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54852,seq54851__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54993 = arguments.length;
var i__5770__auto___54994 = (0);
while(true){
if((i__5770__auto___54994 < len__5769__auto___54993)){
args__5775__auto__.push((arguments[i__5770__auto___54994]));

var G__54995 = (i__5770__auto___54994 + (1));
i__5770__auto___54994 = G__54995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq54858){
var G__54859 = cljs.core.first(seq54858);
var seq54858__$1 = cljs.core.next(seq54858);
var G__54860 = cljs.core.first(seq54858__$1);
var seq54858__$2 = cljs.core.next(seq54858__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54859,G__54860,seq54858__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app__$1,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app__$1,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app__$1,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app__$1){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app__$1){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app__$1,cljs.core.PersistentVector.EMPTY);

var seq__54861_54996 = cljs.core.seq(steps);
var chunk__54862_54997 = null;
var count__54863_54998 = (0);
var i__54864_54999 = (0);
while(true){
if((i__54864_54999 < count__54863_54998)){
var f_55000 = chunk__54862_54997.cljs$core$IIndexed$_nth$arity$2(null,i__54864_54999);
try{(f_55000.cljs$core$IFn$_invoke$arity$0 ? f_55000.cljs$core$IFn$_invoke$arity$0() : f_55000.call(null));
}catch (e54867){var e_55001 = e54867;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54861_54996,chunk__54862_54997,count__54863_54998,i__54864_54999,steps,e_55001,f_55000){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55001,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__54861_54996,chunk__54862_54997,count__54863_54998,i__54864_54999,steps,e_55001,f_55000))
,null)),null,1476374652,null);
}

var G__55002 = seq__54861_54996;
var G__55003 = chunk__54862_54997;
var G__55004 = count__54863_54998;
var G__55005 = (i__54864_54999 + (1));
seq__54861_54996 = G__55002;
chunk__54862_54997 = G__55003;
count__54863_54998 = G__55004;
i__54864_54999 = G__55005;
continue;
} else {
var temp__5804__auto___55006 = cljs.core.seq(seq__54861_54996);
if(temp__5804__auto___55006){
var seq__54861_55007__$1 = temp__5804__auto___55006;
if(cljs.core.chunked_seq_QMARK_(seq__54861_55007__$1)){
var c__5568__auto___55008 = cljs.core.chunk_first(seq__54861_55007__$1);
var G__55009 = cljs.core.chunk_rest(seq__54861_55007__$1);
var G__55010 = c__5568__auto___55008;
var G__55011 = cljs.core.count(c__5568__auto___55008);
var G__55012 = (0);
seq__54861_54996 = G__55009;
chunk__54862_54997 = G__55010;
count__54863_54998 = G__55011;
i__54864_54999 = G__55012;
continue;
} else {
var f_55013 = cljs.core.first(seq__54861_55007__$1);
try{(f_55013.cljs$core$IFn$_invoke$arity$0 ? f_55013.cljs$core$IFn$_invoke$arity$0() : f_55013.call(null));
}catch (e54868){var e_55014 = e54868;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,144,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__54861_54996,chunk__54862_54997,count__54863_54998,i__54864_54999,steps,e_55014,f_55013,seq__54861_55007__$1,temp__5804__auto___55006){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55014,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__54861_54996,chunk__54862_54997,count__54863_54998,i__54864_54999,steps,e_55014,f_55013,seq__54861_55007__$1,temp__5804__auto___55006))
,null)),null,1227031272,null);
}

var G__55015 = cljs.core.next(seq__54861_55007__$1);
var G__55016 = null;
var G__55017 = (0);
var G__55018 = (0);
seq__54861_54996 = G__55015;
chunk__54862_54997 = G__55016;
count__54863_54998 = G__55017;
i__54864_54999 = G__55018;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1));
if(temp__5804__auto__){
var next_steps = temp__5804__auto__;
var G__55019 = next_steps;
steps = G__55019;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__54869){
var map__54870 = p__54869;
var map__54870__$1 = cljs.core.__destructure_map(map__54870);
var app__$1 = map__54870__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54870__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)));
});
/**
 * Is the current thread running the TX queue?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_running_tx_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$current_thread_running_tx_QMARK_(p__54871){
var map__54872 = p__54871;
var map__54872__$1 = cljs.core.__destructure_map(map__54872);
var app__$1 = map__54872__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54872__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,cljs.core.PersistentVector.EMPTY)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id());
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__54873,remote){
var map__54874 = p__54873;
var map__54874__$1 = cljs.core.__destructure_map(map__54874);
var tx_element = map__54874__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54874__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_55020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_55021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_55021)){
var env_55022 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_55020], null));
try{(handler_55021.cljs$core$IFn$_invoke$arity$1 ? handler_55021.cljs$core$IFn$_invoke$arity$1(env_55022) : handler_55021.call(null,env_55022));
}catch (e54875){var e_55023 = e54875;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,182,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_55023,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-stp-res-action-exc"], null);
}),null)),null,-1559992258,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__54876){
var map__54877 = p__54876;
var map__54877__$1 = cljs.core.__destructure_map(map__54877);
var tx_element = map__54877__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__54883){
var map__54884 = p__54883;
var map__54884__$1 = cljs.core.__destructure_map(map__54884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54884__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app__$1,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__54885_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app__$1,tx_node,p1__54885_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__54888 = arguments.length;
switch (G__54888) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app__$1,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,225,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-stp-res-lacks-valid-node"], null);
}),null)),null,252969103,null);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app__$1,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app__$1,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__54889){
var map__54890 = p__54889;
var map__54890__$1 = cljs.core.__destructure_map(map__54890);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app__$1,p__54891,ele_idx,remote){
var map__54892 = p__54891;
var map__54892__$1 = cljs.core.__destructure_map(map__54892);
var tx_node = map__54892__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54892__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54892__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__54614__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto__,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__54893 = app__$1;
var G__54894 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__54893,G__54894) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__54893,G__54894));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto__,cljs.core.pop);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
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
try{var map__54896_55025 = result;
var map__54896_55026__$1 = cljs.core.__destructure_map(map__54896_55025);
var status_code_55027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54896_55026__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_55028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54896_55026__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_55027)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_55028);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_55027));
}
}catch (e54895){var e_55029 = e54895;
}} else {
}
} else {
}

var id__54614__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto__,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

var G__54897 = app__$1;
var G__54898 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__54897,G__54898) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__54897,G__54898));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto__,cljs.core.pop);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
return handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}),(1));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__54899){
var map__54900 = p__54899;
var map__54900__$1 = cljs.core.__destructure_map(map__54900);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app__$1,p__54901){
var map__54902 = p__54901;
var map__54902__$1 = cljs.core.__destructure_map(map__54902);
var tx_node = map__54902__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54902__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54902__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app__$1,p__54903){
var map__54904 = p__54903;
var map__54904__$1 = cljs.core.__destructure_map(map__54904);
var tx_node = map__54904__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54904__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app__$1){
var _STAR_remove_send_STAR__orig_val__54905 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var _STAR_remove_send_STAR__temp_val__54906 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_;
(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = _STAR_remove_send_STAR__temp_val__54906);

try{var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__54907_55030 = cljs.core.seq(remote_names);
var chunk__54908_55031 = null;
var count__54909_55032 = (0);
var i__54910_55033 = (0);
while(true){
if((i__54910_55033 < count__54909_55032)){
var remote_55034 = chunk__54908_55031.cljs$core$IIndexed$_nth$arity$2(null,i__54910_55033);
var send_queue_55035 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_55034);
var vec__54927_55036 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue_55035);
var p_55037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54927_55036,(0),null);
var serial_55038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54927_55036,(1),null);
var front_55039 = cljs.core.first(serial_55038);
var seq__54930_55040 = cljs.core.seq(p_55037);
var chunk__54931_55041 = null;
var count__54932_55042 = (0);
var i__54933_55043 = (0);
while(true){
if((i__54933_55043 < count__54932_55042)){
var item_55044 = chunk__54931_55041.cljs$core$IIndexed$_nth$arity$2(null,i__54933_55043);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54930_55040,chunk__54931_55041,count__54932_55042,i__54933_55043,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55044,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_55044,remote_55034);
});})(seq__54930_55040,chunk__54931_55041,count__54932_55042,i__54933_55043,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55044,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);


var G__55045 = seq__54930_55040;
var G__55046 = chunk__54931_55041;
var G__55047 = count__54932_55042;
var G__55048 = (i__54933_55043 + (1));
seq__54930_55040 = G__55045;
chunk__54931_55041 = G__55046;
count__54932_55042 = G__55047;
i__54933_55043 = G__55048;
continue;
} else {
var temp__5804__auto___55049 = cljs.core.seq(seq__54930_55040);
if(temp__5804__auto___55049){
var seq__54930_55050__$1 = temp__5804__auto___55049;
if(cljs.core.chunked_seq_QMARK_(seq__54930_55050__$1)){
var c__5568__auto___55051 = cljs.core.chunk_first(seq__54930_55050__$1);
var G__55052 = cljs.core.chunk_rest(seq__54930_55050__$1);
var G__55053 = c__5568__auto___55051;
var G__55054 = cljs.core.count(c__5568__auto___55051);
var G__55055 = (0);
seq__54930_55040 = G__55052;
chunk__54931_55041 = G__55053;
count__54932_55042 = G__55054;
i__54933_55043 = G__55055;
continue;
} else {
var item_55056 = cljs.core.first(seq__54930_55050__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54930_55040,chunk__54931_55041,count__54932_55042,i__54933_55043,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55056,seq__54930_55050__$1,temp__5804__auto___55049,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_55056,remote_55034);
});})(seq__54930_55040,chunk__54931_55041,count__54932_55042,i__54933_55043,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55056,seq__54930_55050__$1,temp__5804__auto___55049,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);


var G__55057 = cljs.core.next(seq__54930_55050__$1);
var G__55058 = null;
var G__55059 = (0);
var G__55060 = (0);
seq__54930_55040 = G__55057;
chunk__54931_55041 = G__55058;
count__54932_55042 = G__55059;
i__54933_55043 = G__55060;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front_55039))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_55034,serial_55038);
} else {
var map__54934_55061 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote_55034,serial_55038);
var map__54934_55062__$1 = cljs.core.__destructure_map(map__54934_55061);
var send_queue_55063__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54934_55062__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_55064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54934_55062__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_55064)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,map__54934_55061,map__54934_55062__$1,send_queue_55063__$1,send_node_55064,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node_55064,remote_55034);
});})(seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,map__54934_55061,map__54934_55062__$1,send_queue_55063__$1,send_node_55064,send_queue_55035,vec__54927_55036,p_55037,serial_55038,front_55039,remote_55034,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_55034,send_queue_55063__$1);
}


var G__55065 = seq__54907_55030;
var G__55066 = chunk__54908_55031;
var G__55067 = count__54909_55032;
var G__55068 = (i__54910_55033 + (1));
seq__54907_55030 = G__55065;
chunk__54908_55031 = G__55066;
count__54909_55032 = G__55067;
i__54910_55033 = G__55068;
continue;
} else {
var temp__5804__auto___55069 = cljs.core.seq(seq__54907_55030);
if(temp__5804__auto___55069){
var seq__54907_55070__$1 = temp__5804__auto___55069;
if(cljs.core.chunked_seq_QMARK_(seq__54907_55070__$1)){
var c__5568__auto___55071 = cljs.core.chunk_first(seq__54907_55070__$1);
var G__55072 = cljs.core.chunk_rest(seq__54907_55070__$1);
var G__55073 = c__5568__auto___55071;
var G__55074 = cljs.core.count(c__5568__auto___55071);
var G__55075 = (0);
seq__54907_55030 = G__55072;
chunk__54908_55031 = G__55073;
count__54909_55032 = G__55074;
i__54910_55033 = G__55075;
continue;
} else {
var remote_55076 = cljs.core.first(seq__54907_55070__$1);
var send_queue_55077 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_55076);
var vec__54935_55078 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue_55077);
var p_55079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54935_55078,(0),null);
var serial_55080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54935_55078,(1),null);
var front_55081 = cljs.core.first(serial_55080);
var seq__54938_55082 = cljs.core.seq(p_55079);
var chunk__54939_55083 = null;
var count__54940_55084 = (0);
var i__54941_55085 = (0);
while(true){
if((i__54941_55085 < count__54940_55084)){
var item_55086 = chunk__54939_55083.cljs$core$IIndexed$_nth$arity$2(null,i__54941_55085);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54938_55082,chunk__54939_55083,count__54940_55084,i__54941_55085,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55086,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_55086,remote_55076);
});})(seq__54938_55082,chunk__54939_55083,count__54940_55084,i__54941_55085,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55086,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);


var G__55087 = seq__54938_55082;
var G__55088 = chunk__54939_55083;
var G__55089 = count__54940_55084;
var G__55090 = (i__54941_55085 + (1));
seq__54938_55082 = G__55087;
chunk__54939_55083 = G__55088;
count__54940_55084 = G__55089;
i__54941_55085 = G__55090;
continue;
} else {
var temp__5804__auto___55091__$1 = cljs.core.seq(seq__54938_55082);
if(temp__5804__auto___55091__$1){
var seq__54938_55092__$1 = temp__5804__auto___55091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54938_55092__$1)){
var c__5568__auto___55093 = cljs.core.chunk_first(seq__54938_55092__$1);
var G__55094 = cljs.core.chunk_rest(seq__54938_55092__$1);
var G__55095 = c__5568__auto___55093;
var G__55096 = cljs.core.count(c__5568__auto___55093);
var G__55097 = (0);
seq__54938_55082 = G__55094;
chunk__54939_55083 = G__55095;
count__54940_55084 = G__55096;
i__54941_55085 = G__55097;
continue;
} else {
var item_55098 = cljs.core.first(seq__54938_55092__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54938_55082,chunk__54939_55083,count__54940_55084,i__54941_55085,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55098,seq__54938_55092__$1,temp__5804__auto___55091__$1,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_55098,remote_55076);
});})(seq__54938_55082,chunk__54939_55083,count__54940_55084,i__54941_55085,seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,item_55098,seq__54938_55092__$1,temp__5804__auto___55091__$1,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);


var G__55099 = cljs.core.next(seq__54938_55092__$1);
var G__55100 = null;
var G__55101 = (0);
var G__55102 = (0);
seq__54938_55082 = G__55099;
chunk__54939_55083 = G__55100;
count__54940_55084 = G__55101;
i__54941_55085 = G__55102;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front_55081))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_55076,serial_55080);
} else {
var map__54942_55103 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote_55076,serial_55080);
var map__54942_55104__$1 = cljs.core.__destructure_map(map__54942_55103);
var send_queue_55105__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942_55104__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_55106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54942_55104__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_55106)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,map__54942_55103,map__54942_55104__$1,send_queue_55105__$1,send_node_55106,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node_55106,remote_55076);
});})(seq__54907_55030,chunk__54908_55031,count__54909_55032,i__54910_55033,map__54942_55103,map__54942_55104__$1,send_queue_55105__$1,send_node_55106,send_queue_55077,vec__54935_55078,p_55079,serial_55080,front_55081,remote_55076,seq__54907_55070__$1,temp__5804__auto___55069,remote_names,operations,_STAR_remove_send_STAR__orig_val__54905,_STAR_remove_send_STAR__temp_val__54906))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_55076,send_queue_55105__$1);
}


var G__55107 = cljs.core.next(seq__54907_55070__$1);
var G__55108 = null;
var G__55109 = (0);
var G__55110 = (0);
seq__54907_55030 = G__55107;
chunk__54908_55031 = G__55108;
count__54909_55032 = G__55109;
i__54910_55033 = G__55110;
continue;
}
} else {
}
}
break;
}

var seq__54943 = cljs.core.seq(cljs.core.deref(operations));
var chunk__54944 = null;
var count__54945 = (0);
var i__54946 = (0);
while(true){
if((i__54946 < count__54945)){
var op = chunk__54944.cljs$core$IIndexed$_nth$arity$2(null,i__54946);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__55111 = seq__54943;
var G__55112 = chunk__54944;
var G__55113 = count__54945;
var G__55114 = (i__54946 + (1));
seq__54943 = G__55111;
chunk__54944 = G__55112;
count__54945 = G__55113;
i__54946 = G__55114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54943);
if(temp__5804__auto__){
var seq__54943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54943__$1);
var G__55115 = cljs.core.chunk_rest(seq__54943__$1);
var G__55116 = c__5568__auto__;
var G__55117 = cljs.core.count(c__5568__auto__);
var G__55118 = (0);
seq__54943 = G__55115;
chunk__54944 = G__55116;
count__54945 = G__55117;
i__54946 = G__55118;
continue;
} else {
var op = cljs.core.first(seq__54943__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__55119 = cljs.core.next(seq__54943__$1);
var G__55120 = null;
var G__55121 = (0);
var G__55122 = (0);
seq__54943 = G__55119;
chunk__54944 = G__55120;
count__54945 = G__55121;
i__54946 = G__55122;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = _STAR_remove_send_STAR__orig_val__54905);
}});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__54947){
var map__54948 = p__54947;
var map__54948__$1 = cljs.core.__destructure_map(map__54948);
var app__$1 = map__54948__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,346,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed! See https://book.fulcrologic.com/#err-stp-old-queue-chng"], null);
}),null)),null,-818796664,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app__$1,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app__$1);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app__$1){
var map__54949 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__54949__$1 = cljs.core.__destructure_map(map__54949);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app__$1){
var map__54951 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__54951__$1 = cljs.core.__destructure_map(map__54951);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54951__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54951__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app__$1,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54950_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__54950_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__54950_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app__$1);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app__$1){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app__$1);
}catch (e54952){var e = e54952;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,379,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue! See https://book.fulcrologic.com/#err-stp-err-processing-tx-q"], null);
}),null)),null,-267361100,null);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app__$1,p__54953){
while(true){
var map__54954 = p__54953;
var map__54954__$1 = cljs.core.__destructure_map(map__54954);
var options = map__54954__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54954__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54954__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__5043__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return component;
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto___55123 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___55123)){
var refresh_component_BANG__55124 = temp__5804__auto___55123;
(refresh_component_BANG__55124.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__55124.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__55124.call(null,component));
} else {
}
} else {
var temp__5804__auto___55125 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5804__auto___55125)){
var render_BANG__55126 = temp__5804__auto___55125;
(render_BANG__55126.cljs$core$IFn$_invoke$arity$2 ? render_BANG__55126.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_BANG__55126.call(null,app__$1,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
var G__55127 = app__$1;
var G__55128 = cljs.core.PersistentArrayMap.EMPTY;
app__$1 = G__55127;
p__54953 = G__55128;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55129 = arguments.length;
var i__5770__auto___55130 = (0);
while(true){
if((i__5770__auto___55130 < len__5769__auto___55129)){
args__5775__auto__.push((arguments[i__5770__auto___55130]));

var G__55131 = (i__5770__auto___55130 + (1));
i__5770__auto___55130 = G__55131;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq54955){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54955));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__54958 = arguments.length;
switch (G__54958) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__54959,tx,options){
var map__54960 = p__54959;
var map__54960__$1 = cljs.core.__destructure_map(map__54960);
var app__$1 = map__54960__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54960__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__54961 = options;
var map__54961__$1 = cljs.core.__destructure_map(map__54961);
var options__$1 = map__54961__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54956_SHARP_){
return (((p1__54956_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__54956_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__54962 = cljs.core.set(refresh);
var G__54962__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__54962,follow_on_reads):G__54962);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54962__$1,ref);
} else {
return G__54962__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__54963 = s;
var G__54963__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54963,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__54963);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54963__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__54963__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app__$1)){
} else {
var id__54614__auto___55133 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto___55133,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.current_thread_id()], 0));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app__$1,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__54614__auto___55133,cljs.core.pop);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$abort_BANG_(app_ish,abort_id){
var map__54964 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__54964__$1 = cljs.core.__destructure_map(map__54964);
var app__$1 = map__54964__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54964__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__54965 = runtime_state;
var map__54965__$1 = cljs.core.__destructure_map(map__54965);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54965__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var seq__54966 = cljs.core.seq(remotes);
var chunk__54967 = null;
var count__54968 = (0);
var i__54969 = (0);
while(true){
if((i__54969 < count__54968)){
var vec__54976 = chunk__54967.cljs$core$IIndexed$_nth$arity$2(null,i__54969);
var remote_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54976,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54976,(1),null);
var send_queue_55134 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_name);
var new_queue_55135 = com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(remote,send_queue_55134,abort_id);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_name,new_queue_55135);


var G__55137 = seq__54966;
var G__55138 = chunk__54967;
var G__55139 = count__54968;
var G__55140 = (i__54969 + (1));
seq__54966 = G__55137;
chunk__54967 = G__55138;
count__54968 = G__55139;
i__54969 = G__55140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54966);
if(temp__5804__auto__){
var seq__54966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54966__$1);
var G__55141 = cljs.core.chunk_rest(seq__54966__$1);
var G__55142 = c__5568__auto__;
var G__55143 = cljs.core.count(c__5568__auto__);
var G__55144 = (0);
seq__54966 = G__55141;
chunk__54967 = G__55142;
count__54968 = G__55143;
i__54969 = G__55144;
continue;
} else {
var vec__54979 = cljs.core.first(seq__54966__$1);
var remote_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54979,(1),null);
var send_queue_55145 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_name);
var new_queue_55146 = com.fulcrologic.fulcro.algorithms.tx_processing.abort_elements_BANG_(remote,send_queue_55145,abort_id);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_name,new_queue_55146);


var G__55147 = cljs.core.next(seq__54966__$1);
var G__55148 = null;
var G__55149 = (0);
var G__55150 = (0);
seq__54966 = G__55147;
chunk__54967 = G__55148;
count__54968 = G__55149;
i__54969 = G__55150;
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
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   Passing a set of `batching-remotes` (a sequence of remote names) will enable automatic load
 *   batching on the listed remotes. Transactions are not currently batched, and *pessimistic transaction are NOT supported*.
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, though the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI as an additinoal
 *   optimization.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(var_args){
var G__54983 = arguments.length;
switch (G__54983) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2(app__$1,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,batching_remotes){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
var batching_enabled = cljs.core.zipmap(batching_remotes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled),new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
