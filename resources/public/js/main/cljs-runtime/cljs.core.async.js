goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42086 = arguments.length;
switch (G__42086) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42089 = (function (f,blockable,meta42090){
this.f = f;
this.blockable = blockable;
this.meta42090 = meta42090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42091,meta42090__$1){
var self__ = this;
var _42091__$1 = this;
return (new cljs.core.async.t_cljs$core$async42089(self__.f,self__.blockable,meta42090__$1));
});

cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42091){
var self__ = this;
var _42091__$1 = this;
return self__.meta42090;
});

cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42090","meta42090",-2047747630,null)], null);
});

cljs.core.async.t_cljs$core$async42089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42089";

cljs.core.async.t_cljs$core$async42089.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42089.
 */
cljs.core.async.__GT_t_cljs$core$async42089 = (function cljs$core$async$__GT_t_cljs$core$async42089(f__$1,blockable__$1,meta42090){
return (new cljs.core.async.t_cljs$core$async42089(f__$1,blockable__$1,meta42090));
});

}

return (new cljs.core.async.t_cljs$core$async42089(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42107 = arguments.length;
switch (G__42107) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42114 = arguments.length;
switch (G__42114) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42133 = arguments.length;
switch (G__42133) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45113 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45113) : fn1.call(null,val_45113));
} else {
cljs.core.async.impl.dispatch.run(((function (val_45113,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45113) : fn1.call(null,val_45113));
});})(val_45113,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42149 = arguments.length;
switch (G__42149) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5802__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5802__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___45117 = n;
var x_45118 = (0);
while(true){
if((x_45118 < n__4607__auto___45117)){
(a[x_45118] = x_45118);

var G__45121 = (x_45118 + (1));
x_45118 = G__45121;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42173 = (function (flag,meta42174){
this.flag = flag;
this.meta42174 = meta42174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42175,meta42174__$1){
var self__ = this;
var _42175__$1 = this;
return (new cljs.core.async.t_cljs$core$async42173(self__.flag,meta42174__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42175){
var self__ = this;
var _42175__$1 = this;
return self__.meta42174;
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42174","meta42174",1140740410,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42173";

cljs.core.async.t_cljs$core$async42173.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42173");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42173.
 */
cljs.core.async.__GT_t_cljs$core$async42173 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42173(flag__$1,meta42174){
return (new cljs.core.async.t_cljs$core$async42173(flag__$1,meta42174));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42173(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42194 = (function (flag,cb,meta42195){
this.flag = flag;
this.cb = cb;
this.meta42195 = meta42195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42196,meta42195__$1){
var self__ = this;
var _42196__$1 = this;
return (new cljs.core.async.t_cljs$core$async42194(self__.flag,self__.cb,meta42195__$1));
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42196){
var self__ = this;
var _42196__$1 = this;
return self__.meta42195;
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42195","meta42195",-1752287382,null)], null);
});

cljs.core.async.t_cljs$core$async42194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42194";

cljs.core.async.t_cljs$core$async42194.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42194");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42194.
 */
cljs.core.async.__GT_t_cljs$core$async42194 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42194(flag__$1,cb__$1,meta42195){
return (new cljs.core.async.t_cljs$core$async42194(flag__$1,cb__$1,meta42195));
});

}

return (new cljs.core.async.t_cljs$core$async42194(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42217_SHARP_){
var G__42221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42217_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42221) : fret.call(null,G__42221));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42218_SHARP_){
var G__42222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42218_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42222) : fret.call(null,G__42222));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45135 = (i + (1));
i = G__45135;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45139 = arguments.length;
var i__4731__auto___45140 = (0);
while(true){
if((i__4731__auto___45140 < len__4730__auto___45139)){
args__4736__auto__.push((arguments[i__4731__auto___45140]));

var G__45141 = (i__4731__auto___45140 + (1));
i__4731__auto___45140 = G__45141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42235){
var map__42237 = p__42235;
var map__42237__$1 = (((((!((map__42237 == null))))?(((((map__42237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42237):map__42237);
var opts = map__42237__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42229){
var G__42230 = cljs.core.first(seq42229);
var seq42229__$1 = cljs.core.next(seq42229);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42230,seq42229__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42241 = arguments.length;
switch (G__42241) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42006__auto___45150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45150){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45150){
return (function (state_42276){
var state_val_42277 = (state_42276[(1)]);
if((state_val_42277 === (7))){
var inst_42270 = (state_42276[(2)]);
var state_42276__$1 = state_42276;
var statearr_42278_45152 = state_42276__$1;
(statearr_42278_45152[(2)] = inst_42270);

(statearr_42278_45152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (1))){
var state_42276__$1 = state_42276;
var statearr_42279_45154 = state_42276__$1;
(statearr_42279_45154[(2)] = null);

(statearr_42279_45154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (4))){
var inst_42251 = (state_42276[(7)]);
var inst_42251__$1 = (state_42276[(2)]);
var inst_42252 = (inst_42251__$1 == null);
var state_42276__$1 = (function (){var statearr_42280 = state_42276;
(statearr_42280[(7)] = inst_42251__$1);

return statearr_42280;
})();
if(cljs.core.truth_(inst_42252)){
var statearr_42281_45156 = state_42276__$1;
(statearr_42281_45156[(1)] = (5));

} else {
var statearr_42282_45157 = state_42276__$1;
(statearr_42282_45157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (13))){
var state_42276__$1 = state_42276;
var statearr_42283_45159 = state_42276__$1;
(statearr_42283_45159[(2)] = null);

(statearr_42283_45159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (6))){
var inst_42251 = (state_42276[(7)]);
var state_42276__$1 = state_42276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42276__$1,(11),to,inst_42251);
} else {
if((state_val_42277 === (3))){
var inst_42274 = (state_42276[(2)]);
var state_42276__$1 = state_42276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42276__$1,inst_42274);
} else {
if((state_val_42277 === (12))){
var state_42276__$1 = state_42276;
var statearr_42284_45160 = state_42276__$1;
(statearr_42284_45160[(2)] = null);

(statearr_42284_45160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (2))){
var state_42276__$1 = state_42276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42276__$1,(4),from);
} else {
if((state_val_42277 === (11))){
var inst_42263 = (state_42276[(2)]);
var state_42276__$1 = state_42276;
if(cljs.core.truth_(inst_42263)){
var statearr_42289_45162 = state_42276__$1;
(statearr_42289_45162[(1)] = (12));

} else {
var statearr_42290_45163 = state_42276__$1;
(statearr_42290_45163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (9))){
var state_42276__$1 = state_42276;
var statearr_42291_45164 = state_42276__$1;
(statearr_42291_45164[(2)] = null);

(statearr_42291_45164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (5))){
var state_42276__$1 = state_42276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42292_45165 = state_42276__$1;
(statearr_42292_45165[(1)] = (8));

} else {
var statearr_42293_45166 = state_42276__$1;
(statearr_42293_45166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (14))){
var inst_42268 = (state_42276[(2)]);
var state_42276__$1 = state_42276;
var statearr_42294_45167 = state_42276__$1;
(statearr_42294_45167[(2)] = inst_42268);

(statearr_42294_45167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (10))){
var inst_42260 = (state_42276[(2)]);
var state_42276__$1 = state_42276;
var statearr_42297_45168 = state_42276__$1;
(statearr_42297_45168[(2)] = inst_42260);

(statearr_42297_45168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42277 === (8))){
var inst_42257 = cljs.core.async.close_BANG_(to);
var state_42276__$1 = state_42276;
var statearr_42298_45170 = state_42276__$1;
(statearr_42298_45170[(2)] = inst_42257);

(statearr_42298_45170[(1)] = (10));


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
});})(c__42006__auto___45150))
;
return ((function (switch__41732__auto__,c__42006__auto___45150){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_42317 = [null,null,null,null,null,null,null,null];
(statearr_42317[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_42317[(1)] = (1));

return statearr_42317;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_42276){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42276);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42319){var ex__41736__auto__ = e42319;
var statearr_42320_45171 = state_42276;
(statearr_42320_45171[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42276[(4)]))){
var statearr_42321_45172 = state_42276;
(statearr_42321_45172[(1)] = cljs.core.first((state_42276[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45175 = state_42276;
state_42276 = G__45175;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_42276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_42276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45150))
})();
var state__42008__auto__ = (function (){var statearr_42322 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42322[(6)] = c__42006__auto___45150);

return statearr_42322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45150))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__42331){
var vec__42332 = p__42331;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42332,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42332,(1),null);
var job = vec__42332;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42006__auto___45183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results){
return (function (state_42339){
var state_val_42340 = (state_42339[(1)]);
if((state_val_42340 === (1))){
var state_42339__$1 = state_42339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42339__$1,(2),res,v);
} else {
if((state_val_42340 === (2))){
var inst_42336 = (state_42339[(2)]);
var inst_42337 = cljs.core.async.close_BANG_(res);
var state_42339__$1 = (function (){var statearr_42342 = state_42339;
(statearr_42342[(7)] = inst_42336);

return statearr_42342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42339__$1,inst_42337);
} else {
return null;
}
}
});})(c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results))
;
return ((function (switch__41732__auto__,c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_42343 = [null,null,null,null,null,null,null,null];
(statearr_42343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__);

(statearr_42343[(1)] = (1));

return statearr_42343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1 = (function (state_42339){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42339);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42344){var ex__41736__auto__ = e42344;
var statearr_42345_45189 = state_42339;
(statearr_42345_45189[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42339[(4)]))){
var statearr_42346_45190 = state_42339;
(statearr_42346_45190[(1)] = cljs.core.first((state_42339[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45191 = state_42339;
state_42339 = G__45191;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = function(state_42339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1.call(this,state_42339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results))
})();
var state__42008__auto__ = (function (){var statearr_42347 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42347[(6)] = c__42006__auto___45183);

return statearr_42347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45183,res,vec__42332,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42348){
var vec__42349 = p__42348;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42349,(1),null);
var job = vec__42349;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___45196 = n;
var __45197 = (0);
while(true){
if((__45197 < n__4607__auto___45196)){
var G__42352_45198 = type;
var G__42352_45199__$1 = (((G__42352_45198 instanceof cljs.core.Keyword))?G__42352_45198.fqn:null);
switch (G__42352_45199__$1) {
case "compute":
var c__42006__auto___45203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45197,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (__45197,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function (state_42365){
var state_val_42366 = (state_42365[(1)]);
if((state_val_42366 === (1))){
var state_42365__$1 = state_42365;
var statearr_42367_45209 = state_42365__$1;
(statearr_42367_45209[(2)] = null);

(statearr_42367_45209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (2))){
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42365__$1,(4),jobs);
} else {
if((state_val_42366 === (3))){
var inst_42363 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42365__$1,inst_42363);
} else {
if((state_val_42366 === (4))){
var inst_42355 = (state_42365[(2)]);
var inst_42356 = process(inst_42355);
var state_42365__$1 = state_42365;
if(cljs.core.truth_(inst_42356)){
var statearr_42368_45211 = state_42365__$1;
(statearr_42368_45211[(1)] = (5));

} else {
var statearr_42369_45212 = state_42365__$1;
(statearr_42369_45212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (5))){
var state_42365__$1 = state_42365;
var statearr_42370_45215 = state_42365__$1;
(statearr_42370_45215[(2)] = null);

(statearr_42370_45215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (6))){
var state_42365__$1 = state_42365;
var statearr_42371_45218 = state_42365__$1;
(statearr_42371_45218[(2)] = null);

(statearr_42371_45218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (7))){
var inst_42361 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
var statearr_42374_45220 = state_42365__$1;
(statearr_42374_45220[(2)] = inst_42361);

(statearr_42374_45220[(1)] = (3));


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
});})(__45197,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
;
return ((function (__45197,switch__41732__auto__,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_42377 = [null,null,null,null,null,null,null];
(statearr_42377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__);

(statearr_42377[(1)] = (1));

return statearr_42377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1 = (function (state_42365){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42365);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42379){var ex__41736__auto__ = e42379;
var statearr_42380_45224 = state_42365;
(statearr_42380_45224[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42365[(4)]))){
var statearr_42381_45225 = state_42365;
(statearr_42381_45225[(1)] = cljs.core.first((state_42365[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45227 = state_42365;
state_42365 = G__45227;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = function(state_42365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1.call(this,state_42365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__;
})()
;})(__45197,switch__41732__auto__,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
})();
var state__42008__auto__ = (function (){var statearr_42382 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42382[(6)] = c__42006__auto___45203);

return statearr_42382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(__45197,c__42006__auto___45203,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
);


break;
case "async":
var c__42006__auto___45231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45197,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (__45197,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function (state_42397){
var state_val_42398 = (state_42397[(1)]);
if((state_val_42398 === (1))){
var state_42397__$1 = state_42397;
var statearr_42403_45234 = state_42397__$1;
(statearr_42403_45234[(2)] = null);

(statearr_42403_45234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (2))){
var state_42397__$1 = state_42397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42397__$1,(4),jobs);
} else {
if((state_val_42398 === (3))){
var inst_42395 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42397__$1,inst_42395);
} else {
if((state_val_42398 === (4))){
var inst_42387 = (state_42397[(2)]);
var inst_42388 = async(inst_42387);
var state_42397__$1 = state_42397;
if(cljs.core.truth_(inst_42388)){
var statearr_42405_45241 = state_42397__$1;
(statearr_42405_45241[(1)] = (5));

} else {
var statearr_42406_45243 = state_42397__$1;
(statearr_42406_45243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (5))){
var state_42397__$1 = state_42397;
var statearr_42407_45245 = state_42397__$1;
(statearr_42407_45245[(2)] = null);

(statearr_42407_45245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (6))){
var state_42397__$1 = state_42397;
var statearr_42421_45246 = state_42397__$1;
(statearr_42421_45246[(2)] = null);

(statearr_42421_45246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42398 === (7))){
var inst_42393 = (state_42397[(2)]);
var state_42397__$1 = state_42397;
var statearr_42429_45247 = state_42397__$1;
(statearr_42429_45247[(2)] = inst_42393);

(statearr_42429_45247[(1)] = (3));


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
});})(__45197,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
;
return ((function (__45197,switch__41732__auto__,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_42441 = [null,null,null,null,null,null,null];
(statearr_42441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__);

(statearr_42441[(1)] = (1));

return statearr_42441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1 = (function (state_42397){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42397);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42446){var ex__41736__auto__ = e42446;
var statearr_42448_45253 = state_42397;
(statearr_42448_45253[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42397[(4)]))){
var statearr_42451_45254 = state_42397;
(statearr_42451_45254[(1)] = cljs.core.first((state_42397[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45257 = state_42397;
state_42397 = G__45257;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = function(state_42397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1.call(this,state_42397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__;
})()
;})(__45197,switch__41732__auto__,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
})();
var state__42008__auto__ = (function (){var statearr_42463 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42463[(6)] = c__42006__auto___45231);

return statearr_42463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(__45197,c__42006__auto___45231,G__42352_45198,G__42352_45199__$1,n__4607__auto___45196,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42352_45199__$1)].join('')));

}

var G__45269 = (__45197 + (1));
__45197 = G__45269;
continue;
} else {
}
break;
}

var c__42006__auto___45270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45270,jobs,results,process,async){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45270,jobs,results,process,async){
return (function (state_42490){
var state_val_42492 = (state_42490[(1)]);
if((state_val_42492 === (7))){
var inst_42485 = (state_42490[(2)]);
var state_42490__$1 = state_42490;
var statearr_42493_45272 = state_42490__$1;
(statearr_42493_45272[(2)] = inst_42485);

(statearr_42493_45272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (1))){
var state_42490__$1 = state_42490;
var statearr_42494_45274 = state_42490__$1;
(statearr_42494_45274[(2)] = null);

(statearr_42494_45274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (4))){
var inst_42466 = (state_42490[(7)]);
var inst_42466__$1 = (state_42490[(2)]);
var inst_42467 = (inst_42466__$1 == null);
var state_42490__$1 = (function (){var statearr_42496 = state_42490;
(statearr_42496[(7)] = inst_42466__$1);

return statearr_42496;
})();
if(cljs.core.truth_(inst_42467)){
var statearr_42497_45276 = state_42490__$1;
(statearr_42497_45276[(1)] = (5));

} else {
var statearr_42498_45279 = state_42490__$1;
(statearr_42498_45279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (6))){
var inst_42466 = (state_42490[(7)]);
var inst_42471 = (state_42490[(8)]);
var inst_42471__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42476 = [inst_42466,inst_42471__$1];
var inst_42477 = (new cljs.core.PersistentVector(null,2,(5),inst_42474,inst_42476,null));
var state_42490__$1 = (function (){var statearr_42502 = state_42490;
(statearr_42502[(8)] = inst_42471__$1);

return statearr_42502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42490__$1,(8),jobs,inst_42477);
} else {
if((state_val_42492 === (3))){
var inst_42487 = (state_42490[(2)]);
var state_42490__$1 = state_42490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42490__$1,inst_42487);
} else {
if((state_val_42492 === (2))){
var state_42490__$1 = state_42490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42490__$1,(4),from);
} else {
if((state_val_42492 === (9))){
var inst_42481 = (state_42490[(2)]);
var state_42490__$1 = (function (){var statearr_42504 = state_42490;
(statearr_42504[(9)] = inst_42481);

return statearr_42504;
})();
var statearr_42505_45285 = state_42490__$1;
(statearr_42505_45285[(2)] = null);

(statearr_42505_45285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (5))){
var inst_42469 = cljs.core.async.close_BANG_(jobs);
var state_42490__$1 = state_42490;
var statearr_42506_45287 = state_42490__$1;
(statearr_42506_45287[(2)] = inst_42469);

(statearr_42506_45287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42492 === (8))){
var inst_42471 = (state_42490[(8)]);
var inst_42479 = (state_42490[(2)]);
var state_42490__$1 = (function (){var statearr_42507 = state_42490;
(statearr_42507[(10)] = inst_42479);

return statearr_42507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42490__$1,(9),results,inst_42471);
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
});})(c__42006__auto___45270,jobs,results,process,async))
;
return ((function (switch__41732__auto__,c__42006__auto___45270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_42508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__);

(statearr_42508[(1)] = (1));

return statearr_42508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1 = (function (state_42490){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42490);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42509){var ex__41736__auto__ = e42509;
var statearr_42510_45289 = state_42490;
(statearr_42510_45289[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42490[(4)]))){
var statearr_42511_45290 = state_42490;
(statearr_42511_45290[(1)] = cljs.core.first((state_42490[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45291 = state_42490;
state_42490 = G__45291;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = function(state_42490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1.call(this,state_42490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45270,jobs,results,process,async))
})();
var state__42008__auto__ = (function (){var statearr_42516 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42516[(6)] = c__42006__auto___45270);

return statearr_42516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45270,jobs,results,process,async))
);


var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__,jobs,results,process,async){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__,jobs,results,process,async){
return (function (state_42558){
var state_val_42559 = (state_42558[(1)]);
if((state_val_42559 === (7))){
var inst_42554 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
var statearr_42563_45292 = state_42558__$1;
(statearr_42563_45292[(2)] = inst_42554);

(statearr_42563_45292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (20))){
var state_42558__$1 = state_42558;
var statearr_42564_45293 = state_42558__$1;
(statearr_42564_45293[(2)] = null);

(statearr_42564_45293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (1))){
var state_42558__$1 = state_42558;
var statearr_42565_45296 = state_42558__$1;
(statearr_42565_45296[(2)] = null);

(statearr_42565_45296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (4))){
var inst_42519 = (state_42558[(7)]);
var inst_42519__$1 = (state_42558[(2)]);
var inst_42520 = (inst_42519__$1 == null);
var state_42558__$1 = (function (){var statearr_42571 = state_42558;
(statearr_42571[(7)] = inst_42519__$1);

return statearr_42571;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42572_45300 = state_42558__$1;
(statearr_42572_45300[(1)] = (5));

} else {
var statearr_42573_45302 = state_42558__$1;
(statearr_42573_45302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (15))){
var inst_42532 = (state_42558[(8)]);
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42558__$1,(18),to,inst_42532);
} else {
if((state_val_42559 === (21))){
var inst_42549 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
var statearr_42574_45312 = state_42558__$1;
(statearr_42574_45312[(2)] = inst_42549);

(statearr_42574_45312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (13))){
var inst_42551 = (state_42558[(2)]);
var state_42558__$1 = (function (){var statearr_42575 = state_42558;
(statearr_42575[(9)] = inst_42551);

return statearr_42575;
})();
var statearr_42576_45314 = state_42558__$1;
(statearr_42576_45314[(2)] = null);

(statearr_42576_45314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (6))){
var inst_42519 = (state_42558[(7)]);
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42558__$1,(11),inst_42519);
} else {
if((state_val_42559 === (17))){
var inst_42544 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
if(cljs.core.truth_(inst_42544)){
var statearr_42581_45318 = state_42558__$1;
(statearr_42581_45318[(1)] = (19));

} else {
var statearr_42582_45319 = state_42558__$1;
(statearr_42582_45319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (3))){
var inst_42556 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42558__$1,inst_42556);
} else {
if((state_val_42559 === (12))){
var inst_42529 = (state_42558[(10)]);
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42558__$1,(14),inst_42529);
} else {
if((state_val_42559 === (2))){
var state_42558__$1 = state_42558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42558__$1,(4),results);
} else {
if((state_val_42559 === (19))){
var state_42558__$1 = state_42558;
var statearr_42584_45324 = state_42558__$1;
(statearr_42584_45324[(2)] = null);

(statearr_42584_45324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (11))){
var inst_42529 = (state_42558[(2)]);
var state_42558__$1 = (function (){var statearr_42585 = state_42558;
(statearr_42585[(10)] = inst_42529);

return statearr_42585;
})();
var statearr_42586_45330 = state_42558__$1;
(statearr_42586_45330[(2)] = null);

(statearr_42586_45330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (9))){
var state_42558__$1 = state_42558;
var statearr_42587_45332 = state_42558__$1;
(statearr_42587_45332[(2)] = null);

(statearr_42587_45332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (5))){
var state_42558__$1 = state_42558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42588_45333 = state_42558__$1;
(statearr_42588_45333[(1)] = (8));

} else {
var statearr_42589_45334 = state_42558__$1;
(statearr_42589_45334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (14))){
var inst_42538 = (state_42558[(11)]);
var inst_42532 = (state_42558[(8)]);
var inst_42532__$1 = (state_42558[(2)]);
var inst_42537 = (inst_42532__$1 == null);
var inst_42538__$1 = cljs.core.not(inst_42537);
var state_42558__$1 = (function (){var statearr_42590 = state_42558;
(statearr_42590[(11)] = inst_42538__$1);

(statearr_42590[(8)] = inst_42532__$1);

return statearr_42590;
})();
if(inst_42538__$1){
var statearr_42591_45336 = state_42558__$1;
(statearr_42591_45336[(1)] = (15));

} else {
var statearr_42592_45337 = state_42558__$1;
(statearr_42592_45337[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (16))){
var inst_42538 = (state_42558[(11)]);
var state_42558__$1 = state_42558;
var statearr_42593_45338 = state_42558__$1;
(statearr_42593_45338[(2)] = inst_42538);

(statearr_42593_45338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (10))){
var inst_42526 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
var statearr_42594_45342 = state_42558__$1;
(statearr_42594_45342[(2)] = inst_42526);

(statearr_42594_45342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (18))){
var inst_42541 = (state_42558[(2)]);
var state_42558__$1 = state_42558;
var statearr_42595_45353 = state_42558__$1;
(statearr_42595_45353[(2)] = inst_42541);

(statearr_42595_45353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42559 === (8))){
var inst_42523 = cljs.core.async.close_BANG_(to);
var state_42558__$1 = state_42558;
var statearr_42596_45356 = state_42558__$1;
(statearr_42596_45356[(2)] = inst_42523);

(statearr_42596_45356[(1)] = (10));


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
}
}
}
}
});})(c__42006__auto__,jobs,results,process,async))
;
return ((function (switch__41732__auto__,c__42006__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_42600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__);

(statearr_42600[(1)] = (1));

return statearr_42600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1 = (function (state_42558){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42558);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42602){var ex__41736__auto__ = e42602;
var statearr_42603_45363 = state_42558;
(statearr_42603_45363[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42558[(4)]))){
var statearr_42604_45366 = state_42558;
(statearr_42604_45366[(1)] = cljs.core.first((state_42558[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45370 = state_42558;
state_42558 = G__45370;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__ = function(state_42558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1.call(this,state_42558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__,jobs,results,process,async))
})();
var state__42008__auto__ = (function (){var statearr_42605 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42605[(6)] = c__42006__auto__);

return statearr_42605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__,jobs,results,process,async))
);

return c__42006__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42609 = arguments.length;
switch (G__42609) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42617 = arguments.length;
switch (G__42617) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42627 = arguments.length;
switch (G__42627) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42006__auto___45398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45398,tc,fc){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45398,tc,fc){
return (function (state_42659){
var state_val_42660 = (state_42659[(1)]);
if((state_val_42660 === (7))){
var inst_42654 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
var statearr_42667_45399 = state_42659__$1;
(statearr_42667_45399[(2)] = inst_42654);

(statearr_42667_45399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (1))){
var state_42659__$1 = state_42659;
var statearr_42668_45407 = state_42659__$1;
(statearr_42668_45407[(2)] = null);

(statearr_42668_45407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (4))){
var inst_42635 = (state_42659[(7)]);
var inst_42635__$1 = (state_42659[(2)]);
var inst_42636 = (inst_42635__$1 == null);
var state_42659__$1 = (function (){var statearr_42669 = state_42659;
(statearr_42669[(7)] = inst_42635__$1);

return statearr_42669;
})();
if(cljs.core.truth_(inst_42636)){
var statearr_42671_45412 = state_42659__$1;
(statearr_42671_45412[(1)] = (5));

} else {
var statearr_42672_45415 = state_42659__$1;
(statearr_42672_45415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (13))){
var state_42659__$1 = state_42659;
var statearr_42673_45417 = state_42659__$1;
(statearr_42673_45417[(2)] = null);

(statearr_42673_45417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (6))){
var inst_42635 = (state_42659[(7)]);
var inst_42641 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42635) : p.call(null,inst_42635));
var state_42659__$1 = state_42659;
if(cljs.core.truth_(inst_42641)){
var statearr_42675_45418 = state_42659__$1;
(statearr_42675_45418[(1)] = (9));

} else {
var statearr_42676_45421 = state_42659__$1;
(statearr_42676_45421[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (3))){
var inst_42656 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42659__$1,inst_42656);
} else {
if((state_val_42660 === (12))){
var state_42659__$1 = state_42659;
var statearr_42677_45425 = state_42659__$1;
(statearr_42677_45425[(2)] = null);

(statearr_42677_45425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (2))){
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42659__$1,(4),ch);
} else {
if((state_val_42660 === (11))){
var inst_42635 = (state_42659[(7)]);
var inst_42645 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42659__$1,(8),inst_42645,inst_42635);
} else {
if((state_val_42660 === (9))){
var state_42659__$1 = state_42659;
var statearr_42681_45430 = state_42659__$1;
(statearr_42681_45430[(2)] = tc);

(statearr_42681_45430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (5))){
var inst_42638 = cljs.core.async.close_BANG_(tc);
var inst_42639 = cljs.core.async.close_BANG_(fc);
var state_42659__$1 = (function (){var statearr_42683 = state_42659;
(statearr_42683[(8)] = inst_42638);

return statearr_42683;
})();
var statearr_42684_45433 = state_42659__$1;
(statearr_42684_45433[(2)] = inst_42639);

(statearr_42684_45433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (14))){
var inst_42652 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
var statearr_42685_45437 = state_42659__$1;
(statearr_42685_45437[(2)] = inst_42652);

(statearr_42685_45437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (10))){
var state_42659__$1 = state_42659;
var statearr_42686_45440 = state_42659__$1;
(statearr_42686_45440[(2)] = fc);

(statearr_42686_45440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42660 === (8))){
var inst_42647 = (state_42659[(2)]);
var state_42659__$1 = state_42659;
if(cljs.core.truth_(inst_42647)){
var statearr_42689_45444 = state_42659__$1;
(statearr_42689_45444[(1)] = (12));

} else {
var statearr_42690_45445 = state_42659__$1;
(statearr_42690_45445[(1)] = (13));

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
});})(c__42006__auto___45398,tc,fc))
;
return ((function (switch__41732__auto__,c__42006__auto___45398,tc,fc){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_42695 = [null,null,null,null,null,null,null,null,null];
(statearr_42695[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_42695[(1)] = (1));

return statearr_42695;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_42659){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42659);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42696){var ex__41736__auto__ = e42696;
var statearr_42697_45453 = state_42659;
(statearr_42697_45453[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42659[(4)]))){
var statearr_42698_45457 = state_42659;
(statearr_42698_45457[(1)] = cljs.core.first((state_42659[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45462 = state_42659;
state_42659 = G__45462;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_42659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_42659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45398,tc,fc))
})();
var state__42008__auto__ = (function (){var statearr_42699 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42699[(6)] = c__42006__auto___45398);

return statearr_42699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45398,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__){
return (function (state_42739){
var state_val_42740 = (state_42739[(1)]);
if((state_val_42740 === (7))){
var inst_42735 = (state_42739[(2)]);
var state_42739__$1 = state_42739;
var statearr_42743_45474 = state_42739__$1;
(statearr_42743_45474[(2)] = inst_42735);

(statearr_42743_45474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (1))){
var inst_42714 = init;
var inst_42715 = inst_42714;
var state_42739__$1 = (function (){var statearr_42744 = state_42739;
(statearr_42744[(7)] = inst_42715);

return statearr_42744;
})();
var statearr_42746_45475 = state_42739__$1;
(statearr_42746_45475[(2)] = null);

(statearr_42746_45475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (4))){
var inst_42720 = (state_42739[(8)]);
var inst_42720__$1 = (state_42739[(2)]);
var inst_42722 = (inst_42720__$1 == null);
var state_42739__$1 = (function (){var statearr_42749 = state_42739;
(statearr_42749[(8)] = inst_42720__$1);

return statearr_42749;
})();
if(cljs.core.truth_(inst_42722)){
var statearr_42750_45477 = state_42739__$1;
(statearr_42750_45477[(1)] = (5));

} else {
var statearr_42751_45478 = state_42739__$1;
(statearr_42751_45478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (6))){
var inst_42725 = (state_42739[(9)]);
var inst_42720 = (state_42739[(8)]);
var inst_42715 = (state_42739[(7)]);
var inst_42725__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42715,inst_42720) : f.call(null,inst_42715,inst_42720));
var inst_42726 = cljs.core.reduced_QMARK_(inst_42725__$1);
var state_42739__$1 = (function (){var statearr_42752 = state_42739;
(statearr_42752[(9)] = inst_42725__$1);

return statearr_42752;
})();
if(inst_42726){
var statearr_42753_45484 = state_42739__$1;
(statearr_42753_45484[(1)] = (8));

} else {
var statearr_42754_45486 = state_42739__$1;
(statearr_42754_45486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (3))){
var inst_42737 = (state_42739[(2)]);
var state_42739__$1 = state_42739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42739__$1,inst_42737);
} else {
if((state_val_42740 === (2))){
var state_42739__$1 = state_42739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42739__$1,(4),ch);
} else {
if((state_val_42740 === (9))){
var inst_42725 = (state_42739[(9)]);
var inst_42715 = inst_42725;
var state_42739__$1 = (function (){var statearr_42755 = state_42739;
(statearr_42755[(7)] = inst_42715);

return statearr_42755;
})();
var statearr_42756_45492 = state_42739__$1;
(statearr_42756_45492[(2)] = null);

(statearr_42756_45492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (5))){
var inst_42715 = (state_42739[(7)]);
var state_42739__$1 = state_42739;
var statearr_42757_45494 = state_42739__$1;
(statearr_42757_45494[(2)] = inst_42715);

(statearr_42757_45494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (10))){
var inst_42732 = (state_42739[(2)]);
var state_42739__$1 = state_42739;
var statearr_42758_45496 = state_42739__$1;
(statearr_42758_45496[(2)] = inst_42732);

(statearr_42758_45496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42740 === (8))){
var inst_42725 = (state_42739[(9)]);
var inst_42728 = cljs.core.deref(inst_42725);
var state_42739__$1 = state_42739;
var statearr_42759_45504 = state_42739__$1;
(statearr_42759_45504[(2)] = inst_42728);

(statearr_42759_45504[(1)] = (10));


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
});})(c__42006__auto__))
;
return ((function (switch__41732__auto__,c__42006__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41733__auto____0 = (function (){
var statearr_42761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42761[(0)] = cljs$core$async$reduce_$_state_machine__41733__auto__);

(statearr_42761[(1)] = (1));

return statearr_42761;
});
var cljs$core$async$reduce_$_state_machine__41733__auto____1 = (function (state_42739){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42739);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42763){var ex__41736__auto__ = e42763;
var statearr_42764_45508 = state_42739;
(statearr_42764_45508[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42739[(4)]))){
var statearr_42766_45509 = state_42739;
(statearr_42766_45509[(1)] = cljs.core.first((state_42739[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45510 = state_42739;
state_42739 = G__45510;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41733__auto__ = function(state_42739){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41733__auto____1.call(this,state_42739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41733__auto____0;
cljs$core$async$reduce_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41733__auto____1;
return cljs$core$async$reduce_$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__))
})();
var state__42008__auto__ = (function (){var statearr_42768 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42768[(6)] = c__42006__auto__);

return statearr_42768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__))
);

return c__42006__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__,f__$1){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__,f__$1){
return (function (state_42776){
var state_val_42777 = (state_42776[(1)]);
if((state_val_42777 === (1))){
var inst_42771 = cljs.core.async.reduce(f__$1,init,ch);
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42776__$1,(2),inst_42771);
} else {
if((state_val_42777 === (2))){
var inst_42773 = (state_42776[(2)]);
var inst_42774 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42773) : f__$1.call(null,inst_42773));
var state_42776__$1 = state_42776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42776__$1,inst_42774);
} else {
return null;
}
}
});})(c__42006__auto__,f__$1))
;
return ((function (switch__41732__auto__,c__42006__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__41733__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41733__auto____0 = (function (){
var statearr_42781 = [null,null,null,null,null,null,null];
(statearr_42781[(0)] = cljs$core$async$transduce_$_state_machine__41733__auto__);

(statearr_42781[(1)] = (1));

return statearr_42781;
});
var cljs$core$async$transduce_$_state_machine__41733__auto____1 = (function (state_42776){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42776);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42783){var ex__41736__auto__ = e42783;
var statearr_42786_45521 = state_42776;
(statearr_42786_45521[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42776[(4)]))){
var statearr_42787_45523 = state_42776;
(statearr_42787_45523[(1)] = cljs.core.first((state_42776[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45524 = state_42776;
state_42776 = G__45524;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41733__auto__ = function(state_42776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41733__auto____1.call(this,state_42776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41733__auto____0;
cljs$core$async$transduce_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41733__auto____1;
return cljs$core$async$transduce_$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__,f__$1))
})();
var state__42008__auto__ = (function (){var statearr_42788 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42788[(6)] = c__42006__auto__);

return statearr_42788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__,f__$1))
);

return c__42006__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__42794 = arguments.length;
switch (G__42794) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__){
return (function (state_42821){
var state_val_42822 = (state_42821[(1)]);
if((state_val_42822 === (7))){
var inst_42803 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
var statearr_42824_45531 = state_42821__$1;
(statearr_42824_45531[(2)] = inst_42803);

(statearr_42824_45531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (1))){
var inst_42797 = cljs.core.seq(coll);
var inst_42798 = inst_42797;
var state_42821__$1 = (function (){var statearr_42825 = state_42821;
(statearr_42825[(7)] = inst_42798);

return statearr_42825;
})();
var statearr_42826_45534 = state_42821__$1;
(statearr_42826_45534[(2)] = null);

(statearr_42826_45534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (4))){
var inst_42798 = (state_42821[(7)]);
var inst_42801 = cljs.core.first(inst_42798);
var state_42821__$1 = state_42821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42821__$1,(7),ch,inst_42801);
} else {
if((state_val_42822 === (13))){
var inst_42815 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
var statearr_42827_45539 = state_42821__$1;
(statearr_42827_45539[(2)] = inst_42815);

(statearr_42827_45539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (6))){
var inst_42806 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
if(cljs.core.truth_(inst_42806)){
var statearr_42830_45543 = state_42821__$1;
(statearr_42830_45543[(1)] = (8));

} else {
var statearr_42831_45546 = state_42821__$1;
(statearr_42831_45546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (3))){
var inst_42819 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42821__$1,inst_42819);
} else {
if((state_val_42822 === (12))){
var state_42821__$1 = state_42821;
var statearr_42835_45548 = state_42821__$1;
(statearr_42835_45548[(2)] = null);

(statearr_42835_45548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (2))){
var inst_42798 = (state_42821[(7)]);
var state_42821__$1 = state_42821;
if(cljs.core.truth_(inst_42798)){
var statearr_42837_45550 = state_42821__$1;
(statearr_42837_45550[(1)] = (4));

} else {
var statearr_42838_45552 = state_42821__$1;
(statearr_42838_45552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (11))){
var inst_42812 = cljs.core.async.close_BANG_(ch);
var state_42821__$1 = state_42821;
var statearr_42839_45554 = state_42821__$1;
(statearr_42839_45554[(2)] = inst_42812);

(statearr_42839_45554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (9))){
var state_42821__$1 = state_42821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42842_45555 = state_42821__$1;
(statearr_42842_45555[(1)] = (11));

} else {
var statearr_42843_45556 = state_42821__$1;
(statearr_42843_45556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (5))){
var inst_42798 = (state_42821[(7)]);
var state_42821__$1 = state_42821;
var statearr_42846_45559 = state_42821__$1;
(statearr_42846_45559[(2)] = inst_42798);

(statearr_42846_45559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (10))){
var inst_42817 = (state_42821[(2)]);
var state_42821__$1 = state_42821;
var statearr_42847_45561 = state_42821__$1;
(statearr_42847_45561[(2)] = inst_42817);

(statearr_42847_45561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42822 === (8))){
var inst_42798 = (state_42821[(7)]);
var inst_42808 = cljs.core.next(inst_42798);
var inst_42798__$1 = inst_42808;
var state_42821__$1 = (function (){var statearr_42852 = state_42821;
(statearr_42852[(7)] = inst_42798__$1);

return statearr_42852;
})();
var statearr_42853_45566 = state_42821__$1;
(statearr_42853_45566[(2)] = null);

(statearr_42853_45566[(1)] = (2));


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
});})(c__42006__auto__))
;
return ((function (switch__41732__auto__,c__42006__auto__){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_42855 = [null,null,null,null,null,null,null,null];
(statearr_42855[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_42855[(1)] = (1));

return statearr_42855;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_42821){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_42821);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e42856){var ex__41736__auto__ = e42856;
var statearr_42857_45571 = state_42821;
(statearr_42857_45571[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_42821[(4)]))){
var statearr_42858_45574 = state_42821;
(statearr_42858_45574[(1)] = cljs.core.first((state_42821[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45576 = state_42821;
state_42821 = G__45576;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_42821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_42821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__))
})();
var state__42008__auto__ = (function (){var statearr_42860 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_42860[(6)] = c__42006__auto__);

return statearr_42860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__))
);

return c__42006__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42870 = arguments.length;
switch (G__42870) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42915 = (function (ch,cs,meta42916){
this.ch = ch;
this.cs = cs;
this.meta42916 = meta42916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42917,meta42916__$1){
var self__ = this;
var _42917__$1 = this;
return (new cljs.core.async.t_cljs$core$async42915(self__.ch,self__.cs,meta42916__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42917){
var self__ = this;
var _42917__$1 = this;
return self__.meta42916;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42916","meta42916",1887588026,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42915";

cljs.core.async.t_cljs$core$async42915.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42915");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42915.
 */
cljs.core.async.__GT_t_cljs$core$async42915 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42915(ch__$1,cs__$1,meta42916){
return (new cljs.core.async.t_cljs$core$async42915(ch__$1,cs__$1,meta42916));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__42006__auto___45595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45595,cs,m,dchan,dctr,done){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45595,cs,m,dchan,dctr,done){
return (function (state_43102){
var state_val_43103 = (state_43102[(1)]);
if((state_val_43103 === (7))){
var inst_43093 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43107_45596 = state_43102__$1;
(statearr_43107_45596[(2)] = inst_43093);

(statearr_43107_45596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (20))){
var inst_42984 = (state_43102[(7)]);
var inst_42996 = cljs.core.first(inst_42984);
var inst_42997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42996,(0),null);
var inst_42998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42996,(1),null);
var state_43102__$1 = (function (){var statearr_43111 = state_43102;
(statearr_43111[(8)] = inst_42997);

return statearr_43111;
})();
if(cljs.core.truth_(inst_42998)){
var statearr_43112_45597 = state_43102__$1;
(statearr_43112_45597[(1)] = (22));

} else {
var statearr_43113_45599 = state_43102__$1;
(statearr_43113_45599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (27))){
var inst_43031 = (state_43102[(9)]);
var inst_42944 = (state_43102[(10)]);
var inst_43040 = (state_43102[(11)]);
var inst_43033 = (state_43102[(12)]);
var inst_43040__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43031,inst_43033);
var inst_43041 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43040__$1,inst_42944,done);
var state_43102__$1 = (function (){var statearr_43115 = state_43102;
(statearr_43115[(11)] = inst_43040__$1);

return statearr_43115;
})();
if(cljs.core.truth_(inst_43041)){
var statearr_43116_45601 = state_43102__$1;
(statearr_43116_45601[(1)] = (30));

} else {
var statearr_43117_45602 = state_43102__$1;
(statearr_43117_45602[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (1))){
var state_43102__$1 = state_43102;
var statearr_43118_45604 = state_43102__$1;
(statearr_43118_45604[(2)] = null);

(statearr_43118_45604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (24))){
var inst_42984 = (state_43102[(7)]);
var inst_43004 = (state_43102[(2)]);
var inst_43008 = cljs.core.next(inst_42984);
var inst_42954 = inst_43008;
var inst_42955 = null;
var inst_42956 = (0);
var inst_42957 = (0);
var state_43102__$1 = (function (){var statearr_43123 = state_43102;
(statearr_43123[(13)] = inst_42957);

(statearr_43123[(14)] = inst_42956);

(statearr_43123[(15)] = inst_42954);

(statearr_43123[(16)] = inst_42955);

(statearr_43123[(17)] = inst_43004);

return statearr_43123;
})();
var statearr_43125_45606 = state_43102__$1;
(statearr_43125_45606[(2)] = null);

(statearr_43125_45606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (39))){
var state_43102__$1 = state_43102;
var statearr_43135_45607 = state_43102__$1;
(statearr_43135_45607[(2)] = null);

(statearr_43135_45607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (4))){
var inst_42944 = (state_43102[(10)]);
var inst_42944__$1 = (state_43102[(2)]);
var inst_42945 = (inst_42944__$1 == null);
var state_43102__$1 = (function (){var statearr_43137 = state_43102;
(statearr_43137[(10)] = inst_42944__$1);

return statearr_43137;
})();
if(cljs.core.truth_(inst_42945)){
var statearr_43141_45609 = state_43102__$1;
(statearr_43141_45609[(1)] = (5));

} else {
var statearr_43142_45610 = state_43102__$1;
(statearr_43142_45610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (15))){
var inst_42957 = (state_43102[(13)]);
var inst_42956 = (state_43102[(14)]);
var inst_42954 = (state_43102[(15)]);
var inst_42955 = (state_43102[(16)]);
var inst_42977 = (state_43102[(2)]);
var inst_42979 = (inst_42957 + (1));
var tmp43129 = inst_42956;
var tmp43130 = inst_42954;
var tmp43131 = inst_42955;
var inst_42954__$1 = tmp43130;
var inst_42955__$1 = tmp43131;
var inst_42956__$1 = tmp43129;
var inst_42957__$1 = inst_42979;
var state_43102__$1 = (function (){var statearr_43145 = state_43102;
(statearr_43145[(13)] = inst_42957__$1);

(statearr_43145[(14)] = inst_42956__$1);

(statearr_43145[(18)] = inst_42977);

(statearr_43145[(15)] = inst_42954__$1);

(statearr_43145[(16)] = inst_42955__$1);

return statearr_43145;
})();
var statearr_43148_45612 = state_43102__$1;
(statearr_43148_45612[(2)] = null);

(statearr_43148_45612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (21))){
var inst_43011 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43152_45613 = state_43102__$1;
(statearr_43152_45613[(2)] = inst_43011);

(statearr_43152_45613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (31))){
var inst_43040 = (state_43102[(11)]);
var inst_43044 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43040);
var state_43102__$1 = state_43102;
var statearr_43153_45615 = state_43102__$1;
(statearr_43153_45615[(2)] = inst_43044);

(statearr_43153_45615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (32))){
var inst_43031 = (state_43102[(9)]);
var inst_43030 = (state_43102[(19)]);
var inst_43033 = (state_43102[(12)]);
var inst_43032 = (state_43102[(20)]);
var inst_43046 = (state_43102[(2)]);
var inst_43047 = (inst_43033 + (1));
var tmp43149 = inst_43031;
var tmp43150 = inst_43030;
var tmp43151 = inst_43032;
var inst_43030__$1 = tmp43150;
var inst_43031__$1 = tmp43149;
var inst_43032__$1 = tmp43151;
var inst_43033__$1 = inst_43047;
var state_43102__$1 = (function (){var statearr_43157 = state_43102;
(statearr_43157[(9)] = inst_43031__$1);

(statearr_43157[(21)] = inst_43046);

(statearr_43157[(19)] = inst_43030__$1);

(statearr_43157[(12)] = inst_43033__$1);

(statearr_43157[(20)] = inst_43032__$1);

return statearr_43157;
})();
var statearr_43161_45618 = state_43102__$1;
(statearr_43161_45618[(2)] = null);

(statearr_43161_45618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (40))){
var inst_43061 = (state_43102[(22)]);
var inst_43065 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43061);
var state_43102__$1 = state_43102;
var statearr_43163_45619 = state_43102__$1;
(statearr_43163_45619[(2)] = inst_43065);

(statearr_43163_45619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (33))){
var inst_43050 = (state_43102[(23)]);
var inst_43054 = cljs.core.chunked_seq_QMARK_(inst_43050);
var state_43102__$1 = state_43102;
if(inst_43054){
var statearr_43168_45620 = state_43102__$1;
(statearr_43168_45620[(1)] = (36));

} else {
var statearr_43169_45622 = state_43102__$1;
(statearr_43169_45622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (13))){
var inst_42970 = (state_43102[(24)]);
var inst_42974 = cljs.core.async.close_BANG_(inst_42970);
var state_43102__$1 = state_43102;
var statearr_43177_45623 = state_43102__$1;
(statearr_43177_45623[(2)] = inst_42974);

(statearr_43177_45623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (22))){
var inst_42997 = (state_43102[(8)]);
var inst_43000 = cljs.core.async.close_BANG_(inst_42997);
var state_43102__$1 = state_43102;
var statearr_43180_45627 = state_43102__$1;
(statearr_43180_45627[(2)] = inst_43000);

(statearr_43180_45627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (36))){
var inst_43050 = (state_43102[(23)]);
var inst_43056 = cljs.core.chunk_first(inst_43050);
var inst_43057 = cljs.core.chunk_rest(inst_43050);
var inst_43058 = cljs.core.count(inst_43056);
var inst_43030 = inst_43057;
var inst_43031 = inst_43056;
var inst_43032 = inst_43058;
var inst_43033 = (0);
var state_43102__$1 = (function (){var statearr_43187 = state_43102;
(statearr_43187[(9)] = inst_43031);

(statearr_43187[(19)] = inst_43030);

(statearr_43187[(12)] = inst_43033);

(statearr_43187[(20)] = inst_43032);

return statearr_43187;
})();
var statearr_43188_45629 = state_43102__$1;
(statearr_43188_45629[(2)] = null);

(statearr_43188_45629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (41))){
var inst_43050 = (state_43102[(23)]);
var inst_43067 = (state_43102[(2)]);
var inst_43068 = cljs.core.next(inst_43050);
var inst_43030 = inst_43068;
var inst_43031 = null;
var inst_43032 = (0);
var inst_43033 = (0);
var state_43102__$1 = (function (){var statearr_43190 = state_43102;
(statearr_43190[(9)] = inst_43031);

(statearr_43190[(19)] = inst_43030);

(statearr_43190[(12)] = inst_43033);

(statearr_43190[(20)] = inst_43032);

(statearr_43190[(25)] = inst_43067);

return statearr_43190;
})();
var statearr_43191_45632 = state_43102__$1;
(statearr_43191_45632[(2)] = null);

(statearr_43191_45632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (43))){
var state_43102__$1 = state_43102;
var statearr_43194_45633 = state_43102__$1;
(statearr_43194_45633[(2)] = null);

(statearr_43194_45633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (29))){
var inst_43077 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43197_45634 = state_43102__$1;
(statearr_43197_45634[(2)] = inst_43077);

(statearr_43197_45634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (44))){
var inst_43090 = (state_43102[(2)]);
var state_43102__$1 = (function (){var statearr_43198 = state_43102;
(statearr_43198[(26)] = inst_43090);

return statearr_43198;
})();
var statearr_43200_45636 = state_43102__$1;
(statearr_43200_45636[(2)] = null);

(statearr_43200_45636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (6))){
var inst_43022 = (state_43102[(27)]);
var inst_43021 = cljs.core.deref(cs);
var inst_43022__$1 = cljs.core.keys(inst_43021);
var inst_43023 = cljs.core.count(inst_43022__$1);
var inst_43024 = cljs.core.reset_BANG_(dctr,inst_43023);
var inst_43029 = cljs.core.seq(inst_43022__$1);
var inst_43030 = inst_43029;
var inst_43031 = null;
var inst_43032 = (0);
var inst_43033 = (0);
var state_43102__$1 = (function (){var statearr_43204 = state_43102;
(statearr_43204[(28)] = inst_43024);

(statearr_43204[(9)] = inst_43031);

(statearr_43204[(27)] = inst_43022__$1);

(statearr_43204[(19)] = inst_43030);

(statearr_43204[(12)] = inst_43033);

(statearr_43204[(20)] = inst_43032);

return statearr_43204;
})();
var statearr_43206_45640 = state_43102__$1;
(statearr_43206_45640[(2)] = null);

(statearr_43206_45640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (28))){
var inst_43050 = (state_43102[(23)]);
var inst_43030 = (state_43102[(19)]);
var inst_43050__$1 = cljs.core.seq(inst_43030);
var state_43102__$1 = (function (){var statearr_43208 = state_43102;
(statearr_43208[(23)] = inst_43050__$1);

return statearr_43208;
})();
if(inst_43050__$1){
var statearr_43209_45650 = state_43102__$1;
(statearr_43209_45650[(1)] = (33));

} else {
var statearr_43211_45651 = state_43102__$1;
(statearr_43211_45651[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (25))){
var inst_43033 = (state_43102[(12)]);
var inst_43032 = (state_43102[(20)]);
var inst_43035 = (inst_43033 < inst_43032);
var inst_43036 = inst_43035;
var state_43102__$1 = state_43102;
if(cljs.core.truth_(inst_43036)){
var statearr_43215_45653 = state_43102__$1;
(statearr_43215_45653[(1)] = (27));

} else {
var statearr_43216_45654 = state_43102__$1;
(statearr_43216_45654[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (34))){
var state_43102__$1 = state_43102;
var statearr_43219_45658 = state_43102__$1;
(statearr_43219_45658[(2)] = null);

(statearr_43219_45658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (17))){
var state_43102__$1 = state_43102;
var statearr_43220_45661 = state_43102__$1;
(statearr_43220_45661[(2)] = null);

(statearr_43220_45661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (3))){
var inst_43095 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43102__$1,inst_43095);
} else {
if((state_val_43103 === (12))){
var inst_43016 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43225_45665 = state_43102__$1;
(statearr_43225_45665[(2)] = inst_43016);

(statearr_43225_45665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (2))){
var state_43102__$1 = state_43102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43102__$1,(4),ch);
} else {
if((state_val_43103 === (23))){
var state_43102__$1 = state_43102;
var statearr_43227_45667 = state_43102__$1;
(statearr_43227_45667[(2)] = null);

(statearr_43227_45667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (35))){
var inst_43075 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43228_45668 = state_43102__$1;
(statearr_43228_45668[(2)] = inst_43075);

(statearr_43228_45668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (19))){
var inst_42984 = (state_43102[(7)]);
var inst_42988 = cljs.core.chunk_first(inst_42984);
var inst_42989 = cljs.core.chunk_rest(inst_42984);
var inst_42990 = cljs.core.count(inst_42988);
var inst_42954 = inst_42989;
var inst_42955 = inst_42988;
var inst_42956 = inst_42990;
var inst_42957 = (0);
var state_43102__$1 = (function (){var statearr_43230 = state_43102;
(statearr_43230[(13)] = inst_42957);

(statearr_43230[(14)] = inst_42956);

(statearr_43230[(15)] = inst_42954);

(statearr_43230[(16)] = inst_42955);

return statearr_43230;
})();
var statearr_43231_45669 = state_43102__$1;
(statearr_43231_45669[(2)] = null);

(statearr_43231_45669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (11))){
var inst_42984 = (state_43102[(7)]);
var inst_42954 = (state_43102[(15)]);
var inst_42984__$1 = cljs.core.seq(inst_42954);
var state_43102__$1 = (function (){var statearr_43233 = state_43102;
(statearr_43233[(7)] = inst_42984__$1);

return statearr_43233;
})();
if(inst_42984__$1){
var statearr_43234_45670 = state_43102__$1;
(statearr_43234_45670[(1)] = (16));

} else {
var statearr_43235_45671 = state_43102__$1;
(statearr_43235_45671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (9))){
var inst_43019 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43236_45673 = state_43102__$1;
(statearr_43236_45673[(2)] = inst_43019);

(statearr_43236_45673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (5))){
var inst_42951 = cljs.core.deref(cs);
var inst_42953 = cljs.core.seq(inst_42951);
var inst_42954 = inst_42953;
var inst_42955 = null;
var inst_42956 = (0);
var inst_42957 = (0);
var state_43102__$1 = (function (){var statearr_43237 = state_43102;
(statearr_43237[(13)] = inst_42957);

(statearr_43237[(14)] = inst_42956);

(statearr_43237[(15)] = inst_42954);

(statearr_43237[(16)] = inst_42955);

return statearr_43237;
})();
var statearr_43239_45678 = state_43102__$1;
(statearr_43239_45678[(2)] = null);

(statearr_43239_45678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (14))){
var state_43102__$1 = state_43102;
var statearr_43240_45680 = state_43102__$1;
(statearr_43240_45680[(2)] = null);

(statearr_43240_45680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (45))){
var inst_43087 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43243_45681 = state_43102__$1;
(statearr_43243_45681[(2)] = inst_43087);

(statearr_43243_45681[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (26))){
var inst_43022 = (state_43102[(27)]);
var inst_43079 = (state_43102[(2)]);
var inst_43083 = cljs.core.seq(inst_43022);
var state_43102__$1 = (function (){var statearr_43244 = state_43102;
(statearr_43244[(29)] = inst_43079);

return statearr_43244;
})();
if(inst_43083){
var statearr_43245_45682 = state_43102__$1;
(statearr_43245_45682[(1)] = (42));

} else {
var statearr_43246_45683 = state_43102__$1;
(statearr_43246_45683[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (16))){
var inst_42984 = (state_43102[(7)]);
var inst_42986 = cljs.core.chunked_seq_QMARK_(inst_42984);
var state_43102__$1 = state_43102;
if(inst_42986){
var statearr_43248_45684 = state_43102__$1;
(statearr_43248_45684[(1)] = (19));

} else {
var statearr_43250_45685 = state_43102__$1;
(statearr_43250_45685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (38))){
var inst_43072 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43253_45687 = state_43102__$1;
(statearr_43253_45687[(2)] = inst_43072);

(statearr_43253_45687[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (30))){
var state_43102__$1 = state_43102;
var statearr_43254_45688 = state_43102__$1;
(statearr_43254_45688[(2)] = null);

(statearr_43254_45688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (10))){
var inst_42957 = (state_43102[(13)]);
var inst_42955 = (state_43102[(16)]);
var inst_42969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42955,inst_42957);
var inst_42970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42969,(0),null);
var inst_42972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42969,(1),null);
var state_43102__$1 = (function (){var statearr_43258 = state_43102;
(statearr_43258[(24)] = inst_42970);

return statearr_43258;
})();
if(cljs.core.truth_(inst_42972)){
var statearr_43261_45690 = state_43102__$1;
(statearr_43261_45690[(1)] = (13));

} else {
var statearr_43262_45691 = state_43102__$1;
(statearr_43262_45691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (18))){
var inst_43014 = (state_43102[(2)]);
var state_43102__$1 = state_43102;
var statearr_43264_45692 = state_43102__$1;
(statearr_43264_45692[(2)] = inst_43014);

(statearr_43264_45692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (42))){
var state_43102__$1 = state_43102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43102__$1,(45),dchan);
} else {
if((state_val_43103 === (37))){
var inst_43061 = (state_43102[(22)]);
var inst_42944 = (state_43102[(10)]);
var inst_43050 = (state_43102[(23)]);
var inst_43061__$1 = cljs.core.first(inst_43050);
var inst_43062 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43061__$1,inst_42944,done);
var state_43102__$1 = (function (){var statearr_43270 = state_43102;
(statearr_43270[(22)] = inst_43061__$1);

return statearr_43270;
})();
if(cljs.core.truth_(inst_43062)){
var statearr_43271_45694 = state_43102__$1;
(statearr_43271_45694[(1)] = (39));

} else {
var statearr_43272_45697 = state_43102__$1;
(statearr_43272_45697[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43103 === (8))){
var inst_42957 = (state_43102[(13)]);
var inst_42956 = (state_43102[(14)]);
var inst_42959 = (inst_42957 < inst_42956);
var inst_42960 = inst_42959;
var state_43102__$1 = state_43102;
if(cljs.core.truth_(inst_42960)){
var statearr_43279_45699 = state_43102__$1;
(statearr_43279_45699[(1)] = (10));

} else {
var statearr_43284_45701 = state_43102__$1;
(statearr_43284_45701[(1)] = (11));

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
});})(c__42006__auto___45595,cs,m,dchan,dctr,done))
;
return ((function (switch__41732__auto__,c__42006__auto___45595,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41733__auto__ = null;
var cljs$core$async$mult_$_state_machine__41733__auto____0 = (function (){
var statearr_43289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43289[(0)] = cljs$core$async$mult_$_state_machine__41733__auto__);

(statearr_43289[(1)] = (1));

return statearr_43289;
});
var cljs$core$async$mult_$_state_machine__41733__auto____1 = (function (state_43102){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_43102);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e43292){var ex__41736__auto__ = e43292;
var statearr_43295_45702 = state_43102;
(statearr_43295_45702[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_43102[(4)]))){
var statearr_43296_45706 = state_43102;
(statearr_43296_45706[(1)] = cljs.core.first((state_43102[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45708 = state_43102;
state_43102 = G__45708;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41733__auto__ = function(state_43102){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41733__auto____1.call(this,state_43102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41733__auto____0;
cljs$core$async$mult_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41733__auto____1;
return cljs$core$async$mult_$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45595,cs,m,dchan,dctr,done))
})();
var state__42008__auto__ = (function (){var statearr_43302 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_43302[(6)] = c__42006__auto___45595);

return statearr_43302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45595,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43309 = arguments.length;
switch (G__43309) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45731 = arguments.length;
var i__4731__auto___45733 = (0);
while(true){
if((i__4731__auto___45733 < len__4730__auto___45731)){
args__4736__auto__.push((arguments[i__4731__auto___45733]));

var G__45735 = (i__4731__auto___45733 + (1));
i__4731__auto___45733 = G__45735;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43360){
var map__43361 = p__43360;
var map__43361__$1 = (((((!((map__43361 == null))))?(((((map__43361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43361):map__43361);
var opts = map__43361__$1;
var statearr_43364_45742 = state;
(statearr_43364_45742[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts(((function (map__43361,map__43361__$1,opts){
return (function (val){
var statearr_43365_45743 = state;
(statearr_43365_45743[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__43361,map__43361__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_43369_45744 = state;
(statearr_43369_45744[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43356){
var G__43357 = cljs.core.first(seq43356);
var seq43356__$1 = cljs.core.next(seq43356);
var G__43358 = cljs.core.first(seq43356__$1);
var seq43356__$2 = cljs.core.next(seq43356__$1);
var G__43359 = cljs.core.first(seq43356__$2);
var seq43356__$3 = cljs.core.next(seq43356__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43357,G__43358,G__43359,seq43356__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43379 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43380){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43380 = meta43380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43381,meta43380__$1){
var self__ = this;
var _43381__$1 = this;
return (new cljs.core.async.t_cljs$core$async43379(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43380__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43381){
var self__ = this;
var _43381__$1 = this;
return self__.meta43380;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43380","meta43380",-2065227230,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43379";

cljs.core.async.t_cljs$core$async43379.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43379");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43379.
 */
cljs.core.async.__GT_t_cljs$core$async43379 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43379(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43380){
return (new cljs.core.async.t_cljs$core$async43379(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43380));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43379(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42006__auto___45768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43530){
var state_val_43531 = (state_43530[(1)]);
if((state_val_43531 === (7))){
var inst_43438 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
var statearr_43532_45770 = state_43530__$1;
(statearr_43532_45770[(2)] = inst_43438);

(statearr_43532_45770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (20))){
var inst_43452 = (state_43530[(7)]);
var state_43530__$1 = state_43530;
var statearr_43533_45771 = state_43530__$1;
(statearr_43533_45771[(2)] = inst_43452);

(statearr_43533_45771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (27))){
var state_43530__$1 = state_43530;
var statearr_43535_45772 = state_43530__$1;
(statearr_43535_45772[(2)] = null);

(statearr_43535_45772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (1))){
var inst_43421 = (state_43530[(8)]);
var inst_43421__$1 = calc_state();
var inst_43425 = (inst_43421__$1 == null);
var inst_43426 = cljs.core.not(inst_43425);
var state_43530__$1 = (function (){var statearr_43536 = state_43530;
(statearr_43536[(8)] = inst_43421__$1);

return statearr_43536;
})();
if(inst_43426){
var statearr_43537_45773 = state_43530__$1;
(statearr_43537_45773[(1)] = (2));

} else {
var statearr_43538_45774 = state_43530__$1;
(statearr_43538_45774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (24))){
var inst_43487 = (state_43530[(9)]);
var inst_43476 = (state_43530[(10)]);
var inst_43501 = (state_43530[(11)]);
var inst_43501__$1 = (inst_43476.cljs$core$IFn$_invoke$arity$1 ? inst_43476.cljs$core$IFn$_invoke$arity$1(inst_43487) : inst_43476.call(null,inst_43487));
var state_43530__$1 = (function (){var statearr_43539 = state_43530;
(statearr_43539[(11)] = inst_43501__$1);

return statearr_43539;
})();
if(cljs.core.truth_(inst_43501__$1)){
var statearr_43541_45776 = state_43530__$1;
(statearr_43541_45776[(1)] = (29));

} else {
var statearr_43542_45777 = state_43530__$1;
(statearr_43542_45777[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (4))){
var inst_43441 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43441)){
var statearr_43545_45778 = state_43530__$1;
(statearr_43545_45778[(1)] = (8));

} else {
var statearr_43547_45779 = state_43530__$1;
(statearr_43547_45779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (15))){
var inst_43470 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43470)){
var statearr_43549_45780 = state_43530__$1;
(statearr_43549_45780[(1)] = (19));

} else {
var statearr_43550_45781 = state_43530__$1;
(statearr_43550_45781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (21))){
var inst_43475 = (state_43530[(12)]);
var inst_43475__$1 = (state_43530[(2)]);
var inst_43476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43475__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43475__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43475__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43530__$1 = (function (){var statearr_43554 = state_43530;
(statearr_43554[(13)] = inst_43477);

(statearr_43554[(10)] = inst_43476);

(statearr_43554[(12)] = inst_43475__$1);

return statearr_43554;
})();
return cljs.core.async.ioc_alts_BANG_(state_43530__$1,(22),inst_43478);
} else {
if((state_val_43531 === (31))){
var inst_43510 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43510)){
var statearr_43556_45782 = state_43530__$1;
(statearr_43556_45782[(1)] = (32));

} else {
var statearr_43557_45783 = state_43530__$1;
(statearr_43557_45783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (32))){
var inst_43486 = (state_43530[(14)]);
var state_43530__$1 = state_43530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43530__$1,(35),out,inst_43486);
} else {
if((state_val_43531 === (33))){
var inst_43475 = (state_43530[(12)]);
var inst_43452 = inst_43475;
var state_43530__$1 = (function (){var statearr_43558 = state_43530;
(statearr_43558[(7)] = inst_43452);

return statearr_43558;
})();
var statearr_43559_45784 = state_43530__$1;
(statearr_43559_45784[(2)] = null);

(statearr_43559_45784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (13))){
var inst_43452 = (state_43530[(7)]);
var inst_43459 = inst_43452.cljs$lang$protocol_mask$partition0$;
var inst_43460 = (inst_43459 & (64));
var inst_43461 = inst_43452.cljs$core$ISeq$;
var inst_43462 = (cljs.core.PROTOCOL_SENTINEL === inst_43461);
var inst_43463 = ((inst_43460) || (inst_43462));
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43463)){
var statearr_43564_45785 = state_43530__$1;
(statearr_43564_45785[(1)] = (16));

} else {
var statearr_43565_45786 = state_43530__$1;
(statearr_43565_45786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (22))){
var inst_43487 = (state_43530[(9)]);
var inst_43486 = (state_43530[(14)]);
var inst_43485 = (state_43530[(2)]);
var inst_43486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43485,(0),null);
var inst_43487__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43485,(1),null);
var inst_43488 = (inst_43486__$1 == null);
var inst_43489 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43487__$1,change);
var inst_43490 = ((inst_43488) || (inst_43489));
var state_43530__$1 = (function (){var statearr_43570 = state_43530;
(statearr_43570[(9)] = inst_43487__$1);

(statearr_43570[(14)] = inst_43486__$1);

return statearr_43570;
})();
if(cljs.core.truth_(inst_43490)){
var statearr_43571_45787 = state_43530__$1;
(statearr_43571_45787[(1)] = (23));

} else {
var statearr_43573_45788 = state_43530__$1;
(statearr_43573_45788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (36))){
var inst_43475 = (state_43530[(12)]);
var inst_43452 = inst_43475;
var state_43530__$1 = (function (){var statearr_43574 = state_43530;
(statearr_43574[(7)] = inst_43452);

return statearr_43574;
})();
var statearr_43576_45789 = state_43530__$1;
(statearr_43576_45789[(2)] = null);

(statearr_43576_45789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (29))){
var inst_43501 = (state_43530[(11)]);
var state_43530__$1 = state_43530;
var statearr_43579_45790 = state_43530__$1;
(statearr_43579_45790[(2)] = inst_43501);

(statearr_43579_45790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (6))){
var state_43530__$1 = state_43530;
var statearr_43582_45791 = state_43530__$1;
(statearr_43582_45791[(2)] = false);

(statearr_43582_45791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (28))){
var inst_43497 = (state_43530[(2)]);
var inst_43498 = calc_state();
var inst_43452 = inst_43498;
var state_43530__$1 = (function (){var statearr_43584 = state_43530;
(statearr_43584[(15)] = inst_43497);

(statearr_43584[(7)] = inst_43452);

return statearr_43584;
})();
var statearr_43585_45792 = state_43530__$1;
(statearr_43585_45792[(2)] = null);

(statearr_43585_45792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (25))){
var inst_43524 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
var statearr_43587_45793 = state_43530__$1;
(statearr_43587_45793[(2)] = inst_43524);

(statearr_43587_45793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (34))){
var inst_43522 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
var statearr_43588_45794 = state_43530__$1;
(statearr_43588_45794[(2)] = inst_43522);

(statearr_43588_45794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (17))){
var state_43530__$1 = state_43530;
var statearr_43589_45795 = state_43530__$1;
(statearr_43589_45795[(2)] = false);

(statearr_43589_45795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (3))){
var state_43530__$1 = state_43530;
var statearr_43594_45796 = state_43530__$1;
(statearr_43594_45796[(2)] = false);

(statearr_43594_45796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (12))){
var inst_43526 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43530__$1,inst_43526);
} else {
if((state_val_43531 === (2))){
var inst_43421 = (state_43530[(8)]);
var inst_43430 = inst_43421.cljs$lang$protocol_mask$partition0$;
var inst_43431 = (inst_43430 & (64));
var inst_43432 = inst_43421.cljs$core$ISeq$;
var inst_43433 = (cljs.core.PROTOCOL_SENTINEL === inst_43432);
var inst_43434 = ((inst_43431) || (inst_43433));
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43434)){
var statearr_43596_45797 = state_43530__$1;
(statearr_43596_45797[(1)] = (5));

} else {
var statearr_43597_45798 = state_43530__$1;
(statearr_43597_45798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (23))){
var inst_43486 = (state_43530[(14)]);
var inst_43492 = (inst_43486 == null);
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43492)){
var statearr_43598_45799 = state_43530__$1;
(statearr_43598_45799[(1)] = (26));

} else {
var statearr_43599_45800 = state_43530__$1;
(statearr_43599_45800[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (35))){
var inst_43513 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
if(cljs.core.truth_(inst_43513)){
var statearr_43601_45801 = state_43530__$1;
(statearr_43601_45801[(1)] = (36));

} else {
var statearr_43602_45802 = state_43530__$1;
(statearr_43602_45802[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (19))){
var inst_43452 = (state_43530[(7)]);
var inst_43472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43452);
var state_43530__$1 = state_43530;
var statearr_43605_45803 = state_43530__$1;
(statearr_43605_45803[(2)] = inst_43472);

(statearr_43605_45803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (11))){
var inst_43452 = (state_43530[(7)]);
var inst_43456 = (inst_43452 == null);
var inst_43457 = cljs.core.not(inst_43456);
var state_43530__$1 = state_43530;
if(inst_43457){
var statearr_43608_45804 = state_43530__$1;
(statearr_43608_45804[(1)] = (13));

} else {
var statearr_43609_45805 = state_43530__$1;
(statearr_43609_45805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (9))){
var inst_43421 = (state_43530[(8)]);
var state_43530__$1 = state_43530;
var statearr_43610_45806 = state_43530__$1;
(statearr_43610_45806[(2)] = inst_43421);

(statearr_43610_45806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (5))){
var state_43530__$1 = state_43530;
var statearr_43612_45807 = state_43530__$1;
(statearr_43612_45807[(2)] = true);

(statearr_43612_45807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (14))){
var state_43530__$1 = state_43530;
var statearr_43613_45808 = state_43530__$1;
(statearr_43613_45808[(2)] = false);

(statearr_43613_45808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (26))){
var inst_43487 = (state_43530[(9)]);
var inst_43494 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43487);
var state_43530__$1 = state_43530;
var statearr_43616_45809 = state_43530__$1;
(statearr_43616_45809[(2)] = inst_43494);

(statearr_43616_45809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (16))){
var state_43530__$1 = state_43530;
var statearr_43619_45810 = state_43530__$1;
(statearr_43619_45810[(2)] = true);

(statearr_43619_45810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (38))){
var inst_43518 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
var statearr_43624_45811 = state_43530__$1;
(statearr_43624_45811[(2)] = inst_43518);

(statearr_43624_45811[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (30))){
var inst_43477 = (state_43530[(13)]);
var inst_43487 = (state_43530[(9)]);
var inst_43476 = (state_43530[(10)]);
var inst_43505 = cljs.core.empty_QMARK_(inst_43476);
var inst_43506 = (inst_43477.cljs$core$IFn$_invoke$arity$1 ? inst_43477.cljs$core$IFn$_invoke$arity$1(inst_43487) : inst_43477.call(null,inst_43487));
var inst_43507 = cljs.core.not(inst_43506);
var inst_43508 = ((inst_43505) && (inst_43507));
var state_43530__$1 = state_43530;
var statearr_43627_45812 = state_43530__$1;
(statearr_43627_45812[(2)] = inst_43508);

(statearr_43627_45812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (10))){
var inst_43421 = (state_43530[(8)]);
var inst_43448 = (state_43530[(2)]);
var inst_43449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43448,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43448,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43448,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43452 = inst_43421;
var state_43530__$1 = (function (){var statearr_43629 = state_43530;
(statearr_43629[(16)] = inst_43449);

(statearr_43629[(7)] = inst_43452);

(statearr_43629[(17)] = inst_43451);

(statearr_43629[(18)] = inst_43450);

return statearr_43629;
})();
var statearr_43631_45813 = state_43530__$1;
(statearr_43631_45813[(2)] = null);

(statearr_43631_45813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (18))){
var inst_43467 = (state_43530[(2)]);
var state_43530__$1 = state_43530;
var statearr_43634_45815 = state_43530__$1;
(statearr_43634_45815[(2)] = inst_43467);

(statearr_43634_45815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (37))){
var state_43530__$1 = state_43530;
var statearr_43635_45818 = state_43530__$1;
(statearr_43635_45818[(2)] = null);

(statearr_43635_45818[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43531 === (8))){
var inst_43421 = (state_43530[(8)]);
var inst_43444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43421);
var state_43530__$1 = state_43530;
var statearr_43636_45820 = state_43530__$1;
(statearr_43636_45820[(2)] = inst_43444);

(statearr_43636_45820[(1)] = (10));


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
}
}
}
}
});})(c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41732__auto__,c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41733__auto__ = null;
var cljs$core$async$mix_$_state_machine__41733__auto____0 = (function (){
var statearr_43641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43641[(0)] = cljs$core$async$mix_$_state_machine__41733__auto__);

(statearr_43641[(1)] = (1));

return statearr_43641;
});
var cljs$core$async$mix_$_state_machine__41733__auto____1 = (function (state_43530){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_43530);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e43644){var ex__41736__auto__ = e43644;
var statearr_43646_45822 = state_43530;
(statearr_43646_45822[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_43530[(4)]))){
var statearr_43648_45823 = state_43530;
(statearr_43648_45823[(1)] = cljs.core.first((state_43530[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45826 = state_43530;
state_43530 = G__45826;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41733__auto__ = function(state_43530){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41733__auto____1.call(this,state_43530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41733__auto____0;
cljs$core$async$mix_$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41733__auto____1;
return cljs$core$async$mix_$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__42008__auto__ = (function (){var statearr_43651 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_43651[(6)] = c__42006__auto___45768);

return statearr_43651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43654 = arguments.length;
switch (G__43654) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43676 = arguments.length;
switch (G__43676) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__43670_SHARP_){
if(cljs.core.truth_((p1__43670_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43670_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43670_SHARP_.call(null,topic)))){
return p1__43670_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43670_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43689 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43690){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43690 = meta43690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43691,meta43690__$1){
var self__ = this;
var _43691__$1 = this;
return (new cljs.core.async.t_cljs$core$async43689(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43690__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43691){
var self__ = this;
var _43691__$1 = this;
return self__.meta43690;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43690","meta43690",-1721610658,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43689";

cljs.core.async.t_cljs$core$async43689.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43689");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43689.
 */
cljs.core.async.__GT_t_cljs$core$async43689 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43690){
return (new cljs.core.async.t_cljs$core$async43689(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43690));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43689(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42006__auto___45851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45851,mults,ensure_mult,p){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45851,mults,ensure_mult,p){
return (function (state_43790){
var state_val_43791 = (state_43790[(1)]);
if((state_val_43791 === (7))){
var inst_43784 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43794_45853 = state_43790__$1;
(statearr_43794_45853[(2)] = inst_43784);

(statearr_43794_45853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (20))){
var state_43790__$1 = state_43790;
var statearr_43797_45854 = state_43790__$1;
(statearr_43797_45854[(2)] = null);

(statearr_43797_45854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (1))){
var state_43790__$1 = state_43790;
var statearr_43800_45855 = state_43790__$1;
(statearr_43800_45855[(2)] = null);

(statearr_43800_45855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (24))){
var inst_43767 = (state_43790[(7)]);
var inst_43776 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43767);
var state_43790__$1 = state_43790;
var statearr_43801_45856 = state_43790__$1;
(statearr_43801_45856[(2)] = inst_43776);

(statearr_43801_45856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (4))){
var inst_43712 = (state_43790[(8)]);
var inst_43712__$1 = (state_43790[(2)]);
var inst_43713 = (inst_43712__$1 == null);
var state_43790__$1 = (function (){var statearr_43804 = state_43790;
(statearr_43804[(8)] = inst_43712__$1);

return statearr_43804;
})();
if(cljs.core.truth_(inst_43713)){
var statearr_43807_45857 = state_43790__$1;
(statearr_43807_45857[(1)] = (5));

} else {
var statearr_43808_45859 = state_43790__$1;
(statearr_43808_45859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (15))){
var inst_43760 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43811_45861 = state_43790__$1;
(statearr_43811_45861[(2)] = inst_43760);

(statearr_43811_45861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (21))){
var inst_43781 = (state_43790[(2)]);
var state_43790__$1 = (function (){var statearr_43814 = state_43790;
(statearr_43814[(9)] = inst_43781);

return statearr_43814;
})();
var statearr_43815_45862 = state_43790__$1;
(statearr_43815_45862[(2)] = null);

(statearr_43815_45862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (13))){
var inst_43742 = (state_43790[(10)]);
var inst_43744 = cljs.core.chunked_seq_QMARK_(inst_43742);
var state_43790__$1 = state_43790;
if(inst_43744){
var statearr_43818_45864 = state_43790__$1;
(statearr_43818_45864[(1)] = (16));

} else {
var statearr_43819_45865 = state_43790__$1;
(statearr_43819_45865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (22))){
var inst_43773 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
if(cljs.core.truth_(inst_43773)){
var statearr_43822_45866 = state_43790__$1;
(statearr_43822_45866[(1)] = (23));

} else {
var statearr_43823_45867 = state_43790__$1;
(statearr_43823_45867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (6))){
var inst_43767 = (state_43790[(7)]);
var inst_43712 = (state_43790[(8)]);
var inst_43769 = (state_43790[(11)]);
var inst_43767__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43712) : topic_fn.call(null,inst_43712));
var inst_43768 = cljs.core.deref(mults);
var inst_43769__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43768,inst_43767__$1);
var state_43790__$1 = (function (){var statearr_43828 = state_43790;
(statearr_43828[(7)] = inst_43767__$1);

(statearr_43828[(11)] = inst_43769__$1);

return statearr_43828;
})();
if(cljs.core.truth_(inst_43769__$1)){
var statearr_43829_45872 = state_43790__$1;
(statearr_43829_45872[(1)] = (19));

} else {
var statearr_43830_45873 = state_43790__$1;
(statearr_43830_45873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (25))){
var inst_43778 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43832_45874 = state_43790__$1;
(statearr_43832_45874[(2)] = inst_43778);

(statearr_43832_45874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (17))){
var inst_43742 = (state_43790[(10)]);
var inst_43751 = cljs.core.first(inst_43742);
var inst_43752 = cljs.core.async.muxch_STAR_(inst_43751);
var inst_43753 = cljs.core.async.close_BANG_(inst_43752);
var inst_43754 = cljs.core.next(inst_43742);
var inst_43726 = inst_43754;
var inst_43727 = null;
var inst_43728 = (0);
var inst_43729 = (0);
var state_43790__$1 = (function (){var statearr_43835 = state_43790;
(statearr_43835[(12)] = inst_43728);

(statearr_43835[(13)] = inst_43727);

(statearr_43835[(14)] = inst_43729);

(statearr_43835[(15)] = inst_43726);

(statearr_43835[(16)] = inst_43753);

return statearr_43835;
})();
var statearr_43836_45879 = state_43790__$1;
(statearr_43836_45879[(2)] = null);

(statearr_43836_45879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (3))){
var inst_43786 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43790__$1,inst_43786);
} else {
if((state_val_43791 === (12))){
var inst_43762 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43840_45883 = state_43790__$1;
(statearr_43840_45883[(2)] = inst_43762);

(statearr_43840_45883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (2))){
var state_43790__$1 = state_43790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43790__$1,(4),ch);
} else {
if((state_val_43791 === (23))){
var state_43790__$1 = state_43790;
var statearr_43845_45884 = state_43790__$1;
(statearr_43845_45884[(2)] = null);

(statearr_43845_45884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (19))){
var inst_43712 = (state_43790[(8)]);
var inst_43769 = (state_43790[(11)]);
var inst_43771 = cljs.core.async.muxch_STAR_(inst_43769);
var state_43790__$1 = state_43790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43790__$1,(22),inst_43771,inst_43712);
} else {
if((state_val_43791 === (11))){
var inst_43742 = (state_43790[(10)]);
var inst_43726 = (state_43790[(15)]);
var inst_43742__$1 = cljs.core.seq(inst_43726);
var state_43790__$1 = (function (){var statearr_43848 = state_43790;
(statearr_43848[(10)] = inst_43742__$1);

return statearr_43848;
})();
if(inst_43742__$1){
var statearr_43849_45889 = state_43790__$1;
(statearr_43849_45889[(1)] = (13));

} else {
var statearr_43850_45890 = state_43790__$1;
(statearr_43850_45890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (9))){
var inst_43764 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43851_45891 = state_43790__$1;
(statearr_43851_45891[(2)] = inst_43764);

(statearr_43851_45891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (5))){
var inst_43720 = cljs.core.deref(mults);
var inst_43721 = cljs.core.vals(inst_43720);
var inst_43722 = cljs.core.seq(inst_43721);
var inst_43726 = inst_43722;
var inst_43727 = null;
var inst_43728 = (0);
var inst_43729 = (0);
var state_43790__$1 = (function (){var statearr_43853 = state_43790;
(statearr_43853[(12)] = inst_43728);

(statearr_43853[(13)] = inst_43727);

(statearr_43853[(14)] = inst_43729);

(statearr_43853[(15)] = inst_43726);

return statearr_43853;
})();
var statearr_43854_45907 = state_43790__$1;
(statearr_43854_45907[(2)] = null);

(statearr_43854_45907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (14))){
var state_43790__$1 = state_43790;
var statearr_43859_45909 = state_43790__$1;
(statearr_43859_45909[(2)] = null);

(statearr_43859_45909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (16))){
var inst_43742 = (state_43790[(10)]);
var inst_43746 = cljs.core.chunk_first(inst_43742);
var inst_43747 = cljs.core.chunk_rest(inst_43742);
var inst_43748 = cljs.core.count(inst_43746);
var inst_43726 = inst_43747;
var inst_43727 = inst_43746;
var inst_43728 = inst_43748;
var inst_43729 = (0);
var state_43790__$1 = (function (){var statearr_43862 = state_43790;
(statearr_43862[(12)] = inst_43728);

(statearr_43862[(13)] = inst_43727);

(statearr_43862[(14)] = inst_43729);

(statearr_43862[(15)] = inst_43726);

return statearr_43862;
})();
var statearr_43863_45910 = state_43790__$1;
(statearr_43863_45910[(2)] = null);

(statearr_43863_45910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (10))){
var inst_43728 = (state_43790[(12)]);
var inst_43727 = (state_43790[(13)]);
var inst_43729 = (state_43790[(14)]);
var inst_43726 = (state_43790[(15)]);
var inst_43734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43727,inst_43729);
var inst_43735 = cljs.core.async.muxch_STAR_(inst_43734);
var inst_43736 = cljs.core.async.close_BANG_(inst_43735);
var inst_43737 = (inst_43729 + (1));
var tmp43856 = inst_43728;
var tmp43857 = inst_43727;
var tmp43858 = inst_43726;
var inst_43726__$1 = tmp43858;
var inst_43727__$1 = tmp43857;
var inst_43728__$1 = tmp43856;
var inst_43729__$1 = inst_43737;
var state_43790__$1 = (function (){var statearr_43866 = state_43790;
(statearr_43866[(12)] = inst_43728__$1);

(statearr_43866[(13)] = inst_43727__$1);

(statearr_43866[(14)] = inst_43729__$1);

(statearr_43866[(15)] = inst_43726__$1);

(statearr_43866[(17)] = inst_43736);

return statearr_43866;
})();
var statearr_43867_45915 = state_43790__$1;
(statearr_43867_45915[(2)] = null);

(statearr_43867_45915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (18))){
var inst_43757 = (state_43790[(2)]);
var state_43790__$1 = state_43790;
var statearr_43869_45920 = state_43790__$1;
(statearr_43869_45920[(2)] = inst_43757);

(statearr_43869_45920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43791 === (8))){
var inst_43728 = (state_43790[(12)]);
var inst_43729 = (state_43790[(14)]);
var inst_43731 = (inst_43729 < inst_43728);
var inst_43732 = inst_43731;
var state_43790__$1 = state_43790;
if(cljs.core.truth_(inst_43732)){
var statearr_43871_45929 = state_43790__$1;
(statearr_43871_45929[(1)] = (10));

} else {
var statearr_43872_45931 = state_43790__$1;
(statearr_43872_45931[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__42006__auto___45851,mults,ensure_mult,p))
;
return ((function (switch__41732__auto__,c__42006__auto___45851,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_43875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43875[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_43875[(1)] = (1));

return statearr_43875;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_43790){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_43790);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e43876){var ex__41736__auto__ = e43876;
var statearr_43877_45937 = state_43790;
(statearr_43877_45937[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_43790[(4)]))){
var statearr_43879_45941 = state_43790;
(statearr_43879_45941[(1)] = cljs.core.first((state_43790[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45947 = state_43790;
state_43790 = G__45947;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_43790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_43790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45851,mults,ensure_mult,p))
})();
var state__42008__auto__ = (function (){var statearr_43881 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_43881[(6)] = c__42006__auto___45851);

return statearr_43881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45851,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43887 = arguments.length;
switch (G__43887) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43899 = arguments.length;
switch (G__43899) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43917 = arguments.length;
switch (G__43917) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42006__auto___45965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43972){
var state_val_43973 = (state_43972[(1)]);
if((state_val_43973 === (7))){
var state_43972__$1 = state_43972;
var statearr_43983_45967 = state_43972__$1;
(statearr_43983_45967[(2)] = null);

(statearr_43983_45967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (1))){
var state_43972__$1 = state_43972;
var statearr_43987_45970 = state_43972__$1;
(statearr_43987_45970[(2)] = null);

(statearr_43987_45970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (4))){
var inst_43925 = (state_43972[(7)]);
var inst_43926 = (state_43972[(8)]);
var inst_43928 = (inst_43926 < inst_43925);
var state_43972__$1 = state_43972;
if(cljs.core.truth_(inst_43928)){
var statearr_43991_45974 = state_43972__$1;
(statearr_43991_45974[(1)] = (6));

} else {
var statearr_43994_45975 = state_43972__$1;
(statearr_43994_45975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (15))){
var inst_43954 = (state_43972[(9)]);
var inst_43960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43954);
var state_43972__$1 = state_43972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43972__$1,(17),out,inst_43960);
} else {
if((state_val_43973 === (13))){
var inst_43954 = (state_43972[(9)]);
var inst_43954__$1 = (state_43972[(2)]);
var inst_43956 = cljs.core.some(cljs.core.nil_QMARK_,inst_43954__$1);
var state_43972__$1 = (function (){var statearr_44000 = state_43972;
(statearr_44000[(9)] = inst_43954__$1);

return statearr_44000;
})();
if(cljs.core.truth_(inst_43956)){
var statearr_44001_45981 = state_43972__$1;
(statearr_44001_45981[(1)] = (14));

} else {
var statearr_44003_45982 = state_43972__$1;
(statearr_44003_45982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (6))){
var state_43972__$1 = state_43972;
var statearr_44007_45986 = state_43972__$1;
(statearr_44007_45986[(2)] = null);

(statearr_44007_45986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (17))){
var inst_43962 = (state_43972[(2)]);
var state_43972__$1 = (function (){var statearr_44021 = state_43972;
(statearr_44021[(10)] = inst_43962);

return statearr_44021;
})();
var statearr_44023_45989 = state_43972__$1;
(statearr_44023_45989[(2)] = null);

(statearr_44023_45989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (3))){
var inst_43968 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43972__$1,inst_43968);
} else {
if((state_val_43973 === (12))){
var _ = (function (){var statearr_44026 = state_43972;
(statearr_44026[(4)] = cljs.core.rest((state_43972[(4)])));

return statearr_44026;
})();
var state_43972__$1 = state_43972;
var ex44017 = (state_43972__$1[(2)]);
var statearr_44028_45990 = state_43972__$1;
(statearr_44028_45990[(5)] = ex44017);


if((ex44017 instanceof Object)){
var statearr_44033_45991 = state_43972__$1;
(statearr_44033_45991[(1)] = (11));

(statearr_44033_45991[(5)] = null);

} else {
throw ex44017;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (2))){
var inst_43923 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43925 = cnt;
var inst_43926 = (0);
var state_43972__$1 = (function (){var statearr_44043 = state_43972;
(statearr_44043[(7)] = inst_43925);

(statearr_44043[(11)] = inst_43923);

(statearr_44043[(8)] = inst_43926);

return statearr_44043;
})();
var statearr_44045_45993 = state_43972__$1;
(statearr_44045_45993[(2)] = null);

(statearr_44045_45993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (11))){
var inst_43932 = (state_43972[(2)]);
var inst_43933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43972__$1 = (function (){var statearr_44048 = state_43972;
(statearr_44048[(12)] = inst_43932);

return statearr_44048;
})();
var statearr_44050_45996 = state_43972__$1;
(statearr_44050_45996[(2)] = inst_43933);

(statearr_44050_45996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (9))){
var inst_43926 = (state_43972[(8)]);
var _ = (function (){var statearr_44052 = state_43972;
(statearr_44052[(4)] = cljs.core.cons((12),(state_43972[(4)])));

return statearr_44052;
})();
var inst_43940 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43926) : chs__$1.call(null,inst_43926));
var inst_43941 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43926) : done.call(null,inst_43926));
var inst_43942 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43940,inst_43941);
var ___$1 = (function (){var statearr_44053 = state_43972;
(statearr_44053[(4)] = cljs.core.rest((state_43972[(4)])));

return statearr_44053;
})();
var state_43972__$1 = state_43972;
var statearr_44054_46002 = state_43972__$1;
(statearr_44054_46002[(2)] = inst_43942);

(statearr_44054_46002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (5))){
var inst_43952 = (state_43972[(2)]);
var state_43972__$1 = (function (){var statearr_44055 = state_43972;
(statearr_44055[(13)] = inst_43952);

return statearr_44055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43972__$1,(13),dchan);
} else {
if((state_val_43973 === (14))){
var inst_43958 = cljs.core.async.close_BANG_(out);
var state_43972__$1 = state_43972;
var statearr_44056_46006 = state_43972__$1;
(statearr_44056_46006[(2)] = inst_43958);

(statearr_44056_46006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (16))){
var inst_43965 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
var statearr_44057_46007 = state_43972__$1;
(statearr_44057_46007[(2)] = inst_43965);

(statearr_44057_46007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (10))){
var inst_43926 = (state_43972[(8)]);
var inst_43945 = (state_43972[(2)]);
var inst_43946 = (inst_43926 + (1));
var inst_43926__$1 = inst_43946;
var state_43972__$1 = (function (){var statearr_44058 = state_43972;
(statearr_44058[(14)] = inst_43945);

(statearr_44058[(8)] = inst_43926__$1);

return statearr_44058;
})();
var statearr_44059_46010 = state_43972__$1;
(statearr_44059_46010[(2)] = null);

(statearr_44059_46010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43973 === (8))){
var inst_43950 = (state_43972[(2)]);
var state_43972__$1 = state_43972;
var statearr_44060_46011 = state_43972__$1;
(statearr_44060_46011[(2)] = inst_43950);

(statearr_44060_46011[(1)] = (5));


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
});})(c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41732__auto__,c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44061[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44061[(1)] = (1));

return statearr_44061;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_43972){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_43972);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44064){var ex__41736__auto__ = e44064;
var statearr_44065_46012 = state_43972;
(statearr_44065_46012[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_43972[(4)]))){
var statearr_44066_46015 = state_43972;
(statearr_44066_46015[(1)] = cljs.core.first((state_43972[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46019 = state_43972;
state_43972 = G__46019;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_43972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_43972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__42008__auto__ = (function (){var statearr_44069 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44069[(6)] = c__42006__auto___45965);

return statearr_44069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___45965,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44079 = arguments.length;
switch (G__44079) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46026,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46026,out){
return (function (state_44123){
var state_val_44124 = (state_44123[(1)]);
if((state_val_44124 === (7))){
var inst_44097 = (state_44123[(7)]);
var inst_44095 = (state_44123[(8)]);
var inst_44095__$1 = (state_44123[(2)]);
var inst_44097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44095__$1,(0),null);
var inst_44099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44095__$1,(1),null);
var inst_44100 = (inst_44097__$1 == null);
var state_44123__$1 = (function (){var statearr_44129 = state_44123;
(statearr_44129[(7)] = inst_44097__$1);

(statearr_44129[(8)] = inst_44095__$1);

(statearr_44129[(9)] = inst_44099);

return statearr_44129;
})();
if(cljs.core.truth_(inst_44100)){
var statearr_44130_46029 = state_44123__$1;
(statearr_44130_46029[(1)] = (8));

} else {
var statearr_44131_46031 = state_44123__$1;
(statearr_44131_46031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (1))){
var inst_44085 = cljs.core.vec(chs);
var inst_44086 = inst_44085;
var state_44123__$1 = (function (){var statearr_44132 = state_44123;
(statearr_44132[(10)] = inst_44086);

return statearr_44132;
})();
var statearr_44133_46034 = state_44123__$1;
(statearr_44133_46034[(2)] = null);

(statearr_44133_46034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (4))){
var inst_44086 = (state_44123[(10)]);
var state_44123__$1 = state_44123;
return cljs.core.async.ioc_alts_BANG_(state_44123__$1,(7),inst_44086);
} else {
if((state_val_44124 === (6))){
var inst_44117 = (state_44123[(2)]);
var state_44123__$1 = state_44123;
var statearr_44134_46035 = state_44123__$1;
(statearr_44134_46035[(2)] = inst_44117);

(statearr_44134_46035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (3))){
var inst_44119 = (state_44123[(2)]);
var state_44123__$1 = state_44123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44123__$1,inst_44119);
} else {
if((state_val_44124 === (2))){
var inst_44086 = (state_44123[(10)]);
var inst_44088 = cljs.core.count(inst_44086);
var inst_44089 = (inst_44088 > (0));
var state_44123__$1 = state_44123;
if(cljs.core.truth_(inst_44089)){
var statearr_44142_46037 = state_44123__$1;
(statearr_44142_46037[(1)] = (4));

} else {
var statearr_44143_46038 = state_44123__$1;
(statearr_44143_46038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (11))){
var inst_44086 = (state_44123[(10)]);
var inst_44109 = (state_44123[(2)]);
var tmp44136 = inst_44086;
var inst_44086__$1 = tmp44136;
var state_44123__$1 = (function (){var statearr_44145 = state_44123;
(statearr_44145[(11)] = inst_44109);

(statearr_44145[(10)] = inst_44086__$1);

return statearr_44145;
})();
var statearr_44146_46039 = state_44123__$1;
(statearr_44146_46039[(2)] = null);

(statearr_44146_46039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (9))){
var inst_44097 = (state_44123[(7)]);
var state_44123__$1 = state_44123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44123__$1,(11),out,inst_44097);
} else {
if((state_val_44124 === (5))){
var inst_44115 = cljs.core.async.close_BANG_(out);
var state_44123__$1 = state_44123;
var statearr_44148_46041 = state_44123__$1;
(statearr_44148_46041[(2)] = inst_44115);

(statearr_44148_46041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (10))){
var inst_44113 = (state_44123[(2)]);
var state_44123__$1 = state_44123;
var statearr_44150_46043 = state_44123__$1;
(statearr_44150_46043[(2)] = inst_44113);

(statearr_44150_46043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44124 === (8))){
var inst_44097 = (state_44123[(7)]);
var inst_44095 = (state_44123[(8)]);
var inst_44086 = (state_44123[(10)]);
var inst_44099 = (state_44123[(9)]);
var inst_44103 = (function (){var cs = inst_44086;
var vec__44091 = inst_44095;
var v = inst_44097;
var c = inst_44099;
return ((function (cs,vec__44091,v,c,inst_44097,inst_44095,inst_44086,inst_44099,state_val_44124,c__42006__auto___46026,out){
return (function (p1__44074_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44074_SHARP_);
});
;})(cs,vec__44091,v,c,inst_44097,inst_44095,inst_44086,inst_44099,state_val_44124,c__42006__auto___46026,out))
})();
var inst_44104 = cljs.core.filterv(inst_44103,inst_44086);
var inst_44086__$1 = inst_44104;
var state_44123__$1 = (function (){var statearr_44156 = state_44123;
(statearr_44156[(10)] = inst_44086__$1);

return statearr_44156;
})();
var statearr_44157_46044 = state_44123__$1;
(statearr_44157_46044[(2)] = null);

(statearr_44157_46044[(1)] = (2));


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
});})(c__42006__auto___46026,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46026,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44159[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44159[(1)] = (1));

return statearr_44159;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44123){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44123);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44161){var ex__41736__auto__ = e44161;
var statearr_44163_46049 = state_44123;
(statearr_44163_46049[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44123[(4)]))){
var statearr_44165_46050 = state_44123;
(statearr_44165_46050[(1)] = cljs.core.first((state_44123[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46052 = state_44123;
state_44123 = G__46052;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46026,out))
})();
var state__42008__auto__ = (function (){var statearr_44166 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44166[(6)] = c__42006__auto___46026);

return statearr_44166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46026,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44176 = arguments.length;
switch (G__44176) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46058,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46058,out){
return (function (state_44220){
var state_val_44221 = (state_44220[(1)]);
if((state_val_44221 === (7))){
var inst_44201 = (state_44220[(7)]);
var inst_44201__$1 = (state_44220[(2)]);
var inst_44203 = (inst_44201__$1 == null);
var inst_44204 = cljs.core.not(inst_44203);
var state_44220__$1 = (function (){var statearr_44225 = state_44220;
(statearr_44225[(7)] = inst_44201__$1);

return statearr_44225;
})();
if(inst_44204){
var statearr_44228_46060 = state_44220__$1;
(statearr_44228_46060[(1)] = (8));

} else {
var statearr_44230_46061 = state_44220__$1;
(statearr_44230_46061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (1))){
var inst_44194 = (0);
var state_44220__$1 = (function (){var statearr_44234 = state_44220;
(statearr_44234[(8)] = inst_44194);

return statearr_44234;
})();
var statearr_44235_46063 = state_44220__$1;
(statearr_44235_46063[(2)] = null);

(statearr_44235_46063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (4))){
var state_44220__$1 = state_44220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44220__$1,(7),ch);
} else {
if((state_val_44221 === (6))){
var inst_44215 = (state_44220[(2)]);
var state_44220__$1 = state_44220;
var statearr_44239_46064 = state_44220__$1;
(statearr_44239_46064[(2)] = inst_44215);

(statearr_44239_46064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (3))){
var inst_44217 = (state_44220[(2)]);
var inst_44218 = cljs.core.async.close_BANG_(out);
var state_44220__$1 = (function (){var statearr_44243 = state_44220;
(statearr_44243[(9)] = inst_44217);

return statearr_44243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44220__$1,inst_44218);
} else {
if((state_val_44221 === (2))){
var inst_44194 = (state_44220[(8)]);
var inst_44196 = (inst_44194 < n);
var state_44220__$1 = state_44220;
if(cljs.core.truth_(inst_44196)){
var statearr_44250_46066 = state_44220__$1;
(statearr_44250_46066[(1)] = (4));

} else {
var statearr_44254_46067 = state_44220__$1;
(statearr_44254_46067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (11))){
var inst_44194 = (state_44220[(8)]);
var inst_44207 = (state_44220[(2)]);
var inst_44208 = (inst_44194 + (1));
var inst_44194__$1 = inst_44208;
var state_44220__$1 = (function (){var statearr_44258 = state_44220;
(statearr_44258[(8)] = inst_44194__$1);

(statearr_44258[(10)] = inst_44207);

return statearr_44258;
})();
var statearr_44262_46072 = state_44220__$1;
(statearr_44262_46072[(2)] = null);

(statearr_44262_46072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (9))){
var state_44220__$1 = state_44220;
var statearr_44263_46075 = state_44220__$1;
(statearr_44263_46075[(2)] = null);

(statearr_44263_46075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (5))){
var state_44220__$1 = state_44220;
var statearr_44267_46076 = state_44220__$1;
(statearr_44267_46076[(2)] = null);

(statearr_44267_46076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (10))){
var inst_44212 = (state_44220[(2)]);
var state_44220__$1 = state_44220;
var statearr_44270_46077 = state_44220__$1;
(statearr_44270_46077[(2)] = inst_44212);

(statearr_44270_46077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44221 === (8))){
var inst_44201 = (state_44220[(7)]);
var state_44220__$1 = state_44220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44220__$1,(11),out,inst_44201);
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
});})(c__42006__auto___46058,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46058,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44276[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44276[(1)] = (1));

return statearr_44276;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44220){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44220);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44281){var ex__41736__auto__ = e44281;
var statearr_44282_46087 = state_44220;
(statearr_44282_46087[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44220[(4)]))){
var statearr_44289_46088 = state_44220;
(statearr_44289_46088[(1)] = cljs.core.first((state_44220[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46089 = state_44220;
state_44220 = G__46089;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46058,out))
})();
var state__42008__auto__ = (function (){var statearr_44294 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44294[(6)] = c__42006__auto___46058);

return statearr_44294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46058,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44306 = (function (f,ch,meta44307){
this.f = f;
this.ch = ch;
this.meta44307 = meta44307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44308,meta44307__$1){
var self__ = this;
var _44308__$1 = this;
return (new cljs.core.async.t_cljs$core$async44306(self__.f,self__.ch,meta44307__$1));
});

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44308){
var self__ = this;
var _44308__$1 = this;
return self__.meta44307;
});

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44335 = (function (f,ch,meta44307,_,fn1,meta44336){
this.f = f;
this.ch = ch;
this.meta44307 = meta44307;
this._ = _;
this.fn1 = fn1;
this.meta44336 = meta44336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44337,meta44336__$1){
var self__ = this;
var _44337__$1 = this;
return (new cljs.core.async.t_cljs$core$async44335(self__.f,self__.ch,self__.meta44307,self__._,self__.fn1,meta44336__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44337){
var self__ = this;
var _44337__$1 = this;
return self__.meta44336;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44302_SHARP_){
var G__44338 = (((p1__44302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44302_SHARP_) : self__.f.call(null,p1__44302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44338) : f1.call(null,G__44338));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44307","meta44307",-385283361,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44306","cljs.core.async/t_cljs$core$async44306",567128793,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44336","meta44336",1630847425,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44335";

cljs.core.async.t_cljs$core$async44335.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44335");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44335.
 */
cljs.core.async.__GT_t_cljs$core$async44335 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44335(f__$1,ch__$1,meta44307__$1,___$2,fn1__$1,meta44336){
return (new cljs.core.async.t_cljs$core$async44335(f__$1,ch__$1,meta44307__$1,___$2,fn1__$1,meta44336));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44335(self__.f,self__.ch,self__.meta44307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44343 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44343) : self__.f.call(null,G__44343));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44307","meta44307",-385283361,null)], null);
});

cljs.core.async.t_cljs$core$async44306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44306";

cljs.core.async.t_cljs$core$async44306.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44306");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44306.
 */
cljs.core.async.__GT_t_cljs$core$async44306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44306(f__$1,ch__$1,meta44307){
return (new cljs.core.async.t_cljs$core$async44306(f__$1,ch__$1,meta44307));
});

}

return (new cljs.core.async.t_cljs$core$async44306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44346 = (function (f,ch,meta44347){
this.f = f;
this.ch = ch;
this.meta44347 = meta44347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44348,meta44347__$1){
var self__ = this;
var _44348__$1 = this;
return (new cljs.core.async.t_cljs$core$async44346(self__.f,self__.ch,meta44347__$1));
});

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44348){
var self__ = this;
var _44348__$1 = this;
return self__.meta44347;
});

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async44346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44347","meta44347",-1392693178,null)], null);
});

cljs.core.async.t_cljs$core$async44346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44346";

cljs.core.async.t_cljs$core$async44346.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44346");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44346.
 */
cljs.core.async.__GT_t_cljs$core$async44346 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44346(f__$1,ch__$1,meta44347){
return (new cljs.core.async.t_cljs$core$async44346(f__$1,ch__$1,meta44347));
});

}

return (new cljs.core.async.t_cljs$core$async44346(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44389 = (function (p,ch,meta44390){
this.p = p;
this.ch = ch;
this.meta44390 = meta44390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44391,meta44390__$1){
var self__ = this;
var _44391__$1 = this;
return (new cljs.core.async.t_cljs$core$async44389(self__.p,self__.ch,meta44390__$1));
});

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44391){
var self__ = this;
var _44391__$1 = this;
return self__.meta44390;
});

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44390","meta44390",718321465,null)], null);
});

cljs.core.async.t_cljs$core$async44389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44389";

cljs.core.async.t_cljs$core$async44389.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44389");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44389.
 */
cljs.core.async.__GT_t_cljs$core$async44389 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44389(p__$1,ch__$1,meta44390){
return (new cljs.core.async.t_cljs$core$async44389(p__$1,ch__$1,meta44390));
});

}

return (new cljs.core.async.t_cljs$core$async44389(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44414 = arguments.length;
switch (G__44414) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46145,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46145,out){
return (function (state_44455){
var state_val_44456 = (state_44455[(1)]);
if((state_val_44456 === (7))){
var inst_44447 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44462_46147 = state_44455__$1;
(statearr_44462_46147[(2)] = inst_44447);

(statearr_44462_46147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (1))){
var state_44455__$1 = state_44455;
var statearr_44470_46148 = state_44455__$1;
(statearr_44470_46148[(2)] = null);

(statearr_44470_46148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (4))){
var inst_44432 = (state_44455[(7)]);
var inst_44432__$1 = (state_44455[(2)]);
var inst_44434 = (inst_44432__$1 == null);
var state_44455__$1 = (function (){var statearr_44479 = state_44455;
(statearr_44479[(7)] = inst_44432__$1);

return statearr_44479;
})();
if(cljs.core.truth_(inst_44434)){
var statearr_44480_46149 = state_44455__$1;
(statearr_44480_46149[(1)] = (5));

} else {
var statearr_44482_46150 = state_44455__$1;
(statearr_44482_46150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (6))){
var inst_44432 = (state_44455[(7)]);
var inst_44438 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44432) : p.call(null,inst_44432));
var state_44455__$1 = state_44455;
if(cljs.core.truth_(inst_44438)){
var statearr_44483_46155 = state_44455__$1;
(statearr_44483_46155[(1)] = (8));

} else {
var statearr_44484_46156 = state_44455__$1;
(statearr_44484_46156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (3))){
var inst_44449 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44455__$1,inst_44449);
} else {
if((state_val_44456 === (2))){
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44455__$1,(4),ch);
} else {
if((state_val_44456 === (11))){
var inst_44441 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44490_46158 = state_44455__$1;
(statearr_44490_46158[(2)] = inst_44441);

(statearr_44490_46158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (9))){
var state_44455__$1 = state_44455;
var statearr_44492_46159 = state_44455__$1;
(statearr_44492_46159[(2)] = null);

(statearr_44492_46159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (5))){
var inst_44436 = cljs.core.async.close_BANG_(out);
var state_44455__$1 = state_44455;
var statearr_44493_46165 = state_44455__$1;
(statearr_44493_46165[(2)] = inst_44436);

(statearr_44493_46165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (10))){
var inst_44444 = (state_44455[(2)]);
var state_44455__$1 = (function (){var statearr_44494 = state_44455;
(statearr_44494[(8)] = inst_44444);

return statearr_44494;
})();
var statearr_44495_46169 = state_44455__$1;
(statearr_44495_46169[(2)] = null);

(statearr_44495_46169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (8))){
var inst_44432 = (state_44455[(7)]);
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44455__$1,(11),out,inst_44432);
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
});})(c__42006__auto___46145,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46145,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44497 = [null,null,null,null,null,null,null,null,null];
(statearr_44497[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44497[(1)] = (1));

return statearr_44497;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44455){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44455);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44498){var ex__41736__auto__ = e44498;
var statearr_44499_46177 = state_44455;
(statearr_44499_46177[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44455[(4)]))){
var statearr_44500_46183 = state_44455;
(statearr_44500_46183[(1)] = cljs.core.first((state_44455[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46186 = state_44455;
state_44455 = G__46186;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46145,out))
})();
var state__42008__auto__ = (function (){var statearr_44502 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44502[(6)] = c__42006__auto___46145);

return statearr_44502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46145,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44504 = arguments.length;
switch (G__44504) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto__){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto__){
return (function (state_44576){
var state_val_44577 = (state_44576[(1)]);
if((state_val_44577 === (7))){
var inst_44572 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44597_46201 = state_44576__$1;
(statearr_44597_46201[(2)] = inst_44572);

(statearr_44597_46201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (20))){
var inst_44541 = (state_44576[(7)]);
var inst_44552 = (state_44576[(2)]);
var inst_44554 = cljs.core.next(inst_44541);
var inst_44527 = inst_44554;
var inst_44528 = null;
var inst_44529 = (0);
var inst_44530 = (0);
var state_44576__$1 = (function (){var statearr_44607 = state_44576;
(statearr_44607[(8)] = inst_44530);

(statearr_44607[(9)] = inst_44529);

(statearr_44607[(10)] = inst_44527);

(statearr_44607[(11)] = inst_44552);

(statearr_44607[(12)] = inst_44528);

return statearr_44607;
})();
var statearr_44611_46209 = state_44576__$1;
(statearr_44611_46209[(2)] = null);

(statearr_44611_46209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (1))){
var state_44576__$1 = state_44576;
var statearr_44612_46215 = state_44576__$1;
(statearr_44612_46215[(2)] = null);

(statearr_44612_46215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (4))){
var inst_44512 = (state_44576[(13)]);
var inst_44512__$1 = (state_44576[(2)]);
var inst_44514 = (inst_44512__$1 == null);
var state_44576__$1 = (function (){var statearr_44613 = state_44576;
(statearr_44613[(13)] = inst_44512__$1);

return statearr_44613;
})();
if(cljs.core.truth_(inst_44514)){
var statearr_44614_46217 = state_44576__$1;
(statearr_44614_46217[(1)] = (5));

} else {
var statearr_44615_46218 = state_44576__$1;
(statearr_44615_46218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (15))){
var state_44576__$1 = state_44576;
var statearr_44624_46219 = state_44576__$1;
(statearr_44624_46219[(2)] = null);

(statearr_44624_46219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (21))){
var state_44576__$1 = state_44576;
var statearr_44631_46220 = state_44576__$1;
(statearr_44631_46220[(2)] = null);

(statearr_44631_46220[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (13))){
var inst_44530 = (state_44576[(8)]);
var inst_44529 = (state_44576[(9)]);
var inst_44527 = (state_44576[(10)]);
var inst_44528 = (state_44576[(12)]);
var inst_44537 = (state_44576[(2)]);
var inst_44538 = (inst_44530 + (1));
var tmp44617 = inst_44529;
var tmp44618 = inst_44527;
var tmp44619 = inst_44528;
var inst_44527__$1 = tmp44618;
var inst_44528__$1 = tmp44619;
var inst_44529__$1 = tmp44617;
var inst_44530__$1 = inst_44538;
var state_44576__$1 = (function (){var statearr_44635 = state_44576;
(statearr_44635[(8)] = inst_44530__$1);

(statearr_44635[(14)] = inst_44537);

(statearr_44635[(9)] = inst_44529__$1);

(statearr_44635[(10)] = inst_44527__$1);

(statearr_44635[(12)] = inst_44528__$1);

return statearr_44635;
})();
var statearr_44640_46227 = state_44576__$1;
(statearr_44640_46227[(2)] = null);

(statearr_44640_46227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (22))){
var state_44576__$1 = state_44576;
var statearr_44646_46232 = state_44576__$1;
(statearr_44646_46232[(2)] = null);

(statearr_44646_46232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (6))){
var inst_44512 = (state_44576[(13)]);
var inst_44525 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44512) : f.call(null,inst_44512));
var inst_44526 = cljs.core.seq(inst_44525);
var inst_44527 = inst_44526;
var inst_44528 = null;
var inst_44529 = (0);
var inst_44530 = (0);
var state_44576__$1 = (function (){var statearr_44648 = state_44576;
(statearr_44648[(8)] = inst_44530);

(statearr_44648[(9)] = inst_44529);

(statearr_44648[(10)] = inst_44527);

(statearr_44648[(12)] = inst_44528);

return statearr_44648;
})();
var statearr_44650_46234 = state_44576__$1;
(statearr_44650_46234[(2)] = null);

(statearr_44650_46234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (17))){
var inst_44541 = (state_44576[(7)]);
var inst_44545 = cljs.core.chunk_first(inst_44541);
var inst_44546 = cljs.core.chunk_rest(inst_44541);
var inst_44547 = cljs.core.count(inst_44545);
var inst_44527 = inst_44546;
var inst_44528 = inst_44545;
var inst_44529 = inst_44547;
var inst_44530 = (0);
var state_44576__$1 = (function (){var statearr_44651 = state_44576;
(statearr_44651[(8)] = inst_44530);

(statearr_44651[(9)] = inst_44529);

(statearr_44651[(10)] = inst_44527);

(statearr_44651[(12)] = inst_44528);

return statearr_44651;
})();
var statearr_44652_46241 = state_44576__$1;
(statearr_44652_46241[(2)] = null);

(statearr_44652_46241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (3))){
var inst_44574 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44576__$1,inst_44574);
} else {
if((state_val_44577 === (12))){
var inst_44562 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44654_46245 = state_44576__$1;
(statearr_44654_46245[(2)] = inst_44562);

(statearr_44654_46245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (2))){
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44576__$1,(4),in$);
} else {
if((state_val_44577 === (23))){
var inst_44570 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44656_46248 = state_44576__$1;
(statearr_44656_46248[(2)] = inst_44570);

(statearr_44656_46248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (19))){
var inst_44557 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44657_46254 = state_44576__$1;
(statearr_44657_46254[(2)] = inst_44557);

(statearr_44657_46254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (11))){
var inst_44541 = (state_44576[(7)]);
var inst_44527 = (state_44576[(10)]);
var inst_44541__$1 = cljs.core.seq(inst_44527);
var state_44576__$1 = (function (){var statearr_44660 = state_44576;
(statearr_44660[(7)] = inst_44541__$1);

return statearr_44660;
})();
if(inst_44541__$1){
var statearr_44661_46264 = state_44576__$1;
(statearr_44661_46264[(1)] = (14));

} else {
var statearr_44662_46266 = state_44576__$1;
(statearr_44662_46266[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (9))){
var inst_44564 = (state_44576[(2)]);
var inst_44565 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44576__$1 = (function (){var statearr_44664 = state_44576;
(statearr_44664[(15)] = inst_44564);

return statearr_44664;
})();
if(cljs.core.truth_(inst_44565)){
var statearr_44665_46267 = state_44576__$1;
(statearr_44665_46267[(1)] = (21));

} else {
var statearr_44666_46268 = state_44576__$1;
(statearr_44666_46268[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (5))){
var inst_44518 = cljs.core.async.close_BANG_(out);
var state_44576__$1 = state_44576;
var statearr_44667_46271 = state_44576__$1;
(statearr_44667_46271[(2)] = inst_44518);

(statearr_44667_46271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (14))){
var inst_44541 = (state_44576[(7)]);
var inst_44543 = cljs.core.chunked_seq_QMARK_(inst_44541);
var state_44576__$1 = state_44576;
if(inst_44543){
var statearr_44669_46274 = state_44576__$1;
(statearr_44669_46274[(1)] = (17));

} else {
var statearr_44670_46275 = state_44576__$1;
(statearr_44670_46275[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (16))){
var inst_44560 = (state_44576[(2)]);
var state_44576__$1 = state_44576;
var statearr_44671_46277 = state_44576__$1;
(statearr_44671_46277[(2)] = inst_44560);

(statearr_44671_46277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44577 === (10))){
var inst_44530 = (state_44576[(8)]);
var inst_44528 = (state_44576[(12)]);
var inst_44535 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44528,inst_44530);
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44576__$1,(13),out,inst_44535);
} else {
if((state_val_44577 === (18))){
var inst_44541 = (state_44576[(7)]);
var inst_44550 = cljs.core.first(inst_44541);
var state_44576__$1 = state_44576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44576__$1,(20),out,inst_44550);
} else {
if((state_val_44577 === (8))){
var inst_44530 = (state_44576[(8)]);
var inst_44529 = (state_44576[(9)]);
var inst_44532 = (inst_44530 < inst_44529);
var inst_44533 = inst_44532;
var state_44576__$1 = state_44576;
if(cljs.core.truth_(inst_44533)){
var statearr_44672_46278 = state_44576__$1;
(statearr_44672_46278[(1)] = (10));

} else {
var statearr_44673_46279 = state_44576__$1;
(statearr_44673_46279[(1)] = (11));

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
}
}
}
}
}
}
});})(c__42006__auto__))
;
return ((function (switch__41732__auto__,c__42006__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____0 = (function (){
var statearr_44679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44679[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__);

(statearr_44679[(1)] = (1));

return statearr_44679;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____1 = (function (state_44576){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44576);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44680){var ex__41736__auto__ = e44680;
var statearr_44681_46282 = state_44576;
(statearr_44681_46282[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44576[(4)]))){
var statearr_44686_46284 = state_44576;
(statearr_44686_46284[(1)] = cljs.core.first((state_44576[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46286 = state_44576;
state_44576 = G__46286;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__ = function(state_44576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____1.call(this,state_44576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto__))
})();
var state__42008__auto__ = (function (){var statearr_44694 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44694[(6)] = c__42006__auto__);

return statearr_44694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto__))
);

return c__42006__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44715 = arguments.length;
switch (G__44715) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44722 = arguments.length;
switch (G__44722) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44727 = arguments.length;
switch (G__44727) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46314,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46314,out){
return (function (state_44754){
var state_val_44755 = (state_44754[(1)]);
if((state_val_44755 === (7))){
var inst_44749 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44756_46317 = state_44754__$1;
(statearr_44756_46317[(2)] = inst_44749);

(statearr_44756_46317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (1))){
var inst_44731 = null;
var state_44754__$1 = (function (){var statearr_44757 = state_44754;
(statearr_44757[(7)] = inst_44731);

return statearr_44757;
})();
var statearr_44758_46320 = state_44754__$1;
(statearr_44758_46320[(2)] = null);

(statearr_44758_46320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (4))){
var inst_44734 = (state_44754[(8)]);
var inst_44734__$1 = (state_44754[(2)]);
var inst_44735 = (inst_44734__$1 == null);
var inst_44736 = cljs.core.not(inst_44735);
var state_44754__$1 = (function (){var statearr_44760 = state_44754;
(statearr_44760[(8)] = inst_44734__$1);

return statearr_44760;
})();
if(inst_44736){
var statearr_44761_46322 = state_44754__$1;
(statearr_44761_46322[(1)] = (5));

} else {
var statearr_44762_46325 = state_44754__$1;
(statearr_44762_46325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (6))){
var state_44754__$1 = state_44754;
var statearr_44763_46329 = state_44754__$1;
(statearr_44763_46329[(2)] = null);

(statearr_44763_46329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (3))){
var inst_44751 = (state_44754[(2)]);
var inst_44752 = cljs.core.async.close_BANG_(out);
var state_44754__$1 = (function (){var statearr_44764 = state_44754;
(statearr_44764[(9)] = inst_44751);

return statearr_44764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44754__$1,inst_44752);
} else {
if((state_val_44755 === (2))){
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44754__$1,(4),ch);
} else {
if((state_val_44755 === (11))){
var inst_44734 = (state_44754[(8)]);
var inst_44743 = (state_44754[(2)]);
var inst_44731 = inst_44734;
var state_44754__$1 = (function (){var statearr_44767 = state_44754;
(statearr_44767[(10)] = inst_44743);

(statearr_44767[(7)] = inst_44731);

return statearr_44767;
})();
var statearr_44768_46343 = state_44754__$1;
(statearr_44768_46343[(2)] = null);

(statearr_44768_46343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (9))){
var inst_44734 = (state_44754[(8)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44754__$1,(11),out,inst_44734);
} else {
if((state_val_44755 === (5))){
var inst_44731 = (state_44754[(7)]);
var inst_44734 = (state_44754[(8)]);
var inst_44738 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44734,inst_44731);
var state_44754__$1 = state_44754;
if(inst_44738){
var statearr_44771_46355 = state_44754__$1;
(statearr_44771_46355[(1)] = (8));

} else {
var statearr_44775_46358 = state_44754__$1;
(statearr_44775_46358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (10))){
var inst_44746 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44777_46363 = state_44754__$1;
(statearr_44777_46363[(2)] = inst_44746);

(statearr_44777_46363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (8))){
var inst_44731 = (state_44754[(7)]);
var tmp44770 = inst_44731;
var inst_44731__$1 = tmp44770;
var state_44754__$1 = (function (){var statearr_44778 = state_44754;
(statearr_44778[(7)] = inst_44731__$1);

return statearr_44778;
})();
var statearr_44782_46371 = state_44754__$1;
(statearr_44782_46371[(2)] = null);

(statearr_44782_46371[(1)] = (2));


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
});})(c__42006__auto___46314,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46314,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44787[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44787[(1)] = (1));

return statearr_44787;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44754){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44754);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44792){var ex__41736__auto__ = e44792;
var statearr_44793_46386 = state_44754;
(statearr_44793_46386[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44754[(4)]))){
var statearr_44794_46391 = state_44754;
(statearr_44794_46391[(1)] = cljs.core.first((state_44754[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46397 = state_44754;
state_44754 = G__46397;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46314,out))
})();
var state__42008__auto__ = (function (){var statearr_44800 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44800[(6)] = c__42006__auto___46314);

return statearr_44800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46314,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44811 = arguments.length;
switch (G__44811) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46401,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46401,out){
return (function (state_44860){
var state_val_44862 = (state_44860[(1)]);
if((state_val_44862 === (7))){
var inst_44856 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44864_46404 = state_44860__$1;
(statearr_44864_46404[(2)] = inst_44856);

(statearr_44864_46404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (1))){
var inst_44823 = (new Array(n));
var inst_44824 = inst_44823;
var inst_44825 = (0);
var state_44860__$1 = (function (){var statearr_44867 = state_44860;
(statearr_44867[(7)] = inst_44824);

(statearr_44867[(8)] = inst_44825);

return statearr_44867;
})();
var statearr_44869_46407 = state_44860__$1;
(statearr_44869_46407[(2)] = null);

(statearr_44869_46407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (4))){
var inst_44828 = (state_44860[(9)]);
var inst_44828__$1 = (state_44860[(2)]);
var inst_44829 = (inst_44828__$1 == null);
var inst_44830 = cljs.core.not(inst_44829);
var state_44860__$1 = (function (){var statearr_44871 = state_44860;
(statearr_44871[(9)] = inst_44828__$1);

return statearr_44871;
})();
if(inst_44830){
var statearr_44873_46408 = state_44860__$1;
(statearr_44873_46408[(1)] = (5));

} else {
var statearr_44875_46409 = state_44860__$1;
(statearr_44875_46409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (15))){
var inst_44850 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44879_46410 = state_44860__$1;
(statearr_44879_46410[(2)] = inst_44850);

(statearr_44879_46410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (13))){
var state_44860__$1 = state_44860;
var statearr_44883_46412 = state_44860__$1;
(statearr_44883_46412[(2)] = null);

(statearr_44883_46412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (6))){
var inst_44825 = (state_44860[(8)]);
var inst_44846 = (inst_44825 > (0));
var state_44860__$1 = state_44860;
if(cljs.core.truth_(inst_44846)){
var statearr_44887_46413 = state_44860__$1;
(statearr_44887_46413[(1)] = (12));

} else {
var statearr_44890_46414 = state_44860__$1;
(statearr_44890_46414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (3))){
var inst_44858 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44860__$1,inst_44858);
} else {
if((state_val_44862 === (12))){
var inst_44824 = (state_44860[(7)]);
var inst_44848 = cljs.core.vec(inst_44824);
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44860__$1,(15),out,inst_44848);
} else {
if((state_val_44862 === (2))){
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44860__$1,(4),ch);
} else {
if((state_val_44862 === (11))){
var inst_44840 = (state_44860[(2)]);
var inst_44841 = (new Array(n));
var inst_44824 = inst_44841;
var inst_44825 = (0);
var state_44860__$1 = (function (){var statearr_44899 = state_44860;
(statearr_44899[(10)] = inst_44840);

(statearr_44899[(7)] = inst_44824);

(statearr_44899[(8)] = inst_44825);

return statearr_44899;
})();
var statearr_44902_46416 = state_44860__$1;
(statearr_44902_46416[(2)] = null);

(statearr_44902_46416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (9))){
var inst_44824 = (state_44860[(7)]);
var inst_44838 = cljs.core.vec(inst_44824);
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44860__$1,(11),out,inst_44838);
} else {
if((state_val_44862 === (5))){
var inst_44824 = (state_44860[(7)]);
var inst_44833 = (state_44860[(11)]);
var inst_44825 = (state_44860[(8)]);
var inst_44828 = (state_44860[(9)]);
var inst_44832 = (inst_44824[inst_44825] = inst_44828);
var inst_44833__$1 = (inst_44825 + (1));
var inst_44834 = (inst_44833__$1 < n);
var state_44860__$1 = (function (){var statearr_44910 = state_44860;
(statearr_44910[(12)] = inst_44832);

(statearr_44910[(11)] = inst_44833__$1);

return statearr_44910;
})();
if(cljs.core.truth_(inst_44834)){
var statearr_44911_46420 = state_44860__$1;
(statearr_44911_46420[(1)] = (8));

} else {
var statearr_44912_46421 = state_44860__$1;
(statearr_44912_46421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (14))){
var inst_44853 = (state_44860[(2)]);
var inst_44854 = cljs.core.async.close_BANG_(out);
var state_44860__$1 = (function (){var statearr_44914 = state_44860;
(statearr_44914[(13)] = inst_44853);

return statearr_44914;
})();
var statearr_44915_46423 = state_44860__$1;
(statearr_44915_46423[(2)] = inst_44854);

(statearr_44915_46423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (10))){
var inst_44844 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44916_46424 = state_44860__$1;
(statearr_44916_46424[(2)] = inst_44844);

(statearr_44916_46424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (8))){
var inst_44824 = (state_44860[(7)]);
var inst_44833 = (state_44860[(11)]);
var tmp44913 = inst_44824;
var inst_44824__$1 = tmp44913;
var inst_44825 = inst_44833;
var state_44860__$1 = (function (){var statearr_44920 = state_44860;
(statearr_44920[(7)] = inst_44824__$1);

(statearr_44920[(8)] = inst_44825);

return statearr_44920;
})();
var statearr_44922_46425 = state_44860__$1;
(statearr_44922_46425[(2)] = null);

(statearr_44922_46425[(1)] = (2));


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
});})(c__42006__auto___46401,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46401,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_44927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44927[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_44927[(1)] = (1));

return statearr_44927;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44860){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44860);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e44930){var ex__41736__auto__ = e44930;
var statearr_44932_46431 = state_44860;
(statearr_44932_46431[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44860[(4)]))){
var statearr_44934_46432 = state_44860;
(statearr_44934_46432[(1)] = cljs.core.first((state_44860[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46433 = state_44860;
state_44860 = G__46433;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46401,out))
})();
var state__42008__auto__ = (function (){var statearr_44937 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_44937[(6)] = c__42006__auto___46401);

return statearr_44937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46401,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44942 = arguments.length;
switch (G__44942) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42006__auto___46441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__42006__auto___46441,out){
return (function (){
var f__42007__auto__ = (function (){var switch__41732__auto__ = ((function (c__42006__auto___46441,out){
return (function (state_44990){
var state_val_44991 = (state_44990[(1)]);
if((state_val_44991 === (7))){
var inst_44986 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_44999_46444 = state_44990__$1;
(statearr_44999_46444[(2)] = inst_44986);

(statearr_44999_46444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (1))){
var inst_44946 = [];
var inst_44947 = inst_44946;
var inst_44948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44990__$1 = (function (){var statearr_45000 = state_44990;
(statearr_45000[(7)] = inst_44947);

(statearr_45000[(8)] = inst_44948);

return statearr_45000;
})();
var statearr_45001_46447 = state_44990__$1;
(statearr_45001_46447[(2)] = null);

(statearr_45001_46447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (4))){
var inst_44951 = (state_44990[(9)]);
var inst_44951__$1 = (state_44990[(2)]);
var inst_44952 = (inst_44951__$1 == null);
var inst_44953 = cljs.core.not(inst_44952);
var state_44990__$1 = (function (){var statearr_45002 = state_44990;
(statearr_45002[(9)] = inst_44951__$1);

return statearr_45002;
})();
if(inst_44953){
var statearr_45003_46448 = state_44990__$1;
(statearr_45003_46448[(1)] = (5));

} else {
var statearr_45005_46450 = state_44990__$1;
(statearr_45005_46450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (15))){
var inst_44980 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_45009_46451 = state_44990__$1;
(statearr_45009_46451[(2)] = inst_44980);

(statearr_45009_46451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (13))){
var state_44990__$1 = state_44990;
var statearr_45012_46453 = state_44990__$1;
(statearr_45012_46453[(2)] = null);

(statearr_45012_46453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (6))){
var inst_44947 = (state_44990[(7)]);
var inst_44975 = inst_44947.length;
var inst_44976 = (inst_44975 > (0));
var state_44990__$1 = state_44990;
if(cljs.core.truth_(inst_44976)){
var statearr_45013_46454 = state_44990__$1;
(statearr_45013_46454[(1)] = (12));

} else {
var statearr_45014_46455 = state_44990__$1;
(statearr_45014_46455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (3))){
var inst_44988 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44990__$1,inst_44988);
} else {
if((state_val_44991 === (12))){
var inst_44947 = (state_44990[(7)]);
var inst_44978 = cljs.core.vec(inst_44947);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44990__$1,(15),out,inst_44978);
} else {
if((state_val_44991 === (2))){
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44990__$1,(4),ch);
} else {
if((state_val_44991 === (11))){
var inst_44955 = (state_44990[(10)]);
var inst_44951 = (state_44990[(9)]);
var inst_44965 = (state_44990[(2)]);
var inst_44968 = [];
var inst_44969 = inst_44968.push(inst_44951);
var inst_44947 = inst_44968;
var inst_44948 = inst_44955;
var state_44990__$1 = (function (){var statearr_45023 = state_44990;
(statearr_45023[(11)] = inst_44969);

(statearr_45023[(12)] = inst_44965);

(statearr_45023[(7)] = inst_44947);

(statearr_45023[(8)] = inst_44948);

return statearr_45023;
})();
var statearr_45024_46460 = state_44990__$1;
(statearr_45024_46460[(2)] = null);

(statearr_45024_46460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (9))){
var inst_44947 = (state_44990[(7)]);
var inst_44963 = cljs.core.vec(inst_44947);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44990__$1,(11),out,inst_44963);
} else {
if((state_val_44991 === (5))){
var inst_44955 = (state_44990[(10)]);
var inst_44948 = (state_44990[(8)]);
var inst_44951 = (state_44990[(9)]);
var inst_44955__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44951) : f.call(null,inst_44951));
var inst_44956 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44955__$1,inst_44948);
var inst_44957 = cljs.core.keyword_identical_QMARK_(inst_44948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44958 = ((inst_44956) || (inst_44957));
var state_44990__$1 = (function (){var statearr_45027 = state_44990;
(statearr_45027[(10)] = inst_44955__$1);

return statearr_45027;
})();
if(cljs.core.truth_(inst_44958)){
var statearr_45028_46461 = state_44990__$1;
(statearr_45028_46461[(1)] = (8));

} else {
var statearr_45029_46462 = state_44990__$1;
(statearr_45029_46462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (14))){
var inst_44983 = (state_44990[(2)]);
var inst_44984 = cljs.core.async.close_BANG_(out);
var state_44990__$1 = (function (){var statearr_45032 = state_44990;
(statearr_45032[(13)] = inst_44983);

return statearr_45032;
})();
var statearr_45033_46463 = state_44990__$1;
(statearr_45033_46463[(2)] = inst_44984);

(statearr_45033_46463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (10))){
var inst_44973 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_45038_46464 = state_44990__$1;
(statearr_45038_46464[(2)] = inst_44973);

(statearr_45038_46464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (8))){
var inst_44947 = (state_44990[(7)]);
var inst_44955 = (state_44990[(10)]);
var inst_44951 = (state_44990[(9)]);
var inst_44960 = inst_44947.push(inst_44951);
var tmp45030 = inst_44947;
var inst_44947__$1 = tmp45030;
var inst_44948 = inst_44955;
var state_44990__$1 = (function (){var statearr_45041 = state_44990;
(statearr_45041[(14)] = inst_44960);

(statearr_45041[(7)] = inst_44947__$1);

(statearr_45041[(8)] = inst_44948);

return statearr_45041;
})();
var statearr_45043_46466 = state_44990__$1;
(statearr_45043_46466[(2)] = null);

(statearr_45043_46466[(1)] = (2));


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
});})(c__42006__auto___46441,out))
;
return ((function (switch__41732__auto__,c__42006__auto___46441,out){
return (function() {
var cljs$core$async$state_machine__41733__auto__ = null;
var cljs$core$async$state_machine__41733__auto____0 = (function (){
var statearr_45046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45046[(0)] = cljs$core$async$state_machine__41733__auto__);

(statearr_45046[(1)] = (1));

return statearr_45046;
});
var cljs$core$async$state_machine__41733__auto____1 = (function (state_44990){
while(true){
var ret_value__41734__auto__ = (function (){try{while(true){
var result__41735__auto__ = switch__41732__auto__(state_44990);
if(cljs.core.keyword_identical_QMARK_(result__41735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41735__auto__;
}
break;
}
}catch (e45053){var ex__41736__auto__ = e45053;
var statearr_45054_46467 = state_44990;
(statearr_45054_46467[(2)] = ex__41736__auto__);


if(cljs.core.seq((state_44990[(4)]))){
var statearr_45060_46468 = state_44990;
(statearr_45060_46468[(1)] = cljs.core.first((state_44990[(4)])));

} else {
throw ex__41736__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46469 = state_44990;
state_44990 = G__46469;
continue;
} else {
return ret_value__41734__auto__;
}
break;
}
});
cljs$core$async$state_machine__41733__auto__ = function(state_44990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41733__auto____1.call(this,state_44990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41733__auto____0;
cljs$core$async$state_machine__41733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41733__auto____1;
return cljs$core$async$state_machine__41733__auto__;
})()
;})(switch__41732__auto__,c__42006__auto___46441,out))
})();
var state__42008__auto__ = (function (){var statearr_45067 = (f__42007__auto__.cljs$core$IFn$_invoke$arity$0 ? f__42007__auto__.cljs$core$IFn$_invoke$arity$0() : f__42007__auto__.call(null));
(statearr_45067[(6)] = c__42006__auto___46441);

return statearr_45067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42008__auto__);
});})(c__42006__auto___46441,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
