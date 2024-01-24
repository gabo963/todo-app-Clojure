goog.provide('app.model.todo');
/**
 * 
 */
app.model.todo.todo_change_text = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null),(function (fulcro_mutation_env_symbol){
var map__69924 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__69924__$1 = cljs.core.__destructure_map(map__69924);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69924__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69924__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__69927){
var map__69930 = p__69927;
var map__69930__$1 = cljs.core.__destructure_map(map__69930);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69930__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__69931_69958 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__69932_69959 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__69932_69959);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),text);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__69931_69958);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__69935 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__69936 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__69936);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__69935);
}})], null);
}));
/**
 * 
 */
app.model.todo.todo_change_done = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null),(function (fulcro_mutation_env_symbol){
var map__69938 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__69938__$1 = cljs.core.__destructure_map(map__69938);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69938__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69938__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__69941){
var map__69944 = p__69941;
var map__69944__$1 = cljs.core.__destructure_map(map__69944);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69944__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__69945_69962 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__69946_69963 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__69946_69963);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930)], null),done);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__69945_69962);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__69949 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__69950 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__69950);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__69949);
}})], null);
}));

//# sourceMappingURL=app.model.todo.js.map
