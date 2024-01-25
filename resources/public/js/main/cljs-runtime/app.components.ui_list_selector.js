goog.provide('app.components.ui_list_selector');

var options__52180__auto___59112 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_list_selector$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","name","list/name",1849094347)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_list_selector$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_list_selector$render_ListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59096 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59096__$1 = cljs.core.__destructure_map(map__59096);
var props = map__59096__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59096__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59096__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return alert("no funciona");
})], null),name], null),null)], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_list_selector !== 'undefined') && (typeof app.components.ui_list_selector.ListItem !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_list_selector.ListItem = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__52180__auto___59112,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_list_selector.ListItem,new cljs.core.Keyword("app.components.ui-list-selector","ListItem","app.components.ui-list-selector/ListItem",1412956580),options__52180__auto___59112);
app.components.ui_list_selector.ui_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.components.ui_list_selector.ListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("list","id","list/id",-1385338442)], null));

var options__52180__auto___59116 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_list_selector$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_list_selector.ListItem)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_list_selector$ident_STAR_(this$,p__59103){
var map__59104 = p__59103;
var map__59104__$1 = cljs.core.__destructure_map(map__59104);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59104__$1,new cljs.core.Keyword("list-list","list","list-list/list",1913911752));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.components.ui-list-selector","list-list","app.components.ui-list-selector/list-list",-823273322)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$components$ui_list_selector$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),app.components.ui_list_selector.ListItem], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_list_selector$render_ListList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59109 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59109__$1 = cljs.core.__destructure_map(map__59109);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59109__$1,new cljs.core.Keyword("list-list","list","list-list/list",1913911752));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "ui header"}),"Todo Lists"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.ui_list_selector.ui_list_item,list)], null),null)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_list_selector !== 'undefined') && (typeof app.components.ui_list_selector.ListList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_list_selector.ListList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__52180__auto___59116,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_list_selector.ListList,new cljs.core.Keyword("app.components.ui-list-selector","ListList","app.components.ui-list-selector/ListList",113332352),options__52180__auto___59116);
app.components.ui_list_selector.ui_list_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.ui_list_selector.ListList);

//# sourceMappingURL=app.components.ui_list_selector.js.map
