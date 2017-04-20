function niceIn(n) {
	n.find(".praisenum").addClass("niceIn").css("color", "red");setTimeout(function() {
		n.find(".praisenum").css("color", "#45BCF9").removeClass("niceIn")
	}, 1e3)
}
function update() {
	var t,
		i,
		r,
		n;
	if (active ? (t = -Math.min(Math.max(-mouseY, -size), size) / radius * tspeed, i = Math.min(Math.max(-mouseX, -size), size) / radius * tspeed) : (t = lasta * .98, i = lastb * .98), lasta = t, lastb = i, !(Math.abs(t) <= .01) || !(Math.abs(i) <= .01)) {
		for (r = 0, sineCosine(t, i, r), n = 0; n < mcList.length; n++) {
			var u = mcList[n].cx,
				l = mcList[n].cy * ca + mcList[n].cz * -sa,
				f = mcList[n].cy * sa + mcList[n].cz * ca,
				e = u * cb + f * sb,
				o = l,
				a = u * -sb + f * cb,
				s = e * cc + o * -sc,
				h = e * sc + o * cc,
				c = a;
			mcList[n].cx = s;
			mcList[n].cy = h;
			mcList[n].cz = c;
			per = d / (d + c);
			mcList[n].x = howElliptical * s * per - howElliptical * 2;
			mcList[n].y = h * per;
			mcList[n].scale = per;
			mcList[n].alpha = per;
			mcList[n].alpha = (mcList[n].alpha - .6) * (10 / 6)
		}
		doPosition();depthSort()
	}
}
function depthSort() {
	for (var n = 0, t = [], n = 0; n < aA.length; n++) t.push(aA[n]);
	for (t.sort(function(n, t) {
			return n.cz > t.cz ? -1 : n.cz < t.cz ? 1 : 0
		}), n = 0; n < t.length; n++) t[n].style.zIndex = n
}
function positionAll() {
	for (var t = 0, i = 0, u = mcList.length, n = 0, r = [], f = document.createDocumentFragment(), n = 0; n < aA.length; n++) r.push(aA[n]);
	for (r.sort(function() {
			return Math.random() < .5 ? 1 : -1
		}), n = 0; n < r.length; n++) f.appendChild(r[n]);
	for (oDiv.appendChild(f), n = 1; n < u + 1; n++) distr ? (t = Math.acos(-1 + (2 * n - 1) / u), i = Math.sqrt(u * Math.PI) * t) : (t = Math.random() * Math.PI, i = Math.random() * 2 * Math.PI), mcList[n - 1].cx = radius * Math.cos(i) * Math.sin(t), mcList[n - 1].cy = radius * Math.sin(i) * Math.sin(t), mcList[n - 1].cz = radius * Math.cos(t), aA[n - 1].style.left = mcList[n - 1].cx + oDiv.offsetWidth / 2 - mcList[n - 1].offsetWidth / 2 + "px", aA[n - 1].style.top = mcList[n - 1].cy + oDiv.offsetHeight / 2 - mcList[n - 1].offsetHeight / 2 + "px"
}
function doPosition() {
	for (var t = oDiv.offsetWidth / 2, i = oDiv.offsetHeight / 2, n = 0; n < mcList.length; n++) aA[n].style.left = mcList[n].cx + t - mcList[n].offsetWidth / 2 + "px", aA[n].style.top = mcList[n].cy + i - mcList[n].offsetHeight / 2 + "px", aA[n].style.fontSize = Math.ceil(6 * mcList[n].scale) + 8 + "px", aA[n].style.filter = "alpha(opacity=" + 100 * mcList[n].alpha + ")", aA[n].style.opacity = mcList[n].alpha
}
function sineCosine(n, t, i) {
	sa = Math.sin(n * dtr);
	ca = Math.cos(n * dtr);
	sb = Math.sin(t * dtr);
	cb = Math.cos(t * dtr);
	sc = Math.sin(i * dtr);
	cc = Math.cos(i * dtr)
}
if (function(n, t) {
		"use strict";
		function yt(n) {
			var t = n.length,
				r = i.type(n);
			return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
		}
		function rf(n) {
			var t = ii[n] = {};
			return i.each(n.match(o) || [], function(n, i) {
					t[i] = !0
				}), t
		}
		function pi(n, r, u, f) {
			if (i.acceptData(n)) {
				var s,
					h,
					c = i.expando,
					a = "string" == typeof r,
					l = n.nodeType,
					o = l ? i.cache : n,
					e = l ? n[c] : n[c] && c;
				if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = w.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), ("object" == typeof r || "function" == typeof r) && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], null == h && (h = s[i.camelCase(r)])) : h = s, h
			}
		}
		function wi(n, t, r) {
			if (i.acceptData(n)) {
				var e,
					o,
					h,
					s = n.nodeType,
					u = s ? i.cache : n,
					f = s ? n[i.expando] : i.expando;
				if (u[f]) {
					if (t && (e = r ? u[f] : u[f].data)) {
						for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [ t ] : (t = i.camelCase(t), t = (t in e) ? [ t ] : t.split(" ")), o = 0, h = t.length; h > o; o++)
							delete e[t[o]];
						if (!(r ? pt : i.isEmptyObject)(e)) return
					}
					(r || (
					delete u[f].data
					, pt(u[f]))) && (s ? i.cleanData([ n ], !0) : i.support.deleteExpando || u != u.window ?
						delete u[f]
						: u[f] = null)
				}
			}
		}
		function bi(n, r, u) {
			if (u === t && 1 === n.nodeType) {
				var f = "data-" + r.replace(nu, "-$1").toLowerCase();
				if (u = n.getAttribute(f), "string" == typeof u) {
					try {
						u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : gr.test(u) ? i.parseJSON(u) : u
					} catch (e) {} i.data(n, r, u)
				} else
					u = t
			}
			return u
		}
		function pt(n) {
			var t;
			for (t in n)
				if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
			return !0
		}
		function rt() {
			return !0
		}
		function p() {
			return !1
		}
		function ki(n, t) {
			do n = n[t]; while (n && 1 !== n.nodeType);
			return n
		}
		function di(n, t, r) {
			if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
					var u = !!t.call(n, i, n);
					return u === r
				});
			if (t.nodeType) return i.grep(n, function(n) {
					return n === t === r
				});
			if ("string" == typeof t) {
				var u = i.grep(n, function(n) {
					return 1 === n.nodeType
				});
				if (ae.test(t)) return i.filter(t, u, !r);
				t = i.filter(t, u)
			}
			return i.grep(n, function(n) {
				return i.inArray(n, t) >= 0 === r
			})
		}
		function gi(n) {
			var i = eu.split("|"),
				t = n.createDocumentFragment();
			if (t.createElement)
				for (; i.length;) t.createElement(i.pop());
			return t
		}
		function uf(n, t) {
			return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
		}
		function nr(n) {
			var t = n.getAttributeNode("type");
			return n.type = (t && t.specified) + "/" + n.type, n
		}
		function tr(n) {
			var t = ke.exec(n.type);
			return t ? n.type = t[1] : n.removeAttribute("type"), n
		}
		function wt(n, t) {
			for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
		}
		function ir(n, t) {
			if (1 === t.nodeType && i.hasData(n)) {
				var u,
					f,
					o,
					s = i._data(n),
					r = i._data(t, s),
					e = s.events;
				if (e) {
					delete r.handle;
					r.events = {};
					for (u in e)
						for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
				}
				r.data && (r.data = i.extend({}, r.data))
			}
		}
		function ff(n, t) {
			var r,
				u,
				f;
			if (1 === t.nodeType) {
				if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
					u = i._data(t);
					for (f in u.events) i.removeEvent(t, f, u.handle);
					t.removeAttribute(i.expando)
				}
				"script" === r && t.text !== n.text ? (nr(t).text = n.text, tr(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && si.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
			}
		}
		function u(n, r) {
			var o,
				e,
				s = 0,
				f = n.getElementsByTagName !== t ? n.getElementsByTagName(r || "*") : n.querySelectorAll !== t ? n.querySelectorAll(r || "*") : t;
			if (!f)
				for (f = [], o = n.childNodes || n; null != (e = o[s]); s++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
			return r === t || r && i.nodeName(n, r) ? i.merge([ n ], f) : f
		}
		function ef(n) {
			si.test(n.type) && (n.defaultChecked = n.checked)
		}
		function rr(n, t) {
			if (t in n) return t;
			for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = pu.length; i--;)
				if (t = pu[i] + r, t in n) return t;
			return u
		}
		function nt(n, t) {
			return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
		}
		function ur(n, t) {
			for (var r, f = [], u = 0, e = n.length; e > u; u++) r = n[u], r.style && (f[u] = i._data(r, "olddisplay"), t ? (f[u] || "none" !== r.style.display || (r.style.display = ""), "" === r.style.display && nt(r) && (f[u] = i._data(r, "olddisplay", sr(r.nodeName)))) : f[u] || nt(r) || i._data(r, "olddisplay", i.css(r, "display")));
			for (u = 0; e > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? f[u] || "" : "none"));
			return n
		}
		function fr(n, t, i) {
			var r = ro.exec(t);
			return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
		}
		function er(n, t, r, u, f) {
			for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + v[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + v[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + v[e] + "Width", !0, f))) : (o += i.css(n, "padding" + v[e], !0, f), "padding" !== r && (o += i.css(n, "border" + v[e] + "Width", !0, f)));
			return o
		}
		function or(n, t, r) {
			var e = !0,
				u = "width" === t ? n.offsetWidth : n.offsetHeight,
				f = a(n),
				o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
			if (0 >= u || null == u) {
				if (u = l(n, t, f), (0 > u || null == u) && (u = n.style[t]), ht.test(u)) return u;
				e = o && (i.support.boxSizingReliable || u === n.style[t]);
				u = parseFloat(u) || 0
			}
			return u + er(n, t, r || (o ? "border" : "content"), e, f) + "px"
		}
		function sr(n) {
			var u = r,
				t = vu[n];
			return t || (t = hr(n, u), "none" !== t && t || (tt = (tt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (tt[0].contentWindow || tt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = hr(n, u), tt.detach()), vu[n] = t), t
		}
		function hr(n, t) {
			var r = i(t.createElement(n)).appendTo(t.body),
				u = i.css(r[0], "display");
			return r.remove(), u
		}
		function bt(n, t, r, u) {
			var f;
			if (i.isArray(t)) i.each(t, function(t, i) {
					r || oo.test(n) ? u(n, i) : bt(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
				});
			else if (r || "object" !== i.type(t)) u(n, t);else
				for (f in t) bt(n + "[" + f + "]", t[f], r, u)
		}
		function cr(n) {
			return function(t, r) {
				"string" != typeof t && (r = t, t = "*");
				var u,
					f = 0,
					e = t.toLowerCase().match(o) || [];
				if (i.isFunction(r))
					for (; u = e[f++];) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
			}
		}
		function lr(n, r, u, f) {
			function e(h) {
				var c;
				return o[h] = !0, i.each(n[h] || [], function(n, i) {
						var h = i(r, u, f);
						return "string" != typeof h || s || o[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), e(h), !1)
					}), c
			}
			var o = {},
				s = n === vi;
			return e(r.dataTypes[0]) || !o["*"] && e("*")
		}
		function kt(n, r) {
			var u,
				f,
				e = i.ajaxSettings.flatOptions || {};
			for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
			return f && i.extend(!0, n, f), n
		}
		function of(n, i, r) {
			var o,
				u,
				e,
				s,
				h = n.contents,
				f = n.dataTypes,
				c = n.responseFields;
			for (u in c) u in r && (i[c[u]] = r[u]);
			for (; "*" === f[0];) f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
			if (o)
				for (u in h)
					if (h[u] && h[u].test(o)) {
						f.unshift(u);break
			}
			if (f[0] in r)
				e = f[0];else {
				for (u in r) {
					if (!f[0] || n.converters[u + " " + f[0]]) {
						e = u;break
					}
					s || (s = u)
				}
				e = e || s
			}
			return e ? (e !== f[0] && f.unshift(e), r[e]) : t
		}
		function sf(n, t) {
			var i,
				o,
				r,
				e,
				u = {},
				h = 0,
				s = n.dataTypes.slice(),
				f = s[0];
			if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
				for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
			for (; r = s[++h];)
				if ("*" !== r) {
					if ("*" !== f && f !== r) {
						if (i = u[f + " " + r] || u["* " + r], !i)
							for (o in u)
								if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]])) {
									i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));break
						}
						if (i !== !0)
							if (i && n.throws)
								t = i(t);else try {
									t = i(t)
								} catch (c) {
									return {
										state : "parsererror",
										error : i ? c : "No conversion from " + f + " to " + r
									}
						}
					}
					f = r
			}
			return {
				state : "success",
				data : t
			}
		}
		function ar() {
			try {
				return new n.XMLHttpRequest
			} catch (t) {}
		}
		function hf() {
			try {
				return new n.ActiveXObject("Microsoft.XMLHTTP")
			} catch (t) {}
		}
		function vr() {
			return setTimeout(function() {
					g = t
				}), g = i.now()
		}
		function cf(n, t) {
			i.each(t, function(t, i) {
				for (var u = (it[t] || []).concat(it["*"]), r = 0, f = u.length; f > r; r++)
					if (u[r].call(n, t, i)) return
			})
		}
		function yr(n, t, r) {
			var h,
				e,
				o = 0,
				l = vt.length,
				f = i.Deferred().always(function() {
					delete c.elem
				}),
				c = function() {
					if (e) return !1;
					for (var s = g || vr(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
					return f.notifyWith(n, [ u, i, t ]), 1 > i && o ? t : (f.resolveWith(n, [ u ]), !1)
				},
				u = f.promise({
					elem : n,
					props : i.extend({}, t),
					opts : i.extend(!0, {
						specialEasing : {}
					}, r),
					originalProperties : t,
					originalOptions : r,
					startTime : g || vr(),
					duration : r.duration,
					tweens : [],
					createTween : function(t, r) {
						var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
						return u.tweens.push(f), f
					},
					stop : function(t) {
						var i = 0,
							r = t ? u.tweens.length : 0;
						if (e) return this;
						for (e = !0; r > i; i++) u.tweens[i].run(1);
						return t ? f.resolveWith(n, [ u, t ]) : f.rejectWith(n, [ u, t ]), this
					}
				}),
				s = u.props;
			for (lf(s, u.opts.specialEasing); l > o; o++)
				if (h = vt[o].call(u, n, s, u.opts)) return h;
			return cf(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
					elem : n,
					anim : u,
					queue : u.opts.queue
				})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}
		function lf(n, t) {
			var r,
				f,
				e,
				u,
				o;
			for (r in n)
				if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u,
					delete n[r]
					), o = i.cssHooks[f], o && "expand" in o) {
					u = o.expand(u);
					delete n[f];
					for (r in u) r in n || (n[r] = u[r], t[r] = e)
				} else
					t[f] = e
		}
		function af(n, t, r) {
			var o,
				u,
				a,
				w,
				s,
				v,
				l,
				f,
				b,
				h = this,
				e = n.style,
				y = {},
				p = [],
				c = n.nodeType && nt(n);
			r.queue || (f = i._queueHooks(n, "fx"), null == f.unqueued && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
				f.unqueued || b()
			}), f.unqueued++, h.always(function() {
				h.always(function() {
					f.unqueued--;i.queue(n, "fx").length || f.empty.fire()
				})
			}));1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [ e.overflow, e.overflowX, e.overflowY ], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== sr(n.nodeName) ? e.zoom = 1 : e.display = "inline-block"));r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.done(function() {
				e.overflow = r.overflow[0];
				e.overflowX = r.overflow[1];
				e.overflowY = r.overflow[2]
			}));
			for (o in t)
				if (a = t[o], yo.exec(a)) {
					if (
						delete t[o]
						, v = v || "toggle" === a, a === (c ? "hide" : "show")) continue;
					p.push(o)
			}
			if (w = p.length)
				for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), v && (s.hidden = !c), c ? i(n).show() : h.done(function() {
						i(n).hide()
					}), h.done(function() {
						var t;
						i._removeData(n, "fxshow");
						for (t in y) i.style(n, t, y[t])
					}), o = 0;w > o; o++) u = p[o], l = h.createTween(u, c ? s[u] : 0), y[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = "width" === u || "height" === u ? 1 : 0))
		}
		function f(n, t, i, r, u) {
			return new f.prototype.init(n, t, i, r, u)
		}
		function ut(n, t) {
			var r,
				i = {
					height : n
				},
				u = 0;
			for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = v[u], i["margin" + r] = i["padding" + r] = n;
			return t && (i.opacity = i.width = n), i
		}
		function pr(n) {
			return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
		}
		var wr,
			ft,
			r = n.document,
			vf = n.location,
			yf = n.jQuery,
			pf = n.$,
			et = {},
			w = [],
			dt = "1.9.0",
			br = w.concat,
			gt = w.push,
			h = w.slice,
			kr = w.indexOf,
			wf = et.toString,
			ni = et.hasOwnProperty,
			ti = dt.trim,
			i = function(n, t) {
				return new i.fn.init(n, t, wr)
			},
			ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			o = /\S+/g,
			bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			kf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			dr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			df = /^[\],:{}\s]*$/,
			gf = /(?:^|:|,)(?:\s*\[)+/g,
			ne = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			te = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
			ie = /^-ms-/,
			re = /-([\da-z])/gi,
			ue = function(n, t) {
				return t.toUpperCase()
			},
			st = function() {
				r.addEventListener ? (r.removeEventListener("DOMContentLoaded", st, !1), i.ready()) : "complete" === r.readyState && (r.detachEvent("onreadystatechange", st), i.ready())
			},
			ii,
			gr,
			nu,
			yi,
			ct,
			k,
			d,
			tf,
			lt;
		i.fn = i.prototype = {
			jquery : dt,
			constructor : i,
			init : function(n, u, f) {
				var e,
					o;
				if (!n) return this;
				if ("string" == typeof n) {
					if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [ null, n, null ] : kf.exec(n), !e || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
					if (e[1]) {
						if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), dr.test(e[1]) && i.isPlainObject(u))
							for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
						return this
					}
					if (o = r.getElementById(e[2]), o && o.parentNode) {
						if (o.id !== e[2]) return f.find(n);
						this.length = 1;
						this[0] = o
					}
					return this.context = r, this.selector = n, this
				}
				return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
			},
			selector : "",
			length : 0,
			size : function() {
				return this.length
			},
			toArray : function() {
				return h.call(this)
			},
			get : function(n) {
				return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
			},
			pushStack : function(n) {
				var t = i.merge(this.constructor(), n);
				return t.prevObject = this, t.context = this.context, t
			},
			each : function(n, t) {
				return i.each(this, n, t)
			},
			ready : function(n) {
				return i.ready.promise().done(n), this
			},
			slice : function() {
				return this.pushStack(h.apply(this, arguments))
			},
			first : function() {
				return this.eq(0)
			},
			last : function() {
				return this.eq(-1)
			},
			eq : function(n) {
				var i = this.length,
					t = +n + (0 > n ? i : 0);
				return this.pushStack(t >= 0 && i > t ? [ this[t] ] : [])
			},
			map : function(n) {
				return this.pushStack(i.map(this, function(t, i) {
					return n.call(t, i, t)
				}))
			},
			end : function() {
				return this.prevObject || this.constructor(null)
			},
			push : gt,
			sort : [].sort,
			splice : [].splice
		};
		i.fn.init.prototype = i.fn;
		i.extend = i.fn.extend = function() {
			var o,
				e,
				u,
				r,
				s,
				h,
				n = arguments[0] || {},
				f = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
				if (null != (o = arguments[f]))
					for (e in o) u = n[e], r = o[e], n !== r && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
			return n
		};i.extend({
			noConflict : function(t) {
				return n.$ === i && (n.$ = pf), t && n.jQuery === i && (n.jQuery = yf), i
			},
			isReady : !1,
			readyWait : 1,
			holdReady : function(n) {
				n ? i.readyWait++ : i.ready(!0)
			},
			ready : function(n) {
				if (n === !0 ? !--i.readyWait : !i.isReady) {
					if (!r.body) return setTimeout(i.ready);
					i.isReady = !0;n !== !0 && --i.readyWait > 0 || (ft.resolveWith(r, [ i ]), i.fn.trigger && i(r).trigger("ready").off("ready"))
				}
			},
			isFunction : function(n) {
				return "function" === i.type(n)
			},
			isArray : Array.isArray || function(n) {
					return "array" === i.type(n)
			},
			isWindow : function(n) {
				return null != n && n == n.window
			},
			isNumeric : function(n) {
				return !isNaN(parseFloat(n)) && isFinite(n)
			},
			type : function(n) {
				return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? et[wf.call(n)] || "object" : typeof n
			},
			isPlainObject : function(n) {
				if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
				try {
					if (n.constructor && !ni.call(n, "constructor") && !ni.call(n.constructor.prototype, "isPrototypeOf")) return !1
				} catch (u) {
					return !1
				}
				var r;
				for (r in n)
					;
				return r === t || ni.call(n, r)
			},
			isEmptyObject : function(n) {
				var t;
				for (t in n) return !1;
				return !0
			},
			error : function(n) {
				throw Error(n);
			},
			parseHTML : function(n, t, u) {
				if (!n || "string" != typeof n) return null;
				"boolean" == typeof t && (u = t, t = !1);
				t = t || r;
				var f = dr.exec(n),
					e = !u && [];
				return f ? [ t.createElement(f[1]) ] : (f = i.buildFragment([ n ], t, e), e && i(e).remove(), i.merge([], f.childNodes))
			},
			parseJSON : function(r) {
				return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r), r && df.test(r.replace(ne, "@").replace(te, "]").replace(gf, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t)
			},
			parseXML : function(r) {
				var u,
					f;
				if (!r || "string" != typeof r) return null;
				try {
					n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
				} catch (e) {
					u = t
				} return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
			},
			noop : function() {},
			globalEval : function(t) {
				t && i.trim(t) && (n.execScript || function(t) {
					n.eval.call(n, t)
				})(t)
			},
			camelCase : function(n) {
				return n.replace(ie, "ms-").replace(re, ue)
			},
			nodeName : function(n, t) {
				return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
			},
			each : function(n, t, i) {
				var u,
					r = 0,
					f = n.length,
					e = yt(n);
				if (i) {
					if (e)
						for (; f > r && (u = t.apply(n[r], i), u !== !1); r++)
							;
					else
						for (r in n)
							if (u = t.apply(n[r], i), u === !1) break
				} else if (e)
					for (; f > r && (u = t.call(n[r], r, n[r]), u !== !1); r++)
						;
				else
					for (r in n)
						if (u = t.call(n[r], r, n[r]), u === !1) break;
				return n
			},
			trim : ti && !ti.call("﻿ ") ? function(n) {
				return null == n ? "" : ti.call(n)
			} : function(n) {
				return null == n ? "" : (n + "").replace(bf, "")
			},
			makeArray : function(n, t) {
				var r = t || [];
				return null != n && (yt(Object(n)) ? i.merge(r, "string" == typeof n ? [ n ] : n) : gt.call(r, n)), r
			},
			inArray : function(n, t, i) {
				var r;
				if (t) {
					if (kr) return kr.call(t, n, i);
					for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
						if (i in t && t[i] === n) return i
				}
				return -1
			},
			merge : function(n, i) {
				var f = i.length,
					u = n.length,
					r = 0;
				if ("number" == typeof f)
					for (; f > r; r++) n[u++] = i[r];
				else
					for (; i[r] !== t;) n[u++] = i[r++];
				return n.length = u, n
			},
			grep : function(n, t, i) {
				var u,
					f = [],
					r = 0,
					e = n.length;
				for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
				return f
			},
			map : function(n, t, i) {
				var u,
					r = 0,
					e = n.length,
					o = yt(n),
					f = [];
				if (o)
					for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
				else
					for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u);
				return br.apply([], f)
			},
			guid : 1,
			proxy : function(n, r) {
				var f,
					e,
					u;
				return "string" == typeof r && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = h.call(arguments, 2), u = function() {
						return n.apply(r || this, e.concat(h.call(arguments)))
					}, u.guid = n.guid = n.guid || i.guid++, u) : t
			},
			access : function(n, r, u, f, e, o, s) {
				var h = 0,
					l = n.length,
					c = null == u;
				if ("object" === i.type(u)) {
					e = !0;
					for (h in u) i.access(n, r, h, u[h], !0, o, s)
				} else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
						return c.call(i(n), r)
					})), r))
					for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
				return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
			},
			now : function() {
				return (new Date).getTime()
			}
		});
		i.ready.promise = function(t) {
			if (!ft)
				if (ft = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
				else if (r.addEventListener) r.addEventListener("DOMContentLoaded", st, !1), n.addEventListener("load", i.ready, !1);else {
					r.attachEvent("onreadystatechange", st);n.attachEvent("onload", i.ready);
					var u = !1;
					try {
						u = null == n.frameElement && r.documentElement
					} catch (e) {} u && u.doScroll && function f() {
						if (!i.isReady) {
							try {
								u.doScroll("left")
							} catch (n) {
								return setTimeout(f, 50)
							} i.ready()
						}
					}()
			}
			return ft.promise(t)
		};i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
			et["[object " + t + "]"] = t.toLowerCase()
		});
		wr = i(r);
		ii = {};
		i.Callbacks = function(n) {
			n = "string" == typeof n ? ii[n] || rf(n) : i.extend({}, n);
			var f,
				c,
				o,
				l,
				s,
				e,
				r = [],
				u = !n.once && [],
				a = function(t) {
					for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && s > e; e++)
						if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
							f = !1;break
					}
					o = !1;r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
				},
				h = {
					add : function() {
						if (r) {
							var t = r.length;
							(function u(t) {
								i.each(t, function(t, f) {
									var e = i.type(f);
									"function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
								})
							})(arguments);
							o ? s = r.length : f && (l = t, a(f))
						}
						return this
					},
					remove : function() {
						return r && i.each(arguments, function(n, t) {
								for (var u; (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (s >= u && s--, e >= u && e--)
							}), this
					},
					has : function(n) {
						return i.inArray(n, r) > -1
					},
					empty : function() {
						return r = [], this
					},
					disable : function() {
						return r = u = f = t, this
					},
					disabled : function() {
						return !r
					},
					lock : function() {
						return u = t, f || h.disable(), this
					},
					locked : function() {
						return !u
					},
					fireWith : function(n, t) {
						return t = t || [], t = [ n, t.slice ? t.slice() : t ], !r || c && !u || (o ? u.push(t) : a(t)), this
					},
					fire : function() {
						return h.fireWith(this, arguments), this
					},
					fired : function() {
						return !!c
					}
				};
			return h
		};i.extend({
			Deferred : function(n) {
				var u = [ [ "resolve", "done", i.Callbacks("once memory"), "resolved" ], [ "reject", "fail", i.Callbacks("once memory"), "rejected" ], [ "notify", "progress", i.Callbacks("memory") ] ],
					f = "pending",
					r = {
						state : function() {
							return f
						},
						always : function() {
							return t.done(arguments).fail(arguments), this
						},
						then : function() {
							var n = arguments;
							return i.Deferred(function(f) {
								i.each(u, function(u, e) {
									var s = e[0],
										o = i.isFunction(n[u]) && n[u];
									t[e[1]](function() {
										var n = o && o.apply(this, arguments);
										n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [ n ] : arguments)
									})
								});
								n = null
							}).promise()
						},
						promise : function(n) {
							return null != n ? i.extend(n, r) : r
						}
					},
					t = {};
				return r.pipe = r.then, i.each(u, function(n, i) {
						var e = i[2],
							o = i[3];
						r[i[1]] = e.add;o && e.add(function() {
							f = o
						}, u[1 ^ n][2].disable, u[2][2].lock);
						t[i[0]] = function() {
							return t[i[0] + "With"](this === t ? r : this, arguments), this
						};
						t[i[0] + "With"] = e.fireWith
					}), r.promise(t), n && n.call(t, t), t
			},
			when : function(n) {
				var o,
					c,
					s,
					t = 0,
					u = h.call(arguments),
					r = u.length,
					e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
					f = 1 === e ? n : i.Deferred(),
					l = function(n, t, i) {
						return function(r) {
							t[n] = this;
							i[n] = arguments.length > 1 ? h.call(arguments) : r;
							i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
						}
					};
				if (r > 1)
					for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(l(t, s, u)).fail(f.reject).progress(l(t, c, o)) : --e;
				return e || f.resolveWith(s, u), f.promise()
			}
		});
		i.support = function() {
			var f,
				s,
				o,
				h,
				c,
				e,
				l,
				a,
				y,
				v,
				u = r.createElement("div");
			if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", s = u.getElementsByTagName("*"), o = u.getElementsByTagName("a")[0], !s || !o || !s.length) return {};
			h = r.createElement("select");
			c = h.appendChild(r.createElement("option"));
			e = u.getElementsByTagName("input")[0];
			o.style.cssText = "top:1px;float:left;opacity:.5";
			f = {
				getSetAttribute : "t" !== u.className,
				leadingWhitespace : 3 === u.firstChild.nodeType,
				tbody : !u.getElementsByTagName("tbody").length,
				htmlSerialize : !!u.getElementsByTagName("link").length,
				style : /top/.test(o.getAttribute("style")),
				hrefNormalized : "/a" === o.getAttribute("href"),
				opacity : /^0.5/.test(o.style.opacity),
				cssFloat : !!o.style.cssFloat,
				checkOn : !!e.value,
				optSelected : c.selected,
				enctype : !!r.createElement("form").enctype,
				html5Clone : "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
				boxModel : "CSS1Compat" === r.compatMode,
				deleteExpando : !0,
				noCloneEvent : !0,
				inlineBlockNeedsLayout : !1,
				shrinkWrapBlocks : !1,
				reliableMarginRight : !0,
				boxSizingReliable : !0,
				pixelPosition : !1
			};
			e.checked = !0;
			f.noCloneChecked = e.cloneNode(!0).checked;
			h.disabled = !0;
			f.optDisabled = !c.disabled;try {
				delete u.test
			} catch (p) {
				f.deleteExpando = !1
			}
			e = r.createElement("input");e.setAttribute("value", "");
			f.input = "" === e.getAttribute("value");
			e.value = "t";e.setAttribute("type", "radio");
			f.radioValue = "t" === e.value;e.setAttribute("checked", "t");e.setAttribute("name", "t");
			l = r.createDocumentFragment();l.appendChild(e);
			f.appendChecked = e.checked;
			f.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked;u.attachEvent && (u.attachEvent("onclick", function() {
				f.noCloneEvent = !1
			}), u.cloneNode(!0).click());
			for (v in {submit : !0, change : !0, focusin : !0}) u.setAttribute(a = "on" + v, "t"), f[v + "Bubbles"] = a in n || u.attributes[a].expando === !1;
			return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, i(function() {
					var o,
						e,
						i,
						h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
						s = r.getElementsByTagName("body")[0];
					s && (o = r.createElement("div"), o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(o).appendChild(u), u.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", i = u.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", f.reliableHiddenOffsets = y && 0 === i[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", f.boxSizing = 4 === u.offsetWidth, f.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, n.getComputedStyle && (f.pixelPosition = "1%" !== (n.getComputedStyle(u, null) || {}).top, f.boxSizingReliable = "4px" === (n.getComputedStyle(u, null) || {
						width : "4px"
					}).width, e = u.appendChild(r.createElement("div")), e.style.cssText = u.style.cssText = h, e.style.marginRight = e.style.width = "0", u.style.width = "1px", f.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), u.style.zoom !== t && (u.innerHTML = "", u.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", f.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div><\/div>", u.firstChild.style.width = "5px", f.shrinkWrapBlocks = 3 !== u.offsetWidth, s.style.zoom = 1), s.removeChild(o), o = u = i = e = null)
				}), s = h = l = c = o = e = null, f
		}();
		gr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
		nu = /([A-Z])/g;i.extend({
			cache : {},
			expando : "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
			noData : {
				embed : !0,
				object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
				applet : !0
			},
			hasData : function(n) {
				return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !pt(n)
			},
			data : function(n, t, i) {
				return pi(n, t, i, !1)
			},
			removeData : function(n, t) {
				return wi(n, t, !1)
			},
			_data : function(n, t, i) {
				return pi(n, t, i, !0)
			},
			_removeData : function(n, t) {
				return wi(n, t, !0)
			},
			acceptData : function(n) {
				var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
				return !t || t !== !0 && n.getAttribute("classid") === t
			}
		});i.fn.extend({
			data : function(n, r) {
				var e,
					f,
					u = this[0],
					o = 0,
					s = null;
				if (n === t) {
					if (this.length && (s = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
						for (e = u.attributes; e.length > o; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.substring(5)), bi(u, f, s[f]));
						i._data(u, "parsedAttrs", !0)
					}
					return s
				}
				return "object" == typeof n ? this.each(function() {
					i.data(this, n)
				}) : i.access(this, function(r) {
					return r === t ? u ? bi(u, n, i.data(u, n)) : null : (this.each(function() {
						i.data(this, n, r)
					}), t)
				}, null, r, arguments.length > 1, null, !0)
			},
			removeData : function(n) {
				return this.each(function() {
					i.removeData(this, n)
				})
			}
		});i.extend({
			queue : function(n, r, u) {
				var f;
				return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t
			},
			dequeue : function(n, t) {
				t = t || "fx";
				var f = i.queue(n, t),
					e = f.length,
					r = f.shift(),
					u = i._queueHooks(n, t),
					o = function() {
						i.dequeue(n, t)
					};
				"inprogress" === r && (r = f.shift(), e--);
				u.cur = r;r && ("fx" === t && f.unshift("inprogress"),
				delete u.stop
				, r.call(n, o, u));!e && u && u.empty.fire()
			},
			_queueHooks : function(n, t) {
				var r = t + "queueHooks";
				return i._data(n, r) || i._data(n, r, {
						empty : i.Callbacks("once memory").add(function() {
							i._removeData(n, t + "queue");i._removeData(n, r)
						})
					})
			}
		});i.fn.extend({
			queue : function(n, r) {
				var u = 2;
				return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
						var t = i.queue(this, n, r);
						i._queueHooks(this, n);"fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
					})
			},
			dequeue : function(n) {
				return this.each(function() {
					i.dequeue(this, n)
				})
			},
			delay : function(n, t) {
				return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
						var r = setTimeout(t, n);
						i.stop = function() {
							clearTimeout(r)
						}
					})
			},
			clearQueue : function(n) {
				return this.queue(n || "fx", [])
			},
			promise : function(n, r) {
				var u,
					e = 1,
					o = i.Deferred(),
					f = this,
					s = this.length,
					h = function() {
						--e || o.resolveWith(f, [ f ])
					};
				for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
				return h(), o.promise(r)
			}
		});
		var b,
			tu,
			ri = /[\t\r\n]/g,
			fe = /\r/g,
			ee = /^(?:input|select|textarea|button|object)$/i,
			oe = /^(?:a|area)$/i,
			iu = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
			ui = /^(?:checked|selected)$/i,
			c = i.support.getSetAttribute,
			fi = i.support.input;
		i.fn.extend({
			attr : function(n, t) {
				return i.access(this, i.attr, n, t, arguments.length > 1)
			},
			removeAttr : function(n) {
				return this.each(function() {
					i.removeAttr(this, n)
				})
			},
			prop : function(n, t) {
				return i.access(this, i.prop, n, t, arguments.length > 1)
			},
			removeProp : function(n) {
				return n = i.propFix[n] || n, this.each(function() {
						try {
							this[n] = t;
							delete this[n]
						} catch (i) {}
					})
			},
			addClass : function(n) {
				var e,
					t,
					r,
					u,
					s,
					f = 0,
					h = this.length,
					c = "string" == typeof n && n;
				if (i.isFunction(n)) return this.each(function(t) {
						i(this).addClass(n.call(this, t, this.className))
					});
				if (c)
					for (e = (n || "").match(o) || []; h > f; f++)
						if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ri, " ") : " ")) {
							for (s = 0; u = e[s++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
							t.className = i.trim(r)
				}
				return this
			},
			removeClass : function(n) {
				var e,
					t,
					r,
					u,
					s,
					f = 0,
					h = this.length,
					c = 0 === arguments.length || "string" == typeof n && n;
				if (i.isFunction(n)) return this.each(function(t) {
						i(this).removeClass(n.call(this, t, this.className))
					});
				if (c)
					for (e = (n || "").match(o) || []; h > f; f++)
						if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ri, " ") : "")) {
							for (s = 0; u = e[s++];)
								for (; r.indexOf(" " + u + " ") >= 0;) r = r.replace(" " + u + " ", " ");
							t.className = n ? i.trim(r) : ""
				}
				return this
			},
			toggleClass : function(n, t) {
				var r = typeof n,
					u = "boolean" == typeof t;
				return i.isFunction(n) ? this.each(function(r) {
					i(this).toggleClass(n.call(this, r, this.className, t), t)
				}) : this.each(function() {
					if ("string" === r)
						for (var f, h = 0, s = i(this), e = t, c = n.match(o) || []; f = c[h++];) e = u ? e : !s.hasClass(f), s[e ? "addClass" : "removeClass"](f);
					else ("undefined" === r || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
				})
			},
			hasClass : function(n) {
				for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
					if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ri, " ").indexOf(i) >= 0) return !0;
				return !1
			},
			val : function(n) {
				var r,
					u,
					e,
					f = this[0];
				return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
					var f,
						o = i(this);
					1 === this.nodeType && (f = e ? n.call(this, u, o.val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
						return null == n ? "" : n + ""
					})), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
				})) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(fe, "") : null == u ? "" : u)) : void 0
			}
		});i.extend({
			valHooks : {
				option : {
					get : function(n) {
						var t = n.attributes.value;
						return !t || t.specified ? n.value : n.text
					}
				},
				select : {
					get : function(n) {
						for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
							if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
								if (e = i(t).val(), u) return e;
								s.push(e)
						}
						return s
					},
					set : function(n, t) {
						var r = i.makeArray(t);
						return i(n).find("option").each(function() {
								this.selected = i.inArray(i(this).val(), r) >= 0
							}), r.length || (n.selectedIndex = -1), r
					}
				}
			},
			attr : function(n, r, u) {
				var f,
					e,
					o,
					s = n.nodeType;
				if (n && 3 !== s && 8 !== s && 2 !== s) return n.getAttribute === t ? i.prop(n, r, u) : (o = 1 !== s || !i.isXMLDoc(n), o && (r = r.toLowerCase(), e = i.attrHooks[r] || (iu.test(r) ? tu : b)), u === t ? e && o && "get" in e && null !== (f = e.get(n, r)) ? f : (n.getAttribute !== t && (f = n.getAttribute(r)), null == f ? t : f) : null !== u ? e && o && "set" in e && (f = e.set(n, u, r)) !== t ? f : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
			},
			removeAttr : function(n, t) {
				var r,
					u,
					e = 0,
					f = t && t.match(o);
				if (f && 1 === n.nodeType)
					for (; r = f[e++];) u = i.propFix[r] || r, iu.test(r) ? !c && ui.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(c ? r : u)
			},
			attrHooks : {
				type : {
					set : function(n, t) {
						if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
							var r = n.value;
							return n.setAttribute("type", t), r && (n.value = r), t
						}
					}
				}
			},
			propFix : {
				tabindex : "tabIndex",
				readonly : "readOnly",
				"for" : "htmlFor",
				"class" : "className",
				maxlength : "maxLength",
				cellspacing : "cellSpacing",
				cellpadding : "cellPadding",
				rowspan : "rowSpan",
				colspan : "colSpan",
				usemap : "useMap",
				frameborder : "frameBorder",
				contenteditable : "contentEditable"
			},
			prop : function(n, r, u) {
				var e,
					f,
					s,
					o = n.nodeType;
				if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r]
			},
			propHooks : {
				tabIndex : {
					get : function(n) {
						var i = n.getAttributeNode("tabindex");
						return i && i.specified ? parseInt(i.value, 10) : ee.test(n.nodeName) || oe.test(n.nodeName) && n.href ? 0 : t
					}
				}
			}
		});
		tu = {
			get : function(n, r) {
				var u = i.prop(n, r),
					f = "boolean" == typeof u && n.getAttribute(r),
					e = "boolean" == typeof u ? fi && c ? null != f : ui.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
				return e && e.value !== !1 ? r.toLowerCase() : t
			},
			set : function(n, t, r) {
				return t === !1 ? i.removeAttr(n, r) : fi && c || !ui.test(r) ? n.setAttribute(!c && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
			}
		};fi && c || (i.attrHooks.value = {
			get : function(n, r) {
				var u = n.getAttributeNode(r);
				return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
			},
			set : function(n, r, u) {
				return i.nodeName(n, "input") ? (n.defaultValue = r, t) : b && b.set(n, r, u)
			}
		});c || (b = i.valHooks.button = {
			get : function(n, i) {
				var r = n.getAttributeNode(i);
				return r && ("id" === i || "name" === i || "coords" === i ? "" !== r.value : r.specified) ? r.value : t
			},
			set : function(n, i, r) {
				var u = n.getAttributeNode(r);
				return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t
			}
		}, i.attrHooks.contenteditable = {
			get : b.get,
			set : function(n, t, i) {
				b.set(n, "" === t ? !1 : t, i)
			}
		}, i.each([ "width", "height" ], function(n, r) {
			i.attrHooks[r] = i.extend(i.attrHooks[r], {
				set : function(n, i) {
					return "" === i ? (n.setAttribute(r, "auto"), i) : t
				}
			})
		}));i.support.hrefNormalized || (i.each([ "href", "src", "width", "height" ], function(n, r) {
			i.attrHooks[r] = i.extend(i.attrHooks[r], {
				get : function(n) {
					var i = n.getAttribute(r, 2);
					return null == i ? t : i
				}
			})
		}), i.each([ "href", "src" ], function(n, t) {
			i.propHooks[t] = {
				get : function(n) {
					return n.getAttribute(t, 4)
				}
			}
		}));i.support.style || (i.attrHooks.style = {
			get : function(n) {
				return n.style.cssText || t
			},
			set : function(n, t) {
				return n.style.cssText = t + ""
			}
		});i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
			get : function(n) {
				var t = n.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		}));i.support.enctype || (i.propFix.enctype = "encoding");i.support.checkOn || i.each([ "radio", "checkbox" ], function() {
			i.valHooks[this] = {
				get : function(n) {
					return null === n.getAttribute("value") ? "on" : n.value
				}
			}
		});i.each([ "radio", "checkbox" ], function() {
			i.valHooks[this] = i.extend(i.valHooks[this], {
				set : function(n, r) {
					return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
				}
			})
		});
		var ei = /^(?:input|select|textarea)$/i,
			se = /^key/,
			he = /^(?:mouse|contextmenu)|click/,
			ru = /^(?:focusinfocus|focusoutblur)$/,
			uu = /^([^.]*)(?:\.(.+)|)$/;
		i.event = {
			global : {},
			add : function(n, r, u, f, e) {
				var y,
					c,
					w,
					p,
					b,
					l,
					h,
					a,
					s,
					k,
					d,
					v = 3 !== n.nodeType && 8 !== n.nodeType && i._data(n);
				if (v) {
					for (u.handler && (y = u, u = y.handler, e = y.selector), u.guid || (u.guid = i.guid++), (p = v.events) || (p = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
							return i === t || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(c.elem, arguments)
						}, c.elem = n), r = (r || "").match(o) || [ "" ], b = r.length; b--;) w = uu.exec(r[b]) || [], s = d = w[1], k = (w[2] || "").split(".").sort(), h = i.event.special[s] || {}, s = (e ? h.delegateType : h.bindType) || s, h = i.event.special[s] || {}, l = i.extend({
							type : s,
							origType : d,
							data : f,
							handler : u,
							guid : u.guid,
							selector : e,
							needsContext : e && i.expr.match.needsContext.test(e),
							namespace : k.join(".")
						}, y), (a = p[s]) || (a = p[s] = [], a.delegateCount = 0, h.setup && h.setup.call(n, f, k, c) !== !1 || (n.addEventListener ? n.addEventListener(s, c, !1) : n.attachEvent && n.attachEvent("on" + s, c))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[s] = !0;
					n = null
				}
			},
			remove : function(n, t, r, u, f) {
				var y,
					b,
					h,
					a,
					p,
					s,
					c,
					l,
					e,
					w,
					k,
					v = i.hasData(n) && i._data(n);
				if (v && (a = v.events)) {
					for (t = (t || "").match(o) || [ "" ], p = t.length; p--;)
						if (h = uu.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
							for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) s = l[y], !f && k !== s.origType || r && r.guid !== s.guid || h && !h.test(s.namespace) || u && u !== s.selector && ("**" !== u || !s.selector) || (l.splice(y, 1), s.selector && l.delegateCount--, c.remove && c.remove.call(n, s));
							b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
							delete a[e]
							)
						} else
							for (e in a) i.event.remove(n, e + t[p], r, u, !0);
					i.isEmptyObject(a) && (
					delete v.handle
					, i._removeData(n, "events"))
				}
			},
			trigger : function(u, f, e, o) {
				var p,
					h,
					c,
					w,
					a,
					v,
					l,
					b = [ e || r ],
					s = u.type || u,
					y = u.namespace ? u.namespace.split(".") : [];
				if (h = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !ru.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), s = y.shift(), y.sort()), a = 0 > s.indexOf(":") && "on" + s, u = u[i.expando] ? u : new i.Event(s, "object" == typeof u && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [ u ] : i.makeArray(f, [ u ]), l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
					if (!o && !l.noBubble && !i.isWindow(e)) {
						for (w = l.delegateType || s, ru.test(w + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), c = h;
						c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n)
					}
					for (p = 0; (h = b[p++]) && !u.isPropagationStopped();) u.type = p > 1 ? w : l.bindType || s, v = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), v && v.apply(h, f), v = a && h[a], v && i.acceptData(h) && v.apply && v.apply(h, f) === !1 && u.preventDefault();
					if (u.type = s, !(o || u.isDefaultPrevented() || l._default && l._default.apply(e.ownerDocument, f) !== !1 || "click" === s && i.nodeName(e, "a") || !i.acceptData(e) || !a || !e[s] || i.isWindow(e))) {
						c = e[a];c && (e[a] = null);
						i.event.triggered = s;try {
							e[s]()
						} catch (k) {}
						i.event.triggered = t;c && (e[a] = c)
					}
					return u.result
				}
			},
			dispatch : function(n) {
				n = i.event.fix(n);
				var o,
					s,
					e,
					u,
					r,
					c = [],
					l = h.call(arguments),
					a = (i._data(this, "events") || {})[n.type] || [],
					f = i.event.special[n.type] || {};
				if (l[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
					for (c = i.event.handlers.call(this, n, a), o = 0; (u = c[o++]) && !n.isPropagationStopped();)
						for (n.currentTarget = u.elem, s = 0; (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();) (!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, l), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
					return f.postDispatch && f.postDispatch.call(this, n), n.result
				}
			},
			handlers : function(n, r) {
				var o,
					f,
					e,
					s,
					c = [],
					h = r.delegateCount,
					u = n.target;
				if (h && u.nodeType && (!n.button || "click" !== n.type))
					for (; u != this; u = u.parentNode || this)
						if (u.disabled !== !0 || "click" !== n.type) {
							for (f = [], o = 0; h > o; o++) s = r[o], e = s.selector + " ", f[e] === t && (f[e] = s.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [ u ]).length), f[e] && f.push(s);
							f.length && c.push({
								elem : u,
								handlers : f
							})
				}
				return r.length > h && c.push({
						elem : this,
						handlers : r.slice(h)
					}), c
			},
			fix : function(n) {
				if (n[i.expando]) return n;
				var f,
					e,
					t = n,
					u = i.event.fixHooks[n.type] || {},
					o = u.props ? this.props.concat(u.props) : this.props;
				for (n = new i.Event(t), f = o.length; f--;) e = o[f], n[e] = t[e];
				return n.target || (n.target = t.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
			},
			props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks : {},
			keyHooks : {
				props : "char charCode key keyCode".split(" "),
				filter : function(n, t) {
					return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
				}
			},
			mouseHooks : {
				props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter : function(n, i) {
					var o,
						u,
						f,
						e = i.button,
						s = i.fromElement;
					return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
				}
			},
			special : {
				load : {
					noBubble : !0
				},
				click : {
					trigger : function() {
						return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
					}
				},
				focus : {
					trigger : function() {
						if (this !== r.activeElement && this.focus) try {
								return this.focus(), !1
							} catch (n) {}
					},
					delegateType : "focusin"
				},
				blur : {
					trigger : function() {
						return this === r.activeElement && this.blur ? (this.blur(), !1) : t
					},
					delegateType : "focusout"
				},
				beforeunload : {
					postDispatch : function(n) {
						n.result !== t && (n.originalEvent.returnValue = n.result)
					}
				}
			},
			simulate : function(n, t, r, u) {
				var f = i.extend(new i.Event, r, {
					type : n,
					isSimulated : !0,
					originalEvent : {}
				});
				u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);f.isDefaultPrevented() && r.preventDefault()
			}
		};
		i.removeEvent = r.removeEventListener ? function(n, t, i) {
			n.removeEventListener && n.removeEventListener(t, i, !1)
		} : function(n, i, r) {
			var u = "on" + i;
			n.detachEvent && (n[u] === t && (n[u] = null), n.detachEvent(u, r))
		};
		i.Event = function(n, r) {
			return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? rt : p) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
		};
		i.Event.prototype = {
			isDefaultPrevented : p,
			isPropagationStopped : p,
			isImmediatePropagationStopped : p,
			preventDefault : function() {
				var n = this.originalEvent;
				this.isDefaultPrevented = rt;n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
			},
			stopPropagation : function() {
				var n = this.originalEvent;
				this.isPropagationStopped = rt;n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
			},
			stopImmediatePropagation : function() {
				this.isImmediatePropagationStopped = rt;this.stopPropagation()
			}
		};i.each({
			mouseenter : "mouseover",
			mouseleave : "mouseout"
		}, function(n, t) {
			i.event.special[n] = {
				delegateType : t,
				bindType : t,
				handle : function(n) {
					var u,
						f = this,
						r = n.relatedTarget,
						e = n.handleObj;
					return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
				}
			}
		});i.support.submitBubbles || (i.event.special.submit = {
			setup : function() {
				return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
					var u = n.target,
						r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
					r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
						n._submit_bubble = !0
					}), i._data(r, "submitBubbles", !0))
				}), t)
			},
			postDispatch : function(n) {
				n._submit_bubble && (
				delete n._submit_bubble
				, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
			},
			teardown : function() {
				return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t)
			}
		});i.support.changeBubbles || (i.event.special.change = {
			setup : function() {
				return ei.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
					"checked" === n.originalEvent.propertyName && (this._just_changed = !0)
				}), i.event.add(this, "click._change", function(n) {
					this._just_changed && !n.isTrigger && (this._just_changed = !1);i.event.simulate("change", this, n, !0)
				})), !1) : (i.event.add(this, "beforeactivate._change", function(n) {
					var t = n.target;
					ei.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
						!this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
					}), i._data(t, "changeBubbles", !0))
				}), t)
			},
			handle : function(n) {
				var i = n.target;
				return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
			},
			teardown : function() {
				return i.event.remove(this, "._change"), !ei.test(this.nodeName)
			}
		});i.support.focusinBubbles || i.each({
			focus : "focusin",
			blur : "focusout"
		}, function(n, t) {
			var u = 0,
				f = function(n) {
					i.event.simulate(t, n.target, i.event.fix(n), !0)
				};
			i.event.special[t] = {
				setup : function() {
					0 == u++ && r.addEventListener(n, f, !0)
				},
				teardown : function() {
					0 == --u && r.removeEventListener(n, f, !0)
				}
			}
		});i.fn.extend({
			on : function(n, r, u, f, e) {
				var o,
					s;
				if ("object" == typeof n) {
					"string" != typeof r && (u = u || r, r = t);
					for (s in n) this.on(s, r, u, n[s], e);
					return this
				}
				if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1)
					f = p;
				else if (!f) return this;
				return 1 === e && (o = f, f = function(n) {
						return i().off(n), o.apply(this, arguments)
					}, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
						i.event.add(this, n, f, u, r)
					})
			},
			one : function(n, t, i, r) {
				return this.on(n, t, i, r, 1)
			},
			off : function(n, r, u) {
				var f,
					e;
				if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
				if ("object" == typeof n) {
					for (e in n) this.off(e, r, n[e]);
					return this
				}
				return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = p), this.each(function() {
					i.event.remove(this, n, u, r)
				})
			},
			bind : function(n, t, i) {
				return this.on(n, null, t, i)
			},
			unbind : function(n, t) {
				return this.off(n, null, t)
			},
			delegate : function(n, t, i, r) {
				return this.on(t, n, i, r)
			},
			undelegate : function(n, t, i) {
				return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
			},
			trigger : function(n, t) {
				return this.each(function() {
					i.event.trigger(n, t, this)
				})
			},
			triggerHandler : function(n, r) {
				var u = this[0];
				return u ? i.event.trigger(n, r, u, !0) : t
			},
			hover : function(n, t) {
				return this.mouseenter(n).mouseleave(t || n)
			}
		});i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
			i.fn[t] = function(n, i) {
				return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
			};se.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);he.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
		}), function(n, t) {
			function bt(n) {
				return er.test(n + "")
			}
			function kt() {
				var n,
					t = [];
				return n = function(i, u) {
					return t.push(i += " ") > r.cacheLength &&
						delete n[t.shift()]
						, n[i] = u
				}
			}
			function c(n) {
				return n[f] = !0, n
			}
			function p(n) {
				var t = s.createElement("div");
				try {
					return n(t)
				} catch (i) {
					return !1
				} finally {
					t = null
				}
			}
			function u(n, t, i, r) {
				var y,
					u,
					e,
					c,
					p,
					v,
					w,
					h,
					k,
					b;
				if ((t ? t.ownerDocument || t : d) !== s && it(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
				if (1 !== (c = t.nodeType) && 9 !== c) return [];
				if (!l && !r) {
					if (y = or.exec(n))
						if (e = y[1]) {
							if (9 === c) {
								if (u = t.getElementById(e), !u || !u.parentNode) return i;
								if (u.id === e) return i.push(u), i
							} else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && ut(t, u) && u.id === e) return i.push(u), i
						} else {
							if (y[2]) return ft.apply(i, et.call(t.getElementsByTagName(n), 0)), i;
							if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ft.apply(i, et.call(t.getElementsByClassName(e), 0)), i
					}
					if (o.qsa && !a.test(n)) {
						if (w = !0, h = f, k = t, b = 9 === c && n, 1 === c && "object" !== t.nodeName.toLowerCase()) {
							for (v = ot(n), (w = t.getAttribute("id")) ? h = w.replace(cr, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", p = v.length; p--;) v[p] = h + st(v[p]);
							k = ei.test(n) && t.parentNode || t;
							b = v.join(",")
						}
						if (b) try {
								return ft.apply(i, et.call(k.querySelectorAll(b), 0)), i
							} catch (g) {} finally {
								w || t.removeAttribute("id")
						}
					}
				}
				return gi(n.replace(pt, "$1"), t, i, r)
			}
			function oi(n, t) {
				for (var i = n && t && n.nextSibling; i; i = i.nextSibling)
					if (i === t) return -1;
				return n ? 1 : -1
			}
			function wi(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return "input" === i && t.type === n
				}
			}
			function bi(n) {
				return function(t) {
					var i = t.nodeName.toLowerCase();
					return ("input" === i || "button" === i) && t.type === n
				}
			}
			function k(n) {
				return c(function(t) {
					return t = +t, c(function(i, r) {
							for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
						})
				})
			}
			function ot(n, t) {
				var e,
					f,
					s,
					o,
					i,
					h,
					c,
					l = li[n + " "];
				if (l) return t ? 0 : l.slice(0);
				for (i = n, h = [], c = r.preFilter; i;) {
					(!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
					e = !1;(f = rr.exec(i)) && (e = f.shift(), s.push({
						value : e,
						type : f[0].replace(pt, " ")
					}), i = i.slice(e.length));
					for (o in r.filter) (f = wt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
							value : e,
							type : o,
							matches : f
						}), i = i.slice(e.length));
					if (!e) break
				}
				return t ? i.length : i ? u.error(n) : li(n, h).slice(0)
			}
			function st(n) {
				for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
				return i
			}
			function dt(n, t, i) {
				var r = t.dir,
					u = i && "parentNode" === t.dir,
					e = nr++;
				return t.first ? function(t, i, f) {
					for (; t = t[r];)
						if (1 === t.nodeType || u) return n(t, i, f)
				} : function(t, i, o) {
					var h,
						s,
						c,
						l = v + " " + e;
					if (o) {
						for (; t = t[r];)
							if ((1 === t.nodeType || u) && n(t, i, o)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || u)
								if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) {
									if ((h = s[1]) === !0 || h === ct) return h === !0
								} else if (s = c[r] = [ l ], s[1] = n(t, i, o) || ct, s[1] === !0) return !0
				}
			}
			function gt(n) {
				return n.length > 1 ? function(t, i, r) {
					for (var u = n.length; u--;)
						if (!n[u](t, i, r)) return !1;
					return !0
				} : n[0]
			}
			function ht(n, t, i, r, u) {
				for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++) (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
				return o
			}
			function ni(n, t, i, r, u, e) {
				return r && !r[f] && (r = ni(r)), u && !u[f] && (u = ni(u, e)), c(function(f, e, o, s) {
						var l,
							c,
							a,
							p = [],
							y = [],
							w = e.length,
							b = f || di(t || "*", o.nodeType ? [ o ] : o, []),
							v = !n || !f && t ? b : ht(b, p, n, o, s),
							h = i ? u || (f ? n : w || r) ? [] : e : v;
						if (i && i(v, h, o, s), r)
							for (l = ht(h, y), r(l, [], o, s), c = l.length; c--;) (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
						if (f) {
							if (u || n) {
								if (u) {
									for (l = [], c = h.length; c--;) (a = h[c]) && l.push(v[c] = a);
									u(null, h = [], l, s)
								}
								for (c = h.length; c--;) (a = h[c]) && (l = u ? ui.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
							}
						} else h = ht(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ft.apply(e, h)
					})
			}
			function ti(n) {
				for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = dt(function(n) {
							return n === s
						}, c, !0), a = dt(function(n) {
							return ui.call(s, n) > -1
						}, c, !0), e = [ function(n, t, i) {
							return !h && (i || t !== at) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
						} ]; o > t; t++)
					if (u = r.relative[n[t].type])
						e = [ dt(gt(e), u) ];else {
						if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
							for (i = ++t; o > i && !r.relative[n[i].type]; i++)
								;
							return ni(t > 1 && gt(e), t > 1 && st(n.slice(0, t - 1)).replace(pt, "$1"), u, i > t && ti(n.slice(t, i)), o > i && ti(n = n.slice(i)), o > i && st(n))
						}
						e.push(u)
				}
				return gt(e)
			}
			function ki(n, t) {
				var f = 0,
					i = t.length > 0,
					e = n.length > 0,
					o = function(o, h, c, l, a) {
						var p,
							b,
							k,
							w = [],
							d = 0,
							y = "0",
							g = o && [],
							nt = null != a,
							tt = at,
							rt = o || e && r.find.TAG("*", a && h.parentNode || h),
							it = v += null == tt ? 1 : Math.E;
						for (nt && (at = h !== s && h, ct = f); null != (p = rt[y]); y++) {
							if (e && p) {
								for (b = 0; k = n[b]; b++)
									if (k(p, h, c)) {
										l.push(p);break
								}
								nt && (v = it, ct = ++f)
							}
							i && ((p = !k && p) && d--, o && g.push(p))
						}
						if (d += y, i && y !== d) {
							for (b = 0; k = t[b]; b++) k(g, w, h, c);
							if (o) {
								if (d > 0)
									for (; y--;) g[y] || w[y] || (w[y] = tr.call(l));
								w = ht(w)
							}
							ft.apply(l, w);nt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
						}
						return nt && (v = it, at = tt), g
					};
				return i ? c(o) : o
			}
			function di(n, t, i) {
				for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
				return i
			}
			function gi(n, t, i, u) {
				var e,
					f,
					o,
					h,
					c,
					s = ot(n);
				if (!u && 1 === s.length) {
					if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (o = f[0]).type && 9 === t.nodeType && !l && r.relative[f[1].type]) {
						if (t = r.find.ID(o.matches[0].replace(w, b), t)[0], !t) return i;
						n = n.slice(f.shift().value.length)
					}
					for (e = wt.needsContext.test(n) ? -1 : f.length - 1; e >= 0 && (o = f[e], !r.relative[h = o.type]); e--)
						if ((c = r.find[h]) && (u = c(o.matches[0].replace(w, b), ei.test(f[0].type) && t.parentNode || t))) {
							if (f.splice(e, 1), n = u.length && st(f), !n) return ft.apply(i, et.call(u, 0)), i;
							break
					}
				}
				return ii(n, s)(u, t, l, i, ei.test(n)), i
			}
			function si() {
			}
			var nt,
				ct,
				r,
				lt,
				hi,
				ii,
				tt,
				at,
				it,
				s,
				h,
				l,
				a,
				rt,
				vt,
				ut,
				ri,
				f = "sizzle" + -new Date,
				d = n.document,
				o = {},
				v = 0,
				nr = 0,
				ci = kt(),
				li = kt(),
				ai = kt(),
				y = typeof t,
				vi = -2147483648,
				yt = [],
				tr = yt.pop,
				ft = yt.push,
				et = yt.slice,
				ui = yt.indexOf || function(n) {
					for (var t = 0, i = this.length; i > t; t++)
						if (this[t] === n) return t;
					return -1
				},
				e = "[\\x20\\t\\r\\n\\f]",
				g = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				yi = g.replace("w", "w#"),
				pi = "\\[" + e + "*(" + g + ")" + e + "*(?:([*^$|!~]?=)" + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + yi + ")|)|)" + e + "*\\]",
				fi = ":(" + g + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pi.replace(3, 8) + ")*)|.*)\\)|)",
				pt = RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
				ir = RegExp("^" + e + "*," + e + "*"),
				rr = RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
				ur = RegExp(fi),
				fr = RegExp("^" + yi + "$"),
				wt = {
					ID : RegExp("^#(" + g + ")"),
					CLASS : RegExp("^\\.(" + g + ")"),
					NAME : RegExp("^\\[name=['\"]?(" + g + ")['\"]?\\]"),
					TAG : RegExp("^(" + g.replace("w", "w*") + ")"),
					ATTR : RegExp("^" + pi),
					PSEUDO : RegExp("^" + fi),
					CHILD : RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
					needsContext : RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
				},
				ei = /[\x20\t\r\n\f]*[+~]/,
				er = /\{\s*\[native code\]\s*\}/,
				or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				sr = /^(?:input|select|textarea|button)$/i,
				hr = /^h\d$/i,
				cr = /'|\\/g,
				lr = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				w = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				b = function(n, t) {
					var i = "0x" + t - 65536;
					return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
				};
			try {
				et.call(h.childNodes, 0)[0].nodeType
			} catch (ar) {
				et = function(n) {
					for (var t, i = []; t = this[n]; n++) i.push(t);
					return i
				}
			}
			hi = u.isXML = function(n) {
				var t = n && (n.ownerDocument || n).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			};
			it = u.setDocument = function(n) {
				var i = n ? n.ownerDocument || n : d;
				return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, h = i.documentElement, l = hi(i), o.tagNameNoComments = p(function(n) {
					return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
				}), o.attributes = p(function(n) {
					n.innerHTML = "<select><\/select>";
					var t = typeof n.lastChild.getAttribute("multiple");
					return "boolean" !== t && "string" !== t
				}), o.getByClassName = p(function(n) {
					return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", n.getElementsByClassName && n.getElementsByClassName("e").length ? (n.lastChild.className = "e", 2 === n.getElementsByClassName("e").length) : !1
				}), o.getByName = p(function(n) {
					n.id = f + 0;
					n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>";h.insertBefore(n, h.firstChild);
					var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
					return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t
				}), r.attrHandle = p(function(n) {
					return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== y && "#" === n.firstChild.getAttribute("href")
				}) ? {} : {
					href : function(n) {
						return n.getAttribute("href", 2)
					},
					type : function(n) {
						return n.getAttribute("type")
					}
				}, o.getIdNotName ? (r.find.ID = function(n, t) {
					if (typeof t.getElementById !== y && !l) {
						var i = t.getElementById(n);
						return i && i.parentNode ? [ i ] : []
					}
				}, r.filter.ID = function(n) {
					var t = n.replace(w, b);
					return function(n) {
						return n.getAttribute("id") === t
					}
				}) : (r.find.ID = function(n, i) {
					if (typeof i.getElementById !== y && !l) {
						var r = i.getElementById(n);
						return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [ r ] : t : []
					}
				}, r.filter.ID = function(n) {
					var t = n.replace(w, b);
					return function(n) {
						var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
						return i && i.value === t
					}
				}), r.find.TAG = o.tagNameNoComments ? function(n, i) {
					return typeof i.getElementsByTagName !== y ? i.getElementsByTagName(n) : t
				} : function(n, t) {
					var i,
						r = [],
						u = 0,
						f = t.getElementsByTagName(n);
					if ("*" === n) {
						for (; i = f[u]; u++) 1 === i.nodeType && r.push(i);
						return r
					}
					return f
				}, r.find.NAME = o.getByName && function(n, i) {
					return typeof i.getElementsByName !== y ? i.getElementsByName(name) : t
				}, r.find.CLASS = o.getByClassName && function(n, i) {
					return typeof i.getElementsByClassName === y || l ? t : i.getElementsByClassName(n)
				}, rt = [], a = [ ":focus" ], (o.qsa = bt(i.querySelectorAll)) && (p(function(n) {
					n.innerHTML = "<select><option selected=''><\/option><\/select>";n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");n.querySelectorAll(":checked").length || a.push(":checked")
				}), p(function(n) {
					n.innerHTML = "<input type='hidden' i=''/>";n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')");n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled");n.querySelectorAll("*,:x");a.push(",.*:")
				})), (o.matchesSelector = bt(vt = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && p(function(n) {
					o.disconnectedMatch = vt.call(n, "div");vt.call(n, "[s!='']:x");rt.push("!=", fi)
				}), a = RegExp(a.join("|")), rt = RegExp(rt.join("|")), ut = bt(h.contains) || h.compareDocumentPosition ? function(n, t) {
					var r = 9 === n.nodeType ? n.documentElement : n,
						i = t && t.parentNode;
					return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
				} : function(n, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === n) return !0;
					return !1
				}, ri = h.compareDocumentPosition ? function(n, t) {
					var r;
					return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? 1 & r || n.parentNode && 11 === n.parentNode.nodeType ? n === i || ut(d, n) ? -1 : t === i || ut(d, t) ? 1 : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
				} : function(n, t) {
					var r,
						u = 0,
						o = n.parentNode,
						s = t.parentNode,
						f = [ n ],
						e = [ t ];
					if (n === t) return tt = !0, 0;
					if (n.sourceIndex && t.sourceIndex) return (~t.sourceIndex || vi) - (ut(d, n) && ~n.sourceIndex || vi);
					if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
					if (o === s) return oi(n, t);
					for (r = n; r = r.parentNode;) f.unshift(r);
					for (r = t; r = r.parentNode;) e.unshift(r);
					for (; f[u] === e[u];) u++;
					return u ? oi(f[u], e[u]) : f[u] === d ? -1 : e[u] === d ? 1 : 0
				}, tt = !1, [ 0, 0 ].sort(ri), o.detectDuplicates = tt, s) : s
			};
			u.matches = function(n, t) {
				return u(n, null, null, t)
			};
			u.matchesSelector = function(n, t) {
				if ((n.ownerDocument || n) !== s && it(n), t = t.replace(lr, "='$1']"), !(!o.matchesSelector || l || rt && rt.test(t) || a.test(t))) try {
						var i = vt.call(n, t);
						if (i || o.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
					} catch (r) {} return u(t, s, null, [ n ]).length > 0
			};
			u.contains = function(n, t) {
				return (n.ownerDocument || n) !== s && it(n), ut(n, t)
			};
			u.attr = function(n, t) {
				var i;
				return (n.ownerDocument || n) !== s && it(n), l || (t = t.toLowerCase()), (i = r.attrHandle[t]) ? i(n) : l || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null
			};
			u.error = function(n) {
				throw Error("Syntax error, unrecognized expression: " + n);
			};
			u.uniqueSort = function(n) {
				var r,
					u = [],
					t = 1,
					i = 0;
				if (tt = !o.detectDuplicates, n.sort(ri), tt) {
					for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
					for (; i--;) n.splice(u[i], 1)
				}
				return n
			};
			lt = u.getText = function(n) {
				var r,
					i = "",
					u = 0,
					t = n.nodeType;
				if (t) {
					if (1 === t || 9 === t || 11 === t) {
						if ("string" == typeof n.textContent) return n.textContent;
						for (n = n.firstChild; n; n = n.nextSibling) i += lt(n)
					} else if (3 === t || 4 === t) return n.nodeValue
				} else
					for (; r = n[u]; u++) i += lt(r);
				return i
			};
			r = u.selectors = {
				cacheLength : 50,
				createPseudo : c,
				match : wt,
				find : {},
				relative : {
					">" : {
						dir : "parentNode",
						first : !0
					},
					" " : {
						dir : "parentNode"
					},
					"+" : {
						dir : "previousSibling",
						first : !0
					},
					"~" : {
						dir : "previousSibling"
					}
				},
				preFilter : {
					ATTR : function(n) {
						return n[1] = n[1].replace(w, b), n[3] = (n[4] || n[5] || "").replace(w, b), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
					},
					CHILD : function(n) {
						return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
					},
					PSEUDO : function(n) {
						var i,
							t = !n[5] && n[2];
						return wt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && ur.test(t) && (i = ot(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
					}
				},
				filter : {
					TAG : function(n) {
						return "*" === n ? function() {
							return !0
						} : (n = n.replace(w, b).toLowerCase(), function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === n
						})
					},
					CLASS : function(n) {
						var t = ci[n + " "];
						return t || (t = RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && ci(n, function(n) {
								return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "")
							})
					},
					ATTR : function(n, t, i) {
						return function(r) {
							var f = u.attr(r, n);
							return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.substr(f.length - i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.substr(0, i.length + 1) === i + "-" : !1) : !0
						}
					},
					CHILD : function(n, t, i, r, u) {
						var s = "nth" !== n.slice(0, 3),
							o = "last" !== n.slice(-4),
							e = "of-type" === t;
						return 1 === r && 0 === u ? function(n) {
							return !!n.parentNode
						} : function(t, i, h) {
							var a,
								k,
								c,
								l,
								y,
								w,
								b = s !== o ? "nextSibling" : "previousSibling",
								p = t.parentNode,
								g = e && t.nodeName.toLowerCase(),
								d = !h && !e;
							if (p) {
								if (s) {
									for (; b;) {
										for (c = t; c = c[b];)
											if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
										w = b = "only" === n && !w && "nextSibling"
									}
									return !0
								}
								if (w = [ o ? p.firstChild : p.lastChild ], o && d) {
									for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
										if (1 === c.nodeType && ++l && c === t) {
											k[n] = [ v, y, l ];break
									}
								} else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
									l = a[1];else
									for (; (c = ++y && c && c[b] || (l = y = 0) || w.pop()) && ((e ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++l || (d && ((c[f] || (c[f] = {}))[n] = [ v, l ]), c !== t));)
										;
								return l -= u, l === r || 0 == l % r && l / r >= 0
							}
						}
					},
					PSEUDO : function(n, t) {
						var e,
							i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
						return i[f] ? i(t) : i.length > 1 ? (e = [ n, n, "", t ], r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) {
							for (var u, f = i(n, t), e = f.length; e--;) u = ui.call(n, f[e]), n[u] = !(r[u] = f[e])
						}) : function(n) {
							return i(n, 0, e)
						}) : i
					}
				},
				pseudos : {
					not : c(function(n) {
						var i = [],
							r = [],
							t = ii(n.replace(pt, "$1"));
						return t[f] ? c(function(n, i, r, u) {
							for (var e, o = t(n, null, u, []), f = n.length; f--;) (e = o[f]) && (n[f] = !(i[f] = e))
						}) : function(n, u, f) {
							return i[0] = n, t(i, null, f, r), !r.pop()
						}
					}),
					has : c(function(n) {
						return function(t) {
							return u(n, t).length > 0
						}
					}),
					contains : c(function(n) {
						return function(t) {
							return (t.textContent || t.innerText || lt(t)).indexOf(n) > -1
						}
					}),
					lang : c(function(n) {
						return fr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(w, b).toLowerCase(), function(t) {
								var i;
								do
									if (i = l ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
						}
					}),
					target : function(t) {
						var i = n.location && n.location.hash;
						return i && i.slice(1) === t.id
					},
					root : function(n) {
						return n === h
					},
					focus : function(n) {
						return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
					},
					enabled : function(n) {
						return n.disabled === !1
					},
					disabled : function(n) {
						return n.disabled === !0
					},
					checked : function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && !!n.checked || "option" === t && !!n.selected
					},
					selected : function(n) {
						return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
					},
					empty : function(n) {
						for (n = n.firstChild; n; n = n.nextSibling)
							if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
						return !0
					},
					parent : function(n) {
						return !r.pseudos.empty(n)
					},
					header : function(n) {
						return hr.test(n.nodeName)
					},
					input : function(n) {
						return sr.test(n.nodeName)
					},
					button : function(n) {
						var t = n.nodeName.toLowerCase();
						return "input" === t && "button" === n.type || "button" === t
					},
					text : function(n) {
						var t;
						return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
					},
					first : k(function() {
						return [ 0 ]
					}),
					last : k(function(n, t) {
						return [ t - 1 ]
					}),
					eq : k(function(n, t, i) {
						return [ 0 > i ? i + t : i ]
					}),
					even : k(function(n, t) {
						for (var i = 0; t > i; i += 2) n.push(i);
						return n
					}),
					odd : k(function(n, t) {
						for (var i = 1; t > i; i += 2) n.push(i);
						return n
					}),
					lt : k(function(n, t, i) {
						for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
						return n
					}),
					gt : k(function(n, t, i) {
						for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r);
						return n
					})
				}
			};
			for (nt in {radio : !0, checkbox : !0, file : !0, password : !0, image : !0}) r.pseudos[nt] = wi(nt);
			for (nt in {submit : !0, reset : !0}) r.pseudos[nt] = bi(nt);
			ii = u.compile = function(n, t) {
				var r,
					u = [],
					e = [],
					i = ai[n + " "];
				if (!i) {
					for (t || (t = ot(n)), r = t.length; r--;) i = ti(t[r]), i[f] ? u.push(i) : e.push(i);
					i = ai(n, ki(e, u))
				}
				return i
			};
			r.pseudos.nth = r.pseudos.eq;
			r.filters = si.prototype = r.pseudos;
			r.setFilters = new si;it();
			u.attr = i.attr;
			i.find = u;
			i.expr = u.selectors;
			i.expr[":"] = i.expr.pseudos;
			i.unique = u.uniqueSort;
			i.text = u.getText;
			i.isXMLDoc = u.isXML;
			i.contains = u.contains
		}(n);
		var ce = /Until$/,
			le = /^(?:parents|prev(?:Until|All))/,
			ae = /^.[^:#\[\.,]*$/,
			fu = i.expr.match.needsContext,
			ve = {
				children : !0,
				contents : !0,
				next : !0,
				prev : !0
			};
		i.fn.extend({
			find : function(n) {
				var t,
					r,
					u;
				if ("string" != typeof n) return u = this, this.pushStack(i(n).filter(function() {
							for (t = 0; u.length > t; t++)
								if (i.contains(u[t], this)) return !0
						}));
				for (r = [], t = 0; this.length > t; t++) i.find(n, this[t], r);
				return r = this.pushStack(i.unique(r)), r.selector = (this.selector ? this.selector + " " : "") + n, r
			},
			has : function(n) {
				var t,
					r = i(n, this),
					u = r.length;
				return this.filter(function() {
					for (t = 0; u > t; t++)
						if (i.contains(this, r[t])) return !0
				})
			},
			not : function(n) {
				return this.pushStack(di(this, n, !1))
			},
			filter : function(n) {
				return this.pushStack(di(this, n, !0))
			},
			is : function(n) {
				return !!n && ("string" == typeof n ? fu.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
			},
			closest : function(n, t) {
				for (var r, f = 0, o = this.length, u = [], e = fu.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
					for (r = this[f]; r && r.ownerDocument && r !== t && 11 !== r.nodeType;) {
						if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
							u.push(r);break
						}
						r = r.parentNode
				}
				return this.pushStack(u.length > 1 ? i.unique(u) : u)
			},
			index : function(n) {
				return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add : function(n, t) {
				var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [ n ] : n),
					u = i.merge(this.get(), r);
				return this.pushStack(i.unique(u))
			},
			addBack : function(n) {
				return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
			}
		});
		i.fn.andSelf = i.fn.addBack;i.each({
			parent : function(n) {
				var t = n.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents : function(n) {
				return i.dir(n, "parentNode")
			},
			parentsUntil : function(n, t, r) {
				return i.dir(n, "parentNode", r)
			},
			next : function(n) {
				return ki(n, "nextSibling")
			},
			prev : function(n) {
				return ki(n, "previousSibling")
			},
			nextAll : function(n) {
				return i.dir(n, "nextSibling")
			},
			prevAll : function(n) {
				return i.dir(n, "previousSibling")
			},
			nextUntil : function(n, t, r) {
				return i.dir(n, "nextSibling", r)
			},
			prevUntil : function(n, t, r) {
				return i.dir(n, "previousSibling", r)
			},
			siblings : function(n) {
				return i.sibling((n.parentNode || {}).firstChild, n)
			},
			children : function(n) {
				return i.sibling(n.firstChild)
			},
			contents : function(n) {
				return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
			}
		}, function(n, t) {
			i.fn[n] = function(r, u) {
				var f = i.map(this, t, r);
				return ce.test(n) || (u = r), u && "string" == typeof u && (f = i.filter(u, f)), f = this.length > 1 && !ve[n] ? i.unique(f) : f, this.length > 1 && le.test(n) && (f = f.reverse()), this.pushStack(f)
			}
		});i.extend({
			filter : function(n, t, r) {
				return r && (n = ":not(" + n + ")"), 1 === t.length ? i.find.matchesSelector(t[0], n) ? [ t[0] ] : [] : i.find.matches(n, t)
			},
			dir : function(n, r, u) {
				for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r];
				return e
			},
			sibling : function(n, t) {
				for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
				return i
			}
		});
		var eu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			ye = / jQuery\d+="(?:null|\d+)"/g,
			ou = RegExp("<(?:" + eu + ")[\\s/>]", "i"),
			oi = /^\s+/,
			su = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			hu = /<([\w:]+)/,
			cu = /<tbody/i,
			pe = /<|&#?\w+;/,
			we = /<(?:script|style|link)/i,
			si = /^(?:checkbox|radio)$/i,
			be = /checked\s*(?:[^=]|=\s*.checked.)/i,
			lu = /^$|\/(?:java|ecma)script/i,
			ke = /^true\/(.*)/,
			de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			e = {
				option : [ 1, "<select multiple='multiple'>", "<\/select>" ],
				legend : [ 1, "<fieldset>", "<\/fieldset>" ],
				area : [ 1, "<map>", "<\/map>" ],
				param : [ 1, "<object>", "<\/object>" ],
				thead : [ 1, "<table>", "<\/table>" ],
				tr : [ 2, "<table><tbody>", "<\/tbody><\/table>" ],
				col : [ 2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>" ],
				td : [ 3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>" ],
				_default : i.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "<\/div>" ]
			},
			ge = gi(r),
			hi = ge.appendChild(r.createElement("div"));
		e.optgroup = e.option;
		e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
		e.th = e.td;i.fn.extend({
			text : function(n) {
				return i.access(this, function(n) {
					return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
				}, null, n, arguments.length)
			},
			wrapAll : function(n) {
				if (i.isFunction(n)) return this.each(function(t) {
						i(this).wrapAll(n.call(this, t))
					});
				if (this[0]) {
					var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]);t.map(function() {
						for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
						return n
					}).append(this)
				}
				return this
			},
			wrapInner : function(n) {
				return i.isFunction(n) ? this.each(function(t) {
					i(this).wrapInner(n.call(this, t))
				}) : this.each(function() {
					var t = i(this),
						r = t.contents();
					r.length ? r.wrapAll(n) : t.append(n)
				})
			},
			wrap : function(n) {
				var t = i.isFunction(n);
				return this.each(function(r) {
					i(this).wrapAll(t ? n.call(this, r) : n)
				})
			},
			unwrap : function() {
				return this.parent().each(function() {
					i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
				}).end()
			},
			append : function() {
				return this.domManip(arguments, !0, function(n) {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(n)
				})
			},
			prepend : function() {
				return this.domManip(arguments, !0, function(n) {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(n, this.firstChild)
				})
			},
			before : function() {
				return this.domManip(arguments, !1, function(n) {
					this.parentNode && this.parentNode.insertBefore(n, this)
				})
			},
			after : function() {
				return this.domManip(arguments, !1, function(n) {
					this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
				})
			},
			remove : function(n, t) {
				for (var r, f = 0; null != (r = this[f]); f++) (!n || i.filter(n, [ r ]).length > 0) && (t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && wt(u(r, "script")), r.parentNode.removeChild(r)));
				return this
			},
			empty : function() {
				for (var n, t = 0; null != (n = this[t]); t++) {
					for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
					n.options && i.nodeName(n, "select") && (n.options.length = 0)
				}
				return this
			},
			clone : function(n, t) {
				return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
						return i.clone(this, n, t)
					})
			},
			html : function(n) {
				return i.access(this, function(n) {
					var r = this[0] || {},
						f = 0,
						o = this.length;
					if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(ye, "") : t;
					if (!("string" != typeof n || we.test(n) || !i.support.htmlSerialize && ou.test(n) || !i.support.leadingWhitespace && oi.test(n) || e[(hu.exec(n) || [ "", "" ])[1].toLowerCase()])) {
						n = n.replace(su, "<$1><\/$2>");try {
							for (; o > f; f++) r = this[f] || {}, 1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
							r = 0
						} catch (s) {}
					}
					r && this.empty().append(n)
				}, null, n, arguments.length)
			},
			replaceWith : function(n) {
				var t = i.isFunction(n);
				return t || "string" == typeof n || (n = i(n).not(this).detach()), this.domManip([ n ], !0, function(n) {
						var t = this.nextSibling,
							r = this.parentNode;
						(r && 1 === this.nodeType || 11 === this.nodeType) && (i(this).remove(), t ? t.parentNode.insertBefore(n, t) : r.appendChild(n))
					})
			},
			detach : function(n) {
				return this.remove(n, !0)
			},
			domManip : function(n, r, f) {
				n = br.apply([], n);
				var s,
					c,
					h,
					l,
					e,
					y,
					o = 0,
					a = this.length,
					w = this,
					b = a - 1,
					v = n[0],
					p = i.isFunction(v);
				if (p || !(1 >= a || "string" != typeof v || i.support.checkClone) && be.test(v)) return this.each(function(i) {
						var u = w.eq(i);
						p && (n[0] = v.call(this, i, r ? u.html() : t));u.domManip(n, r, f)
					});
				if (a && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), c = s.firstChild, 1 === s.childNodes.length && (s = c), c)) {
					for (r = r && i.nodeName(c, "tr"), h = i.map(u(s, "script"), nr), l = h.length; a > o; o++) e = s, o !== b && (e = i.clone(e, !0, !0), l && i.merge(h, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? uf(this[o], "tbody") : this[o], e, o);
					if (l)
						for (y = h[h.length - 1].ownerDocument, i.map(h, tr), o = 0; l > o; o++) e = h[o], lu.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
								url : e.src,
								type : "GET",
								dataType : "script",
								async : !1,
								global : !1,
								throws : !0
							}) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(de, "")));
					s = c = null
				}
				return this
			}
		});i.each({
			appendTo : "append",
			prependTo : "prepend",
			insertBefore : "before",
			insertAfter : "after",
			replaceAll : "replaceWith"
		}, function(n, t) {
			i.fn[n] = function(n) {
				for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), gt.apply(f, u.get());
				return this.pushStack(f)
			}
		});i.extend({
			clone : function(n, t, r) {
				var f,
					s,
					h,
					e,
					o,
					c = i.contains(n.ownerDocument, n);
				if (i.support.html5Clone || i.isXMLDoc(n) || !ou.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (hi.innerHTML = n.outerHTML, hi.removeChild(o = hi.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
					for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && ff(h, f[e]);
				if (t)
					if (r)
						for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) ir(h, f[e]);
					else ir(n, o);
				return f = u(o, "script"), f.length > 0 && wt(f, !c && u(n, "script")), f = s = h = null, o
			},
			buildFragment : function(n, t, r, f) {
				for (var w, o, y, s, l, p, h, b = n.length, a = gi(t), c = [], v = 0; b > v; v++)
					if (o = n[v], o || 0 === o)
						if ("object" === i.type(o)) i.merge(c, o.nodeType ? [ o ] : o);
						else if (pe.test(o)) {
							for (s = s || a.appendChild(t.createElement("div")), y = (hu.exec(o) || [ "", "" ])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(su, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
							if (!i.support.leadingWhitespace && oi.test(o) && c.push(t.createTextNode(oi.exec(o)[0])), !i.support.tbody)
								for (o = "table" !== y || cu.test(o) ? "<table>" !== l[1] || cu.test(o) ? 0 : s : s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
							for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
							s = a.lastChild
						} else c.push(t.createTextNode(o));
				for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), ef), v = 0; o = c[v++];)
					if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && wt(s), r))
						for (h = 0; o = s[h++];) lu.test(o.type || "") && r.push(o);
				return s = null, a
			},
			cleanData : function(n, r) {
				for (var e, f, u, o, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (u = n[c]); c++)
					if ((r || i.acceptData(u)) && (f = u[s], e = f && h[f])) {
						if (e.events)
							for (o in e.events) a[o] ? i.event.remove(u, o) : i.removeEvent(u, o, e.handle);
						h[f] && (
						delete h[f]
						, l ?
							delete u[s]
							: u.removeAttribute !== t ? u.removeAttribute(s) : u[s] = null, w.push(f))
				}
			}
		});
		var l,
			a,
			tt,
			ci = /alpha\([^)]*\)/i,
			no = /opacity\s*=\s*([^)]*)/,
			to = /^(top|right|bottom|left)$/,
			io = /^(none|table(?!-c[ea]).+)/,
			au = /^margin/,
			ro = RegExp("^(" + ot + ")(.*)$", "i"),
			ht = RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
			uo = RegExp("^([+-])=(" + ot + ")", "i"),
			vu = {
				BODY : "block"
			},
			fo = {
				position : "absolute",
				visibility : "hidden",
				display : "block"
			},
			yu = {
				letterSpacing : 0,
				fontWeight : 400
			},
			v = [ "Top", "Right", "Bottom", "Left" ],
			pu = [ "Webkit", "O", "Moz", "ms" ];
		i.fn.extend({
			css : function(n, r) {
				return i.access(this, function(n, r, u) {
					var e,
						o,
						s = {},
						f = 0;
					if (i.isArray(r)) {
						for (e = a(n), o = r.length; o > f; f++) s[r[f]] = i.css(n, r[f], !1, e);
						return s
					}
					return u !== t ? i.style(n, r, u) : i.css(n, r)
				}, n, r, arguments.length > 1)
			},
			show : function() {
				return ur(this, !0)
			},
			hide : function() {
				return ur(this)
			},
			toggle : function(n) {
				var t = "boolean" == typeof n;
				return this.each(function() {
					(t ? n : nt(this)) ? i(this).show() : i(this).hide()
				})
			}
		});i.extend({
			cssHooks : {
				opacity : {
					get : function(n, t) {
						if (t) {
							var i = l(n, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber : {
				columnCount : !0,
				fillOpacity : !0,
				fontWeight : !0,
				lineHeight : !0,
				opacity : !0,
				orphans : !0,
				widows : !0,
				zIndex : !0,
				zoom : !0
			},
			cssProps : {
				float : i.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style : function(n, r, u, f) {
				if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
					var o,
						s,
						e,
						h = i.camelCase(r),
						c = n.style;
					if (r = i.cssProps[h] || (i.cssProps[h] = rr(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
					if (s = typeof u, "string" === s && (o = uo.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
							c[r] = u
						} catch (l) {}
				}
			},
			css : function(n, r, u, f) {
				var e,
					h,
					o,
					s = i.camelCase(r);
				return r = i.cssProps[s] || (i.cssProps[s] = rr(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = l(n, r, f)), "normal" === e && r in yu && (e = yu[r]), u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
			},
			swap : function(n, t, i, r) {
				var f,
					u,
					e = {};
				for (u in t) e[u] = n.style[u], n.style[u] = t[u];
				f = i.apply(n, r || []);
				for (u in t) n.style[u] = e[u];
				return f
			}
		});
		n.getComputedStyle ? (a = function(t) {
			return n.getComputedStyle(t, null)
		}, l = function(n, r, u) {
			var s,
				h,
				c,
				o = u || a(n),
				e = o ? o.getPropertyValue(r) || o[r] : t,
				f = n.style;
			return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ht.test(e) && au.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
		}) : r.documentElement.currentStyle && (a = function(n) {
			return n.currentStyle
		}, l = function(n, i, r) {
			var s,
				e,
				o,
				h = r || a(n),
				u = h ? h[i] : t,
				f = n.style;
			return null == u && f && f[i] && (u = f[i]), ht.test(u) && !to.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), "" === u ? "auto" : u
		});i.each([ "height", "width" ], function(n, r) {
			i.cssHooks[r] = {
				get : function(n, u, f) {
					return u ? 0 === n.offsetWidth && io.test(i.css(n, "display")) ? i.swap(n, fo, function() {
						return or(n, r, f)
					}) : or(n, r, f) : t
				},
				set : function(n, t, u) {
					var f = u && a(n);
					return fr(n, t, u ? er(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
				}
			}
		});i.support.opacity || (i.cssHooks.opacity = {
			get : function(n, t) {
				return no.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set : function(n, t) {
				var r = n.style,
					u = n.currentStyle,
					e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					f = u && u.filter || r.filter || "";
				r.zoom = 1;(t >= 1 || "" === t) && "" === i.trim(f.replace(ci, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = ci.test(f) ? f.replace(ci, e) : f + " " + e)
			}
		});i(function() {
			i.support.reliableMarginRight || (i.cssHooks.marginRight = {
				get : function(n, r) {
					return r ? i.swap(n, {
						display : "inline-block"
					}, l, [ n, "marginRight" ]) : t
				}
			});!i.support.pixelPosition && i.fn.position && i.each([ "top", "left" ], function(n, r) {
				i.cssHooks[r] = {
					get : function(n, u) {
						return u ? (u = l(n, r), ht.test(u) ? i(n).position()[r] + "px" : u) : t
					}
				}
			})
		});i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
			return 0 === n.offsetWidth && 0 === n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
		}, i.expr.filters.visible = function(n) {
			return !i.expr.filters.hidden(n)
		});i.each({
			margin : "",
			padding : "",
			border : "Width"
		}, function(n, t) {
			i.cssHooks[n + t] = {
				expand : function(i) {
					for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [ i ]; 4 > r; r++) f[n + v[r] + t] = u[r] || u[r - 2] || u[0];
					return f
				}
			};au.test(n) || (i.cssHooks[n + t].set = fr)
		});
		var eo = /%20/g,
			oo = /\[\]$/,
			wu = /\r?\n/g,
			so = /^(?:submit|button|image|reset)$/i,
			ho = /^(?:input|select|textarea|keygen)/i;
		i.fn.extend({
			serialize : function() {
				return i.param(this.serializeArray())
			},
			serializeArray : function() {
				return this.map(function() {
					var n = i.prop(this, "elements");
					return n ? i.makeArray(n) : this
				}).filter(function() {
					var n = this.type;
					return this.name && !i(this).is(":disabled") && ho.test(this.nodeName) && !so.test(n) && (this.checked || !si.test(n))
				}).map(function(n, t) {
					var r = i(this).val();
					return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
						return {
							name : t.name,
							value : n.replace(wu, "\r\n")
						}
					}) : {
						name : t.name,
						value : r.replace(wu, "\r\n")
					}
				}).get()
			}
		});
		i.param = function(n, r) {
			var u,
				f = [],
				e = function(n, t) {
					t = i.isFunction(t) ? t() : null == t ? "" : t;
					f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
				};
			if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
					e(this.name, this.value)
				});else
				for (u in n) bt(u, n[u], r, e);
			return f.join("&").replace(eo, "+")
		};
		var y,
			s,
			li = i.now(),
			ai = /\?/,
			co = /#.*$/,
			bu = /([?&])_=[^&]*/,
			lo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			ao = /^(?:GET|HEAD)$/,
			vo = /^\/\//,
			ku = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			du = i.fn.load,
			gu = {},
			vi = {},
			nf = "*/".concat("*");
		try {
			s = vf.href
		} catch (bo) {
			s = r.createElement("a");
			s.href = "";
			s = s.href
		}
		y = ku.exec(s.toLowerCase()) || [];
		i.fn.load = function(n, r, u) {
			if ("string" != typeof n && du) return du.apply(this, arguments);
			var f,
				s,
				h,
				e = this,
				o = n.indexOf(" ");
			return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (s = "POST"), e.length > 0 && i.ajax({
					url : n,
					type : s,
					dataType : "html",
					data : r
				}).done(function(n) {
					h = arguments;e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
				}).complete(u && function(n, t) {
						e.each(u, h || [ n.responseText, t, n ])
					}), this
		};i.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(n, t) {
			i.fn[t] = function(n) {
				return this.on(t, n)
			}
		});i.each([ "get", "post" ], function(n, r) {
			i[r] = function(n, u, f, e) {
				return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
						url : n,
						type : r,
						dataType : e,
						data : u,
						success : f
					})
			}
		});i.extend({
			active : 0,
			lastModified : {},
			etag : {},
			ajaxSettings : {
				url : s,
				type : "GET",
				isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(y[1]),
				global : !0,
				processData : !0,
				async : !0,
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				accepts : {
					"*" : nf,
					text : "text/plain",
					html : "text/html",
					xml : "application/xml, text/xml",
					json : "application/json, text/javascript"
				},
				contents : {
					xml : /xml/,
					html : /html/,
					json : /json/
				},
				responseFields : {
					xml : "responseXML",
					text : "responseText"
				},
				converters : {
					"* text" : n.String,
					"text html" : !0,
					"text json" : i.parseJSON,
					"text xml" : i.parseXML
				},
				flatOptions : {
					url : !0,
					context : !0
				}
			},
			ajaxSetup : function(n, t) {
				return t ? kt(kt(n, i.ajaxSettings), t) : kt(i.ajaxSettings, n)
			},
			ajaxPrefilter : cr(gu),
			ajaxTransport : cr(vi),
			ajax : function(n, r) {
				function w(n, r, o, s) {
					var l,
						b,
						w,
						rt,
						y,
						a = r;
					2 !== h && (h = 2, g && clearTimeout(g), v = t, d = s || "", f.readyState = n > 0 ? 4 : 0, o && (rt = of(u, f, o)), n >= 200 && 300 > n || 304 === n ? (u.ifModified && (y = f.getResponseHeader("Last-Modified"), y && (i.lastModified[e] = y), y = f.getResponseHeader("etag"), y && (i.etag[e] = y)), 304 === n ? (l = !0, a = "notmodified") : (l = sf(u, rt), a = l.state, b = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(c, [ b, a, f ]) : tt.rejectWith(c, [ f, a, w ]), f.statusCode(k), k = t, p && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [ f, u, l ? b : w ]), it.fireWith(c, [ f, a ]), p && (nt.trigger("ajaxComplete", [ f, u ]), --i.active || i.event.trigger("ajaxStop")))
				}
				"object" == typeof n && (r = n, n = t);
				r = r || {};
				var v,
					e,
					d,
					b,
					g,
					l,
					p,
					a,
					u = i.ajaxSetup({}, r),
					c = u.context || u,
					nt = u.context && (c.nodeType || c.jquery) ? i(c) : i.event,
					tt = i.Deferred(),
					it = i.Callbacks("once memory"),
					k = u.statusCode || {},
					rt = {},
					ut = {},
					h = 0,
					ft = "canceled",
					f = {
						readyState : 0,
						getResponseHeader : function(n) {
							var t;
							if (2 === h) {
								if (!b)
									for (b = {}; t = lo.exec(d);) b[t[1].toLowerCase()] = t[2];
								t = b[n.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders : function() {
							return 2 === h ? d : null
						},
						setRequestHeader : function(n, t) {
							var i = n.toLowerCase();
							return h || (n = ut[i] = ut[i] || n, rt[n] = t), this
						},
						overrideMimeType : function(n) {
							return h || (u.mimeType = n), this
						},
						statusCode : function(n) {
							var t;
							if (n)
								if (2 > h)
									for (t in n) k[t] = [ k[t], n[t] ];
								else f.always(n[f.status]);
							return this
						},
						abort : function(n) {
							var t = n || ft;
							return v && v.abort(t), w(0, t), this
						}
					};
				if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || s) + "").replace(co, "").replace(vo, y[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(o) || [ "" ], null == u.crossDomain && (l = ku.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === y[1] && l[2] === y[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (y[3] || ("http:" === y[1] ? 80 : 443)))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), lr(gu, u, r, f), 2 === h) return f;
				p = u.global;p && 0 == i.active++ && i.event.trigger("ajaxStart");
				u.type = u.type.toUpperCase();
				u.hasContent = !ao.test(u.type);
				e = u.url;u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data,
				delete u.data
				), u.cache === !1 && (u.url = bu.test(e) ? e.replace(bu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++));u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));(u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + nf + "; q=0.01" : "") : u.accepts["*"]);
				for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
				if (u.beforeSend && (u.beforeSend.call(c, f, u) === !1 || 2 === h)) return f.abort();
				ft = "abort";
				for (a in {success : 1, error : 1, complete : 1}) f[a](u[a]);
				if (v = lr(vi, u, r, f)) {
					f.readyState = 1;p && nt.trigger("ajaxSend", [ f, u ]);u.async && u.timeout > 0 && (g = setTimeout(function() {
						f.abort("timeout")
					}, u.timeout));try {
						h = 1;v.send(rt, w)
					} catch (et) {
						if (!(2 > h))
							throw et;
						w(-1, et)
					}
				} else w(-1, "No Transport");
				return f
			},
			getScript : function(n, r) {
				return i.get(n, t, r, "script")
			},
			getJSON : function(n, t, r) {
				return i.get(n, t, r, "json")
			}
		});i.ajaxSetup({
			accepts : {
				script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents : {
				script : /(?:java|ecma)script/
			},
			converters : {
				"text script" : function(n) {
					return i.globalEval(n), n
				}
			}
		});i.ajaxPrefilter("script", function(n) {
			n.cache === t && (n.cache = !1);n.crossDomain && (n.type = "GET", n.global = !1)
		});i.ajaxTransport("script", function(n) {
			if (n.crossDomain) {
				var u,
					f = r.head || i("head")[0] || r.documentElement;
				return {
					send : function(t, i) {
						u = r.createElement("script");
						u.async = !0;n.scriptCharset && (u.charset = n.scriptCharset);
						u.src = n.url;
						u.onload = u.onreadystatechange = function(n, t) {
							(t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
						};f.insertBefore(u, f.firstChild)
					},
					abort : function() {
						u && u.onload(t, !0)
					}
				}
			}
		});
		yi = [];
		ct = /(=)\?(?=&|$)|\?\?/;i.ajaxSetup({
			jsonp : "callback",
			jsonpCallback : function() {
				var n = yi.pop() || i.expando + "_" + li++;
				return this[n] = !0, n
			}
		});i.ajaxPrefilter("json jsonp", function(r, u, f) {
			var e,
				s,
				o,
				h = r.jsonp !== !1 && (ct.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ct.test(r.data) && "data");
			return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(ct, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
				return o || i.error(e + " was not called"), o[0]
			}, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
				o = arguments
			}, f.always(function() {
				n[e] = s;r[e] && (r.jsonpCallback = u.jsonpCallback, yi.push(e));o && i.isFunction(s) && s(o[0]);
				o = s = t
			}), "script") : t
		});
		tf = 0;
		lt = n.ActiveXObject && function() {
			var n;
			for (n in k) k[n](t, !0)
		};
		i.ajaxSettings.xhr = n.ActiveXObject ? function() {
			return !this.isLocal && ar() || hf()
		} : ar;
		d = i.ajaxSettings.xhr();
		i.support.cors = !!d && "withCredentials" in d;
		d = i.support.ajax = !!d;d && i.ajaxTransport(function(r) {
			if (!r.crossDomain || i.support.cors) {
				var u;
				return {
					send : function(f, e) {
						var h,
							s,
							o = r.xhr();
						if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
							for (s in r.xhrFields) o[s] = r.xhrFields[s];
						r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");try {
							for (s in f) o.setRequestHeader(s, f[s])
						} catch (c) {} o.send(r.hasContent && r.data || null);
						u = function(n, f) {
							var s,
								a,
								v,
								c,
								l;
							try {
								if (u && (f || 4 === o.readyState))
									if (u = t, h && (o.onreadystatechange = i.noop, lt &&
										delete k[h]
										), f) 4 !== o.readyState && o.abort();else {
										c = {};
										s = o.status;
										l = o.responseXML;
										v = o.getAllResponseHeaders();l && l.documentElement && (c.xml = l);"string" == typeof o.responseText && (c.text = o.responseText);try {
											a = o.statusText
										} catch (p) {
											a = ""
										}
										s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
								}
							} catch (y) {
								f || e(-1, y)
							} c && e(s, a, c, v)
						};
						r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++tf, lt && (k || (k = {}, i(n).unload(lt)), k[h] = u), o.onreadystatechange = u) : u()
					},
					abort : function() {
						u && u(t, !0)
					}
				}
			}
		});
		var g,
			at,
			yo = /^(?:toggle|show|hide)$/,
			po = RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
			wo = /queueHooks$/,
			vt = [ af ],
			it = {
				"*" : [ function(n, t) {
					var o,
						s,
						r = this.createTween(n, t),
						e = po.exec(t),
						h = r.cur(),
						u = +h || 0,
						f = 1,
						c = 20;
					if (e) {
						if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), "px" !== s && u) {
							u = i.css(r.elem, n, !0) || o || 1;
							do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
						}
						r.unit = s;
						r.start = u;
						r.end = e[1] ? u + (e[1] + 1) * o : o
					}
					return r
				} ]
			};
		i.Animation = i.extend(yr, {
			tweener : function(n, t) {
				i.isFunction(n) ? (t = n, n = [ "*" ]) : n = n.split(" ");
				for (var r, u = 0, f = n.length; f > u; u++) r = n[u], it[r] = it[r] || [], it[r].unshift(t)
			},
			prefilter : function(n, t) {
				t ? vt.unshift(n) : vt.push(n)
			}
		});
		i.Tween = f;
		f.prototype = {
			constructor : f,
			init : function(n, t, r, u, f, e) {
				this.elem = n;
				this.prop = r;
				this.easing = f || "swing";
				this.options = t;
				this.start = this.now = this.cur();
				this.end = u;
				this.unit = e || (i.cssNumber[r] ? "" : "px")
			},
			cur : function() {
				var n = f.propHooks[this.prop];
				return n && n.get ? n.get(this) : f.propHooks._default.get(this)
			},
			run : function(n) {
				var r,
					t = f.propHooks[this.prop];
				return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
			}
		};
		f.prototype.init.prototype = f.prototype;
		f.propHooks = {
			_default : {
				get : function(n) {
					var t;
					return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, "auto"), t && "auto" !== t ? t : 0) : n.elem[n.prop]
				},
				set : function(n) {
					i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
				}
			}
		};
		f.propHooks.scrollTop = f.propHooks.scrollLeft = {
			set : function(n) {
				n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
			}
		};i.each([ "toggle", "show", "hide" ], function(n, t) {
			var r = i.fn[t];
			i.fn[t] = function(n, i, u) {
				return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ut(t, !0), n, i, u)
			}
		});i.fn.extend({
			fadeTo : function(n, t, i, r) {
				return this.filter(nt).css("opacity", 0).show().end().animate({
					opacity : t
				}, n, i, r)
			},
			animate : function(n, t, r, u) {
				var o = i.isEmptyObject(n),
					e = i.speed(t, r, u),
					f = function() {
						var t = yr(this, i.extend({}, n), e);
						f.finish = function() {
							t.stop(!0)
						};(o || i._data(this, "finish")) && t.stop(!0)
					};
				return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
			},
			stop : function(n, r, u) {
				var f = function(n) {
					var t = n.stop;
					delete n.stop;
					t(u)
				};
				return "string" != typeof n && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
						var o = !0,
							t = null != n && n + "queueHooks",
							e = i.timers,
							r = i._data(this);
						if (t) r[t] && r[t].stop && f(r[t]);else
							for (t in r) r[t] && r[t].stop && wo.test(t) && f(r[t]);
						for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
						(o || !u) && i.dequeue(this, n)
					})
			},
			finish : function(n) {
				return n !== !1 && (n = n || "fx"), this.each(function() {
						var t,
							f = i._data(this),
							r = f[n + "queue"],
							e = f[n + "queueHooks"],
							u = i.timers,
							o = r ? r.length : 0;
						for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
						for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete f.finish
					})
			}
		});i.each({
			slideDown : ut("show"),
			slideUp : ut("hide"),
			slideToggle : ut("toggle"),
			fadeIn : {
				opacity : "show"
			},
			fadeOut : {
				opacity : "hide"
			},
			fadeToggle : {
				opacity : "toggle"
			}
		}, function(n, t) {
			i.fn[n] = function(n, i, r) {
				return this.animate(t, n, i, r)
			}
		});
		i.speed = function(n, t, r) {
			var u = n && "object" == typeof n ? i.extend({}, n) : {
				complete : r || !r && t || i.isFunction(n) && n,
				duration : n,
				easing : r && t || t && !i.isFunction(t) && t
			};
			return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
					i.isFunction(u.old) && u.old.call(this);u.queue && i.dequeue(this, u.queue)
				}, u
		};
		i.easing = {
			linear : function(n) {
				return n
			},
			swing : function(n) {
				return .5 - Math.cos(n * Math.PI) / 2
			}
		};
		i.timers = [];
		i.fx = f.prototype.init;
		i.fx.tick = function() {
			var u,
				n = i.timers,
				r = 0;
			for (g = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
			n.length || i.fx.stop();
			g = t
		};
		i.fx.timer = function(n) {
			n() && i.timers.push(n) && i.fx.start()
		};
		i.fx.interval = 13;
		i.fx.start = function() {
			at || (at = setInterval(i.fx.tick, i.fx.interval))
		};
		i.fx.stop = function() {
			clearInterval(at);
			at = null
		};
		i.fx.speeds = {
			slow : 600,
			fast : 200,
			_default : 400
		};
		i.fx.step = {};i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
			return i.grep(i.timers, function(t) {
				return n === t.elem
			}).length
		});
		i.fn.offset = function(n) {
			if (arguments.length) return n === t ? this : this.each(function(t) {
					i.offset.setOffset(this, n, t)
				});
			var r,
				e,
				f = {
					top : 0,
					left : 0
				},
				u = this[0],
				o = u && u.ownerDocument;
			if (o) return r = o.documentElement, i.contains(r, u) ? (u.getBoundingClientRect !== t && (f = u.getBoundingClientRect()), e = pr(o), {
						top : f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
						left : f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
					}) : f
		};
		i.offset = {
			setOffset : function(n, t, r) {
				var f = i.css(n, "position");
				"static" === f && (n.style.position = "relative");
				var e,
					o,
					s = i(n),
					h = s.offset(),
					l = i.css(n, "top"),
					a = i.css(n, "left"),
					v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [ l, a ]) > -1,
					u = {},
					c = {};
				v ? (c = s.position(), e = c.top, o = c.left) : (e = parseFloat(l) || 0, o = parseFloat(a) || 0);i.isFunction(t) && (t = t.call(n, r, h));null != t.top && (u.top = t.top - h.top + e);null != t.left && (u.left = t.left - h.left + o);
				"using" in t ? t.using.call(n, u) : s.css(u)
			}
		};i.fn.extend({
			position : function() {
				if (this[0]) {
					var n,
						r,
						t = {
							top : 0,
							left : 0
						},
						u = this[0];
					return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
							top : r.top - t.top - i.css(u, "marginTop", !0),
							left : r.left - t.left - i.css(u, "marginLeft", !0)
					}
				}
			},
			offsetParent : function() {
				return this.map(function() {
					for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
					return n || r.documentElement
				})
			}
		});i.each({
			scrollLeft : "pageXOffset",
			scrollTop : "pageYOffset"
		}, function(n, r) {
			var u = /Y/.test(r);
			i.fn[n] = function(f) {
				return i.access(this, function(n, f, e) {
					var o = pr(n);
					return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e, t)
				}, n, f, arguments.length, null)
			}
		});i.each({
			Height : "height",
			Width : "width"
		}, function(n, r) {
			i.each({
				padding : "inner" + n,
				content : r,
				"" : "outer" + n
			}, function(u, f) {
				i.fn[f] = function(f, e) {
					var o = arguments.length && (u || "boolean" != typeof f),
						s = u || (f === !0 || e === !0 ? "margin" : "border");
					return i.access(this, function(r, u, f) {
						var e;
						return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
					}, r, o ? f : t, o, null)
				}
			})
		});
		n.jQuery = n.$ = i;"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
			return i
		})
	}(window), function(n) {
		n.extend(n.fn, {
			validate : function(t) {
				if (!this.length) {
					t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");return
				}
				var i = n.data(this[0], "validator");
				return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
					i.settings.submitHandler && (i.submitButton = t.target);n(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
				}), this.submit(function(t) {
					function r() {
						var r;
						return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
					}
					return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
				})), i)
			},
			valid : function() {
				if (n(this[0]).is("form")) return this.validate().form();
				var t = !0,
					i = n(this[0].form).validate();
				return this.each(function() {
						t &= i.element(this)
					}), t
			},
			removeAttrs : function(t) {
				var i = {},
					r = this;
				return n.each(t.split(/\s/), function(n, t) {
						i[t] = r.attr(t);r.removeAttr(t)
					}), i
			},
			rules : function(t, i) {
				var r = this[0],
					o,
					u,
					h;
				if (t) {
					var e = n.data(r.form, "validator").settings,
						s = e.rules,
						f = n.validator.staticRules(r);
					switch (t) {
					case "add":
						n.extend(f, n.validator.normalizeRule(i));s[r.name] = f;i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
						break;case "remove":
						return i ? (o = {}, n.each(i.split(/\s/), function(n, t) {
							o[t] = f[t];
							delete f[t]
						}), o) : (
							delete s[r.name]
							, f)
					}
				}
				return u = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required,
					delete u.required
					, u = n.extend({
						required : h
					}, u)), u
			}
		});n.extend(n.expr[":"], {
			blank : function(t) {
				return !n.trim("" + t.value)
			},
			filled : function(t) {
				return !!n.trim("" + t.value)
			},
			unchecked : function(n) {
				return !n.checked
			}
		});
		n.validator = function(t, i) {
			this.settings = n.extend(!0, {}, n.validator.defaults, t);
			this.currentForm = i;this.init()
		};
		n.validator.format = function(t, i) {
			return arguments.length === 1 ? function() {
				var i = n.makeArray(arguments);
				return i.unshift(t), n.validator.format.apply(this, i)
			} : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [ i ]), n.each(i, function(n, i) {
				t = t.replace(new RegExp("\\{" + n + "\\}", "g"), i)
			}), t)
		};n.extend(n.validator, {
			defaults : {
				messages : {},
				groups : {},
				rules : {},
				errorClass : "error",
				validClass : "valid",
				errorElement : "label",
				focusInvalid : !0,
				errorContainer : n([]),
				errorLabelContainer : n([]),
				onsubmit : !0,
				ignore : ":hidden",
				ignoreTitle : !1,
				onfocusin : function(n) {
					this.lastActive = n;this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
				},
				onfocusout : function(n) {
					!this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
				},
				onkeyup : function(n, t) {
					(t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastActive) && this.element(n)
				},
				onclick : function(n) {
					n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
				},
				highlight : function(t, i, r) {
					t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
				},
				unhighlight : function(t, i, r) {
					t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
				}
			},
			setDefaults : function(t) {
				n.extend(n.validator.defaults, t)
			},
			messages : {
				required : "This field is required.",
				remote : "Please fix this field.",
				email : "Please enter a valid email address.",
				url : "Please enter a valid URL.",
				date : "Please enter a valid date.",
				dateISO : "Please enter a valid date (ISO).",
				number : "Please enter a valid number.",
				digits : "Please enter only digits.",
				creditcard : "Please enter a valid credit card number.",
				equalTo : "Please enter the same value again.",
				maxlength : n.validator.format("Please enter no more than {0} characters."),
				minlength : n.validator.format("Please enter at least {0} characters."),
				rangelength : n.validator.format("Please enter a value between {0} and {1} characters long."),
				range : n.validator.format("Please enter a value between {0} and {1}."),
				max : n.validator.format("Please enter a value less than or equal to {0}."),
				min : n.validator.format("Please enter a value greater than or equal to {0}.")
			},
			autoCreateRanges : !1,
			prototype : {
				init : function() {
					function i(t) {
						var i = n.data(this[0].form, "validator"),
							r = "on" + t.type.replace(/^validate/, "");
						i.settings[r] && i.settings[r].call(i, this[0], t)
					}
					var r,
						t;
					this.labelContainer = n(this.settings.errorLabelContainer);
					this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
					this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
					this.submitted = {};
					this.valueCache = {};
					this.pendingRequest = 0;
					this.pending = {};
					this.invalid = {};this.reset();
					r = this.groups = {};n.each(this.settings.groups, function(t, i) {
						n.each(i.split(/\s/), function(n, i) {
							r[i] = t
						})
					});
					t = this.settings.rules;n.each(t, function(i, r) {
						t[i] = n.validator.normalizeRule(r)
					});n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
				},
				form : function() {
					return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), this.valid()
				},
				checkForm : function() {
					this.prepareForm();
					for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
					return this.valid()
				},
				element : function(t) {
					t = this.validationTargetFor(this.clean(t));
					this.lastElement = t;this.prepareElement(t);
					this.currentElements = n(t);
					var i = this.check(t) !== !1;
					return i ?
							delete this.invalid[t.name]
							: this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
				},
				showErrors : function(t) {
					if (t) {
						n.extend(this.errorMap, t);
						this.errorList = [];
						for (var i in t) this.errorList.push({
								message : t[i],
								element : this.findByName(i)[0]
							});
						this.successList = n.grep(this.successList, function(n) {
							return !(n.name in t)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm : function() {
					n.fn.resetForm && n(this.currentForm).resetForm();
					this.submitted = {};
					this.lastElement = null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
				},
				numberOfInvalids : function() {
					return this.objectLength(this.invalid)
				},
				objectLength : function(n) {
					var t = 0,
						i;
					for (i in n) t++;
					return t
				},
				hideErrors : function() {
					this.addWrapper(this.toHide).hide()
				},
				valid : function() {
					return this.size() === 0
				},
				size : function() {
					return this.errorList.length
				},
				focusInvalid : function() {
					if (this.settings.focusInvalid) try {
							n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
						} catch (t) {}
				},
				findLastActive : function() {
					var t = this.lastActive;
					return t && n.grep(this.errorList, function(n) {
							return n.element.name === t.name
						}).length === 1 && t
				},
				elements : function() {
					var t = this,
						i = {};
					return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
						return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
					})
				},
				clean : function(t) {
					return n(t)[0]
				},
				errors : function() {
					var t = this.settings.errorClass.replace(" ", ".");
					return n(this.settings.errorElement + "." + t, this.errorContext)
				},
				reset : function() {
					this.successList = [];
					this.errorList = [];
					this.errorMap = {};
					this.toShow = n([]);
					this.toHide = n([]);
					this.currentElements = n([])
				},
				prepareForm : function() {
					this.reset();
					this.toHide = this.errors().add(this.containers)
				},
				prepareElement : function(n) {
					this.reset();
					this.toHide = this.errorsFor(n)
				},
				elementValue : function(t) {
					var r = n(t).attr("type"),
						i = n(t).val();
					return r === "radio" || r === "checkbox" ? n('input[name="' + n(t).attr("name") + '"]:checked').val() : typeof i == "string" ? i.replace(/\r/g, "") : i
				},
				check : function(t) {
					var r,
						u;
					t = this.validationTargetFor(this.clean(t));
					var f = n(t).rules(),
						e = !1,
						s = this.elementValue(t),
						i;
					for (r in f) {
						u = {
							method : r,
							parameters : f[r]
						};try {
							if (i = n.validator.methods[r].call(this, s, t, u.parameters), i === "dependency-mismatch") {
								e = !0;continue
							}
							if (e = !1, i === "pending") {
								this.toHide = this.toHide.not(this.errorsFor(t));return
							}
							if (!i) return this.formatAndAdd(t, u), !1
						} catch (o) {
							throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + u.method + "' method", o), o;
						}
					}
					if (!e) return this.objectLength(f) && this.successList.push(t), !0
				},
				customMetaMessage : function(t, i) {
					if (n.metadata) {
						var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
						return r && r.messages && r.messages[i]
					}
				},
				customDataMessage : function(t, i) {
					return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
				},
				customMessage : function(n, t) {
					var i = this.settings.messages[n];
					return i && (i.constructor === String ? i : i[t])
				},
				findDefined : function() {
					for (var n = 0; n < arguments.length; n++)
						if (arguments[n] !== undefined) return arguments[n];
					return undefined
				},
				defaultMessage : function(t, i) {
					return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
				},
				formatAndAdd : function(t, i) {
					var r = this.defaultMessage(t, i.method),
						u = /\$?\{(\d+)\}/g;
					typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));this.errorList.push({
						message : r,
						element : t
					});
					this.errorMap[t.name] = r;
					this.submitted[t.name] = r
				},
				addWrapper : function(n) {
					return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
				},
				defaultShowErrors : function() {
					for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
					if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
					if (this.settings.unhighlight)
						for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()
				},
				validElements : function() {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements : function() {
					return n(this.errorList).map(function() {
						return this.element
					})
				},
				showLabel : function(t, i) {
					var r = this.errorsFor(t);
					r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
						"for" : this.idOrName(t),
						generated : !0
					}).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));!i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
					this.toShow = this.toShow.add(r)
				},
				errorsFor : function(t) {
					var i = this.idOrName(t);
					return this.errors().filter(function() {
						return n(this).attr("for") === i
					})
				},
				idOrName : function(n) {
					return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
				},
				validationTargetFor : function(n) {
					return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
				},
				checkable : function(n) {
					return /radio|checkbox/i.test(n.type)
				},
				findByName : function(t) {
					return n(this.currentForm).find('[name="' + t + '"]')
				},
				getLength : function(t, i) {
					switch (i.nodeName.toLowerCase()) {
					case "select":
						return n("option:selected", i).length;case "input":
						if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
					}
					return t.length
				},
				depend : function(n, t) {
					return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
				},
				dependTypes : {
					boolean : function(n) {
						return n
					},
					string : function(t, i) {
						return !!n(t, i.form).length
					},
					"function" : function(n, t) {
						return n(t)
					}
				},
				optional : function(t) {
					var i = this.elementValue(t);
					return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
				},
				startRequest : function(n) {
					this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
				},
				stopRequest : function(t, i) {
					this.pendingRequest--;this.pendingRequest < 0 && (this.pendingRequest = 0);
					delete this.pending[t.name];
					i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [ this ]), this.formSubmitted = !1)
				},
				previousValue : function(t) {
					return n.data(t, "previousValue") || n.data(t, "previousValue", {
							old : null,
							valid : !0,
							message : this.defaultMessage(t, "remote")
						})
				}
			},
			classRuleSettings : {
				required : {
					required : !0
				},
				email : {
					email : !0
				},
				url : {
					url : !0
				},
				date : {
					date : !0
				},
				dateISO : {
					dateISO : !0
				},
				number : {
					number : !0
				},
				digits : {
					digits : !0
				},
				creditcard : {
					creditcard : !0
				}
			},
			addClassRules : function(t, i) {
				t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
			},
			classRules : function(t) {
				var i = {},
					r = n(t).attr("class");
				return r && n.each(r.split(" "), function() {
						this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
					}), i
			},
			attributeRules : function(t) {
				var u = {},
					f = n(t),
					r,
					i;
				for (r in n.validator.methods) r === "required" ? (i = f.get(0).getAttribute(r), i === "" && (i = !0), i = !!i) : i = f.attr(r), i ? u[r] = i : f[0].getAttribute("type") === r && (u[r] = !0);
				return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) &&
					delete u.maxlength
					, u
			},
			metadataRules : function(t) {
				if (!n.metadata) return {};
				var i = n.data(t.form, "validator").settings.meta;
				return i ? n(t).metadata()[i] : n(t).metadata()
			},
			staticRules : function(t) {
				var i = {},
					r = n.data(t.form, "validator");
				return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
			},
			normalizeRules : function(t, i) {
				return n.each(t, function(r, u) {
						if (u === !1) {
							delete t[r];
							return
						}
						if (u.param || u.depends) {
							var f = !0;
							switch (typeof u.depends) {
							case "string":
								f = !!n(u.depends, i.form).length;
								break;case "function":
								f = u.depends.call(i, i)
							}
							f ? t[r] = u.param !== undefined ? u.param : !0 :
								delete t[r]
						}
					}), n.each(t, function(r, u) {
						t[r] = n.isFunction(u) ? u(i) : u
					}), n.each([ "minlength", "maxlength", "min", "max" ], function() {
						t[this] && (t[this] = Number(t[this]))
					}), n.each([ "rangelength", "range" ], function() {
						t[this] && (t[this] = [ Number(t[this][0]), Number(t[this][1]) ])
					}), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [ t.min, t.max ],
					delete t.min
					,
					delete t.max
					), t.minlength && t.maxlength && (t.rangelength = [ t.minlength, t.maxlength ],
					delete t.minlength
					,
					delete t.maxlength
					)), t.messages &&
					delete t.messages
					, t
			},
			normalizeRule : function(t) {
				if (typeof t == "string") {
					var i = {};
					n.each(t.split(/\s/), function() {
						i[this] = !0
					});
					t = i
				}
				return t
			},
			addMethod : function(t, i, r) {
				n.validator.methods[t] = i;
				n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
			},
			methods : {
				required : function(t, i, r) {
					if (!this.depend(r, i)) return "dependency-mismatch";
					if (i.nodeName.toLowerCase() === "select") {
						var u = n(i).val();
						return u && u.length > 0
					}
					return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
				},
				remote : function(t, i, r) {
					var f,
						u,
						e;
					return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
							url : r
						} || r, this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
						url : r,
						mode : "abort",
						port : "validate" + i.name,
						dataType : "json",
						data : e,
						success : function(r) {
							var e,
								h,
								s,
								o;
							u.settings.messages[i.name].remote = f.originalMessage;
							e = r === !0 || r === "true";
							e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i),
							delete u.invalid[i.name]
							, u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
							f.valid = e;u.stopRequest(i, e)
						}
					}, r)), "pending")
				},
				minlength : function(t, i, r) {
					var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
					return this.optional(i) || u >= r
				},
				maxlength : function(t, i, r) {
					var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
					return this.optional(i) || u <= r
				},
				rangelength : function(t, i, r) {
					var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
					return this.optional(i) || u >= r[0] && u <= r[1]
				},
				min : function(n, t, i) {
					return this.optional(t) || n >= i
				},
				max : function(n, t, i) {
					return this.optional(t) || n <= i
				},
				range : function(n, t, i) {
					return this.optional(t) || n >= i[0] && n <= i[1]
				},
				email : function(n, t) {
					return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
				},
				url : function(n, t) {
					return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
				},
				date : function(n, t) {
					return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
				},
				dateISO : function(n, t) {
					return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
				},
				number : function(n, t) {
					return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
				},
				digits : function(n, t) {
					return this.optional(t) || /^\d+$/.test(n)
				},
				creditcard : function(n, t) {
					var r,
						e;
					if (this.optional(t)) return "dependency-mismatch";
					if (/[^0-9 \-]+/.test(n)) return !1;
					var f = 0,
						i = 0,
						u = !1;
					for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
					return f % 10 == 0
				},
				equalTo : function(t, i, r) {
					var u = n(r);
					return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
							n(i).valid()
						}), t === u.val()
				}
			}
		});
		n.format = n.validator.format
	}(jQuery), function(n) {
		var t = {},
			i;
		n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
			var u = n.port;
			n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
		}) : (i = n.ajax, n.ajax = function(r) {
			var f = ("mode" in r ? r : n.ajaxSettings).mode,
				u = ("port" in r ? r : n.ajaxSettings).port;
			return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
		})
	}(jQuery), function(n) {
		jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({
			focus : "focusin",
			blur : "focusout"
		}, function(t, i) {
			function r(t) {
				return t = n.event.fix(t), t.type = i, n.event.handle.call(this, t)
			}
			n.event.special[i] = {
				setup : function() {
					this.addEventListener(t, r, !0)
				},
				teardown : function() {
					this.removeEventListener(t, r, !0)
				},
				handler : function(t) {
					var r = arguments;
					return r[0] = n.event.fix(t), r[0].type = i, n.event.handle.apply(this, r)
				}
			}
		});n.extend(n.fn, {
			validateDelegate : function(t, i, r) {
				return this.bind(i, function(i) {
					var u = n(i.target);
					if (u.is(t)) return r.apply(u, arguments)
				})
			}
		})
	}(jQuery), "undefined" == typeof jQuery)
	throw new Error("Bootstrap requires jQuery");
+function(n) {
	"use strict";
	function t() {
		var i = document.createElement("bootstrap"),
			t = {
				WebkitTransition : "webkitTransitionEnd",
				MozTransition : "transitionend",
				OTransition : "oTransitionEnd otransitionend",
				transition : "transitionend"
			},
			n;
		for (n in t)
			if (void 0 !== i.style[n]) return {
					end : t[n]
		}
	}
	n.fn.emulateTransitionEnd = function(t) {
		var i = !1,
			u = this,
			r;
		n(this).one(n.support.transition.end, function() {
			i = !0
		});return r = function() {
				i || n(u).trigger(n.support.transition.end)
			}, setTimeout(r, t), this
	};n(function() {
		n.support.transition = t()
	})
}(window.jQuery);+function(n) {
	"use strict";
	var i = '[data-dismiss="alert"]',
		t = function(t) {
			n(t).on("click", i, this.close)
		},
		r;
	t.prototype.close = function(t) {
		function f() {
			i.trigger("closed.bs.alert").remove()
		}
		var u = n(this),
			r = u.attr("data-target"),
			i;
		r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
		i = n(r);t && t.preventDefault();i.length || (i = u.hasClass("alert") ? u : u.parent());i.trigger(t = n.Event("close.bs.alert"));t.isDefaultPrevented() || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.one(n.support.transition.end, f).emulateTransitionEnd(150) : f())
	};
	r = n.fn.alert;
	n.fn.alert = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.alert");
			u || r.data("bs.alert", u = new t(this));"string" == typeof i && u[i].call(r)
		})
	};
	n.fn.alert.Constructor = t;
	n.fn.alert.noConflict = function() {
		return n.fn.alert = r, this
	};n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r)
		},
		i;
	t.DEFAULTS = {
		loadingText : "loading..."
	};
	t.prototype.setState = function(n) {
		var i = "disabled",
			t = this.$element,
			r = t.is("input") ? "val" : "html",
			u = t.data();
		n += "Text";u.resetText || t.data("resetText", t[r]());t[r](u[n] || this.options[n]);setTimeout(function() {
			"loadingText" == n ? t.addClass(i).attr(i, i) : t.removeClass(i).removeAttr(i)
		}, 0)
	};
	t.prototype.toggle = function() {
		var n = this.$element.closest('[data-toggle="buttons"]'),
			t;
		n.length && (t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change"), "radio" === t.prop("type") && n.find(".active").removeClass("active"));this.$element.toggleClass("active")
	};
	i = n.fn.button;
	n.fn.button = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.button"),
				f = "object" == typeof i && i;
			r || u.data("bs.button", r = new t(this, f));
			"toggle" == i ? r.toggle() : i && r.setState(i)
		})
	};
	n.fn.button.Constructor = t;
	n.fn.button.noConflict = function() {
		return n.fn.button = i, this
	};n(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
		var i = n(t.target);
		i.hasClass("btn") || (i = i.closest(".btn"));i.button("toggle");t.preventDefault()
	})
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(t, i) {
			this.$element = n(t);
			this.$indicators = this.$element.find(".carousel-indicators");
			this.options = i;
			this.paused = this.sliding = this.interval = this.$active = this.$items = null;"hover" == this.options.pause && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
		},
		i;
	t.DEFAULTS = {
		interval : 5e3,
		pause : "hover",
		wrap : !0
	};
	t.prototype.cycle = function(t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
	};
	t.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	};
	t.prototype.to = function(t) {
		var r = this,
			i = this.getActiveIndex();
		if (!(t > this.$items.length - 1) && !(0 > t)) return this.sliding ? this.$element.one("slid", function() {
				r.to(t)
			}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
	};
	t.prototype.pause = function(t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition.end && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	};
	t.prototype.next = function() {
		if (!this.sliding) return this.slide("next")
	};
	t.prototype.prev = function() {
		if (!this.sliding) return this.slide("prev")
	};
	t.prototype.slide = function(t, i) {
		var u = this.$element.find(".item.active"),
			r = i || u[t](),
			s = this.interval,
			f = "next" == t ? "left" : "right",
			h = "next" == t ? "first" : "last",
			o = this,
			e;
		if (!r.length) {
			if (!this.options.wrap) return;
			r = this.$element.find(".item")[h]()
		}
		if (this.sliding = !0, s && this.pause(), e = n.Event("slide.bs.carousel", {
				relatedTarget : r[0],
				direction : f
			}), !r.hasClass("active")) {
			if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
					var t = n(o.$indicators.children()[o.getActiveIndex()]);
					t && t.addClass("active")
				})), n.support.transition && this.$element.hasClass("slide")) {
				if (this.$element.trigger(e), e.isDefaultPrevented()) return;
				r.addClass(t);r[0].offsetWidth;u.addClass(f);r.addClass(f);u.one(n.support.transition.end, function() {
					r.removeClass([ t, f ].join(" ")).addClass("active");u.removeClass([ "active", f ].join(" "));
					o.sliding = !1;setTimeout(function() {
						o.$element.trigger("slid")
					}, 0)
				}).emulateTransitionEnd(600)
			} else {
				if (this.$element.trigger(e), e.isDefaultPrevented()) return;
				u.removeClass("active");r.addClass("active");
				this.sliding = !1;this.$element.trigger("slid")
			}
			return s && this.cycle(), this
		}
	};
	i = n.fn.carousel;
	n.fn.carousel = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.carousel"),
				f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
				e = "string" == typeof i ? i : f.slide;
			r || u.data("bs.carousel", r = new t(this, f));
			"number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
		})
	};
	n.fn.carousel.Constructor = t;
	n.fn.carousel.noConflict = function() {
		return n.fn.carousel = i, this
	};n(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
		var f,
			i = n(this),
			r = n(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
			e = n.extend({}, r.data(), i.data()),
			u = i.attr("data-slide-to");
		u && (e.interval = !1);r.carousel(e);(u = i.attr("data-slide-to")) && r.data("bs.carousel").to(u);t.preventDefault()
	});n(window).on("load", function() {
		n('[data-ride="carousel"]').each(function() {
			var t = n(this);
			t.carousel(t.data())
		})
	})
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(i, r) {
			this.$element = n(i);
			this.options = n.extend({}, t.DEFAULTS, r);
			this.transitioning = null;this.options.parent && (this.$parent = n(this.options.parent));this.options.toggle && this.toggle()
		},
		i;
	t.DEFAULTS = {
		toggle : !0
	};
	t.prototype.dimension = function() {
		var n = this.$element.hasClass("width");
		return n ? "width" : "height"
	};
	t.prototype.show = function() {
		var u,
			t,
			r,
			i,
			f,
			e;
		if (!this.transitioning && !this.$element.hasClass("in") && (u = n.Event("show.bs.collapse"), this.$element.trigger(u), !u.isDefaultPrevented())) {
			if (t = this.$parent && this.$parent.find("> .panel > .in"), t && t.length) {
				if (r = t.data("bs.collapse"), r && r.transitioning) return;
				t.collapse("hide");r || t.data("bs.collapse", null)
			}
			if (i = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1, f = function() {
					this.$element.removeClass("collapsing").addClass("in")[i]("auto");
					this.transitioning = 0;this.$element.trigger("shown.bs.collapse")
				}, !n.support.transition) return f.call(this);
			e = n.camelCase([ "scroll", i ].join("-"));this.$element.one(n.support.transition.end, n.proxy(f, this)).emulateTransitionEnd(350)[i](this.$element[0][e])
		}
	};
	t.prototype.hide = function() {
		var i,
			t,
			r;
		if (!this.transitioning && this.$element.hasClass("in") && (i = n.Event("hide.bs.collapse"), this.$element.trigger(i), !i.isDefaultPrevented())) return t = this.dimension(), this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, r = function() {
					this.transitioning = 0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				}, n.support.transition ? (this.$element[t](0).one(n.support.transition.end, n.proxy(r, this)).emulateTransitionEnd(350), void 0) : r.call(this)
	};
	t.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	i = n.fn.collapse;
	n.fn.collapse = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("bs.collapse"),
				f = n.extend({}, t.DEFAULTS, r.data(), "object" == typeof i && i);
			u || r.data("bs.collapse", u = new t(this, f));"string" == typeof i && u[i]()
		})
	};
	n.fn.collapse.Constructor = t;
	n.fn.collapse.noConflict = function() {
		return n.fn.collapse = i, this
	};n(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
		var e,
			i = n(this),
			s = i.attr("data-target") || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
			r = n(s),
			u = r.data("bs.collapse"),
			h = u ? "toggle" : i.data(),
			f = i.attr("data-parent"),
			o = f && n(f);
		u && u.transitioning || (o && o.find('[data-toggle=collapse][data-parent="' + f + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed"));r.collapse(h)
	})
}(window.jQuery);+function(n) {
	"use strict";
	function r() {
		n(e).remove();n(i).each(function(t) {
			var i = u(n(this));
			i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown")), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
		})
	}
	function u(t) {
		var i = t.attr("data-target"),
			r;
		return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
	}
	var e = ".dropdown-backdrop",
		i = "[data-toggle=dropdown]",
		t = function(t) {
			n(t).on("click.bs.dropdown", this.toggle)
		},
		f;
	t.prototype.toggle = function(t) {
		var f = n(this),
			i,
			e;
		if (!f.is(".disabled, :disabled")) {
			if (i = u(f), e = i.hasClass("open"), r(), !e) {
				if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), i.trigger(t = n.Event("show.bs.dropdown")), t.isDefaultPrevented()) return;
				i.toggleClass("open").trigger("shown.bs.dropdown");f.focus()
			}
			return !1
		}
	};
	t.prototype.keydown = function(t) {
		var e,
			o,
			s,
			f,
			r;
		if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
			if (o = u(e), s = o.hasClass("open"), !s || s && 27 == t.keyCode) return 27 == t.which && o.find(i).focus(), e.click();
			f = n("[role=menu] li:not(.divider):visible a", o);f.length && (r = f.index(f.filter(":focus")), 38 == t.keyCode && r > 0 && r--, 40 == t.keyCode && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).focus())
		}
	};
	f = n.fn.dropdown;
	n.fn.dropdown = function(i) {
		return this.each(function() {
			var r = n(this),
				u = r.data("dropdown");
			u || r.data("dropdown", u = new t(this));"string" == typeof i && u[i].call(r)
		})
	};
	n.fn.dropdown.Constructor = t;
	n.fn.dropdown.noConflict = function() {
		return n.fn.dropdown = f, this
	};n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
		n.stopPropagation()
	}).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", t.prototype.keydown)
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(t, i) {
			this.options = i;
			this.$element = n(t);
			this.$backdrop = this.isShown = null;this.options.remote && this.$element.load(this.options.remote)
		},
		i;
	t.DEFAULTS = {
		backdrop : !0,
		keyboard : !0,
		show : !0
	};
	t.prototype.toggle = function(n) {
		return this[this.isShown ? "hide" : "show"](n)
	};
	t.prototype.show = function(t) {
		var i = this,
			r = n.Event("show.bs.modal", {
				relatedTarget : t
			});
		this.$element.trigger(r);this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function() {
			var u = n.support.transition && i.$element.hasClass("fade"),
				r;
			i.$element.parent().length || i.$element.appendTo(document.body);i.$element.show();u && i.$element[0].offsetWidth;i.$element.addClass("in").attr("aria-hidden", !1);i.enforceFocus();
			r = n.Event("shown.bs.modal", {
				relatedTarget : t
			});
			u ? i.$element.find(".modal-dialog").one(n.support.transition.end, function() {
				i.$element.focus().trigger(r)
			}).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
		}))
	};
	t.prototype.hide = function(t) {
		t && t.preventDefault();
		t = n.Event("hide.bs.modal");this.$element.trigger(t);this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one(n.support.transition.end, n.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	};
	t.prototype.enforceFocus = function() {
		n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
			this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.focus()
		}, this))
	};
	t.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", n.proxy(function(n) {
			27 == n.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	};
	t.prototype.hideModal = function() {
		var n = this;
		this.$element.hide();this.backdrop(function() {
			n.removeBackdrop();n.$element.trigger("hidden.bs.modal")
		})
	};
	t.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove();
		this.$backdrop = null
	};
	t.prototype.backdrop = function(t) {
		var r = this.$element.hasClass("fade") ? "fade" : "",
			i;
		if (this.isShown && this.options.backdrop) {
			if (i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", n.proxy(function(n) {
					n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			i ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()
		} else
			!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
	};
	i = n.fn.modal;
	n.fn.modal = function(i, r) {
		return this.each(function() {
			var f = n(this),
				u = f.data("bs.modal"),
				e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
			u || f.data("bs.modal", u = new t(this, e));
			"string" == typeof i ? u[i](r) : e.show && u.show(r)
		})
	};
	n.fn.modal.Constructor = t;
	n.fn.modal.noConflict = function() {
		return n.fn.modal = i, this
	};n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
		var i = n(this),
			r = i.attr("href"),
			u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
			f = u.data("modal") ? "toggle" : n.extend({
				remote : !/#/.test(r) && r
			}, u.data(), i.data());
		t.preventDefault();u.modal(f, this).one("hide", function() {
			i.is(":visible") && i.focus()
		})
	});n(document).on("show.bs.modal", ".modal", function() {
		n(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		n(document.body).removeClass("modal-open")
	})
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(n, t) {
			this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;this.init("tooltip", n, t)
		},
		i;
	t.DEFAULTS = {
		animation : !0,
		placement : "top",
		selector : !1,
		template : '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
		trigger : "hover focus",
		title : "",
		delay : 0,
		html : !1,
		container : !1
	};
	t.prototype.init = function(t, i, r) {
		var f,
			e,
			u,
			o,
			s;
		for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), f = this.options.trigger.split(" "), e = f.length; e--;)
			if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));else "manual" != u && (o = "hover" == u ? "mouseenter" : "focus", s = "hover" == u ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
		this.options.selector ? this._options = n.extend({}, this.options, {
			trigger : "manual",
			selector : ""
		}) : this.fixTitle()
	};
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.getOptions = function(t) {
		return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
				show : t.delay,
				hide : t.delay
			}), t
	};
	t.prototype.getDelegateOptions = function() {
		var t = {},
			i = this.getDefaults();
		return this._options && n.each(this._options, function(n, r) {
				i[n] != r && (t[n] = r)
			}), t
	};
	t.prototype.enter = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function() {
				"in" == i.hoverState && i.show()
			}, i.options.delay.show), void 0) : i.show()
	};
	t.prototype.leave = function(t) {
		var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function() {
				"out" == i.hoverState && i.hide()
			}, i.options.delay.hide), void 0) : i.hide()
	};
	t.prototype.show = function() {
		var o = n.Event("show.bs." + this.type),
			i,
			l;
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(o), o.isDefaultPrevented()) return;
			i = this.tip();this.setContent();this.options.animation && i.addClass("fade");
			var t = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
				s = /\s?auto?\s?/i,
				h = s.test(t);
			h && (t = t.replace(s, "") || "top");i.detach().css({
				top : 0,
				left : 0,
				display : "block"
			}).addClass(t);
			this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
			var r = this.getPosition(),
				u = i[0].offsetWidth,
				f = i[0].offsetHeight;
			if (h) {
				var e = this.$element.parent(),
					a = t,
					c = document.documentElement.scrollTop || document.body.scrollTop,
					v = "body" == this.options.container ? window.innerWidth : e.outerWidth(),
					y = "body" == this.options.container ? window.innerHeight : e.outerHeight(),
					p = "body" == this.options.container ? 0 : e.offset().left;
				t = "bottom" == t && r.top + r.height + f - c > y ? "top" : "top" == t && r.top - c - f < 0 ? "bottom" : "right" == t && r.right + u > v ? "left" : "left" == t && r.left - u < p ? "right" : t;i.removeClass(a).addClass(t)
			}
			l = this.getCalculatedOffset(t, r, u, f);this.applyPlacement(l, t);this.$element.trigger("shown.bs." + this.type)
		}
	};
	t.prototype.applyPlacement = function(n, t) {
		var h,
			i = this.tip(),
			c = i[0].offsetWidth,
			f = i[0].offsetHeight,
			e = parseInt(i.css("margin-top"), 10),
			o = parseInt(i.css("margin-left"), 10),
			u,
			r,
			s;
		isNaN(e) && (e = 0);isNaN(o) && (o = 0);
		n.top = n.top + e;
		n.left = n.left + o;i.offset(n).addClass("in");
		u = i[0].offsetWidth;
		r = i[0].offsetHeight;
		("top" == t && r != f && (h = !0, n.top = n.top + f - r), /bottom|top/.test(t)) ? (s = 0, n.left < 0 && (s = -2 * n.left, n.left = 0, i.offset(n), u = i[0].offsetWidth, r = i[0].offsetHeight), this.replaceArrow(s - c + u, u, "left")) : this.replaceArrow(r - f, r, "top");h && i.offset(n)
	};
	t.prototype.replaceArrow = function(n, t, i) {
		this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
	};
	t.prototype.setContent = function() {
		var n = this.tip(),
			t = this.getTitle();
		n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);n.removeClass("fade in top bottom left right")
	};
	t.prototype.hide = function() {
		function i() {
			"in" != u.hoverState && t.detach()
		}
		var u = this,
			t = this.tip(),
			r = n.Event("hide.bs." + this.type);
		return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (t.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? t.one(n.support.transition.end, i).emulateTransitionEnd(150) : i(), this.$element.trigger("hidden.bs." + this.type), this)
	};
	t.prototype.fixTitle = function() {
		var n = this.$element;
		(n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
	};
	t.prototype.hasContent = function() {
		return this.getTitle()
	};
	t.prototype.getPosition = function() {
		var t = this.$element[0];
		return n.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
			width : t.offsetWidth,
			height : t.offsetHeight
		}, this.$element.offset())
	};
	t.prototype.getCalculatedOffset = function(n, t, i, r) {
		return "bottom" == n ? {
			top : t.top + t.height,
			left : t.left + t.width / 2 - i / 2
		} : "top" == n ? {
			top : t.top - r,
			left : t.left + t.width / 2 - i / 2
		} : "left" == n ? {
			top : t.top + t.height / 2 - r / 2,
			left : t.left - i
		} : {
			top : t.top + t.height / 2 - r / 2,
			left : t.left + t.width
		}
	};
	t.prototype.getTitle = function() {
		var t = this.$element,
			n = this.options;
		return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
	};
	t.prototype.tip = function() {
		return this.$tip = this.$tip || n(this.options.template)
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	};
	t.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	};
	t.prototype.enable = function() {
		this.enabled = !0
	};
	t.prototype.disable = function() {
		this.enabled = !1
	};
	t.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	};
	t.prototype.toggle = function(t) {
		var i = t ? n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	};
	t.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	i = n.fn.tooltip;
	n.fn.tooltip = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tooltip"),
				f = "object" == typeof i && i;
			r || u.data("bs.tooltip", r = new t(this, f));"string" == typeof i && r[i]()
		})
	};
	n.fn.tooltip.Constructor = t;
	n.fn.tooltip.noConflict = function() {
		return n.fn.tooltip = i, this
	}
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(n, t) {
			this.init("popover", n, t)
		},
		i;
	if (!n.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
		placement : "right",
		trigger : "click",
		content : "",
		template : '<div class="popover"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
	});
	t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
	t.prototype.constructor = t;
	t.prototype.getDefaults = function() {
		return t.DEFAULTS
	};
	t.prototype.setContent = function() {
		var n = this.tip(),
			t = this.getTitle(),
			i = this.getContent();
		n.find(".popover-title")[this.options.html ? "html" : "text"](t);n.find(".popover-content")[this.options.html ? "html" : "text"](i);n.removeClass("fade top bottom left right in");n.find(".popover-title").html() || n.find(".popover-title").hide()
	};
	t.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	};
	t.prototype.getContent = function() {
		var t = this.$element,
			n = this.options;
		return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
	};
	t.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	t.prototype.tip = function() {
		return this.$tip || (this.$tip = n(this.options.template)), this.$tip
	};
	i = n.fn.popover;
	n.fn.popover = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.popover"),
				f = "object" == typeof i && i;
			r || u.data("bs.popover", r = new t(this, f));"string" == typeof i && r[i]()
		})
	};
	n.fn.popover.Constructor = t;
	n.fn.popover.noConflict = function() {
		return n.fn.popover = i, this
	}
}(window.jQuery);+function(n) {
	"use strict";
	function t(i, r) {
		var u,
			f = n.proxy(this.process, this);
		this.$element = n(i).is("body") ? n(window) : n(i);
		this.$body = n("body");
		this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f);
		this.options = n.extend({}, t.DEFAULTS, r);
		this.selector = (this.options.target || (u = n(i).attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
		this.offsets = n([]);
		this.targets = n([]);
		this.activeTarget = null;this.refresh();this.process()
	}
	t.DEFAULTS = {
		offset : 10
	};
	t.prototype.refresh = function() {
		var i = this.$element[0] == window ? "offset" : "position",
			t;
		this.offsets = n([]);
		this.targets = n([]);
		t = this;this.$body.find(this.selector).map(function() {
			var f = n(this),
				r = f.data("target") || f.attr("href"),
				u = /^#\w/.test(r) && n(r);
			return u && u.length && [ [ u[i]().top + (!n.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r ] ] || null
		}).sort(function(n, t) {
			return n[0] - t[0]
		}).each(function() {
			t.offsets.push(this[0]);t.targets.push(this[1])
		})
	};
	t.prototype.process = function() {
		var n,
			i = this.$scrollElement.scrollTop() + this.options.offset,
			f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			e = f - this.$scrollElement.height(),
			t = this.offsets,
			r = this.targets,
			u = this.activeTarget;
		if (i >= e) return u != (n = r.last()[0]) && this.activate(n);
		for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
	};
	t.prototype.activate = function(t) {
		this.activeTarget = t;n(this.selector).parents(".active").removeClass("active");
		var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			i = n(r).parents("li").addClass("active");
		i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));i.trigger("activate")
	};
	var i = n.fn.scrollspy;
	n.fn.scrollspy = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.scrollspy"),
				f = "object" == typeof i && i;
			r || u.data("bs.scrollspy", r = new t(this, f));"string" == typeof i && r[i]()
		})
	};
	n.fn.scrollspy.Constructor = t;
	n.fn.scrollspy.noConflict = function() {
		return n.fn.scrollspy = i, this
	};n(window).on("load", function() {
		n('[data-spy="scroll"]').each(function() {
			var t = n(this);
			t.scrollspy(t.data())
		})
	})
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(t) {
			this.element = n(t)
		},
		i;
	t.prototype.show = function() {
		var t = this.element,
			e = t.closest("ul:not(.dropdown-menu)"),
			i = t.data("target"),
			r,
			u,
			f;
		(i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], u = n.Event("show.bs.tab", {
			relatedTarget : r
		}), (t.trigger(u), u.isDefaultPrevented()) || (f = n(i), this.activate(t.parent("li"), e), this.activate(f, f.parent(), function() {
			t.trigger({
				type : "shown.bs.tab",
				relatedTarget : r
			})
		})))
	};
	t.prototype.activate = function(t, i, r) {
		function f() {
			u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");t.addClass("active");
			e ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade");t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active");r && r()
		}
		var u = i.find("> .active"),
			e = r && n.support.transition && u.hasClass("fade");
		e ? u.one(n.support.transition.end, f).emulateTransitionEnd(150) : f();u.removeClass("in")
	};
	i = n.fn.tab;
	n.fn.tab = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.tab");
			r || u.data("bs.tab", r = new t(this));"string" == typeof i && r[i]()
		})
	};
	n.fn.tab.Constructor = t;
	n.fn.tab.noConflict = function() {
		return n.fn.tab = i, this
	};n(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
		t.preventDefault();n(this).tab("show")
	})
}(window.jQuery);+function(n) {
	"use strict";
	var t = function(i, r) {
			this.options = n.extend({}, t.DEFAULTS, r);
			this.$window = n(window).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
			this.$element = n(i);
			this.affixed = this.unpin = null;this.checkPosition()
		},
		i;
	t.RESET = "affix affix-top affix-bottom";
	t.DEFAULTS = {
		offset : 0
	};
	t.prototype.checkPositionWithEventLoop = function() {
		setTimeout(n.proxy(this.checkPosition, this), 1)
	};
	t.prototype.checkPosition = function() {
		var i;
		if (this.$element.is(":visible")) {
			var s = n(document).height(),
				e = this.$window.scrollTop(),
				o = this.$element.offset(),
				r = this.options.offset,
				f = r.top,
				u = r.bottom;
			"object" != typeof r && (u = f = r);"function" == typeof f && (f = r.top());"function" == typeof u && (u = r.bottom());
			i = null != this.unpin && e + this.unpin <= o.top ? !1 : null != u && o.top + this.$element.height() >= s - u ? "bottom" : null != f && f >= e ? "top" : !1;this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? o.top - e : null, this.$element.removeClass(t.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
				top : document.body.offsetHeight - u - this.$element.height()
			}))
		}
	};
	i = n.fn.affix;
	n.fn.affix = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("bs.affix"),
				f = "object" == typeof i && i;
			r || u.data("bs.affix", r = new t(this, f));"string" == typeof i && r[i]()
		})
	};
	n.fn.affix.Constructor = t;
	n.fn.affix.noConflict = function() {
		return n.fn.affix = i, this
	};n(window).on("load", function() {
		n('[data-spy="affix"]').each(function() {
			var i = n(this),
				t = i.data();
			t.offset = t.offset || {};t.offsetBottom && (t.offset.bottom = t.offsetBottom);t.offsetTop && (t.offset.top = t.offsetTop);i.affix(t)
		})
	})
}(window.jQuery), function(n) {
	n.fn.praise = function(t) {
		var f = {
				obj : null,
				str : "+1",
				startSize : "10px",
				endSize : "30px",
				interval : 600,
				color : "red",
				callback : function() {}
			},
			i = n.extend(f, t);
		n("body").append("<span class='num'>" + i.str + "<\/span>");
		var r = n(".num"),
			e = i.obj.offset().left + i.obj.width() / 2,
			u = i.obj.offset().top - i.obj.height();
		r.css({
			position : "absolute",
			left : e + "px",
			top : u + "px",
			"z-index" : 9999,
			"font-size" : i.startSize,
			"line-height" : i.endSize,
			color : i.color
		});r.animate({
			"font-size" : i.endSize,
			opacity : "0",
			top : u - parseInt(i.endSize) + "px"
		}, i.interval, function() {
			r.remove();i.callback()
		})
	}
}(jQuery);!function(n) {
	"use strict";
	var t = function(t, i) {
			this.$element = n(t);
			this.options = n.extend({}, n.fn.typeahead.defaults, i);
			this.matcher = this.options.matcher || this.matcher;
			this.sorter = this.options.sorter || this.sorter;
			this.autoSelect = typeof this.options.autoSelect == "boolean" ? this.options.autoSelect : !0;
			this.highlighter = this.options.highlighter || this.highlighter;
			this.updater = this.options.updater || this.updater;
			this.source = this.options.source;
			this.$menu = n(this.options.menu);
			this.shown = !1;this.listen()
		},
		i;
	t.prototype = {
		constructor : t,
		select : function() {
			var n = this.$menu.find(".active").attr("data-value");
			return (this.autoSelect || n) && this.$element.val(this.updater(n)).change(), this.hide()
		},
		updater : function(n) {
			return n
		},
		show : function() {
			var t = n.extend({}, this.$element.position(), {
					height : this.$element[0].offsetHeight
				}),
				i;
			return i = typeof this.options.scrollHeight == "function" ? this.options.scrollHeight.call() : this.options.scrollHeight, this.$menu.insertAfter(this.$element).css({
					top : t.top + t.height + i,
					left : t.left
				}).show(), this.shown = !0, this
		},
		hide : function() {
			return this.$menu.hide(), this.shown = !1, this
		},
		lookup : function() {
			var t;
			return (this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength) ? this.shown ? this.hide() : this : (t = n.isFunction(this.source) ? this.source(this.query, n.proxy(this.process, this)) : this.source, t ? this.process(t) : this)
		},
		process : function(t) {
			var i = this;
			return (t = n.grep(t, function(n) {
				return i.matcher(n)
			}), t = this.sorter(t), !t.length) ? this.shown ? this.hide() : this : this.render(t.slice(0, this.options.items)).show()
		},
		matcher : function(n) {
			return ~n.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter : function(n) {
			for (var i = [], r = [], u = [], t; t = n.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? r.push(t) : u.push(t) : i.push(t);
			return i.concat(r, u)
		},
		highlighter : function(n) {
			var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
			return n.replace(new RegExp("(" + t + ")", "ig"), function(n, t) {
				return "<strong>" + t + "<\/strong>"
			})
		},
		render : function(t) {
			var i = this;
			return t = n(t).map(function(t, r) {
					return t = n(i.options.item).attr("data-value", r), t.find("a").html(i.highlighter(r)), t[0]
				}), this.autoSelect && t.first().addClass("active"), this.$menu.html(t), this
		},
		next : function() {
			var i = this.$menu.find(".active").removeClass("active"),
				t = i.next();
			t.length || (t = n(this.$menu.find("li")[0]));t.addClass("active")
		},
		prev : function() {
			var t = this.$menu.find(".active").removeClass("active"),
				n = t.prev();
			n.length || (n = this.$menu.find("li").last());n.addClass("active")
		},
		listen : function() {
			this.$element.on("focus", n.proxy(this.focus, this)).on("blur", n.proxy(this.blur, this)).on("keypress", n.proxy(this.keypress, this)).on("keyup", n.proxy(this.keyup, this));
			if (this.eventSupported("keydown")) this.$element.on("keydown", n.proxy(this.keydown, this));
			this.$menu.on("click", n.proxy(this.click, this)).on("mouseenter", "li", n.proxy(this.mouseenter, this)).on("mouseleave", "li", n.proxy(this.mouseleave, this))
		},
		eventSupported : function(n) {
			var t = n in this.$element;
			return t || (this.$element.setAttribute(n, "return;"), t = typeof this.$element[n] == "function"), t
		},
		move : function(n) {
			if (this.shown) {
				switch (n.keyCode) {
				case 9:
				case 13:
				case 27:
					n.preventDefault();
					break;case 38:
					n.preventDefault();this.prev();
					break;case 40:
					n.preventDefault();this.next()
				}
				n.stopPropagation()
			}
		},
		keydown : function(t) {
			this.suppressKeyPressRepeat = ~n.inArray(t.keyCode, [ 40, 38, 9, 13, 27 ]);this.move(t)
		},
		keypress : function(n) {
			this.suppressKeyPressRepeat || this.move(n)
		},
		keyup : function(n) {
			switch (n.keyCode) {
			case 40:
			case 38:
			case 16:
			case 17:
			case 18:
				break;case 9:
			case 13:
				if (!this.shown) return;
				this.select();
				break;case 27:
				if (!this.shown) return;
				this.hide();
				break;default:
				this.lookup()
			}
			n.stopPropagation();n.preventDefault()
		},
		focus : function() {
			this.focused = !0
		},
		blur : function() {
			this.focused = !1;!this.mousedover && this.shown && this.hide()
		},
		click : function(n) {
			n.stopPropagation();n.preventDefault();this.select();this.$element.focus()
		},
		mouseenter : function(t) {
			this.mousedover = !0;this.$menu.find(".active").removeClass("active");n(t.currentTarget).addClass("active")
		},
		mouseleave : function() {
			this.mousedover = !1;!this.focused && this.shown && this.hide()
		}
	};
	i = n.fn.typeahead;
	n.fn.typeahead = function(i) {
		return this.each(function() {
			var u = n(this),
				r = u.data("typeahead"),
				f = typeof i == "object" && i;
			r || u.data("typeahead", r = new t(this, f));typeof i == "string" && r[i]()
		})
	};
	n.fn.typeahead.defaults = {
		source : [],
		items : 8,
		menu : '<ul class="typeahead dropdown-menu"><\/ul>',
		item : '<li><a href="#"><\/a><\/li>',
		minLength : 1,
		scrollHeight : 0,
		autoSelect : !0
	};
	n.fn.typeahead.Constructor = t;
	n.fn.typeahead.noConflict = function() {
		return n.fn.typeahead = i, this
	};n(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
		var t = n(this);
		t.data("typeahead") || t.typeahead(t.data())
	})
}(window.jQuery);jQuery(function() {
	zyn.init()
});
var zyn = {
		init : function() {
			this.autoComplete();this.viewStatistic();this.pariseShow();this.goTop();this.dropDown();this.panelToggle();this.panelClose();this.commentValidate();this.ajaxCommentsReply()
		},
		autoComplete : function() {
			jQuery("#searchWords").typeahead({
				source : function(n, t) {
					n = jQuery.trim(n);n == " " || n == null || n == undefined || jQuery.getJSON("/Search/GetHotSearchItems", {
						query : n
					}, function(n) {
						t(n)
					})
				},
				updater : function(n) {
					return n.replace(/<a(.+?)<\/a>/, "")
				},
				afterSelect : function(n) {
					alert(n)
				},
				items : 8,
				delay : 500
			})
		},
		viewStatistic : function() {
			var n = jQuery.noConflict();
			n(document).on("click", ".gotoArchive", function(t) {
				t.preventDefault();
				var i = n(this).attr("href"),
					r = i.split("/")[3];
				n.post("/Archives/ViewStatic", {
					artId : r
				}, function() {
					window.location.href = i
				})
			})
		},
		pariseShow : function() {
			jQuery(document).on("click", ".praisebtn", function(n) {
				var i,
					u,
					t;
				if (n.preventDefault(), i = jQuery(this).children("a").attr("praise-flag"), u = jQuery(this).children("a").attr("data-id"), i == 0) t = jQuery(this).children("a"), t.attr("praise-flag", "1"), jQuery(this).praise({
						obj : jQuery(this),
						str : "+1",
						callback : function() {
							jQuery.post("/Archives/PraiseStatic", {
								artId : u
							}, function(n) {
								if (n.Status == 1) {
									var i = parseInt(t.text().match(/\d+/));
									t.text(t.text().replace(i, i + 1))
								} else
									n.Status == 2 ? alert(n.Message) : n.Status == 0 && alert(n.Message)
							})
						}
					}), niceIn(jQuery(this));
				else if (i == 1) {
					jQuery("body").append("<span class='praisetip'>您已赞过~<\/span>");
					var r = jQuery(".praisetip"),
						f = jQuery(this).offset().left,
						e = jQuery(this).offset().top + jQuery(this).height();
					r.css({
						position : "absolute",
						left : f + "px",
						top : e + "px",
						"z-index" : 9999,
						"font-size" : "12px",
						"line-height" : "13px",
						color : "red"
					});r.animate({
						opacity : "0"
					}, 1200, function() {
						r.remove()
					})
				}
			})
		},
		goTop : function() {
			jQuery(window).scroll(function() {
				jQuery(this).scrollTop() > 200 ? jQuery(".rollbar").css({
					bottom : "20px"
				}) : jQuery(".rollbar").css({
					bottom : "-50px"
				})
			});jQuery(".rollbar").click(function() {
				return jQuery("body,html").animate({
						scrollTop : 0
					}, 500), !1
			})
		},
		dropDown : function() {
			var n = jQuery(".nav.navbar-nav li");
			n.mouseover(function() {
				jQuery(this).addClass("open")
			}).mouseout(function() {
				jQuery(this).removeClass("open")
			})
		},
		panelToggle : function() {
			var n = jQuery(".panel-toggle");
			n.data("toggle", !0);n.click(function() {
				var n = jQuery(this);
				n.data("toggle") ? (n.removeClass("glyphicon glyphicon-upload").addClass("glyphicon glyphicon-download"), n.parents("div.panel").addClass("toggled"), n.data("toggle", !1)) : (n.removeClass("glyphicon glyphicon-download").addClass("glyphicon glyphicon-upload"), n.parents("div.panel").removeClass("toggled"), n.data("toggle", !0))
			})
		},
		panelClose : function() {
			var n = jQuery(".panel-remove");
			n.click(function() {
				var n = jQuery(this);
				n.parents(".panel").toggle(300)
			})
		},
		commentValidate : function() {
			jQuery("#commentform").validate({
				onkeyup : !1,
				rules : {
					VName : {
						required : !0,
						maxlength : 15
					},
					VEmail : {
						required : !0,
						email : !0,
						maxlength : 30
					},
					CmtText : {
						required : !0,
						maxlength : 500
					},
					LMessage : {
						required : !0,
						maxlength : 200
					}
				},
				messages : {
					VName : {
						required : "请输入昵称",
						maxlength : "昵称不用太长"
					},
					VEmail : {
						required : "邮箱不能为空！",
						email : "邮箱格式有误",
						maxlength : "邮箱有这么长?"
					},
					CmtText : {
						required : "什么都没写?",
						maxlength : "请将评论限制在500个字符以内"
					},
					LMessage : {
						required : "什么都没写?",
						maxlength : "请将留言限制在200个字符以内"
					}
				}
			})
		},
		ajaxCommentsReply : function() {
			function s() {
				r > 0 ? (i.val(r), r--, setTimeout(s, 1e3)) : (i.val(o).attr("disabled", !1).fadeTo("slow", 1), r = 10)
			}
			var t = jQuery.noConflict(),
				l = t("#commentform"),
				h = "取消编辑",
				u = 1,
				f = t("#comments-title"),
				e = t("#cancel-comment-reply-link"),
				c = e.text(),
				i = t("#commentform #submit"),
				r,
				o;
			i.attr("disabled", !1);
			$body = window.opera ? document.compatMode == "CSS1Compat" ? t("html") : t("body") : t("html,body");
			comm_array = [];comm_array.push("");t("#comment").after('<div id="loading"> <img src="/Content/images/ico_loading2.gif" /> <span>正在提交, 请稍候...<\/span><\/div><div id="error">#<\/div>');t("#loading").hide();t("#error").hide();t(document).on("submit", "#commentform", function() {
				return i.attr("disabled", !0).fadeTo("slow", .5), t("#loading").slideDown(), t.ajax({
						url : t("#comments").attr("data-url"),
						data : t(this).serialize(),
						type : t(this).attr("method"),
						error : function(n) {
							t("#loading").hide();t("#error").slideDown().html(n.responseText);setTimeout(function() {
								i.attr("disabled", !1).fadeTo("slow", 1);t("#error").slideUp()
							}, 3e3)
						},
						success : function(r) {
							var l;
							if (r.Status == "1") {
								t("#loading").hide();comm_array.push(t("#comment").val());t("#vid").val(r.Message);t("#vname").attr("disabled", !0);t("#vemail").attr("disabled", !0);t("textarea").each(function() {
									this.value = ""
								});
								var e = addComment,
									h = e.I("cancel-comment-reply-link"),
									o = e.I("wp-temp-form-div"),
									c = e.I(e.respondId);
								post = e.I("comment_post_ID").value;
								parent2 = t("#comment_parent:hidden").val();parent2 == 0 && f.length && (n = parseInt(f.text().match(/\d+/)), f.text(f.text().replace(n, n + 1)), cmtNum = t(".commentcount a"), l = parseInt(cmtNum.text().match(/\d+/)), cmtNum.text(cmtNum.text().replace(n, n + 1)));
								new_htm = '" id="new-comm-' + u + '"><\/';
								new_htm = parent2 == "0" ? '\n<ol class="commentlist' + new_htm + "ol>" : '\n<ol class="children' + new_htm + "ol>";
								div_ = document.body.innerHTML.indexOf("div-comment-") == -1 ? "" : document.body.innerHTML.indexOf("li-comment-") == -1 ? "div-" : "";t("#respond").before(new_htm);t("#new-comm-" + u).append(r.CoreData);$body.animate({
									scrollTop : t("#new-comm-" + u).offset().top - 65
								}, 500);s();u++;
								h.style.display = "none";
								h.onclick = null;
								e.I("comment_parent").value = "0";
								parent3 = e.I("comment_parent").value;o && c && (o.parentNode.insertBefore(c, o), o.parentNode.removeChild(o))
							} else
								r.Status == "0" ? (alert(r.Message), window.location.href = r.GotoUrl + "/#respond") : r.Status == "2" ? (alert(r.Message), t("#vname").focus(), t("#comment").val(r.CoreData), i.attr("disabled", !1).fadeTo("slow", .5), t("#loading").hide()) : r.Status == "3" && (window.location.href = r.GotoUrl)
						}
					}), !1
			});
			addComment = {
				moveForm : function(n, i, r, u, f) {
					var o = this,
						s,
						a = o.I(n),
						l = o.I(r),
						v = o.I("cancel-comment-reply-link"),
						p = o.I("comment_parent"),
						y = o.I("comment_post_ID");
					f ? (o.I("comment").value = comm_array[f], $new_sucs = t("#success_" + f), $new_sucs.hide(), $new_comm = t("#new-comm-" + f), e.text(h)) : e.text(c);
					o.respondId = r;
					u = u || !1;o.I("wp-temp-form-div") || (s = document.createElement("div"), s.id = "wp-temp-form-div", s.style.display = "none", l.parentNode.insertBefore(s, l));
					a ? a.parentNode.insertBefore(l, a.nextSibling) : (temp = o.I("wp-temp-form-div"), o.I("comment_parent").value = "0", temp.parentNode.insertBefore(l, temp), temp.parentNode.removeChild(temp));$body.animate({
						scrollTop : t("#respond").offset().top - 200
					}, 400);y && u && (y.value = u);
					p.value = i;
					v.style.display = "";
					v.onclick = function() {
						t("#comment").val("");
						var i = addComment,
							n = i.I("wp-temp-form-div"),
							r = i.I(i.respondId);
						return i.I("comment_parent").value = "0", n && r && (n.parentNode.insertBefore(r, n), n.parentNode.removeChild(n)), this.style.display = "none", this.onclick = null, !1
					};try {
						o.I("comment").focus()
					} catch (w) {} return !1
				},
				I : function(n) {
					return document.getElementById(n)
				}
			};
			r = 10;
			o = i.val()
		}
	},
	radius = 100,
	dtr = Math.PI / 180,
	d = 200,
	mcList = [],
	active = !1,
	lasta = 1,
	lastb = 1,
	distr = !0,
	tspeed = 2,
	size = 250,
	mouseX = 0,
	mouseY = 0,
	howElliptical = 1,
	aA = null,
	oDiv = null;
window.onload = function() {
	var n = 0,
		t = null;
	for (oDiv = document.getElementById("tagbox"), aA = oDiv.getElementsByTagName("a"), n = 0; n < aA.length; n++) t = {}, t.offsetWidth = aA[n].offsetWidth, t.offsetHeight = aA[n].offsetHeight, mcList.push(t);
	sineCosine(0, 0, 0);positionAll();
	oDiv.onmouseover = function() {
		active = !0
	};
	oDiv.onmouseout = function() {
		active = !1
	};
	oDiv.onmousemove = function(n) {
		var t = window.event || n;
		mouseX = t.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
		mouseY = t.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);
		mouseX /= 5;
		mouseY /= 5
	};setInterval(update, 30)
}