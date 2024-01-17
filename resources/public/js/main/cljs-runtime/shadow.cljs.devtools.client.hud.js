goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_progress",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__,req){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__,req){
return (function (state_56135){
var state_val_56136 = (state_56135[(1)]);
if((state_val_56136 === (7))){
var state_56135__$1 = state_56135;
var statearr_56142_56306 = state_56135__$1;
(statearr_56142_56306[(2)] = false);

(statearr_56142_56306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (1))){
var state_56135__$1 = state_56135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56135__$1,(2),req);
} else {
if((state_val_56136 === (4))){
var inst_56092 = (state_56135[(7)]);
var inst_56098 = (inst_56092 == null);
var inst_56099 = cljs.core.not(inst_56098);
var state_56135__$1 = state_56135;
if(inst_56099){
var statearr_56144_56308 = state_56135__$1;
(statearr_56144_56308[(1)] = (6));

} else {
var statearr_56145_56309 = state_56135__$1;
(statearr_56145_56309[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (15))){
var state_56135__$1 = state_56135;
var statearr_56146_56312 = state_56135__$1;
(statearr_56146_56312[(2)] = null);

(statearr_56146_56312[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (13))){
var inst_56092 = (state_56135[(7)]);
var state_56135__$1 = state_56135;
var statearr_56148_56313 = state_56135__$1;
(statearr_56148_56313[(2)] = inst_56092);

(statearr_56148_56313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (6))){
var inst_56092 = (state_56135[(7)]);
var inst_56102 = inst_56092.cljs$lang$protocol_mask$partition0$;
var inst_56103 = (inst_56102 & (64));
var inst_56104 = inst_56092.cljs$core$ISeq$;
var inst_56108 = (cljs.core.PROTOCOL_SENTINEL === inst_56104);
var inst_56111 = ((inst_56103) || (inst_56108));
var state_56135__$1 = state_56135;
if(cljs.core.truth_(inst_56111)){
var statearr_56149_56314 = state_56135__$1;
(statearr_56149_56314[(1)] = (9));

} else {
var statearr_56150_56315 = state_56135__$1;
(statearr_56150_56315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (17))){
var inst_56130 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56151_56319 = state_56135__$1;
(statearr_56151_56319[(2)] = inst_56130);

(statearr_56151_56319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (3))){
var state_56135__$1 = state_56135;
var statearr_56152_56320 = state_56135__$1;
(statearr_56152_56320[(2)] = null);

(statearr_56152_56320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (12))){
var inst_56092 = (state_56135[(7)]);
var inst_56120 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56092);
var state_56135__$1 = state_56135;
var statearr_56154_56321 = state_56135__$1;
(statearr_56154_56321[(2)] = inst_56120);

(statearr_56154_56321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (2))){
var inst_56092 = (state_56135[(7)]);
var inst_56092__$1 = (state_56135[(2)]);
var inst_56093 = (inst_56092__$1 == null);
var state_56135__$1 = (function (){var statearr_56155 = state_56135;
(statearr_56155[(7)] = inst_56092__$1);

return statearr_56155;
})();
if(cljs.core.truth_(inst_56093)){
var statearr_56156_56323 = state_56135__$1;
(statearr_56156_56323[(1)] = (3));

} else {
var statearr_56157_56324 = state_56135__$1;
(statearr_56157_56324[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (11))){
var inst_56115 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
var statearr_56158_56326 = state_56135__$1;
(statearr_56158_56326[(2)] = inst_56115);

(statearr_56158_56326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (9))){
var state_56135__$1 = state_56135;
var statearr_56159_56327 = state_56135__$1;
(statearr_56159_56327[(2)] = true);

(statearr_56159_56327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (5))){
var inst_56132 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56135__$1,inst_56132);
} else {
if((state_val_56136 === (14))){
var inst_56123 = (state_56135[(8)]);
var inst_56123__$1 = (state_56135[(2)]);
var inst_56124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56123__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_56125 = (inst_56124 === (0));
var state_56135__$1 = (function (){var statearr_56160 = state_56135;
(statearr_56160[(8)] = inst_56123__$1);

return statearr_56160;
})();
if(cljs.core.truth_(inst_56125)){
var statearr_56161_56328 = state_56135__$1;
(statearr_56161_56328[(1)] = (15));

} else {
var statearr_56162_56329 = state_56135__$1;
(statearr_56162_56329[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (16))){
var inst_56123 = (state_56135[(8)]);
var inst_56128 = console.warn("file open failed",inst_56123);
var state_56135__$1 = state_56135;
var statearr_56163_56330 = state_56135__$1;
(statearr_56163_56330[(2)] = inst_56128);

(statearr_56163_56330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (10))){
var state_56135__$1 = state_56135;
var statearr_56164_56333 = state_56135__$1;
(statearr_56164_56333[(2)] = false);

(statearr_56164_56333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56136 === (8))){
var inst_56118 = (state_56135[(2)]);
var state_56135__$1 = state_56135;
if(cljs.core.truth_(inst_56118)){
var statearr_56166_56334 = state_56135__$1;
(statearr_56166_56334[(1)] = (12));

} else {
var statearr_56167_56335 = state_56135__$1;
(statearr_56167_56335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51859__auto__,req))
;
return ((function (switch__51723__auto__,c__51859__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____0 = (function (){
var statearr_56168 = [null,null,null,null,null,null,null,null,null];
(statearr_56168[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__);

(statearr_56168[(1)] = (1));

return statearr_56168;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____1 = (function (state_56135){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_56135);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e56169){if((e56169 instanceof Object)){
var ex__51727__auto__ = e56169;
var statearr_56170_56336 = state_56135;
(statearr_56170_56336[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56337 = state_56135;
state_56135 = G__56337;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__ = function(state_56135){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____1.call(this,state_56135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__,req))
})();
var state__51861__auto__ = (function (){var statearr_56172 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_56172[(6)] = c__51859__auto__);

return statearr_56172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__,req))
);

return c__51859__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__56178 = arguments.length;
switch (G__56178) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5808__auto___56341 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5808__auto___56341 == null)){
} else {
var x_56342 = temp__5808__auto___56341;
shadow.dom.remove(x_56342);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5808__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5808__auto__ == null)){
return null;
} else {
var container_el = temp__5808__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__51859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51859__auto__,el,container_el,temp__5808__auto__){
return (function (){
var f__51860__auto__ = (function (){var switch__51723__auto__ = ((function (c__51859__auto__,el,container_el,temp__5808__auto__){
return (function (state_56198){
var state_val_56199 = (state_56198[(1)]);
if((state_val_56199 === (1))){
var inst_56186 = cljs.core.async.timeout((250));
var state_56198__$1 = state_56198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56198__$1,(2),inst_56186);
} else {
if((state_val_56199 === (2))){
var inst_56188 = (state_56198[(2)]);
var inst_56189 = [el];
var inst_56190 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_56191 = [inst_56190];
var inst_56192 = cljs.core.PersistentHashMap.fromArrays(inst_56189,inst_56191);
var inst_56193 = shadow.animate.start((250),inst_56192);
var state_56198__$1 = (function (){var statearr_56202 = state_56198;
(statearr_56202[(7)] = inst_56188);

return statearr_56202;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56198__$1,(3),inst_56193);
} else {
if((state_val_56199 === (3))){
var inst_56195 = (state_56198[(2)]);
var inst_56196 = shadow.dom.remove(container_el);
var state_56198__$1 = (function (){var statearr_56205 = state_56198;
(statearr_56205[(8)] = inst_56195);

return statearr_56205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56198__$1,inst_56196);
} else {
return null;
}
}
}
});})(c__51859__auto__,el,container_el,temp__5808__auto__))
;
return ((function (switch__51723__auto__,c__51859__auto__,el,container_el,temp__5808__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____0 = (function (){
var statearr_56207 = [null,null,null,null,null,null,null,null,null];
(statearr_56207[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__);

(statearr_56207[(1)] = (1));

return statearr_56207;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____1 = (function (state_56198){
while(true){
var ret_value__51725__auto__ = (function (){try{while(true){
var result__51726__auto__ = switch__51723__auto__(state_56198);
if(cljs.core.keyword_identical_QMARK_(result__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51726__auto__;
}
break;
}
}catch (e56209){if((e56209 instanceof Object)){
var ex__51727__auto__ = e56209;
var statearr_56210_56355 = state_56198;
(statearr_56210_56355[(5)] = ex__51727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56356 = state_56198;
state_56198 = G__56356;
continue;
} else {
return ret_value__51725__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__ = function(state_56198){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____1.call(this,state_56198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__51724__auto__;
})()
;})(switch__51723__auto__,c__51859__auto__,el,container_el,temp__5808__auto__))
})();
var state__51861__auto__ = (function (){var statearr_56213 = (f__51860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51860__auto__.cljs$core$IFn$_invoke$arity$0() : f__51860__auto__.call(null));
(statearr_56213[(6)] = c__51859__auto__);

return statearr_56213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51861__auto__);
});})(c__51859__auto__,el,container_el,temp__5808__auto__))
);

return c__51859__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5808__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5808__auto__ == null)){
return null;
} else {
var el = temp__5808__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5808__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5808__auto__ == null)){
return null;
} else {
var d = temp__5808__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__56219(s__56220){
return (new cljs.core.LazySeq(null,(function (){
var s__56220__$1 = s__56220;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56220__$1);
if(temp__5804__auto__){
var s__56220__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56220__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56220__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56222 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56221 = (0);
while(true){
if((i__56221 < size__4522__auto__)){
var vec__56225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56221);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56225,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56225,(1),null);
cljs.core.chunk_append(b__56222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__56228 = "%4d | %s";
var G__56229 = (((1) + idx) + start_idx);
var G__56230 = text;
return goog.string.format(G__56228,G__56229,G__56230);
})()], null));

var G__56361 = (i__56221 + (1));
i__56221 = G__56361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56222),shadow$cljs$devtools$client$hud$source_line_html_$_iter__56219(cljs.core.chunk_rest(s__56220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56222),null);
}
} else {
var vec__56231 = cljs.core.first(s__56220__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__56234 = "%4d | %s";
var G__56235 = (((1) + idx) + start_idx);
var G__56236 = text;
return goog.string.format(G__56234,G__56235,G__56236);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__56219(cljs.core.rest(s__56220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__56241 = arguments.length;
switch (G__56241) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__56246){
var map__56247 = p__56246;
var map__56247__$1 = (((((!((map__56247 == null))))?(((((map__56247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56247):map__56247);
var warning = map__56247__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56247__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56247__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56247__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__56247,map__56247__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__56247,map__56247__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__56251){
var map__56252 = p__56251;
var map__56252__$1 = (((((!((map__56252 == null))))?(((((map__56252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56252):map__56252);
var warning = map__56252__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__56259 = source_excerpt;
var map__56259__$1 = (((((!((map__56259 == null))))?(((((map__56259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56259):map__56259);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56259__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__56272){
var map__56273 = p__56272;
var map__56273__$1 = (((((!((map__56273 == null))))?(((((map__56273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56273):map__56273);
var msg = map__56273__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__56275 = info;
var map__56275__$1 = (((((!((map__56275 == null))))?(((((map__56275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56275):map__56275);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56275__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56275,map__56275__$1,sources,map__56273,map__56273__$1,msg,type,info){
return (function (p1__56269_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__56269_SHARP_));
});})(map__56275,map__56275__$1,sources,map__56273,map__56273__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__56279(s__56280){
return (new cljs.core.LazySeq(null,((function (map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info){
return (function (){
var s__56280__$1 = s__56280;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56280__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56287 = cljs.core.first(xs__6360__auto__);
var map__56287__$1 = (((((!((map__56287 == null))))?(((((map__56287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56287):map__56287);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56287__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__56280__$1,map__56287,map__56287__$1,warnings,xs__6360__auto__,temp__5804__auto__,map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__56279_$_iter__56281(s__56282){
return (new cljs.core.LazySeq(null,((function (s__56280__$1,map__56287,map__56287__$1,warnings,xs__6360__auto__,temp__5804__auto__,map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info){
return (function (){
var s__56282__$1 = s__56282;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56282__$1);
if(temp__5804__auto____$1){
var s__56282__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56282__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56282__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56284 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56283 = (0);
while(true){
if((i__56283 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56283);
cljs.core.chunk_append(b__56284,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__56392 = (i__56283 + (1));
i__56283 = G__56392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56284),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__56279_$_iter__56281(cljs.core.chunk_rest(s__56282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56284),null);
}
} else {
var warning = cljs.core.first(s__56282__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__56279_$_iter__56281(cljs.core.rest(s__56282__$2)));
}
} else {
return null;
}
break;
}
});})(s__56280__$1,map__56287,map__56287__$1,warnings,xs__6360__auto__,temp__5804__auto__,map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info))
,null,null));
});})(s__56280__$1,map__56287,map__56287__$1,warnings,xs__6360__auto__,temp__5804__auto__,map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__56279(cljs.core.rest(s__56280__$1)));
} else {
var G__56397 = cljs.core.rest(s__56280__$1);
s__56280__$1 = G__56397;
continue;
}
} else {
return null;
}
break;
}
});})(map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info))
,null,null));
});})(map__56275,map__56275__$1,sources,sources_with_warnings,map__56273,map__56273__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__56296){
var map__56297 = p__56296;
var map__56297__$1 = (((((!((map__56297 == null))))?(((((map__56297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56297):map__56297);
var msg = map__56297__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56297__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5808__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5808__auto__ == null)){
return null;
} else {
var x = temp__5808__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
