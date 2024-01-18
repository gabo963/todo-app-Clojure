goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.algorithms.normalized_state');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.dom.events');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');
/**
 * 
 */
app.client.todo_change_text = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-change-text","app.client/todo-change-text",427684630,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-change-text","app.client/todo-change-text",427684630,null),(function (fulcro_mutation_env_symbol){
var map__51450 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51450__$1 = (((((!((map__51450 == null))))?(((((map__51450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51450):map__51450);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51450__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51450,map__51450__$1,id,text){
return (function app$client$action(p__51452){
var map__51453 = p__51452;
var map__51453__$1 = (((((!((map__51453 == null))))?(((((map__51453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51453):map__51453);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51453__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51455_51499 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51456_51500 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51456_51500;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null),text);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51455_51499;
}
return null;
});})(map__51450,map__51450__$1,id,text))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__51450,map__51450__$1,id,text){
return (function (env){
var _STAR_after_render_STAR__orig_val__51457 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51458 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51458;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51457;
}});})(map__51450,map__51450__$1,id,text))
], null);
}));
/**
 * 
 */
app.client.todo_change_done = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-change-done","app.client/todo-change-done",-1801832777,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-change-done","app.client/todo-change-done",-1801832777,null),(function (fulcro_mutation_env_symbol){
var map__51459 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51459__$1 = (((((!((map__51459 == null))))?(((((map__51459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51459):map__51459);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51459,map__51459__$1,id,done){
return (function app$client$action(p__51461){
var map__51462 = p__51461;
var map__51462__$1 = (((((!((map__51462 == null))))?(((((map__51462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51462):map__51462);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51462__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51464_51501 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51465_51502 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51465_51502;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930)], null),done);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51464_51501;
}
return null;
});})(map__51459,map__51459__$1,id,done))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__51459,map__51459__$1,id,done){
return (function (env){
var _STAR_after_render_STAR__orig_val__51466 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51467 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51467;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51466;
}});})(map__51459,map__51459__$1,id,done))
], null);
}));

var options__46503__auto___51503 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__51469){
var map__51470 = p__51469;
var map__51470__$1 = (((((!((map__51470 == null))))?(((((map__51470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51470):map__51470);
var props = map__51470__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51470__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","id","todo/id",-1375661554).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","text","todo/text",-1787258203),""], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Todo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51472 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__51472__$1 = (((((!((map__51472 == null))))?(((((map__51472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51472):map__51472);
var props = map__51472__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51472__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51472__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51472__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
var map__51473 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__51473__$1 = (((((!((map__51473 == null))))?(((((map__51473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51473):map__51473);
var onDelete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51473__$1,new cljs.core.Keyword(null,"onDelete","onDelete",1331388507));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51476 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","done","todo/done",-886331930),cljs.core.not(done)], null);
return (app.client.todo_change_done.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_change_done.cljs$core$IFn$_invoke$arity$1(G__51476) : app.client.todo_change_done.call(null,G__51476));
})()], null));
});})(map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete))
], null)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),""])], null),new cljs.core.Keyword(null,".column",".column",1389783581)),(cljs.core.truth_(done)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.disabled.input.ten.wide.column",".ui.disabled.input.ten.wide.column",1323431635)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write Something",new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete){
return (function (p1__51468_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51477 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),id,new cljs.core.Keyword("todo","text","todo/text",-1787258203),com.fulcrologic.fulcro.dom.events.target_value(p1__51468_SHARP_)], null);
return (app.client.todo_change_text.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_change_text.cljs$core$IFn$_invoke$arity$1(G__51477) : app.client.todo_change_text.call(null,G__51477));
})()], null));
});})(map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete))
], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ui.input.ten.wide.column",".ui.input.ten.wide.column",2025388323))),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete){
return (function (){
return (onDelete.cljs$core$IFn$_invoke$arity$1 ? onDelete.cljs$core$IFn$_invoke$arity$1(id) : onDelete.call(null,id));
});})(map__51472,map__51472__$1,props,id,done,text,map__51473,map__51473__$1,onDelete))
], null),"",com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "x icon"})])], null),new cljs.core.Keyword(null,".ui.icon.button",".ui.icon.button",-934115019))], null),new cljs.core.Keyword(null,".two.wide.column.fluid",".two.wide.column.fluid",-1576155300))], null),new cljs.core.Keyword(null,".ui.grid",".ui.grid",-1055033377));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Todo !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Todo = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46503__auto___51503,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Todo,new cljs.core.Keyword("app.client","Todo","app.client/Todo",291791615),options__46503__auto___51503);
app.client.ui_todo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));
/**
 * 
 */
app.client.todo_delete = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","todo-delete","app.client/todo-delete",49048779,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","todo-delete","app.client/todo-delete",49048779,null),(function (fulcro_mutation_env_symbol){
var map__51478 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__51478__$1 = (((((!((map__51478 == null))))?(((((map__51478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51478):map__51478);
var lista_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51478__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var todo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51478__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51478,map__51478__$1,lista_id,todo_id){
return (function app$client$action(p__51480){
var map__51481 = p__51480;
var map__51481__$1 = (((((!((map__51481 == null))))?(((((map__51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51481):map__51481);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__51483_51504 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51484_51505 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51484_51505;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (_STAR_after_render_STAR__orig_val__51483_51504,_STAR_after_render_STAR__temp_val__51484_51505,map__51481,map__51481__$1,state,map__51478,map__51478__$1,lista_id,todo_id){
return (function (s__50902__auto__){
return com.fulcrologic.fulcro.algorithms.normalized_state.dissoc_in(com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_(s__50902__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),lista_id,new cljs.core.Keyword("lista","todos","lista/todos",531969415)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null));
});})(_STAR_after_render_STAR__orig_val__51483_51504,_STAR_after_render_STAR__temp_val__51484_51505,map__51481,map__51481__$1,state,map__51478,map__51478__$1,lista_id,todo_id))
);
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51483_51504;
}
return null;
});})(map__51478,map__51478__$1,lista_id,todo_id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__51478,map__51478__$1,lista_id,todo_id){
return (function (env){
var _STAR_after_render_STAR__orig_val__51485 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__51486 = true;
com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__51486;

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__51485;
}});})(map__51478,map__51478__$1,lista_id,todo_id))
], null);
}));

var options__46503__auto___51506 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__51488){
var map__51489 = p__51488;
var map__51489__$1 = (((((!((map__51489 == null))))?(((((map__51489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51489):map__51489);
var props = map__51489__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51489__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51489__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51489__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","id","lista/id",-1285810479).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("lista","todos","lista/todos",531969415),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),app.client.Todo], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Lista(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51491 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__51491__$1 = (((((!((map__51491 == null))))?(((((map__51491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51491):map__51491);
var props = map__51491__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51491__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51491__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51491__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
var delete_todo = ((function (map__51491,map__51491__$1,props,id,name,todos){
return (function (todo_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51493 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),id,new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null);
return (app.client.todo_delete.cljs$core$IFn$_invoke$arity$1 ? app.client.todo_delete.cljs$core$IFn$_invoke$arity$1(G__51493) : app.client.todo_delete.call(null,G__51493));
})()], null));
});})(map__51491,map__51491__$1,props,id,name,todos))
;
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,"'s Todos"], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Todos:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (delete_todo,map__51491,map__51491__$1,props,id,name,todos){
return (function (p1__51487_SHARP_){
var G__51494 = (function (){var G__51495 = p1__51487_SHARP_;
var G__51496 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),delete_todo], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__51495,G__51496) : com.fulcrologic.fulcro.components.computed.call(null,G__51495,G__51496));
})();
return (app.client.ui_todo.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_todo.cljs$core$IFn$_invoke$arity$1(G__51494) : app.client.ui_todo.call(null,G__51494));
});})(delete_todo,map__51491,map__51491__$1,props,id,name,todos))
,todos)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "ui button"}),"Add item"]))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Lista !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Lista = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46503__auto___51506,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Lista,new cljs.core.Keyword("app.client","Lista","app.client/Lista",-889360437),options__46503__auto___51506);
app.client.ui_lista = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Lista,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("lista","id","lista/id",-1285810479)], null));

var options__46503__auto___51507 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Lista)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Gabriel"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","lista","root/lista",745692867),app.client.Lista], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__51497 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__51497__$1 = (((((!((map__51497 == null))))?(((((map__51497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51497):map__51497);
var lista = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51497__$1,new cljs.core.Keyword("root","lista","root/lista",745692867));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"Todo List"])),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(lista)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_lista.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_lista.cljs$core$IFn$_invoke$arity$1(lista) : app.client.ui_lista.call(null,lista))], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Loading..."])))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__46503__auto___51507,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__46503__auto___51507);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
