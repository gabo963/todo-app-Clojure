goog.provide('app.components.ui_lists_selection');

var options__48134__auto___52382 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_lists_selection$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","name","list/name",1849094347)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_lists_selection$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("list","id","list/id",-1385338442),new cljs.core.Keyword("list","id","list/id",-1385338442).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_lists_selection$render_ListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52374 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52374__$1 = cljs.core.__destructure_map(map__52374);
var props = map__52374__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52374__$1,new cljs.core.Keyword("list","id","list/id",-1385338442));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52374__$1,new cljs.core.Keyword("list","name","list/name",1849094347));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__52375 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list","id","list/id",-1385338442),id], null);
return (app.model.list.select_list.cljs$core$IFn$_invoke$arity$1 ? app.model.list.select_list.cljs$core$IFn$_invoke$arity$1(G__52375) : app.model.list.select_list.call(null,G__52375));
})(),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_list.Lista)])], null));
})], null),name], null),null)], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_lists_selection !== 'undefined') && (typeof app.components.ui_lists_selection.ListItem !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_lists_selection.ListItem = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48134__auto___52382,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_lists_selection.ListItem,new cljs.core.Keyword("app.components.ui-lists-selection","ListItem","app.components.ui-lists-selection/ListItem",1787219454),options__48134__auto___52382);
app.components.ui_lists_selection.ui_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.components.ui_lists_selection.ListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("list","id","list/id",-1385338442)], null));

var options__48134__auto___52383 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_lists_selection$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_lists_selection.ListItem)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_lists_selection$ident_STAR_(this$,p__52376){
var map__52377 = p__52376;
var map__52377__$1 = cljs.core.__destructure_map(map__52377);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52377__$1,new cljs.core.Keyword("list-list","list","list-list/list",1913911752));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.components.ui-lists-selection","list-list","app.components.ui-lists-selection/list-list",-1187871460)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$components$ui_lists_selection$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-list","list","list-list/list",1913911752),app.components.ui_lists_selection.ListItem], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_lists_selection$render_ListList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52378 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52378__$1 = cljs.core.__destructure_map(map__52378);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52378__$1,new cljs.core.Keyword("list-list","list","list-list/list",1913911752));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "ui header"}),"To-do Lists"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.ui_lists_selection.ui_list_item,list)], null),null)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_lists_selection !== 'undefined') && (typeof app.components.ui_lists_selection.ListList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_lists_selection.ListList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48134__auto___52383,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_lists_selection.ListList,new cljs.core.Keyword("app.components.ui-lists-selection","ListList","app.components.ui-lists-selection/ListList",-1533921946),options__48134__auto___52383);
app.components.ui_lists_selection.ui_list_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.ui_lists_selection.ListList);

var options__48134__auto___52384 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$components$ui_lists_selection$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_lists_selection.ListList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.components.ui_list.Lista)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$components$ui_lists_selection$ident_STAR_(this$,p__52379){
var map__52380 = p__52379;
var map__52380__$1 = cljs.core.__destructure_map(map__52380);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52380__$1,new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200));
var selected_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52380__$1,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.components.ui-lists-selection","list-picker","app.components.ui-lists-selection/list-picker",-1391815791)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$components$ui_lists_selection$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200),app.components.ui_lists_selection.ListList,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384),app.components.ui_list.Lista], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$components$ui_lists_selection$render_ListPicker(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52381 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52381__$1 = cljs.core.__destructure_map(map__52381);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52381__$1,new cljs.core.Keyword("list-picker","list","list-picker/list",1823202200));
var selected_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52381__$1,new cljs.core.Keyword("list-picker","selected-list","list-picker/selected-list",591345384));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.components.ui_lists_selection.ui_list_list.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_lists_selection.ui_list_list.cljs$core$IFn$_invoke$arity$1(list) : app.components.ui_lists_selection.ui_list_list.call(null,list))], null),new cljs.core.Keyword(null,".column",".column",1389783581)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.components.ui_list.ui_list.cljs$core$IFn$_invoke$arity$1 ? app.components.ui_list.ui_list.cljs$core$IFn$_invoke$arity$1(selected_list) : app.components.ui_list.ui_list.call(null,selected_list))], null),new cljs.core.Keyword(null,".column",".column",1389783581))], null),new cljs.core.Keyword(null,".ui.two.column.container.grid",".ui.two.column.container.grid",1396250453));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.components !== 'undefined') && (typeof app.components.ui_lists_selection !== 'undefined') && (typeof app.components.ui_lists_selection.ListPicker !== 'undefined')){
} else {
/**
 * @constructor
 */
app.components.ui_lists_selection.ListPicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48134__auto___52384,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.components.ui_lists_selection.ListPicker,new cljs.core.Keyword("app.components.ui-lists-selection","ListPicker","app.components.ui-lists-selection/ListPicker",-777591202),options__48134__auto___52384);
app.components.ui_lists_selection.ui_list_picker = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.components.ui_lists_selection.ListPicker);

//# sourceMappingURL=app.components.ui_lists_selection.js.map
