goog.provide('app.model.lista');
/**
 * 
 */
app.model.lista.todo_add = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.lista","todo-add","app.model.lista/todo-add",2659965,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.lista","todo-add","app.model.lista/todo-add",2659965,null),(function (fulcro_mutation_env_symbol){
var map__51310 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51310__$1 = cljs.core.__destructure_map(map__51310);
var lista_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$lista$remote(env){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function app$model$lista$ok_action(p__51311){
var map__51312 = p__51311;
var map__51312__$1 = cljs.core.__destructure_map(map__51312);
var env = map__51312__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51312__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51313_51324 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51314_51325 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51314_51325);

try{var new_todo_id_51326 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("app.model.lista","todo-add","app.model.lista/todo-add",2659965,null),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__50541__auto__){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s__50541__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),lista_id,new cljs.core.Keyword("lista","todos","lista/todos",531969415)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_51326], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_51326], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new_todo_id_51326,new cljs.core.Keyword("todo","text","todo/text",-1787258203),"",new cljs.core.Keyword("todo","done","todo/done",-886331930),false], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51313_51324);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__51315 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51316 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51316);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51315);
}})], null);
}));
/**
 * 
 */
app.model.lista.todo_delete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.lista","todo-delete","app.model.lista/todo-delete",1839875264,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.lista","todo-delete","app.model.lista/todo-delete",1839875264,null),(function (fulcro_mutation_env_symbol){
var map__51317 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51317__$1 = cljs.core.__destructure_map(map__51317);
var lista_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51317__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var todo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51317__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$lista$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$lista$action(p__51318){
var map__51319 = p__51318;
var map__51319__$1 = cljs.core.__destructure_map(map__51319);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51320_51327 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51321_51328 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51321_51328);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__50541__auto__){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(s__50541__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),lista_id,new cljs.core.Keyword("lista","todos","lista/todos",531969415)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null));
}));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51320_51327);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__51322 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51323 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51323);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51322);
}})], null);
}));

//# sourceMappingURL=app.model.lista.js.map
