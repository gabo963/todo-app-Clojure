goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom.inputs');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__60683){
var vec__60684 = p__60683;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60684,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60684,(1),null);
var pair = vec__60684;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__60687){
var vec__60688 = p__60687;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60688,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60688,(1),null);
var pair = vec__60688;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__60697){
var vec__60698 = p__60697;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60698,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60698,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__60701 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60701,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__60701;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__60709 = arguments.length;
switch (G__60709) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__60710 = component.refs;
var G__60710__$1 = (((G__60710 == null))?null:goog.object.get(G__60710,name));
if((G__60710__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__60710__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return ((function (factory){
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__60711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (ref,temp__5802__auto__,factory){
return (function (r){
var G__60712 = (function (){var G__60715 = r;
if((G__60715 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__60715);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__60712) : ref.call(null,G__60712));
});})(ref,temp__5802__auto__,factory))
);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__60711) : factory.call(null,G__60711));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
;})(factory))
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__60726 = arguments.length;
switch (G__60726) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___62262 = arguments.length;
var i__4731__auto___62263 = (0);
while(true){
if((i__4731__auto___62263 < len__4730__auto___62262)){
args_arr__4751__auto__.push((arguments[i__4731__auto___62263]));

var G__62264 = (i__4731__auto___62263 + (1));
i__4731__auto___62263 = G__62264;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq60723){
var G__60724 = cljs.core.first(seq60723);
var seq60723__$1 = cljs.core.next(seq60723);
var G__60725 = cljs.core.first(seq60723__$1);
var seq60723__$2 = cljs.core.next(seq60723__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60724,G__60725,seq60723__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__60741_62265 = next_state;
var G__60742_62266 = next_props;
var G__60743_62267 = ({"onChange": on_change});
goog.object.extend(G__60741_62265,G__60742_62266,G__60743_62267);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__60748 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__60748) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__60748));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__60751_62268 = state;
var G__60752_62269 = props;
var G__60753_62270 = ({"onChange": (function (){var G__60754 = goog.object.get(this$,"onChange");
var G__60755 = this$;
return goog.bind(G__60754,G__60755);
})()});
goog.object.extend(G__60751_62268,G__60752_62269,G__60753_62270);

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})();

return module$node_modules$react$index.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,module$node_modules$react$index.Component);

var x60757_62271 = ctor.prototype;
x60757_62271.onChange = ((function (x60757_62271,ctor){
return (function (event){
var this$ = this;
var temp__5804__auto__ = (function (){var G__60762 = this$.props;
var G__60763 = "onChange";
return goog.object.get(G__60762,G__60763);
})();
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x60757_62271,ctor))
;

x60757_62271.UNSAFE_componentWillReceiveProps = ((function (x60757_62271,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__60768 = this_node;
var G__60769 = ((function (G__60768,state_value,this_node,this$,x60757_62271,ctor){
return (function (p1__60749_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__60749_SHARP_);
});})(G__60768,state_value,this_node,this$,x60757_62271,ctor))
;
return goog.dom.findNode(G__60768,G__60769);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x60757_62271,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
});})(state_value,this_node,value_node,element_value,this$,x60757_62271,ctor))
,null)),null,810769032,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x60757_62271,ctor))
;

x60757_62271.render = ((function (x60757_62271,ctor){
return (function (){
var this$ = this;
var G__60770 = element;
var G__60771 = goog.object.getValueByKeys(this$,"state","cached-props");
return module$node_modules$react$index.createElement(G__60770,G__60771);
});})(x60757_62271,ctor))
;


var real_factory = ((function (ctor){
return (function() { 
var G__62272__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__62272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62273__i = 0, G__62273__a = new Array(arguments.length -  0);
while (G__62273__i < G__62273__a.length) {G__62273__a[G__62273__i] = arguments[G__62273__i + 0]; ++G__62273__i;}
  args = new cljs.core.IndexedSeq(G__62273__a,0,null);
} 
return G__62272__delegate.call(this,args);};
G__62272.cljs$lang$maxFixedArity = 0;
G__62272.cljs$lang$applyTo = (function (arglist__62274){
var args = cljs.core.seq(arglist__62274);
return G__62272__delegate(args);
});
G__62272.cljs$core$IFn$_invoke$arity$variadic = G__62272__delegate;
return G__62272;
})()
;})(ctor))
;
return ((function (real_factory,ctor){
return (function() { 
var G__62275__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__62275 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__62276__i = 0, G__62276__a = new Array(arguments.length -  1);
while (G__62276__i < G__62276__a.length) {G__62276__a[G__62276__i] = arguments[G__62276__i + 1]; ++G__62276__i;}
  children = new cljs.core.IndexedSeq(G__62276__a,0,null);
} 
return G__62275__delegate.call(this,props,children);};
G__62275.cljs$lang$maxFixedArity = 1;
G__62275.cljs$lang$applyTo = (function (arglist__62277){
var props = cljs.core.first(arglist__62277);
var children = cljs.core.rest(arglist__62277);
return G__62275__delegate(props,children);
});
G__62275.cljs$core$IFn$_invoke$arity$variadic = G__62275__delegate;
return G__62275;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__60778 = tag;
switch (G__60778) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60778)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__60780 = arguments.length;
switch (G__60780) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60781 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60782 = cljs.core.seq(vec__60781);
var first__60783 = cljs.core.first(seq__60782);
var seq__60782__$1 = cljs.core.next(seq__60782);
var head = first__60783;
var tail = seq__60782__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__60784 = (function (){var G__60785 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60785,tail);

return G__60785;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60784) : f.call(null,G__60784));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__60786 = (function (){var G__60787 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60787,args);

return G__60787;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60786) : f.call(null,G__60786));
} else {
if(cljs.core.object_QMARK_(head)){
var G__60788 = (function (){var G__60789 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60789,tail);

return G__60789;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60788) : f.call(null,G__60788));
} else {
if(cljs.core.map_QMARK_(head)){
var G__60790 = (function (){var G__60791 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60791,tail);

return G__60791;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60790) : f.call(null,G__60790));
} else {
var G__60792 = (function (){var G__60797 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60797,args);

return G__60797;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60792) : f.call(null,G__60792));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__60807 = arguments.length;
switch (G__60807) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__60808 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__60809 = cljs.core.seq(vec__60808);
var first__60810 = cljs.core.first(seq__60809);
var seq__60809__$1 = cljs.core.next(seq__60809);
var head = first__60810;
var tail = seq__60809__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60811 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60811,tail);

return G__60811;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60816 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60816,args);

return G__60816;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60819 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60819,tail);

return G__60819;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60824 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__60824,tail);

return G__60824;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__60828 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__60828,args);

return G__60828;
})());

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62281 = arguments.length;
var i__4731__auto___62282 = (0);
while(true){
if((i__4731__auto___62282 < len__4730__auto___62281)){
args__4736__auto__.push((arguments[i__4731__auto___62282]));

var G__62283 = (i__4731__auto___62282 + (1));
i__4731__auto___62282 = G__62283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60883 = conformed_args__59440__auto__;
var map__60883__$1 = (((((!((map__60883 == null))))?(((((map__60883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60883):map__60883);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq60882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60882));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62284 = arguments.length;
var i__4731__auto___62285 = (0);
while(true){
if((i__4731__auto___62285 < len__4730__auto___62284)){
args__4736__auto__.push((arguments[i__4731__auto___62285]));

var G__62286 = (i__4731__auto___62285 + (1));
i__4731__auto___62285 = G__62286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60919 = conformed_args__59440__auto__;
var map__60919__$1 = (((((!((map__60919 == null))))?(((((map__60919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60919):map__60919);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq60907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60907));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62287 = arguments.length;
var i__4731__auto___62288 = (0);
while(true){
if((i__4731__auto___62288 < len__4730__auto___62287)){
args__4736__auto__.push((arguments[i__4731__auto___62288]));

var G__62289 = (i__4731__auto___62288 + (1));
i__4731__auto___62288 = G__62289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60939 = conformed_args__59440__auto__;
var map__60939__$1 = (((((!((map__60939 == null))))?(((((map__60939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60939):map__60939);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq60929){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60929));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62290 = arguments.length;
var i__4731__auto___62291 = (0);
while(true){
if((i__4731__auto___62291 < len__4730__auto___62290)){
args__4736__auto__.push((arguments[i__4731__auto___62291]));

var G__62292 = (i__4731__auto___62291 + (1));
i__4731__auto___62291 = G__62292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60975 = conformed_args__59440__auto__;
var map__60975__$1 = (((((!((map__60975 == null))))?(((((map__60975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60975):map__60975);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq60964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60964));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62293 = arguments.length;
var i__4731__auto___62294 = (0);
while(true){
if((i__4731__auto___62294 < len__4730__auto___62293)){
args__4736__auto__.push((arguments[i__4731__auto___62294]));

var G__62295 = (i__4731__auto___62294 + (1));
i__4731__auto___62294 = G__62295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60982 = conformed_args__59440__auto__;
var map__60982__$1 = (((((!((map__60982 == null))))?(((((map__60982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60982):map__60982);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq60979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60979));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62296 = arguments.length;
var i__4731__auto___62297 = (0);
while(true){
if((i__4731__auto___62297 < len__4730__auto___62296)){
args__4736__auto__.push((arguments[i__4731__auto___62297]));

var G__62298 = (i__4731__auto___62297 + (1));
i__4731__auto___62297 = G__62298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60993 = conformed_args__59440__auto__;
var map__60993__$1 = (((((!((map__60993 == null))))?(((((map__60993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60993):map__60993);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq60986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60986));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62299 = arguments.length;
var i__4731__auto___62300 = (0);
while(true){
if((i__4731__auto___62300 < len__4730__auto___62299)){
args__4736__auto__.push((arguments[i__4731__auto___62300]));

var G__62301 = (i__4731__auto___62300 + (1));
i__4731__auto___62300 = G__62301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61003 = conformed_args__59440__auto__;
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq60999){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60999));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62302 = arguments.length;
var i__4731__auto___62303 = (0);
while(true){
if((i__4731__auto___62303 < len__4730__auto___62302)){
args__4736__auto__.push((arguments[i__4731__auto___62303]));

var G__62304 = (i__4731__auto___62303 + (1));
i__4731__auto___62303 = G__62304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61013 = conformed_args__59440__auto__;
var map__61013__$1 = (((((!((map__61013 == null))))?(((((map__61013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61013):map__61013);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq61008){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61008));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62305 = arguments.length;
var i__4731__auto___62306 = (0);
while(true){
if((i__4731__auto___62306 < len__4730__auto___62305)){
args__4736__auto__.push((arguments[i__4731__auto___62306]));

var G__62307 = (i__4731__auto___62306 + (1));
i__4731__auto___62306 = G__62307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61021 = conformed_args__59440__auto__;
var map__61021__$1 = (((((!((map__61021 == null))))?(((((map__61021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61021):map__61021);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq61018){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61018));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62308 = arguments.length;
var i__4731__auto___62309 = (0);
while(true){
if((i__4731__auto___62309 < len__4730__auto___62308)){
args__4736__auto__.push((arguments[i__4731__auto___62309]));

var G__62310 = (i__4731__auto___62309 + (1));
i__4731__auto___62309 = G__62310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61032 = conformed_args__59440__auto__;
var map__61032__$1 = (((((!((map__61032 == null))))?(((((map__61032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61032):map__61032);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq61026){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61026));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62311 = arguments.length;
var i__4731__auto___62312 = (0);
while(true){
if((i__4731__auto___62312 < len__4730__auto___62311)){
args__4736__auto__.push((arguments[i__4731__auto___62312]));

var G__62313 = (i__4731__auto___62312 + (1));
i__4731__auto___62312 = G__62313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61042 = conformed_args__59440__auto__;
var map__61042__$1 = (((((!((map__61042 == null))))?(((((map__61042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61042):map__61042);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq61036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61036));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62314 = arguments.length;
var i__4731__auto___62315 = (0);
while(true){
if((i__4731__auto___62315 < len__4730__auto___62314)){
args__4736__auto__.push((arguments[i__4731__auto___62315]));

var G__62316 = (i__4731__auto___62315 + (1));
i__4731__auto___62315 = G__62316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61055 = conformed_args__59440__auto__;
var map__61055__$1 = (((((!((map__61055 == null))))?(((((map__61055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61055):map__61055);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq61049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61049));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62317 = arguments.length;
var i__4731__auto___62318 = (0);
while(true){
if((i__4731__auto___62318 < len__4730__auto___62317)){
args__4736__auto__.push((arguments[i__4731__auto___62318]));

var G__62319 = (i__4731__auto___62318 + (1));
i__4731__auto___62318 = G__62319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61063 = conformed_args__59440__auto__;
var map__61063__$1 = (((((!((map__61063 == null))))?(((((map__61063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61063):map__61063);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq61062){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61062));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62320 = arguments.length;
var i__4731__auto___62321 = (0);
while(true){
if((i__4731__auto___62321 < len__4730__auto___62320)){
args__4736__auto__.push((arguments[i__4731__auto___62321]));

var G__62322 = (i__4731__auto___62321 + (1));
i__4731__auto___62321 = G__62322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61068 = conformed_args__59440__auto__;
var map__61068__$1 = (((((!((map__61068 == null))))?(((((map__61068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61068):map__61068);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq61065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61065));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62323 = arguments.length;
var i__4731__auto___62324 = (0);
while(true){
if((i__4731__auto___62324 < len__4730__auto___62323)){
args__4736__auto__.push((arguments[i__4731__auto___62324]));

var G__62325 = (i__4731__auto___62324 + (1));
i__4731__auto___62324 = G__62325;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61071 = conformed_args__59440__auto__;
var map__61071__$1 = (((((!((map__61071 == null))))?(((((map__61071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61071):map__61071);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq61070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61070));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62326 = arguments.length;
var i__4731__auto___62327 = (0);
while(true){
if((i__4731__auto___62327 < len__4730__auto___62326)){
args__4736__auto__.push((arguments[i__4731__auto___62327]));

var G__62328 = (i__4731__auto___62327 + (1));
i__4731__auto___62327 = G__62328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61074 = conformed_args__59440__auto__;
var map__61074__$1 = (((((!((map__61074 == null))))?(((((map__61074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61074):map__61074);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq61073){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61073));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62329 = arguments.length;
var i__4731__auto___62330 = (0);
while(true){
if((i__4731__auto___62330 < len__4730__auto___62329)){
args__4736__auto__.push((arguments[i__4731__auto___62330]));

var G__62331 = (i__4731__auto___62330 + (1));
i__4731__auto___62330 = G__62331;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61077 = conformed_args__59440__auto__;
var map__61077__$1 = (((((!((map__61077 == null))))?(((((map__61077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61077):map__61077);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq61076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61076));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62334 = arguments.length;
var i__4731__auto___62335 = (0);
while(true){
if((i__4731__auto___62335 < len__4730__auto___62334)){
args__4736__auto__.push((arguments[i__4731__auto___62335]));

var G__62336 = (i__4731__auto___62335 + (1));
i__4731__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61086 = conformed_args__59440__auto__;
var map__61086__$1 = (((((!((map__61086 == null))))?(((((map__61086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61086):map__61086);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq61082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61082));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62342 = arguments.length;
var i__4731__auto___62343 = (0);
while(true){
if((i__4731__auto___62343 < len__4730__auto___62342)){
args__4736__auto__.push((arguments[i__4731__auto___62343]));

var G__62346 = (i__4731__auto___62343 + (1));
i__4731__auto___62343 = G__62346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61092 = conformed_args__59440__auto__;
var map__61092__$1 = (((((!((map__61092 == null))))?(((((map__61092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61092):map__61092);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq61088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61088));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62349 = arguments.length;
var i__4731__auto___62351 = (0);
while(true){
if((i__4731__auto___62351 < len__4730__auto___62349)){
args__4736__auto__.push((arguments[i__4731__auto___62351]));

var G__62353 = (i__4731__auto___62351 + (1));
i__4731__auto___62351 = G__62353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61098 = conformed_args__59440__auto__;
var map__61098__$1 = (((((!((map__61098 == null))))?(((((map__61098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61098):map__61098);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq61095){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61095));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62359 = arguments.length;
var i__4731__auto___62360 = (0);
while(true){
if((i__4731__auto___62360 < len__4730__auto___62359)){
args__4736__auto__.push((arguments[i__4731__auto___62360]));

var G__62362 = (i__4731__auto___62360 + (1));
i__4731__auto___62360 = G__62362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61103 = conformed_args__59440__auto__;
var map__61103__$1 = (((((!((map__61103 == null))))?(((((map__61103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61103):map__61103);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq61101){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61101));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62363 = arguments.length;
var i__4731__auto___62364 = (0);
while(true){
if((i__4731__auto___62364 < len__4730__auto___62363)){
args__4736__auto__.push((arguments[i__4731__auto___62364]));

var G__62365 = (i__4731__auto___62364 + (1));
i__4731__auto___62364 = G__62365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61110 = conformed_args__59440__auto__;
var map__61110__$1 = (((((!((map__61110 == null))))?(((((map__61110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61110):map__61110);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq61106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61106));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62366 = arguments.length;
var i__4731__auto___62367 = (0);
while(true){
if((i__4731__auto___62367 < len__4730__auto___62366)){
args__4736__auto__.push((arguments[i__4731__auto___62367]));

var G__62368 = (i__4731__auto___62367 + (1));
i__4731__auto___62367 = G__62368;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61123 = conformed_args__59440__auto__;
var map__61123__$1 = (((((!((map__61123 == null))))?(((((map__61123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61123):map__61123);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq61118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61118));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62369 = arguments.length;
var i__4731__auto___62370 = (0);
while(true){
if((i__4731__auto___62370 < len__4730__auto___62369)){
args__4736__auto__.push((arguments[i__4731__auto___62370]));

var G__62371 = (i__4731__auto___62370 + (1));
i__4731__auto___62370 = G__62371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61129 = conformed_args__59440__auto__;
var map__61129__$1 = (((((!((map__61129 == null))))?(((((map__61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61129):map__61129);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq61126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61126));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62372 = arguments.length;
var i__4731__auto___62373 = (0);
while(true){
if((i__4731__auto___62373 < len__4730__auto___62372)){
args__4736__auto__.push((arguments[i__4731__auto___62373]));

var G__62374 = (i__4731__auto___62373 + (1));
i__4731__auto___62373 = G__62374;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61146 = conformed_args__59440__auto__;
var map__61146__$1 = (((((!((map__61146 == null))))?(((((map__61146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61146):map__61146);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq61132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61132));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62375 = arguments.length;
var i__4731__auto___62376 = (0);
while(true){
if((i__4731__auto___62376 < len__4730__auto___62375)){
args__4736__auto__.push((arguments[i__4731__auto___62376]));

var G__62377 = (i__4731__auto___62376 + (1));
i__4731__auto___62376 = G__62377;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61149 = conformed_args__59440__auto__;
var map__61149__$1 = (((((!((map__61149 == null))))?(((((map__61149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61149):map__61149);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq61148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61148));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62378 = arguments.length;
var i__4731__auto___62379 = (0);
while(true){
if((i__4731__auto___62379 < len__4730__auto___62378)){
args__4736__auto__.push((arguments[i__4731__auto___62379]));

var G__62380 = (i__4731__auto___62379 + (1));
i__4731__auto___62379 = G__62380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61156 = conformed_args__59440__auto__;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq61153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61153));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62381 = arguments.length;
var i__4731__auto___62382 = (0);
while(true){
if((i__4731__auto___62382 < len__4730__auto___62381)){
args__4736__auto__.push((arguments[i__4731__auto___62382]));

var G__62383 = (i__4731__auto___62382 + (1));
i__4731__auto___62382 = G__62383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61164 = conformed_args__59440__auto__;
var map__61164__$1 = (((((!((map__61164 == null))))?(((((map__61164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61164):map__61164);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq61162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61162));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62386 = arguments.length;
var i__4731__auto___62387 = (0);
while(true){
if((i__4731__auto___62387 < len__4730__auto___62386)){
args__4736__auto__.push((arguments[i__4731__auto___62387]));

var G__62388 = (i__4731__auto___62387 + (1));
i__4731__auto___62387 = G__62388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61176 = conformed_args__59440__auto__;
var map__61176__$1 = (((((!((map__61176 == null))))?(((((map__61176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61176):map__61176);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq61173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61173));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62389 = arguments.length;
var i__4731__auto___62390 = (0);
while(true){
if((i__4731__auto___62390 < len__4730__auto___62389)){
args__4736__auto__.push((arguments[i__4731__auto___62390]));

var G__62391 = (i__4731__auto___62390 + (1));
i__4731__auto___62390 = G__62391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61185 = conformed_args__59440__auto__;
var map__61185__$1 = (((((!((map__61185 == null))))?(((((map__61185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61185):map__61185);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq61182){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61182));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62392 = arguments.length;
var i__4731__auto___62393 = (0);
while(true){
if((i__4731__auto___62393 < len__4730__auto___62392)){
args__4736__auto__.push((arguments[i__4731__auto___62393]));

var G__62394 = (i__4731__auto___62393 + (1));
i__4731__auto___62393 = G__62394;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61198 = conformed_args__59440__auto__;
var map__61198__$1 = (((((!((map__61198 == null))))?(((((map__61198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61198):map__61198);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq61191){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61191));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62395 = arguments.length;
var i__4731__auto___62396 = (0);
while(true){
if((i__4731__auto___62396 < len__4730__auto___62395)){
args__4736__auto__.push((arguments[i__4731__auto___62396]));

var G__62397 = (i__4731__auto___62396 + (1));
i__4731__auto___62396 = G__62397;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61210 = conformed_args__59440__auto__;
var map__61210__$1 = (((((!((map__61210 == null))))?(((((map__61210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61210):map__61210);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq61208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61208));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62398 = arguments.length;
var i__4731__auto___62399 = (0);
while(true){
if((i__4731__auto___62399 < len__4730__auto___62398)){
args__4736__auto__.push((arguments[i__4731__auto___62399]));

var G__62400 = (i__4731__auto___62399 + (1));
i__4731__auto___62399 = G__62400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61216 = conformed_args__59440__auto__;
var map__61216__$1 = (((((!((map__61216 == null))))?(((((map__61216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61216):map__61216);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq61212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61212));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62401 = arguments.length;
var i__4731__auto___62402 = (0);
while(true){
if((i__4731__auto___62402 < len__4730__auto___62401)){
args__4736__auto__.push((arguments[i__4731__auto___62402]));

var G__62403 = (i__4731__auto___62402 + (1));
i__4731__auto___62402 = G__62403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61224 = conformed_args__59440__auto__;
var map__61224__$1 = (((((!((map__61224 == null))))?(((((map__61224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61224):map__61224);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq61223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61223));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62404 = arguments.length;
var i__4731__auto___62405 = (0);
while(true){
if((i__4731__auto___62405 < len__4730__auto___62404)){
args__4736__auto__.push((arguments[i__4731__auto___62405]));

var G__62406 = (i__4731__auto___62405 + (1));
i__4731__auto___62405 = G__62406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61235 = conformed_args__59440__auto__;
var map__61235__$1 = (((((!((map__61235 == null))))?(((((map__61235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61235):map__61235);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq61228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61228));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62407 = arguments.length;
var i__4731__auto___62408 = (0);
while(true){
if((i__4731__auto___62408 < len__4730__auto___62407)){
args__4736__auto__.push((arguments[i__4731__auto___62408]));

var G__62409 = (i__4731__auto___62408 + (1));
i__4731__auto___62408 = G__62409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61239 = conformed_args__59440__auto__;
var map__61239__$1 = (((((!((map__61239 == null))))?(((((map__61239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61239):map__61239);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq61237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61237));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62411 = arguments.length;
var i__4731__auto___62412 = (0);
while(true){
if((i__4731__auto___62412 < len__4730__auto___62411)){
args__4736__auto__.push((arguments[i__4731__auto___62412]));

var G__62413 = (i__4731__auto___62412 + (1));
i__4731__auto___62412 = G__62413;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61247 = conformed_args__59440__auto__;
var map__61247__$1 = (((((!((map__61247 == null))))?(((((map__61247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61247):map__61247);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq61245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61245));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62414 = arguments.length;
var i__4731__auto___62416 = (0);
while(true){
if((i__4731__auto___62416 < len__4730__auto___62414)){
args__4736__auto__.push((arguments[i__4731__auto___62416]));

var G__62418 = (i__4731__auto___62416 + (1));
i__4731__auto___62416 = G__62418;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61254 = conformed_args__59440__auto__;
var map__61254__$1 = (((((!((map__61254 == null))))?(((((map__61254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61254):map__61254);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq61251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61251));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62424 = arguments.length;
var i__4731__auto___62425 = (0);
while(true){
if((i__4731__auto___62425 < len__4730__auto___62424)){
args__4736__auto__.push((arguments[i__4731__auto___62425]));

var G__62426 = (i__4731__auto___62425 + (1));
i__4731__auto___62425 = G__62426;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61261 = conformed_args__59440__auto__;
var map__61261__$1 = (((((!((map__61261 == null))))?(((((map__61261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61261):map__61261);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq61260){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61260));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62429 = arguments.length;
var i__4731__auto___62430 = (0);
while(true){
if((i__4731__auto___62430 < len__4730__auto___62429)){
args__4736__auto__.push((arguments[i__4731__auto___62430]));

var G__62431 = (i__4731__auto___62430 + (1));
i__4731__auto___62430 = G__62431;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61269 = conformed_args__59440__auto__;
var map__61269__$1 = (((((!((map__61269 == null))))?(((((map__61269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61269):map__61269);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq61266){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61266));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62432 = arguments.length;
var i__4731__auto___62433 = (0);
while(true){
if((i__4731__auto___62433 < len__4730__auto___62432)){
args__4736__auto__.push((arguments[i__4731__auto___62433]));

var G__62434 = (i__4731__auto___62433 + (1));
i__4731__auto___62433 = G__62434;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61288 = conformed_args__59440__auto__;
var map__61288__$1 = (((((!((map__61288 == null))))?(((((map__61288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61288):map__61288);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61288__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq61278){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61278));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62435 = arguments.length;
var i__4731__auto___62436 = (0);
while(true){
if((i__4731__auto___62436 < len__4730__auto___62435)){
args__4736__auto__.push((arguments[i__4731__auto___62436]));

var G__62437 = (i__4731__auto___62436 + (1));
i__4731__auto___62436 = G__62437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61300 = conformed_args__59440__auto__;
var map__61300__$1 = (((((!((map__61300 == null))))?(((((map__61300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61300):map__61300);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq61299){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61299));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62440 = arguments.length;
var i__4731__auto___62441 = (0);
while(true){
if((i__4731__auto___62441 < len__4730__auto___62440)){
args__4736__auto__.push((arguments[i__4731__auto___62441]));

var G__62442 = (i__4731__auto___62441 + (1));
i__4731__auto___62441 = G__62442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61313 = conformed_args__59440__auto__;
var map__61313__$1 = (((((!((map__61313 == null))))?(((((map__61313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61313):map__61313);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq61310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61310));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62444 = arguments.length;
var i__4731__auto___62445 = (0);
while(true){
if((i__4731__auto___62445 < len__4730__auto___62444)){
args__4736__auto__.push((arguments[i__4731__auto___62445]));

var G__62446 = (i__4731__auto___62445 + (1));
i__4731__auto___62445 = G__62446;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61329 = conformed_args__59440__auto__;
var map__61329__$1 = (((((!((map__61329 == null))))?(((((map__61329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61329):map__61329);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq61317){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61317));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62447 = arguments.length;
var i__4731__auto___62448 = (0);
while(true){
if((i__4731__auto___62448 < len__4730__auto___62447)){
args__4736__auto__.push((arguments[i__4731__auto___62448]));

var G__62449 = (i__4731__auto___62448 + (1));
i__4731__auto___62448 = G__62449;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61334 = conformed_args__59440__auto__;
var map__61334__$1 = (((((!((map__61334 == null))))?(((((map__61334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61334):map__61334);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq61333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61333));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62453 = arguments.length;
var i__4731__auto___62454 = (0);
while(true){
if((i__4731__auto___62454 < len__4730__auto___62453)){
args__4736__auto__.push((arguments[i__4731__auto___62454]));

var G__62455 = (i__4731__auto___62454 + (1));
i__4731__auto___62454 = G__62455;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61339 = conformed_args__59440__auto__;
var map__61339__$1 = (((((!((map__61339 == null))))?(((((map__61339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61339):map__61339);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq61336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61336));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62461 = arguments.length;
var i__4731__auto___62462 = (0);
while(true){
if((i__4731__auto___62462 < len__4730__auto___62461)){
args__4736__auto__.push((arguments[i__4731__auto___62462]));

var G__62463 = (i__4731__auto___62462 + (1));
i__4731__auto___62462 = G__62463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61351 = conformed_args__59440__auto__;
var map__61351__$1 = (((((!((map__61351 == null))))?(((((map__61351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61351):map__61351);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq61343){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61343));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62464 = arguments.length;
var i__4731__auto___62465 = (0);
while(true){
if((i__4731__auto___62465 < len__4730__auto___62464)){
args__4736__auto__.push((arguments[i__4731__auto___62465]));

var G__62466 = (i__4731__auto___62465 + (1));
i__4731__auto___62465 = G__62466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61365 = conformed_args__59440__auto__;
var map__61365__$1 = (((((!((map__61365 == null))))?(((((map__61365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61365):map__61365);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq61364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61364));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62469 = arguments.length;
var i__4731__auto___62470 = (0);
while(true){
if((i__4731__auto___62470 < len__4730__auto___62469)){
args__4736__auto__.push((arguments[i__4731__auto___62470]));

var G__62471 = (i__4731__auto___62470 + (1));
i__4731__auto___62470 = G__62471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61373 = conformed_args__59440__auto__;
var map__61373__$1 = (((((!((map__61373 == null))))?(((((map__61373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61373):map__61373);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq61370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61370));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62472 = arguments.length;
var i__4731__auto___62473 = (0);
while(true){
if((i__4731__auto___62473 < len__4730__auto___62472)){
args__4736__auto__.push((arguments[i__4731__auto___62473]));

var G__62474 = (i__4731__auto___62473 + (1));
i__4731__auto___62473 = G__62474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61379 = conformed_args__59440__auto__;
var map__61379__$1 = (((((!((map__61379 == null))))?(((((map__61379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61379):map__61379);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq61377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61377));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62475 = arguments.length;
var i__4731__auto___62476 = (0);
while(true){
if((i__4731__auto___62476 < len__4730__auto___62475)){
args__4736__auto__.push((arguments[i__4731__auto___62476]));

var G__62477 = (i__4731__auto___62476 + (1));
i__4731__auto___62476 = G__62477;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61384 = conformed_args__59440__auto__;
var map__61384__$1 = (((((!((map__61384 == null))))?(((((map__61384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61384):map__61384);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq61382){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61382));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62480 = arguments.length;
var i__4731__auto___62481 = (0);
while(true){
if((i__4731__auto___62481 < len__4730__auto___62480)){
args__4736__auto__.push((arguments[i__4731__auto___62481]));

var G__62482 = (i__4731__auto___62481 + (1));
i__4731__auto___62481 = G__62482;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61394 = conformed_args__59440__auto__;
var map__61394__$1 = (((((!((map__61394 == null))))?(((((map__61394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61394):map__61394);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq61390){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61390));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62483 = arguments.length;
var i__4731__auto___62484 = (0);
while(true){
if((i__4731__auto___62484 < len__4730__auto___62483)){
args__4736__auto__.push((arguments[i__4731__auto___62484]));

var G__62485 = (i__4731__auto___62484 + (1));
i__4731__auto___62484 = G__62485;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61405 = conformed_args__59440__auto__;
var map__61405__$1 = (((((!((map__61405 == null))))?(((((map__61405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61405):map__61405);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq61400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61400));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62489 = arguments.length;
var i__4731__auto___62490 = (0);
while(true){
if((i__4731__auto___62490 < len__4730__auto___62489)){
args__4736__auto__.push((arguments[i__4731__auto___62490]));

var G__62491 = (i__4731__auto___62490 + (1));
i__4731__auto___62490 = G__62491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61414 = conformed_args__59440__auto__;
var map__61414__$1 = (((((!((map__61414 == null))))?(((((map__61414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61414):map__61414);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq61408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61408));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62492 = arguments.length;
var i__4731__auto___62493 = (0);
while(true){
if((i__4731__auto___62493 < len__4730__auto___62492)){
args__4736__auto__.push((arguments[i__4731__auto___62493]));

var G__62494 = (i__4731__auto___62493 + (1));
i__4731__auto___62493 = G__62494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61423 = conformed_args__59440__auto__;
var map__61423__$1 = (((((!((map__61423 == null))))?(((((map__61423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61423):map__61423);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61423__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61423__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61423__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq61418){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61418));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62495 = arguments.length;
var i__4731__auto___62496 = (0);
while(true){
if((i__4731__auto___62496 < len__4730__auto___62495)){
args__4736__auto__.push((arguments[i__4731__auto___62496]));

var G__62497 = (i__4731__auto___62496 + (1));
i__4731__auto___62496 = G__62497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61430 = conformed_args__59440__auto__;
var map__61430__$1 = (((((!((map__61430 == null))))?(((((map__61430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61430):map__61430);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq61429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61429));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62500 = arguments.length;
var i__4731__auto___62501 = (0);
while(true){
if((i__4731__auto___62501 < len__4730__auto___62500)){
args__4736__auto__.push((arguments[i__4731__auto___62501]));

var G__62502 = (i__4731__auto___62501 + (1));
i__4731__auto___62501 = G__62502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61436 = conformed_args__59440__auto__;
var map__61436__$1 = (((((!((map__61436 == null))))?(((((map__61436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61436):map__61436);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq61432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61432));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62504 = arguments.length;
var i__4731__auto___62505 = (0);
while(true){
if((i__4731__auto___62505 < len__4730__auto___62504)){
args__4736__auto__.push((arguments[i__4731__auto___62505]));

var G__62506 = (i__4731__auto___62505 + (1));
i__4731__auto___62505 = G__62506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61444 = conformed_args__59440__auto__;
var map__61444__$1 = (((((!((map__61444 == null))))?(((((map__61444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61444):map__61444);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq61443){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61443));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62507 = arguments.length;
var i__4731__auto___62508 = (0);
while(true){
if((i__4731__auto___62508 < len__4730__auto___62507)){
args__4736__auto__.push((arguments[i__4731__auto___62508]));

var G__62509 = (i__4731__auto___62508 + (1));
i__4731__auto___62508 = G__62509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61449 = conformed_args__59440__auto__;
var map__61449__$1 = (((((!((map__61449 == null))))?(((((map__61449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61449):map__61449);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq61446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61446));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62511 = arguments.length;
var i__4731__auto___62512 = (0);
while(true){
if((i__4731__auto___62512 < len__4730__auto___62511)){
args__4736__auto__.push((arguments[i__4731__auto___62512]));

var G__62513 = (i__4731__auto___62512 + (1));
i__4731__auto___62512 = G__62513;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61458 = conformed_args__59440__auto__;
var map__61458__$1 = (((((!((map__61458 == null))))?(((((map__61458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61458):map__61458);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq61455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61455));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62514 = arguments.length;
var i__4731__auto___62515 = (0);
while(true){
if((i__4731__auto___62515 < len__4730__auto___62514)){
args__4736__auto__.push((arguments[i__4731__auto___62515]));

var G__62516 = (i__4731__auto___62515 + (1));
i__4731__auto___62515 = G__62516;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61462 = conformed_args__59440__auto__;
var map__61462__$1 = (((((!((map__61462 == null))))?(((((map__61462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61462):map__61462);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq61461){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61461));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62518 = arguments.length;
var i__4731__auto___62519 = (0);
while(true){
if((i__4731__auto___62519 < len__4730__auto___62518)){
args__4736__auto__.push((arguments[i__4731__auto___62519]));

var G__62520 = (i__4731__auto___62519 + (1));
i__4731__auto___62519 = G__62520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61465 = conformed_args__59440__auto__;
var map__61465__$1 = (((((!((map__61465 == null))))?(((((map__61465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61465):map__61465);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq61464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61464));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62521 = arguments.length;
var i__4731__auto___62522 = (0);
while(true){
if((i__4731__auto___62522 < len__4730__auto___62521)){
args__4736__auto__.push((arguments[i__4731__auto___62522]));

var G__62523 = (i__4731__auto___62522 + (1));
i__4731__auto___62522 = G__62523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61468 = conformed_args__59440__auto__;
var map__61468__$1 = (((((!((map__61468 == null))))?(((((map__61468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61468):map__61468);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq61467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61467));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62524 = arguments.length;
var i__4731__auto___62525 = (0);
while(true){
if((i__4731__auto___62525 < len__4730__auto___62524)){
args__4736__auto__.push((arguments[i__4731__auto___62525]));

var G__62526 = (i__4731__auto___62525 + (1));
i__4731__auto___62525 = G__62526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61471 = conformed_args__59440__auto__;
var map__61471__$1 = (((((!((map__61471 == null))))?(((((map__61471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61471):map__61471);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq61470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62527 = arguments.length;
var i__4731__auto___62528 = (0);
while(true){
if((i__4731__auto___62528 < len__4730__auto___62527)){
args__4736__auto__.push((arguments[i__4731__auto___62528]));

var G__62529 = (i__4731__auto___62528 + (1));
i__4731__auto___62528 = G__62529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61477 = conformed_args__59440__auto__;
var map__61477__$1 = (((((!((map__61477 == null))))?(((((map__61477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61477):map__61477);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq61476){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61476));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62530 = arguments.length;
var i__4731__auto___62531 = (0);
while(true){
if((i__4731__auto___62531 < len__4730__auto___62530)){
args__4736__auto__.push((arguments[i__4731__auto___62531]));

var G__62532 = (i__4731__auto___62531 + (1));
i__4731__auto___62531 = G__62532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61484 = conformed_args__59440__auto__;
var map__61484__$1 = (((((!((map__61484 == null))))?(((((map__61484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61484):map__61484);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq61482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61482));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62533 = arguments.length;
var i__4731__auto___62534 = (0);
while(true){
if((i__4731__auto___62534 < len__4730__auto___62533)){
args__4736__auto__.push((arguments[i__4731__auto___62534]));

var G__62535 = (i__4731__auto___62534 + (1));
i__4731__auto___62534 = G__62535;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61488 = conformed_args__59440__auto__;
var map__61488__$1 = (((((!((map__61488 == null))))?(((((map__61488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61488):map__61488);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq61486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61486));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62536 = arguments.length;
var i__4731__auto___62537 = (0);
while(true){
if((i__4731__auto___62537 < len__4730__auto___62536)){
args__4736__auto__.push((arguments[i__4731__auto___62537]));

var G__62538 = (i__4731__auto___62537 + (1));
i__4731__auto___62537 = G__62538;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61499 = conformed_args__59440__auto__;
var map__61499__$1 = (((((!((map__61499 == null))))?(((((map__61499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61499):map__61499);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq61494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61494));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62539 = arguments.length;
var i__4731__auto___62540 = (0);
while(true){
if((i__4731__auto___62540 < len__4730__auto___62539)){
args__4736__auto__.push((arguments[i__4731__auto___62540]));

var G__62541 = (i__4731__auto___62540 + (1));
i__4731__auto___62540 = G__62541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61506 = conformed_args__59440__auto__;
var map__61506__$1 = (((((!((map__61506 == null))))?(((((map__61506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61506):map__61506);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq61504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61504));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62542 = arguments.length;
var i__4731__auto___62543 = (0);
while(true){
if((i__4731__auto___62543 < len__4730__auto___62542)){
args__4736__auto__.push((arguments[i__4731__auto___62543]));

var G__62544 = (i__4731__auto___62543 + (1));
i__4731__auto___62543 = G__62544;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61519 = conformed_args__59440__auto__;
var map__61519__$1 = (((((!((map__61519 == null))))?(((((map__61519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61519):map__61519);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq61515){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61515));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62545 = arguments.length;
var i__4731__auto___62546 = (0);
while(true){
if((i__4731__auto___62546 < len__4730__auto___62545)){
args__4736__auto__.push((arguments[i__4731__auto___62546]));

var G__62547 = (i__4731__auto___62546 + (1));
i__4731__auto___62546 = G__62547;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61542 = conformed_args__59440__auto__;
var map__61542__$1 = (((((!((map__61542 == null))))?(((((map__61542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61542):map__61542);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq61533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61533));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62548 = arguments.length;
var i__4731__auto___62549 = (0);
while(true){
if((i__4731__auto___62549 < len__4730__auto___62548)){
args__4736__auto__.push((arguments[i__4731__auto___62549]));

var G__62550 = (i__4731__auto___62549 + (1));
i__4731__auto___62549 = G__62550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61555 = conformed_args__59440__auto__;
var map__61555__$1 = (((((!((map__61555 == null))))?(((((map__61555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61555):map__61555);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq61549){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61549));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62551 = arguments.length;
var i__4731__auto___62552 = (0);
while(true){
if((i__4731__auto___62552 < len__4730__auto___62551)){
args__4736__auto__.push((arguments[i__4731__auto___62552]));

var G__62553 = (i__4731__auto___62552 + (1));
i__4731__auto___62552 = G__62553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61566 = conformed_args__59440__auto__;
var map__61566__$1 = (((((!((map__61566 == null))))?(((((map__61566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61566):map__61566);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq61560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61560));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62554 = arguments.length;
var i__4731__auto___62555 = (0);
while(true){
if((i__4731__auto___62555 < len__4730__auto___62554)){
args__4736__auto__.push((arguments[i__4731__auto___62555]));

var G__62556 = (i__4731__auto___62555 + (1));
i__4731__auto___62555 = G__62556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61584 = conformed_args__59440__auto__;
var map__61584__$1 = (((((!((map__61584 == null))))?(((((map__61584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61584):map__61584);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq61575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61575));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62557 = arguments.length;
var i__4731__auto___62558 = (0);
while(true){
if((i__4731__auto___62558 < len__4730__auto___62557)){
args__4736__auto__.push((arguments[i__4731__auto___62558]));

var G__62559 = (i__4731__auto___62558 + (1));
i__4731__auto___62558 = G__62559;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61597 = conformed_args__59440__auto__;
var map__61597__$1 = (((((!((map__61597 == null))))?(((((map__61597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61597):map__61597);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq61596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61596));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62560 = arguments.length;
var i__4731__auto___62561 = (0);
while(true){
if((i__4731__auto___62561 < len__4730__auto___62560)){
args__4736__auto__.push((arguments[i__4731__auto___62561]));

var G__62562 = (i__4731__auto___62561 + (1));
i__4731__auto___62561 = G__62562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61609 = conformed_args__59440__auto__;
var map__61609__$1 = (((((!((map__61609 == null))))?(((((map__61609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61609):map__61609);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq61605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61605));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62563 = arguments.length;
var i__4731__auto___62564 = (0);
while(true){
if((i__4731__auto___62564 < len__4730__auto___62563)){
args__4736__auto__.push((arguments[i__4731__auto___62564]));

var G__62565 = (i__4731__auto___62564 + (1));
i__4731__auto___62564 = G__62565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61613 = conformed_args__59440__auto__;
var map__61613__$1 = (((((!((map__61613 == null))))?(((((map__61613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61613):map__61613);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq61612){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61612));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62566 = arguments.length;
var i__4731__auto___62567 = (0);
while(true){
if((i__4731__auto___62567 < len__4730__auto___62566)){
args__4736__auto__.push((arguments[i__4731__auto___62567]));

var G__62568 = (i__4731__auto___62567 + (1));
i__4731__auto___62567 = G__62568;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61618 = conformed_args__59440__auto__;
var map__61618__$1 = (((((!((map__61618 == null))))?(((((map__61618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61618):map__61618);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq61615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61615));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62569 = arguments.length;
var i__4731__auto___62570 = (0);
while(true){
if((i__4731__auto___62570 < len__4730__auto___62569)){
args__4736__auto__.push((arguments[i__4731__auto___62570]));

var G__62571 = (i__4731__auto___62570 + (1));
i__4731__auto___62570 = G__62571;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61630 = conformed_args__59440__auto__;
var map__61630__$1 = (((((!((map__61630 == null))))?(((((map__61630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61630):map__61630);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq61629){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61629));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62572 = arguments.length;
var i__4731__auto___62573 = (0);
while(true){
if((i__4731__auto___62573 < len__4730__auto___62572)){
args__4736__auto__.push((arguments[i__4731__auto___62573]));

var G__62574 = (i__4731__auto___62573 + (1));
i__4731__auto___62573 = G__62574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61642 = conformed_args__59440__auto__;
var map__61642__$1 = (((((!((map__61642 == null))))?(((((map__61642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61642):map__61642);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq61641){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61641));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62575 = arguments.length;
var i__4731__auto___62576 = (0);
while(true){
if((i__4731__auto___62576 < len__4730__auto___62575)){
args__4736__auto__.push((arguments[i__4731__auto___62576]));

var G__62577 = (i__4731__auto___62576 + (1));
i__4731__auto___62576 = G__62577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61660 = conformed_args__59440__auto__;
var map__61660__$1 = (((((!((map__61660 == null))))?(((((map__61660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61660):map__61660);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq61654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61654));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62578 = arguments.length;
var i__4731__auto___62579 = (0);
while(true){
if((i__4731__auto___62579 < len__4730__auto___62578)){
args__4736__auto__.push((arguments[i__4731__auto___62579]));

var G__62580 = (i__4731__auto___62579 + (1));
i__4731__auto___62579 = G__62580;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61676 = conformed_args__59440__auto__;
var map__61676__$1 = (((((!((map__61676 == null))))?(((((map__61676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61676):map__61676);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq61668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61668));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62581 = arguments.length;
var i__4731__auto___62582 = (0);
while(true){
if((i__4731__auto___62582 < len__4730__auto___62581)){
args__4736__auto__.push((arguments[i__4731__auto___62582]));

var G__62583 = (i__4731__auto___62582 + (1));
i__4731__auto___62582 = G__62583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61688 = conformed_args__59440__auto__;
var map__61688__$1 = (((((!((map__61688 == null))))?(((((map__61688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61688):map__61688);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq61681){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61681));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62584 = arguments.length;
var i__4731__auto___62585 = (0);
while(true){
if((i__4731__auto___62585 < len__4730__auto___62584)){
args__4736__auto__.push((arguments[i__4731__auto___62585]));

var G__62586 = (i__4731__auto___62585 + (1));
i__4731__auto___62585 = G__62586;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61695 = conformed_args__59440__auto__;
var map__61695__$1 = (((((!((map__61695 == null))))?(((((map__61695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61695):map__61695);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq61692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61692));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62587 = arguments.length;
var i__4731__auto___62588 = (0);
while(true){
if((i__4731__auto___62588 < len__4730__auto___62587)){
args__4736__auto__.push((arguments[i__4731__auto___62588]));

var G__62589 = (i__4731__auto___62588 + (1));
i__4731__auto___62588 = G__62589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61704 = conformed_args__59440__auto__;
var map__61704__$1 = (((((!((map__61704 == null))))?(((((map__61704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61704):map__61704);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq61701){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61701));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62590 = arguments.length;
var i__4731__auto___62591 = (0);
while(true){
if((i__4731__auto___62591 < len__4730__auto___62590)){
args__4736__auto__.push((arguments[i__4731__auto___62591]));

var G__62592 = (i__4731__auto___62591 + (1));
i__4731__auto___62591 = G__62592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61715 = conformed_args__59440__auto__;
var map__61715__$1 = (((((!((map__61715 == null))))?(((((map__61715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61715):map__61715);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq61714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61714));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62593 = arguments.length;
var i__4731__auto___62594 = (0);
while(true){
if((i__4731__auto___62594 < len__4730__auto___62593)){
args__4736__auto__.push((arguments[i__4731__auto___62594]));

var G__62595 = (i__4731__auto___62594 + (1));
i__4731__auto___62594 = G__62595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61718 = conformed_args__59440__auto__;
var map__61718__$1 = (((((!((map__61718 == null))))?(((((map__61718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61718):map__61718);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq61717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61717));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62596 = arguments.length;
var i__4731__auto___62597 = (0);
while(true){
if((i__4731__auto___62597 < len__4730__auto___62596)){
args__4736__auto__.push((arguments[i__4731__auto___62597]));

var G__62598 = (i__4731__auto___62597 + (1));
i__4731__auto___62597 = G__62598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61725 = conformed_args__59440__auto__;
var map__61725__$1 = (((((!((map__61725 == null))))?(((((map__61725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61725):map__61725);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq61722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61722));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62599 = arguments.length;
var i__4731__auto___62600 = (0);
while(true){
if((i__4731__auto___62600 < len__4730__auto___62599)){
args__4736__auto__.push((arguments[i__4731__auto___62600]));

var G__62601 = (i__4731__auto___62600 + (1));
i__4731__auto___62600 = G__62601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61732 = conformed_args__59440__auto__;
var map__61732__$1 = (((((!((map__61732 == null))))?(((((map__61732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61732):map__61732);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq61728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61728));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62602 = arguments.length;
var i__4731__auto___62603 = (0);
while(true){
if((i__4731__auto___62603 < len__4730__auto___62602)){
args__4736__auto__.push((arguments[i__4731__auto___62603]));

var G__62604 = (i__4731__auto___62603 + (1));
i__4731__auto___62603 = G__62604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61738 = conformed_args__59440__auto__;
var map__61738__$1 = (((((!((map__61738 == null))))?(((((map__61738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61738):map__61738);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq61735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61735));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62605 = arguments.length;
var i__4731__auto___62606 = (0);
while(true){
if((i__4731__auto___62606 < len__4730__auto___62605)){
args__4736__auto__.push((arguments[i__4731__auto___62606]));

var G__62607 = (i__4731__auto___62606 + (1));
i__4731__auto___62606 = G__62607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61745 = conformed_args__59440__auto__;
var map__61745__$1 = (((((!((map__61745 == null))))?(((((map__61745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61745):map__61745);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq61742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61742));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62608 = arguments.length;
var i__4731__auto___62609 = (0);
while(true){
if((i__4731__auto___62609 < len__4730__auto___62608)){
args__4736__auto__.push((arguments[i__4731__auto___62609]));

var G__62610 = (i__4731__auto___62609 + (1));
i__4731__auto___62609 = G__62610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61754 = conformed_args__59440__auto__;
var map__61754__$1 = (((((!((map__61754 == null))))?(((((map__61754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61754):map__61754);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq61753){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61753));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62611 = arguments.length;
var i__4731__auto___62612 = (0);
while(true){
if((i__4731__auto___62612 < len__4730__auto___62611)){
args__4736__auto__.push((arguments[i__4731__auto___62612]));

var G__62613 = (i__4731__auto___62612 + (1));
i__4731__auto___62612 = G__62613;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61761 = conformed_args__59440__auto__;
var map__61761__$1 = (((((!((map__61761 == null))))?(((((map__61761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61761):map__61761);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq61760){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61760));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62614 = arguments.length;
var i__4731__auto___62615 = (0);
while(true){
if((i__4731__auto___62615 < len__4730__auto___62614)){
args__4736__auto__.push((arguments[i__4731__auto___62615]));

var G__62616 = (i__4731__auto___62615 + (1));
i__4731__auto___62615 = G__62616;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61768 = conformed_args__59440__auto__;
var map__61768__$1 = (((((!((map__61768 == null))))?(((((map__61768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61768):map__61768);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq61767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61767));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62617 = arguments.length;
var i__4731__auto___62618 = (0);
while(true){
if((i__4731__auto___62618 < len__4730__auto___62617)){
args__4736__auto__.push((arguments[i__4731__auto___62618]));

var G__62619 = (i__4731__auto___62618 + (1));
i__4731__auto___62618 = G__62619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61775 = conformed_args__59440__auto__;
var map__61775__$1 = (((((!((map__61775 == null))))?(((((map__61775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61775):map__61775);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq61774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61774));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62620 = arguments.length;
var i__4731__auto___62621 = (0);
while(true){
if((i__4731__auto___62621 < len__4730__auto___62620)){
args__4736__auto__.push((arguments[i__4731__auto___62621]));

var G__62622 = (i__4731__auto___62621 + (1));
i__4731__auto___62621 = G__62622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61782 = conformed_args__59440__auto__;
var map__61782__$1 = (((((!((map__61782 == null))))?(((((map__61782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61782):map__61782);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq61781){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61781));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62623 = arguments.length;
var i__4731__auto___62624 = (0);
while(true){
if((i__4731__auto___62624 < len__4730__auto___62623)){
args__4736__auto__.push((arguments[i__4731__auto___62624]));

var G__62625 = (i__4731__auto___62624 + (1));
i__4731__auto___62624 = G__62625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61789 = conformed_args__59440__auto__;
var map__61789__$1 = (((((!((map__61789 == null))))?(((((map__61789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61789):map__61789);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq61784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61784));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62626 = arguments.length;
var i__4731__auto___62627 = (0);
while(true){
if((i__4731__auto___62627 < len__4730__auto___62626)){
args__4736__auto__.push((arguments[i__4731__auto___62627]));

var G__62628 = (i__4731__auto___62627 + (1));
i__4731__auto___62627 = G__62628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61798 = conformed_args__59440__auto__;
var map__61798__$1 = (((((!((map__61798 == null))))?(((((map__61798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61798):map__61798);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq61797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61797));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62629 = arguments.length;
var i__4731__auto___62630 = (0);
while(true){
if((i__4731__auto___62630 < len__4730__auto___62629)){
args__4736__auto__.push((arguments[i__4731__auto___62630]));

var G__62631 = (i__4731__auto___62630 + (1));
i__4731__auto___62630 = G__62631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61803 = conformed_args__59440__auto__;
var map__61803__$1 = (((((!((map__61803 == null))))?(((((map__61803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61803):map__61803);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq61801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61801));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62632 = arguments.length;
var i__4731__auto___62633 = (0);
while(true){
if((i__4731__auto___62633 < len__4730__auto___62632)){
args__4736__auto__.push((arguments[i__4731__auto___62633]));

var G__62634 = (i__4731__auto___62633 + (1));
i__4731__auto___62633 = G__62634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61811 = conformed_args__59440__auto__;
var map__61811__$1 = (((((!((map__61811 == null))))?(((((map__61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61811):map__61811);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq61809){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61809));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62635 = arguments.length;
var i__4731__auto___62636 = (0);
while(true){
if((i__4731__auto___62636 < len__4730__auto___62635)){
args__4736__auto__.push((arguments[i__4731__auto___62636]));

var G__62637 = (i__4731__auto___62636 + (1));
i__4731__auto___62636 = G__62637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61821 = conformed_args__59440__auto__;
var map__61821__$1 = (((((!((map__61821 == null))))?(((((map__61821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61821):map__61821);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq61816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61816));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62638 = arguments.length;
var i__4731__auto___62639 = (0);
while(true){
if((i__4731__auto___62639 < len__4730__auto___62638)){
args__4736__auto__.push((arguments[i__4731__auto___62639]));

var G__62640 = (i__4731__auto___62639 + (1));
i__4731__auto___62639 = G__62640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61829 = conformed_args__59440__auto__;
var map__61829__$1 = (((((!((map__61829 == null))))?(((((map__61829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61829):map__61829);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq61826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61826));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62641 = arguments.length;
var i__4731__auto___62642 = (0);
while(true){
if((i__4731__auto___62642 < len__4730__auto___62641)){
args__4736__auto__.push((arguments[i__4731__auto___62642]));

var G__62643 = (i__4731__auto___62642 + (1));
i__4731__auto___62642 = G__62643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61835 = conformed_args__59440__auto__;
var map__61835__$1 = (((((!((map__61835 == null))))?(((((map__61835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61835):map__61835);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq61832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61832));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62644 = arguments.length;
var i__4731__auto___62645 = (0);
while(true){
if((i__4731__auto___62645 < len__4730__auto___62644)){
args__4736__auto__.push((arguments[i__4731__auto___62645]));

var G__62646 = (i__4731__auto___62645 + (1));
i__4731__auto___62645 = G__62646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61839 = conformed_args__59440__auto__;
var map__61839__$1 = (((((!((map__61839 == null))))?(((((map__61839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61839):map__61839);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq61838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61838));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62647 = arguments.length;
var i__4731__auto___62648 = (0);
while(true){
if((i__4731__auto___62648 < len__4730__auto___62647)){
args__4736__auto__.push((arguments[i__4731__auto___62648]));

var G__62649 = (i__4731__auto___62648 + (1));
i__4731__auto___62648 = G__62649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61844 = conformed_args__59440__auto__;
var map__61844__$1 = (((((!((map__61844 == null))))?(((((map__61844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61844):map__61844);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq61843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61843));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62650 = arguments.length;
var i__4731__auto___62651 = (0);
while(true){
if((i__4731__auto___62651 < len__4730__auto___62650)){
args__4736__auto__.push((arguments[i__4731__auto___62651]));

var G__62652 = (i__4731__auto___62651 + (1));
i__4731__auto___62651 = G__62652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61848 = conformed_args__59440__auto__;
var map__61848__$1 = (((((!((map__61848 == null))))?(((((map__61848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61848):map__61848);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq61847){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61847));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62653 = arguments.length;
var i__4731__auto___62654 = (0);
while(true){
if((i__4731__auto___62654 < len__4730__auto___62653)){
args__4736__auto__.push((arguments[i__4731__auto___62654]));

var G__62655 = (i__4731__auto___62654 + (1));
i__4731__auto___62654 = G__62655;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61863 = conformed_args__59440__auto__;
var map__61863__$1 = (((((!((map__61863 == null))))?(((((map__61863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61863):map__61863);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq61850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61850));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62656 = arguments.length;
var i__4731__auto___62657 = (0);
while(true){
if((i__4731__auto___62657 < len__4730__auto___62656)){
args__4736__auto__.push((arguments[i__4731__auto___62657]));

var G__62658 = (i__4731__auto___62657 + (1));
i__4731__auto___62657 = G__62658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61901 = conformed_args__59440__auto__;
var map__61901__$1 = (((((!((map__61901 == null))))?(((((map__61901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61901):map__61901);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq61885){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61885));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62659 = arguments.length;
var i__4731__auto___62660 = (0);
while(true){
if((i__4731__auto___62660 < len__4730__auto___62659)){
args__4736__auto__.push((arguments[i__4731__auto___62660]));

var G__62661 = (i__4731__auto___62660 + (1));
i__4731__auto___62660 = G__62661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61921 = conformed_args__59440__auto__;
var map__61921__$1 = (((((!((map__61921 == null))))?(((((map__61921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61921):map__61921);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq61916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61916));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62662 = arguments.length;
var i__4731__auto___62663 = (0);
while(true){
if((i__4731__auto___62663 < len__4730__auto___62662)){
args__4736__auto__.push((arguments[i__4731__auto___62663]));

var G__62664 = (i__4731__auto___62663 + (1));
i__4731__auto___62663 = G__62664;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61933 = conformed_args__59440__auto__;
var map__61933__$1 = (((((!((map__61933 == null))))?(((((map__61933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61933):map__61933);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq61932){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61932));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62665 = arguments.length;
var i__4731__auto___62666 = (0);
while(true){
if((i__4731__auto___62666 < len__4730__auto___62665)){
args__4736__auto__.push((arguments[i__4731__auto___62666]));

var G__62667 = (i__4731__auto___62666 + (1));
i__4731__auto___62666 = G__62667;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61939 = conformed_args__59440__auto__;
var map__61939__$1 = (((((!((map__61939 == null))))?(((((map__61939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61939):map__61939);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq61938){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61938));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62668 = arguments.length;
var i__4731__auto___62669 = (0);
while(true){
if((i__4731__auto___62669 < len__4730__auto___62668)){
args__4736__auto__.push((arguments[i__4731__auto___62669]));

var G__62670 = (i__4731__auto___62669 + (1));
i__4731__auto___62669 = G__62670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61943 = conformed_args__59440__auto__;
var map__61943__$1 = (((((!((map__61943 == null))))?(((((map__61943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61943):map__61943);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq61942){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61942));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62671 = arguments.length;
var i__4731__auto___62672 = (0);
while(true){
if((i__4731__auto___62672 < len__4730__auto___62671)){
args__4736__auto__.push((arguments[i__4731__auto___62672]));

var G__62673 = (i__4731__auto___62672 + (1));
i__4731__auto___62672 = G__62673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61946 = conformed_args__59440__auto__;
var map__61946__$1 = (((((!((map__61946 == null))))?(((((map__61946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61946):map__61946);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq61945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61945));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62674 = arguments.length;
var i__4731__auto___62675 = (0);
while(true){
if((i__4731__auto___62675 < len__4730__auto___62674)){
args__4736__auto__.push((arguments[i__4731__auto___62675]));

var G__62676 = (i__4731__auto___62675 + (1));
i__4731__auto___62675 = G__62676;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61949 = conformed_args__59440__auto__;
var map__61949__$1 = (((((!((map__61949 == null))))?(((((map__61949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61949):map__61949);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq61948){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61948));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62677 = arguments.length;
var i__4731__auto___62678 = (0);
while(true){
if((i__4731__auto___62678 < len__4730__auto___62677)){
args__4736__auto__.push((arguments[i__4731__auto___62678]));

var G__62679 = (i__4731__auto___62678 + (1));
i__4731__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61952 = conformed_args__59440__auto__;
var map__61952__$1 = (((((!((map__61952 == null))))?(((((map__61952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61952):map__61952);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq61951){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61951));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62680 = arguments.length;
var i__4731__auto___62681 = (0);
while(true){
if((i__4731__auto___62681 < len__4730__auto___62680)){
args__4736__auto__.push((arguments[i__4731__auto___62681]));

var G__62682 = (i__4731__auto___62681 + (1));
i__4731__auto___62681 = G__62682;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61955 = conformed_args__59440__auto__;
var map__61955__$1 = (((((!((map__61955 == null))))?(((((map__61955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61955):map__61955);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq61954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61954));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62683 = arguments.length;
var i__4731__auto___62684 = (0);
while(true){
if((i__4731__auto___62684 < len__4730__auto___62683)){
args__4736__auto__.push((arguments[i__4731__auto___62684]));

var G__62685 = (i__4731__auto___62684 + (1));
i__4731__auto___62684 = G__62685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61958 = conformed_args__59440__auto__;
var map__61958__$1 = (((((!((map__61958 == null))))?(((((map__61958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61958):map__61958);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq61957){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61957));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62686 = arguments.length;
var i__4731__auto___62687 = (0);
while(true){
if((i__4731__auto___62687 < len__4730__auto___62686)){
args__4736__auto__.push((arguments[i__4731__auto___62687]));

var G__62688 = (i__4731__auto___62687 + (1));
i__4731__auto___62687 = G__62688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61961 = conformed_args__59440__auto__;
var map__61961__$1 = (((((!((map__61961 == null))))?(((((map__61961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61961):map__61961);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq61960){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61960));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62689 = arguments.length;
var i__4731__auto___62690 = (0);
while(true){
if((i__4731__auto___62690 < len__4730__auto___62689)){
args__4736__auto__.push((arguments[i__4731__auto___62690]));

var G__62691 = (i__4731__auto___62690 + (1));
i__4731__auto___62690 = G__62691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61964 = conformed_args__59440__auto__;
var map__61964__$1 = (((((!((map__61964 == null))))?(((((map__61964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61964):map__61964);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq61963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61963));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62692 = arguments.length;
var i__4731__auto___62693 = (0);
while(true){
if((i__4731__auto___62693 < len__4730__auto___62692)){
args__4736__auto__.push((arguments[i__4731__auto___62693]));

var G__62694 = (i__4731__auto___62693 + (1));
i__4731__auto___62693 = G__62694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61967 = conformed_args__59440__auto__;
var map__61967__$1 = (((((!((map__61967 == null))))?(((((map__61967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61967):map__61967);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq61966){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61966));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62695 = arguments.length;
var i__4731__auto___62696 = (0);
while(true){
if((i__4731__auto___62696 < len__4730__auto___62695)){
args__4736__auto__.push((arguments[i__4731__auto___62696]));

var G__62697 = (i__4731__auto___62696 + (1));
i__4731__auto___62696 = G__62697;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61970 = conformed_args__59440__auto__;
var map__61970__$1 = (((((!((map__61970 == null))))?(((((map__61970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61970):map__61970);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq61969){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61969));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62698 = arguments.length;
var i__4731__auto___62699 = (0);
while(true){
if((i__4731__auto___62699 < len__4730__auto___62698)){
args__4736__auto__.push((arguments[i__4731__auto___62699]));

var G__62700 = (i__4731__auto___62699 + (1));
i__4731__auto___62699 = G__62700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61973 = conformed_args__59440__auto__;
var map__61973__$1 = (((((!((map__61973 == null))))?(((((map__61973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61973):map__61973);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq61972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61972));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62701 = arguments.length;
var i__4731__auto___62702 = (0);
while(true){
if((i__4731__auto___62702 < len__4730__auto___62701)){
args__4736__auto__.push((arguments[i__4731__auto___62702]));

var G__62703 = (i__4731__auto___62702 + (1));
i__4731__auto___62702 = G__62703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61976 = conformed_args__59440__auto__;
var map__61976__$1 = (((((!((map__61976 == null))))?(((((map__61976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61976):map__61976);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq61975){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61975));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62704 = arguments.length;
var i__4731__auto___62705 = (0);
while(true){
if((i__4731__auto___62705 < len__4730__auto___62704)){
args__4736__auto__.push((arguments[i__4731__auto___62705]));

var G__62706 = (i__4731__auto___62705 + (1));
i__4731__auto___62705 = G__62706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61979 = conformed_args__59440__auto__;
var map__61979__$1 = (((((!((map__61979 == null))))?(((((map__61979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61979):map__61979);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq61978){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61978));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62707 = arguments.length;
var i__4731__auto___62708 = (0);
while(true){
if((i__4731__auto___62708 < len__4730__auto___62707)){
args__4736__auto__.push((arguments[i__4731__auto___62708]));

var G__62709 = (i__4731__auto___62708 + (1));
i__4731__auto___62708 = G__62709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61982 = conformed_args__59440__auto__;
var map__61982__$1 = (((((!((map__61982 == null))))?(((((map__61982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61982):map__61982);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq61981){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61981));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62710 = arguments.length;
var i__4731__auto___62711 = (0);
while(true){
if((i__4731__auto___62711 < len__4730__auto___62710)){
args__4736__auto__.push((arguments[i__4731__auto___62711]));

var G__62712 = (i__4731__auto___62711 + (1));
i__4731__auto___62711 = G__62712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61985 = conformed_args__59440__auto__;
var map__61985__$1 = (((((!((map__61985 == null))))?(((((map__61985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61985):map__61985);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq61984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61984));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62713 = arguments.length;
var i__4731__auto___62714 = (0);
while(true){
if((i__4731__auto___62714 < len__4730__auto___62713)){
args__4736__auto__.push((arguments[i__4731__auto___62714]));

var G__62715 = (i__4731__auto___62714 + (1));
i__4731__auto___62714 = G__62715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61988 = conformed_args__59440__auto__;
var map__61988__$1 = (((((!((map__61988 == null))))?(((((map__61988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61988):map__61988);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq61987){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61987));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62716 = arguments.length;
var i__4731__auto___62717 = (0);
while(true){
if((i__4731__auto___62717 < len__4730__auto___62716)){
args__4736__auto__.push((arguments[i__4731__auto___62717]));

var G__62718 = (i__4731__auto___62717 + (1));
i__4731__auto___62717 = G__62718;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61991 = conformed_args__59440__auto__;
var map__61991__$1 = (((((!((map__61991 == null))))?(((((map__61991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61991):map__61991);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq61990){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61990));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62719 = arguments.length;
var i__4731__auto___62720 = (0);
while(true){
if((i__4731__auto___62720 < len__4730__auto___62719)){
args__4736__auto__.push((arguments[i__4731__auto___62720]));

var G__62721 = (i__4731__auto___62720 + (1));
i__4731__auto___62720 = G__62721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61994 = conformed_args__59440__auto__;
var map__61994__$1 = (((((!((map__61994 == null))))?(((((map__61994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61994):map__61994);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq61993){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61993));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62722 = arguments.length;
var i__4731__auto___62723 = (0);
while(true){
if((i__4731__auto___62723 < len__4730__auto___62722)){
args__4736__auto__.push((arguments[i__4731__auto___62723]));

var G__62724 = (i__4731__auto___62723 + (1));
i__4731__auto___62723 = G__62724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61997 = conformed_args__59440__auto__;
var map__61997__$1 = (((((!((map__61997 == null))))?(((((map__61997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61997):map__61997);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq61996){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61996));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62725 = arguments.length;
var i__4731__auto___62726 = (0);
while(true){
if((i__4731__auto___62726 < len__4730__auto___62725)){
args__4736__auto__.push((arguments[i__4731__auto___62726]));

var G__62727 = (i__4731__auto___62726 + (1));
i__4731__auto___62726 = G__62727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62000 = conformed_args__59440__auto__;
var map__62000__$1 = (((((!((map__62000 == null))))?(((((map__62000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62000):map__62000);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq61999){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61999));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62728 = arguments.length;
var i__4731__auto___62729 = (0);
while(true){
if((i__4731__auto___62729 < len__4730__auto___62728)){
args__4736__auto__.push((arguments[i__4731__auto___62729]));

var G__62730 = (i__4731__auto___62729 + (1));
i__4731__auto___62729 = G__62730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62003 = conformed_args__59440__auto__;
var map__62003__$1 = (((((!((map__62003 == null))))?(((((map__62003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62003):map__62003);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq62002){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62002));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62731 = arguments.length;
var i__4731__auto___62732 = (0);
while(true){
if((i__4731__auto___62732 < len__4730__auto___62731)){
args__4736__auto__.push((arguments[i__4731__auto___62732]));

var G__62733 = (i__4731__auto___62732 + (1));
i__4731__auto___62732 = G__62733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62006 = conformed_args__59440__auto__;
var map__62006__$1 = (((((!((map__62006 == null))))?(((((map__62006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62006):map__62006);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq62005){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62005));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62734 = arguments.length;
var i__4731__auto___62735 = (0);
while(true){
if((i__4731__auto___62735 < len__4730__auto___62734)){
args__4736__auto__.push((arguments[i__4731__auto___62735]));

var G__62736 = (i__4731__auto___62735 + (1));
i__4731__auto___62735 = G__62736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62009 = conformed_args__59440__auto__;
var map__62009__$1 = (((((!((map__62009 == null))))?(((((map__62009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62009):map__62009);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq62008){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62008));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62737 = arguments.length;
var i__4731__auto___62738 = (0);
while(true){
if((i__4731__auto___62738 < len__4730__auto___62737)){
args__4736__auto__.push((arguments[i__4731__auto___62738]));

var G__62739 = (i__4731__auto___62738 + (1));
i__4731__auto___62738 = G__62739;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62012 = conformed_args__59440__auto__;
var map__62012__$1 = (((((!((map__62012 == null))))?(((((map__62012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62012):map__62012);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq62011){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62011));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62740 = arguments.length;
var i__4731__auto___62741 = (0);
while(true){
if((i__4731__auto___62741 < len__4730__auto___62740)){
args__4736__auto__.push((arguments[i__4731__auto___62741]));

var G__62742 = (i__4731__auto___62741 + (1));
i__4731__auto___62741 = G__62742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62015 = conformed_args__59440__auto__;
var map__62015__$1 = (((((!((map__62015 == null))))?(((((map__62015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62015):map__62015);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq62014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62014));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62743 = arguments.length;
var i__4731__auto___62744 = (0);
while(true){
if((i__4731__auto___62744 < len__4730__auto___62743)){
args__4736__auto__.push((arguments[i__4731__auto___62744]));

var G__62745 = (i__4731__auto___62744 + (1));
i__4731__auto___62744 = G__62745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62022 = conformed_args__59440__auto__;
var map__62022__$1 = (((((!((map__62022 == null))))?(((((map__62022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62022):map__62022);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq62020){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62020));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62746 = arguments.length;
var i__4731__auto___62747 = (0);
while(true){
if((i__4731__auto___62747 < len__4730__auto___62746)){
args__4736__auto__.push((arguments[i__4731__auto___62747]));

var G__62748 = (i__4731__auto___62747 + (1));
i__4731__auto___62747 = G__62748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62029 = conformed_args__59440__auto__;
var map__62029__$1 = (((((!((map__62029 == null))))?(((((map__62029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62029):map__62029);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq62024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62024));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62749 = arguments.length;
var i__4731__auto___62750 = (0);
while(true){
if((i__4731__auto___62750 < len__4730__auto___62749)){
args__4736__auto__.push((arguments[i__4731__auto___62750]));

var G__62751 = (i__4731__auto___62750 + (1));
i__4731__auto___62750 = G__62751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62032 = conformed_args__59440__auto__;
var map__62032__$1 = (((((!((map__62032 == null))))?(((((map__62032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62032):map__62032);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq62031){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62031));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62752 = arguments.length;
var i__4731__auto___62753 = (0);
while(true){
if((i__4731__auto___62753 < len__4730__auto___62752)){
args__4736__auto__.push((arguments[i__4731__auto___62753]));

var G__62754 = (i__4731__auto___62753 + (1));
i__4731__auto___62753 = G__62754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62035 = conformed_args__59440__auto__;
var map__62035__$1 = (((((!((map__62035 == null))))?(((((map__62035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62035):map__62035);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq62034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62034));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62755 = arguments.length;
var i__4731__auto___62756 = (0);
while(true){
if((i__4731__auto___62756 < len__4730__auto___62755)){
args__4736__auto__.push((arguments[i__4731__auto___62756]));

var G__62757 = (i__4731__auto___62756 + (1));
i__4731__auto___62756 = G__62757;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62043 = conformed_args__59440__auto__;
var map__62043__$1 = (((((!((map__62043 == null))))?(((((map__62043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62043):map__62043);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq62039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62039));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62758 = arguments.length;
var i__4731__auto___62759 = (0);
while(true){
if((i__4731__auto___62759 < len__4730__auto___62758)){
args__4736__auto__.push((arguments[i__4731__auto___62759]));

var G__62760 = (i__4731__auto___62759 + (1));
i__4731__auto___62759 = G__62760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62053 = conformed_args__59440__auto__;
var map__62053__$1 = (((((!((map__62053 == null))))?(((((map__62053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62053):map__62053);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq62046){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62046));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62761 = arguments.length;
var i__4731__auto___62762 = (0);
while(true){
if((i__4731__auto___62762 < len__4730__auto___62761)){
args__4736__auto__.push((arguments[i__4731__auto___62762]));

var G__62763 = (i__4731__auto___62762 + (1));
i__4731__auto___62762 = G__62763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62063 = conformed_args__59440__auto__;
var map__62063__$1 = (((((!((map__62063 == null))))?(((((map__62063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62063):map__62063);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq62062){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62062));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62764 = arguments.length;
var i__4731__auto___62765 = (0);
while(true){
if((i__4731__auto___62765 < len__4730__auto___62764)){
args__4736__auto__.push((arguments[i__4731__auto___62765]));

var G__62766 = (i__4731__auto___62765 + (1));
i__4731__auto___62765 = G__62766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62072 = conformed_args__59440__auto__;
var map__62072__$1 = (((((!((map__62072 == null))))?(((((map__62072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62072):map__62072);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62072__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62072__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62072__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq62068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62068));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62767 = arguments.length;
var i__4731__auto___62768 = (0);
while(true){
if((i__4731__auto___62768 < len__4730__auto___62767)){
args__4736__auto__.push((arguments[i__4731__auto___62768]));

var G__62769 = (i__4731__auto___62768 + (1));
i__4731__auto___62768 = G__62769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62078 = conformed_args__59440__auto__;
var map__62078__$1 = (((((!((map__62078 == null))))?(((((map__62078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62078):map__62078);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq62075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62075));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62770 = arguments.length;
var i__4731__auto___62771 = (0);
while(true){
if((i__4731__auto___62771 < len__4730__auto___62770)){
args__4736__auto__.push((arguments[i__4731__auto___62771]));

var G__62772 = (i__4731__auto___62771 + (1));
i__4731__auto___62771 = G__62772;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62086 = conformed_args__59440__auto__;
var map__62086__$1 = (((((!((map__62086 == null))))?(((((map__62086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62086):map__62086);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq62083){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62083));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62773 = arguments.length;
var i__4731__auto___62774 = (0);
while(true){
if((i__4731__auto___62774 < len__4730__auto___62773)){
args__4736__auto__.push((arguments[i__4731__auto___62774]));

var G__62775 = (i__4731__auto___62774 + (1));
i__4731__auto___62774 = G__62775;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62091 = conformed_args__59440__auto__;
var map__62091__$1 = (((((!((map__62091 == null))))?(((((map__62091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62091):map__62091);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq62090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62090));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62776 = arguments.length;
var i__4731__auto___62777 = (0);
while(true){
if((i__4731__auto___62777 < len__4730__auto___62776)){
args__4736__auto__.push((arguments[i__4731__auto___62777]));

var G__62778 = (i__4731__auto___62777 + (1));
i__4731__auto___62777 = G__62778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62097 = conformed_args__59440__auto__;
var map__62097__$1 = (((((!((map__62097 == null))))?(((((map__62097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62097):map__62097);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq62094){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62094));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62779 = arguments.length;
var i__4731__auto___62780 = (0);
while(true){
if((i__4731__auto___62780 < len__4730__auto___62779)){
args__4736__auto__.push((arguments[i__4731__auto___62780]));

var G__62781 = (i__4731__auto___62780 + (1));
i__4731__auto___62780 = G__62781;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62103 = conformed_args__59440__auto__;
var map__62103__$1 = (((((!((map__62103 == null))))?(((((map__62103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62103):map__62103);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq62102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62102));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62782 = arguments.length;
var i__4731__auto___62783 = (0);
while(true){
if((i__4731__auto___62783 < len__4730__auto___62782)){
args__4736__auto__.push((arguments[i__4731__auto___62783]));

var G__62784 = (i__4731__auto___62783 + (1));
i__4731__auto___62783 = G__62784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62108 = conformed_args__59440__auto__;
var map__62108__$1 = (((((!((map__62108 == null))))?(((((map__62108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62108):map__62108);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq62107){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62107));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62785 = arguments.length;
var i__4731__auto___62786 = (0);
while(true){
if((i__4731__auto___62786 < len__4730__auto___62785)){
args__4736__auto__.push((arguments[i__4731__auto___62786]));

var G__62787 = (i__4731__auto___62786 + (1));
i__4731__auto___62786 = G__62787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62113 = conformed_args__59440__auto__;
var map__62113__$1 = (((((!((map__62113 == null))))?(((((map__62113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62113):map__62113);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq62112){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62112));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62788 = arguments.length;
var i__4731__auto___62789 = (0);
while(true){
if((i__4731__auto___62789 < len__4730__auto___62788)){
args__4736__auto__.push((arguments[i__4731__auto___62789]));

var G__62790 = (i__4731__auto___62789 + (1));
i__4731__auto___62789 = G__62790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62116 = conformed_args__59440__auto__;
var map__62116__$1 = (((((!((map__62116 == null))))?(((((map__62116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62116):map__62116);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq62115){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62115));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62791 = arguments.length;
var i__4731__auto___62792 = (0);
while(true){
if((i__4731__auto___62792 < len__4730__auto___62791)){
args__4736__auto__.push((arguments[i__4731__auto___62792]));

var G__62793 = (i__4731__auto___62792 + (1));
i__4731__auto___62792 = G__62793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62119 = conformed_args__59440__auto__;
var map__62119__$1 = (((((!((map__62119 == null))))?(((((map__62119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62119):map__62119);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq62118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62118));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62794 = arguments.length;
var i__4731__auto___62795 = (0);
while(true){
if((i__4731__auto___62795 < len__4730__auto___62794)){
args__4736__auto__.push((arguments[i__4731__auto___62795]));

var G__62796 = (i__4731__auto___62795 + (1));
i__4731__auto___62795 = G__62796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62122 = conformed_args__59440__auto__;
var map__62122__$1 = (((((!((map__62122 == null))))?(((((map__62122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62122):map__62122);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq62121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62121));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62797 = arguments.length;
var i__4731__auto___62798 = (0);
while(true){
if((i__4731__auto___62798 < len__4730__auto___62797)){
args__4736__auto__.push((arguments[i__4731__auto___62798]));

var G__62799 = (i__4731__auto___62798 + (1));
i__4731__auto___62798 = G__62799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62126 = conformed_args__59440__auto__;
var map__62126__$1 = (((((!((map__62126 == null))))?(((((map__62126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62126):map__62126);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62126__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62125){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62125));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62800 = arguments.length;
var i__4731__auto___62801 = (0);
while(true){
if((i__4731__auto___62801 < len__4730__auto___62800)){
args__4736__auto__.push((arguments[i__4731__auto___62801]));

var G__62802 = (i__4731__auto___62801 + (1));
i__4731__auto___62801 = G__62802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62129 = conformed_args__59440__auto__;
var map__62129__$1 = (((((!((map__62129 == null))))?(((((map__62129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62129):map__62129);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq62128){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62128));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62803 = arguments.length;
var i__4731__auto___62804 = (0);
while(true){
if((i__4731__auto___62804 < len__4730__auto___62803)){
args__4736__auto__.push((arguments[i__4731__auto___62804]));

var G__62805 = (i__4731__auto___62804 + (1));
i__4731__auto___62804 = G__62805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62132 = conformed_args__59440__auto__;
var map__62132__$1 = (((((!((map__62132 == null))))?(((((map__62132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62132):map__62132);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62132__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq62131){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62131));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62806 = arguments.length;
var i__4731__auto___62807 = (0);
while(true){
if((i__4731__auto___62807 < len__4730__auto___62806)){
args__4736__auto__.push((arguments[i__4731__auto___62807]));

var G__62808 = (i__4731__auto___62807 + (1));
i__4731__auto___62807 = G__62808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62136 = conformed_args__59440__auto__;
var map__62136__$1 = (((((!((map__62136 == null))))?(((((map__62136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62136):map__62136);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq62134){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62134));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62809 = arguments.length;
var i__4731__auto___62810 = (0);
while(true){
if((i__4731__auto___62810 < len__4730__auto___62809)){
args__4736__auto__.push((arguments[i__4731__auto___62810]));

var G__62811 = (i__4731__auto___62810 + (1));
i__4731__auto___62810 = G__62811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62139 = conformed_args__59440__auto__;
var map__62139__$1 = (((((!((map__62139 == null))))?(((((map__62139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62139):map__62139);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq62138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62138));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62812 = arguments.length;
var i__4731__auto___62813 = (0);
while(true){
if((i__4731__auto___62813 < len__4730__auto___62812)){
args__4736__auto__.push((arguments[i__4731__auto___62813]));

var G__62814 = (i__4731__auto___62813 + (1));
i__4731__auto___62813 = G__62814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62142 = conformed_args__59440__auto__;
var map__62142__$1 = (((((!((map__62142 == null))))?(((((map__62142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62142):map__62142);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62142__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62142__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62142__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq62141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62141));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62815 = arguments.length;
var i__4731__auto___62816 = (0);
while(true){
if((i__4731__auto___62816 < len__4730__auto___62815)){
args__4736__auto__.push((arguments[i__4731__auto___62816]));

var G__62817 = (i__4731__auto___62816 + (1));
i__4731__auto___62816 = G__62817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62145 = conformed_args__59440__auto__;
var map__62145__$1 = (((((!((map__62145 == null))))?(((((map__62145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62145):map__62145);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62144){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62144));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62818 = arguments.length;
var i__4731__auto___62819 = (0);
while(true){
if((i__4731__auto___62819 < len__4730__auto___62818)){
args__4736__auto__.push((arguments[i__4731__auto___62819]));

var G__62820 = (i__4731__auto___62819 + (1));
i__4731__auto___62819 = G__62820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62149 = conformed_args__59440__auto__;
var map__62149__$1 = (((((!((map__62149 == null))))?(((((map__62149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62149):map__62149);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq62148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62148));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62821 = arguments.length;
var i__4731__auto___62822 = (0);
while(true){
if((i__4731__auto___62822 < len__4730__auto___62821)){
args__4736__auto__.push((arguments[i__4731__auto___62822]));

var G__62823 = (i__4731__auto___62822 + (1));
i__4731__auto___62822 = G__62823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62153 = conformed_args__59440__auto__;
var map__62153__$1 = (((((!((map__62153 == null))))?(((((map__62153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62153):map__62153);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq62151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62151));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62824 = arguments.length;
var i__4731__auto___62825 = (0);
while(true){
if((i__4731__auto___62825 < len__4730__auto___62824)){
args__4736__auto__.push((arguments[i__4731__auto___62825]));

var G__62826 = (i__4731__auto___62825 + (1));
i__4731__auto___62825 = G__62826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62156 = conformed_args__59440__auto__;
var map__62156__$1 = (((((!((map__62156 == null))))?(((((map__62156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62156):map__62156);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq62155){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62155));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62827 = arguments.length;
var i__4731__auto___62828 = (0);
while(true){
if((i__4731__auto___62828 < len__4730__auto___62827)){
args__4736__auto__.push((arguments[i__4731__auto___62828]));

var G__62829 = (i__4731__auto___62828 + (1));
i__4731__auto___62828 = G__62829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62159 = conformed_args__59440__auto__;
var map__62159__$1 = (((((!((map__62159 == null))))?(((((map__62159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62159):map__62159);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq62158){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62158));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62830 = arguments.length;
var i__4731__auto___62831 = (0);
while(true){
if((i__4731__auto___62831 < len__4730__auto___62830)){
args__4736__auto__.push((arguments[i__4731__auto___62831]));

var G__62832 = (i__4731__auto___62831 + (1));
i__4731__auto___62831 = G__62832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62162 = conformed_args__59440__auto__;
var map__62162__$1 = (((((!((map__62162 == null))))?(((((map__62162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62162):map__62162);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq62161){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62161));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62833 = arguments.length;
var i__4731__auto___62834 = (0);
while(true){
if((i__4731__auto___62834 < len__4730__auto___62833)){
args__4736__auto__.push((arguments[i__4731__auto___62834]));

var G__62835 = (i__4731__auto___62834 + (1));
i__4731__auto___62834 = G__62835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62165 = conformed_args__59440__auto__;
var map__62165__$1 = (((((!((map__62165 == null))))?(((((map__62165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62165):map__62165);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq62164){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62164));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62836 = arguments.length;
var i__4731__auto___62837 = (0);
while(true){
if((i__4731__auto___62837 < len__4730__auto___62836)){
args__4736__auto__.push((arguments[i__4731__auto___62837]));

var G__62838 = (i__4731__auto___62837 + (1));
i__4731__auto___62837 = G__62838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62168 = conformed_args__59440__auto__;
var map__62168__$1 = (((((!((map__62168 == null))))?(((((map__62168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62168):map__62168);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq62167){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62167));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62839 = arguments.length;
var i__4731__auto___62840 = (0);
while(true){
if((i__4731__auto___62840 < len__4730__auto___62839)){
args__4736__auto__.push((arguments[i__4731__auto___62840]));

var G__62841 = (i__4731__auto___62840 + (1));
i__4731__auto___62840 = G__62841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62171 = conformed_args__59440__auto__;
var map__62171__$1 = (((((!((map__62171 == null))))?(((((map__62171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62171):map__62171);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq62170){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62170));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62842 = arguments.length;
var i__4731__auto___62843 = (0);
while(true){
if((i__4731__auto___62843 < len__4730__auto___62842)){
args__4736__auto__.push((arguments[i__4731__auto___62843]));

var G__62844 = (i__4731__auto___62843 + (1));
i__4731__auto___62843 = G__62844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62174 = conformed_args__59440__auto__;
var map__62174__$1 = (((((!((map__62174 == null))))?(((((map__62174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62174):map__62174);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq62173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62173));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62845 = arguments.length;
var i__4731__auto___62846 = (0);
while(true){
if((i__4731__auto___62846 < len__4730__auto___62845)){
args__4736__auto__.push((arguments[i__4731__auto___62846]));

var G__62847 = (i__4731__auto___62846 + (1));
i__4731__auto___62846 = G__62847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62177 = conformed_args__59440__auto__;
var map__62177__$1 = (((((!((map__62177 == null))))?(((((map__62177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62177):map__62177);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq62176){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62176));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62848 = arguments.length;
var i__4731__auto___62849 = (0);
while(true){
if((i__4731__auto___62849 < len__4730__auto___62848)){
args__4736__auto__.push((arguments[i__4731__auto___62849]));

var G__62850 = (i__4731__auto___62849 + (1));
i__4731__auto___62849 = G__62850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62180 = conformed_args__59440__auto__;
var map__62180__$1 = (((((!((map__62180 == null))))?(((((map__62180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62180):map__62180);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq62179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62179));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62851 = arguments.length;
var i__4731__auto___62852 = (0);
while(true){
if((i__4731__auto___62852 < len__4730__auto___62851)){
args__4736__auto__.push((arguments[i__4731__auto___62852]));

var G__62853 = (i__4731__auto___62852 + (1));
i__4731__auto___62852 = G__62853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62183 = conformed_args__59440__auto__;
var map__62183__$1 = (((((!((map__62183 == null))))?(((((map__62183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62183):map__62183);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq62182){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62182));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62854 = arguments.length;
var i__4731__auto___62855 = (0);
while(true){
if((i__4731__auto___62855 < len__4730__auto___62854)){
args__4736__auto__.push((arguments[i__4731__auto___62855]));

var G__62856 = (i__4731__auto___62855 + (1));
i__4731__auto___62855 = G__62856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62186 = conformed_args__59440__auto__;
var map__62186__$1 = (((((!((map__62186 == null))))?(((((map__62186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62186):map__62186);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq62185){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62185));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62857 = arguments.length;
var i__4731__auto___62858 = (0);
while(true){
if((i__4731__auto___62858 < len__4730__auto___62857)){
args__4736__auto__.push((arguments[i__4731__auto___62858]));

var G__62859 = (i__4731__auto___62858 + (1));
i__4731__auto___62858 = G__62859;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62189 = conformed_args__59440__auto__;
var map__62189__$1 = (((((!((map__62189 == null))))?(((((map__62189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62189):map__62189);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq62188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62188));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62860 = arguments.length;
var i__4731__auto___62861 = (0);
while(true){
if((i__4731__auto___62861 < len__4730__auto___62860)){
args__4736__auto__.push((arguments[i__4731__auto___62861]));

var G__62862 = (i__4731__auto___62861 + (1));
i__4731__auto___62861 = G__62862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62192 = conformed_args__59440__auto__;
var map__62192__$1 = (((((!((map__62192 == null))))?(((((map__62192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62192):map__62192);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq62191){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62191));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62863 = arguments.length;
var i__4731__auto___62864 = (0);
while(true){
if((i__4731__auto___62864 < len__4730__auto___62863)){
args__4736__auto__.push((arguments[i__4731__auto___62864]));

var G__62865 = (i__4731__auto___62864 + (1));
i__4731__auto___62864 = G__62865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62195 = conformed_args__59440__auto__;
var map__62195__$1 = (((((!((map__62195 == null))))?(((((map__62195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62195):map__62195);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq62194){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62194));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62866 = arguments.length;
var i__4731__auto___62867 = (0);
while(true){
if((i__4731__auto___62867 < len__4730__auto___62866)){
args__4736__auto__.push((arguments[i__4731__auto___62867]));

var G__62868 = (i__4731__auto___62867 + (1));
i__4731__auto___62867 = G__62868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62198 = conformed_args__59440__auto__;
var map__62198__$1 = (((((!((map__62198 == null))))?(((((map__62198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62198):map__62198);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq62197){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62197));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62869 = arguments.length;
var i__4731__auto___62870 = (0);
while(true){
if((i__4731__auto___62870 < len__4730__auto___62869)){
args__4736__auto__.push((arguments[i__4731__auto___62870]));

var G__62871 = (i__4731__auto___62870 + (1));
i__4731__auto___62870 = G__62871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62201 = conformed_args__59440__auto__;
var map__62201__$1 = (((((!((map__62201 == null))))?(((((map__62201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62201):map__62201);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq62200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62200));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62872 = arguments.length;
var i__4731__auto___62873 = (0);
while(true){
if((i__4731__auto___62873 < len__4730__auto___62872)){
args__4736__auto__.push((arguments[i__4731__auto___62873]));

var G__62874 = (i__4731__auto___62873 + (1));
i__4731__auto___62873 = G__62874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62204 = conformed_args__59440__auto__;
var map__62204__$1 = (((((!((map__62204 == null))))?(((((map__62204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62204):map__62204);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq62203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62203));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62875 = arguments.length;
var i__4731__auto___62876 = (0);
while(true){
if((i__4731__auto___62876 < len__4730__auto___62875)){
args__4736__auto__.push((arguments[i__4731__auto___62876]));

var G__62877 = (i__4731__auto___62876 + (1));
i__4731__auto___62876 = G__62877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62207 = conformed_args__59440__auto__;
var map__62207__$1 = (((((!((map__62207 == null))))?(((((map__62207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62207):map__62207);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq62206){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62206));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62878 = arguments.length;
var i__4731__auto___62879 = (0);
while(true){
if((i__4731__auto___62879 < len__4730__auto___62878)){
args__4736__auto__.push((arguments[i__4731__auto___62879]));

var G__62880 = (i__4731__auto___62879 + (1));
i__4731__auto___62879 = G__62880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62210 = conformed_args__59440__auto__;
var map__62210__$1 = (((((!((map__62210 == null))))?(((((map__62210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62210):map__62210);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq62209){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62209));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62881 = arguments.length;
var i__4731__auto___62882 = (0);
while(true){
if((i__4731__auto___62882 < len__4730__auto___62881)){
args__4736__auto__.push((arguments[i__4731__auto___62882]));

var G__62883 = (i__4731__auto___62882 + (1));
i__4731__auto___62882 = G__62883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62213 = conformed_args__59440__auto__;
var map__62213__$1 = (((((!((map__62213 == null))))?(((((map__62213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62213):map__62213);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq62212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62212));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62884 = arguments.length;
var i__4731__auto___62885 = (0);
while(true){
if((i__4731__auto___62885 < len__4730__auto___62884)){
args__4736__auto__.push((arguments[i__4731__auto___62885]));

var G__62886 = (i__4731__auto___62885 + (1));
i__4731__auto___62885 = G__62886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62216 = conformed_args__59440__auto__;
var map__62216__$1 = (((((!((map__62216 == null))))?(((((map__62216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62216):map__62216);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq62215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62215));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62887 = arguments.length;
var i__4731__auto___62888 = (0);
while(true){
if((i__4731__auto___62888 < len__4730__auto___62887)){
args__4736__auto__.push((arguments[i__4731__auto___62888]));

var G__62889 = (i__4731__auto___62888 + (1));
i__4731__auto___62888 = G__62889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62219 = conformed_args__59440__auto__;
var map__62219__$1 = (((((!((map__62219 == null))))?(((((map__62219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62219):map__62219);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq62218){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62218));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62890 = arguments.length;
var i__4731__auto___62891 = (0);
while(true){
if((i__4731__auto___62891 < len__4730__auto___62890)){
args__4736__auto__.push((arguments[i__4731__auto___62891]));

var G__62892 = (i__4731__auto___62891 + (1));
i__4731__auto___62891 = G__62892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62222 = conformed_args__59440__auto__;
var map__62222__$1 = (((((!((map__62222 == null))))?(((((map__62222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62222):map__62222);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq62221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62221));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62893 = arguments.length;
var i__4731__auto___62894 = (0);
while(true){
if((i__4731__auto___62894 < len__4730__auto___62893)){
args__4736__auto__.push((arguments[i__4731__auto___62894]));

var G__62895 = (i__4731__auto___62894 + (1));
i__4731__auto___62894 = G__62895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62225 = conformed_args__59440__auto__;
var map__62225__$1 = (((((!((map__62225 == null))))?(((((map__62225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62225):map__62225);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq62224){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62224));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62896 = arguments.length;
var i__4731__auto___62897 = (0);
while(true){
if((i__4731__auto___62897 < len__4730__auto___62896)){
args__4736__auto__.push((arguments[i__4731__auto___62897]));

var G__62898 = (i__4731__auto___62897 + (1));
i__4731__auto___62897 = G__62898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62228 = conformed_args__59440__auto__;
var map__62228__$1 = (((((!((map__62228 == null))))?(((((map__62228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62228):map__62228);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq62227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62227));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62899 = arguments.length;
var i__4731__auto___62900 = (0);
while(true){
if((i__4731__auto___62900 < len__4730__auto___62899)){
args__4736__auto__.push((arguments[i__4731__auto___62900]));

var G__62901 = (i__4731__auto___62900 + (1));
i__4731__auto___62900 = G__62901;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62231 = conformed_args__59440__auto__;
var map__62231__$1 = (((((!((map__62231 == null))))?(((((map__62231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62231):map__62231);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq62230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62230));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62902 = arguments.length;
var i__4731__auto___62903 = (0);
while(true){
if((i__4731__auto___62903 < len__4730__auto___62902)){
args__4736__auto__.push((arguments[i__4731__auto___62903]));

var G__62904 = (i__4731__auto___62903 + (1));
i__4731__auto___62903 = G__62904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62234 = conformed_args__59440__auto__;
var map__62234__$1 = (((((!((map__62234 == null))))?(((((map__62234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62234):map__62234);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq62233){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62233));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62905 = arguments.length;
var i__4731__auto___62906 = (0);
while(true){
if((i__4731__auto___62906 < len__4730__auto___62905)){
args__4736__auto__.push((arguments[i__4731__auto___62906]));

var G__62907 = (i__4731__auto___62906 + (1));
i__4731__auto___62906 = G__62907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62237 = conformed_args__59440__auto__;
var map__62237__$1 = (((((!((map__62237 == null))))?(((((map__62237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62237):map__62237);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq62236){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62236));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62908 = arguments.length;
var i__4731__auto___62909 = (0);
while(true){
if((i__4731__auto___62909 < len__4730__auto___62908)){
args__4736__auto__.push((arguments[i__4731__auto___62909]));

var G__62910 = (i__4731__auto___62909 + (1));
i__4731__auto___62909 = G__62910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62240 = conformed_args__59440__auto__;
var map__62240__$1 = (((((!((map__62240 == null))))?(((((map__62240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62240):map__62240);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq62239){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62239));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62911 = arguments.length;
var i__4731__auto___62912 = (0);
while(true){
if((i__4731__auto___62912 < len__4730__auto___62911)){
args__4736__auto__.push((arguments[i__4731__auto___62912]));

var G__62913 = (i__4731__auto___62912 + (1));
i__4731__auto___62912 = G__62913;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62243 = conformed_args__59440__auto__;
var map__62243__$1 = (((((!((map__62243 == null))))?(((((map__62243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62243):map__62243);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq62242){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62242));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62914 = arguments.length;
var i__4731__auto___62915 = (0);
while(true){
if((i__4731__auto___62915 < len__4730__auto___62914)){
args__4736__auto__.push((arguments[i__4731__auto___62915]));

var G__62916 = (i__4731__auto___62915 + (1));
i__4731__auto___62915 = G__62916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62246 = conformed_args__59440__auto__;
var map__62246__$1 = (((((!((map__62246 == null))))?(((((map__62246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62246):map__62246);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq62245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62245));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62917 = arguments.length;
var i__4731__auto___62918 = (0);
while(true){
if((i__4731__auto___62918 < len__4730__auto___62917)){
args__4736__auto__.push((arguments[i__4731__auto___62918]));

var G__62919 = (i__4731__auto___62918 + (1));
i__4731__auto___62918 = G__62919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62249 = conformed_args__59440__auto__;
var map__62249__$1 = (((((!((map__62249 == null))))?(((((map__62249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62249):map__62249);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq62248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62248));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62920 = arguments.length;
var i__4731__auto___62921 = (0);
while(true){
if((i__4731__auto___62921 < len__4730__auto___62920)){
args__4736__auto__.push((arguments[i__4731__auto___62921]));

var G__62922 = (i__4731__auto___62921 + (1));
i__4731__auto___62921 = G__62922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62252 = conformed_args__59440__auto__;
var map__62252__$1 = (((((!((map__62252 == null))))?(((((map__62252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62252):map__62252);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq62251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62251));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62923 = arguments.length;
var i__4731__auto___62924 = (0);
while(true){
if((i__4731__auto___62924 < len__4730__auto___62923)){
args__4736__auto__.push((arguments[i__4731__auto___62924]));

var G__62925 = (i__4731__auto___62924 + (1));
i__4731__auto___62924 = G__62925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62255 = conformed_args__59440__auto__;
var map__62255__$1 = (((((!((map__62255 == null))))?(((((map__62255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62255):map__62255);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq62254){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62254));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62926 = arguments.length;
var i__4731__auto___62927 = (0);
while(true){
if((i__4731__auto___62927 < len__4730__auto___62926)){
args__4736__auto__.push((arguments[i__4731__auto___62927]));

var G__62928 = (i__4731__auto___62927 + (1));
i__4731__auto___62927 = G__62928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__59440__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62258 = conformed_args__59440__auto__;
var map__62258__$1 = (((((!((map__62258 == null))))?(((((map__62258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62258):map__62258);
var css__59443__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__59442__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__59441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__59442__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__59442__auto__);
var attrs_value__59444__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__59441__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__59444__auto__], null),children__59442__auto____$1),css__59443__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq62257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62257));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
