goog.provide('com.fulcrologic.guardrails.core');
goog.require('cljs.core');
goog.require('com.fulcrologic.guardrails.impl.externs');
goog.require('com.fulcrologic.guardrails.utils');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('expound.alpha');
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
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__){
return (function (state_49836){
var state_val_49837 = (state_49836[(1)]);
if((state_val_49837 === (7))){
var inst_49832 = (state_49836[(2)]);
var state_49836__$1 = state_49836;
var statearr_49841_49969 = state_49836__$1;
(statearr_49841_49969[(2)] = inst_49832);

(statearr_49841_49969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (1))){
var state_49836__$1 = state_49836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49836__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49837 === (4))){
var inst_49834 = (state_49836[(2)]);
var state_49836__$1 = state_49836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49836__$1,inst_49834);
} else {
if((state_val_49837 === (6))){
var inst_49830 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_49836__$1 = state_49836;
var statearr_49842_49973 = state_49836__$1;
(statearr_49842_49973[(2)] = inst_49830);

(statearr_49842_49973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (3))){
var inst_49813 = (state_49836[(7)]);
var state_49836__$1 = state_49836;
if(cljs.core.truth_(inst_49813)){
var statearr_49847_49975 = state_49836__$1;
(statearr_49847_49975[(1)] = (5));

} else {
var statearr_49849_49976 = state_49836__$1;
(statearr_49849_49976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (12))){
var inst_49827 = (state_49836[(2)]);
var inst_49813 = inst_49827;
var state_49836__$1 = (function (){var statearr_49852 = state_49836;
(statearr_49852[(7)] = inst_49813);

return statearr_49852;
})();
var statearr_49853_49978 = state_49836__$1;
(statearr_49853_49978[(2)] = null);

(statearr_49853_49978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (2))){
var inst_49812 = (state_49836[(2)]);
var inst_49813 = inst_49812;
var state_49836__$1 = (function (){var statearr_49854 = state_49836;
(statearr_49854[(7)] = inst_49813);

return statearr_49854;
})();
var statearr_49856_49980 = state_49836__$1;
(statearr_49856_49980[(2)] = null);

(statearr_49856_49980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (11))){
var _ = (function (){var statearr_49857 = state_49836;
(statearr_49857[(4)] = cljs.core.rest((state_49836[(4)])));

return statearr_49857;
})();
var state_49836__$1 = state_49836;
var ex49850 = (state_49836__$1[(2)]);
var statearr_49858_49984 = state_49836__$1;
(statearr_49858_49984[(5)] = ex49850);


var statearr_49859_49985 = state_49836__$1;
(statearr_49859_49985[(1)] = (10));

(statearr_49859_49985[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (9))){
var inst_49825 = (state_49836[(2)]);
var state_49836__$1 = (function (){var statearr_49861 = state_49836;
(statearr_49861[(8)] = inst_49825);

return statearr_49861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49836__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49837 === (5))){
var state_49836__$1 = state_49836;
var statearr_49865_49988 = state_49836__$1;
(statearr_49865_49988[(2)] = null);

(statearr_49865_49988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (10))){
var inst_49816 = (state_49836[(2)]);
var state_49836__$1 = (function (){var statearr_49867 = state_49836;
(statearr_49867[(9)] = inst_49816);

return statearr_49867;
})();
var statearr_49868_49990 = state_49836__$1;
(statearr_49868_49990[(2)] = null);

(statearr_49868_49990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49837 === (8))){
var inst_49813 = (state_49836[(7)]);
var _ = (function (){var statearr_49869 = state_49836;
(statearr_49869[(4)] = cljs.core.cons((11),(state_49836[(4)])));

return statearr_49869;
})();
var inst_49822 = (inst_49813.cljs$core$IFn$_invoke$arity$0 ? inst_49813.cljs$core$IFn$_invoke$arity$0() : inst_49813.call(null));
var ___$1 = (function (){var statearr_49870 = state_49836;
(statearr_49870[(4)] = cljs.core.rest((state_49836[(4)])));

return statearr_49870;
})();
var state_49836__$1 = state_49836;
var statearr_49871_49994 = state_49836__$1;
(statearr_49871_49994[(2)] = inst_49822);

(statearr_49871_49994[(1)] = (9));


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
});})(c__42006__auto__))
;
return ((function (switch__41732__auto__,c__42006__auto__){
return (function() {
var com$fulcrologic$guardrails$core$state_machine__41733__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__41733__auto____0 = (function (){
var statearr_49872 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49872[(0)] = com$fulcrologic$guardrails$core$state_machine__41733__auto__);

(statearr_49872[(1)] = (1));

return statearr_49872;
});
var com$fulcrologic$guardrails$core$state_machine__41733__auto____1 = (function (state_49836){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_49836);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e49873){var ex__41736__auto__ = e49873;
var statearr_49876_49998 = state_49836;
(statearr_49876_49998[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_49836[(4)]))){
var statearr_49877_50000 = state_49836;
(statearr_49877_50000[(1)] = cljs.core.first((state_49836[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50001 = state_49836;
state_49836 = G__50001;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__41733__auto__ = function(state_49836){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__41733__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__41733__auto____1.call(this,state_49836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__41733__auto____0;
com$fulcrologic$guardrails$core$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__41733__auto____1;
return com$fulcrologic$guardrails$core$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__))
})();
var state__42008__auto__ = (function (){var statearr_49879 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_49879[(6)] = c__42006__auto__);

return statearr_49879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__))
);

return c__42006__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__49882 = data;
var map__49882__$1 = (((((!((map__49882 == null))))?(((((map__49882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49882):map__49882);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(level)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
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
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",(20),(1),(11546),(11546),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__49899,spec,value){
var map__49900 = p__49899;
var map__49900__$1 = (((((!((map__49900 == null))))?(((((map__49900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49900):map__49900);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49900__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_50022 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__50023 = (function (){var and__4120__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return vararg_QMARK_;
} else {
return and__4120__auto__;
}
})();
var varg_50024 = (cljs.core.truth_(vargs_QMARK__50023)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_50025 = (cljs.core.truth_(vargs_QMARK__50023)?((cljs.core.map_QMARK_(varg_50024))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_50024))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_50024))):value);
var valid_exception_50026 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_50025)){
} else {
var problem_50030 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_50025,expound_opts);
var description_50031 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_50030)].join('');
var context_50032 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__4120__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__4120__auto__)){
return tap_GT__QMARK_;
} else {
return and__4120__auto__;
}
})())){
var G__49907_50039 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_50025)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__49907_50039) : com.fulcrologic.guardrails.core.tap.call(null,G__49907_50039));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_50026,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__49910 = description_50031;
if(cljs.core.truth_(context_50032)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_50032),G__49910].join('');
} else {
return G__49910;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_50032], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_50025], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_50031,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = callsite;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e49902){var e_50063 = e49902;
com.fulcrologic.guardrails.utils.report_exception(e_50063,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_50064 = (com.fulcrologic.guardrails.core.now_ms() - start_50022);
if((duration_50064 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_50064),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_50026))){
throw cljs.core.deref(valid_exception_50026);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
