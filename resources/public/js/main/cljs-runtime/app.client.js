goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__59317__auto___69687 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","done","todo/done",-886331930),new cljs.core.Keyword("todo","text","todo/text",-1787258203)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("todo","id","todo/id",-1375661554).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("todo","id","todo/id",-1375661554),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("todo","done","todo/done",-886331930),false,new cljs.core.Keyword("todo","text","todo/text",-1787258203),"Write Something"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Todo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69635 = com.fulcrologic.fulcro.components.props(this$);
var map__69635__$1 = (((((!((map__69635 == null))))?(((((map__69635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69635):map__69635);
var props = map__69635__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword("todo","id","todo/id",-1375661554));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword("todo","done","todo/done",-886331930));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69635__$1,new cljs.core.Keyword("todo","text","todo/text",-1787258203));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(done)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),id,new cljs.core.Keyword(null,"checked","checked",-50955819),""], null)], null),null):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),id], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),""]))], null),new cljs.core.Keyword(null,".column",".column",1389783581)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),text], null)], null),new cljs.core.Keyword(null,".w-full",".w-full",61905205))], null),new cljs.core.Keyword(null,".ten.wide.column",".ten.wide.column",-1038580355))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["button",({"className": "ui icon button fluid"}),"",com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "x icon"})]))])], null),new cljs.core.Keyword(null,".two.wide.column.fluid",".two.wide.column.fluid",-1576155300)))], null),new cljs.core.Keyword(null,".ui.grid",".ui.grid",-1055033377));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Todo !== 'undefined')){
} else {
app.client.Todo = ((function (options__59317__auto___69687){
return (function app$client$Todo(props__59318__auto__){
var this__59319__auto__ = this;
var temp__5802__auto___69688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59317__auto___69687,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___69688)){
var init_state__59320__auto___69689 = temp__5802__auto___69688;
this__59319__auto__.state = (function (){var obj69638 = ({"fulcro$state":(function (){var G__69639 = this__59319__auto__;
var G__69640 = goog.object.get(props__59318__auto__,"fulcro$value");
return (init_state__59320__auto___69689.cljs$core$IFn$_invoke$arity$2 ? init_state__59320__auto___69689.cljs$core$IFn$_invoke$arity$2(G__69639,G__69640) : init_state__59320__auto___69689.call(null,G__69639,G__69640));
})()});
return obj69638;
})();
} else {
this__59319__auto__.state = (function (){var obj69642 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj69642;
})();
}

return null;
});})(options__59317__auto___69687))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Todo,new cljs.core.Keyword("app.client","Todo","app.client/Todo",291791615),options__59317__auto___69687);
app.client.ui_todo = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Todo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo","id","todo/id",-1375661554)], null));

var options__59317__auto___69690 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","model","car/model",331054627)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","id","car/id",-1388434848).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("car","model","car/model",331054627),new cljs.core.Keyword("param","model","param/model",275060462)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69643 = com.fulcrologic.fulcro.components.props(this$);
var map__69643__$1 = (((((!((map__69643 == null))))?(((((map__69643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69643):map__69643);
var props = map__69643__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69643__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69643__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [model], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__59317__auto___69690){
return (function app$client$Car(props__59318__auto__){
var this__59319__auto__ = this;
var temp__5802__auto___69691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59317__auto___69690,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___69691)){
var init_state__59320__auto___69692 = temp__5802__auto___69691;
this__59319__auto__.state = (function (){var obj69646 = ({"fulcro$state":(function (){var G__69647 = this__59319__auto__;
var G__69648 = goog.object.get(props__59318__auto__,"fulcro$value");
return (init_state__59320__auto___69692.cljs$core$IFn$_invoke$arity$2 ? init_state__59320__auto___69692.cljs$core$IFn$_invoke$arity$2(G__69647,G__69648) : init_state__59320__auto___69692.call(null,G__69647,G__69648));
})()});
return obj69646;
})();
} else {
this__59319__auto__.state = (function (){var obj69650 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj69650;
})();
}

return null;
});})(options__59317__auto___69690))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__59317__auto___69690);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));
/**
 * 
 */
app.client.make_older = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null),(function (fulcro_mutation_env_symbol){
var map__69651 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__69651__$1 = (((((!((map__69651 == null))))?(((((map__69651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69651):map__69651);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69651__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__69651,map__69651__$1,id){
return (function app$client$action(p__69653){
var map__69654 = p__69653;
var map__69654__$1 = (((((!((map__69654 == null))))?(((((map__69654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69654):map__69654);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69654__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","age","person/age",387881455)], null),cljs.core.inc);

return null;
});})(map__69651,map__69651__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__69651,map__69651__$1,id){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__69651,map__69651__$1,id))
], null);
}));

var options__59317__auto___69693 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","todos","person/todos",-562733867),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Todo)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("person","age","person/age",387881455),(0),new cljs.core.Keyword("person","todos","person/todos",-562733867),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(3)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","todos","person/todos",-562733867),app.client.Todo], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69656 = com.fulcrologic.fulcro.components.props(this$);
var map__69656__$1 = (((((!((map__69656 == null))))?(((((map__69656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69656):map__69656);
var props = map__69656__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69656__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69656__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69656__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69656__$1,new cljs.core.Keyword("person","todos","person/todos",-562733867));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Age: ",com.fulcrologic.fulcro.components.force_children(age)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__69656,map__69656__$1,props,id,name,age,todos){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69658 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
return (app.client.make_older.cljs$core$IFn$_invoke$arity$1 ? app.client.make_older.cljs$core$IFn$_invoke$arity$1(G__69658) : app.client.make_older.call(null,G__69658));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person-list","people","person-list/people",841524750)], null)], null));
});})(map__69656,map__69656__$1,props,id,name,age,todos))
], null),"Make Older"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"id: ",com.fulcrologic.fulcro.components.force_children(id)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Todos:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_todo,todos)], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__59317__auto___69693){
return (function app$client$Person(props__59318__auto__){
var this__59319__auto__ = this;
var temp__5802__auto___69694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59317__auto___69693,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___69694)){
var init_state__59320__auto___69695 = temp__5802__auto___69694;
this__59319__auto__.state = (function (){var obj69660 = ({"fulcro$state":(function (){var G__69661 = this__59319__auto__;
var G__69662 = goog.object.get(props__59318__auto__,"fulcro$value");
return (init_state__59320__auto___69695.cljs$core$IFn$_invoke$arity$2 ? init_state__59320__auto___69695.cljs$core$IFn$_invoke$arity$2(G__69661,G__69662) : init_state__59320__auto___69695.call(null,G__69661,G__69662));
})()});
return obj69660;
})();
} else {
this__59319__auto__.state = (function (){var obj69664 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj69664;
})();
}

return null;
});})(options__59317__auto___69693))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__59317__auto___69693);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__59317__auto___69696 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__69665){
var map__69666 = p__69665;
var map__69666__$1 = (((((!((map__69666 == null))))?(((((map__69666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69666):map__69666);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69666__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Daniel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Nicolas"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),app.client.Person], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69668 = com.fulcrologic.fulcro.components.props(this$);
var map__69668__$1 = (((((!((map__69668 == null))))?(((((map__69668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69668):map__69668);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69668__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var cnt = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__69668,map__69668__$1,people){
return (function (c,p__69670){
var map__69671 = p__69670;
var map__69671__$1 = (((((!((map__69671 == null))))?(((((map__69671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69671):map__69671);
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69671__$1,new cljs.core.Keyword("person","age","person/age",387881455));
if((age > (30))){
return (c + (1));
} else {
return c;
}
});})(map__69668,map__69668__$1,people))
,(0),people);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"People Over 30: ",com.fulcrologic.fulcro.components.force_children(cnt)]);
})(),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_person,people)], null),null))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonList !== 'undefined')){
} else {
app.client.PersonList = ((function (options__59317__auto___69696){
return (function app$client$PersonList(props__59318__auto__){
var this__59319__auto__ = this;
var temp__5802__auto___69697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59317__auto___69696,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___69697)){
var init_state__59320__auto___69698 = temp__5802__auto___69697;
this__59319__auto__.state = (function (){var obj69674 = ({"fulcro$state":(function (){var G__69675 = this__59319__auto__;
var G__69676 = goog.object.get(props__59318__auto__,"fulcro$value");
return (init_state__59320__auto___69698.cljs$core$IFn$_invoke$arity$2 ? init_state__59320__auto___69698.cljs$core$IFn$_invoke$arity$2(G__69675,G__69676) : init_state__59320__auto___69698.call(null,G__69675,G__69676));
})()});
return obj69674;
})();
} else {
this__59319__auto__.state = (function (){var obj69678 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj69678;
})();
}

return null;
});})(options__59317__auto___69696))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonList,new cljs.core.Keyword("app.client","PersonList","app.client/PersonList",746982741),options__59317__auto___69696);
app.client.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonList);

var options__59317__auto___69699 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),app.client.PersonList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__69679 = com.fulcrologic.fulcro.components.props(this$);
var map__69679__$1 = (((((!((map__69679 == null))))?(((((map__69679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69679):map__69679);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69679__$1,new cljs.core.Keyword("root","list","root/list",761982781));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(list)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"People"]),com.fulcrologic.fulcro.components.force_children((app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1(list) : app.client.ui_person_list.call(null,list)))], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Loading..."])))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
app.client.Root = ((function (options__59317__auto___69699){
return (function app$client$Root(props__59318__auto__){
var this__59319__auto__ = this;
var temp__5802__auto___69700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59317__auto___69699,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___69700)){
var init_state__59320__auto___69701 = temp__5802__auto___69700;
this__59319__auto__.state = (function (){var obj69682 = ({"fulcro$state":(function (){var G__69683 = this__59319__auto__;
var G__69684 = goog.object.get(props__59318__auto__,"fulcro$value");
return (init_state__59320__auto___69701.cljs$core$IFn$_invoke$arity$2 ? init_state__59320__auto___69701.cljs$core$IFn$_invoke$arity$2(G__69683,G__69684) : init_state__59320__auto___69701.call(null,G__69683,G__69684));
})()});
return obj69682;
})();
} else {
this__59319__auto__.state = (function (){var obj69686 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj69686;
})();
}

return null;
});})(options__59317__auto___69699))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__59317__auto___69699);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
