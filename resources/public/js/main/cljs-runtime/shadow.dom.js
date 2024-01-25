goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48630 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48630(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48631 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48631(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47873 = coll;
var G__47874 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47873,G__47874) : shadow.dom.lazy_native_coll_seq.call(null,G__47873,G__47874));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

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
var G__47899 = arguments.length;
switch (G__47899) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47909 = arguments.length;
switch (G__47909) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47914 = arguments.length;
switch (G__47914) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47917 = arguments.length;
switch (G__47917) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47928 = arguments.length;
switch (G__47928) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47935 = arguments.length;
switch (G__47935) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47946){if((e47946 instanceof Object)){
var e = e47946;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47946;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47958 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47959 = null;
var count__47960 = (0);
var i__47961 = (0);
while(true){
if((i__47961 < count__47960)){
var el = chunk__47959.cljs$core$IIndexed$_nth$arity$2(null,i__47961);
var handler_48673__$1 = ((function (seq__47958,chunk__47959,count__47960,i__47961,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47958,chunk__47959,count__47960,i__47961,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48673__$1);


var G__48674 = seq__47958;
var G__48675 = chunk__47959;
var G__48676 = count__47960;
var G__48677 = (i__47961 + (1));
seq__47958 = G__48674;
chunk__47959 = G__48675;
count__47960 = G__48676;
i__47961 = G__48677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47958);
if(temp__5804__auto__){
var seq__47958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47958__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47958__$1);
var G__48679 = cljs.core.chunk_rest(seq__47958__$1);
var G__48680 = c__5568__auto__;
var G__48681 = cljs.core.count(c__5568__auto__);
var G__48682 = (0);
seq__47958 = G__48679;
chunk__47959 = G__48680;
count__47960 = G__48681;
i__47961 = G__48682;
continue;
} else {
var el = cljs.core.first(seq__47958__$1);
var handler_48684__$1 = ((function (seq__47958,chunk__47959,count__47960,i__47961,el,seq__47958__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47958,chunk__47959,count__47960,i__47961,el,seq__47958__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48684__$1);


var G__48686 = cljs.core.next(seq__47958__$1);
var G__48687 = null;
var G__48688 = (0);
var G__48689 = (0);
seq__47958 = G__48686;
chunk__47959 = G__48687;
count__47960 = G__48688;
i__47961 = G__48689;
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
var G__47979 = arguments.length;
switch (G__47979) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47994 = cljs.core.seq(events);
var chunk__47995 = null;
var count__47996 = (0);
var i__47997 = (0);
while(true){
if((i__47997 < count__47996)){
var vec__48014 = chunk__47995.cljs$core$IIndexed$_nth$arity$2(null,i__47997);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48014,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48696 = seq__47994;
var G__48697 = chunk__47995;
var G__48698 = count__47996;
var G__48699 = (i__47997 + (1));
seq__47994 = G__48696;
chunk__47995 = G__48697;
count__47996 = G__48698;
i__47997 = G__48699;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47994);
if(temp__5804__auto__){
var seq__47994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47994__$1);
var G__48701 = cljs.core.chunk_rest(seq__47994__$1);
var G__48702 = c__5568__auto__;
var G__48703 = cljs.core.count(c__5568__auto__);
var G__48704 = (0);
seq__47994 = G__48701;
chunk__47995 = G__48702;
count__47996 = G__48703;
i__47997 = G__48704;
continue;
} else {
var vec__48019 = cljs.core.first(seq__47994__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48019,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48705 = cljs.core.next(seq__47994__$1);
var G__48706 = null;
var G__48707 = (0);
var G__48708 = (0);
seq__47994 = G__48705;
chunk__47995 = G__48706;
count__47996 = G__48707;
i__47997 = G__48708;
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
var seq__48026 = cljs.core.seq(styles);
var chunk__48027 = null;
var count__48028 = (0);
var i__48029 = (0);
while(true){
if((i__48029 < count__48028)){
var vec__48049 = chunk__48027.cljs$core$IIndexed$_nth$arity$2(null,i__48029);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48049,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48709 = seq__48026;
var G__48710 = chunk__48027;
var G__48711 = count__48028;
var G__48712 = (i__48029 + (1));
seq__48026 = G__48709;
chunk__48027 = G__48710;
count__48028 = G__48711;
i__48029 = G__48712;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48026);
if(temp__5804__auto__){
var seq__48026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48026__$1);
var G__48713 = cljs.core.chunk_rest(seq__48026__$1);
var G__48714 = c__5568__auto__;
var G__48715 = cljs.core.count(c__5568__auto__);
var G__48716 = (0);
seq__48026 = G__48713;
chunk__48027 = G__48714;
count__48028 = G__48715;
i__48029 = G__48716;
continue;
} else {
var vec__48054 = cljs.core.first(seq__48026__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48054,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48718 = cljs.core.next(seq__48026__$1);
var G__48719 = null;
var G__48720 = (0);
var G__48721 = (0);
seq__48026 = G__48718;
chunk__48027 = G__48719;
count__48028 = G__48720;
i__48029 = G__48721;
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
var G__48060_48722 = key;
var G__48060_48723__$1 = (((G__48060_48722 instanceof cljs.core.Keyword))?G__48060_48722.fqn:null);
switch (G__48060_48723__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_48727 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48727,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48727,"aria-");
}
})())){
el.setAttribute(ks_48727,value);
} else {
(el[ks_48727] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48076){
var map__48077 = p__48076;
var map__48077__$1 = cljs.core.__destructure_map(map__48077);
var props = map__48077__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48080 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48088 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48088,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48088;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48097 = arguments.length;
switch (G__48097) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
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
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
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
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48110){
var vec__48111 = p__48110;
var seq__48112 = cljs.core.seq(vec__48111);
var first__48113 = cljs.core.first(seq__48112);
var seq__48112__$1 = cljs.core.next(seq__48112);
var nn = first__48113;
var first__48113__$1 = cljs.core.first(seq__48112__$1);
var seq__48112__$2 = cljs.core.next(seq__48112__$1);
var np = first__48113__$1;
var nc = seq__48112__$2;
var node = vec__48111;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48117 = nn;
var G__48118 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48117,G__48118) : create_fn.call(null,G__48117,G__48118));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48119 = nn;
var G__48120 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48119,G__48120) : create_fn.call(null,G__48119,G__48120));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48122 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(1),null);
var seq__48126_48734 = cljs.core.seq(node_children);
var chunk__48127_48735 = null;
var count__48128_48736 = (0);
var i__48129_48737 = (0);
while(true){
if((i__48129_48737 < count__48128_48736)){
var child_struct_48738 = chunk__48127_48735.cljs$core$IIndexed$_nth$arity$2(null,i__48129_48737);
var children_48739 = shadow.dom.dom_node(child_struct_48738);
if(cljs.core.seq_QMARK_(children_48739)){
var seq__48154_48740 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48739));
var chunk__48156_48741 = null;
var count__48157_48742 = (0);
var i__48158_48743 = (0);
while(true){
if((i__48158_48743 < count__48157_48742)){
var child_48744 = chunk__48156_48741.cljs$core$IIndexed$_nth$arity$2(null,i__48158_48743);
if(cljs.core.truth_(child_48744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48744);


var G__48745 = seq__48154_48740;
var G__48746 = chunk__48156_48741;
var G__48747 = count__48157_48742;
var G__48748 = (i__48158_48743 + (1));
seq__48154_48740 = G__48745;
chunk__48156_48741 = G__48746;
count__48157_48742 = G__48747;
i__48158_48743 = G__48748;
continue;
} else {
var G__48749 = seq__48154_48740;
var G__48750 = chunk__48156_48741;
var G__48751 = count__48157_48742;
var G__48752 = (i__48158_48743 + (1));
seq__48154_48740 = G__48749;
chunk__48156_48741 = G__48750;
count__48157_48742 = G__48751;
i__48158_48743 = G__48752;
continue;
}
} else {
var temp__5804__auto___48753 = cljs.core.seq(seq__48154_48740);
if(temp__5804__auto___48753){
var seq__48154_48754__$1 = temp__5804__auto___48753;
if(cljs.core.chunked_seq_QMARK_(seq__48154_48754__$1)){
var c__5568__auto___48755 = cljs.core.chunk_first(seq__48154_48754__$1);
var G__48756 = cljs.core.chunk_rest(seq__48154_48754__$1);
var G__48757 = c__5568__auto___48755;
var G__48758 = cljs.core.count(c__5568__auto___48755);
var G__48759 = (0);
seq__48154_48740 = G__48756;
chunk__48156_48741 = G__48757;
count__48157_48742 = G__48758;
i__48158_48743 = G__48759;
continue;
} else {
var child_48760 = cljs.core.first(seq__48154_48754__$1);
if(cljs.core.truth_(child_48760)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48760);


var G__48761 = cljs.core.next(seq__48154_48754__$1);
var G__48762 = null;
var G__48763 = (0);
var G__48764 = (0);
seq__48154_48740 = G__48761;
chunk__48156_48741 = G__48762;
count__48157_48742 = G__48763;
i__48158_48743 = G__48764;
continue;
} else {
var G__48765 = cljs.core.next(seq__48154_48754__$1);
var G__48766 = null;
var G__48767 = (0);
var G__48768 = (0);
seq__48154_48740 = G__48765;
chunk__48156_48741 = G__48766;
count__48157_48742 = G__48767;
i__48158_48743 = G__48768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48739);
}


var G__48769 = seq__48126_48734;
var G__48770 = chunk__48127_48735;
var G__48771 = count__48128_48736;
var G__48772 = (i__48129_48737 + (1));
seq__48126_48734 = G__48769;
chunk__48127_48735 = G__48770;
count__48128_48736 = G__48771;
i__48129_48737 = G__48772;
continue;
} else {
var temp__5804__auto___48773 = cljs.core.seq(seq__48126_48734);
if(temp__5804__auto___48773){
var seq__48126_48774__$1 = temp__5804__auto___48773;
if(cljs.core.chunked_seq_QMARK_(seq__48126_48774__$1)){
var c__5568__auto___48775 = cljs.core.chunk_first(seq__48126_48774__$1);
var G__48776 = cljs.core.chunk_rest(seq__48126_48774__$1);
var G__48777 = c__5568__auto___48775;
var G__48778 = cljs.core.count(c__5568__auto___48775);
var G__48779 = (0);
seq__48126_48734 = G__48776;
chunk__48127_48735 = G__48777;
count__48128_48736 = G__48778;
i__48129_48737 = G__48779;
continue;
} else {
var child_struct_48781 = cljs.core.first(seq__48126_48774__$1);
var children_48782 = shadow.dom.dom_node(child_struct_48781);
if(cljs.core.seq_QMARK_(children_48782)){
var seq__48171_48783 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48782));
var chunk__48173_48784 = null;
var count__48174_48785 = (0);
var i__48175_48786 = (0);
while(true){
if((i__48175_48786 < count__48174_48785)){
var child_48787 = chunk__48173_48784.cljs$core$IIndexed$_nth$arity$2(null,i__48175_48786);
if(cljs.core.truth_(child_48787)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48787);


var G__48788 = seq__48171_48783;
var G__48789 = chunk__48173_48784;
var G__48790 = count__48174_48785;
var G__48791 = (i__48175_48786 + (1));
seq__48171_48783 = G__48788;
chunk__48173_48784 = G__48789;
count__48174_48785 = G__48790;
i__48175_48786 = G__48791;
continue;
} else {
var G__48792 = seq__48171_48783;
var G__48793 = chunk__48173_48784;
var G__48794 = count__48174_48785;
var G__48795 = (i__48175_48786 + (1));
seq__48171_48783 = G__48792;
chunk__48173_48784 = G__48793;
count__48174_48785 = G__48794;
i__48175_48786 = G__48795;
continue;
}
} else {
var temp__5804__auto___48796__$1 = cljs.core.seq(seq__48171_48783);
if(temp__5804__auto___48796__$1){
var seq__48171_48797__$1 = temp__5804__auto___48796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48171_48797__$1)){
var c__5568__auto___48798 = cljs.core.chunk_first(seq__48171_48797__$1);
var G__48799 = cljs.core.chunk_rest(seq__48171_48797__$1);
var G__48800 = c__5568__auto___48798;
var G__48801 = cljs.core.count(c__5568__auto___48798);
var G__48802 = (0);
seq__48171_48783 = G__48799;
chunk__48173_48784 = G__48800;
count__48174_48785 = G__48801;
i__48175_48786 = G__48802;
continue;
} else {
var child_48803 = cljs.core.first(seq__48171_48797__$1);
if(cljs.core.truth_(child_48803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48803);


var G__48804 = cljs.core.next(seq__48171_48797__$1);
var G__48805 = null;
var G__48806 = (0);
var G__48807 = (0);
seq__48171_48783 = G__48804;
chunk__48173_48784 = G__48805;
count__48174_48785 = G__48806;
i__48175_48786 = G__48807;
continue;
} else {
var G__48808 = cljs.core.next(seq__48171_48797__$1);
var G__48809 = null;
var G__48810 = (0);
var G__48811 = (0);
seq__48171_48783 = G__48808;
chunk__48173_48784 = G__48809;
count__48174_48785 = G__48810;
i__48175_48786 = G__48811;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48782);
}


var G__48812 = cljs.core.next(seq__48126_48774__$1);
var G__48813 = null;
var G__48814 = (0);
var G__48815 = (0);
seq__48126_48734 = G__48812;
chunk__48127_48735 = G__48813;
count__48128_48736 = G__48814;
i__48129_48737 = G__48815;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48199 = cljs.core.seq(node);
var chunk__48200 = null;
var count__48201 = (0);
var i__48202 = (0);
while(true){
if((i__48202 < count__48201)){
var n = chunk__48200.cljs$core$IIndexed$_nth$arity$2(null,i__48202);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48816 = seq__48199;
var G__48817 = chunk__48200;
var G__48818 = count__48201;
var G__48819 = (i__48202 + (1));
seq__48199 = G__48816;
chunk__48200 = G__48817;
count__48201 = G__48818;
i__48202 = G__48819;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48199);
if(temp__5804__auto__){
var seq__48199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48199__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48199__$1);
var G__48820 = cljs.core.chunk_rest(seq__48199__$1);
var G__48821 = c__5568__auto__;
var G__48822 = cljs.core.count(c__5568__auto__);
var G__48823 = (0);
seq__48199 = G__48820;
chunk__48200 = G__48821;
count__48201 = G__48822;
i__48202 = G__48823;
continue;
} else {
var n = cljs.core.first(seq__48199__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48824 = cljs.core.next(seq__48199__$1);
var G__48825 = null;
var G__48826 = (0);
var G__48827 = (0);
seq__48199 = G__48824;
chunk__48200 = G__48825;
count__48201 = G__48826;
i__48202 = G__48827;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48217 = arguments.length;
switch (G__48217) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48225 = arguments.length;
switch (G__48225) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__48242 = arguments.length;
switch (G__48242) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48838 = arguments.length;
var i__5770__auto___48839 = (0);
while(true){
if((i__5770__auto___48839 < len__5769__auto___48838)){
args__5775__auto__.push((arguments[i__5770__auto___48839]));

var G__48840 = (i__5770__auto___48839 + (1));
i__5770__auto___48839 = G__48840;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48261_48841 = cljs.core.seq(nodes);
var chunk__48262_48842 = null;
var count__48263_48843 = (0);
var i__48264_48844 = (0);
while(true){
if((i__48264_48844 < count__48263_48843)){
var node_48845 = chunk__48262_48842.cljs$core$IIndexed$_nth$arity$2(null,i__48264_48844);
fragment.appendChild(shadow.dom._to_dom(node_48845));


var G__48846 = seq__48261_48841;
var G__48847 = chunk__48262_48842;
var G__48848 = count__48263_48843;
var G__48849 = (i__48264_48844 + (1));
seq__48261_48841 = G__48846;
chunk__48262_48842 = G__48847;
count__48263_48843 = G__48848;
i__48264_48844 = G__48849;
continue;
} else {
var temp__5804__auto___48850 = cljs.core.seq(seq__48261_48841);
if(temp__5804__auto___48850){
var seq__48261_48851__$1 = temp__5804__auto___48850;
if(cljs.core.chunked_seq_QMARK_(seq__48261_48851__$1)){
var c__5568__auto___48852 = cljs.core.chunk_first(seq__48261_48851__$1);
var G__48853 = cljs.core.chunk_rest(seq__48261_48851__$1);
var G__48854 = c__5568__auto___48852;
var G__48855 = cljs.core.count(c__5568__auto___48852);
var G__48856 = (0);
seq__48261_48841 = G__48853;
chunk__48262_48842 = G__48854;
count__48263_48843 = G__48855;
i__48264_48844 = G__48856;
continue;
} else {
var node_48857 = cljs.core.first(seq__48261_48851__$1);
fragment.appendChild(shadow.dom._to_dom(node_48857));


var G__48858 = cljs.core.next(seq__48261_48851__$1);
var G__48859 = null;
var G__48860 = (0);
var G__48861 = (0);
seq__48261_48841 = G__48858;
chunk__48262_48842 = G__48859;
count__48263_48843 = G__48860;
i__48264_48844 = G__48861;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48258){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48258));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48265_48862 = cljs.core.seq(scripts);
var chunk__48266_48863 = null;
var count__48267_48864 = (0);
var i__48268_48865 = (0);
while(true){
if((i__48268_48865 < count__48267_48864)){
var vec__48275_48866 = chunk__48266_48863.cljs$core$IIndexed$_nth$arity$2(null,i__48268_48865);
var script_tag_48867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275_48866,(0),null);
var script_body_48868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275_48866,(1),null);
eval(script_body_48868);


var G__48869 = seq__48265_48862;
var G__48870 = chunk__48266_48863;
var G__48871 = count__48267_48864;
var G__48872 = (i__48268_48865 + (1));
seq__48265_48862 = G__48869;
chunk__48266_48863 = G__48870;
count__48267_48864 = G__48871;
i__48268_48865 = G__48872;
continue;
} else {
var temp__5804__auto___48873 = cljs.core.seq(seq__48265_48862);
if(temp__5804__auto___48873){
var seq__48265_48874__$1 = temp__5804__auto___48873;
if(cljs.core.chunked_seq_QMARK_(seq__48265_48874__$1)){
var c__5568__auto___48875 = cljs.core.chunk_first(seq__48265_48874__$1);
var G__48876 = cljs.core.chunk_rest(seq__48265_48874__$1);
var G__48877 = c__5568__auto___48875;
var G__48878 = cljs.core.count(c__5568__auto___48875);
var G__48879 = (0);
seq__48265_48862 = G__48876;
chunk__48266_48863 = G__48877;
count__48267_48864 = G__48878;
i__48268_48865 = G__48879;
continue;
} else {
var vec__48278_48880 = cljs.core.first(seq__48265_48874__$1);
var script_tag_48881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48278_48880,(0),null);
var script_body_48882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48278_48880,(1),null);
eval(script_body_48882);


var G__48883 = cljs.core.next(seq__48265_48874__$1);
var G__48884 = null;
var G__48885 = (0);
var G__48886 = (0);
seq__48265_48862 = G__48883;
chunk__48266_48863 = G__48884;
count__48267_48864 = G__48885;
i__48268_48865 = G__48886;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48281){
var vec__48282 = p__48281;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48290 = arguments.length;
switch (G__48290) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__48305 = cljs.core.seq(style_keys);
var chunk__48306 = null;
var count__48307 = (0);
var i__48308 = (0);
while(true){
if((i__48308 < count__48307)){
var it = chunk__48306.cljs$core$IIndexed$_nth$arity$2(null,i__48308);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48888 = seq__48305;
var G__48889 = chunk__48306;
var G__48890 = count__48307;
var G__48891 = (i__48308 + (1));
seq__48305 = G__48888;
chunk__48306 = G__48889;
count__48307 = G__48890;
i__48308 = G__48891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48305);
if(temp__5804__auto__){
var seq__48305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48305__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48305__$1);
var G__48893 = cljs.core.chunk_rest(seq__48305__$1);
var G__48894 = c__5568__auto__;
var G__48895 = cljs.core.count(c__5568__auto__);
var G__48896 = (0);
seq__48305 = G__48893;
chunk__48306 = G__48894;
count__48307 = G__48895;
i__48308 = G__48896;
continue;
} else {
var it = cljs.core.first(seq__48305__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48897 = cljs.core.next(seq__48305__$1);
var G__48898 = null;
var G__48899 = (0);
var G__48900 = (0);
seq__48305 = G__48897;
chunk__48306 = G__48898;
count__48307 = G__48899;
i__48308 = G__48900;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48320,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48341 = k48320;
var G__48341__$1 = (((G__48341 instanceof cljs.core.Keyword))?G__48341.fqn:null);
switch (G__48341__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48320,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48344){
var vec__48345 = p__48344;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48319){
var self__ = this;
var G__48319__$1 = this;
return (new cljs.core.RecordIter((0),G__48319__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48321,other48322){
var self__ = this;
var this48321__$1 = this;
return (((!((other48322 == null)))) && ((((this48321__$1.constructor === other48322.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48321__$1.x,other48322.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48321__$1.y,other48322.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48321__$1.__extmap,other48322.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48320){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48368 = k48320;
var G__48368__$1 = (((G__48368 instanceof cljs.core.Keyword))?G__48368.fqn:null);
switch (G__48368__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48320);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48319){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48372 = cljs.core.keyword_identical_QMARK_;
var expr__48373 = k__5352__auto__;
if(cljs.core.truth_((pred__48372.cljs$core$IFn$_invoke$arity$2 ? pred__48372.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48373) : pred__48372.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48373)))){
return (new shadow.dom.Coordinate(G__48319,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48372.cljs$core$IFn$_invoke$arity$2 ? pred__48372.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48373) : pred__48372.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48373)))){
return (new shadow.dom.Coordinate(self__.x,G__48319,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48319),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48319){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48319,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48333){
var extmap__5385__auto__ = (function (){var G__48386 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48333,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48386);
} else {
return G__48386;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48333),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48333),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48397,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48410 = k48397;
var G__48410__$1 = (((G__48410 instanceof cljs.core.Keyword))?G__48410.fqn:null);
switch (G__48410__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48397,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48414){
var vec__48415 = p__48414;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48415,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48415,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48396){
var self__ = this;
var G__48396__$1 = this;
return (new cljs.core.RecordIter((0),G__48396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48398,other48399){
var self__ = this;
var this48398__$1 = this;
return (((!((other48399 == null)))) && ((((this48398__$1.constructor === other48399.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48398__$1.w,other48399.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48398__$1.h,other48399.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48398__$1.__extmap,other48399.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48397){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48418 = k48397;
var G__48418__$1 = (((G__48418 instanceof cljs.core.Keyword))?G__48418.fqn:null);
switch (G__48418__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48397);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48396){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48419 = cljs.core.keyword_identical_QMARK_;
var expr__48420 = k__5352__auto__;
if(cljs.core.truth_((pred__48419.cljs$core$IFn$_invoke$arity$2 ? pred__48419.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48420) : pred__48419.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48420)))){
return (new shadow.dom.Size(G__48396,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48419.cljs$core$IFn$_invoke$arity$2 ? pred__48419.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48420) : pred__48419.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48420)))){
return (new shadow.dom.Size(self__.w,G__48396,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48396),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48396){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48396,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48401){
var extmap__5385__auto__ = (function (){var G__48434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48401,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48401)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48434);
} else {
return G__48434;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48401),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48401),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__48923 = (i + (1));
var G__48924 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48923;
ret = G__48924;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48485){
var vec__48488 = p__48485;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48488,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48495 = arguments.length;
switch (G__48495) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

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
var G__48932 = ps;
var G__48933 = (i + (1));
el__$1 = G__48932;
i = G__48933;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48496 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48499_48936 = cljs.core.seq(props);
var chunk__48500_48937 = null;
var count__48501_48938 = (0);
var i__48502_48939 = (0);
while(true){
if((i__48502_48939 < count__48501_48938)){
var vec__48509_48942 = chunk__48500_48937.cljs$core$IIndexed$_nth$arity$2(null,i__48502_48939);
var k_48943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509_48942,(0),null);
var v_48944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509_48942,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_48943);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48943),v_48944);


var G__48947 = seq__48499_48936;
var G__48948 = chunk__48500_48937;
var G__48949 = count__48501_48938;
var G__48950 = (i__48502_48939 + (1));
seq__48499_48936 = G__48947;
chunk__48500_48937 = G__48948;
count__48501_48938 = G__48949;
i__48502_48939 = G__48950;
continue;
} else {
var temp__5804__auto___48951 = cljs.core.seq(seq__48499_48936);
if(temp__5804__auto___48951){
var seq__48499_48952__$1 = temp__5804__auto___48951;
if(cljs.core.chunked_seq_QMARK_(seq__48499_48952__$1)){
var c__5568__auto___48953 = cljs.core.chunk_first(seq__48499_48952__$1);
var G__48954 = cljs.core.chunk_rest(seq__48499_48952__$1);
var G__48955 = c__5568__auto___48953;
var G__48956 = cljs.core.count(c__5568__auto___48953);
var G__48957 = (0);
seq__48499_48936 = G__48954;
chunk__48500_48937 = G__48955;
count__48501_48938 = G__48956;
i__48502_48939 = G__48957;
continue;
} else {
var vec__48512_48958 = cljs.core.first(seq__48499_48952__$1);
var k_48959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48512_48958,(0),null);
var v_48960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48512_48958,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_48959);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48959),v_48960);


var G__48962 = cljs.core.next(seq__48499_48952__$1);
var G__48963 = null;
var G__48964 = (0);
var G__48965 = (0);
seq__48499_48936 = G__48962;
chunk__48500_48937 = G__48963;
count__48501_48938 = G__48964;
i__48502_48939 = G__48965;
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
var vec__48527 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48527,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48527,(1),null);
var seq__48530_48966 = cljs.core.seq(node_children);
var chunk__48532_48967 = null;
var count__48533_48968 = (0);
var i__48534_48969 = (0);
while(true){
if((i__48534_48969 < count__48533_48968)){
var child_struct_48970 = chunk__48532_48967.cljs$core$IIndexed$_nth$arity$2(null,i__48534_48969);
if((!((child_struct_48970 == null)))){
if(typeof child_struct_48970 === 'string'){
var text_48971 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48971),child_struct_48970].join(''));
} else {
var children_48972 = shadow.dom.svg_node(child_struct_48970);
if(cljs.core.seq_QMARK_(children_48972)){
var seq__48563_48973 = cljs.core.seq(children_48972);
var chunk__48565_48974 = null;
var count__48566_48975 = (0);
var i__48567_48976 = (0);
while(true){
if((i__48567_48976 < count__48566_48975)){
var child_48977 = chunk__48565_48974.cljs$core$IIndexed$_nth$arity$2(null,i__48567_48976);
if(cljs.core.truth_(child_48977)){
node.appendChild(child_48977);


var G__48978 = seq__48563_48973;
var G__48979 = chunk__48565_48974;
var G__48980 = count__48566_48975;
var G__48981 = (i__48567_48976 + (1));
seq__48563_48973 = G__48978;
chunk__48565_48974 = G__48979;
count__48566_48975 = G__48980;
i__48567_48976 = G__48981;
continue;
} else {
var G__48982 = seq__48563_48973;
var G__48983 = chunk__48565_48974;
var G__48984 = count__48566_48975;
var G__48985 = (i__48567_48976 + (1));
seq__48563_48973 = G__48982;
chunk__48565_48974 = G__48983;
count__48566_48975 = G__48984;
i__48567_48976 = G__48985;
continue;
}
} else {
var temp__5804__auto___48986 = cljs.core.seq(seq__48563_48973);
if(temp__5804__auto___48986){
var seq__48563_48987__$1 = temp__5804__auto___48986;
if(cljs.core.chunked_seq_QMARK_(seq__48563_48987__$1)){
var c__5568__auto___48988 = cljs.core.chunk_first(seq__48563_48987__$1);
var G__48989 = cljs.core.chunk_rest(seq__48563_48987__$1);
var G__48990 = c__5568__auto___48988;
var G__48991 = cljs.core.count(c__5568__auto___48988);
var G__48992 = (0);
seq__48563_48973 = G__48989;
chunk__48565_48974 = G__48990;
count__48566_48975 = G__48991;
i__48567_48976 = G__48992;
continue;
} else {
var child_48993 = cljs.core.first(seq__48563_48987__$1);
if(cljs.core.truth_(child_48993)){
node.appendChild(child_48993);


var G__48994 = cljs.core.next(seq__48563_48987__$1);
var G__48995 = null;
var G__48996 = (0);
var G__48997 = (0);
seq__48563_48973 = G__48994;
chunk__48565_48974 = G__48995;
count__48566_48975 = G__48996;
i__48567_48976 = G__48997;
continue;
} else {
var G__48998 = cljs.core.next(seq__48563_48987__$1);
var G__48999 = null;
var G__49000 = (0);
var G__49001 = (0);
seq__48563_48973 = G__48998;
chunk__48565_48974 = G__48999;
count__48566_48975 = G__49000;
i__48567_48976 = G__49001;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48972);
}
}


var G__49003 = seq__48530_48966;
var G__49004 = chunk__48532_48967;
var G__49005 = count__48533_48968;
var G__49006 = (i__48534_48969 + (1));
seq__48530_48966 = G__49003;
chunk__48532_48967 = G__49004;
count__48533_48968 = G__49005;
i__48534_48969 = G__49006;
continue;
} else {
var G__49007 = seq__48530_48966;
var G__49008 = chunk__48532_48967;
var G__49009 = count__48533_48968;
var G__49010 = (i__48534_48969 + (1));
seq__48530_48966 = G__49007;
chunk__48532_48967 = G__49008;
count__48533_48968 = G__49009;
i__48534_48969 = G__49010;
continue;
}
} else {
var temp__5804__auto___49011 = cljs.core.seq(seq__48530_48966);
if(temp__5804__auto___49011){
var seq__48530_49012__$1 = temp__5804__auto___49011;
if(cljs.core.chunked_seq_QMARK_(seq__48530_49012__$1)){
var c__5568__auto___49013 = cljs.core.chunk_first(seq__48530_49012__$1);
var G__49014 = cljs.core.chunk_rest(seq__48530_49012__$1);
var G__49015 = c__5568__auto___49013;
var G__49016 = cljs.core.count(c__5568__auto___49013);
var G__49017 = (0);
seq__48530_48966 = G__49014;
chunk__48532_48967 = G__49015;
count__48533_48968 = G__49016;
i__48534_48969 = G__49017;
continue;
} else {
var child_struct_49018 = cljs.core.first(seq__48530_49012__$1);
if((!((child_struct_49018 == null)))){
if(typeof child_struct_49018 === 'string'){
var text_49019 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49019),child_struct_49018].join(''));
} else {
var children_49020 = shadow.dom.svg_node(child_struct_49018);
if(cljs.core.seq_QMARK_(children_49020)){
var seq__48576_49021 = cljs.core.seq(children_49020);
var chunk__48578_49022 = null;
var count__48579_49023 = (0);
var i__48580_49024 = (0);
while(true){
if((i__48580_49024 < count__48579_49023)){
var child_49025 = chunk__48578_49022.cljs$core$IIndexed$_nth$arity$2(null,i__48580_49024);
if(cljs.core.truth_(child_49025)){
node.appendChild(child_49025);


var G__49026 = seq__48576_49021;
var G__49027 = chunk__48578_49022;
var G__49028 = count__48579_49023;
var G__49029 = (i__48580_49024 + (1));
seq__48576_49021 = G__49026;
chunk__48578_49022 = G__49027;
count__48579_49023 = G__49028;
i__48580_49024 = G__49029;
continue;
} else {
var G__49030 = seq__48576_49021;
var G__49031 = chunk__48578_49022;
var G__49032 = count__48579_49023;
var G__49033 = (i__48580_49024 + (1));
seq__48576_49021 = G__49030;
chunk__48578_49022 = G__49031;
count__48579_49023 = G__49032;
i__48580_49024 = G__49033;
continue;
}
} else {
var temp__5804__auto___49034__$1 = cljs.core.seq(seq__48576_49021);
if(temp__5804__auto___49034__$1){
var seq__48576_49036__$1 = temp__5804__auto___49034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48576_49036__$1)){
var c__5568__auto___49037 = cljs.core.chunk_first(seq__48576_49036__$1);
var G__49038 = cljs.core.chunk_rest(seq__48576_49036__$1);
var G__49039 = c__5568__auto___49037;
var G__49040 = cljs.core.count(c__5568__auto___49037);
var G__49041 = (0);
seq__48576_49021 = G__49038;
chunk__48578_49022 = G__49039;
count__48579_49023 = G__49040;
i__48580_49024 = G__49041;
continue;
} else {
var child_49043 = cljs.core.first(seq__48576_49036__$1);
if(cljs.core.truth_(child_49043)){
node.appendChild(child_49043);


var G__49044 = cljs.core.next(seq__48576_49036__$1);
var G__49045 = null;
var G__49046 = (0);
var G__49047 = (0);
seq__48576_49021 = G__49044;
chunk__48578_49022 = G__49045;
count__48579_49023 = G__49046;
i__48580_49024 = G__49047;
continue;
} else {
var G__49048 = cljs.core.next(seq__48576_49036__$1);
var G__49049 = null;
var G__49050 = (0);
var G__49051 = (0);
seq__48576_49021 = G__49048;
chunk__48578_49022 = G__49049;
count__48579_49023 = G__49050;
i__48580_49024 = G__49051;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49020);
}
}


var G__49052 = cljs.core.next(seq__48530_49012__$1);
var G__49053 = null;
var G__49054 = (0);
var G__49055 = (0);
seq__48530_48966 = G__49052;
chunk__48532_48967 = G__49053;
count__48533_48968 = G__49054;
i__48534_48969 = G__49055;
continue;
} else {
var G__49056 = cljs.core.next(seq__48530_49012__$1);
var G__49057 = null;
var G__49058 = (0);
var G__49059 = (0);
seq__48530_48966 = G__49056;
chunk__48532_48967 = G__49057;
count__48533_48968 = G__49058;
i__48534_48969 = G__49059;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49061 = arguments.length;
var i__5770__auto___49062 = (0);
while(true){
if((i__5770__auto___49062 < len__5769__auto___49061)){
args__5775__auto__.push((arguments[i__5770__auto___49062]));

var G__49063 = (i__5770__auto___49062 + (1));
i__5770__auto___49062 = G__49063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48603){
var G__48604 = cljs.core.first(seq48603);
var seq48603__$1 = cljs.core.next(seq48603);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48604,seq48603__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48607 = arguments.length;
switch (G__48607) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__46137__auto___49071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46138__auto__ = (function (){var switch__46066__auto__ = (function (state_48615){
var state_val_48616 = (state_48615[(1)]);
if((state_val_48616 === (1))){
var state_48615__$1 = state_48615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48615__$1,(2),once_or_cleanup);
} else {
if((state_val_48616 === (2))){
var inst_48611 = (state_48615[(2)]);
var inst_48612 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48615__$1 = (function (){var statearr_48618 = state_48615;
(statearr_48618[(7)] = inst_48611);

return statearr_48618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48615__$1,inst_48612);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46067__auto__ = null;
var shadow$dom$state_machine__46067__auto____0 = (function (){
var statearr_48620 = [null,null,null,null,null,null,null,null];
(statearr_48620[(0)] = shadow$dom$state_machine__46067__auto__);

(statearr_48620[(1)] = (1));

return statearr_48620;
});
var shadow$dom$state_machine__46067__auto____1 = (function (state_48615){
while(true){
var ret_value__46068__auto__ = (function (){try{while(true){
var result__46069__auto__ = switch__46066__auto__(state_48615);
if(cljs.core.keyword_identical_QMARK_(result__46069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46069__auto__;
}
break;
}
}catch (e48621){var ex__46070__auto__ = e48621;
var statearr_48622_49072 = state_48615;
(statearr_48622_49072[(2)] = ex__46070__auto__);


if(cljs.core.seq((state_48615[(4)]))){
var statearr_48624_49073 = state_48615;
(statearr_48624_49073[(1)] = cljs.core.first((state_48615[(4)])));

} else {
throw ex__46070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49074 = state_48615;
state_48615 = G__49074;
continue;
} else {
return ret_value__46068__auto__;
}
break;
}
});
shadow$dom$state_machine__46067__auto__ = function(state_48615){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46067__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46067__auto____1.call(this,state_48615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46067__auto____0;
shadow$dom$state_machine__46067__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46067__auto____1;
return shadow$dom$state_machine__46067__auto__;
})()
})();
var state__46139__auto__ = (function (){var statearr_48626 = f__46138__auto__();
(statearr_48626[(6)] = c__46137__auto___49071);

return statearr_48626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46139__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
