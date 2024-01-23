goog.provide('app.components.ui_lista');
app.components.ui_lista.delete_todo_BANG_ = (function app$components$ui_lista$delete_todo_BANG_(this$,list_id,todo_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69578 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),list_id,new cljs.core.Keyword("todo","id","todo/id",-1375661554),todo_id], null);
return (app.mutations.todo_delete.cljs$core$IFn$_invoke$arity$1 ? app.mutations.todo_delete.cljs$core$IFn$_invoke$arity$1(G__69578) : app.mutations.todo_delete.call(null,G__69578));
})()], null));
});
app.components.ui_lista.ui_todo = (function app$components$ui_lista$ui_todo(this$,list_id,todo){
var G__69582 = (function (){var G__69583 = todo;
var G__69584 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDelete","onDelete",1331388507),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.components.ui_lista.delete_todo_BANG_,this$,list_id)], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__69583,G__69584) : com.fulcrologic.fulcro.components.computed.call(null,G__69583,G__69584));
})();
return (app.components.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_todo.ui_todo.cljs$core$IFn$_invoke$arity$1(G__69582) : app.components.ui_todo.ui_todo.call(null,G__69582));
});

var options__63143__auto___69613 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_lista$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","name","lista/name",1611084718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lista","todos","lista/todos",531969415),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_todo.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_lista$ident_STAR_(this$,p__69598){
var map__69599 = p__69598;
var map__69599__$1 = cljs.core.__destructure_map(map__69599);
var props = map__69599__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69599__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lista","id","lista/id",-1285810479),new cljs.core.Keyword("lista","id","lista/id",-1285810479).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_lista$render_Lista(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69603 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__69603__$1 = cljs.core.__destructure_map(map__69603);
var props = map__69603__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69603__$1,new cljs.core.Keyword("lista","id","lista/id",-1285810479));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69603__$1,new cljs.core.Keyword("lista","name","lista/name",1611084718));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69603__$1,new cljs.core.Keyword("lista","todos","lista/todos",531969415));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,"'s Todos"], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Todos:"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69585_SHARP_){
return app.components.ui_lista.ui_todo(this$,id,p1__69585_SHARP_);
}),todos)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "ui button"}),"Add item"])], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_lista !== 'undefined') && (typeof app.components.ui_lista.Lista !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_lista.Lista = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__63143__auto___69613,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_lista.Lista,new cljs.core.Keyword("app.components.ui-lista","Lista","app.components.ui-lista/Lista",1669203312),options__63143__auto___69613);
app.components.ui_lista.ui_lista = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.components.ui_lista.Lista,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("lista","id","lista/id",-1285810479)], null));

//# sourceMappingURL=app.components.ui_lista.js.map
