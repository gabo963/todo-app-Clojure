goog.provide('app.model.todo');
/**
 * 
 */
app.model.todo.todo_change_text = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-text","app.model.todo/todo-change-text",-1850001738,null),(function (fulcro_mutation_env_symbol){
var map__51194 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51194__$1 = cljs.core.__destructure_map(map__51194);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__51195){
var map__51196 = p__51195;
var map__51196__$1 = cljs.core.__destructure_map(map__51196);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51196__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51197_51208 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51198_51209 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51198_51209);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),text);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51197_51208);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__51199 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51200 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51200);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51199);
}})], null);
}));
/**
 * 
 */
app.model.todo.todo_change_done = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.todo","todo-change-done","app.model.todo/todo-change-done",207481047,null),(function (fulcro_mutation_env_symbol){
var map__51201 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51201__$1 = cljs.core.__destructure_map(map__51201);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51201__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$todo$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$todo$action(p__51202){
var map__51203 = p__51202;
var map__51203__$1 = cljs.core.__destructure_map(map__51203);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51204_51211 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51205_51212 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51205_51212);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930)], null),done);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51204_51211);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__51206 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51207 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51207);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51206);
}})], null);
}));

//# sourceMappingURL=app.model.todo.js.map
