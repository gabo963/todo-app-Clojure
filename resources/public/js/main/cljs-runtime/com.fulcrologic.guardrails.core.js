goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__46137__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_47760){
var state_val_47761 = (state_47760[(1)]);
if((state_val_47761 === (7))){
var inst_47756 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
var statearr_47765_47932 = state_47760__$1;
(statearr_47765_47932[(2)] = inst_47756);

(statearr_47765_47932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (1))){
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47760__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_47761 === (4))){
var inst_47758 = (state_47760[(2)]);
var state_47760__$1 = state_47760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47760__$1,inst_47758);
} else {
if((state_val_47761 === (6))){
var inst_47754 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_47760__$1 = state_47760;
var statearr_47769_47936 = state_47760__$1;
(statearr_47769_47936[(2)] = inst_47754);

(statearr_47769_47936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (3))){
var inst_47737 = (state_47760[(7)]);
var state_47760__$1 = state_47760;
if(cljs.core.truth_(inst_47737)){
var statearr_47771_47937 = state_47760__$1;
(statearr_47771_47937[(1)] = (5));

} else {
var statearr_47772_47938 = state_47760__$1;
(statearr_47772_47938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (12))){
var inst_47751 = (state_47760[(2)]);
var inst_47737 = inst_47751;
var state_47760__$1 = (function (){var statearr_47776 = state_47760;
(statearr_47776[(7)] = inst_47737);

return statearr_47776;
})();
var statearr_47777_47940 = state_47760__$1;
(statearr_47777_47940[(2)] = null);

(statearr_47777_47940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (2))){
var inst_47736 = (state_47760[(2)]);
var inst_47737 = inst_47736;
var state_47760__$1 = (function (){var statearr_47778 = state_47760;
(statearr_47778[(7)] = inst_47737);

return statearr_47778;
})();
var statearr_47779_47941 = state_47760__$1;
(statearr_47779_47941[(2)] = null);

(statearr_47779_47941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (11))){
var _ = (function (){var statearr_47781 = state_47760;
(statearr_47781[(4)] = cljs.core.rest((state_47760[(4)])));

return statearr_47781;
})();
var state_47760__$1 = state_47760;
var ex47774 = (state_47760__$1[(2)]);
var statearr_47783_47942 = state_47760__$1;
(statearr_47783_47942[(5)] = ex47774);


var statearr_47785_47944 = state_47760__$1;
(statearr_47785_47944[(1)] = (10));

(statearr_47785_47944[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (9))){
var inst_47749 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47788 = state_47760;
(statearr_47788[(8)] = inst_47749);

return statearr_47788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47760__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_47761 === (5))){
var state_47760__$1 = state_47760;
var statearr_47789_47947 = state_47760__$1;
(statearr_47789_47947[(2)] = null);

(statearr_47789_47947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (10))){
var inst_47740 = (state_47760[(2)]);
var state_47760__$1 = (function (){var statearr_47792 = state_47760;
(statearr_47792[(9)] = inst_47740);

return statearr_47792;
})();
var statearr_47793_47949 = state_47760__$1;
(statearr_47793_47949[(2)] = null);

(statearr_47793_47949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47761 === (8))){
var inst_47737 = (state_47760[(7)]);
var _ = (function (){var statearr_47795 = state_47760;
(statearr_47795[(4)] = cljs.core.cons((11),(state_47760[(4)])));

return statearr_47795;
})();
var inst_47746 = (inst_47737.cljs$core$IFn$_invoke$arity$0 ? inst_47737.cljs$core$IFn$_invoke$arity$0() : inst_47737.call(null));
var ___$1 = (function (){var statearr_47797 = state_47760;
(statearr_47797[(4)] = cljs.core.rest((state_47760[(4)])));

return statearr_47797;
})();
var state_47760__$1 = state_47760;
var statearr_47799_47952 = state_47760__$1;
(statearr_47799_47952[(2)] = inst_47746);

(statearr_47799_47952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__46067__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__46067__auto____0 = (function (){
var statearr_47801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47801[(0)] = com$fulcrologic$guardrails$core$state_machine__46067__auto__);

(statearr_47801[(1)] = (1));

return statearr_47801;
});
var com$fulcrologic$guardrails$core$state_machine__46067__auto____1 = (function (state_47760){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_47760);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e47802){var ex__46070__auto__ = e47802;
var statearr_47803_47954 = state_47760;
(statearr_47803_47954[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_47760[(4)]))){
var statearr_47805_47956 = state_47760;
(statearr_47805_47956[(1)] = cljs.core.first((state_47760[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47957 = state_47760;
state_47760 = G__47957;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__46067__auto__ = function(state_47760){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__46067__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__46067__auto____1.call(this,state_47760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__46067__auto____0;
com$fulcrologic$guardrails$core$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__46067__auto____1;
return com$fulcrologic$guardrails$core$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_47808 = f__46138__auto__();
(statearr_47808[(6)] = c__46137__auto__);

return statearr_47808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

return c__46137__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__47810 = data;
var map__47810__$1 = cljs.core.__destructure_map(map__47810);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47810__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",(20),(1),(11858),(11858),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__47854,spec,value){
var map__47857 = p__47854;
var map__47857__$1 = cljs.core.__destructure_map(map__47857);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_47972 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__47973 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_47974 = (cljs.core.truth_(vargs_QMARK__47973)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_47975 = (cljs.core.truth_(vargs_QMARK__47973)?((cljs.core.map_QMARK_(varg_47974))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_47974))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_47974))):value);
var valid_exception_47976 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_47975)){
} else {
var problem_47981 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_47975,expound_opts);
var description_47982 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_47981)].join('');
var context_47983 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__47866_47986 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_47975)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__47866_47986) : com.fulcrologic.guardrails.core.tap.call(null,G__47866_47986));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_47976,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__47867 = description_47982;
if(cljs.core.truth_(context_47983)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_47983),G__47867].join('');
} else {
return G__47867;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_47983], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_47975], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_47982,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e47865){var e_48013 = e47865;
com.fulcrologic.guardrails.utils.report_exception(e_48013,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_48017 = (com.fulcrologic.guardrails.core.now_ms() - start_47972);
if((duration_48017 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_48017),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_47976))){
throw cljs.core.deref(valid_exception_47976);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
