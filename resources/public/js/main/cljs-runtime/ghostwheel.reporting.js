goog.provide('ghostwheel.reporting');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('cljs.test');
goog.require('expound.alpha');
goog.require('clojure.string');
goog.require('ghostwheel.logging');
ghostwheel.reporting._STAR_all_tests_successful = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
ghostwheel.reporting.wrap = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.wrap_line,(80));
ghostwheel.reporting.inc_report_counter_BANG_ = cljs.test.inc_report_counter_BANG_;
ghostwheel.reporting.warning_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
ghostwheel.reporting.snippets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498)," => Test coverage incomplete:",new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005)," => No generative testing performed"], null);
if((typeof ghostwheel !== 'undefined') && (typeof ghostwheel.reporting !== 'undefined') && (typeof ghostwheel.reporting.report !== 'undefined')){
} else {
ghostwheel.reporting.report = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57497 = cljs.core.get_global_hierarchy;
return (fexpr__57497.cljs$core$IFn$_invoke$arity$0 ? fexpr__57497.cljs$core$IFn$_invoke$arity$0() : fexpr__57497.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ghostwheel.reporting","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (m){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["Checking ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m))," ..."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base01","base01",277019065).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (m){
return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"summary","summary",380847952),(function (m){
var map__57500 = m;
var map__57500__$1 = (((((!((map__57500 == null))))?(((((map__57500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57500):map__57500);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"test","test",577538877));
var warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"warn","warn",-436710552));
var passed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pass,test);
var warnings_QMARK_ = (function (){var G__57506 = warn;
if((G__57506 == null)){
return null;
} else {
return (G__57506 > (0));
}
})();
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):((passed_QMARK_)?new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors):new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
));
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,(0)))?"No active tests found":((passed_QMARK_)?["Passed all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks"].join(''):["Failed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," checks",(((error > (0)))?["; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)," test error(s)"].join(''):null)].join('')
));
ghostwheel.logging.group_end();

if(cljs.core.truth_((function (){var or__4131__auto__ = (!(passed_QMARK_));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return warnings_QMARK_;
}
})())){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),color], null));

if(cljs.core.truth_(warnings_QMARK_)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(warn)," warning(s)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"orange0","orange0",1459969095).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
} else {
}

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),ghostwheel.logging.group_end));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
var map__57513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__57513__$1 = (((((!((map__57513 == null))))?(((((map__57513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57513):map__57513);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var fspec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275));
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var check_coverage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858));
var marked_unsafe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850));
var report_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword("ghostwheel.reporting","report-output","ghostwheel.reporting/report-output",-1798642788));
var G__57519_57750 = new cljs.core.Keyword(null,"pass","pass",1574159993);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__57519_57750) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__57519_57750));

if(cljs.core.truth_(check_coverage)){
if(cljs.core.truth_(marked_unsafe)){
var G__57521_57751 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__57521_57751) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__57521_57751));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Function marked as unsafe.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(fspec)){
var G__57523_57753 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__57523_57753) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__57523_57753));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Missing fspec(s)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
if(cljs.core.not(spec_checks)){
var G__57524_57756 = new cljs.core.Keyword(null,"warn","warn",-436710552);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__57524_57756) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__57524_57756));

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 Number of tests set to 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","no-gen-testing","ghostwheel.reporting/no-gen-testing",1838578005).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ghostwheel.reporting","incomplete-coverage","ghostwheel.reporting/incomplete-coverage",1228796498).cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.snippets))].join(''),ghostwheel.reporting.warning_style);

return ghostwheel.logging.group_end();
} else {
return null;

}
}
}
} else {
return null;
}
}));
ghostwheel.reporting.explain_problem_str = (function ghostwheel$reporting$explain_problem_str(failure_type,problem){
var map__57529 = problem;
var map__57529__$1 = (((((!((map__57529 == null))))?(((((map__57529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57529):map__57529);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57529__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57529__$1,new cljs.core.Keyword(null,"val","val",128701612));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57529__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57529__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57529__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var G__57533 = failure_type;
var G__57533__$1 = (((G__57533 instanceof cljs.core.Keyword))?G__57533.fqn:null);
switch (G__57533__$1) {
case "check-failed":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret","ret",-468222814)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1476951349),path], null):null),((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "instrument":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"not","not",-595976884),pred,new cljs.core.Keyword(null,"at","at",1476951349),path], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(via))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336),via], null):null)], null));

break;
case "else":
return problem;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57533__$1)].join('')));

}
});
ghostwheel.reporting.issue_msg = "\nPlease file an issue at https://github.com/gnl/ghostwheel/issues if you encounter false positives or negatives in side effect detection.";
ghostwheel.reporting.report_unexpected_side_effects = (function ghostwheel$reporting$report_unexpected_side_effects(message){
var map__57541 = message;
var map__57541__$1 = (((((!((map__57541 == null))))?(((((map__57541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57541):map__57541);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57541__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var found_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57541__$1,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799));
ghostwheel.logging.log_bold("Possible side effects detected in function marked as safe:\n");

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.log,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__57541,map__57541__$1,fn_name,found_fx){
return (function (p__57545){
var vec__57547 = p__57545;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57547,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57547,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57547,(2),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),(cljs.core.truth_(form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"at","at",-1177484420,null),form], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(details)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),details], null):null)], 0)));
});})(map__57541,map__57541__$1,fn_name,found_fx))
,found_fx)));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__57555 = ["=> Either remove the side effects, rename the function to '",[cljs.core.name(fn_name),"!'"].join('')," to mark it as unsafe, or add ^::g/ignore-fx to its metadata to disable this warning and consider the function safe for automated generative testing."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__57555) : ghostwheel.reporting.wrap.call(null,G__57555));
})());

return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));
});
ghostwheel.reporting.report_unexpected_safety = (function ghostwheel$reporting$report_unexpected_safety(message){
var safe_name = clojure.string.replace(cljs.core.name(new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528).cljs$core$IFn$_invoke$arity$1(message)),/!$/,"");
ghostwheel.logging.log_bold("No side effects detected in function marked as unsafe.");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((function (){var G__57569 = ["=> If safe, rename to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(safe_name),"'. If unsafe, rename the called unsafe functions to suffix them with a '!', or add the ^::g/ignore-fx metadata to disable this check."].join('');
return (ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(G__57569) : ghostwheel.reporting.wrap.call(null,G__57569));
})());

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.wrap.cljs$core$IFn$_invoke$arity$1(ghostwheel.reporting.issue_msg) : ghostwheel.reporting.wrap.call(null,ghostwheel.reporting.issue_msg)));

return ghostwheel.logging.log;
});
ghostwheel.reporting.report_spec_check = (function ghostwheel$reporting$report_spec_check(p__57578){
var map__57579 = p__57578;
var map__57579__$1 = (((((!((map__57579 == null))))?(((((map__57579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57579):map__57579);
var spec_checks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57579__$1,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57579__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var seq__57585 = cljs.core.seq(spec_checks);
var chunk__57589 = null;
var count__57590 = (0);
var i__57591 = (0);
while(true){
if((i__57591 < count__57590)){
var check = chunk__57589.cljs$core$IIndexed$_nth$arity$2(null,i__57591);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_57766 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_57767 = spec_error_57766.data;
var msg_57768 = (function (){try{return spec_error_57766.message;
}catch (e57664){if((e57664 instanceof Object)){
var _ = e57664;
return null;
} else {
throw e57664;

}
}})();
if(cljs.core.not(data_57767)){
ghostwheel.logging.log_bold(msg_57768);
} else {
var temp__5804__auto___57769 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_57767);
if(cljs.core.truth_(temp__5804__auto___57769)){
var args_57770 = temp__5804__auto___57769;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_57770));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_57767),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_57768))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57678_57771 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57679_57772 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57680_57773 = true;
var _STAR_print_fn_STAR__temp_val__57681_57774 = ((function (seq__57585,chunk__57589,count__57590,i__57591,_STAR_print_newline_STAR__orig_val__57678_57771,_STAR_print_fn_STAR__orig_val__57679_57772,_STAR_print_newline_STAR__temp_val__57680_57773,sb__4661__auto__,spec_error_57766,data_57767,msg_57768,test_ret,check,map__57579,map__57579__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__57585,chunk__57589,count__57590,i__57591,_STAR_print_newline_STAR__orig_val__57678_57771,_STAR_print_fn_STAR__orig_val__57679_57772,_STAR_print_newline_STAR__temp_val__57680_57773,sb__4661__auto__,spec_error_57766,data_57767,msg_57768,test_ret,check,map__57579,map__57579__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57680_57773;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57681_57774;

try{var fexpr__57683_57775 = expound.alpha.custom_printer(null);
(fexpr__57683_57775.cljs$core$IFn$_invoke$arity$1 ? fexpr__57683_57775.cljs$core$IFn$_invoke$arity$1(data_57767) : fexpr__57683_57775.call(null,data_57767));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57679_57772;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57678_57771;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_57768);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_57767);

ghostwheel.logging.group_end();
} else {
}
}


var G__57778 = seq__57585;
var G__57779 = chunk__57589;
var G__57780 = count__57590;
var G__57781 = (i__57591 + (1));
seq__57585 = G__57778;
chunk__57589 = G__57779;
count__57590 = G__57780;
i__57591 = G__57781;
continue;
} else {
var G__57782 = seq__57585;
var G__57783 = chunk__57589;
var G__57784 = count__57590;
var G__57785 = (i__57591 + (1));
seq__57585 = G__57782;
chunk__57589 = G__57783;
count__57590 = G__57784;
i__57591 = G__57785;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57585);
if(temp__5804__auto__){
var seq__57585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57585__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57585__$1);
var G__57786 = cljs.core.chunk_rest(seq__57585__$1);
var G__57787 = c__4550__auto__;
var G__57788 = cljs.core.count(c__4550__auto__);
var G__57789 = (0);
seq__57585 = G__57786;
chunk__57589 = G__57787;
count__57590 = G__57788;
i__57591 = G__57789;
continue;
} else {
var check = cljs.core.first(seq__57585__$1);
var test_ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(check,new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960));
if(cljs.core.not(new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(test_ret))){
var spec_error_57790 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(test_ret);
var data_57791 = spec_error_57790.data;
var msg_57792 = (function (){try{return spec_error_57790.message;
}catch (e57685){if((e57685 instanceof Object)){
var _ = e57685;
return null;
} else {
throw e57685;

}
}})();
if(cljs.core.not(data_57791)){
ghostwheel.logging.log_bold(msg_57792);
} else {
var temp__5804__auto___57793__$1 = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(data_57791);
if(cljs.core.truth_(temp__5804__auto___57793__$1)){
var args_57795 = temp__5804__auto___57793__$1;
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("\nCall:");

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(cljs.core.with_meta(fn_name,null),args_57795));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(data_57791),new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split_lines(msg_57792))),"\n"].join(''));
} else {
}

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1([(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57699_57797 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57700_57798 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57701_57799 = true;
var _STAR_print_fn_STAR__temp_val__57702_57800 = ((function (seq__57585,chunk__57589,count__57590,i__57591,_STAR_print_newline_STAR__orig_val__57699_57797,_STAR_print_fn_STAR__orig_val__57700_57798,_STAR_print_newline_STAR__temp_val__57701_57799,sb__4661__auto__,spec_error_57790,data_57791,msg_57792,test_ret,check,seq__57585__$1,temp__5804__auto__,map__57579,map__57579__$1,spec_checks,fn_name){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__57585,chunk__57589,count__57590,i__57591,_STAR_print_newline_STAR__orig_val__57699_57797,_STAR_print_fn_STAR__orig_val__57700_57798,_STAR_print_newline_STAR__temp_val__57701_57799,sb__4661__auto__,spec_error_57790,data_57791,msg_57792,test_ret,check,seq__57585__$1,temp__5804__auto__,map__57579,map__57579__$1,spec_checks,fn_name))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57701_57799;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57702_57800;

try{var fexpr__57707_57802 = expound.alpha.custom_printer(null);
(fexpr__57707_57802.cljs$core$IFn$_invoke$arity$1 ? fexpr__57707_57802.cljs$core$IFn$_invoke$arity$1(data_57791) : fexpr__57707_57802.call(null,data_57791));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57700_57798;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57699_57797;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"\n"].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_report_output_STAR_,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2("Raw error data:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"base0","base0",128742798).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_57792);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data_57791);

ghostwheel.logging.group_end();
} else {
}
}


var G__57813 = cljs.core.next(seq__57585__$1);
var G__57814 = null;
var G__57815 = (0);
var G__57816 = (0);
seq__57585 = G__57813;
chunk__57589 = G__57814;
count__57590 = G__57815;
i__57591 = G__57816;
continue;
} else {
var G__57817 = cljs.core.next(seq__57585__$1);
var G__57818 = null;
var G__57819 = (0);
var G__57820 = (0);
seq__57585 = G__57817;
chunk__57589 = G__57818;
count__57590 = G__57819;
i__57591 = G__57820;
continue;
}
}
} else {
return null;
}
}
break;
}
});
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
var map__57716 = message;
var map__57716__$1 = (((((!((map__57716 == null))))?(((((map__57716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57716):map__57716);
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57716__$1,new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57716__$1,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845));
var summary = (function (){var G__57719 = failure;
var G__57719__$1 = (((G__57719 instanceof cljs.core.Keyword))?G__57719.fqn:null);
switch (G__57719__$1) {
case "ghostwheel.reporting/unexpected-fx":
return "Possible side effects detected";

break;
case "ghostwheel.reporting/unexpected-safety":
return "Expected side effects not detected";

break;
case "ghostwheel.reporting/spec-failure":
return "Spec check";

break;
default:
return null;

}
})();
var start_group = ghostwheel.logging.group;
var G__57720_57822 = new cljs.core.Keyword(null,"fail","fail",1706214930);
(ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1 ? ghostwheel.reporting.inc_report_counter_BANG_.cljs$core$IFn$_invoke$arity$1(G__57720_57822) : ghostwheel.reporting.inc_report_counter_BANG_.call(null,G__57720_57822));

var G__57721_57824 = ["FAILED: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," \u2013 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(summary)].join('');
var G__57722_57825 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null);
(start_group.cljs$core$IFn$_invoke$arity$2 ? start_group.cljs$core$IFn$_invoke$arity$2(G__57721_57824,G__57722_57825) : start_group.call(null,G__57721_57824,G__57722_57825));

var G__57726_57828 = failure;
var G__57726_57829__$1 = (((G__57726_57828 instanceof cljs.core.Keyword))?G__57726_57828.fqn:null);
switch (G__57726_57829__$1) {
case "ghostwheel.reporting/unexpected-fx":
ghostwheel.reporting.report_unexpected_side_effects(message);

break;
case "ghostwheel.reporting/unexpected-safety":
ghostwheel.reporting.report_unexpected_safety(message);

break;
case "ghostwheel.reporting/spec-failure":
ghostwheel.reporting.report_spec_check(message);

break;
default:
ghostwheel.logging.log_bold(["Undefined failure reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure)].join(''));

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(message);

}

return ghostwheel.logging.group_end();
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),(function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ghostwheel.reporting._STAR_all_tests_successful,(function (p1__57738_SHARP_,p2__57739_SHARP_){
var and__4120__auto__ = p1__57738_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return p2__57739_SHARP_;
} else {
return and__4120__auto__;
}
}),cljs.test.successful_QMARK_(m));
}));
ghostwheel.reporting.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));

//# sourceMappingURL=ghostwheel.reporting.js.map
