goog.provide('app.model.todo');
/**
 * 
 */
app.model.todo.todo_change_text = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null),(function (fulcro_mutation_env_symbol){
var map__56645 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__56645__$1 = cljs.core.__destructure_map(map__56645);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56645__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56645__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__56649){
var map__56651 = p__56649;
var map__56651__$1 = cljs.core.__destructure_map(map__56651);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56651__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__56653_56681 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__56654_56682 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__56654_56682);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),text);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__56653_56681);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__56656 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__56657 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__56657);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__56656);
}})], null);
}));
/**
 * 
 */
app.model.todo.todo_change_done = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null),(function (fulcro_mutation_env_symbol){
var map__56662 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__56662__$1 = cljs.core.__destructure_map(map__56662);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56662__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__56663){
var map__56664 = p__56663;
var map__56664__$1 = cljs.core.__destructure_map(map__56664);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56664__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__56665_56688 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__56666_56689 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__56666_56689);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930)], null),done);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__56665_56688);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__56677 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__56678 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__56678);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__56677);
}})], null);
}));

//# sourceMappingURL=app.model.todo.js.map
