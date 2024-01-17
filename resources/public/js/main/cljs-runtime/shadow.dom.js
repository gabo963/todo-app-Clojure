goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53846 = coll;
var G__53847 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53846,G__53847) : shadow.dom.lazy_native_coll_seq.call(null,G__53846,G__53847));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__53898 = arguments.length;
switch (G__53898) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__53918 = arguments.length;
switch (G__53918) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__53924 = arguments.length;
switch (G__53924) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__53937 = arguments.length;
switch (G__53937) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__53954 = arguments.length;
switch (G__53954) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__53958 = document;
var G__53959 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53958,G__53959);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__53961 = shadow.dom.dom_node(parent);
var G__53962 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53961,G__53962);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__53966 = shadow.dom.dom_node(el);
var G__53967 = cls;
return goog.dom.classlist.add(G__53966,G__53967);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__53971 = shadow.dom.dom_node(el);
var G__53972 = cls;
return goog.dom.classlist.remove(G__53971,G__53972);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53976 = arguments.length;
switch (G__53976) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__53982 = shadow.dom.dom_node(el);
var G__53983 = cls;
return goog.dom.classlist.toggle(G__53982,G__53983);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e53995){if((e53995 instanceof Object)){
var e = e53995;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53995;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54006 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54007 = null;
var count__54008 = (0);
var i__54009 = (0);
while(true){
if((i__54009 < count__54008)){
var el = chunk__54007.cljs$core$IIndexed$_nth$arity$2(null,i__54009);
var handler_54821__$1 = ((function (seq__54006,chunk__54007,count__54008,i__54009,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54006,chunk__54007,count__54008,i__54009,el))
;
var G__54030_54823 = el;
var G__54031_54824 = cljs.core.name(ev);
var G__54032_54825 = handler_54821__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54030_54823,G__54031_54824,G__54032_54825) : shadow.dom.dom_listen.call(null,G__54030_54823,G__54031_54824,G__54032_54825));


var G__54826 = seq__54006;
var G__54827 = chunk__54007;
var G__54828 = count__54008;
var G__54829 = (i__54009 + (1));
seq__54006 = G__54826;
chunk__54007 = G__54827;
count__54008 = G__54828;
i__54009 = G__54829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54006);
if(temp__5804__auto__){
var seq__54006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54006__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54006__$1);
var G__54830 = cljs.core.chunk_rest(seq__54006__$1);
var G__54831 = c__4550__auto__;
var G__54832 = cljs.core.count(c__4550__auto__);
var G__54833 = (0);
seq__54006 = G__54830;
chunk__54007 = G__54831;
count__54008 = G__54832;
i__54009 = G__54833;
continue;
} else {
var el = cljs.core.first(seq__54006__$1);
var handler_54834__$1 = ((function (seq__54006,chunk__54007,count__54008,i__54009,el,seq__54006__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54006,chunk__54007,count__54008,i__54009,el,seq__54006__$1,temp__5804__auto__))
;
var G__54037_54835 = el;
var G__54038_54836 = cljs.core.name(ev);
var G__54039_54837 = handler_54834__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54037_54835,G__54038_54836,G__54039_54837) : shadow.dom.dom_listen.call(null,G__54037_54835,G__54038_54836,G__54039_54837));


var G__54838 = cljs.core.next(seq__54006__$1);
var G__54839 = null;
var G__54840 = (0);
var G__54841 = (0);
seq__54006 = G__54838;
chunk__54007 = G__54839;
count__54008 = G__54840;
i__54009 = G__54841;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__54047 = arguments.length;
switch (G__54047) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__54062 = shadow.dom.dom_node(el);
var G__54063 = cljs.core.name(ev);
var G__54064 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54062,G__54063,G__54064) : shadow.dom.dom_listen.call(null,G__54062,G__54063,G__54064));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__54066 = shadow.dom.dom_node(el);
var G__54067 = cljs.core.name(ev);
var G__54068 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__54066,G__54067,G__54068) : shadow.dom.dom_listen_remove.call(null,G__54066,G__54067,G__54068));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54070 = cljs.core.seq(events);
var chunk__54071 = null;
var count__54072 = (0);
var i__54073 = (0);
while(true){
if((i__54073 < count__54072)){
var vec__54088 = chunk__54071.cljs$core$IIndexed$_nth$arity$2(null,i__54073);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54088,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54843 = seq__54070;
var G__54844 = chunk__54071;
var G__54845 = count__54072;
var G__54846 = (i__54073 + (1));
seq__54070 = G__54843;
chunk__54071 = G__54844;
count__54072 = G__54845;
i__54073 = G__54846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54070);
if(temp__5804__auto__){
var seq__54070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54070__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54070__$1);
var G__54847 = cljs.core.chunk_rest(seq__54070__$1);
var G__54848 = c__4550__auto__;
var G__54849 = cljs.core.count(c__4550__auto__);
var G__54850 = (0);
seq__54070 = G__54847;
chunk__54071 = G__54848;
count__54072 = G__54849;
i__54073 = G__54850;
continue;
} else {
var vec__54096 = cljs.core.first(seq__54070__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54096,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54851 = cljs.core.next(seq__54070__$1);
var G__54852 = null;
var G__54853 = (0);
var G__54854 = (0);
seq__54070 = G__54851;
chunk__54071 = G__54852;
count__54072 = G__54853;
i__54073 = G__54854;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__54102 = cljs.core.seq(styles);
var chunk__54103 = null;
var count__54104 = (0);
var i__54105 = (0);
while(true){
if((i__54105 < count__54104)){
var vec__54127 = chunk__54103.cljs$core$IIndexed$_nth$arity$2(null,i__54105);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54127,(1),null);
var G__54130_54855 = dom;
var G__54131_54856 = cljs.core.name(k);
var G__54132_54857 = (((v == null))?"":v);
goog.style.setStyle(G__54130_54855,G__54131_54856,G__54132_54857);


var G__54858 = seq__54102;
var G__54859 = chunk__54103;
var G__54860 = count__54104;
var G__54861 = (i__54105 + (1));
seq__54102 = G__54858;
chunk__54103 = G__54859;
count__54104 = G__54860;
i__54105 = G__54861;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54102);
if(temp__5804__auto__){
var seq__54102__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54102__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54102__$1);
var G__54862 = cljs.core.chunk_rest(seq__54102__$1);
var G__54863 = c__4550__auto__;
var G__54864 = cljs.core.count(c__4550__auto__);
var G__54865 = (0);
seq__54102 = G__54862;
chunk__54103 = G__54863;
count__54104 = G__54864;
i__54105 = G__54865;
continue;
} else {
var vec__54136 = cljs.core.first(seq__54102__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54136,(1),null);
var G__54139_54866 = dom;
var G__54140_54867 = cljs.core.name(k);
var G__54141_54868 = (((v == null))?"":v);
goog.style.setStyle(G__54139_54866,G__54140_54867,G__54141_54868);


var G__54869 = cljs.core.next(seq__54102__$1);
var G__54870 = null;
var G__54871 = (0);
var G__54872 = (0);
seq__54102 = G__54869;
chunk__54103 = G__54870;
count__54104 = G__54871;
i__54105 = G__54872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__54150_54873 = key;
var G__54150_54874__$1 = (((G__54150_54873 instanceof cljs.core.Keyword))?G__54150_54873.fqn:null);
switch (G__54150_54874__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54876 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54876,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54876,"aria-");
}
})())){
el.setAttribute(ks_54876,value);
} else {
(el[ks_54876] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__54155 = shadow.dom.dom_node(el);
var G__54156 = cls;
return goog.dom.classlist.contains(G__54155,G__54156);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54163){
var map__54164 = p__54163;
var map__54164__$1 = (((((!((map__54164 == null))))?(((((map__54164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54164):map__54164);
var props = map__54164__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54164__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54172 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54172,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54172,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54172,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54177 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54177,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54177;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54182 = arguments.length;
switch (G__54182) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54189){
var vec__54191 = p__54189;
var seq__54192 = cljs.core.seq(vec__54191);
var first__54193 = cljs.core.first(seq__54192);
var seq__54192__$1 = cljs.core.next(seq__54192);
var nn = first__54193;
var first__54193__$1 = cljs.core.first(seq__54192__$1);
var seq__54192__$2 = cljs.core.next(seq__54192__$1);
var np = first__54193__$1;
var nc = seq__54192__$2;
var node = vec__54191;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54197 = nn;
var G__54198 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54197,G__54198) : create_fn.call(null,G__54197,G__54198));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54200 = nn;
var G__54201 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54200,G__54201) : create_fn.call(null,G__54200,G__54201));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54212 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54212,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54212,(1),null);
var seq__54215_54878 = cljs.core.seq(node_children);
var chunk__54216_54879 = null;
var count__54217_54880 = (0);
var i__54218_54881 = (0);
while(true){
if((i__54218_54881 < count__54217_54880)){
var child_struct_54882 = chunk__54216_54879.cljs$core$IIndexed$_nth$arity$2(null,i__54218_54881);
var children_54883 = shadow.dom.dom_node(child_struct_54882);
if(cljs.core.seq_QMARK_(children_54883)){
var seq__54287_54884 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54883));
var chunk__54289_54885 = null;
var count__54290_54886 = (0);
var i__54291_54887 = (0);
while(true){
if((i__54291_54887 < count__54290_54886)){
var child_54888 = chunk__54289_54885.cljs$core$IIndexed$_nth$arity$2(null,i__54291_54887);
if(cljs.core.truth_(child_54888)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54888);


var G__54889 = seq__54287_54884;
var G__54890 = chunk__54289_54885;
var G__54891 = count__54290_54886;
var G__54892 = (i__54291_54887 + (1));
seq__54287_54884 = G__54889;
chunk__54289_54885 = G__54890;
count__54290_54886 = G__54891;
i__54291_54887 = G__54892;
continue;
} else {
var G__54893 = seq__54287_54884;
var G__54894 = chunk__54289_54885;
var G__54895 = count__54290_54886;
var G__54896 = (i__54291_54887 + (1));
seq__54287_54884 = G__54893;
chunk__54289_54885 = G__54894;
count__54290_54886 = G__54895;
i__54291_54887 = G__54896;
continue;
}
} else {
var temp__5804__auto___54897 = cljs.core.seq(seq__54287_54884);
if(temp__5804__auto___54897){
var seq__54287_54898__$1 = temp__5804__auto___54897;
if(cljs.core.chunked_seq_QMARK_(seq__54287_54898__$1)){
var c__4550__auto___54899 = cljs.core.chunk_first(seq__54287_54898__$1);
var G__54900 = cljs.core.chunk_rest(seq__54287_54898__$1);
var G__54901 = c__4550__auto___54899;
var G__54902 = cljs.core.count(c__4550__auto___54899);
var G__54903 = (0);
seq__54287_54884 = G__54900;
chunk__54289_54885 = G__54901;
count__54290_54886 = G__54902;
i__54291_54887 = G__54903;
continue;
} else {
var child_54904 = cljs.core.first(seq__54287_54898__$1);
if(cljs.core.truth_(child_54904)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54904);


var G__54905 = cljs.core.next(seq__54287_54898__$1);
var G__54906 = null;
var G__54907 = (0);
var G__54908 = (0);
seq__54287_54884 = G__54905;
chunk__54289_54885 = G__54906;
count__54290_54886 = G__54907;
i__54291_54887 = G__54908;
continue;
} else {
var G__54909 = cljs.core.next(seq__54287_54898__$1);
var G__54910 = null;
var G__54911 = (0);
var G__54912 = (0);
seq__54287_54884 = G__54909;
chunk__54289_54885 = G__54910;
count__54290_54886 = G__54911;
i__54291_54887 = G__54912;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54883);
}


var G__54913 = seq__54215_54878;
var G__54914 = chunk__54216_54879;
var G__54915 = count__54217_54880;
var G__54916 = (i__54218_54881 + (1));
seq__54215_54878 = G__54913;
chunk__54216_54879 = G__54914;
count__54217_54880 = G__54915;
i__54218_54881 = G__54916;
continue;
} else {
var temp__5804__auto___54917 = cljs.core.seq(seq__54215_54878);
if(temp__5804__auto___54917){
var seq__54215_54918__$1 = temp__5804__auto___54917;
if(cljs.core.chunked_seq_QMARK_(seq__54215_54918__$1)){
var c__4550__auto___54919 = cljs.core.chunk_first(seq__54215_54918__$1);
var G__54920 = cljs.core.chunk_rest(seq__54215_54918__$1);
var G__54921 = c__4550__auto___54919;
var G__54922 = cljs.core.count(c__4550__auto___54919);
var G__54923 = (0);
seq__54215_54878 = G__54920;
chunk__54216_54879 = G__54921;
count__54217_54880 = G__54922;
i__54218_54881 = G__54923;
continue;
} else {
var child_struct_54924 = cljs.core.first(seq__54215_54918__$1);
var children_54925 = shadow.dom.dom_node(child_struct_54924);
if(cljs.core.seq_QMARK_(children_54925)){
var seq__54311_54926 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54925));
var chunk__54313_54927 = null;
var count__54314_54928 = (0);
var i__54315_54929 = (0);
while(true){
if((i__54315_54929 < count__54314_54928)){
var child_54930 = chunk__54313_54927.cljs$core$IIndexed$_nth$arity$2(null,i__54315_54929);
if(cljs.core.truth_(child_54930)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54930);


var G__54931 = seq__54311_54926;
var G__54932 = chunk__54313_54927;
var G__54933 = count__54314_54928;
var G__54934 = (i__54315_54929 + (1));
seq__54311_54926 = G__54931;
chunk__54313_54927 = G__54932;
count__54314_54928 = G__54933;
i__54315_54929 = G__54934;
continue;
} else {
var G__54935 = seq__54311_54926;
var G__54936 = chunk__54313_54927;
var G__54937 = count__54314_54928;
var G__54938 = (i__54315_54929 + (1));
seq__54311_54926 = G__54935;
chunk__54313_54927 = G__54936;
count__54314_54928 = G__54937;
i__54315_54929 = G__54938;
continue;
}
} else {
var temp__5804__auto___54939__$1 = cljs.core.seq(seq__54311_54926);
if(temp__5804__auto___54939__$1){
var seq__54311_54940__$1 = temp__5804__auto___54939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54311_54940__$1)){
var c__4550__auto___54941 = cljs.core.chunk_first(seq__54311_54940__$1);
var G__54942 = cljs.core.chunk_rest(seq__54311_54940__$1);
var G__54943 = c__4550__auto___54941;
var G__54944 = cljs.core.count(c__4550__auto___54941);
var G__54945 = (0);
seq__54311_54926 = G__54942;
chunk__54313_54927 = G__54943;
count__54314_54928 = G__54944;
i__54315_54929 = G__54945;
continue;
} else {
var child_54946 = cljs.core.first(seq__54311_54940__$1);
if(cljs.core.truth_(child_54946)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54946);


var G__54947 = cljs.core.next(seq__54311_54940__$1);
var G__54948 = null;
var G__54949 = (0);
var G__54950 = (0);
seq__54311_54926 = G__54947;
chunk__54313_54927 = G__54948;
count__54314_54928 = G__54949;
i__54315_54929 = G__54950;
continue;
} else {
var G__54951 = cljs.core.next(seq__54311_54940__$1);
var G__54952 = null;
var G__54953 = (0);
var G__54954 = (0);
seq__54311_54926 = G__54951;
chunk__54313_54927 = G__54952;
count__54314_54928 = G__54953;
i__54315_54929 = G__54954;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54925);
}


var G__54955 = cljs.core.next(seq__54215_54918__$1);
var G__54956 = null;
var G__54957 = (0);
var G__54958 = (0);
seq__54215_54878 = G__54955;
chunk__54216_54879 = G__54956;
count__54217_54880 = G__54957;
i__54218_54881 = G__54958;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__54332 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54332);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54337 = cljs.core.seq(node);
var chunk__54338 = null;
var count__54339 = (0);
var i__54340 = (0);
while(true){
if((i__54340 < count__54339)){
var n = chunk__54338.cljs$core$IIndexed$_nth$arity$2(null,i__54340);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54959 = seq__54337;
var G__54960 = chunk__54338;
var G__54961 = count__54339;
var G__54962 = (i__54340 + (1));
seq__54337 = G__54959;
chunk__54338 = G__54960;
count__54339 = G__54961;
i__54340 = G__54962;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54337);
if(temp__5804__auto__){
var seq__54337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54337__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54337__$1);
var G__54963 = cljs.core.chunk_rest(seq__54337__$1);
var G__54964 = c__4550__auto__;
var G__54965 = cljs.core.count(c__4550__auto__);
var G__54966 = (0);
seq__54337 = G__54963;
chunk__54338 = G__54964;
count__54339 = G__54965;
i__54340 = G__54966;
continue;
} else {
var n = cljs.core.first(seq__54337__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54967 = cljs.core.next(seq__54337__$1);
var G__54968 = null;
var G__54969 = (0);
var G__54970 = (0);
seq__54337 = G__54967;
chunk__54338 = G__54968;
count__54339 = G__54969;
i__54340 = G__54970;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__54345 = shadow.dom.dom_node(new$);
var G__54346 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54345,G__54346);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54348 = arguments.length;
switch (G__54348) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__54352 = arguments.length;
switch (G__54352) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__54365 = arguments.length;
switch (G__54365) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54974 = arguments.length;
var i__4731__auto___54975 = (0);
while(true){
if((i__4731__auto___54975 < len__4730__auto___54974)){
args__4736__auto__.push((arguments[i__4731__auto___54975]));

var G__54976 = (i__4731__auto___54975 + (1));
i__4731__auto___54975 = G__54976;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54414_54977 = cljs.core.seq(nodes);
var chunk__54415_54978 = null;
var count__54416_54979 = (0);
var i__54417_54980 = (0);
while(true){
if((i__54417_54980 < count__54416_54979)){
var node_54981 = chunk__54415_54978.cljs$core$IIndexed$_nth$arity$2(null,i__54417_54980);
fragment.appendChild(shadow.dom._to_dom(node_54981));


var G__54982 = seq__54414_54977;
var G__54983 = chunk__54415_54978;
var G__54984 = count__54416_54979;
var G__54985 = (i__54417_54980 + (1));
seq__54414_54977 = G__54982;
chunk__54415_54978 = G__54983;
count__54416_54979 = G__54984;
i__54417_54980 = G__54985;
continue;
} else {
var temp__5804__auto___54986 = cljs.core.seq(seq__54414_54977);
if(temp__5804__auto___54986){
var seq__54414_54987__$1 = temp__5804__auto___54986;
if(cljs.core.chunked_seq_QMARK_(seq__54414_54987__$1)){
var c__4550__auto___54988 = cljs.core.chunk_first(seq__54414_54987__$1);
var G__54989 = cljs.core.chunk_rest(seq__54414_54987__$1);
var G__54990 = c__4550__auto___54988;
var G__54991 = cljs.core.count(c__4550__auto___54988);
var G__54992 = (0);
seq__54414_54977 = G__54989;
chunk__54415_54978 = G__54990;
count__54416_54979 = G__54991;
i__54417_54980 = G__54992;
continue;
} else {
var node_54993 = cljs.core.first(seq__54414_54987__$1);
fragment.appendChild(shadow.dom._to_dom(node_54993));


var G__54994 = cljs.core.next(seq__54414_54987__$1);
var G__54995 = null;
var G__54996 = (0);
var G__54997 = (0);
seq__54414_54977 = G__54994;
chunk__54415_54978 = G__54995;
count__54416_54979 = G__54996;
i__54417_54980 = G__54997;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54403));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54436_54998 = cljs.core.seq(scripts);
var chunk__54437_54999 = null;
var count__54438_55000 = (0);
var i__54439_55001 = (0);
while(true){
if((i__54439_55001 < count__54438_55000)){
var vec__54450_55002 = chunk__54437_54999.cljs$core$IIndexed$_nth$arity$2(null,i__54439_55001);
var script_tag_55003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54450_55002,(0),null);
var script_body_55004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54450_55002,(1),null);
eval(script_body_55004);


var G__55005 = seq__54436_54998;
var G__55006 = chunk__54437_54999;
var G__55007 = count__54438_55000;
var G__55008 = (i__54439_55001 + (1));
seq__54436_54998 = G__55005;
chunk__54437_54999 = G__55006;
count__54438_55000 = G__55007;
i__54439_55001 = G__55008;
continue;
} else {
var temp__5804__auto___55009 = cljs.core.seq(seq__54436_54998);
if(temp__5804__auto___55009){
var seq__54436_55010__$1 = temp__5804__auto___55009;
if(cljs.core.chunked_seq_QMARK_(seq__54436_55010__$1)){
var c__4550__auto___55011 = cljs.core.chunk_first(seq__54436_55010__$1);
var G__55012 = cljs.core.chunk_rest(seq__54436_55010__$1);
var G__55013 = c__4550__auto___55011;
var G__55014 = cljs.core.count(c__4550__auto___55011);
var G__55015 = (0);
seq__54436_54998 = G__55012;
chunk__54437_54999 = G__55013;
count__54438_55000 = G__55014;
i__54439_55001 = G__55015;
continue;
} else {
var vec__54453_55016 = cljs.core.first(seq__54436_55010__$1);
var script_tag_55017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54453_55016,(0),null);
var script_body_55018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54453_55016,(1),null);
eval(script_body_55018);


var G__55019 = cljs.core.next(seq__54436_55010__$1);
var G__55020 = null;
var G__55021 = (0);
var G__55022 = (0);
seq__54436_54998 = G__55019;
chunk__54437_54999 = G__55020;
count__54438_55000 = G__55021;
i__54439_55001 = G__55022;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54456){
var vec__54457 = p__54456;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54457,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54457,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__54462 = shadow.dom.dom_node(el);
var G__54463 = cls;
return goog.dom.getAncestorByClass(G__54462,G__54463);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54466 = arguments.length;
switch (G__54466) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__54467 = shadow.dom.dom_node(el);
var G__54468 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54467,G__54468);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54469 = shadow.dom.dom_node(el);
var G__54470 = cljs.core.name(tag);
var G__54471 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54469,G__54470,G__54471);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54472 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54472);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54473 = shadow.dom.dom_node(dom);
var G__54474 = value;
return goog.dom.forms.setValue(G__54473,G__54474);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54480 = cljs.core.seq(style_keys);
var chunk__54481 = null;
var count__54482 = (0);
var i__54483 = (0);
while(true){
if((i__54483 < count__54482)){
var it = chunk__54481.cljs$core$IIndexed$_nth$arity$2(null,i__54483);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55024 = seq__54480;
var G__55025 = chunk__54481;
var G__55026 = count__54482;
var G__55027 = (i__54483 + (1));
seq__54480 = G__55024;
chunk__54481 = G__55025;
count__54482 = G__55026;
i__54483 = G__55027;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54480);
if(temp__5804__auto__){
var seq__54480__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54480__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54480__$1);
var G__55028 = cljs.core.chunk_rest(seq__54480__$1);
var G__55029 = c__4550__auto__;
var G__55030 = cljs.core.count(c__4550__auto__);
var G__55031 = (0);
seq__54480 = G__55028;
chunk__54481 = G__55029;
count__54482 = G__55030;
i__54483 = G__55031;
continue;
} else {
var it = cljs.core.first(seq__54480__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55032 = cljs.core.next(seq__54480__$1);
var G__55033 = null;
var G__55034 = (0);
var G__55035 = (0);
seq__54480 = G__55032;
chunk__54481 = G__55033;
count__54482 = G__55034;
i__54483 = G__55035;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54497,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54510 = k54497;
var G__54510__$1 = (((G__54510 instanceof cljs.core.Keyword))?G__54510.fqn:null);
switch (G__54510__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54497,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54513){
var vec__54514 = p__54513;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54514,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54514,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54496){
var self__ = this;
var G__54496__$1 = this;
return (new cljs.core.RecordIter((0),G__54496__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54523 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54523(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54498,other54499){
var self__ = this;
var this54498__$1 = this;
return (((!((other54499 == null)))) && ((this54498__$1.constructor === other54499.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54498__$1.x,other54499.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54498__$1.y,other54499.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54498__$1.__extmap,other54499.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54496){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54533 = cljs.core.keyword_identical_QMARK_;
var expr__54534 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54541 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54542 = expr__54534;
return (pred__54533.cljs$core$IFn$_invoke$arity$2 ? pred__54533.cljs$core$IFn$_invoke$arity$2(G__54541,G__54542) : pred__54533.call(null,G__54541,G__54542));
})())){
return (new shadow.dom.Coordinate(G__54496,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54547 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54548 = expr__54534;
return (pred__54533.cljs$core$IFn$_invoke$arity$2 ? pred__54533.cljs$core$IFn$_invoke$arity$2(G__54547,G__54548) : pred__54533.call(null,G__54547,G__54548));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54496,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54496),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54496){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54496,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54504){
var extmap__4424__auto__ = (function (){var G__54560 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54504,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54504)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54560);
} else {
return G__54560;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54504),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54504),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54565 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54565);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54568 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54568);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54571 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54571);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54574,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54581 = k54574;
var G__54581__$1 = (((G__54581 instanceof cljs.core.Keyword))?G__54581.fqn:null);
switch (G__54581__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54574,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54584){
var vec__54585 = p__54584;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54585,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54585,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54573){
var self__ = this;
var G__54573__$1 = this;
return (new cljs.core.RecordIter((0),G__54573__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54592 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54592(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54575,other54576){
var self__ = this;
var this54575__$1 = this;
return (((!((other54576 == null)))) && ((this54575__$1.constructor === other54576.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54575__$1.w,other54576.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54575__$1.h,other54576.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54575__$1.__extmap,other54576.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54573){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54598 = cljs.core.keyword_identical_QMARK_;
var expr__54599 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54602 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54603 = expr__54599;
return (pred__54598.cljs$core$IFn$_invoke$arity$2 ? pred__54598.cljs$core$IFn$_invoke$arity$2(G__54602,G__54603) : pred__54598.call(null,G__54602,G__54603));
})())){
return (new shadow.dom.Size(G__54573,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54604 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54605 = expr__54599;
return (pred__54598.cljs$core$IFn$_invoke$arity$2 ? pred__54598.cljs$core$IFn$_invoke$arity$2(G__54604,G__54605) : pred__54598.call(null,G__54604,G__54605));
})())){
return (new shadow.dom.Size(self__.w,G__54573,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54573),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54573){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54573,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54578){
var extmap__4424__auto__ = (function (){var G__54611 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54578,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54578)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54611);
} else {
return G__54611;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54578),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54578),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54614 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54614);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55044 = (i + (1));
var G__55045 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55044;
ret = G__55045;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54628){
var vec__54629 = p__54628;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54629,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54636 = arguments.length;
switch (G__54636) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54639_55048 = new_node;
var G__54640_55049 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54639_55048,G__54640_55049);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54641_55050 = new_node;
var G__54642_55051 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54641_55050,G__54642_55051);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55054 = ps;
var G__55055 = (i + (1));
el__$1 = G__55054;
i = G__55055;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54643 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54643);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54644 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54644);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54646 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54646);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54649 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54649,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54649,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54649,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54655_55058 = cljs.core.seq(props);
var chunk__54656_55059 = null;
var count__54657_55060 = (0);
var i__54658_55061 = (0);
while(true){
if((i__54658_55061 < count__54657_55060)){
var vec__54671_55064 = chunk__54656_55059.cljs$core$IIndexed$_nth$arity$2(null,i__54658_55061);
var k_55065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55064,(0),null);
var v_55066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55064,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_55065);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55065),v_55066);


var G__55067 = seq__54655_55058;
var G__55068 = chunk__54656_55059;
var G__55069 = count__54657_55060;
var G__55070 = (i__54658_55061 + (1));
seq__54655_55058 = G__55067;
chunk__54656_55059 = G__55068;
count__54657_55060 = G__55069;
i__54658_55061 = G__55070;
continue;
} else {
var temp__5804__auto___55071 = cljs.core.seq(seq__54655_55058);
if(temp__5804__auto___55071){
var seq__54655_55072__$1 = temp__5804__auto___55071;
if(cljs.core.chunked_seq_QMARK_(seq__54655_55072__$1)){
var c__4550__auto___55074 = cljs.core.chunk_first(seq__54655_55072__$1);
var G__55075 = cljs.core.chunk_rest(seq__54655_55072__$1);
var G__55076 = c__4550__auto___55074;
var G__55077 = cljs.core.count(c__4550__auto___55074);
var G__55078 = (0);
seq__54655_55058 = G__55075;
chunk__54656_55059 = G__55076;
count__54657_55060 = G__55077;
i__54658_55061 = G__55078;
continue;
} else {
var vec__54677_55080 = cljs.core.first(seq__54655_55072__$1);
var k_55081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677_55080,(0),null);
var v_55082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677_55080,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_55081);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55081),v_55082);


var G__55084 = cljs.core.next(seq__54655_55072__$1);
var G__55085 = null;
var G__55086 = (0);
var G__55087 = (0);
seq__54655_55058 = G__55084;
chunk__54656_55059 = G__55085;
count__54657_55060 = G__55086;
i__54658_55061 = G__55087;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54687 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54687,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54687,(1),null);
var seq__54690_55088 = cljs.core.seq(node_children);
var chunk__54692_55089 = null;
var count__54693_55090 = (0);
var i__54694_55091 = (0);
while(true){
if((i__54694_55091 < count__54693_55090)){
var child_struct_55092 = chunk__54692_55089.cljs$core$IIndexed$_nth$arity$2(null,i__54694_55091);
if((!((child_struct_55092 == null)))){
if(typeof child_struct_55092 === 'string'){
var text_55093 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55093),child_struct_55092].join(''));
} else {
var children_55094 = shadow.dom.svg_node(child_struct_55092);
if(cljs.core.seq_QMARK_(children_55094)){
var seq__54715_55095 = cljs.core.seq(children_55094);
var chunk__54717_55096 = null;
var count__54718_55097 = (0);
var i__54719_55098 = (0);
while(true){
if((i__54719_55098 < count__54718_55097)){
var child_55099 = chunk__54717_55096.cljs$core$IIndexed$_nth$arity$2(null,i__54719_55098);
if(cljs.core.truth_(child_55099)){
node.appendChild(child_55099);


var G__55100 = seq__54715_55095;
var G__55101 = chunk__54717_55096;
var G__55102 = count__54718_55097;
var G__55103 = (i__54719_55098 + (1));
seq__54715_55095 = G__55100;
chunk__54717_55096 = G__55101;
count__54718_55097 = G__55102;
i__54719_55098 = G__55103;
continue;
} else {
var G__55104 = seq__54715_55095;
var G__55105 = chunk__54717_55096;
var G__55106 = count__54718_55097;
var G__55107 = (i__54719_55098 + (1));
seq__54715_55095 = G__55104;
chunk__54717_55096 = G__55105;
count__54718_55097 = G__55106;
i__54719_55098 = G__55107;
continue;
}
} else {
var temp__5804__auto___55108 = cljs.core.seq(seq__54715_55095);
if(temp__5804__auto___55108){
var seq__54715_55109__$1 = temp__5804__auto___55108;
if(cljs.core.chunked_seq_QMARK_(seq__54715_55109__$1)){
var c__4550__auto___55110 = cljs.core.chunk_first(seq__54715_55109__$1);
var G__55111 = cljs.core.chunk_rest(seq__54715_55109__$1);
var G__55112 = c__4550__auto___55110;
var G__55113 = cljs.core.count(c__4550__auto___55110);
var G__55114 = (0);
seq__54715_55095 = G__55111;
chunk__54717_55096 = G__55112;
count__54718_55097 = G__55113;
i__54719_55098 = G__55114;
continue;
} else {
var child_55115 = cljs.core.first(seq__54715_55109__$1);
if(cljs.core.truth_(child_55115)){
node.appendChild(child_55115);


var G__55117 = cljs.core.next(seq__54715_55109__$1);
var G__55118 = null;
var G__55119 = (0);
var G__55120 = (0);
seq__54715_55095 = G__55117;
chunk__54717_55096 = G__55118;
count__54718_55097 = G__55119;
i__54719_55098 = G__55120;
continue;
} else {
var G__55123 = cljs.core.next(seq__54715_55109__$1);
var G__55124 = null;
var G__55125 = (0);
var G__55126 = (0);
seq__54715_55095 = G__55123;
chunk__54717_55096 = G__55124;
count__54718_55097 = G__55125;
i__54719_55098 = G__55126;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55094);
}
}


var G__55127 = seq__54690_55088;
var G__55128 = chunk__54692_55089;
var G__55129 = count__54693_55090;
var G__55130 = (i__54694_55091 + (1));
seq__54690_55088 = G__55127;
chunk__54692_55089 = G__55128;
count__54693_55090 = G__55129;
i__54694_55091 = G__55130;
continue;
} else {
var G__55131 = seq__54690_55088;
var G__55132 = chunk__54692_55089;
var G__55133 = count__54693_55090;
var G__55134 = (i__54694_55091 + (1));
seq__54690_55088 = G__55131;
chunk__54692_55089 = G__55132;
count__54693_55090 = G__55133;
i__54694_55091 = G__55134;
continue;
}
} else {
var temp__5804__auto___55135 = cljs.core.seq(seq__54690_55088);
if(temp__5804__auto___55135){
var seq__54690_55136__$1 = temp__5804__auto___55135;
if(cljs.core.chunked_seq_QMARK_(seq__54690_55136__$1)){
var c__4550__auto___55137 = cljs.core.chunk_first(seq__54690_55136__$1);
var G__55138 = cljs.core.chunk_rest(seq__54690_55136__$1);
var G__55139 = c__4550__auto___55137;
var G__55140 = cljs.core.count(c__4550__auto___55137);
var G__55141 = (0);
seq__54690_55088 = G__55138;
chunk__54692_55089 = G__55139;
count__54693_55090 = G__55140;
i__54694_55091 = G__55141;
continue;
} else {
var child_struct_55142 = cljs.core.first(seq__54690_55136__$1);
if((!((child_struct_55142 == null)))){
if(typeof child_struct_55142 === 'string'){
var text_55143 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55143),child_struct_55142].join(''));
} else {
var children_55144 = shadow.dom.svg_node(child_struct_55142);
if(cljs.core.seq_QMARK_(children_55144)){
var seq__54732_55145 = cljs.core.seq(children_55144);
var chunk__54734_55146 = null;
var count__54735_55147 = (0);
var i__54736_55148 = (0);
while(true){
if((i__54736_55148 < count__54735_55147)){
var child_55153 = chunk__54734_55146.cljs$core$IIndexed$_nth$arity$2(null,i__54736_55148);
if(cljs.core.truth_(child_55153)){
node.appendChild(child_55153);


var G__55154 = seq__54732_55145;
var G__55155 = chunk__54734_55146;
var G__55156 = count__54735_55147;
var G__55157 = (i__54736_55148 + (1));
seq__54732_55145 = G__55154;
chunk__54734_55146 = G__55155;
count__54735_55147 = G__55156;
i__54736_55148 = G__55157;
continue;
} else {
var G__55158 = seq__54732_55145;
var G__55159 = chunk__54734_55146;
var G__55160 = count__54735_55147;
var G__55161 = (i__54736_55148 + (1));
seq__54732_55145 = G__55158;
chunk__54734_55146 = G__55159;
count__54735_55147 = G__55160;
i__54736_55148 = G__55161;
continue;
}
} else {
var temp__5804__auto___55162__$1 = cljs.core.seq(seq__54732_55145);
if(temp__5804__auto___55162__$1){
var seq__54732_55163__$1 = temp__5804__auto___55162__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54732_55163__$1)){
var c__4550__auto___55164 = cljs.core.chunk_first(seq__54732_55163__$1);
var G__55165 = cljs.core.chunk_rest(seq__54732_55163__$1);
var G__55166 = c__4550__auto___55164;
var G__55167 = cljs.core.count(c__4550__auto___55164);
var G__55168 = (0);
seq__54732_55145 = G__55165;
chunk__54734_55146 = G__55166;
count__54735_55147 = G__55167;
i__54736_55148 = G__55168;
continue;
} else {
var child_55169 = cljs.core.first(seq__54732_55163__$1);
if(cljs.core.truth_(child_55169)){
node.appendChild(child_55169);


var G__55170 = cljs.core.next(seq__54732_55163__$1);
var G__55171 = null;
var G__55172 = (0);
var G__55173 = (0);
seq__54732_55145 = G__55170;
chunk__54734_55146 = G__55171;
count__54735_55147 = G__55172;
i__54736_55148 = G__55173;
continue;
} else {
var G__55174 = cljs.core.next(seq__54732_55163__$1);
var G__55175 = null;
var G__55176 = (0);
var G__55177 = (0);
seq__54732_55145 = G__55174;
chunk__54734_55146 = G__55175;
count__54735_55147 = G__55176;
i__54736_55148 = G__55177;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55144);
}
}


var G__55178 = cljs.core.next(seq__54690_55136__$1);
var G__55179 = null;
var G__55180 = (0);
var G__55181 = (0);
seq__54690_55088 = G__55178;
chunk__54692_55089 = G__55179;
count__54693_55090 = G__55180;
i__54694_55091 = G__55181;
continue;
} else {
var G__55182 = cljs.core.next(seq__54690_55136__$1);
var G__55183 = null;
var G__55184 = (0);
var G__55185 = (0);
seq__54690_55088 = G__55182;
chunk__54692_55089 = G__55183;
count__54693_55090 = G__55184;
i__54694_55091 = G__55185;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54742_55186 = shadow.dom._to_svg;
var G__54743_55187 = "string";
var G__54744_55188 = ((function (G__54742_55186,G__54743_55187){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54742_55186,G__54743_55187))
;
goog.object.set(G__54742_55186,G__54743_55187,G__54744_55188);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__54747_55189 = shadow.dom._to_svg;
var G__54748_55190 = "null";
var G__54749_55191 = ((function (G__54747_55189,G__54748_55190){
return (function (_){
return null;
});})(G__54747_55189,G__54748_55190))
;
goog.object.set(G__54747_55189,G__54748_55190,G__54749_55191);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55192 = arguments.length;
var i__4731__auto___55193 = (0);
while(true){
if((i__4731__auto___55193 < len__4730__auto___55192)){
args__4736__auto__.push((arguments[i__4731__auto___55193]));

var G__55198 = (i__4731__auto___55193 + (1));
i__4731__auto___55193 = G__55198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq54752){
var G__54753 = cljs.core.first(seq54752);
var seq54752__$1 = cljs.core.next(seq54752);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54753,seq54752__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54764 = arguments.length;
switch (G__54764) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__54769_55200 = shadow.dom.dom_node(el);
var G__54770_55201 = cljs.core.name(event);
var G__54771_55202 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54769_55200,G__54770_55201,G__54771_55202) : shadow.dom.dom_listen.call(null,G__54769_55200,G__54770_55201,G__54771_55202));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__51859__auto___55206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto___55206,buf,chan,event_fn){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto___55206,buf,chan,event_fn){
return (function (state_54777){
var state_val_54778 = (state_54777[(1)]);
if((state_val_54778 === (1))){
var state_54777__$1 = state_54777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54777__$1,(2),once_or_cleanup);
} else {
if((state_val_54778 === (2))){
var inst_54774 = (state_54777[(2)]);
var inst_54775 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54777__$1 = (function (){var statearr_54783 = state_54777;
(statearr_54783[(7)] = inst_54774);

return statearr_54783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54777__$1,inst_54775);
} else {
return null;
}
}
});})(c__51859__auto___55206,buf,chan,event_fn))
;
return ((function (switch__51723__auto__,c__51859__auto___55206,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__51724__auto__ = null;
var shadow$dom$state_machine__51724__auto____0 = (function (){
var statearr_54786 = [null,null,null,null,null,null,null,null];
(statearr_54786[(0)] = shadow$dom$state_machine__51724__auto__);

(statearr_54786[(1)] = (1));

return statearr_54786;
});
var shadow$dom$state_machine__51724__auto____1 = (function (state_54777){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_54777);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e54787){if((e54787 instanceof Object)){
var ex__51727__auto__ = e54787;
var statearr_54788_55207 = state_54777;
(statearr_54788_55207[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55208 = state_54777;
state_54777 = G__55208;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
shadow$dom$state_machine__51724__auto__ = function(state_54777){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51724__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51724__auto____1.call(this,state_54777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51724__auto____0;
shadow$dom$state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51724__auto____1;
return shadow$dom$state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto___55206,buf,chan,event_fn))
})();
var state__51861__auto__ = (function (){var statearr_54789 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_54789[(6)] = c__51859__auto___55206);

return statearr_54789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto___55206,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
