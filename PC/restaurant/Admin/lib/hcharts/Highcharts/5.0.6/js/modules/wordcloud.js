﻿/*
 Highcharts JS v6.0.3 (2017-11-14)

 (c) 2016 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function (m) { "object" === typeof module && module.exports ? module.exports = m : m(Highcharts) })(function (m) {
    var w = function () { return function (d) { var n = this, k = n.graphic, p = d.animate, m = d.attr, q = d.onComplete, z = d.css, r = d.group, v = d.renderer, D = d.shapeArgs; d = d.shapeType; n.shouldDraw() ? (k || (n.graphic = k = v[d](D).add(r)), k.css(z).attr(m).animate(p, void 0, q)) : k && k.animate(p, void 0, function () { n.graphic = k = k.destroy(); "function" === typeof q && q() }); k && k.addClass(n.getClassName(), !0) } }(); (function (d, n) {
        var k = d.each, p = d.extend,
        m = d.isArray, q = d.isNumber, z = d.isObject, r = d.Series, v = function (a, b) { return !(b.left > a.right || b.right < a.left || b.top > a.bottom || b.bottom < a.top) }, D = function (a, b) { var c = !1, g = a.rect, f; a.lastCollidedWith && (f = a.lastCollidedWith.rect, (c = v(g, f)) || delete a.lastCollidedWith); c || (c = !!d.find(b, function (b) { var c; f = b.rect; if (c = v(g, f)) a.lastCollidedWith = b; return c })); return c }, B = function (a) {
            var b = Math.ceil((Math.sqrt(a) - 1) / 2), c = 2 * b + 1, g = Math.pow(c, 2), f = !1, c = c - 1; 1E4 >= a && ("boolean" === typeof f && a >= g - c && (f = { x: b - (g - a), y: -b }),
            g -= c, "boolean" === typeof f && a >= g - c && (f = { x: -b, y: -b + (g - a) }), g -= c, "boolean" === typeof f && (f = a >= g - c ? { x: -b + (g - a), y: b } : { x: b, y: b - (g - a - c) }), f.x *= 5, f.y *= 5); return f
        }, w = function (a, b) { a /= b; return { width: 256 * a, height: 256, ratio: a } }, C = function (a, b, c) { return b + (c - b) / (a - 1) * Math.floor(Math.random() * a) }, G = function (a, b) { a = a.getBBox(); var c = b.width / 2, g = -(b.height / 2), f = b.height / 2; return !(-(b.width / 2) < a.x && c > a.x + a.width && g < a.y && f > a.y + a.height) }; d.seriesType("wordcloud", "column", {
            animation: { duration: 500 }, borderWidth: 0, clip: !1,
            colorByPoint: !0, placementStrategy: "center", rotation: { from: 0, orientations: 2, to: 90 }, showInLegend: !1, spiral: "rectangular", style: { fontFamily: "Impact, sans-serif" }, tooltip: { followPointer: !0, pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.weight}\x3c/b\x3e\x3cbr/\x3e' }
        }, {
            animate: r.prototype.animate, bindAxes: function () {
                var a = { endOnTick: !1, gridLineWidth: 0, lineWidth: 0, maxPadding: 0, startOnTick: !1, title: null, tickPositions: [] }; r.prototype.bindAxes.call(this);
                p(this.yAxis.options, a); p(this.xAxis.options, a)
            }, deriveFontSize: function (a) { return Math.floor(25 * a) }, drawPoints: function () {
                var a = this, b = a.hasRendered, c = a.xAxis, g = a.yAxis, f = a.group, d = a.options, m = d.animation, n = a.chart.renderer, A = n.text().add(f), r = [], v = a.placementStrategy[d.placementStrategy], B = a.spirals[d.spiral], C = d.rotation, H = a.points.map(function (a) { return a.weight }), I = Math.max.apply(null, H), t = w(c.len, g.len), E = a.points.sort(function (a, b) { return b.weight - a.weight }); k(E, function (c) {
                    var g = p({
                        fontSize: a.deriveFontSize(1 /
                        I * c.weight) + "px", fill: c.color
                    }, d.style), l = v(c, { data: E, field: t, placed: r, rotation: C }), h = { align: "center", x: l.x, y: l.y, text: c.name, rotation: l.rotation }, k, x, e; A.css(g).attr(h); c.clientRect = e = p({}, A.element.getBoundingClientRect()); x = A; for (var w = t, F = 1, y = { x: 0, y: 0 }, u = c.rect = p({}, e) ; (D(c, r) || G(x, w)) && !1 !== y;) y = B(F, { field: w }), z(y) && (u.left = e.left + y.x, u.right = u.left + u.width, u.top = e.top + y.y, u.bottom = u.top + u.height), F++; x = y; if (z(x)) {
                        h.x += x.x; h.y += x.y; p(l, {
                            left: h.x - e.width / 2, right: h.x + e.width / 2, top: h.y - e.height /
                            2, bottom: h.y + e.height / 2
                        }); e = t; if (!q(e.left) || e.left > l.left) e.left = l.left; if (!q(e.right) || e.right < l.right) e.right = l.right; if (!q(e.top) || e.top > l.top) e.top = l.top; if (!q(e.bottom) || e.bottom < l.bottom) e.bottom = l.bottom; t = e; r.push(c); c.isNull = !1
                    } else c.isNull = !0; m && (k = { x: h.x, y: h.y }, b ? (delete h.x, delete h.y) : (h.x = 0, h.y = 0)); c.draw({ animate: k, attr: h, css: g, group: f, renderer: n, shapeArgs: void 0, shapeType: "text" })
                }); A = A.destroy(); c = Math.min(1 / (2 * Math.max(Math.abs(t.left), Math.abs(t.right))) * c.len, 1 / (2 * Math.max(Math.abs(t.top),
                Math.abs(t.bottom))) * g.len); a.group.attr({ scaleX: c, scaleY: c })
            }, hasData: function () { return z(this) && !0 === this.visible && m(this.points) && 0 < this.points.length }, placementStrategy: { random: function (a, b) { a = b.field; b = b.rotation; return { x: Math.round(a.width * (Math.random() + .5) / 2) - a.width / 2, y: Math.round(a.height * (Math.random() + .5) / 2) - a.height / 2, rotation: C(b.orientations, b.from, b.to) } }, center: function (a, b) { a = b.rotation; return { x: 0, y: 0, rotation: C(a.orientations, a.from, a.to) } } }, pointArrayMap: ["weight"], spirals: {
                archimedean: function (a,
                b) { var c = b.field; b = !1; var c = c.width * c.width + c.height * c.height, d = .2 * a; 1E4 >= a && (b = { x: d * Math.cos(d), y: d * Math.sin(d) }, Math.min(Math.abs(b.x), Math.abs(b.y)) < c || (b = !1)); return b }, rectangular: function (a, b) { a = B(a, b); b = b.field; a && (a.x *= b.ratio); return a }, square: B
            }, getPlotBox: function () { var a = this.chart, b = a.inverted, c = this[b ? "yAxis" : "xAxis"], b = this[b ? "xAxis" : "yAxis"]; return { translateX: (c ? c.left : a.plotLeft) + (c ? c.len : a.plotWidth) / 2, translateY: (b ? b.top : a.plotTop) + (b ? b.len : a.plotHeight) / 2, scaleX: 1, scaleY: 1 } }
        },
        { draw: n, shouldDraw: function () { return !this.isNull } })
    })(m, w)
});