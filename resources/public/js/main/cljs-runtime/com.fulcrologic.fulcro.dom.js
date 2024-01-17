goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__64898 = React.createElement("div",null);
var G__64899 = "$$typeof";
return goog.object.get(G__64898,G__64899);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__64900_SHARP_){
return ((cljs.core.map_QMARK_(p1__64900_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64900_SHARP_)))));
}),(function (p1__64901_SHARP_){
return ((cljs.core.object_QMARK_(p1__64901_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64901_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__64902_SHARP_){
return ((cljs.core.vector_QMARK_(p1__64902_SHARP_)) || (cljs.core.seq_QMARK_(p1__64902_SHARP_)) || (cljs.core.array_QMARK_(p1__64902_SHARP_)));
}),cljs.core.nil_QMARK_,com.fulcrologic.fulcro.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64900#","p1__64900#",-859950758,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64901#","p1__64901#",-843630092,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64902#","p1__64902#",-2016222396,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))], null)));
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__64904 = arguments.length;
switch (G__64904) {
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
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__64905 = component.refs;
var G__64905__$1 = (((G__64905 == null))?null:goog.object.get(G__64905,name));
if((G__64905__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__64905__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__64910 = arguments.length;
switch (G__64910) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___65536 = arguments.length;
var i__4731__auto___65537 = (0);
while(true){
if((i__4731__auto___65537 < len__4730__auto___65536)){
args_arr__4751__auto__.push((arguments[i__4731__auto___65537]));

var G__65538 = (i__4731__auto___65537 + (1));
i__4731__auto___65537 = G__65538;
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
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq64907){
var G__64908 = cljs.core.first(seq64907);
var seq64907__$1 = cljs.core.next(seq64907);
var G__64909 = cljs.core.first(seq64907__$1);
var seq64907__$2 = cljs.core.next(seq64907__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64908,G__64909,seq64907__$2);
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

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__64911_65539 = next_state;
var G__64912_65540 = next_props;
var G__64913_65541 = ({"onChange": on_change});
goog.object.extend(G__64911_65539,G__64912_65540,G__64913_65541);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__64914 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64914) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__64914));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__64916_65542 = state;
var G__64917_65543 = props;
var G__64918_65544 = ({"onChange": (function (){var G__64919 = goog.object.get(this$,"onChange");
var G__64920 = this$;
return goog.bind(G__64919,G__64920);
})()});
goog.object.extend(G__64916_65542,G__64917_65543,G__64918_65544);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x64921_65545 = ctor.prototype;
x64921_65545.onChange = ((function (x64921_65545,ctor){
return (function (event){
var this$ = this;
var temp__5804__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x64921_65545,ctor))
;

x64921_65545.componentWillReceiveProps = ((function (x64921_65545,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__64922 = this_node;
var G__64923 = ((function (G__64922,state_value,this_node,this$,x64921_65545,ctor){
return (function (p1__64915_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__64915_SHARP_);
});})(G__64922,state_value,this_node,this$,x64921_65545,ctor))
;
return goog.dom.findNode(G__64922,G__64923);
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x64921_65545,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x64921_65545,ctor))
,null)),null,-1921684134);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x64921_65545,ctor))
;

x64921_65545.render = ((function (x64921_65545,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x64921_65545,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__65546__delegate = function (props,children){
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
};
var G__65546 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__65547__i = 0, G__65547__a = new Array(arguments.length -  1);
while (G__65547__i < G__65547__a.length) {G__65547__a[G__65547__i] = arguments[G__65547__i + 1]; ++G__65547__i;}
  children = new cljs.core.IndexedSeq(G__65547__a,0,null);
} 
return G__65546__delegate.call(this,props,children);};
G__65546.cljs$lang$maxFixedArity = 1;
G__65546.cljs$lang$applyTo = (function (arglist__65548){
var props = cljs.core.first(arglist__65548);
var children = cljs.core.rest(arglist__65548);
return G__65546__delegate(props,children);
});
G__65546.cljs$core$IFn$_invoke$arity$variadic = G__65546__delegate;
return G__65546;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__64924 = tag;
switch (G__64924) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64924)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__64926 = arguments.length;
switch (G__64926) {
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
var vec__64927 = args;
var seq__64928 = cljs.core.seq(vec__64927);
var first__64929 = cljs.core.first(seq__64928);
var seq__64928__$1 = cljs.core.next(seq__64928);
var head = first__64929;
var tail = seq__64928__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__64930 = (function (){var G__64931 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64931,tail);

return G__64931;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64930) : f.call(null,G__64930));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__64932 = (function (){var G__64933 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64933,args);

return G__64933;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64932) : f.call(null,G__64932));
} else {
if(cljs.core.object_QMARK_(head)){
var G__64934 = (function (){var G__64935 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64935,tail);

return G__64935;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64934) : f.call(null,G__64934));
} else {
if(cljs.core.map_QMARK_(head)){
var G__64936 = (function (){var G__64937 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__64937,tail);

return G__64937;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64936) : f.call(null,G__64936));
} else {
var G__64938 = (function (){var G__64939 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64939,args);

return G__64939;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64938) : f.call(null,G__64938));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

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
var len__4730__auto___65564 = arguments.length;
var i__4731__auto___65565 = (0);
while(true){
if((i__4731__auto___65565 < len__4730__auto___65564)){
args__4736__auto__.push((arguments[i__4731__auto___65565]));

var G__65566 = (i__4731__auto___65565 + (1));
i__4731__auto___65565 = G__65566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64941 = conformed_args__63699__auto__;
var map__64941__$1 = (((((!((map__64941 == null))))?(((((map__64941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64941):map__64941);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq64940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64940));
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
var len__4730__auto___65570 = arguments.length;
var i__4731__auto___65571 = (0);
while(true){
if((i__4731__auto___65571 < len__4730__auto___65570)){
args__4736__auto__.push((arguments[i__4731__auto___65571]));

var G__65574 = (i__4731__auto___65571 + (1));
i__4731__auto___65571 = G__65574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64944 = conformed_args__63699__auto__;
var map__64944__$1 = (((((!((map__64944 == null))))?(((((map__64944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64944):map__64944);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq64943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64943));
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
var len__4730__auto___65579 = arguments.length;
var i__4731__auto___65580 = (0);
while(true){
if((i__4731__auto___65580 < len__4730__auto___65579)){
args__4736__auto__.push((arguments[i__4731__auto___65580]));

var G__65581 = (i__4731__auto___65580 + (1));
i__4731__auto___65580 = G__65581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64947 = conformed_args__63699__auto__;
var map__64947__$1 = (((((!((map__64947 == null))))?(((((map__64947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64947):map__64947);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq64946){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64946));
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
var len__4730__auto___65596 = arguments.length;
var i__4731__auto___65597 = (0);
while(true){
if((i__4731__auto___65597 < len__4730__auto___65596)){
args__4736__auto__.push((arguments[i__4731__auto___65597]));

var G__65598 = (i__4731__auto___65597 + (1));
i__4731__auto___65597 = G__65598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64950 = conformed_args__63699__auto__;
var map__64950__$1 = (((((!((map__64950 == null))))?(((((map__64950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64950):map__64950);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq64949){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64949));
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
var len__4730__auto___65599 = arguments.length;
var i__4731__auto___65600 = (0);
while(true){
if((i__4731__auto___65600 < len__4730__auto___65599)){
args__4736__auto__.push((arguments[i__4731__auto___65600]));

var G__65601 = (i__4731__auto___65600 + (1));
i__4731__auto___65600 = G__65601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64953 = conformed_args__63699__auto__;
var map__64953__$1 = (((((!((map__64953 == null))))?(((((map__64953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64953):map__64953);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq64952){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64952));
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
var len__4730__auto___65602 = arguments.length;
var i__4731__auto___65603 = (0);
while(true){
if((i__4731__auto___65603 < len__4730__auto___65602)){
args__4736__auto__.push((arguments[i__4731__auto___65603]));

var G__65604 = (i__4731__auto___65603 + (1));
i__4731__auto___65603 = G__65604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64956 = conformed_args__63699__auto__;
var map__64956__$1 = (((((!((map__64956 == null))))?(((((map__64956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64956):map__64956);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq64955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64955));
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
var len__4730__auto___65605 = arguments.length;
var i__4731__auto___65606 = (0);
while(true){
if((i__4731__auto___65606 < len__4730__auto___65605)){
args__4736__auto__.push((arguments[i__4731__auto___65606]));

var G__65607 = (i__4731__auto___65606 + (1));
i__4731__auto___65606 = G__65607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64959 = conformed_args__63699__auto__;
var map__64959__$1 = (((((!((map__64959 == null))))?(((((map__64959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64959):map__64959);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq64958){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64958));
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
var len__4730__auto___65610 = arguments.length;
var i__4731__auto___65611 = (0);
while(true){
if((i__4731__auto___65611 < len__4730__auto___65610)){
args__4736__auto__.push((arguments[i__4731__auto___65611]));

var G__65612 = (i__4731__auto___65611 + (1));
i__4731__auto___65611 = G__65612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64962 = conformed_args__63699__auto__;
var map__64962__$1 = (((((!((map__64962 == null))))?(((((map__64962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64962):map__64962);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq64961){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64961));
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
var len__4730__auto___65619 = arguments.length;
var i__4731__auto___65620 = (0);
while(true){
if((i__4731__auto___65620 < len__4730__auto___65619)){
args__4736__auto__.push((arguments[i__4731__auto___65620]));

var G__65621 = (i__4731__auto___65620 + (1));
i__4731__auto___65620 = G__65621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64965 = conformed_args__63699__auto__;
var map__64965__$1 = (((((!((map__64965 == null))))?(((((map__64965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64965):map__64965);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq64964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64964));
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
var len__4730__auto___65623 = arguments.length;
var i__4731__auto___65624 = (0);
while(true){
if((i__4731__auto___65624 < len__4730__auto___65623)){
args__4736__auto__.push((arguments[i__4731__auto___65624]));

var G__65625 = (i__4731__auto___65624 + (1));
i__4731__auto___65624 = G__65625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64968 = conformed_args__63699__auto__;
var map__64968__$1 = (((((!((map__64968 == null))))?(((((map__64968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64968):map__64968);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq64967){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64967));
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
var len__4730__auto___65629 = arguments.length;
var i__4731__auto___65630 = (0);
while(true){
if((i__4731__auto___65630 < len__4730__auto___65629)){
args__4736__auto__.push((arguments[i__4731__auto___65630]));

var G__65631 = (i__4731__auto___65630 + (1));
i__4731__auto___65630 = G__65631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64971 = conformed_args__63699__auto__;
var map__64971__$1 = (((((!((map__64971 == null))))?(((((map__64971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64971):map__64971);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq64970){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64970));
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
var len__4730__auto___65635 = arguments.length;
var i__4731__auto___65636 = (0);
while(true){
if((i__4731__auto___65636 < len__4730__auto___65635)){
args__4736__auto__.push((arguments[i__4731__auto___65636]));

var G__65637 = (i__4731__auto___65636 + (1));
i__4731__auto___65636 = G__65637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64974 = conformed_args__63699__auto__;
var map__64974__$1 = (((((!((map__64974 == null))))?(((((map__64974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64974):map__64974);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq64973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64973));
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
var len__4730__auto___65638 = arguments.length;
var i__4731__auto___65639 = (0);
while(true){
if((i__4731__auto___65639 < len__4730__auto___65638)){
args__4736__auto__.push((arguments[i__4731__auto___65639]));

var G__65640 = (i__4731__auto___65639 + (1));
i__4731__auto___65639 = G__65640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64977 = conformed_args__63699__auto__;
var map__64977__$1 = (((((!((map__64977 == null))))?(((((map__64977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64977):map__64977);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq64976){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64976));
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
var len__4730__auto___65644 = arguments.length;
var i__4731__auto___65645 = (0);
while(true){
if((i__4731__auto___65645 < len__4730__auto___65644)){
args__4736__auto__.push((arguments[i__4731__auto___65645]));

var G__65646 = (i__4731__auto___65645 + (1));
i__4731__auto___65645 = G__65646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64980 = conformed_args__63699__auto__;
var map__64980__$1 = (((((!((map__64980 == null))))?(((((map__64980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64980):map__64980);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq64979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64979));
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
var len__4730__auto___65649 = arguments.length;
var i__4731__auto___65650 = (0);
while(true){
if((i__4731__auto___65650 < len__4730__auto___65649)){
args__4736__auto__.push((arguments[i__4731__auto___65650]));

var G__65651 = (i__4731__auto___65650 + (1));
i__4731__auto___65650 = G__65651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64983 = conformed_args__63699__auto__;
var map__64983__$1 = (((((!((map__64983 == null))))?(((((map__64983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64983):map__64983);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq64982){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64982));
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
var len__4730__auto___65652 = arguments.length;
var i__4731__auto___65653 = (0);
while(true){
if((i__4731__auto___65653 < len__4730__auto___65652)){
args__4736__auto__.push((arguments[i__4731__auto___65653]));

var G__65654 = (i__4731__auto___65653 + (1));
i__4731__auto___65653 = G__65654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64986 = conformed_args__63699__auto__;
var map__64986__$1 = (((((!((map__64986 == null))))?(((((map__64986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64986):map__64986);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq64985){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64985));
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
var len__4730__auto___65655 = arguments.length;
var i__4731__auto___65656 = (0);
while(true){
if((i__4731__auto___65656 < len__4730__auto___65655)){
args__4736__auto__.push((arguments[i__4731__auto___65656]));

var G__65657 = (i__4731__auto___65656 + (1));
i__4731__auto___65656 = G__65657;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64989 = conformed_args__63699__auto__;
var map__64989__$1 = (((((!((map__64989 == null))))?(((((map__64989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64989):map__64989);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq64988){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64988));
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
var len__4730__auto___65658 = arguments.length;
var i__4731__auto___65659 = (0);
while(true){
if((i__4731__auto___65659 < len__4730__auto___65658)){
args__4736__auto__.push((arguments[i__4731__auto___65659]));

var G__65660 = (i__4731__auto___65659 + (1));
i__4731__auto___65659 = G__65660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64992 = conformed_args__63699__auto__;
var map__64992__$1 = (((((!((map__64992 == null))))?(((((map__64992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64992):map__64992);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq64991){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64991));
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
var len__4730__auto___65661 = arguments.length;
var i__4731__auto___65662 = (0);
while(true){
if((i__4731__auto___65662 < len__4730__auto___65661)){
args__4736__auto__.push((arguments[i__4731__auto___65662]));

var G__65663 = (i__4731__auto___65662 + (1));
i__4731__auto___65662 = G__65663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64995 = conformed_args__63699__auto__;
var map__64995__$1 = (((((!((map__64995 == null))))?(((((map__64995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64995):map__64995);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq64994){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64994));
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
var len__4730__auto___65664 = arguments.length;
var i__4731__auto___65665 = (0);
while(true){
if((i__4731__auto___65665 < len__4730__auto___65664)){
args__4736__auto__.push((arguments[i__4731__auto___65665]));

var G__65666 = (i__4731__auto___65665 + (1));
i__4731__auto___65665 = G__65666;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64998 = conformed_args__63699__auto__;
var map__64998__$1 = (((((!((map__64998 == null))))?(((((map__64998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64998):map__64998);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq64997){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64997));
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
var len__4730__auto___65667 = arguments.length;
var i__4731__auto___65668 = (0);
while(true){
if((i__4731__auto___65668 < len__4730__auto___65667)){
args__4736__auto__.push((arguments[i__4731__auto___65668]));

var G__65669 = (i__4731__auto___65668 + (1));
i__4731__auto___65668 = G__65669;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65001 = conformed_args__63699__auto__;
var map__65001__$1 = (((((!((map__65001 == null))))?(((((map__65001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65001):map__65001);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq65000){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65000));
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
var len__4730__auto___65670 = arguments.length;
var i__4731__auto___65671 = (0);
while(true){
if((i__4731__auto___65671 < len__4730__auto___65670)){
args__4736__auto__.push((arguments[i__4731__auto___65671]));

var G__65672 = (i__4731__auto___65671 + (1));
i__4731__auto___65671 = G__65672;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65004 = conformed_args__63699__auto__;
var map__65004__$1 = (((((!((map__65004 == null))))?(((((map__65004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65004):map__65004);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq65003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65003));
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
var len__4730__auto___65673 = arguments.length;
var i__4731__auto___65674 = (0);
while(true){
if((i__4731__auto___65674 < len__4730__auto___65673)){
args__4736__auto__.push((arguments[i__4731__auto___65674]));

var G__65675 = (i__4731__auto___65674 + (1));
i__4731__auto___65674 = G__65675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65007 = conformed_args__63699__auto__;
var map__65007__$1 = (((((!((map__65007 == null))))?(((((map__65007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65007):map__65007);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq65006){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65006));
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
var len__4730__auto___65676 = arguments.length;
var i__4731__auto___65677 = (0);
while(true){
if((i__4731__auto___65677 < len__4730__auto___65676)){
args__4736__auto__.push((arguments[i__4731__auto___65677]));

var G__65678 = (i__4731__auto___65677 + (1));
i__4731__auto___65677 = G__65678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65010 = conformed_args__63699__auto__;
var map__65010__$1 = (((((!((map__65010 == null))))?(((((map__65010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65010):map__65010);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq65009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65009));
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
var len__4730__auto___65679 = arguments.length;
var i__4731__auto___65680 = (0);
while(true){
if((i__4731__auto___65680 < len__4730__auto___65679)){
args__4736__auto__.push((arguments[i__4731__auto___65680]));

var G__65681 = (i__4731__auto___65680 + (1));
i__4731__auto___65680 = G__65681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65013 = conformed_args__63699__auto__;
var map__65013__$1 = (((((!((map__65013 == null))))?(((((map__65013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65013):map__65013);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq65012){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65012));
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
var len__4730__auto___65682 = arguments.length;
var i__4731__auto___65683 = (0);
while(true){
if((i__4731__auto___65683 < len__4730__auto___65682)){
args__4736__auto__.push((arguments[i__4731__auto___65683]));

var G__65684 = (i__4731__auto___65683 + (1));
i__4731__auto___65683 = G__65684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65016 = conformed_args__63699__auto__;
var map__65016__$1 = (((((!((map__65016 == null))))?(((((map__65016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65016):map__65016);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq65015){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65015));
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
var len__4730__auto___65685 = arguments.length;
var i__4731__auto___65686 = (0);
while(true){
if((i__4731__auto___65686 < len__4730__auto___65685)){
args__4736__auto__.push((arguments[i__4731__auto___65686]));

var G__65687 = (i__4731__auto___65686 + (1));
i__4731__auto___65686 = G__65687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65019 = conformed_args__63699__auto__;
var map__65019__$1 = (((((!((map__65019 == null))))?(((((map__65019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65019):map__65019);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq65018){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65018));
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
var len__4730__auto___65688 = arguments.length;
var i__4731__auto___65689 = (0);
while(true){
if((i__4731__auto___65689 < len__4730__auto___65688)){
args__4736__auto__.push((arguments[i__4731__auto___65689]));

var G__65690 = (i__4731__auto___65689 + (1));
i__4731__auto___65689 = G__65690;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65022 = conformed_args__63699__auto__;
var map__65022__$1 = (((((!((map__65022 == null))))?(((((map__65022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65022):map__65022);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65022__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq65021){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65021));
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
var len__4730__auto___65691 = arguments.length;
var i__4731__auto___65692 = (0);
while(true){
if((i__4731__auto___65692 < len__4730__auto___65691)){
args__4736__auto__.push((arguments[i__4731__auto___65692]));

var G__65693 = (i__4731__auto___65692 + (1));
i__4731__auto___65692 = G__65693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65025 = conformed_args__63699__auto__;
var map__65025__$1 = (((((!((map__65025 == null))))?(((((map__65025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65025):map__65025);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq65024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65024));
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
var len__4730__auto___65694 = arguments.length;
var i__4731__auto___65695 = (0);
while(true){
if((i__4731__auto___65695 < len__4730__auto___65694)){
args__4736__auto__.push((arguments[i__4731__auto___65695]));

var G__65696 = (i__4731__auto___65695 + (1));
i__4731__auto___65695 = G__65696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65028 = conformed_args__63699__auto__;
var map__65028__$1 = (((((!((map__65028 == null))))?(((((map__65028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65028):map__65028);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65028__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65028__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65028__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq65027){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65027));
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
var len__4730__auto___65697 = arguments.length;
var i__4731__auto___65698 = (0);
while(true){
if((i__4731__auto___65698 < len__4730__auto___65697)){
args__4736__auto__.push((arguments[i__4731__auto___65698]));

var G__65699 = (i__4731__auto___65698 + (1));
i__4731__auto___65698 = G__65699;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65031 = conformed_args__63699__auto__;
var map__65031__$1 = (((((!((map__65031 == null))))?(((((map__65031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65031):map__65031);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq65030){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65030));
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
var len__4730__auto___65700 = arguments.length;
var i__4731__auto___65701 = (0);
while(true){
if((i__4731__auto___65701 < len__4730__auto___65700)){
args__4736__auto__.push((arguments[i__4731__auto___65701]));

var G__65702 = (i__4731__auto___65701 + (1));
i__4731__auto___65701 = G__65702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65034 = conformed_args__63699__auto__;
var map__65034__$1 = (((((!((map__65034 == null))))?(((((map__65034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65034):map__65034);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq65033){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65033));
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
var len__4730__auto___65703 = arguments.length;
var i__4731__auto___65704 = (0);
while(true){
if((i__4731__auto___65704 < len__4730__auto___65703)){
args__4736__auto__.push((arguments[i__4731__auto___65704]));

var G__65705 = (i__4731__auto___65704 + (1));
i__4731__auto___65704 = G__65705;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65037 = conformed_args__63699__auto__;
var map__65037__$1 = (((((!((map__65037 == null))))?(((((map__65037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65037):map__65037);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq65036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65036));
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
var len__4730__auto___65706 = arguments.length;
var i__4731__auto___65707 = (0);
while(true){
if((i__4731__auto___65707 < len__4730__auto___65706)){
args__4736__auto__.push((arguments[i__4731__auto___65707]));

var G__65708 = (i__4731__auto___65707 + (1));
i__4731__auto___65707 = G__65708;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65040 = conformed_args__63699__auto__;
var map__65040__$1 = (((((!((map__65040 == null))))?(((((map__65040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65040):map__65040);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq65039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65039));
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
var len__4730__auto___65709 = arguments.length;
var i__4731__auto___65710 = (0);
while(true){
if((i__4731__auto___65710 < len__4730__auto___65709)){
args__4736__auto__.push((arguments[i__4731__auto___65710]));

var G__65711 = (i__4731__auto___65710 + (1));
i__4731__auto___65710 = G__65711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65043 = conformed_args__63699__auto__;
var map__65043__$1 = (((((!((map__65043 == null))))?(((((map__65043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65043):map__65043);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq65042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65042));
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
var len__4730__auto___65712 = arguments.length;
var i__4731__auto___65713 = (0);
while(true){
if((i__4731__auto___65713 < len__4730__auto___65712)){
args__4736__auto__.push((arguments[i__4731__auto___65713]));

var G__65714 = (i__4731__auto___65713 + (1));
i__4731__auto___65713 = G__65714;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65046 = conformed_args__63699__auto__;
var map__65046__$1 = (((((!((map__65046 == null))))?(((((map__65046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65046):map__65046);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq65045){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65045));
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
var len__4730__auto___65715 = arguments.length;
var i__4731__auto___65716 = (0);
while(true){
if((i__4731__auto___65716 < len__4730__auto___65715)){
args__4736__auto__.push((arguments[i__4731__auto___65716]));

var G__65717 = (i__4731__auto___65716 + (1));
i__4731__auto___65716 = G__65717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65049 = conformed_args__63699__auto__;
var map__65049__$1 = (((((!((map__65049 == null))))?(((((map__65049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65049):map__65049);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq65048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65048));
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
var len__4730__auto___65718 = arguments.length;
var i__4731__auto___65719 = (0);
while(true){
if((i__4731__auto___65719 < len__4730__auto___65718)){
args__4736__auto__.push((arguments[i__4731__auto___65719]));

var G__65720 = (i__4731__auto___65719 + (1));
i__4731__auto___65719 = G__65720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65052 = conformed_args__63699__auto__;
var map__65052__$1 = (((((!((map__65052 == null))))?(((((map__65052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65052):map__65052);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq65051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65051));
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
var len__4730__auto___65721 = arguments.length;
var i__4731__auto___65722 = (0);
while(true){
if((i__4731__auto___65722 < len__4730__auto___65721)){
args__4736__auto__.push((arguments[i__4731__auto___65722]));

var G__65723 = (i__4731__auto___65722 + (1));
i__4731__auto___65722 = G__65723;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65055 = conformed_args__63699__auto__;
var map__65055__$1 = (((((!((map__65055 == null))))?(((((map__65055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65055):map__65055);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq65054){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65054));
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
var len__4730__auto___65724 = arguments.length;
var i__4731__auto___65725 = (0);
while(true){
if((i__4731__auto___65725 < len__4730__auto___65724)){
args__4736__auto__.push((arguments[i__4731__auto___65725]));

var G__65726 = (i__4731__auto___65725 + (1));
i__4731__auto___65725 = G__65726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65058 = conformed_args__63699__auto__;
var map__65058__$1 = (((((!((map__65058 == null))))?(((((map__65058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65058):map__65058);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq65057){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65057));
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
var len__4730__auto___65727 = arguments.length;
var i__4731__auto___65728 = (0);
while(true){
if((i__4731__auto___65728 < len__4730__auto___65727)){
args__4736__auto__.push((arguments[i__4731__auto___65728]));

var G__65729 = (i__4731__auto___65728 + (1));
i__4731__auto___65728 = G__65729;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65061 = conformed_args__63699__auto__;
var map__65061__$1 = (((((!((map__65061 == null))))?(((((map__65061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65061):map__65061);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq65060){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65060));
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
var len__4730__auto___65730 = arguments.length;
var i__4731__auto___65731 = (0);
while(true){
if((i__4731__auto___65731 < len__4730__auto___65730)){
args__4736__auto__.push((arguments[i__4731__auto___65731]));

var G__65732 = (i__4731__auto___65731 + (1));
i__4731__auto___65731 = G__65732;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65064 = conformed_args__63699__auto__;
var map__65064__$1 = (((((!((map__65064 == null))))?(((((map__65064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65064):map__65064);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq65063){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65063));
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
var len__4730__auto___65733 = arguments.length;
var i__4731__auto___65734 = (0);
while(true){
if((i__4731__auto___65734 < len__4730__auto___65733)){
args__4736__auto__.push((arguments[i__4731__auto___65734]));

var G__65735 = (i__4731__auto___65734 + (1));
i__4731__auto___65734 = G__65735;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65067 = conformed_args__63699__auto__;
var map__65067__$1 = (((((!((map__65067 == null))))?(((((map__65067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65067):map__65067);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq65066){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65066));
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
var len__4730__auto___65736 = arguments.length;
var i__4731__auto___65737 = (0);
while(true){
if((i__4731__auto___65737 < len__4730__auto___65736)){
args__4736__auto__.push((arguments[i__4731__auto___65737]));

var G__65738 = (i__4731__auto___65737 + (1));
i__4731__auto___65737 = G__65738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65070 = conformed_args__63699__auto__;
var map__65070__$1 = (((((!((map__65070 == null))))?(((((map__65070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65070):map__65070);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65070__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq65069){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65069));
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
var len__4730__auto___65739 = arguments.length;
var i__4731__auto___65740 = (0);
while(true){
if((i__4731__auto___65740 < len__4730__auto___65739)){
args__4736__auto__.push((arguments[i__4731__auto___65740]));

var G__65741 = (i__4731__auto___65740 + (1));
i__4731__auto___65740 = G__65741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65073 = conformed_args__63699__auto__;
var map__65073__$1 = (((((!((map__65073 == null))))?(((((map__65073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65073):map__65073);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq65072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65072));
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
var len__4730__auto___65742 = arguments.length;
var i__4731__auto___65743 = (0);
while(true){
if((i__4731__auto___65743 < len__4730__auto___65742)){
args__4736__auto__.push((arguments[i__4731__auto___65743]));

var G__65744 = (i__4731__auto___65743 + (1));
i__4731__auto___65743 = G__65744;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65076 = conformed_args__63699__auto__;
var map__65076__$1 = (((((!((map__65076 == null))))?(((((map__65076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65076):map__65076);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq65075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65075));
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
var len__4730__auto___65745 = arguments.length;
var i__4731__auto___65746 = (0);
while(true){
if((i__4731__auto___65746 < len__4730__auto___65745)){
args__4736__auto__.push((arguments[i__4731__auto___65746]));

var G__65747 = (i__4731__auto___65746 + (1));
i__4731__auto___65746 = G__65747;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65079 = conformed_args__63699__auto__;
var map__65079__$1 = (((((!((map__65079 == null))))?(((((map__65079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65079):map__65079);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq65078){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65078));
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
var len__4730__auto___65748 = arguments.length;
var i__4731__auto___65749 = (0);
while(true){
if((i__4731__auto___65749 < len__4730__auto___65748)){
args__4736__auto__.push((arguments[i__4731__auto___65749]));

var G__65750 = (i__4731__auto___65749 + (1));
i__4731__auto___65749 = G__65750;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65082 = conformed_args__63699__auto__;
var map__65082__$1 = (((((!((map__65082 == null))))?(((((map__65082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65082):map__65082);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq65081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65081));
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
var len__4730__auto___65751 = arguments.length;
var i__4731__auto___65752 = (0);
while(true){
if((i__4731__auto___65752 < len__4730__auto___65751)){
args__4736__auto__.push((arguments[i__4731__auto___65752]));

var G__65753 = (i__4731__auto___65752 + (1));
i__4731__auto___65752 = G__65753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65085 = conformed_args__63699__auto__;
var map__65085__$1 = (((((!((map__65085 == null))))?(((((map__65085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65085):map__65085);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq65084){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65084));
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
var len__4730__auto___65754 = arguments.length;
var i__4731__auto___65755 = (0);
while(true){
if((i__4731__auto___65755 < len__4730__auto___65754)){
args__4736__auto__.push((arguments[i__4731__auto___65755]));

var G__65756 = (i__4731__auto___65755 + (1));
i__4731__auto___65755 = G__65756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65088 = conformed_args__63699__auto__;
var map__65088__$1 = (((((!((map__65088 == null))))?(((((map__65088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65088):map__65088);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq65087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65087));
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
var len__4730__auto___65757 = arguments.length;
var i__4731__auto___65758 = (0);
while(true){
if((i__4731__auto___65758 < len__4730__auto___65757)){
args__4736__auto__.push((arguments[i__4731__auto___65758]));

var G__65759 = (i__4731__auto___65758 + (1));
i__4731__auto___65758 = G__65759;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65091 = conformed_args__63699__auto__;
var map__65091__$1 = (((((!((map__65091 == null))))?(((((map__65091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65091):map__65091);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq65090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65090));
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
var len__4730__auto___65760 = arguments.length;
var i__4731__auto___65761 = (0);
while(true){
if((i__4731__auto___65761 < len__4730__auto___65760)){
args__4736__auto__.push((arguments[i__4731__auto___65761]));

var G__65762 = (i__4731__auto___65761 + (1));
i__4731__auto___65761 = G__65762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65094 = conformed_args__63699__auto__;
var map__65094__$1 = (((((!((map__65094 == null))))?(((((map__65094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65094):map__65094);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq65093){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65093));
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
var len__4730__auto___65763 = arguments.length;
var i__4731__auto___65764 = (0);
while(true){
if((i__4731__auto___65764 < len__4730__auto___65763)){
args__4736__auto__.push((arguments[i__4731__auto___65764]));

var G__65765 = (i__4731__auto___65764 + (1));
i__4731__auto___65764 = G__65765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65097 = conformed_args__63699__auto__;
var map__65097__$1 = (((((!((map__65097 == null))))?(((((map__65097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65097):map__65097);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq65096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65096));
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
var len__4730__auto___65766 = arguments.length;
var i__4731__auto___65767 = (0);
while(true){
if((i__4731__auto___65767 < len__4730__auto___65766)){
args__4736__auto__.push((arguments[i__4731__auto___65767]));

var G__65768 = (i__4731__auto___65767 + (1));
i__4731__auto___65767 = G__65768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65100 = conformed_args__63699__auto__;
var map__65100__$1 = (((((!((map__65100 == null))))?(((((map__65100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65100):map__65100);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq65099){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65099));
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
var len__4730__auto___65769 = arguments.length;
var i__4731__auto___65770 = (0);
while(true){
if((i__4731__auto___65770 < len__4730__auto___65769)){
args__4736__auto__.push((arguments[i__4731__auto___65770]));

var G__65771 = (i__4731__auto___65770 + (1));
i__4731__auto___65770 = G__65771;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65103 = conformed_args__63699__auto__;
var map__65103__$1 = (((((!((map__65103 == null))))?(((((map__65103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65103):map__65103);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq65102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65102));
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
var len__4730__auto___65772 = arguments.length;
var i__4731__auto___65773 = (0);
while(true){
if((i__4731__auto___65773 < len__4730__auto___65772)){
args__4736__auto__.push((arguments[i__4731__auto___65773]));

var G__65774 = (i__4731__auto___65773 + (1));
i__4731__auto___65773 = G__65774;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65106 = conformed_args__63699__auto__;
var map__65106__$1 = (((((!((map__65106 == null))))?(((((map__65106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65106):map__65106);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq65105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65105));
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
var len__4730__auto___65775 = arguments.length;
var i__4731__auto___65776 = (0);
while(true){
if((i__4731__auto___65776 < len__4730__auto___65775)){
args__4736__auto__.push((arguments[i__4731__auto___65776]));

var G__65777 = (i__4731__auto___65776 + (1));
i__4731__auto___65776 = G__65777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65109 = conformed_args__63699__auto__;
var map__65109__$1 = (((((!((map__65109 == null))))?(((((map__65109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65109):map__65109);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq65108){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65108));
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
var len__4730__auto___65778 = arguments.length;
var i__4731__auto___65779 = (0);
while(true){
if((i__4731__auto___65779 < len__4730__auto___65778)){
args__4736__auto__.push((arguments[i__4731__auto___65779]));

var G__65780 = (i__4731__auto___65779 + (1));
i__4731__auto___65779 = G__65780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65112 = conformed_args__63699__auto__;
var map__65112__$1 = (((((!((map__65112 == null))))?(((((map__65112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65112):map__65112);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq65111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65111));
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
var len__4730__auto___65781 = arguments.length;
var i__4731__auto___65782 = (0);
while(true){
if((i__4731__auto___65782 < len__4730__auto___65781)){
args__4736__auto__.push((arguments[i__4731__auto___65782]));

var G__65783 = (i__4731__auto___65782 + (1));
i__4731__auto___65782 = G__65783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65115 = conformed_args__63699__auto__;
var map__65115__$1 = (((((!((map__65115 == null))))?(((((map__65115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65115):map__65115);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq65114){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65114));
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
var len__4730__auto___65784 = arguments.length;
var i__4731__auto___65785 = (0);
while(true){
if((i__4731__auto___65785 < len__4730__auto___65784)){
args__4736__auto__.push((arguments[i__4731__auto___65785]));

var G__65786 = (i__4731__auto___65785 + (1));
i__4731__auto___65785 = G__65786;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65118 = conformed_args__63699__auto__;
var map__65118__$1 = (((((!((map__65118 == null))))?(((((map__65118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65118):map__65118);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq65117){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65117));
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
var len__4730__auto___65787 = arguments.length;
var i__4731__auto___65788 = (0);
while(true){
if((i__4731__auto___65788 < len__4730__auto___65787)){
args__4736__auto__.push((arguments[i__4731__auto___65788]));

var G__65789 = (i__4731__auto___65788 + (1));
i__4731__auto___65788 = G__65789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65121 = conformed_args__63699__auto__;
var map__65121__$1 = (((((!((map__65121 == null))))?(((((map__65121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65121):map__65121);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq65120){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65120));
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
var len__4730__auto___65790 = arguments.length;
var i__4731__auto___65791 = (0);
while(true){
if((i__4731__auto___65791 < len__4730__auto___65790)){
args__4736__auto__.push((arguments[i__4731__auto___65791]));

var G__65792 = (i__4731__auto___65791 + (1));
i__4731__auto___65791 = G__65792;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65124 = conformed_args__63699__auto__;
var map__65124__$1 = (((((!((map__65124 == null))))?(((((map__65124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65124):map__65124);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65124__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq65123){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65123));
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
var len__4730__auto___65793 = arguments.length;
var i__4731__auto___65794 = (0);
while(true){
if((i__4731__auto___65794 < len__4730__auto___65793)){
args__4736__auto__.push((arguments[i__4731__auto___65794]));

var G__65795 = (i__4731__auto___65794 + (1));
i__4731__auto___65794 = G__65795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65127 = conformed_args__63699__auto__;
var map__65127__$1 = (((((!((map__65127 == null))))?(((((map__65127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65127):map__65127);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq65126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65126));
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
var len__4730__auto___65796 = arguments.length;
var i__4731__auto___65797 = (0);
while(true){
if((i__4731__auto___65797 < len__4730__auto___65796)){
args__4736__auto__.push((arguments[i__4731__auto___65797]));

var G__65798 = (i__4731__auto___65797 + (1));
i__4731__auto___65797 = G__65798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65130 = conformed_args__63699__auto__;
var map__65130__$1 = (((((!((map__65130 == null))))?(((((map__65130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65130):map__65130);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65130__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq65129){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65129));
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
var len__4730__auto___65799 = arguments.length;
var i__4731__auto___65800 = (0);
while(true){
if((i__4731__auto___65800 < len__4730__auto___65799)){
args__4736__auto__.push((arguments[i__4731__auto___65800]));

var G__65801 = (i__4731__auto___65800 + (1));
i__4731__auto___65800 = G__65801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65133 = conformed_args__63699__auto__;
var map__65133__$1 = (((((!((map__65133 == null))))?(((((map__65133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65133):map__65133);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq65132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65132));
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
var len__4730__auto___65802 = arguments.length;
var i__4731__auto___65803 = (0);
while(true){
if((i__4731__auto___65803 < len__4730__auto___65802)){
args__4736__auto__.push((arguments[i__4731__auto___65803]));

var G__65804 = (i__4731__auto___65803 + (1));
i__4731__auto___65803 = G__65804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65136 = conformed_args__63699__auto__;
var map__65136__$1 = (((((!((map__65136 == null))))?(((((map__65136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65136):map__65136);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq65135){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65135));
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
var len__4730__auto___65805 = arguments.length;
var i__4731__auto___65806 = (0);
while(true){
if((i__4731__auto___65806 < len__4730__auto___65805)){
args__4736__auto__.push((arguments[i__4731__auto___65806]));

var G__65807 = (i__4731__auto___65806 + (1));
i__4731__auto___65806 = G__65807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65139 = conformed_args__63699__auto__;
var map__65139__$1 = (((((!((map__65139 == null))))?(((((map__65139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65139):map__65139);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq65138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65138));
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
var len__4730__auto___65808 = arguments.length;
var i__4731__auto___65809 = (0);
while(true){
if((i__4731__auto___65809 < len__4730__auto___65808)){
args__4736__auto__.push((arguments[i__4731__auto___65809]));

var G__65810 = (i__4731__auto___65809 + (1));
i__4731__auto___65809 = G__65810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65142 = conformed_args__63699__auto__;
var map__65142__$1 = (((((!((map__65142 == null))))?(((((map__65142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65142):map__65142);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65142__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65142__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65142__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq65141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65141));
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
var len__4730__auto___65811 = arguments.length;
var i__4731__auto___65812 = (0);
while(true){
if((i__4731__auto___65812 < len__4730__auto___65811)){
args__4736__auto__.push((arguments[i__4731__auto___65812]));

var G__65813 = (i__4731__auto___65812 + (1));
i__4731__auto___65812 = G__65813;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65145 = conformed_args__63699__auto__;
var map__65145__$1 = (((((!((map__65145 == null))))?(((((map__65145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65145):map__65145);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq65144){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65144));
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
var len__4730__auto___65814 = arguments.length;
var i__4731__auto___65815 = (0);
while(true){
if((i__4731__auto___65815 < len__4730__auto___65814)){
args__4736__auto__.push((arguments[i__4731__auto___65815]));

var G__65816 = (i__4731__auto___65815 + (1));
i__4731__auto___65815 = G__65816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65148 = conformed_args__63699__auto__;
var map__65148__$1 = (((((!((map__65148 == null))))?(((((map__65148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65148):map__65148);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65148__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq65147){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65147));
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
var len__4730__auto___65817 = arguments.length;
var i__4731__auto___65818 = (0);
while(true){
if((i__4731__auto___65818 < len__4730__auto___65817)){
args__4736__auto__.push((arguments[i__4731__auto___65818]));

var G__65819 = (i__4731__auto___65818 + (1));
i__4731__auto___65818 = G__65819;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65151 = conformed_args__63699__auto__;
var map__65151__$1 = (((((!((map__65151 == null))))?(((((map__65151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65151):map__65151);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65151__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq65150){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65150));
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
var len__4730__auto___65820 = arguments.length;
var i__4731__auto___65821 = (0);
while(true){
if((i__4731__auto___65821 < len__4730__auto___65820)){
args__4736__auto__.push((arguments[i__4731__auto___65821]));

var G__65822 = (i__4731__auto___65821 + (1));
i__4731__auto___65821 = G__65822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65154 = conformed_args__63699__auto__;
var map__65154__$1 = (((((!((map__65154 == null))))?(((((map__65154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65154):map__65154);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65154__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65154__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65154__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq65153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65153));
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
var len__4730__auto___65823 = arguments.length;
var i__4731__auto___65824 = (0);
while(true){
if((i__4731__auto___65824 < len__4730__auto___65823)){
args__4736__auto__.push((arguments[i__4731__auto___65824]));

var G__65825 = (i__4731__auto___65824 + (1));
i__4731__auto___65824 = G__65825;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65157 = conformed_args__63699__auto__;
var map__65157__$1 = (((((!((map__65157 == null))))?(((((map__65157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65157):map__65157);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65157__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65157__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65157__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65156));
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
var len__4730__auto___65826 = arguments.length;
var i__4731__auto___65827 = (0);
while(true){
if((i__4731__auto___65827 < len__4730__auto___65826)){
args__4736__auto__.push((arguments[i__4731__auto___65827]));

var G__65828 = (i__4731__auto___65827 + (1));
i__4731__auto___65827 = G__65828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65160 = conformed_args__63699__auto__;
var map__65160__$1 = (((((!((map__65160 == null))))?(((((map__65160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65160):map__65160);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65159){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65159));
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
var len__4730__auto___65829 = arguments.length;
var i__4731__auto___65830 = (0);
while(true){
if((i__4731__auto___65830 < len__4730__auto___65829)){
args__4736__auto__.push((arguments[i__4731__auto___65830]));

var G__65831 = (i__4731__auto___65830 + (1));
i__4731__auto___65830 = G__65831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65163 = conformed_args__63699__auto__;
var map__65163__$1 = (((((!((map__65163 == null))))?(((((map__65163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65163):map__65163);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65162));
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
var len__4730__auto___65832 = arguments.length;
var i__4731__auto___65833 = (0);
while(true){
if((i__4731__auto___65833 < len__4730__auto___65832)){
args__4736__auto__.push((arguments[i__4731__auto___65833]));

var G__65834 = (i__4731__auto___65833 + (1));
i__4731__auto___65833 = G__65834;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65166 = conformed_args__63699__auto__;
var map__65166__$1 = (((((!((map__65166 == null))))?(((((map__65166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65166):map__65166);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65165){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65165));
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
var len__4730__auto___65835 = arguments.length;
var i__4731__auto___65836 = (0);
while(true){
if((i__4731__auto___65836 < len__4730__auto___65835)){
args__4736__auto__.push((arguments[i__4731__auto___65836]));

var G__65837 = (i__4731__auto___65836 + (1));
i__4731__auto___65836 = G__65837;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65169 = conformed_args__63699__auto__;
var map__65169__$1 = (((((!((map__65169 == null))))?(((((map__65169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65169):map__65169);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65168){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65168));
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
var len__4730__auto___65838 = arguments.length;
var i__4731__auto___65839 = (0);
while(true){
if((i__4731__auto___65839 < len__4730__auto___65838)){
args__4736__auto__.push((arguments[i__4731__auto___65839]));

var G__65840 = (i__4731__auto___65839 + (1));
i__4731__auto___65839 = G__65840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65172 = conformed_args__63699__auto__;
var map__65172__$1 = (((((!((map__65172 == null))))?(((((map__65172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65172):map__65172);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65171){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65171));
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
var len__4730__auto___65841 = arguments.length;
var i__4731__auto___65842 = (0);
while(true){
if((i__4731__auto___65842 < len__4730__auto___65841)){
args__4736__auto__.push((arguments[i__4731__auto___65842]));

var G__65843 = (i__4731__auto___65842 + (1));
i__4731__auto___65842 = G__65843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65175 = conformed_args__63699__auto__;
var map__65175__$1 = (((((!((map__65175 == null))))?(((((map__65175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65175):map__65175);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65174){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65174));
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
var len__4730__auto___65844 = arguments.length;
var i__4731__auto___65845 = (0);
while(true){
if((i__4731__auto___65845 < len__4730__auto___65844)){
args__4736__auto__.push((arguments[i__4731__auto___65845]));

var G__65846 = (i__4731__auto___65845 + (1));
i__4731__auto___65845 = G__65846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65178 = conformed_args__63699__auto__;
var map__65178__$1 = (((((!((map__65178 == null))))?(((((map__65178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65178):map__65178);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65177){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65177));
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
var len__4730__auto___65847 = arguments.length;
var i__4731__auto___65848 = (0);
while(true){
if((i__4731__auto___65848 < len__4730__auto___65847)){
args__4736__auto__.push((arguments[i__4731__auto___65848]));

var G__65849 = (i__4731__auto___65848 + (1));
i__4731__auto___65848 = G__65849;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65181 = conformed_args__63699__auto__;
var map__65181__$1 = (((((!((map__65181 == null))))?(((((map__65181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65181):map__65181);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq65180){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65180));
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
var len__4730__auto___65850 = arguments.length;
var i__4731__auto___65851 = (0);
while(true){
if((i__4731__auto___65851 < len__4730__auto___65850)){
args__4736__auto__.push((arguments[i__4731__auto___65851]));

var G__65852 = (i__4731__auto___65851 + (1));
i__4731__auto___65851 = G__65852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65184 = conformed_args__63699__auto__;
var map__65184__$1 = (((((!((map__65184 == null))))?(((((map__65184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65184):map__65184);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq65183){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65183));
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
var len__4730__auto___65853 = arguments.length;
var i__4731__auto___65854 = (0);
while(true){
if((i__4731__auto___65854 < len__4730__auto___65853)){
args__4736__auto__.push((arguments[i__4731__auto___65854]));

var G__65855 = (i__4731__auto___65854 + (1));
i__4731__auto___65854 = G__65855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65187 = conformed_args__63699__auto__;
var map__65187__$1 = (((((!((map__65187 == null))))?(((((map__65187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65187):map__65187);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq65186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65186));
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
var len__4730__auto___65856 = arguments.length;
var i__4731__auto___65857 = (0);
while(true){
if((i__4731__auto___65857 < len__4730__auto___65856)){
args__4736__auto__.push((arguments[i__4731__auto___65857]));

var G__65858 = (i__4731__auto___65857 + (1));
i__4731__auto___65857 = G__65858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65190 = conformed_args__63699__auto__;
var map__65190__$1 = (((((!((map__65190 == null))))?(((((map__65190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65190):map__65190);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq65189){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65189));
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
var len__4730__auto___65859 = arguments.length;
var i__4731__auto___65860 = (0);
while(true){
if((i__4731__auto___65860 < len__4730__auto___65859)){
args__4736__auto__.push((arguments[i__4731__auto___65860]));

var G__65861 = (i__4731__auto___65860 + (1));
i__4731__auto___65860 = G__65861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65193 = conformed_args__63699__auto__;
var map__65193__$1 = (((((!((map__65193 == null))))?(((((map__65193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65193):map__65193);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq65192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65192));
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
var len__4730__auto___65862 = arguments.length;
var i__4731__auto___65863 = (0);
while(true){
if((i__4731__auto___65863 < len__4730__auto___65862)){
args__4736__auto__.push((arguments[i__4731__auto___65863]));

var G__65864 = (i__4731__auto___65863 + (1));
i__4731__auto___65863 = G__65864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65196 = conformed_args__63699__auto__;
var map__65196__$1 = (((((!((map__65196 == null))))?(((((map__65196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65196):map__65196);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq65195){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65195));
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
var len__4730__auto___65865 = arguments.length;
var i__4731__auto___65866 = (0);
while(true){
if((i__4731__auto___65866 < len__4730__auto___65865)){
args__4736__auto__.push((arguments[i__4731__auto___65866]));

var G__65867 = (i__4731__auto___65866 + (1));
i__4731__auto___65866 = G__65867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65199 = conformed_args__63699__auto__;
var map__65199__$1 = (((((!((map__65199 == null))))?(((((map__65199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65199):map__65199);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65199__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65199__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65199__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq65198){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65198));
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
var len__4730__auto___65868 = arguments.length;
var i__4731__auto___65869 = (0);
while(true){
if((i__4731__auto___65869 < len__4730__auto___65868)){
args__4736__auto__.push((arguments[i__4731__auto___65869]));

var G__65870 = (i__4731__auto___65869 + (1));
i__4731__auto___65869 = G__65870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65202 = conformed_args__63699__auto__;
var map__65202__$1 = (((((!((map__65202 == null))))?(((((map__65202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65202):map__65202);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq65201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65201));
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
var len__4730__auto___65871 = arguments.length;
var i__4731__auto___65872 = (0);
while(true){
if((i__4731__auto___65872 < len__4730__auto___65871)){
args__4736__auto__.push((arguments[i__4731__auto___65872]));

var G__65873 = (i__4731__auto___65872 + (1));
i__4731__auto___65872 = G__65873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65205 = conformed_args__63699__auto__;
var map__65205__$1 = (((((!((map__65205 == null))))?(((((map__65205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65205):map__65205);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq65204){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65204));
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
var len__4730__auto___65874 = arguments.length;
var i__4731__auto___65875 = (0);
while(true){
if((i__4731__auto___65875 < len__4730__auto___65874)){
args__4736__auto__.push((arguments[i__4731__auto___65875]));

var G__65876 = (i__4731__auto___65875 + (1));
i__4731__auto___65875 = G__65876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65208 = conformed_args__63699__auto__;
var map__65208__$1 = (((((!((map__65208 == null))))?(((((map__65208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65208):map__65208);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq65207){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65207));
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
var len__4730__auto___65877 = arguments.length;
var i__4731__auto___65878 = (0);
while(true){
if((i__4731__auto___65878 < len__4730__auto___65877)){
args__4736__auto__.push((arguments[i__4731__auto___65878]));

var G__65879 = (i__4731__auto___65878 + (1));
i__4731__auto___65878 = G__65879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65211 = conformed_args__63699__auto__;
var map__65211__$1 = (((((!((map__65211 == null))))?(((((map__65211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65211):map__65211);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq65210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65210));
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
var len__4730__auto___65880 = arguments.length;
var i__4731__auto___65881 = (0);
while(true){
if((i__4731__auto___65881 < len__4730__auto___65880)){
args__4736__auto__.push((arguments[i__4731__auto___65881]));

var G__65882 = (i__4731__auto___65881 + (1));
i__4731__auto___65881 = G__65882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65214 = conformed_args__63699__auto__;
var map__65214__$1 = (((((!((map__65214 == null))))?(((((map__65214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65214):map__65214);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq65213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65213));
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
var len__4730__auto___65883 = arguments.length;
var i__4731__auto___65884 = (0);
while(true){
if((i__4731__auto___65884 < len__4730__auto___65883)){
args__4736__auto__.push((arguments[i__4731__auto___65884]));

var G__65885 = (i__4731__auto___65884 + (1));
i__4731__auto___65884 = G__65885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65217 = conformed_args__63699__auto__;
var map__65217__$1 = (((((!((map__65217 == null))))?(((((map__65217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65217):map__65217);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq65216){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65216));
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
var len__4730__auto___65886 = arguments.length;
var i__4731__auto___65887 = (0);
while(true){
if((i__4731__auto___65887 < len__4730__auto___65886)){
args__4736__auto__.push((arguments[i__4731__auto___65887]));

var G__65888 = (i__4731__auto___65887 + (1));
i__4731__auto___65887 = G__65888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65220 = conformed_args__63699__auto__;
var map__65220__$1 = (((((!((map__65220 == null))))?(((((map__65220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65220):map__65220);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq65219){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65219));
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
var len__4730__auto___65889 = arguments.length;
var i__4731__auto___65890 = (0);
while(true){
if((i__4731__auto___65890 < len__4730__auto___65889)){
args__4736__auto__.push((arguments[i__4731__auto___65890]));

var G__65891 = (i__4731__auto___65890 + (1));
i__4731__auto___65890 = G__65891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65223 = conformed_args__63699__auto__;
var map__65223__$1 = (((((!((map__65223 == null))))?(((((map__65223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65223):map__65223);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq65222){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65222));
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
var len__4730__auto___65892 = arguments.length;
var i__4731__auto___65893 = (0);
while(true){
if((i__4731__auto___65893 < len__4730__auto___65892)){
args__4736__auto__.push((arguments[i__4731__auto___65893]));

var G__65894 = (i__4731__auto___65893 + (1));
i__4731__auto___65893 = G__65894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65226 = conformed_args__63699__auto__;
var map__65226__$1 = (((((!((map__65226 == null))))?(((((map__65226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65226):map__65226);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq65225){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65225));
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
var len__4730__auto___65895 = arguments.length;
var i__4731__auto___65896 = (0);
while(true){
if((i__4731__auto___65896 < len__4730__auto___65895)){
args__4736__auto__.push((arguments[i__4731__auto___65896]));

var G__65897 = (i__4731__auto___65896 + (1));
i__4731__auto___65896 = G__65897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65229 = conformed_args__63699__auto__;
var map__65229__$1 = (((((!((map__65229 == null))))?(((((map__65229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65229):map__65229);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq65228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65228));
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
var len__4730__auto___65898 = arguments.length;
var i__4731__auto___65899 = (0);
while(true){
if((i__4731__auto___65899 < len__4730__auto___65898)){
args__4736__auto__.push((arguments[i__4731__auto___65899]));

var G__65900 = (i__4731__auto___65899 + (1));
i__4731__auto___65899 = G__65900;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65232 = conformed_args__63699__auto__;
var map__65232__$1 = (((((!((map__65232 == null))))?(((((map__65232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65232):map__65232);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq65231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65231));
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
var len__4730__auto___65901 = arguments.length;
var i__4731__auto___65902 = (0);
while(true){
if((i__4731__auto___65902 < len__4730__auto___65901)){
args__4736__auto__.push((arguments[i__4731__auto___65902]));

var G__65903 = (i__4731__auto___65902 + (1));
i__4731__auto___65902 = G__65903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65235 = conformed_args__63699__auto__;
var map__65235__$1 = (((((!((map__65235 == null))))?(((((map__65235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65235):map__65235);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq65234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65234));
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
var len__4730__auto___65904 = arguments.length;
var i__4731__auto___65905 = (0);
while(true){
if((i__4731__auto___65905 < len__4730__auto___65904)){
args__4736__auto__.push((arguments[i__4731__auto___65905]));

var G__65906 = (i__4731__auto___65905 + (1));
i__4731__auto___65905 = G__65906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65238 = conformed_args__63699__auto__;
var map__65238__$1 = (((((!((map__65238 == null))))?(((((map__65238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65238):map__65238);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq65237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65237));
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
var len__4730__auto___65907 = arguments.length;
var i__4731__auto___65908 = (0);
while(true){
if((i__4731__auto___65908 < len__4730__auto___65907)){
args__4736__auto__.push((arguments[i__4731__auto___65908]));

var G__65909 = (i__4731__auto___65908 + (1));
i__4731__auto___65908 = G__65909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65241 = conformed_args__63699__auto__;
var map__65241__$1 = (((((!((map__65241 == null))))?(((((map__65241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65241):map__65241);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq65240){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65240));
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
var len__4730__auto___65910 = arguments.length;
var i__4731__auto___65911 = (0);
while(true){
if((i__4731__auto___65911 < len__4730__auto___65910)){
args__4736__auto__.push((arguments[i__4731__auto___65911]));

var G__65912 = (i__4731__auto___65911 + (1));
i__4731__auto___65911 = G__65912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65244 = conformed_args__63699__auto__;
var map__65244__$1 = (((((!((map__65244 == null))))?(((((map__65244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65244):map__65244);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq65243){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65243));
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
var len__4730__auto___65913 = arguments.length;
var i__4731__auto___65914 = (0);
while(true){
if((i__4731__auto___65914 < len__4730__auto___65913)){
args__4736__auto__.push((arguments[i__4731__auto___65914]));

var G__65915 = (i__4731__auto___65914 + (1));
i__4731__auto___65914 = G__65915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65247 = conformed_args__63699__auto__;
var map__65247__$1 = (((((!((map__65247 == null))))?(((((map__65247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65247):map__65247);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq65246){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65246));
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
var len__4730__auto___65916 = arguments.length;
var i__4731__auto___65917 = (0);
while(true){
if((i__4731__auto___65917 < len__4730__auto___65916)){
args__4736__auto__.push((arguments[i__4731__auto___65917]));

var G__65918 = (i__4731__auto___65917 + (1));
i__4731__auto___65917 = G__65918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65250 = conformed_args__63699__auto__;
var map__65250__$1 = (((((!((map__65250 == null))))?(((((map__65250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65250):map__65250);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq65249){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65249));
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
var len__4730__auto___65919 = arguments.length;
var i__4731__auto___65920 = (0);
while(true){
if((i__4731__auto___65920 < len__4730__auto___65919)){
args__4736__auto__.push((arguments[i__4731__auto___65920]));

var G__65921 = (i__4731__auto___65920 + (1));
i__4731__auto___65920 = G__65921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65253 = conformed_args__63699__auto__;
var map__65253__$1 = (((((!((map__65253 == null))))?(((((map__65253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65253):map__65253);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq65252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65252));
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
var len__4730__auto___65922 = arguments.length;
var i__4731__auto___65923 = (0);
while(true){
if((i__4731__auto___65923 < len__4730__auto___65922)){
args__4736__auto__.push((arguments[i__4731__auto___65923]));

var G__65924 = (i__4731__auto___65923 + (1));
i__4731__auto___65923 = G__65924;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65256 = conformed_args__63699__auto__;
var map__65256__$1 = (((((!((map__65256 == null))))?(((((map__65256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65256):map__65256);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq65255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65255));
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
var len__4730__auto___65925 = arguments.length;
var i__4731__auto___65926 = (0);
while(true){
if((i__4731__auto___65926 < len__4730__auto___65925)){
args__4736__auto__.push((arguments[i__4731__auto___65926]));

var G__65927 = (i__4731__auto___65926 + (1));
i__4731__auto___65926 = G__65927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65259 = conformed_args__63699__auto__;
var map__65259__$1 = (((((!((map__65259 == null))))?(((((map__65259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65259):map__65259);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq65258){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65258));
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
var len__4730__auto___65928 = arguments.length;
var i__4731__auto___65929 = (0);
while(true){
if((i__4731__auto___65929 < len__4730__auto___65928)){
args__4736__auto__.push((arguments[i__4731__auto___65929]));

var G__65930 = (i__4731__auto___65929 + (1));
i__4731__auto___65929 = G__65930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65262 = conformed_args__63699__auto__;
var map__65262__$1 = (((((!((map__65262 == null))))?(((((map__65262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65262):map__65262);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq65261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65261));
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
var len__4730__auto___65931 = arguments.length;
var i__4731__auto___65932 = (0);
while(true){
if((i__4731__auto___65932 < len__4730__auto___65931)){
args__4736__auto__.push((arguments[i__4731__auto___65932]));

var G__65933 = (i__4731__auto___65932 + (1));
i__4731__auto___65932 = G__65933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65265 = conformed_args__63699__auto__;
var map__65265__$1 = (((((!((map__65265 == null))))?(((((map__65265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65265):map__65265);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq65264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65264));
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
var len__4730__auto___65934 = arguments.length;
var i__4731__auto___65935 = (0);
while(true){
if((i__4731__auto___65935 < len__4730__auto___65934)){
args__4736__auto__.push((arguments[i__4731__auto___65935]));

var G__65936 = (i__4731__auto___65935 + (1));
i__4731__auto___65935 = G__65936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65268 = conformed_args__63699__auto__;
var map__65268__$1 = (((((!((map__65268 == null))))?(((((map__65268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65268):map__65268);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq65267){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65267));
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
var len__4730__auto___65937 = arguments.length;
var i__4731__auto___65938 = (0);
while(true){
if((i__4731__auto___65938 < len__4730__auto___65937)){
args__4736__auto__.push((arguments[i__4731__auto___65938]));

var G__65939 = (i__4731__auto___65938 + (1));
i__4731__auto___65938 = G__65939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65271 = conformed_args__63699__auto__;
var map__65271__$1 = (((((!((map__65271 == null))))?(((((map__65271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65271):map__65271);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq65270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65270));
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
var len__4730__auto___65940 = arguments.length;
var i__4731__auto___65941 = (0);
while(true){
if((i__4731__auto___65941 < len__4730__auto___65940)){
args__4736__auto__.push((arguments[i__4731__auto___65941]));

var G__65942 = (i__4731__auto___65941 + (1));
i__4731__auto___65941 = G__65942;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65274 = conformed_args__63699__auto__;
var map__65274__$1 = (((((!((map__65274 == null))))?(((((map__65274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65274):map__65274);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq65273){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65273));
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
var len__4730__auto___65943 = arguments.length;
var i__4731__auto___65944 = (0);
while(true){
if((i__4731__auto___65944 < len__4730__auto___65943)){
args__4736__auto__.push((arguments[i__4731__auto___65944]));

var G__65945 = (i__4731__auto___65944 + (1));
i__4731__auto___65944 = G__65945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65277 = conformed_args__63699__auto__;
var map__65277__$1 = (((((!((map__65277 == null))))?(((((map__65277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65277):map__65277);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq65276){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65276));
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
var len__4730__auto___65946 = arguments.length;
var i__4731__auto___65947 = (0);
while(true){
if((i__4731__auto___65947 < len__4730__auto___65946)){
args__4736__auto__.push((arguments[i__4731__auto___65947]));

var G__65948 = (i__4731__auto___65947 + (1));
i__4731__auto___65947 = G__65948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65280 = conformed_args__63699__auto__;
var map__65280__$1 = (((((!((map__65280 == null))))?(((((map__65280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65280):map__65280);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq65279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65279));
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
var len__4730__auto___65949 = arguments.length;
var i__4731__auto___65950 = (0);
while(true){
if((i__4731__auto___65950 < len__4730__auto___65949)){
args__4736__auto__.push((arguments[i__4731__auto___65950]));

var G__65951 = (i__4731__auto___65950 + (1));
i__4731__auto___65950 = G__65951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65283 = conformed_args__63699__auto__;
var map__65283__$1 = (((((!((map__65283 == null))))?(((((map__65283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65283):map__65283);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq65282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65282));
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
var len__4730__auto___65952 = arguments.length;
var i__4731__auto___65953 = (0);
while(true){
if((i__4731__auto___65953 < len__4730__auto___65952)){
args__4736__auto__.push((arguments[i__4731__auto___65953]));

var G__65954 = (i__4731__auto___65953 + (1));
i__4731__auto___65953 = G__65954;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65286 = conformed_args__63699__auto__;
var map__65286__$1 = (((((!((map__65286 == null))))?(((((map__65286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65286):map__65286);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq65285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65285));
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
var len__4730__auto___65955 = arguments.length;
var i__4731__auto___65956 = (0);
while(true){
if((i__4731__auto___65956 < len__4730__auto___65955)){
args__4736__auto__.push((arguments[i__4731__auto___65956]));

var G__65957 = (i__4731__auto___65956 + (1));
i__4731__auto___65956 = G__65957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65289 = conformed_args__63699__auto__;
var map__65289__$1 = (((((!((map__65289 == null))))?(((((map__65289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65289):map__65289);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq65288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65288));
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
var len__4730__auto___65958 = arguments.length;
var i__4731__auto___65959 = (0);
while(true){
if((i__4731__auto___65959 < len__4730__auto___65958)){
args__4736__auto__.push((arguments[i__4731__auto___65959]));

var G__65960 = (i__4731__auto___65959 + (1));
i__4731__auto___65959 = G__65960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65292 = conformed_args__63699__auto__;
var map__65292__$1 = (((((!((map__65292 == null))))?(((((map__65292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65292):map__65292);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq65291){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65291));
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
var len__4730__auto___65961 = arguments.length;
var i__4731__auto___65962 = (0);
while(true){
if((i__4731__auto___65962 < len__4730__auto___65961)){
args__4736__auto__.push((arguments[i__4731__auto___65962]));

var G__65963 = (i__4731__auto___65962 + (1));
i__4731__auto___65962 = G__65963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65295 = conformed_args__63699__auto__;
var map__65295__$1 = (((((!((map__65295 == null))))?(((((map__65295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65295):map__65295);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq65294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65294));
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
var len__4730__auto___65964 = arguments.length;
var i__4731__auto___65965 = (0);
while(true){
if((i__4731__auto___65965 < len__4730__auto___65964)){
args__4736__auto__.push((arguments[i__4731__auto___65965]));

var G__65966 = (i__4731__auto___65965 + (1));
i__4731__auto___65965 = G__65966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65298 = conformed_args__63699__auto__;
var map__65298__$1 = (((((!((map__65298 == null))))?(((((map__65298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65298):map__65298);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq65297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65297));
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
var len__4730__auto___65967 = arguments.length;
var i__4731__auto___65968 = (0);
while(true){
if((i__4731__auto___65968 < len__4730__auto___65967)){
args__4736__auto__.push((arguments[i__4731__auto___65968]));

var G__65969 = (i__4731__auto___65968 + (1));
i__4731__auto___65968 = G__65969;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65301 = conformed_args__63699__auto__;
var map__65301__$1 = (((((!((map__65301 == null))))?(((((map__65301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65301):map__65301);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq65300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65300));
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
var len__4730__auto___65970 = arguments.length;
var i__4731__auto___65971 = (0);
while(true){
if((i__4731__auto___65971 < len__4730__auto___65970)){
args__4736__auto__.push((arguments[i__4731__auto___65971]));

var G__65972 = (i__4731__auto___65971 + (1));
i__4731__auto___65971 = G__65972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65304 = conformed_args__63699__auto__;
var map__65304__$1 = (((((!((map__65304 == null))))?(((((map__65304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65304):map__65304);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq65303){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65303));
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
var len__4730__auto___65973 = arguments.length;
var i__4731__auto___65974 = (0);
while(true){
if((i__4731__auto___65974 < len__4730__auto___65973)){
args__4736__auto__.push((arguments[i__4731__auto___65974]));

var G__65975 = (i__4731__auto___65974 + (1));
i__4731__auto___65974 = G__65975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65307 = conformed_args__63699__auto__;
var map__65307__$1 = (((((!((map__65307 == null))))?(((((map__65307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65307):map__65307);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq65306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65306));
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
var len__4730__auto___65976 = arguments.length;
var i__4731__auto___65977 = (0);
while(true){
if((i__4731__auto___65977 < len__4730__auto___65976)){
args__4736__auto__.push((arguments[i__4731__auto___65977]));

var G__65978 = (i__4731__auto___65977 + (1));
i__4731__auto___65977 = G__65978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65310 = conformed_args__63699__auto__;
var map__65310__$1 = (((((!((map__65310 == null))))?(((((map__65310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65310):map__65310);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq65309){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65309));
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
var len__4730__auto___65979 = arguments.length;
var i__4731__auto___65980 = (0);
while(true){
if((i__4731__auto___65980 < len__4730__auto___65979)){
args__4736__auto__.push((arguments[i__4731__auto___65980]));

var G__65981 = (i__4731__auto___65980 + (1));
i__4731__auto___65980 = G__65981;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65313 = conformed_args__63699__auto__;
var map__65313__$1 = (((((!((map__65313 == null))))?(((((map__65313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65313):map__65313);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq65312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65312));
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
var len__4730__auto___65982 = arguments.length;
var i__4731__auto___65983 = (0);
while(true){
if((i__4731__auto___65983 < len__4730__auto___65982)){
args__4736__auto__.push((arguments[i__4731__auto___65983]));

var G__65984 = (i__4731__auto___65983 + (1));
i__4731__auto___65983 = G__65984;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65316 = conformed_args__63699__auto__;
var map__65316__$1 = (((((!((map__65316 == null))))?(((((map__65316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65316):map__65316);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq65315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65315));
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
var len__4730__auto___65985 = arguments.length;
var i__4731__auto___65986 = (0);
while(true){
if((i__4731__auto___65986 < len__4730__auto___65985)){
args__4736__auto__.push((arguments[i__4731__auto___65986]));

var G__65987 = (i__4731__auto___65986 + (1));
i__4731__auto___65986 = G__65987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65319 = conformed_args__63699__auto__;
var map__65319__$1 = (((((!((map__65319 == null))))?(((((map__65319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65319):map__65319);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq65318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65318));
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
var len__4730__auto___65988 = arguments.length;
var i__4731__auto___65989 = (0);
while(true){
if((i__4731__auto___65989 < len__4730__auto___65988)){
args__4736__auto__.push((arguments[i__4731__auto___65989]));

var G__65990 = (i__4731__auto___65989 + (1));
i__4731__auto___65989 = G__65990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65322 = conformed_args__63699__auto__;
var map__65322__$1 = (((((!((map__65322 == null))))?(((((map__65322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65322):map__65322);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq65321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65321));
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
var len__4730__auto___65991 = arguments.length;
var i__4731__auto___65992 = (0);
while(true){
if((i__4731__auto___65992 < len__4730__auto___65991)){
args__4736__auto__.push((arguments[i__4731__auto___65992]));

var G__65993 = (i__4731__auto___65992 + (1));
i__4731__auto___65992 = G__65993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65325 = conformed_args__63699__auto__;
var map__65325__$1 = (((((!((map__65325 == null))))?(((((map__65325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65325):map__65325);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq65324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65324));
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
var len__4730__auto___65994 = arguments.length;
var i__4731__auto___65995 = (0);
while(true){
if((i__4731__auto___65995 < len__4730__auto___65994)){
args__4736__auto__.push((arguments[i__4731__auto___65995]));

var G__65996 = (i__4731__auto___65995 + (1));
i__4731__auto___65995 = G__65996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65328 = conformed_args__63699__auto__;
var map__65328__$1 = (((((!((map__65328 == null))))?(((((map__65328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65328):map__65328);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq65327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65327));
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
var len__4730__auto___65997 = arguments.length;
var i__4731__auto___65998 = (0);
while(true){
if((i__4731__auto___65998 < len__4730__auto___65997)){
args__4736__auto__.push((arguments[i__4731__auto___65998]));

var G__65999 = (i__4731__auto___65998 + (1));
i__4731__auto___65998 = G__65999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65331 = conformed_args__63699__auto__;
var map__65331__$1 = (((((!((map__65331 == null))))?(((((map__65331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65331):map__65331);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq65330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65330));
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
var len__4730__auto___66000 = arguments.length;
var i__4731__auto___66001 = (0);
while(true){
if((i__4731__auto___66001 < len__4730__auto___66000)){
args__4736__auto__.push((arguments[i__4731__auto___66001]));

var G__66002 = (i__4731__auto___66001 + (1));
i__4731__auto___66001 = G__66002;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65334 = conformed_args__63699__auto__;
var map__65334__$1 = (((((!((map__65334 == null))))?(((((map__65334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65334):map__65334);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq65333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65333));
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
var len__4730__auto___66003 = arguments.length;
var i__4731__auto___66004 = (0);
while(true){
if((i__4731__auto___66004 < len__4730__auto___66003)){
args__4736__auto__.push((arguments[i__4731__auto___66004]));

var G__66005 = (i__4731__auto___66004 + (1));
i__4731__auto___66004 = G__66005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65337 = conformed_args__63699__auto__;
var map__65337__$1 = (((((!((map__65337 == null))))?(((((map__65337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65337):map__65337);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq65336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65336));
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
var len__4730__auto___66006 = arguments.length;
var i__4731__auto___66007 = (0);
while(true){
if((i__4731__auto___66007 < len__4730__auto___66006)){
args__4736__auto__.push((arguments[i__4731__auto___66007]));

var G__66008 = (i__4731__auto___66007 + (1));
i__4731__auto___66007 = G__66008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65340 = conformed_args__63699__auto__;
var map__65340__$1 = (((((!((map__65340 == null))))?(((((map__65340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65340):map__65340);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq65339){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65339));
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
var len__4730__auto___66009 = arguments.length;
var i__4731__auto___66010 = (0);
while(true){
if((i__4731__auto___66010 < len__4730__auto___66009)){
args__4736__auto__.push((arguments[i__4731__auto___66010]));

var G__66011 = (i__4731__auto___66010 + (1));
i__4731__auto___66010 = G__66011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65343 = conformed_args__63699__auto__;
var map__65343__$1 = (((((!((map__65343 == null))))?(((((map__65343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65343):map__65343);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq65342){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65342));
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
var len__4730__auto___66012 = arguments.length;
var i__4731__auto___66013 = (0);
while(true){
if((i__4731__auto___66013 < len__4730__auto___66012)){
args__4736__auto__.push((arguments[i__4731__auto___66013]));

var G__66014 = (i__4731__auto___66013 + (1));
i__4731__auto___66013 = G__66014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65346 = conformed_args__63699__auto__;
var map__65346__$1 = (((((!((map__65346 == null))))?(((((map__65346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65346):map__65346);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq65345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65345));
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
var len__4730__auto___66015 = arguments.length;
var i__4731__auto___66016 = (0);
while(true){
if((i__4731__auto___66016 < len__4730__auto___66015)){
args__4736__auto__.push((arguments[i__4731__auto___66016]));

var G__66017 = (i__4731__auto___66016 + (1));
i__4731__auto___66016 = G__66017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65349 = conformed_args__63699__auto__;
var map__65349__$1 = (((((!((map__65349 == null))))?(((((map__65349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65349):map__65349);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq65348){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65348));
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
var len__4730__auto___66018 = arguments.length;
var i__4731__auto___66019 = (0);
while(true){
if((i__4731__auto___66019 < len__4730__auto___66018)){
args__4736__auto__.push((arguments[i__4731__auto___66019]));

var G__66020 = (i__4731__auto___66019 + (1));
i__4731__auto___66019 = G__66020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65352 = conformed_args__63699__auto__;
var map__65352__$1 = (((((!((map__65352 == null))))?(((((map__65352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65352):map__65352);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq65351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65351));
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
var len__4730__auto___66021 = arguments.length;
var i__4731__auto___66022 = (0);
while(true){
if((i__4731__auto___66022 < len__4730__auto___66021)){
args__4736__auto__.push((arguments[i__4731__auto___66022]));

var G__66023 = (i__4731__auto___66022 + (1));
i__4731__auto___66022 = G__66023;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65355 = conformed_args__63699__auto__;
var map__65355__$1 = (((((!((map__65355 == null))))?(((((map__65355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65355):map__65355);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq65354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65354));
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
var len__4730__auto___66024 = arguments.length;
var i__4731__auto___66025 = (0);
while(true){
if((i__4731__auto___66025 < len__4730__auto___66024)){
args__4736__auto__.push((arguments[i__4731__auto___66025]));

var G__66026 = (i__4731__auto___66025 + (1));
i__4731__auto___66025 = G__66026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65358 = conformed_args__63699__auto__;
var map__65358__$1 = (((((!((map__65358 == null))))?(((((map__65358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65358):map__65358);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq65357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65357));
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
var len__4730__auto___66027 = arguments.length;
var i__4731__auto___66028 = (0);
while(true){
if((i__4731__auto___66028 < len__4730__auto___66027)){
args__4736__auto__.push((arguments[i__4731__auto___66028]));

var G__66029 = (i__4731__auto___66028 + (1));
i__4731__auto___66028 = G__66029;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65361 = conformed_args__63699__auto__;
var map__65361__$1 = (((((!((map__65361 == null))))?(((((map__65361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65361):map__65361);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq65360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65360));
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
var len__4730__auto___66030 = arguments.length;
var i__4731__auto___66031 = (0);
while(true){
if((i__4731__auto___66031 < len__4730__auto___66030)){
args__4736__auto__.push((arguments[i__4731__auto___66031]));

var G__66032 = (i__4731__auto___66031 + (1));
i__4731__auto___66031 = G__66032;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65364 = conformed_args__63699__auto__;
var map__65364__$1 = (((((!((map__65364 == null))))?(((((map__65364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65364):map__65364);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq65363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65363));
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
var len__4730__auto___66033 = arguments.length;
var i__4731__auto___66034 = (0);
while(true){
if((i__4731__auto___66034 < len__4730__auto___66033)){
args__4736__auto__.push((arguments[i__4731__auto___66034]));

var G__66035 = (i__4731__auto___66034 + (1));
i__4731__auto___66034 = G__66035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65367 = conformed_args__63699__auto__;
var map__65367__$1 = (((((!((map__65367 == null))))?(((((map__65367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65367):map__65367);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq65366){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65366));
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
var len__4730__auto___66036 = arguments.length;
var i__4731__auto___66037 = (0);
while(true){
if((i__4731__auto___66037 < len__4730__auto___66036)){
args__4736__auto__.push((arguments[i__4731__auto___66037]));

var G__66038 = (i__4731__auto___66037 + (1));
i__4731__auto___66037 = G__66038;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65370 = conformed_args__63699__auto__;
var map__65370__$1 = (((((!((map__65370 == null))))?(((((map__65370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65370):map__65370);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq65369){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65369));
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
var len__4730__auto___66039 = arguments.length;
var i__4731__auto___66040 = (0);
while(true){
if((i__4731__auto___66040 < len__4730__auto___66039)){
args__4736__auto__.push((arguments[i__4731__auto___66040]));

var G__66041 = (i__4731__auto___66040 + (1));
i__4731__auto___66040 = G__66041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65373 = conformed_args__63699__auto__;
var map__65373__$1 = (((((!((map__65373 == null))))?(((((map__65373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65373):map__65373);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq65372){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65372));
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
var len__4730__auto___66042 = arguments.length;
var i__4731__auto___66043 = (0);
while(true){
if((i__4731__auto___66043 < len__4730__auto___66042)){
args__4736__auto__.push((arguments[i__4731__auto___66043]));

var G__66044 = (i__4731__auto___66043 + (1));
i__4731__auto___66043 = G__66044;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65376 = conformed_args__63699__auto__;
var map__65376__$1 = (((((!((map__65376 == null))))?(((((map__65376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65376):map__65376);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq65375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65375));
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
var len__4730__auto___66045 = arguments.length;
var i__4731__auto___66046 = (0);
while(true){
if((i__4731__auto___66046 < len__4730__auto___66045)){
args__4736__auto__.push((arguments[i__4731__auto___66046]));

var G__66047 = (i__4731__auto___66046 + (1));
i__4731__auto___66046 = G__66047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65379 = conformed_args__63699__auto__;
var map__65379__$1 = (((((!((map__65379 == null))))?(((((map__65379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65379):map__65379);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq65378){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65378));
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
var len__4730__auto___66048 = arguments.length;
var i__4731__auto___66049 = (0);
while(true){
if((i__4731__auto___66049 < len__4730__auto___66048)){
args__4736__auto__.push((arguments[i__4731__auto___66049]));

var G__66050 = (i__4731__auto___66049 + (1));
i__4731__auto___66049 = G__66050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65382 = conformed_args__63699__auto__;
var map__65382__$1 = (((((!((map__65382 == null))))?(((((map__65382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65382):map__65382);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq65381){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65381));
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
var len__4730__auto___66051 = arguments.length;
var i__4731__auto___66052 = (0);
while(true){
if((i__4731__auto___66052 < len__4730__auto___66051)){
args__4736__auto__.push((arguments[i__4731__auto___66052]));

var G__66053 = (i__4731__auto___66052 + (1));
i__4731__auto___66052 = G__66053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65385 = conformed_args__63699__auto__;
var map__65385__$1 = (((((!((map__65385 == null))))?(((((map__65385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65385):map__65385);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65385__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65385__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65385__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq65384){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65384));
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
var len__4730__auto___66054 = arguments.length;
var i__4731__auto___66055 = (0);
while(true){
if((i__4731__auto___66055 < len__4730__auto___66054)){
args__4736__auto__.push((arguments[i__4731__auto___66055]));

var G__66056 = (i__4731__auto___66055 + (1));
i__4731__auto___66055 = G__66056;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65388 = conformed_args__63699__auto__;
var map__65388__$1 = (((((!((map__65388 == null))))?(((((map__65388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65388):map__65388);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq65387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65387));
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
var len__4730__auto___66057 = arguments.length;
var i__4731__auto___66058 = (0);
while(true){
if((i__4731__auto___66058 < len__4730__auto___66057)){
args__4736__auto__.push((arguments[i__4731__auto___66058]));

var G__66059 = (i__4731__auto___66058 + (1));
i__4731__auto___66058 = G__66059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65391 = conformed_args__63699__auto__;
var map__65391__$1 = (((((!((map__65391 == null))))?(((((map__65391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65391):map__65391);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq65390){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65390));
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
var len__4730__auto___66060 = arguments.length;
var i__4731__auto___66061 = (0);
while(true){
if((i__4731__auto___66061 < len__4730__auto___66060)){
args__4736__auto__.push((arguments[i__4731__auto___66061]));

var G__66062 = (i__4731__auto___66061 + (1));
i__4731__auto___66061 = G__66062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65394 = conformed_args__63699__auto__;
var map__65394__$1 = (((((!((map__65394 == null))))?(((((map__65394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65394):map__65394);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq65393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65393));
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
var len__4730__auto___66063 = arguments.length;
var i__4731__auto___66064 = (0);
while(true){
if((i__4731__auto___66064 < len__4730__auto___66063)){
args__4736__auto__.push((arguments[i__4731__auto___66064]));

var G__66065 = (i__4731__auto___66064 + (1));
i__4731__auto___66064 = G__66065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65397 = conformed_args__63699__auto__;
var map__65397__$1 = (((((!((map__65397 == null))))?(((((map__65397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65397):map__65397);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65397__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65397__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65397__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq65396){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65396));
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
var len__4730__auto___66066 = arguments.length;
var i__4731__auto___66067 = (0);
while(true){
if((i__4731__auto___66067 < len__4730__auto___66066)){
args__4736__auto__.push((arguments[i__4731__auto___66067]));

var G__66068 = (i__4731__auto___66067 + (1));
i__4731__auto___66067 = G__66068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65400 = conformed_args__63699__auto__;
var map__65400__$1 = (((((!((map__65400 == null))))?(((((map__65400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65400):map__65400);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq65399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65399));
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
var len__4730__auto___66069 = arguments.length;
var i__4731__auto___66070 = (0);
while(true){
if((i__4731__auto___66070 < len__4730__auto___66069)){
args__4736__auto__.push((arguments[i__4731__auto___66070]));

var G__66071 = (i__4731__auto___66070 + (1));
i__4731__auto___66070 = G__66071;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65403 = conformed_args__63699__auto__;
var map__65403__$1 = (((((!((map__65403 == null))))?(((((map__65403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65403):map__65403);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq65402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65402));
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
var len__4730__auto___66072 = arguments.length;
var i__4731__auto___66073 = (0);
while(true){
if((i__4731__auto___66073 < len__4730__auto___66072)){
args__4736__auto__.push((arguments[i__4731__auto___66073]));

var G__66074 = (i__4731__auto___66073 + (1));
i__4731__auto___66073 = G__66074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65406 = conformed_args__63699__auto__;
var map__65406__$1 = (((((!((map__65406 == null))))?(((((map__65406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65406):map__65406);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq65405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65405));
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
var len__4730__auto___66075 = arguments.length;
var i__4731__auto___66076 = (0);
while(true){
if((i__4731__auto___66076 < len__4730__auto___66075)){
args__4736__auto__.push((arguments[i__4731__auto___66076]));

var G__66077 = (i__4731__auto___66076 + (1));
i__4731__auto___66076 = G__66077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65409 = conformed_args__63699__auto__;
var map__65409__$1 = (((((!((map__65409 == null))))?(((((map__65409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65409):map__65409);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq65408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65408));
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
var len__4730__auto___66078 = arguments.length;
var i__4731__auto___66079 = (0);
while(true){
if((i__4731__auto___66079 < len__4730__auto___66078)){
args__4736__auto__.push((arguments[i__4731__auto___66079]));

var G__66080 = (i__4731__auto___66079 + (1));
i__4731__auto___66079 = G__66080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65412 = conformed_args__63699__auto__;
var map__65412__$1 = (((((!((map__65412 == null))))?(((((map__65412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65412):map__65412);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq65411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65411));
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
var len__4730__auto___66081 = arguments.length;
var i__4731__auto___66082 = (0);
while(true){
if((i__4731__auto___66082 < len__4730__auto___66081)){
args__4736__auto__.push((arguments[i__4731__auto___66082]));

var G__66083 = (i__4731__auto___66082 + (1));
i__4731__auto___66082 = G__66083;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65415 = conformed_args__63699__auto__;
var map__65415__$1 = (((((!((map__65415 == null))))?(((((map__65415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65415):map__65415);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65415__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq65414){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65414));
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
var len__4730__auto___66084 = arguments.length;
var i__4731__auto___66085 = (0);
while(true){
if((i__4731__auto___66085 < len__4730__auto___66084)){
args__4736__auto__.push((arguments[i__4731__auto___66085]));

var G__66086 = (i__4731__auto___66085 + (1));
i__4731__auto___66085 = G__66086;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65418 = conformed_args__63699__auto__;
var map__65418__$1 = (((((!((map__65418 == null))))?(((((map__65418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65418):map__65418);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq65417){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65417));
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
var len__4730__auto___66087 = arguments.length;
var i__4731__auto___66088 = (0);
while(true){
if((i__4731__auto___66088 < len__4730__auto___66087)){
args__4736__auto__.push((arguments[i__4731__auto___66088]));

var G__66089 = (i__4731__auto___66088 + (1));
i__4731__auto___66088 = G__66089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65421 = conformed_args__63699__auto__;
var map__65421__$1 = (((((!((map__65421 == null))))?(((((map__65421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65421):map__65421);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq65420){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65420));
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
var len__4730__auto___66090 = arguments.length;
var i__4731__auto___66091 = (0);
while(true){
if((i__4731__auto___66091 < len__4730__auto___66090)){
args__4736__auto__.push((arguments[i__4731__auto___66091]));

var G__66092 = (i__4731__auto___66091 + (1));
i__4731__auto___66091 = G__66092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65424 = conformed_args__63699__auto__;
var map__65424__$1 = (((((!((map__65424 == null))))?(((((map__65424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65424):map__65424);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq65423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65423));
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
var len__4730__auto___66093 = arguments.length;
var i__4731__auto___66094 = (0);
while(true){
if((i__4731__auto___66094 < len__4730__auto___66093)){
args__4736__auto__.push((arguments[i__4731__auto___66094]));

var G__66095 = (i__4731__auto___66094 + (1));
i__4731__auto___66094 = G__66095;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65427 = conformed_args__63699__auto__;
var map__65427__$1 = (((((!((map__65427 == null))))?(((((map__65427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65427):map__65427);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq65426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65426));
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
var len__4730__auto___66096 = arguments.length;
var i__4731__auto___66097 = (0);
while(true){
if((i__4731__auto___66097 < len__4730__auto___66096)){
args__4736__auto__.push((arguments[i__4731__auto___66097]));

var G__66098 = (i__4731__auto___66097 + (1));
i__4731__auto___66097 = G__66098;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65430 = conformed_args__63699__auto__;
var map__65430__$1 = (((((!((map__65430 == null))))?(((((map__65430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65430):map__65430);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq65429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65429));
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
var len__4730__auto___66099 = arguments.length;
var i__4731__auto___66100 = (0);
while(true){
if((i__4731__auto___66100 < len__4730__auto___66099)){
args__4736__auto__.push((arguments[i__4731__auto___66100]));

var G__66101 = (i__4731__auto___66100 + (1));
i__4731__auto___66100 = G__66101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65433 = conformed_args__63699__auto__;
var map__65433__$1 = (((((!((map__65433 == null))))?(((((map__65433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65433):map__65433);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq65432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65432));
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
var len__4730__auto___66102 = arguments.length;
var i__4731__auto___66103 = (0);
while(true){
if((i__4731__auto___66103 < len__4730__auto___66102)){
args__4736__auto__.push((arguments[i__4731__auto___66103]));

var G__66104 = (i__4731__auto___66103 + (1));
i__4731__auto___66103 = G__66104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65436 = conformed_args__63699__auto__;
var map__65436__$1 = (((((!((map__65436 == null))))?(((((map__65436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65436):map__65436);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq65435){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65435));
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
var len__4730__auto___66105 = arguments.length;
var i__4731__auto___66106 = (0);
while(true){
if((i__4731__auto___66106 < len__4730__auto___66105)){
args__4736__auto__.push((arguments[i__4731__auto___66106]));

var G__66107 = (i__4731__auto___66106 + (1));
i__4731__auto___66106 = G__66107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65439 = conformed_args__63699__auto__;
var map__65439__$1 = (((((!((map__65439 == null))))?(((((map__65439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65439):map__65439);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65439__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq65438){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65438));
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
var len__4730__auto___66108 = arguments.length;
var i__4731__auto___66109 = (0);
while(true){
if((i__4731__auto___66109 < len__4730__auto___66108)){
args__4736__auto__.push((arguments[i__4731__auto___66109]));

var G__66110 = (i__4731__auto___66109 + (1));
i__4731__auto___66109 = G__66110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65442 = conformed_args__63699__auto__;
var map__65442__$1 = (((((!((map__65442 == null))))?(((((map__65442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65442):map__65442);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq65441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65441));
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
var len__4730__auto___66111 = arguments.length;
var i__4731__auto___66112 = (0);
while(true){
if((i__4731__auto___66112 < len__4730__auto___66111)){
args__4736__auto__.push((arguments[i__4731__auto___66112]));

var G__66113 = (i__4731__auto___66112 + (1));
i__4731__auto___66112 = G__66113;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65445 = conformed_args__63699__auto__;
var map__65445__$1 = (((((!((map__65445 == null))))?(((((map__65445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65445):map__65445);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq65444){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65444));
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
var len__4730__auto___66114 = arguments.length;
var i__4731__auto___66115 = (0);
while(true){
if((i__4731__auto___66115 < len__4730__auto___66114)){
args__4736__auto__.push((arguments[i__4731__auto___66115]));

var G__66116 = (i__4731__auto___66115 + (1));
i__4731__auto___66115 = G__66116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65448 = conformed_args__63699__auto__;
var map__65448__$1 = (((((!((map__65448 == null))))?(((((map__65448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65448):map__65448);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq65447){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65447));
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
var len__4730__auto___66117 = arguments.length;
var i__4731__auto___66118 = (0);
while(true){
if((i__4731__auto___66118 < len__4730__auto___66117)){
args__4736__auto__.push((arguments[i__4731__auto___66118]));

var G__66119 = (i__4731__auto___66118 + (1));
i__4731__auto___66118 = G__66119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65451 = conformed_args__63699__auto__;
var map__65451__$1 = (((((!((map__65451 == null))))?(((((map__65451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65451):map__65451);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq65450){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65450));
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
var len__4730__auto___66120 = arguments.length;
var i__4731__auto___66121 = (0);
while(true){
if((i__4731__auto___66121 < len__4730__auto___66120)){
args__4736__auto__.push((arguments[i__4731__auto___66121]));

var G__66122 = (i__4731__auto___66121 + (1));
i__4731__auto___66121 = G__66122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65454 = conformed_args__63699__auto__;
var map__65454__$1 = (((((!((map__65454 == null))))?(((((map__65454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65454):map__65454);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq65453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65453));
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
var len__4730__auto___66123 = arguments.length;
var i__4731__auto___66124 = (0);
while(true){
if((i__4731__auto___66124 < len__4730__auto___66123)){
args__4736__auto__.push((arguments[i__4731__auto___66124]));

var G__66125 = (i__4731__auto___66124 + (1));
i__4731__auto___66124 = G__66125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65457 = conformed_args__63699__auto__;
var map__65457__$1 = (((((!((map__65457 == null))))?(((((map__65457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65457):map__65457);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq65456){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65456));
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
var len__4730__auto___66126 = arguments.length;
var i__4731__auto___66127 = (0);
while(true){
if((i__4731__auto___66127 < len__4730__auto___66126)){
args__4736__auto__.push((arguments[i__4731__auto___66127]));

var G__66128 = (i__4731__auto___66127 + (1));
i__4731__auto___66127 = G__66128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65460 = conformed_args__63699__auto__;
var map__65460__$1 = (((((!((map__65460 == null))))?(((((map__65460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65460):map__65460);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq65459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65459));
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
var len__4730__auto___66129 = arguments.length;
var i__4731__auto___66130 = (0);
while(true){
if((i__4731__auto___66130 < len__4730__auto___66129)){
args__4736__auto__.push((arguments[i__4731__auto___66130]));

var G__66131 = (i__4731__auto___66130 + (1));
i__4731__auto___66130 = G__66131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65463 = conformed_args__63699__auto__;
var map__65463__$1 = (((((!((map__65463 == null))))?(((((map__65463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65463):map__65463);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq65462){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65462));
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
var len__4730__auto___66132 = arguments.length;
var i__4731__auto___66133 = (0);
while(true){
if((i__4731__auto___66133 < len__4730__auto___66132)){
args__4736__auto__.push((arguments[i__4731__auto___66133]));

var G__66134 = (i__4731__auto___66133 + (1));
i__4731__auto___66133 = G__66134;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65466 = conformed_args__63699__auto__;
var map__65466__$1 = (((((!((map__65466 == null))))?(((((map__65466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65466):map__65466);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq65465){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65465));
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
var len__4730__auto___66135 = arguments.length;
var i__4731__auto___66136 = (0);
while(true){
if((i__4731__auto___66136 < len__4730__auto___66135)){
args__4736__auto__.push((arguments[i__4731__auto___66136]));

var G__66137 = (i__4731__auto___66136 + (1));
i__4731__auto___66136 = G__66137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65469 = conformed_args__63699__auto__;
var map__65469__$1 = (((((!((map__65469 == null))))?(((((map__65469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65469):map__65469);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq65468){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65468));
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
var len__4730__auto___66138 = arguments.length;
var i__4731__auto___66139 = (0);
while(true){
if((i__4731__auto___66139 < len__4730__auto___66138)){
args__4736__auto__.push((arguments[i__4731__auto___66139]));

var G__66140 = (i__4731__auto___66139 + (1));
i__4731__auto___66139 = G__66140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65472 = conformed_args__63699__auto__;
var map__65472__$1 = (((((!((map__65472 == null))))?(((((map__65472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65472):map__65472);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq65471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65471));
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
var len__4730__auto___66141 = arguments.length;
var i__4731__auto___66142 = (0);
while(true){
if((i__4731__auto___66142 < len__4730__auto___66141)){
args__4736__auto__.push((arguments[i__4731__auto___66142]));

var G__66143 = (i__4731__auto___66142 + (1));
i__4731__auto___66142 = G__66143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65475 = conformed_args__63699__auto__;
var map__65475__$1 = (((((!((map__65475 == null))))?(((((map__65475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65475):map__65475);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq65474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65474));
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
var len__4730__auto___66144 = arguments.length;
var i__4731__auto___66145 = (0);
while(true){
if((i__4731__auto___66145 < len__4730__auto___66144)){
args__4736__auto__.push((arguments[i__4731__auto___66145]));

var G__66146 = (i__4731__auto___66145 + (1));
i__4731__auto___66145 = G__66146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65478 = conformed_args__63699__auto__;
var map__65478__$1 = (((((!((map__65478 == null))))?(((((map__65478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65478):map__65478);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq65477){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65477));
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
var len__4730__auto___66147 = arguments.length;
var i__4731__auto___66148 = (0);
while(true){
if((i__4731__auto___66148 < len__4730__auto___66147)){
args__4736__auto__.push((arguments[i__4731__auto___66148]));

var G__66149 = (i__4731__auto___66148 + (1));
i__4731__auto___66148 = G__66149;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65481 = conformed_args__63699__auto__;
var map__65481__$1 = (((((!((map__65481 == null))))?(((((map__65481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65481):map__65481);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq65480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65480));
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
var len__4730__auto___66150 = arguments.length;
var i__4731__auto___66151 = (0);
while(true){
if((i__4731__auto___66151 < len__4730__auto___66150)){
args__4736__auto__.push((arguments[i__4731__auto___66151]));

var G__66152 = (i__4731__auto___66151 + (1));
i__4731__auto___66151 = G__66152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65484 = conformed_args__63699__auto__;
var map__65484__$1 = (((((!((map__65484 == null))))?(((((map__65484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65484):map__65484);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq65483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65483));
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
var len__4730__auto___66153 = arguments.length;
var i__4731__auto___66154 = (0);
while(true){
if((i__4731__auto___66154 < len__4730__auto___66153)){
args__4736__auto__.push((arguments[i__4731__auto___66154]));

var G__66155 = (i__4731__auto___66154 + (1));
i__4731__auto___66154 = G__66155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65487 = conformed_args__63699__auto__;
var map__65487__$1 = (((((!((map__65487 == null))))?(((((map__65487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65487):map__65487);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq65486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65486));
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
var len__4730__auto___66156 = arguments.length;
var i__4731__auto___66157 = (0);
while(true){
if((i__4731__auto___66157 < len__4730__auto___66156)){
args__4736__auto__.push((arguments[i__4731__auto___66157]));

var G__66158 = (i__4731__auto___66157 + (1));
i__4731__auto___66157 = G__66158;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65490 = conformed_args__63699__auto__;
var map__65490__$1 = (((((!((map__65490 == null))))?(((((map__65490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65490):map__65490);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq65489){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65489));
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
var len__4730__auto___66159 = arguments.length;
var i__4731__auto___66160 = (0);
while(true){
if((i__4731__auto___66160 < len__4730__auto___66159)){
args__4736__auto__.push((arguments[i__4731__auto___66160]));

var G__66161 = (i__4731__auto___66160 + (1));
i__4731__auto___66160 = G__66161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65493 = conformed_args__63699__auto__;
var map__65493__$1 = (((((!((map__65493 == null))))?(((((map__65493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65493):map__65493);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq65492){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65492));
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
var len__4730__auto___66162 = arguments.length;
var i__4731__auto___66163 = (0);
while(true){
if((i__4731__auto___66163 < len__4730__auto___66162)){
args__4736__auto__.push((arguments[i__4731__auto___66163]));

var G__66164 = (i__4731__auto___66163 + (1));
i__4731__auto___66163 = G__66164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65496 = conformed_args__63699__auto__;
var map__65496__$1 = (((((!((map__65496 == null))))?(((((map__65496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65496):map__65496);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq65495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65495));
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
var len__4730__auto___66165 = arguments.length;
var i__4731__auto___66166 = (0);
while(true){
if((i__4731__auto___66166 < len__4730__auto___66165)){
args__4736__auto__.push((arguments[i__4731__auto___66166]));

var G__66167 = (i__4731__auto___66166 + (1));
i__4731__auto___66166 = G__66167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65499 = conformed_args__63699__auto__;
var map__65499__$1 = (((((!((map__65499 == null))))?(((((map__65499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65499):map__65499);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq65498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65498));
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
var len__4730__auto___66168 = arguments.length;
var i__4731__auto___66169 = (0);
while(true){
if((i__4731__auto___66169 < len__4730__auto___66168)){
args__4736__auto__.push((arguments[i__4731__auto___66169]));

var G__66170 = (i__4731__auto___66169 + (1));
i__4731__auto___66169 = G__66170;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65502 = conformed_args__63699__auto__;
var map__65502__$1 = (((((!((map__65502 == null))))?(((((map__65502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65502):map__65502);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq65501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65501));
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
var len__4730__auto___66171 = arguments.length;
var i__4731__auto___66172 = (0);
while(true){
if((i__4731__auto___66172 < len__4730__auto___66171)){
args__4736__auto__.push((arguments[i__4731__auto___66172]));

var G__66173 = (i__4731__auto___66172 + (1));
i__4731__auto___66172 = G__66173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65505 = conformed_args__63699__auto__;
var map__65505__$1 = (((((!((map__65505 == null))))?(((((map__65505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65505):map__65505);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq65504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65504));
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
var len__4730__auto___66174 = arguments.length;
var i__4731__auto___66175 = (0);
while(true){
if((i__4731__auto___66175 < len__4730__auto___66174)){
args__4736__auto__.push((arguments[i__4731__auto___66175]));

var G__66176 = (i__4731__auto___66175 + (1));
i__4731__auto___66175 = G__66176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65508 = conformed_args__63699__auto__;
var map__65508__$1 = (((((!((map__65508 == null))))?(((((map__65508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65508):map__65508);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq65507){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65507));
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
var len__4730__auto___66177 = arguments.length;
var i__4731__auto___66178 = (0);
while(true){
if((i__4731__auto___66178 < len__4730__auto___66177)){
args__4736__auto__.push((arguments[i__4731__auto___66178]));

var G__66179 = (i__4731__auto___66178 + (1));
i__4731__auto___66178 = G__66179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65511 = conformed_args__63699__auto__;
var map__65511__$1 = (((((!((map__65511 == null))))?(((((map__65511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65511):map__65511);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq65510){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65510));
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
var len__4730__auto___66180 = arguments.length;
var i__4731__auto___66181 = (0);
while(true){
if((i__4731__auto___66181 < len__4730__auto___66180)){
args__4736__auto__.push((arguments[i__4731__auto___66181]));

var G__66182 = (i__4731__auto___66181 + (1));
i__4731__auto___66181 = G__66182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65514 = conformed_args__63699__auto__;
var map__65514__$1 = (((((!((map__65514 == null))))?(((((map__65514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65514):map__65514);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq65513){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65513));
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
var len__4730__auto___66183 = arguments.length;
var i__4731__auto___66184 = (0);
while(true){
if((i__4731__auto___66184 < len__4730__auto___66183)){
args__4736__auto__.push((arguments[i__4731__auto___66184]));

var G__66185 = (i__4731__auto___66184 + (1));
i__4731__auto___66184 = G__66185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65517 = conformed_args__63699__auto__;
var map__65517__$1 = (((((!((map__65517 == null))))?(((((map__65517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65517):map__65517);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq65516){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65516));
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
var len__4730__auto___66186 = arguments.length;
var i__4731__auto___66187 = (0);
while(true){
if((i__4731__auto___66187 < len__4730__auto___66186)){
args__4736__auto__.push((arguments[i__4731__auto___66187]));

var G__66188 = (i__4731__auto___66187 + (1));
i__4731__auto___66187 = G__66188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65520 = conformed_args__63699__auto__;
var map__65520__$1 = (((((!((map__65520 == null))))?(((((map__65520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65520):map__65520);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq65519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65519));
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
var len__4730__auto___66189 = arguments.length;
var i__4731__auto___66190 = (0);
while(true){
if((i__4731__auto___66190 < len__4730__auto___66189)){
args__4736__auto__.push((arguments[i__4731__auto___66190]));

var G__66191 = (i__4731__auto___66190 + (1));
i__4731__auto___66190 = G__66191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65523 = conformed_args__63699__auto__;
var map__65523__$1 = (((((!((map__65523 == null))))?(((((map__65523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65523):map__65523);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq65522){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65522));
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
var len__4730__auto___66192 = arguments.length;
var i__4731__auto___66193 = (0);
while(true){
if((i__4731__auto___66193 < len__4730__auto___66192)){
args__4736__auto__.push((arguments[i__4731__auto___66193]));

var G__66194 = (i__4731__auto___66193 + (1));
i__4731__auto___66193 = G__66194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65526 = conformed_args__63699__auto__;
var map__65526__$1 = (((((!((map__65526 == null))))?(((((map__65526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65526):map__65526);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq65525){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65525));
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
var len__4730__auto___66195 = arguments.length;
var i__4731__auto___66196 = (0);
while(true){
if((i__4731__auto___66196 < len__4730__auto___66195)){
args__4736__auto__.push((arguments[i__4731__auto___66196]));

var G__66197 = (i__4731__auto___66196 + (1));
i__4731__auto___66196 = G__66197;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65529 = conformed_args__63699__auto__;
var map__65529__$1 = (((((!((map__65529 == null))))?(((((map__65529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65529):map__65529);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq65528){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65528));
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
var len__4730__auto___66198 = arguments.length;
var i__4731__auto___66199 = (0);
while(true){
if((i__4731__auto___66199 < len__4730__auto___66198)){
args__4736__auto__.push((arguments[i__4731__auto___66199]));

var G__66200 = (i__4731__auto___66199 + (1));
i__4731__auto___66199 = G__66200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63699__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65532 = conformed_args__63699__auto__;
var map__65532__$1 = (((((!((map__65532 == null))))?(((((map__65532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65532):map__65532);
var css__63702__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63701__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63700__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63701__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63701__auto__);
var attrs_value__63703__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63700__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63703__auto__], null),children__63701__auto____$1),css__63702__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq65531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65531));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
