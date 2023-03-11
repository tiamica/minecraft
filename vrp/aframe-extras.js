!(function e(t, i, n) {
  function r(s, a) {
    if (!i[s]) {
      if (!t[s]) {
        var c = "function" == typeof require && require;
        if (!a && c) return c(s, !0);
        if (o) return o(s, !0);
        var l = new Error("Cannot find module '" + s + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var h = (i[s] = { exports: {} });
      t[s][0].call(
        h.exports,
        function(e) {
          var i = t[s][1][e];
          return r(i || e);
        },
        h,
        h.exports,
        e,
        t,
        i,
        n
      );
    }
    return i[s].exports;
  }
  for (
    var o = "function" == typeof require && require, s = 0;
    s < n.length;
    s++
  )
    r(n[s]);
  return r;
})(
  {
    1: [
      function(e, t, i) {
        "use strict";
        e("./");
      },
      { "./": 2 }
    ],
    2: [
      function(e, t, i) {
        "use strict";
        e("./src/controls"),
          e("./src/loaders"),
          e("./src/misc"),
          e("./src/pathfinding"),
          e("./src/primitives");
      },
      {
        "./src/controls": 14,
        "./src/loaders": 23,
        "./src/misc": 28,
        "./src/pathfinding": 34,
        "./src/primitives": 42
      }
    ],
    3: [
      function(e, t, i) {
        "use strict";
        (t.exports = THREE.ColladaLoader = function(e) {
          this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
        }),
          (THREE.ColladaLoader.prototype = {
            constructor: THREE.ColladaLoader,
            crossOrigin: "anonymous",
            load: function(e, t, i, n) {
              var r = this,
                o =
                  void 0 === r.path
                    ? THREE.LoaderUtils.extractUrlBase(e)
                    : r.path,
                s = new THREE.FileLoader(r.manager);
              s.setPath(r.path),
                s.load(
                  e,
                  function(e) {
                    t(r.parse(e, o));
                  },
                  i,
                  n
                );
            },
            setPath: function(e) {
              return (this.path = e), this;
            },
            setResourcePath: function(e) {
              return (this.resourcePath = e), this;
            },
            options: {
              set convertUpAxis(e) {
                console.warn(
                  "THREE.ColladaLoader: options.convertUpAxis() has been removed. Up axis is converted automatically."
                );
              }
            },
            setCrossOrigin: function(e) {
              return (this.crossOrigin = e), this;
            },
            parse: function(e, t) {
              function i(e, t) {
                for (
                  var i = [], n = e.childNodes, r = 0, o = n.length;
                  r < o;
                  r++
                ) {
                  var s = n[r];
                  s.nodeName === t && i.push(s);
                }
                return i;
              }
              function n(e) {
                if (0 === e.length) return [];
                for (
                  var t = e.trim().split(/\s+/),
                    i = new Array(t.length),
                    n = 0,
                    r = t.length;
                  n < r;
                  n++
                )
                  i[n] = t[n];
                return i;
              }
              function r(e) {
                if (0 === e.length) return [];
                for (
                  var t = e.trim().split(/\s+/),
                    i = new Array(t.length),
                    n = 0,
                    r = t.length;
                  n < r;
                  n++
                )
                  i[n] = parseFloat(t[n]);
                return i;
              }
              function o(e) {
                if (0 === e.length) return [];
                for (
                  var t = e.trim().split(/\s+/),
                    i = new Array(t.length),
                    n = 0,
                    r = t.length;
                  n < r;
                  n++
                )
                  i[n] = parseInt(t[n]);
                return i;
              }
              function s(e) {
                return e.substring(1);
              }
              function a() {
                return "three_default_" + ae++;
              }
              function c(e) {
                return 0 === Object.keys(e).length;
              }
              function l(e, t, n, r) {
                var o = i(e, t)[0];
                if (void 0 !== o)
                  for (var s = i(o, n), a = 0; a < s.length; a++) r(s[a]);
              }
              function h(e, t) {
                for (var i in e) {
                  e[i].build = t(e[i]);
                }
              }
              function u(e, t) {
                return void 0 !== e.build
                  ? e.build
                  : ((e.build = t(e)), e.build);
              }
              function d(e) {
                var t = [],
                  i = e.channels,
                  n = e.samplers,
                  r = e.sources;
                for (var o in i)
                  if (i.hasOwnProperty(o)) {
                    var s = i[o],
                      a = n[s.sampler],
                      c = a.inputs.INPUT,
                      l = a.inputs.OUTPUT;
                    !(function(e, t) {
                      for (
                        var i = e.keyframes,
                          n = e.name,
                          r = [],
                          o = [],
                          s = [],
                          a = [],
                          c = 0,
                          l = i.length;
                        c < l;
                        c++
                      ) {
                        var h = i[c],
                          u = h.time,
                          d = h.value;
                        Y.fromArray(d).transpose(),
                          Y.decompose(X, J, Z),
                          r.push(u),
                          o.push(X.x, X.y, X.z),
                          s.push(J.x, J.y, J.z, J.w),
                          a.push(Z.x, Z.y, Z.z);
                      }
                      o.length > 0 &&
                        t.push(
                          new THREE.VectorKeyframeTrack(n + ".position", r, o)
                        );
                      s.length > 0 &&
                        t.push(
                          new THREE.QuaternionKeyframeTrack(
                            n + ".quaternion",
                            r,
                            s
                          )
                        );
                      a.length > 0 &&
                        t.push(
                          new THREE.VectorKeyframeTrack(n + ".scale", r, a)
                        );
                    })(
                      (function(e, t, i) {
                        var n,
                          r,
                          o,
                          s,
                          a,
                          c,
                          l = ce.nodes[e.id],
                          h = U(l.id),
                          u = l.transforms[e.sid],
                          d = l.matrix.clone().transpose(),
                          p = {};
                        switch (u) {
                          case "matrix":
                            for (o = 0, s = t.array.length; o < s; o++)
                              if (
                                ((n = t.array[o]),
                                (r = o * i.stride),
                                void 0 === p[n] && (p[n] = {}),
                                !0 === e.arraySyntax)
                              ) {
                                var f = i.array[r],
                                  m = e.indices[0] + 4 * e.indices[1];
                                p[n][m] = f;
                              } else
                                for (a = 0, c = i.stride; a < c; a++)
                                  p[n][a] = i.array[r + a];
                            break;
                          case "translate":
                          case "rotate":
                          case "scale":
                            console.warn(
                              'THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',
                              u
                            );
                        }
                        var v = (function(e, t) {
                          var i = [];
                          for (var n in e)
                            i.push({ time: parseFloat(n), value: e[n] });
                          i.sort(function(e, t) {
                            return e.time - t.time;
                          });
                          for (var r = 0; r < 16; r++)
                            !(function(e, t, i) {
                              var n,
                                r,
                                o,
                                s = !0;
                              for (r = 0, o = e.length; r < o; r++)
                                void 0 === (n = e[r]).value[t]
                                  ? (n.value[t] = null)
                                  : (s = !1);
                              if (!0 === s)
                                for (r = 0, o = e.length; r < o; r++)
                                  (n = e[r]).value[t] = i;
                              else
                                !(function(e, t) {
                                  for (
                                    var i, n, r = 0, o = e.length;
                                    r < o;
                                    r++
                                  ) {
                                    var s = e[r];
                                    if (null === s.value[t]) {
                                      if (
                                        ((i = (function(e, t, i) {
                                          for (; t >= 0; ) {
                                            var n = e[t];
                                            if (null !== n.value[i]) return n;
                                            t--;
                                          }
                                          return null;
                                        })(e, r, t)),
                                        (n = (function(e, t, i) {
                                          for (; t < e.length; ) {
                                            var n = e[t];
                                            if (null !== n.value[i]) return n;
                                            t++;
                                          }
                                          return null;
                                        })(e, r, t)),
                                        null === i)
                                      ) {
                                        s.value[t] = n.value[t];
                                        continue;
                                      }
                                      if (null === n) {
                                        s.value[t] = i.value[t];
                                        continue;
                                      }
                                      !(function(e, t, i, n) {
                                        if (i.time - t.time == 0)
                                          return void (e.value[n] = t.value[n]);
                                        e.value[n] =
                                          ((e.time - t.time) *
                                            (i.value[n] - t.value[n])) /
                                            (i.time - t.time) +
                                          t.value[n];
                                      })(s, i, n, t);
                                    }
                                  }
                                })(e, t);
                            })(i, r, t.elements[r]);
                          return i;
                        })(p, d);
                        return { name: h.uuid, keyframes: v };
                      })(s, r[c], r[l]),
                      t
                    );
                  }
                return t;
              }
              function p(e) {
                return u(ce.animations[e], d);
              }
              function f(e) {
                for (
                  var t = [],
                    i = e.name,
                    n = e.end - e.start || -1,
                    r = e.animations,
                    o = 0,
                    s = r.length;
                  o < s;
                  o++
                )
                  for (var a = p(r[o]), c = 0, l = a.length; c < l; c++)
                    t.push(a[c]);
                return new THREE.AnimationClip(i, n, t);
              }
              function m(e) {
                return u(ce.clips[e], f);
              }
              function v(e) {
                var t = { id: e.id },
                  i = ce.geometries[t.id];
                return (
                  void 0 !== e.skin &&
                    ((t.skin = (function(e) {
                      function t(e, t) {
                        return t.weight - e.weight;
                      }
                      var i,
                        n,
                        r,
                        o = {
                          joints: [],
                          indices: { array: [], stride: 4 },
                          weights: { array: [], stride: 4 }
                        },
                        s = e.sources,
                        a = e.vertexWeights,
                        c = a.vcount,
                        l = a.v,
                        h = a.inputs.JOINT.offset,
                        u = a.inputs.WEIGHT.offset,
                        d = e.sources[e.joints.inputs.JOINT],
                        p = e.sources[e.joints.inputs.INV_BIND_MATRIX],
                        f = s[a.inputs.WEIGHT.id].array,
                        m = 0;
                      for (i = 0, r = c.length; i < r; i++) {
                        var v = c[i],
                          g = [];
                        for (n = 0; n < v; n++) {
                          var y = l[m + h],
                            E = l[m + u],
                            b = f[E];
                          g.push({ index: y, weight: b }), (m += 2);
                        }
                        for (g.sort(t), n = 0; n < 4; n++) {
                          var T = g[n];
                          void 0 !== T
                            ? (o.indices.array.push(T.index),
                              o.weights.array.push(T.weight))
                            : (o.indices.array.push(0),
                              o.weights.array.push(0));
                        }
                      }
                      e.bindShapeMatrix
                        ? (o.bindMatrix = new THREE.Matrix4()
                            .fromArray(e.bindShapeMatrix)
                            .transpose())
                        : (o.bindMatrix = new THREE.Matrix4().identity());
                      for (i = 0, r = d.array.length; i < r; i++) {
                        var w = d.array[i],
                          x = new THREE.Matrix4()
                            .fromArray(p.array, i * p.stride)
                            .transpose();
                        o.joints.push({ name: w, boneInverse: x });
                      }
                      return o;
                    })(e.skin)),
                    (i.sources.skinIndices = t.skin.indices),
                    (i.sources.skinWeights = t.skin.weights)),
                  t
                );
              }
              function g(e) {
                return u(ce.controllers[e], v);
              }
              function y(e) {
                return void 0 !== e.build ? e.build : e.init_from;
              }
              function E(e) {
                var t = ce.images[e];
                return void 0 !== t
                  ? u(t, y)
                  : (console.warn(
                      "THREE.ColladaLoader: Couldn't find image with ID:",
                      e
                    ),
                    null);
              }
              function b(e) {
                for (var t = {}, i = 0, n = e.childNodes.length; i < n; i++) {
                  var o = e.childNodes[i];
                  if (1 === o.nodeType)
                    switch (o.nodeName) {
                      case "color":
                        t[o.nodeName] = r(o.textContent);
                        break;
                      case "float":
                        t[o.nodeName] = parseFloat(o.textContent);
                        break;
                      case "texture":
                        t[o.nodeName] = {
                          id: o.getAttribute("texture"),
                          extra: (function(e) {
                            for (
                              var t = { technique: {} },
                                i = 0,
                                n = e.childNodes.length;
                              i < n;
                              i++
                            ) {
                              var r = e.childNodes[i];
                              if (1 === r.nodeType)
                                switch (r.nodeName) {
                                  case "extra":
                                    !(function(e, t) {
                                      for (
                                        var i = 0, n = e.childNodes.length;
                                        i < n;
                                        i++
                                      ) {
                                        var r = e.childNodes[i];
                                        if (1 === r.nodeType)
                                          switch (r.nodeName) {
                                            case "technique":
                                              !(function(e, t) {
                                                for (
                                                  var i = 0,
                                                    n = e.childNodes.length;
                                                  i < n;
                                                  i++
                                                ) {
                                                  var r = e.childNodes[i];
                                                  if (1 === r.nodeType)
                                                    switch (r.nodeName) {
                                                      case "repeatU":
                                                      case "repeatV":
                                                      case "offsetU":
                                                      case "offsetV":
                                                        t.technique[
                                                          r.nodeName
                                                        ] = parseFloat(
                                                          r.textContent
                                                        );
                                                        break;
                                                      case "wrapU":
                                                      case "wrapV":
                                                        "TRUE" ===
                                                        r.textContent.toUpperCase()
                                                          ? (t.technique[
                                                              r.nodeName
                                                            ] = 1)
                                                          : "FALSE" ===
                                                            r.textContent.toUpperCase()
                                                          ? (t.technique[
                                                              r.nodeName
                                                            ] = 0)
                                                          : (t.technique[
                                                              r.nodeName
                                                            ] = parseInt(
                                                              r.textContent
                                                            ));
                                                    }
                                                }
                                              })(r, t);
                                          }
                                      }
                                    })(r, t);
                                }
                            }
                            return t;
                          })(o)
                        };
                    }
                }
                return t;
              }
              function T(e) {
                return e;
              }
              function w(e) {
                function t(e) {
                  var t = n.profile.samplers[e.id],
                    i = null;
                  if (void 0 !== t) {
                    i = E(n.profile.surfaces[t.source].init_from);
                  } else
                    console.warn(
                      "THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."
                    ),
                      (i = E(e.id));
                  if (null !== i) {
                    var r = (function(e) {
                      var t,
                        i = e.slice(2 + ((e.lastIndexOf(".") - 1) >>> 0));
                      switch ((i = i.toLowerCase())) {
                        case "tga":
                          t = re;
                          break;
                        default:
                          t = ne;
                      }
                      return t;
                    })(i);
                    if (void 0 !== r) {
                      var o = r.load(i),
                        s = e.extra;
                      if (
                        void 0 !== s &&
                        void 0 !== s.technique &&
                        !1 === c(s.technique)
                      ) {
                        var a = s.technique;
                        (o.wrapS = a.wrapU
                          ? THREE.RepeatWrapping
                          : THREE.ClampToEdgeWrapping),
                          (o.wrapT = a.wrapV
                            ? THREE.RepeatWrapping
                            : THREE.ClampToEdgeWrapping),
                          o.offset.set(a.offsetU || 0, a.offsetV || 0),
                          o.repeat.set(a.repeatU || 1, a.repeatV || 1);
                      } else
                        (o.wrapS = THREE.RepeatWrapping),
                          (o.wrapT = THREE.RepeatWrapping);
                      return o;
                    }
                    return (
                      console.warn(
                        "THREE.ColladaLoader: Loader for texture %s not found.",
                        i
                      ),
                      null
                    );
                  }
                  return (
                    console.warn(
                      "THREE.ColladaLoader: Couldn't create texture with ID:",
                      e.id
                    ),
                    null
                  );
                }
                var i,
                  n = (function(e) {
                    return u(ce.effects[e], T);
                  })(e.url),
                  r = n.profile.technique,
                  o = n.profile.extra;
                switch (r.type) {
                  case "phong":
                  case "blinn":
                    i = new THREE.MeshPhongMaterial();
                    break;
                  case "lambert":
                    i = new THREE.MeshLambertMaterial();
                    break;
                  default:
                    i = new THREE.MeshBasicMaterial();
                }
                i.name = e.name;
                var s = r.parameters;
                for (var a in s) {
                  var l = s[a];
                  switch (a) {
                    case "diffuse":
                      l.color && i.color.fromArray(l.color),
                        l.texture && (i.map = t(l.texture));
                      break;
                    case "specular":
                      l.color && i.specular && i.specular.fromArray(l.color),
                        l.texture && (i.specularMap = t(l.texture));
                      break;
                    case "bump":
                      l.texture && (i.normalMap = t(l.texture));
                      break;
                    case "ambient":
                      l.texture && (i.lightMap = t(l.texture));
                      break;
                    case "shininess":
                      l.float && i.shininess && (i.shininess = l.float);
                      break;
                    case "emission":
                      l.color && i.emissive && i.emissive.fromArray(l.color),
                        l.texture && (i.emissiveMap = t(l.texture));
                  }
                }
                var h = s.transparent,
                  d = s.transparency;
                if (
                  (void 0 === d && h && (d = { float: 1 }),
                  void 0 === h &&
                    d &&
                    (h = { opaque: "A_ONE", data: { color: [1, 1, 1, 1] } }),
                  h && d)
                )
                  if (h.data.texture) i.transparent = !0;
                  else {
                    var p = h.data.color;
                    switch (h.opaque) {
                      case "A_ONE":
                        i.opacity = p[3] * d.float;
                        break;
                      case "RGB_ZERO":
                        i.opacity = 1 - p[0] * d.float;
                        break;
                      case "A_ZERO":
                        i.opacity = 1 - p[3] * d.float;
                        break;
                      case "RGB_ONE":
                        i.opacity = p[0] * d.float;
                        break;
                      default:
                        console.warn(
                          'THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',
                          h.opaque
                        );
                    }
                    i.opacity < 1 && (i.transparent = !0);
                  }
                return (
                  void 0 !== o &&
                    void 0 !== o.technique &&
                    1 === o.technique.double_sided &&
                    (i.side = THREE.DoubleSide),
                  i
                );
              }
              function x(e) {
                return u(ce.materials[e], w);
              }
              function k(e) {
                var t;
                switch (e.optics.technique) {
                  case "perspective":
                    t = new THREE.PerspectiveCamera(
                      e.optics.parameters.yfov,
                      e.optics.parameters.aspect_ratio,
                      e.optics.parameters.znear,
                      e.optics.parameters.zfar
                    );
                    break;
                  case "orthographic":
                    var i = e.optics.parameters.ymag,
                      n = e.optics.parameters.xmag,
                      r = e.optics.parameters.aspect_ratio;
                    (n = void 0 === n ? i * r : n),
                      (i = void 0 === i ? n / r : i),
                      (n *= 0.5),
                      (i *= 0.5),
                      (t = new THREE.OrthographicCamera(
                        -n,
                        n,
                        i,
                        -i,
                        e.optics.parameters.znear,
                        e.optics.parameters.zfar
                      ));
                    break;
                  default:
                    t = new THREE.PerspectiveCamera();
                }
                return (t.name = e.name), t;
              }
              function R(e) {
                var t = ce.cameras[e];
                return void 0 !== t
                  ? u(t, k)
                  : (console.warn(
                      "THREE.ColladaLoader: Couldn't find camera with ID:",
                      e
                    ),
                    null);
              }
              function A(e) {
                var t;
                switch (e.technique) {
                  case "directional":
                    t = new THREE.DirectionalLight();
                    break;
                  case "point":
                    t = new THREE.PointLight();
                    break;
                  case "spot":
                    t = new THREE.SpotLight();
                    break;
                  case "ambient":
                    t = new THREE.AmbientLight();
                }
                return (
                  e.parameters.color && t.color.copy(e.parameters.color),
                  e.parameters.distance && (t.distance = e.parameters.distance),
                  t
                );
              }
              function C(e) {
                var t = ce.lights[e];
                return void 0 !== t
                  ? u(t, A)
                  : (console.warn(
                      "THREE.ColladaLoader: Couldn't find light with ID:",
                      e
                    ),
                    null);
              }
              function N(e) {
                for (
                  var t = { array: [], stride: 3 }, o = 0;
                  o < e.childNodes.length;
                  o++
                ) {
                  var s = e.childNodes[o];
                  if (1 === s.nodeType)
                    switch (s.nodeName) {
                      case "float_array":
                        t.array = r(s.textContent);
                        break;
                      case "Name_array":
                        t.array = n(s.textContent);
                        break;
                      case "technique_common":
                        var a = i(s, "accessor")[0];
                        void 0 !== a &&
                          (t.stride = parseInt(a.getAttribute("stride")));
                    }
                }
                return t;
              }
              function S(e) {
                for (var t = 0, i = 0, n = e.length; i < n; i++) {
                  !0 === e[i].hasUV && t++;
                }
                t > 0 && t < e.length && (e.uvsNeedsFix = !0);
              }
              function M(e) {
                var t = {},
                  i = e.sources,
                  n = e.vertices,
                  r = e.primitives;
                if (0 === r.length) return {};
                var o = (function(e) {
                  for (var t = {}, i = 0; i < e.length; i++) {
                    var n = e[i];
                    void 0 === t[n.type] && (t[n.type] = []), t[n.type].push(n);
                  }
                  return t;
                })(r);
                for (var s in o) {
                  var a = o[s];
                  S(a),
                    (t[s] = (function(e, t, i) {
                      for (
                        var n = {},
                          r = { array: [], stride: 0 },
                          o = { array: [], stride: 0 },
                          s = { array: [], stride: 0 },
                          a = { array: [], stride: 0 },
                          c = { array: [], stride: 0 },
                          l = { array: [], stride: 4 },
                          h = { array: [], stride: 4 },
                          u = new THREE.BufferGeometry(),
                          d = [],
                          p = 0,
                          f = 0;
                        f < e.length;
                        f++
                      ) {
                        var m = e[f],
                          v = m.inputs,
                          g = 0;
                        switch (m.type) {
                          case "lines":
                          case "linestrips":
                            g = 2 * m.count;
                            break;
                          case "triangles":
                            g = 3 * m.count;
                            break;
                          case "polylist":
                            for (var y = 0; y < m.count; y++) {
                              var E = m.vcount[y];
                              switch (E) {
                                case 3:
                                  g += 3;
                                  break;
                                case 4:
                                  g += 6;
                                  break;
                                default:
                                  g += 3 * (E - 2);
                              }
                            }
                            break;
                          default:
                            console.warn(
                              "THREE.ColladaLoader: Unknow primitive type:",
                              m.type
                            );
                        }
                        u.addGroup(p, g, f),
                          (p += g),
                          m.material && d.push(m.material);
                        for (var b in v) {
                          var T = v[b];
                          switch (b) {
                            case "VERTEX":
                              for (var w in i) {
                                var x = i[w];
                                switch (w) {
                                  case "POSITION":
                                    var k = r.array.length;
                                    if (
                                      (H(m, t[x], T.offset, r.array),
                                      (r.stride = t[x].stride),
                                      t.skinWeights &&
                                        t.skinIndices &&
                                        (H(m, t.skinIndices, T.offset, l.array),
                                        H(m, t.skinWeights, T.offset, h.array)),
                                      !1 === m.hasUV && !0 === e.uvsNeedsFix)
                                    )
                                      for (
                                        var g = (r.array.length - k) / r.stride,
                                          R = 0;
                                        R < g;
                                        R++
                                      )
                                        s.array.push(0, 0);
                                    break;
                                  case "NORMAL":
                                    H(m, t[x], T.offset, o.array),
                                      (o.stride = t[x].stride);
                                    break;
                                  case "COLOR":
                                    H(m, t[x], T.offset, c.array),
                                      (c.stride = t[x].stride);
                                    break;
                                  case "TEXCOORD":
                                    H(m, t[x], T.offset, s.array),
                                      (s.stride = t[x].stride);
                                    break;
                                  case "TEXCOORD1":
                                    H(m, t[x], T.offset, a.array),
                                      (s.stride = t[x].stride);
                                    break;
                                  default:
                                    console.warn(
                                      'THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',
                                      w
                                    );
                                }
                              }
                              break;
                            case "NORMAL":
                              H(m, t[T.id], T.offset, o.array),
                                (o.stride = t[T.id].stride);
                              break;
                            case "COLOR":
                              H(m, t[T.id], T.offset, c.array),
                                (c.stride = t[T.id].stride);
                              break;
                            case "TEXCOORD":
                              H(m, t[T.id], T.offset, s.array),
                                (s.stride = t[T.id].stride);
                              break;
                            case "TEXCOORD1":
                              H(m, t[T.id], T.offset, a.array),
                                (a.stride = t[T.id].stride);
                          }
                        }
                      }
                      r.array.length > 0 &&
                        u.addAttribute(
                          "position",
                          new THREE.Float32BufferAttribute(r.array, r.stride)
                        );
                      o.array.length > 0 &&
                        u.addAttribute(
                          "normal",
                          new THREE.Float32BufferAttribute(o.array, o.stride)
                        );
                      c.array.length > 0 &&
                        u.addAttribute(
                          "color",
                          new THREE.Float32BufferAttribute(c.array, c.stride)
                        );
                      s.array.length > 0 &&
                        u.addAttribute(
                          "uv",
                          new THREE.Float32BufferAttribute(s.array, s.stride)
                        );
                      a.array.length > 0 &&
                        u.addAttribute(
                          "uv2",
                          new THREE.Float32BufferAttribute(a.array, a.stride)
                        );
                      l.array.length > 0 &&
                        u.addAttribute(
                          "skinIndex",
                          new THREE.Float32BufferAttribute(l.array, l.stride)
                        );
                      h.array.length > 0 &&
                        u.addAttribute(
                          "skinWeight",
                          new THREE.Float32BufferAttribute(h.array, h.stride)
                        );
                      return (
                        (n.data = u),
                        (n.type = e[0].type),
                        (n.materialKeys = d),
                        n
                      );
                    })(a, i, n));
                }
                return t;
              }
              function H(e, t, i, n) {
                function r(e) {
                  for (var t = o[e + i] * l, r = t + l; t < r; t++)
                    n.push(c[t]);
                }
                var o = e.p,
                  s = e.stride,
                  a = e.vcount,
                  c = t.array,
                  l = t.stride;
                if (void 0 !== e.vcount)
                  for (var h = 0, u = 0, d = a.length; u < d; u++) {
                    var p = a[u];
                    if (4 === p) {
                      var f = h + 1 * s,
                        m = h + 2 * s,
                        v = h + 3 * s;
                      r((E = h + 0 * s)), r(f), r(v), r(f), r(m), r(v);
                    } else if (3 === p) {
                      var f = h + 1 * s,
                        m = h + 2 * s;
                      r((E = h + 0 * s)), r(f), r(m);
                    } else if (p > 4)
                      for (var g = 1, y = p - 2; g <= y; g++) {
                        var E = h + 0 * s,
                          f = h + s * g,
                          m = h + s * (g + 1);
                        r(E), r(f), r(m);
                      }
                    h += s * p;
                  }
                else for (var u = 0, d = o.length; u < d; u += s) r(u);
              }
              function D(e) {
                return u(ce.geometries[e], M);
              }
              function L(e) {
                return void 0 !== e.build ? e.build : e;
              }
              function _(e) {
                for (
                  var t = {
                      sid: e.getAttribute("sid"),
                      name: e.getAttribute("name") || "",
                      attachments: [],
                      transforms: []
                    },
                    i = 0;
                  i < e.childNodes.length;
                  i++
                ) {
                  var n = e.childNodes[i];
                  if (1 === n.nodeType)
                    switch (n.nodeName) {
                      case "attachment_full":
                        t.attachments.push(
                          (function(e) {
                            for (
                              var t = {
                                  joint: e
                                    .getAttribute("joint")
                                    .split("/")
                                    .pop(),
                                  transforms: [],
                                  links: []
                                },
                                i = 0;
                              i < e.childNodes.length;
                              i++
                            ) {
                              var n = e.childNodes[i];
                              if (1 === n.nodeType)
                                switch (n.nodeName) {
                                  case "link":
                                    t.links.push(_(n));
                                    break;
                                  case "matrix":
                                  case "translate":
                                  case "rotate":
                                    t.transforms.push(O(n));
                                }
                            }
                            return t;
                          })(n)
                        );
                        break;
                      case "matrix":
                      case "translate":
                      case "rotate":
                        t.transforms.push(O(n));
                    }
                }
                return t;
              }
              function O(e) {
                var t = { type: e.nodeName },
                  i = r(e.textContent);
                switch (t.type) {
                  case "matrix":
                    (t.obj = new THREE.Matrix4()),
                      t.obj.fromArray(i).transpose();
                    break;
                  case "translate":
                    (t.obj = new THREE.Vector3()), t.obj.fromArray(i);
                    break;
                  case "rotate":
                    (t.obj = new THREE.Vector3()),
                      t.obj.fromArray(i),
                      (t.angle = THREE.Math.degToRad(i[3]));
                }
                return t;
              }
              function I(e) {
                return void 0 !== e.build ? e.build : e;
              }
              function P(e) {
                for (
                  var t = {
                      name: e.getAttribute("name") || "",
                      type: e.getAttribute("type"),
                      id: e.getAttribute("id"),
                      sid: e.getAttribute("sid"),
                      matrix: new THREE.Matrix4(),
                      nodes: [],
                      instanceCameras: [],
                      instanceControllers: [],
                      instanceLights: [],
                      instanceGeometries: [],
                      instanceNodes: [],
                      transforms: {}
                    },
                    i = 0;
                  i < e.childNodes.length;
                  i++
                ) {
                  var n = e.childNodes[i];
                  if (1 === n.nodeType)
                    switch (n.nodeName) {
                      case "node":
                        t.nodes.push(n.getAttribute("id")), P(n);
                        break;
                      case "instance_camera":
                        t.instanceCameras.push(s(n.getAttribute("url")));
                        break;
                      case "instance_controller":
                        t.instanceControllers.push(j(n));
                        break;
                      case "instance_light":
                        t.instanceLights.push(s(n.getAttribute("url")));
                        break;
                      case "instance_geometry":
                        t.instanceGeometries.push(j(n));
                        break;
                      case "instance_node":
                        t.instanceNodes.push(s(n.getAttribute("url")));
                        break;
                      case "matrix":
                        o = r(n.textContent);
                        t.matrix.multiply(Y.fromArray(o).transpose()),
                          (t.transforms[n.getAttribute("sid")] = n.nodeName);
                        break;
                      case "translate":
                        o = r(n.textContent);
                        Q.fromArray(o),
                          t.matrix.multiply(Y.makeTranslation(Q.x, Q.y, Q.z)),
                          (t.transforms[n.getAttribute("sid")] = n.nodeName);
                        break;
                      case "rotate":
                        var o = r(n.textContent),
                          a = THREE.Math.degToRad(o[3]);
                        t.matrix.multiply(
                          Y.makeRotationAxis(Q.fromArray(o), a)
                        ),
                          (t.transforms[n.getAttribute("sid")] = n.nodeName);
                        break;
                      case "scale":
                        o = r(n.textContent);
                        t.matrix.scale(Q.fromArray(o)),
                          (t.transforms[n.getAttribute("sid")] = n.nodeName);
                        break;
                      case "extra":
                        break;
                      default:
                        console.log(n);
                    }
                }
                return (
                  K(t.id)
                    ? console.warn(
                        "THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",
                        t.id
                      )
                    : (ce.nodes[t.id] = t),
                  t
                );
              }
              function j(e) {
                for (
                  var t = {
                      id: s(e.getAttribute("url")),
                      materials: {},
                      skeletons: []
                    },
                    i = 0;
                  i < e.childNodes.length;
                  i++
                ) {
                  var n = e.childNodes[i];
                  switch (n.nodeName) {
                    case "bind_material":
                      for (
                        var r = n.getElementsByTagName("instance_material"),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var a = r[o],
                          c = a.getAttribute("symbol"),
                          l = a.getAttribute("target");
                        t.materials[c] = s(l);
                      }
                      break;
                    case "skeleton":
                      t.skeletons.push(s(n.textContent));
                  }
                }
                return t;
              }
              function F(e, t) {
                var i,
                  n,
                  r = [],
                  o = [];
                for (i = 0; i < e.length; i++) {
                  var s = e[i];
                  if (K(s)) z(U(s), t, r);
                  else if (
                    (function(e) {
                      return void 0 !== ce.visualScenes[e];
                    })(s)
                  )
                    for (
                      var a = ce.visualScenes[s].children, c = 0;
                      c < a.length;
                      c++
                    ) {
                      var l = a[c];
                      if ("JOINT" === l.type) {
                        z(U(l.id), t, r);
                      }
                    }
                  else
                    console.error(
                      "THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",
                      s
                    );
                }
                for (i = 0; i < t.length; i++)
                  for (c = 0; c < r.length; c++)
                    if ((n = r[c]).bone.name === t[i].name) {
                      (o[i] = n), (n.processed = !0);
                      break;
                    }
                for (i = 0; i < r.length; i++)
                  !1 === (n = r[i]).processed &&
                    (o.push(n), (n.processed = !0));
                var h = [],
                  u = [];
                for (i = 0; i < o.length; i++)
                  (n = o[i]), h.push(n.bone), u.push(n.boneInverse);
                return new THREE.Skeleton(h, u);
              }
              function z(e, t, i) {
                e.traverse(function(e) {
                  if (!0 === e.isBone) {
                    for (var n, r = 0; r < t.length; r++) {
                      var o = t[r];
                      if (o.name === e.name) {
                        n = o.boneInverse;
                        break;
                      }
                    }
                    void 0 === n && (n = new THREE.Matrix4()),
                      i.push({ bone: e, boneInverse: n, processed: !1 });
                  }
                });
              }
              function V(e) {
                for (
                  var t = [],
                    i = e.matrix,
                    n = e.nodes,
                    r = e.type,
                    o = e.instanceCameras,
                    s = e.instanceControllers,
                    a = e.instanceLights,
                    c = e.instanceGeometries,
                    l = e.instanceNodes,
                    h = 0,
                    u = n.length;
                  h < u;
                  h++
                )
                  t.push(U(n[h]));
                for (var h = 0, u = o.length; h < u; h++) {
                  var d = R(o[h]);
                  null !== d && t.push(d.clone());
                }
                for (var h = 0, u = s.length; h < u; h++)
                  for (
                    var p = g((b = s[h]).id),
                      f = G((T = D(p.id)), b.materials),
                      m = F(b.skeletons, p.skin.joints),
                      v = 0,
                      y = f.length;
                    v < y;
                    v++
                  ) {
                    (w = f[v]).isSkinnedMesh &&
                      (w.bind(m, p.skin.bindMatrix), w.normalizeSkinWeights()),
                      t.push(w);
                  }
                for (var h = 0, u = a.length; h < u; h++) {
                  var E = C(a[h]);
                  null !== E && t.push(E.clone());
                }
                for (var h = 0, u = c.length; h < u; h++)
                  for (
                    var b = c[h],
                      T = D(b.id),
                      v = 0,
                      y = (f = G(T, b.materials)).length;
                    v < y;
                    v++
                  )
                    t.push(f[v]);
                for (var h = 0, u = l.length; h < u; h++)
                  t.push(U(l[h]).clone());
                var w;
                if (0 === n.length && 1 === t.length) w = t[0];
                else {
                  w = "JOINT" === r ? new THREE.Bone() : new THREE.Group();
                  for (h = 0; h < t.length; h++) w.add(t[h]);
                }
                return (
                  "" === w.name && (w.name = "JOINT" === r ? e.sid : e.name),
                  w.matrix.copy(i),
                  w.matrix.decompose(w.position, w.quaternion, w.scale),
                  w
                );
              }
              function B(e, t) {
                for (var i = [], n = 0, r = e.length; n < r; n++) {
                  var o = t[e[n]];
                  void 0 === o
                    ? (console.warn(
                        "THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",
                        e[n]
                      ),
                      i.push($))
                    : i.push(x(o));
                }
                return i;
              }
              function G(e, t) {
                var i = [];
                for (var n in e) {
                  var r = e[n],
                    o = B(r.materialKeys, t);
                  0 === o.length &&
                    ("lines" === n || "linestrips" === n
                      ? o.push(new THREE.LineBasicMaterial())
                      : o.push(new THREE.MeshPhongMaterial()));
                  var s = void 0 !== r.data.attributes.skinIndex;
                  if (s)
                    for (var a = 0, c = o.length; a < c; a++)
                      o[a].skinning = !0;
                  var l,
                    h = 1 === o.length ? o[0] : o;
                  switch (n) {
                    case "lines":
                      l = new THREE.LineSegments(r.data, h);
                      break;
                    case "linestrips":
                      l = new THREE.Line(r.data, h);
                      break;
                    case "triangles":
                    case "polylist":
                      l = s
                        ? new THREE.SkinnedMesh(r.data, h)
                        : new THREE.Mesh(r.data, h);
                  }
                  i.push(l);
                }
                return i;
              }
              function K(e) {
                return void 0 !== ce.nodes[e];
              }
              function U(e) {
                return u(ce.nodes[e], V);
              }
              function q(e) {
                var t = new THREE.Group();
                t.name = e.name;
                for (var i = e.children, n = 0; n < i.length; n++) {
                  var r = i[n];
                  t.add(U(r.id));
                }
                return t;
              }
              function W(e) {
                return u(ce.visualScenes[e], q);
              }
              var X = new THREE.Vector3(),
                Z = new THREE.Vector3(),
                J = new THREE.Quaternion(),
                Y = new THREE.Matrix4(),
                Q = new THREE.Vector3(),
                $ = new THREE.MeshBasicMaterial({ color: 16711935 });
              if (0 === e.length) return { scene: new THREE.Scene() };
              var ee = i(
                  new DOMParser().parseFromString(e, "application/xml"),
                  "COLLADA"
                )[0],
                te = ee.getAttribute("version");
              console.log("THREE.ColladaLoader: File version", te);
              var ie = (function(e) {
                  return {
                    unit: (function(e) {
                      return void 0 !== e && !0 === e.hasAttribute("meter")
                        ? parseFloat(e.getAttribute("meter"))
                        : 1;
                    })(i(e, "unit")[0]),
                    upAxis: (function(e) {
                      return void 0 !== e ? e.textContent : "Y_UP";
                    })(i(e, "up_axis")[0])
                  };
                })(i(ee, "asset")[0]),
                ne = new THREE.TextureLoader(this.manager);
              ne.setPath(this.resourcePath || t).setCrossOrigin(
                this.crossOrigin
              );
              var re;
              THREE.TGALoader &&
                (re = new THREE.TGALoader(this.manager)).setPath(
                  this.resourcePath || t
                );
              var oe = [],
                se = {},
                ae = 0,
                ce = {
                  animations: {},
                  clips: {},
                  controllers: {},
                  images: {},
                  effects: {},
                  materials: {},
                  cameras: {},
                  lights: {},
                  geometries: {},
                  nodes: {},
                  visualScenes: {},
                  kinematicsModels: {},
                  physicsModels: {},
                  kinematicsScenes: {}
                };
              l(ee, "library_animations", "animation", function(e) {
                for (
                  var t = { sources: {}, samplers: {}, channels: {} },
                    i = 0,
                    n = e.childNodes.length;
                  i < n;
                  i++
                ) {
                  var r = e.childNodes[i];
                  if (1 === r.nodeType) {
                    var o;
                    switch (r.nodeName) {
                      case "source":
                        (o = r.getAttribute("id")), (t.sources[o] = N(r));
                        break;
                      case "sampler":
                        (o = r.getAttribute("id")),
                          (t.samplers[o] = (function(e) {
                            for (
                              var t = { inputs: {} },
                                i = 0,
                                n = e.childNodes.length;
                              i < n;
                              i++
                            ) {
                              var r = e.childNodes[i];
                              if (1 === r.nodeType)
                                switch (r.nodeName) {
                                  case "input":
                                    var o = s(r.getAttribute("source")),
                                      a = r.getAttribute("semantic");
                                    t.inputs[a] = o;
                                }
                            }
                            return t;
                          })(r));
                        break;
                      case "channel":
                        (o = r.getAttribute("target")),
                          (t.channels[o] = (function(e) {
                            var t = {},
                              i = e.getAttribute("target").split("/"),
                              n = i.shift(),
                              r = i.shift(),
                              o = -1 !== r.indexOf("("),
                              a = -1 !== r.indexOf(".");
                            if (a)
                              (i = r.split(".")),
                                (r = i.shift()),
                                (t.member = i.shift());
                            else if (o) {
                              var c = r.split("(");
                              r = c.shift();
                              for (var l = 0; l < c.length; l++)
                                c[l] = parseInt(c[l].replace(/\)/, ""));
                              t.indices = c;
                            }
                            return (
                              (t.id = n),
                              (t.sid = r),
                              (t.arraySyntax = o),
                              (t.memberSyntax = a),
                              (t.sampler = s(e.getAttribute("source"))),
                              t
                            );
                          })(r));
                        break;
                      default:
                        console.log(r);
                    }
                  }
                }
                ce.animations[e.getAttribute("id")] = t;
              }),
                l(ee, "library_animation_clips", "animation_clip", function(e) {
                  for (
                    var t = {
                        name: e.getAttribute("id") || "default",
                        start: parseFloat(e.getAttribute("start") || 0),
                        end: parseFloat(e.getAttribute("end") || 0),
                        animations: []
                      },
                      i = 0,
                      n = e.childNodes.length;
                    i < n;
                    i++
                  ) {
                    var r = e.childNodes[i];
                    if (1 === r.nodeType)
                      switch (r.nodeName) {
                        case "instance_animation":
                          t.animations.push(s(r.getAttribute("url")));
                      }
                  }
                  ce.clips[e.getAttribute("id")] = t;
                }),
                l(ee, "library_controllers", "controller", function(e) {
                  for (var t = {}, i = 0, n = e.childNodes.length; i < n; i++) {
                    var a = e.childNodes[i];
                    if (1 === a.nodeType)
                      switch (a.nodeName) {
                        case "skin":
                          (t.id = s(a.getAttribute("source"))),
                            (t.skin = (function(e) {
                              for (
                                var t = { sources: {} },
                                  i = 0,
                                  n = e.childNodes.length;
                                i < n;
                                i++
                              ) {
                                var a = e.childNodes[i];
                                if (1 === a.nodeType)
                                  switch (a.nodeName) {
                                    case "bind_shape_matrix":
                                      t.bindShapeMatrix = r(a.textContent);
                                      break;
                                    case "source":
                                      var c = a.getAttribute("id");
                                      t.sources[c] = N(a);
                                      break;
                                    case "joints":
                                      t.joints = (function(e) {
                                        for (
                                          var t = { inputs: {} },
                                            i = 0,
                                            n = e.childNodes.length;
                                          i < n;
                                          i++
                                        ) {
                                          var r = e.childNodes[i];
                                          if (1 === r.nodeType)
                                            switch (r.nodeName) {
                                              case "input":
                                                var o = r.getAttribute(
                                                    "semantic"
                                                  ),
                                                  a = s(
                                                    r.getAttribute("source")
                                                  );
                                                t.inputs[o] = a;
                                            }
                                        }
                                        return t;
                                      })(a);
                                      break;
                                    case "vertex_weights":
                                      t.vertexWeights = (function(e) {
                                        for (
                                          var t = { inputs: {} },
                                            i = 0,
                                            n = e.childNodes.length;
                                          i < n;
                                          i++
                                        ) {
                                          var r = e.childNodes[i];
                                          if (1 === r.nodeType)
                                            switch (r.nodeName) {
                                              case "input":
                                                var a = r.getAttribute(
                                                    "semantic"
                                                  ),
                                                  c = s(
                                                    r.getAttribute("source")
                                                  ),
                                                  l = parseInt(
                                                    r.getAttribute("offset")
                                                  );
                                                t.inputs[a] = {
                                                  id: c,
                                                  offset: l
                                                };
                                                break;
                                              case "vcount":
                                                t.vcount = o(r.textContent);
                                                break;
                                              case "v":
                                                t.v = o(r.textContent);
                                            }
                                        }
                                        return t;
                                      })(a);
                                  }
                              }
                              return t;
                            })(a));
                          break;
                        case "morph":
                          (t.id = s(a.getAttribute("source"))),
                            console.warn(
                              "THREE.ColladaLoader: Morph target animation not supported yet."
                            );
                      }
                  }
                  ce.controllers[e.getAttribute("id")] = t;
                }),
                l(ee, "library_images", "image", function(e) {
                  var t = { init_from: i(e, "init_from")[0].textContent };
                  ce.images[e.getAttribute("id")] = t;
                }),
                l(ee, "library_effects", "effect", function(e) {
                  for (var t = {}, i = 0, n = e.childNodes.length; i < n; i++) {
                    var r = e.childNodes[i];
                    if (1 === r.nodeType)
                      switch (r.nodeName) {
                        case "profile_COMMON":
                          t.profile = (function(e) {
                            for (
                              var t = { surfaces: {}, samplers: {} },
                                i = 0,
                                n = e.childNodes.length;
                              i < n;
                              i++
                            ) {
                              var r = e.childNodes[i];
                              if (1 === r.nodeType)
                                switch (r.nodeName) {
                                  case "newparam":
                                    !(function(e, t) {
                                      for (
                                        var i = e.getAttribute("sid"),
                                          n = 0,
                                          r = e.childNodes.length;
                                        n < r;
                                        n++
                                      ) {
                                        var o = e.childNodes[n];
                                        if (1 === o.nodeType)
                                          switch (o.nodeName) {
                                            case "surface":
                                              t.surfaces[i] = (function(e) {
                                                for (
                                                  var t = {},
                                                    i = 0,
                                                    n = e.childNodes.length;
                                                  i < n;
                                                  i++
                                                ) {
                                                  var r = e.childNodes[i];
                                                  if (1 === r.nodeType)
                                                    switch (r.nodeName) {
                                                      case "init_from":
                                                        t.init_from =
                                                          r.textContent;
                                                    }
                                                }
                                                return t;
                                              })(o);
                                              break;
                                            case "sampler2D":
                                              t.samplers[i] = (function(e) {
                                                for (
                                                  var t = {},
                                                    i = 0,
                                                    n = e.childNodes.length;
                                                  i < n;
                                                  i++
                                                ) {
                                                  var r = e.childNodes[i];
                                                  if (1 === r.nodeType)
                                                    switch (r.nodeName) {
                                                      case "source":
                                                        t.source =
                                                          r.textContent;
                                                    }
                                                }
                                                return t;
                                              })(o);
                                          }
                                      }
                                    })(r, t);
                                    break;
                                  case "technique":
                                    t.technique = (function(e) {
                                      for (
                                        var t = {},
                                          i = 0,
                                          n = e.childNodes.length;
                                        i < n;
                                        i++
                                      ) {
                                        var r = e.childNodes[i];
                                        if (1 === r.nodeType)
                                          switch (r.nodeName) {
                                            case "constant":
                                            case "lambert":
                                            case "blinn":
                                            case "phong":
                                              (t.type = r.nodeName),
                                                (t.parameters = (function(e) {
                                                  for (
                                                    var t = {},
                                                      i = 0,
                                                      n = e.childNodes.length;
                                                    i < n;
                                                    i++
                                                  ) {
                                                    var r = e.childNodes[i];
                                                    if (1 === r.nodeType)
                                                      switch (r.nodeName) {
                                                        case "emission":
                                                        case "diffuse":
                                                        case "specular":
                                                        case "bump":
                                                        case "ambient":
                                                        case "shininess":
                                                        case "transparency":
                                                          t[r.nodeName] = b(r);
                                                          break;
                                                        case "transparent":
                                                          t[r.nodeName] = {
                                                            opaque: r.getAttribute(
                                                              "opaque"
                                                            ),
                                                            data: b(r)
                                                          };
                                                      }
                                                  }
                                                  return t;
                                                })(r));
                                          }
                                      }
                                      return t;
                                    })(r);
                                    break;
                                  case "extra":
                                    t.extra = (function(e) {
                                      for (
                                        var t = {},
                                          i = 0,
                                          n = e.childNodes.length;
                                        i < n;
                                        i++
                                      ) {
                                        var r = e.childNodes[i];
                                        if (1 === r.nodeType)
                                          switch (r.nodeName) {
                                            case "technique":
                                              t.technique = (function(e) {
                                                for (
                                                  var t = {},
                                                    i = 0,
                                                    n = e.childNodes.length;
                                                  i < n;
                                                  i++
                                                ) {
                                                  var r = e.childNodes[i];
                                                  if (1 === r.nodeType)
                                                    switch (r.nodeName) {
                                                      case "double_sided":
                                                        t[
                                                          r.nodeName
                                                        ] = parseInt(
                                                          r.textContent
                                                        );
                                                    }
                                                }
                                                return t;
                                              })(r);
                                          }
                                      }
                                      return t;
                                    })(r);
                                }
                            }
                            return t;
                          })(r);
                      }
                  }
                  ce.effects[e.getAttribute("id")] = t;
                }),
                l(ee, "library_materials", "material", function(e) {
                  for (
                    var t = { name: e.getAttribute("name") },
                      i = 0,
                      n = e.childNodes.length;
                    i < n;
                    i++
                  ) {
                    var r = e.childNodes[i];
                    if (1 === r.nodeType)
                      switch (r.nodeName) {
                        case "instance_effect":
                          t.url = s(r.getAttribute("url"));
                      }
                  }
                  ce.materials[e.getAttribute("id")] = t;
                }),
                l(ee, "library_cameras", "camera", function(e) {
                  for (
                    var t = { name: e.getAttribute("name") },
                      i = 0,
                      n = e.childNodes.length;
                    i < n;
                    i++
                  ) {
                    var r = e.childNodes[i];
                    if (1 === r.nodeType)
                      switch (r.nodeName) {
                        case "optics":
                          t.optics = (function(e) {
                            for (var t = 0; t < e.childNodes.length; t++) {
                              var i = e.childNodes[t];
                              switch (i.nodeName) {
                                case "technique_common":
                                  return (function(e) {
                                    for (
                                      var t = {}, i = 0;
                                      i < e.childNodes.length;
                                      i++
                                    ) {
                                      var n = e.childNodes[i];
                                      switch (n.nodeName) {
                                        case "perspective":
                                        case "orthographic":
                                          (t.technique = n.nodeName),
                                            (t.parameters = (function(e) {
                                              for (
                                                var t = {}, i = 0;
                                                i < e.childNodes.length;
                                                i++
                                              ) {
                                                var n = e.childNodes[i];
                                                switch (n.nodeName) {
                                                  case "xfov":
                                                  case "yfov":
                                                  case "xmag":
                                                  case "ymag":
                                                  case "znear":
                                                  case "zfar":
                                                  case "aspect_ratio":
                                                    t[n.nodeName] = parseFloat(
                                                      n.textContent
                                                    );
                                                }
                                              }
                                              return t;
                                            })(n));
                                      }
                                    }
                                    return t;
                                  })(i);
                              }
                            }
                            return {};
                          })(r);
                      }
                  }
                  ce.cameras[e.getAttribute("id")] = t;
                }),
                l(ee, "library_lights", "light", function(e) {
                  for (var t = {}, i = 0, n = e.childNodes.length; i < n; i++) {
                    var o = e.childNodes[i];
                    if (1 === o.nodeType)
                      switch (o.nodeName) {
                        case "technique_common":
                          t = (function(e) {
                            for (
                              var t = {}, i = 0, n = e.childNodes.length;
                              i < n;
                              i++
                            ) {
                              var o = e.childNodes[i];
                              if (1 === o.nodeType)
                                switch (o.nodeName) {
                                  case "directional":
                                  case "point":
                                  case "spot":
                                  case "ambient":
                                    (t.technique = o.nodeName),
                                      (t.parameters = (function(e) {
                                        for (
                                          var t = {},
                                            i = 0,
                                            n = e.childNodes.length;
                                          i < n;
                                          i++
                                        ) {
                                          var o = e.childNodes[i];
                                          if (1 === o.nodeType)
                                            switch (o.nodeName) {
                                              case "color":
                                                var s = r(o.textContent);
                                                t.color = new THREE.Color().fromArray(
                                                  s
                                                );
                                                break;
                                              case "falloff_angle":
                                                t.falloffAngle = parseFloat(
                                                  o.textContent
                                                );
                                                break;
                                              case "quadratic_attenuation":
                                                var a = parseFloat(
                                                  o.textContent
                                                );
                                                t.distance = a
                                                  ? Math.sqrt(1 / a)
                                                  : 0;
                                            }
                                        }
                                        return t;
                                      })(o));
                                }
                            }
                            return t;
                          })(o);
                      }
                  }
                  ce.lights[e.getAttribute("id")] = t;
                }),
                l(ee, "library_geometries", "geometry", function(e) {
                  var t = {
                      name: e.getAttribute("name"),
                      sources: {},
                      vertices: {},
                      primitives: []
                    },
                    n = i(e, "mesh")[0];
                  if (void 0 !== n) {
                    for (var r = 0; r < n.childNodes.length; r++) {
                      var a = n.childNodes[r];
                      if (1 === a.nodeType) {
                        var c = a.getAttribute("id");
                        switch (a.nodeName) {
                          case "source":
                            t.sources[c] = N(a);
                            break;
                          case "vertices":
                            t.vertices = (function(e) {
                              for (
                                var t = {}, i = 0;
                                i < e.childNodes.length;
                                i++
                              ) {
                                var n = e.childNodes[i];
                                1 === n.nodeType &&
                                  (t[n.getAttribute("semantic")] = s(
                                    n.getAttribute("source")
                                  ));
                              }
                              return t;
                            })(a);
                            break;
                          case "polygons":
                            console.warn(
                              "THREE.ColladaLoader: Unsupported primitive type: ",
                              a.nodeName
                            );
                            break;
                          case "lines":
                          case "linestrips":
                          case "polylist":
                          case "triangles":
                            t.primitives.push(
                              (function(e) {
                                for (
                                  var t = {
                                      type: e.nodeName,
                                      material: e.getAttribute("material"),
                                      count: parseInt(e.getAttribute("count")),
                                      inputs: {},
                                      stride: 0,
                                      hasUV: !1
                                    },
                                    i = 0,
                                    n = e.childNodes.length;
                                  i < n;
                                  i++
                                ) {
                                  var r = e.childNodes[i];
                                  if (1 === r.nodeType)
                                    switch (r.nodeName) {
                                      case "input":
                                        var a = s(r.getAttribute("source")),
                                          c = r.getAttribute("semantic"),
                                          l = parseInt(
                                            r.getAttribute("offset")
                                          ),
                                          h = parseInt(r.getAttribute("set")),
                                          u = h > 0 ? c + h : c;
                                        (t.inputs[u] = { id: a, offset: l }),
                                          (t.stride = Math.max(
                                            t.stride,
                                            l + 1
                                          )),
                                          "TEXCOORD" === c && (t.hasUV = !0);
                                        break;
                                      case "vcount":
                                        t.vcount = o(r.textContent);
                                        break;
                                      case "p":
                                        t.p = o(r.textContent);
                                    }
                                }
                                return t;
                              })(a)
                            );
                            break;
                          default:
                            console.log(a);
                        }
                      }
                    }
                    ce.geometries[e.getAttribute("id")] = t;
                  }
                }),
                l(ee, "library_nodes", "node", P),
                l(ee, "library_visual_scenes", "visual_scene", function(e) {
                  var t = { name: e.getAttribute("name"), children: [] };
                  !(function(e) {
                    for (
                      var t = e.getElementsByTagName("node"), i = 0;
                      i < t.length;
                      i++
                    ) {
                      var n = t[i];
                      !1 === n.hasAttribute("id") && n.setAttribute("id", a());
                    }
                  })(e);
                  for (var n = i(e, "node"), r = 0; r < n.length; r++)
                    t.children.push(P(n[r]));
                  ce.visualScenes[e.getAttribute("id")] = t;
                }),
                l(ee, "library_kinematics_models", "kinematics_model", function(
                  e
                ) {
                  for (
                    var t = {
                        name: e.getAttribute("name") || "",
                        joints: {},
                        links: []
                      },
                      i = 0;
                    i < e.childNodes.length;
                    i++
                  ) {
                    var n = e.childNodes[i];
                    if (1 === n.nodeType)
                      switch (n.nodeName) {
                        case "technique_common":
                          !(function(e, t) {
                            for (var i = 0; i < e.childNodes.length; i++) {
                              var n = e.childNodes[i];
                              if (1 === n.nodeType)
                                switch (n.nodeName) {
                                  case "joint":
                                    t.joints[n.getAttribute("sid")] = (function(
                                      e
                                    ) {
                                      for (
                                        var t, i = 0;
                                        i < e.childNodes.length;
                                        i++
                                      ) {
                                        var n = e.childNodes[i];
                                        if (1 === n.nodeType)
                                          switch (n.nodeName) {
                                            case "prismatic":
                                            case "revolute":
                                              t = (function(e, t) {
                                                for (
                                                  var t = {
                                                      sid: e.getAttribute(
                                                        "sid"
                                                      ),
                                                      name:
                                                        e.getAttribute(
                                                          "name"
                                                        ) || "",
                                                      axis: new THREE.Vector3(),
                                                      limits: {
                                                        min: 0,
                                                        max: 0
                                                      },
                                                      type: e.nodeName,
                                                      static: !1,
                                                      zeroPosition: 0,
                                                      middlePosition: 0
                                                    },
                                                    i = 0;
                                                  i < e.childNodes.length;
                                                  i++
                                                ) {
                                                  var n = e.childNodes[i];
                                                  if (1 === n.nodeType)
                                                    switch (n.nodeName) {
                                                      case "axis":
                                                        var o = r(
                                                          n.textContent
                                                        );
                                                        t.axis.fromArray(o);
                                                        break;
                                                      case "limits":
                                                        var s = n.getElementsByTagName(
                                                            "max"
                                                          )[0],
                                                          a = n.getElementsByTagName(
                                                            "min"
                                                          )[0];
                                                        (t.limits.max = parseFloat(
                                                          s.textContent
                                                        )),
                                                          (t.limits.min = parseFloat(
                                                            a.textContent
                                                          ));
                                                    }
                                                }
                                                return (
                                                  t.limits.min >=
                                                    t.limits.max &&
                                                    (t.static = !0),
                                                  (t.middlePosition =
                                                    (t.limits.min +
                                                      t.limits.max) /
                                                    2),
                                                  t
                                                );
                                              })(n);
                                          }
                                      }
                                      return t;
                                    })(n);
                                    break;
                                  case "link":
                                    t.links.push(_(n));
                                }
                            }
                          })(n, t);
                      }
                  }
                  ce.kinematicsModels[e.getAttribute("id")] = t;
                }),
                l(ee, "library_physics_models", "physics_model", function(e) {
                  for (
                    var t = {
                        name: e.getAttribute("name") || "",
                        rigidBodies: {}
                      },
                      i = 0;
                    i < e.childNodes.length;
                    i++
                  ) {
                    var n = e.childNodes[i];
                    if (1 === n.nodeType)
                      switch (n.nodeName) {
                        case "rigid_body":
                          (t.rigidBodies[n.getAttribute("name")] = {}),
                            (function(e, t) {
                              for (var i = 0; i < e.childNodes.length; i++) {
                                var n = e.childNodes[i];
                                if (1 === n.nodeType)
                                  switch (n.nodeName) {
                                    case "technique_common":
                                      !(function(e, t) {
                                        for (
                                          var i = 0;
                                          i < e.childNodes.length;
                                          i++
                                        ) {
                                          var n = e.childNodes[i];
                                          if (1 === n.nodeType)
                                            switch (n.nodeName) {
                                              case "inertia":
                                                t.inertia = r(n.textContent);
                                                break;
                                              case "mass":
                                                t.mass = r(n.textContent)[0];
                                            }
                                        }
                                      })(n, t);
                                  }
                              }
                            })(n, t.rigidBodies[n.getAttribute("name")]);
                      }
                  }
                  ce.physicsModels[e.getAttribute("id")] = t;
                }),
                l(ee, "scene", "instance_kinematics_scene", function(e) {
                  for (
                    var t = { bindJointAxis: [] }, i = 0;
                    i < e.childNodes.length;
                    i++
                  ) {
                    var n = e.childNodes[i];
                    if (1 === n.nodeType)
                      switch (n.nodeName) {
                        case "bind_joint_axis":
                          t.bindJointAxis.push(
                            (function(e) {
                              for (
                                var t = {
                                    target: e
                                      .getAttribute("target")
                                      .split("/")
                                      .pop()
                                  },
                                  i = 0;
                                i < e.childNodes.length;
                                i++
                              ) {
                                var n = e.childNodes[i];
                                if (1 === n.nodeType)
                                  switch (n.nodeName) {
                                    case "axis":
                                      var r = n.getElementsByTagName(
                                        "param"
                                      )[0];
                                      t.axis = r.textContent;
                                      var o = t.axis
                                        .split("inst_")
                                        .pop()
                                        .split("axis")[0];
                                      t.jointIndex = o.substr(0, o.length - 1);
                                  }
                              }
                              return t;
                            })(n)
                          );
                      }
                  }
                  ce.kinematicsScenes[s(e.getAttribute("url"))] = t;
                }),
                h(ce.animations, d),
                h(ce.clips, f),
                h(ce.controllers, v),
                h(ce.images, y),
                h(ce.effects, T),
                h(ce.materials, w),
                h(ce.cameras, k),
                h(ce.lights, A),
                h(ce.geometries, M),
                h(ce.visualScenes, q),
                (function() {
                  var e = ce.clips;
                  if (!0 === c(e)) {
                    if (!1 === c(ce.animations)) {
                      var t = [];
                      for (var i in ce.animations)
                        for (var n = p(i), r = 0, o = n.length; r < o; r++)
                          t.push(n[r]);
                      oe.push(new THREE.AnimationClip("default", -1, t));
                    }
                  } else for (var i in e) oe.push(m(i));
                })(),
                (function() {
                  function e(e, t) {
                    var i = t.getAttribute("name"),
                      n = o.joints[e];
                    a.traverse(function(o) {
                      o.name === i &&
                        (l[e] = {
                          object: o,
                          transforms: (function(e) {
                            for (
                              var t = [],
                                i = ee.querySelector('[id="' + e.id + '"]'),
                                n = 0;
                              n < i.childNodes.length;
                              n++
                            ) {
                              var o = i.childNodes[n];
                              if (1 === o.nodeType)
                                switch (o.nodeName) {
                                  case "matrix":
                                    var s = r(o.textContent),
                                      a = new THREE.Matrix4()
                                        .fromArray(s)
                                        .transpose();
                                    t.push({
                                      sid: o.getAttribute("sid"),
                                      type: o.nodeName,
                                      obj: a
                                    });
                                    break;
                                  case "translate":
                                  case "scale":
                                    var s = r(o.textContent),
                                      c = new THREE.Vector3().fromArray(s);
                                    t.push({
                                      sid: o.getAttribute("sid"),
                                      type: o.nodeName,
                                      obj: c
                                    });
                                    break;
                                  case "rotate":
                                    var s = r(o.textContent),
                                      c = new THREE.Vector3().fromArray(s),
                                      l = THREE.Math.degToRad(s[3]);
                                    t.push({
                                      sid: o.getAttribute("sid"),
                                      type: o.nodeName,
                                      obj: c,
                                      angle: l
                                    });
                                }
                            }
                            return t;
                          })(t),
                          joint: n,
                          position: n.zeroPosition
                        });
                    });
                  }
                  var t = Object.keys(ce.kinematicsModels)[0],
                    i = Object.keys(ce.kinematicsScenes)[0],
                    n = Object.keys(ce.visualScenes)[0];
                  if (void 0 !== t && void 0 !== i) {
                    for (
                      var o = (function(e) {
                          return u(ce.kinematicsModels[e], L);
                        })(t),
                        s = (function(e) {
                          return u(ce.kinematicsScenes[e], I);
                        })(i),
                        a = W(n),
                        c = s.bindJointAxis,
                        l = {},
                        h = 0,
                        d = c.length;
                      h < d;
                      h++
                    ) {
                      var p = c[h],
                        f = ee.querySelector('[sid="' + p.target + '"]');
                      if (f) {
                        var m = f.parentElement;
                        e(p.jointIndex, m);
                      }
                    }
                    var v = new THREE.Matrix4();
                    se = {
                      joints: o && o.joints,
                      getJointValue: function(e) {
                        var t = l[e];
                        if (t) return t.position;
                        console.warn(
                          "THREE.ColladaLoader: Joint " + e + " doesn't exist."
                        );
                      },
                      setJointValue: function(e, t) {
                        var i = l[e];
                        if (i) {
                          var n = i.joint;
                          if (t > n.limits.max || t < n.limits.min)
                            console.warn(
                              "THREE.ColladaLoader: Joint " +
                                e +
                                " value " +
                                t +
                                " outside of limits (min: " +
                                n.limits.min +
                                ", max: " +
                                n.limits.max +
                                ")."
                            );
                          else if (n.static)
                            console.warn(
                              "THREE.ColladaLoader: Joint " + e + " is static."
                            );
                          else {
                            var r = i.object,
                              o = n.axis,
                              s = i.transforms;
                            Y.identity();
                            for (var a = 0; a < s.length; a++) {
                              var c = s[a];
                              if (c.sid && -1 !== c.sid.indexOf(e))
                                switch (n.type) {
                                  case "revolute":
                                    Y.multiply(
                                      v.makeRotationAxis(
                                        o,
                                        THREE.Math.degToRad(t)
                                      )
                                    );
                                    break;
                                  case "prismatic":
                                    Y.multiply(
                                      v.makeTranslation(
                                        o.x * t,
                                        o.y * t,
                                        o.z * t
                                      )
                                    );
                                    break;
                                  default:
                                    console.warn(
                                      "THREE.ColladaLoader: Unknown joint type: " +
                                        n.type
                                    );
                                }
                              else
                                switch (c.type) {
                                  case "matrix":
                                    Y.multiply(c.obj);
                                    break;
                                  case "translate":
                                    Y.multiply(
                                      v.makeTranslation(
                                        c.obj.x,
                                        c.obj.y,
                                        c.obj.z
                                      )
                                    );
                                    break;
                                  case "scale":
                                    Y.scale(c.obj);
                                    break;
                                  case "rotate":
                                    Y.multiply(
                                      v.makeRotationAxis(c.obj, c.angle)
                                    );
                                }
                            }
                            r.matrix.copy(Y),
                              r.matrix.decompose(
                                r.position,
                                r.quaternion,
                                r.scale
                              ),
                              (l[e].position = t);
                          }
                        } else
                          console.log(
                            "THREE.ColladaLoader: " + e + " does not exist."
                          );
                      }
                    };
                  }
                })();
              var le = (function(e) {
                return W(
                  s(i(e, "instance_visual_scene")[0].getAttribute("url"))
                );
              })(i(ee, "scene")[0]);
              return (
                "Z_UP" === ie.upAxis &&
                  le.quaternion.setFromEuler(
                    new THREE.Euler(-Math.PI / 2, 0, 0)
                  ),
                le.scale.multiplyScalar(ie.unit),
                { animations: oe, kinematics: se, library: ce, scene: le }
              );
            }
          });
      },
      {}
    ],
    4: [
      function(e, t, i) {
        "use strict";
        var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r =
            "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
              ? function(e) {
                  return void 0 === e ? "undefined" : n(e);
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : void 0 === e
                    ? "undefined"
                    : n(e);
                };
        t.exports = THREE.FBXLoader = (function() {
          function e(e) {
            this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
          }
          function t(e) {
            this.textureLoader = e;
          }
          function i() {}
          function n() {}
          function o() {}
          function s() {}
          function a(e, t) {
            (this.dv = new DataView(e)),
              (this.offset = 0),
              (this.littleEndian = void 0 === t || t);
          }
          function c() {}
          function l(e) {
            var t = e.match(/FBXVersion: (\d+)/);
            if (t) {
              return parseInt(t[1]);
            }
            throw new Error(
              "THREE.FBXLoader: Cannot find the version number for the file given."
            );
          }
          function h(e) {
            return e / 46186158e3;
          }
          function u(e, t, i, n) {
            var r;
            switch (n.mappingType) {
              case "ByPolygonVertex":
                r = e;
                break;
              case "ByPolygon":
                r = t;
                break;
              case "ByVertice":
                r = i;
                break;
              case "AllSame":
                r = n.indices[0];
                break;
              default:
                console.warn(
                  "THREE.FBXLoader: unknown attribute mapping type " +
                    n.mappingType
                );
            }
            "IndexToDirect" === n.referenceType && (r = n.indices[r]);
            var o = r * n.dataSize,
              s = o + n.dataSize;
            return (function(e, t, i, n) {
              for (var r = i, o = 0; r < n; r++, o++) e[o] = t[r];
              return e;
            })(b, n.buffer, o, s);
          }
          function d(e) {
            var t = new THREE.Matrix4();
            k.set(0, 0, 0), R.identity();
            var i = p(e.eulerOrder ? e.eulerOrder : 0);
            if (
              (e.translation && k.fromArray(e.translation),
              e.rotationOffset && k.add(x.fromArray(e.rotationOffset)),
              e.rotation)
            ) {
              (n = e.rotation.map(THREE.Math.degToRad)).push(i),
                R.makeRotationFromEuler(w.fromArray(n));
            }
            if (e.preRotation) {
              (n = e.preRotation.map(THREE.Math.degToRad)).push(i),
                T.makeRotationFromEuler(w.fromArray(n)),
                R.premultiply(T);
            }
            if (e.postRotation) {
              var n = e.postRotation.map(THREE.Math.degToRad);
              n.push(i),
                T.makeRotationFromEuler(w.fromArray(n)),
                T.getInverse(T),
                R.multiply(T);
            }
            return (
              e.scale && t.scale(x.fromArray(e.scale)),
              t.setPosition(k),
              t.multiply(R),
              t
            );
          }
          function p(e) {
            var t = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
            return 6 === e
              ? (console.warn(
                  "THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."
                ),
                t[0])
              : t[e];
          }
          function f(e) {
            return e.split(",").map(function(e) {
              return parseFloat(e);
            });
          }
          function m(e, t, i) {
            return (
              void 0 === t && (t = 0),
              void 0 === i && (i = e.byteLength),
              THREE.LoaderUtils.decodeText(new Uint8Array(e, t, i))
            );
          }
          function v(e, t, i) {
            return e
              .slice(0, t)
              .concat(i)
              .concat(e.slice(t));
          }
          var g, y, E;
          (e.prototype = {
            constructor: e,
            crossOrigin: "anonymous",
            load: function(e, t, i, n) {
              var r = this,
                o = THREE.LoaderUtils.extractUrlBase(e),
                s = new THREE.FileLoader(this.manager);
              s.setResponseType("arraybuffer"),
                s.load(
                  e,
                  function(i) {
                    try {
                      var s = r.parse(i, o);
                      t(s);
                    } catch (t) {
                      setTimeout(function() {
                        n && n(t), r.manager.itemError(e);
                      }, 0);
                    }
                  },
                  i,
                  n
                );
            },
            setCrossOrigin: function(e) {
              return (this.crossOrigin = e), this;
            },
            parse: function(e, i) {
              if (
                (function(e) {
                  var t = "Kaydara FBX Binary  \0";
                  return e.byteLength >= t.length && t === m(e, 0, t.length);
                })(e)
              )
                g = new s().parse(e);
              else {
                var n = m(e);
                if (
                  !(function(e) {
                    function t(t) {
                      var i = e[t - 1];
                      return (e = e.slice(n + t)), n++, i;
                    }
                    for (
                      var i = [
                          "K",
                          "a",
                          "y",
                          "d",
                          "a",
                          "r",
                          "a",
                          "\\",
                          "F",
                          "B",
                          "X",
                          "\\",
                          "B",
                          "i",
                          "n",
                          "a",
                          "r",
                          "y",
                          "\\",
                          "\\"
                        ],
                        n = 0,
                        r = 0;
                      r < i.length;
                      ++r
                    )
                      if (t(1) === i[r]) return !1;
                    return !0;
                  })(n)
                )
                  throw new Error("THREE.FBXLoader: Unknown format.");
                if (l(n) < 7e3)
                  throw new Error(
                    "THREE.FBXLoader: FBX version not supported, FileVersion: " +
                      l(n)
                  );
                g = new o().parse(n);
              }
              return new t(
                new THREE.TextureLoader(this.manager)
                  .setPath(i)
                  .setCrossOrigin(this.crossOrigin)
              ).parse(g);
            }
          }),
            (t.prototype = {
              constructor: t,
              parse: function() {
                y = this.parseConnections();
                var e = this.parseImages(),
                  t = this.parseTextures(e),
                  n = this.parseMaterials(t),
                  r = this.parseDeformers(),
                  o = new i().parse(r);
                return this.parseScene(r, o, n), E;
              },
              parseConnections: function() {
                var e = new Map();
                if ("Connections" in g) {
                  g.Connections.connections.forEach(function(t) {
                    var i = t[0],
                      n = t[1],
                      r = t[2];
                    e.has(i) || e.set(i, { parents: [], children: [] });
                    var o = { ID: n, relationship: r };
                    e.get(i).parents.push(o),
                      e.has(n) || e.set(n, { parents: [], children: [] });
                    var s = { ID: i, relationship: r };
                    e.get(n).children.push(s);
                  });
                }
                return e;
              },
              parseImages: function() {
                var e = {},
                  t = {};
                if ("Video" in g.Objects) {
                  var i = g.Objects.Video;
                  for (var n in i) {
                    var r = i[n];
                    if (
                      ((e[(c = parseInt(n))] =
                        r.RelativeFilename || r.Filename),
                      "Content" in r)
                    ) {
                      var o =
                          r.Content instanceof ArrayBuffer &&
                          r.Content.byteLength > 0,
                        s = "string" == typeof r.Content && "" !== r.Content;
                      if (o || s) {
                        var a = this.parseImage(i[n]);
                        t[r.RelativeFilename || r.Filename] = a;
                      }
                    }
                  }
                }
                for (var c in e) {
                  var l = e[c];
                  void 0 !== t[l]
                    ? (e[c] = t[l])
                    : (e[c] = e[c].split("\\").pop());
                }
                return e;
              },
              parseImage: function(e) {
                var t,
                  i = e.Content,
                  n = e.RelativeFilename || e.Filename,
                  r = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
                switch (r) {
                  case "bmp":
                    t = "image/bmp";
                    break;
                  case "jpg":
                  case "jpeg":
                    t = "image/jpeg";
                    break;
                  case "png":
                    t = "image/png";
                    break;
                  case "tif":
                    t = "image/tiff";
                    break;
                  case "tga":
                    if ("function" != typeof THREE.TGALoader)
                      return void console.warn(
                        "FBXLoader: THREE.TGALoader is required to load TGA textures"
                      );
                    null === THREE.Loader.Handlers.get(".tga") &&
                      THREE.Loader.Handlers.add(
                        /\.tga$/i,
                        new THREE.TGALoader()
                      ),
                      (t = "image/tga");
                    break;
                  default:
                    return void console.warn(
                      'FBXLoader: Image type "' + r + '" is not supported.'
                    );
                }
                if ("string" == typeof i) return "data:" + t + ";base64," + i;
                var o = new Uint8Array(i);
                return window.URL.createObjectURL(new Blob([o], { type: t }));
              },
              parseTextures: function(e) {
                var t = new Map();
                if ("Texture" in g.Objects) {
                  var i = g.Objects.Texture;
                  for (var n in i) {
                    var r = this.parseTexture(i[n], e);
                    t.set(parseInt(n), r);
                  }
                }
                return t;
              },
              parseTexture: function(e, t) {
                var i = this.loadTexture(e, t);
                (i.ID = e.id), (i.name = e.attrName);
                var n = e.WrapModeU,
                  r = e.WrapModeV,
                  o = void 0 !== n ? n.value : 0,
                  s = void 0 !== r ? r.value : 0;
                if (
                  ((i.wrapS =
                    0 === o ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping),
                  (i.wrapT =
                    0 === s ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping),
                  "Scaling" in e)
                ) {
                  var a = e.Scaling.value;
                  (i.repeat.x = a[0]), (i.repeat.y = a[1]);
                }
                return i;
              },
              loadTexture: function(e, t) {
                var i,
                  n = this.textureLoader.path,
                  r = y.get(e.id).children;
                void 0 !== r &&
                  r.length > 0 &&
                  void 0 !== t[r[0].ID] &&
                  ((0 !== (i = t[r[0].ID]).indexOf("blob:") &&
                    0 !== i.indexOf("data:")) ||
                    this.textureLoader.setPath(void 0));
                var o,
                  s = e.FileName.slice(-3).toLowerCase();
                if ("tga" === s) {
                  var a = THREE.Loader.Handlers.get(".tga");
                  null === a
                    ? (console.warn(
                        "FBXLoader: TGALoader not found, creating empty placeholder texture for",
                        i
                      ),
                      (o = new THREE.Texture()))
                    : (o = a.load(i));
                } else
                  "psd" === s
                    ? (console.warn(
                        "FBXLoader: PSD textures are not supported, creating empty placeholder texture for",
                        i
                      ),
                      (o = new THREE.Texture()))
                    : (o = this.textureLoader.load(i));
                return this.textureLoader.setPath(n), o;
              },
              parseMaterials: function(e) {
                var t = new Map();
                if ("Material" in g.Objects) {
                  var i = g.Objects.Material;
                  for (var n in i) {
                    var r = this.parseMaterial(i[n], e);
                    null !== r && t.set(parseInt(n), r);
                  }
                }
                return t;
              },
              parseMaterial: function(e, t) {
                var i = e.id,
                  n = e.attrName,
                  o = e.ShadingModel;
                if (
                  ("object" === (void 0 === o ? "undefined" : r(o)) &&
                    (o = o.value),
                  !y.has(i))
                )
                  return null;
                var s,
                  a = this.parseParameters(e, t, i);
                switch (o.toLowerCase()) {
                  case "phong":
                    s = new THREE.MeshPhongMaterial();
                    break;
                  case "lambert":
                    s = new THREE.MeshLambertMaterial();
                    break;
                  default:
                    console.warn(
                      'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',
                      o
                    ),
                      (s = new THREE.MeshPhongMaterial({ color: 3342591 }));
                }
                return s.setValues(a), (s.name = n), s;
              },
              parseParameters: function(e, t, i) {
                var n = {};
                e.BumpFactor && (n.bumpScale = e.BumpFactor.value),
                  e.Diffuse
                    ? (n.color = new THREE.Color().fromArray(e.Diffuse.value))
                    : e.DiffuseColor &&
                      "Color" === e.DiffuseColor.type &&
                      (n.color = new THREE.Color().fromArray(
                        e.DiffuseColor.value
                      )),
                  e.DisplacementFactor &&
                    (n.displacementScale = e.DisplacementFactor.value),
                  e.Emissive
                    ? (n.emissive = new THREE.Color().fromArray(
                        e.Emissive.value
                      ))
                    : e.EmissiveColor &&
                      "Color" === e.EmissiveColor.type &&
                      (n.emissive = new THREE.Color().fromArray(
                        e.EmissiveColor.value
                      )),
                  e.EmissiveFactor &&
                    (n.emissiveIntensity = parseFloat(e.EmissiveFactor.value)),
                  e.Opacity && (n.opacity = parseFloat(e.Opacity.value)),
                  n.opacity < 1 && (n.transparent = !0),
                  e.ReflectionFactor &&
                    (n.reflectivity = e.ReflectionFactor.value),
                  e.Shininess && (n.shininess = e.Shininess.value),
                  e.Specular
                    ? (n.specular = new THREE.Color().fromArray(
                        e.Specular.value
                      ))
                    : e.SpecularColor &&
                      "Color" === e.SpecularColor.type &&
                      (n.specular = new THREE.Color().fromArray(
                        e.SpecularColor.value
                      ));
                var r = this;
                return (
                  y.get(i).children.forEach(function(e) {
                    var i = e.relationship;
                    switch (i) {
                      case "Bump":
                        n.bumpMap = r.getTexture(t, e.ID);
                        break;
                      case "DiffuseColor":
                        n.map = r.getTexture(t, e.ID);
                        break;
                      case "DisplacementColor":
                        n.displacementMap = r.getTexture(t, e.ID);
                        break;
                      case "EmissiveColor":
                        n.emissiveMap = r.getTexture(t, e.ID);
                        break;
                      case "NormalMap":
                        n.normalMap = r.getTexture(t, e.ID);
                        break;
                      case "ReflectionColor":
                        (n.envMap = r.getTexture(t, e.ID)),
                          (n.envMap.mapping =
                            THREE.EquirectangularReflectionMapping);
                        break;
                      case "SpecularColor":
                        n.specularMap = r.getTexture(t, e.ID);
                        break;
                      case "TransparentColor":
                        (n.alphaMap = r.getTexture(t, e.ID)),
                          (n.transparent = !0);
                        break;
                      case "AmbientColor":
                      case "ShininessExponent":
                      case "SpecularFactor":
                      case "VectorDisplacementColor":
                      default:
                        console.warn(
                          "THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",
                          i
                        );
                    }
                  }),
                  n
                );
              },
              getTexture: function(e, t) {
                return (
                  "LayeredTexture" in g.Objects &&
                    t in g.Objects.LayeredTexture &&
                    (console.warn(
                      "THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."
                    ),
                    (t = y.get(t).children[0].ID)),
                  e.get(t)
                );
              },
              parseDeformers: function() {
                var e = {},
                  t = {};
                if ("Deformer" in g.Objects) {
                  var i = g.Objects.Deformer;
                  for (var n in i) {
                    var r = i[n],
                      o = y.get(parseInt(n));
                    if ("Skin" === r.attrType) {
                      var s = this.parseSkeleton(o, i);
                      (s.ID = n),
                        o.parents.length > 1 &&
                          console.warn(
                            "THREE.FBXLoader: skeleton attached to more than one geometry is not supported."
                          ),
                        (s.geometryID = o.parents[0].ID),
                        (e[n] = s);
                    } else if ("BlendShape" === r.attrType) {
                      var a = { id: n };
                      (a.rawTargets = this.parseMorphTargets(o, i)),
                        (a.id = n),
                        o.parents.length > 1 &&
                          console.warn(
                            "THREE.FBXLoader: morph target attached to more than one geometry is not supported."
                          ),
                        (t[n] = a);
                    }
                  }
                }
                return { skeletons: e, morphTargets: t };
              },
              parseSkeleton: function(e, t) {
                var i = [];
                return (
                  e.children.forEach(function(e) {
                    var n = t[e.ID];
                    if ("Cluster" === n.attrType) {
                      var r = {
                        ID: e.ID,
                        indices: [],
                        weights: [],
                        transform: new THREE.Matrix4().fromArray(n.Transform.a),
                        transformLink: new THREE.Matrix4().fromArray(
                          n.TransformLink.a
                        ),
                        linkMode: n.Mode
                      };
                      "Indexes" in n &&
                        ((r.indices = n.Indexes.a), (r.weights = n.Weights.a)),
                        i.push(r);
                    }
                  }),
                  { rawBones: i, bones: [] }
                );
              },
              parseMorphTargets: function(e, t) {
                for (var i = [], n = 0; n < e.children.length; n++) {
                  if (8 === n) {
                    console.warn(
                      "FBXLoader: maximum of 8 morph targets supported. Ignoring additional targets."
                    );
                    break;
                  }
                  var r = e.children[n],
                    o = t[r.ID],
                    s = {
                      name: o.attrName,
                      initialWeight: o.DeformPercent,
                      id: o.id,
                      fullWeights: o.FullWeights.a
                    };
                  if ("BlendShapeChannel" !== o.attrType) return;
                  y.get(parseInt(r.ID)).children.forEach(function(e) {
                    void 0 === e.relationship && (s.geoID = e.ID);
                  }),
                    i.push(s);
                }
                return i;
              },
              parseScene: function(e, t, i) {
                E = new THREE.Group();
                var r = this.parseModels(e.skeletons, t, i),
                  o = g.Objects.Model,
                  s = this;
                r.forEach(function(e) {
                  var t = o[e.ID];
                  s.setLookAtProperties(e, t);
                  y.get(e.ID).parents.forEach(function(t) {
                    var i = r.get(t.ID);
                    void 0 !== i && i.add(e);
                  }),
                    null === e.parent && E.add(e);
                }),
                  this.bindSkeleton(e.skeletons, t, r),
                  this.createAmbientLight(),
                  this.setupMorphMaterials();
                var a = new n().parse();
                1 === E.children.length &&
                  E.children[0].isGroup &&
                  ((E.children[0].animations = a), (E = E.children[0])),
                  (E.animations = a);
              },
              parseModels: function(e, t, i) {
                var n = new Map(),
                  r = g.Objects.Model;
                for (var o in r) {
                  var s = parseInt(o),
                    a = r[o],
                    c = y.get(s),
                    l = this.buildSkeleton(c, e, s, a.attrName);
                  if (!l) {
                    switch (a.attrType) {
                      case "Camera":
                        l = this.createCamera(c);
                        break;
                      case "Light":
                        l = this.createLight(c);
                        break;
                      case "Mesh":
                        l = this.createMesh(c, t, i);
                        break;
                      case "NurbsCurve":
                        l = this.createCurve(c, t);
                        break;
                      case "LimbNode":
                      case "Null":
                      default:
                        l = new THREE.Group();
                    }
                    (l.name = THREE.PropertyBinding.sanitizeNodeName(
                      a.attrName
                    )),
                      (l.ID = s);
                  }
                  this.setModelTransforms(l, a), n.set(s, l);
                }
                return n;
              },
              buildSkeleton: function(e, t, i, n) {
                var r = null;
                return (
                  e.parents.forEach(function(e) {
                    for (var o in t) {
                      var s = t[o];
                      s.rawBones.forEach(function(t, o) {
                        if (t.ID === e.ID) {
                          var a = r;
                          (r = new THREE.Bone()).matrixWorld.copy(
                            t.transformLink
                          ),
                            (r.name = THREE.PropertyBinding.sanitizeNodeName(
                              n
                            )),
                            (r.ID = i),
                            (s.bones[o] = r),
                            null !== a && r.add(a);
                        }
                      });
                    }
                  }),
                  r
                );
              },
              createCamera: function(e) {
                var t, i;
                if (
                  (e.children.forEach(function(e) {
                    var t = g.Objects.NodeAttribute[e.ID];
                    void 0 !== t && (i = t);
                  }),
                  void 0 === i)
                )
                  t = new THREE.Object3D();
                else {
                  var n = 0;
                  void 0 !== i.CameraProjectionType &&
                    1 === i.CameraProjectionType.value &&
                    (n = 1);
                  var r = 1;
                  void 0 !== i.NearPlane && (r = i.NearPlane.value / 1e3);
                  var o = 1e3;
                  void 0 !== i.FarPlane && (o = i.FarPlane.value / 1e3);
                  var s = window.innerWidth,
                    a = window.innerHeight;
                  void 0 !== i.AspectWidth &&
                    void 0 !== i.AspectHeight &&
                    ((s = i.AspectWidth.value), (a = i.AspectHeight.value));
                  var c = s / a,
                    l = 45;
                  void 0 !== i.FieldOfView && (l = i.FieldOfView.value);
                  var h = i.FocalLength ? i.FocalLength.value : null;
                  switch (n) {
                    case 0:
                      (t = new THREE.PerspectiveCamera(l, c, r, o)),
                        null !== h && t.setFocalLength(h);
                      break;
                    case 1:
                      t = new THREE.OrthographicCamera(
                        -s / 2,
                        s / 2,
                        a / 2,
                        -a / 2,
                        r,
                        o
                      );
                      break;
                    default:
                      console.warn(
                        "THREE.FBXLoader: Unknown camera type " + n + "."
                      ),
                        (t = new THREE.Object3D());
                  }
                }
                return t;
              },
              createLight: function(e) {
                var t, i;
                if (
                  (e.children.forEach(function(e) {
                    var t = g.Objects.NodeAttribute[e.ID];
                    void 0 !== t && (i = t);
                  }),
                  void 0 === i)
                )
                  t = new THREE.Object3D();
                else {
                  var n;
                  n = void 0 === i.LightType ? 0 : i.LightType.value;
                  var r = 16777215;
                  void 0 !== i.Color &&
                    (r = new THREE.Color().fromArray(i.Color.value));
                  var o = void 0 === i.Intensity ? 1 : i.Intensity.value / 100;
                  void 0 !== i.CastLightOnObject &&
                    0 === i.CastLightOnObject.value &&
                    (o = 0);
                  var s = 0;
                  void 0 !== i.FarAttenuationEnd &&
                    (s =
                      void 0 !== i.EnableFarAttenuation &&
                      0 === i.EnableFarAttenuation.value
                        ? 0
                        : i.FarAttenuationEnd.value);
                  switch (n) {
                    case 0:
                      t = new THREE.PointLight(r, o, s, 1);
                      break;
                    case 1:
                      t = new THREE.DirectionalLight(r, o);
                      break;
                    case 2:
                      var a = Math.PI / 3;
                      void 0 !== i.InnerAngle &&
                        (a = THREE.Math.degToRad(i.InnerAngle.value));
                      var c = 0;
                      void 0 !== i.OuterAngle &&
                        ((c = THREE.Math.degToRad(i.OuterAngle.value)),
                        (c = Math.max(c, 1))),
                        (t = new THREE.SpotLight(r, o, s, a, c, 1));
                      break;
                    default:
                      console.warn(
                        "THREE.FBXLoader: Unknown light type " +
                          i.LightType.value +
                          ", defaulting to a THREE.PointLight."
                      ),
                        (t = new THREE.PointLight(r, o));
                  }
                  void 0 !== i.CastShadows &&
                    1 === i.CastShadows.value &&
                    (t.castShadow = !0);
                }
                return t;
              },
              createMesh: function(e, t, i) {
                var n,
                  r = null,
                  o = null,
                  s = [];
                return (
                  e.children.forEach(function(e) {
                    t.has(e.ID) && (r = t.get(e.ID)),
                      i.has(e.ID) && s.push(i.get(e.ID));
                  }),
                  s.length > 1
                    ? (o = s)
                    : s.length > 0
                    ? (o = s[0])
                    : ((o = new THREE.MeshPhongMaterial({ color: 13421772 })),
                      s.push(o)),
                  "color" in r.attributes &&
                    s.forEach(function(e) {
                      e.vertexColors = THREE.VertexColors;
                    }),
                  r.FBX_Deformer
                    ? (s.forEach(function(e) {
                        e.skinning = !0;
                      }),
                      (n = new THREE.SkinnedMesh(r, o)))
                    : (n = new THREE.Mesh(r, o)),
                  n
                );
              },
              createCurve: function(e, t) {
                var i = e.children.reduce(function(e, i) {
                    return t.has(i.ID) && (e = t.get(i.ID)), e;
                  }, null),
                  n = new THREE.LineBasicMaterial({
                    color: 3342591,
                    linewidth: 1
                  });
                return new THREE.Line(i, n);
              },
              setModelTransforms: function(e, t) {
                var i = {};
                "RotationOrder" in t &&
                  (i.eulerOrder = parseInt(t.RotationOrder.value)),
                  "Lcl_Translation" in t &&
                    (i.translation = t.Lcl_Translation.value),
                  "RotationOffset" in t &&
                    (i.rotationOffset = t.RotationOffset.value),
                  "Lcl_Rotation" in t && (i.rotation = t.Lcl_Rotation.value),
                  "PreRotation" in t && (i.preRotation = t.PreRotation.value),
                  "PostRotation" in t &&
                    (i.postRotation = t.PostRotation.value),
                  "Lcl_Scaling" in t && (i.scale = t.Lcl_Scaling.value);
                var n = d(i);
                e.applyMatrix(n);
              },
              setLookAtProperties: function(e, t) {
                if ("LookAtProperty" in t) {
                  y.get(e.ID).children.forEach(function(t) {
                    if ("LookAtProperty" === t.relationship) {
                      var i = g.Objects.Model[t.ID];
                      if ("Lcl_Translation" in i) {
                        var n = i.Lcl_Translation.value;
                        void 0 !== e.target
                          ? (e.target.position.fromArray(n), E.add(e.target))
                          : e.lookAt(new THREE.Vector3().fromArray(n));
                      }
                    }
                  });
                }
              },
              bindSkeleton: function(e, t, i) {
                var n = this.parsePoseNodes();
                for (var r in e) {
                  var o = e[r];
                  y.get(parseInt(o.ID)).parents.forEach(function(e) {
                    if (t.has(e.ID)) {
                      var r = e.ID;
                      y.get(r).parents.forEach(function(e) {
                        if (i.has(e.ID)) {
                          i.get(e.ID).bind(
                            new THREE.Skeleton(o.bones),
                            n[e.ID]
                          );
                        }
                      });
                    }
                  });
                }
              },
              parsePoseNodes: function() {
                var e = {};
                if ("Pose" in g.Objects) {
                  var t = g.Objects.Pose;
                  for (var i in t)
                    if ("BindPose" === t[i].attrType) {
                      var n = t[i].PoseNode;
                      Array.isArray(n)
                        ? n.forEach(function(t) {
                            e[t.Node] = new THREE.Matrix4().fromArray(
                              t.Matrix.a
                            );
                          })
                        : (e[n.Node] = new THREE.Matrix4().fromArray(
                            n.Matrix.a
                          ));
                    }
                }
                return e;
              },
              createAmbientLight: function() {
                if (
                  "GlobalSettings" in g &&
                  "AmbientColor" in g.GlobalSettings
                ) {
                  var e = g.GlobalSettings.AmbientColor.value,
                    t = e[0],
                    i = e[1],
                    n = e[2];
                  if (0 !== t || 0 !== i || 0 !== n) {
                    var r = new THREE.Color(t, i, n);
                    E.add(new THREE.AmbientLight(r, 1));
                  }
                }
              },
              setupMorphMaterials: function() {
                E.traverse(function(e) {
                  if (
                    e.isMesh &&
                    (e.geometry.morphAttributes.position ||
                      e.geometry.morphAttributes.normal)
                  ) {
                    var t = e.uuid,
                      i = e.material.uuid,
                      n = !1;
                    E.traverse(function(e) {
                      e.isMesh &&
                        e.material.uuid === i &&
                        e.uuid !== t &&
                        (n = !0);
                    }),
                      !0 === n && (e.material = e.material.clone()),
                      (e.material.morphTargets = !0);
                  }
                });
              }
            }),
            (i.prototype = {
              constructor: i,
              parse: function(e) {
                var t = new Map();
                if ("Geometry" in g.Objects) {
                  var i = g.Objects.Geometry;
                  for (var n in i) {
                    var r = y.get(parseInt(n)),
                      o = this.parseGeometry(r, i[n], e);
                    t.set(parseInt(n), o);
                  }
                }
                return t;
              },
              parseGeometry: function(e, t, i) {
                switch (t.attrType) {
                  case "Mesh":
                    return this.parseMeshGeometry(e, t, i);
                  case "NurbsCurve":
                    return this.parseNurbsGeometry(t);
                }
              },
              parseMeshGeometry: function(e, t, i) {
                var n = i.skeletons,
                  r = i.morphTargets,
                  o = e.parents.map(function(e) {
                    return g.Objects.Model[e.ID];
                  });
                if (0 !== o.length) {
                  var s = e.children.reduce(function(e, t) {
                      return void 0 !== n[t.ID] && (e = n[t.ID]), e;
                    }, null),
                    a = e.children.reduce(function(e, t) {
                      return void 0 !== r[t.ID] && (e = r[t.ID]), e;
                    }, null),
                    c = o[0],
                    l = {};
                  "RotationOrder" in c &&
                    (l.eulerOrder = c.RotationOrder.value),
                    "GeometricTranslation" in c &&
                      (l.translation = c.GeometricTranslation.value),
                    "GeometricRotation" in c &&
                      (l.rotation = c.GeometricRotation.value),
                    "GeometricScaling" in c &&
                      (l.scale = c.GeometricScaling.value);
                  var h = d(l);
                  return this.genGeometry(t, s, a, h);
                }
              },
              genGeometry: function(e, t, i, n) {
                var r = new THREE.BufferGeometry();
                e.attrName && (r.name = e.attrName);
                var o = this.parseGeoNode(e, t),
                  s = this.genBuffers(o),
                  a = new THREE.Float32BufferAttribute(s.vertex, 3);
                if (
                  (n.applyToBufferAttribute(a),
                  r.addAttribute("position", a),
                  s.colors.length > 0 &&
                    r.addAttribute(
                      "color",
                      new THREE.Float32BufferAttribute(s.colors, 3)
                    ),
                  t &&
                    (r.addAttribute(
                      "skinIndex",
                      new THREE.Uint16BufferAttribute(s.weightsIndices, 4)
                    ),
                    r.addAttribute(
                      "skinWeight",
                      new THREE.Float32BufferAttribute(s.vertexWeights, 4)
                    ),
                    (r.FBX_Deformer = t)),
                  s.normal.length > 0)
                ) {
                  var c = new THREE.Float32BufferAttribute(s.normal, 3);
                  new THREE.Matrix3()
                    .getNormalMatrix(n)
                    .applyToBufferAttribute(c),
                    r.addAttribute("normal", c);
                }
                if (
                  (s.uvs.forEach(function(e, t) {
                    var i = "uv" + (t + 1).toString();
                    0 === t && (i = "uv"),
                      r.addAttribute(
                        i,
                        new THREE.Float32BufferAttribute(s.uvs[t], 2)
                      );
                  }),
                  o.material && "AllSame" !== o.material.mappingType)
                ) {
                  var l = s.materialIndex[0],
                    h = 0;
                  if (
                    (s.materialIndex.forEach(function(e, t) {
                      e !== l && (r.addGroup(h, t - h, l), (l = e), (h = t));
                    }),
                    r.groups.length > 0)
                  ) {
                    var u = r.groups[r.groups.length - 1],
                      d = u.start + u.count;
                    d !== s.materialIndex.length &&
                      r.addGroup(d, s.materialIndex.length - d, l);
                  }
                  0 === r.groups.length &&
                    r.addGroup(0, s.materialIndex.length, s.materialIndex[0]);
                }
                return this.addMorphTargets(r, e, i, n), r;
              },
              parseGeoNode: function(e, t) {
                var i = {};
                if (
                  ((i.vertexPositions =
                    void 0 !== e.Vertices ? e.Vertices.a : []),
                  (i.vertexIndices =
                    void 0 !== e.PolygonVertexIndex
                      ? e.PolygonVertexIndex.a
                      : []),
                  e.LayerElementColor &&
                    (i.color = this.parseVertexColors(e.LayerElementColor[0])),
                  e.LayerElementMaterial &&
                    (i.material = this.parseMaterialIndices(
                      e.LayerElementMaterial[0]
                    )),
                  e.LayerElementNormal &&
                    (i.normal = this.parseNormals(e.LayerElementNormal[0])),
                  e.LayerElementUV)
                ) {
                  i.uv = [];
                  for (var n = 0; e.LayerElementUV[n]; )
                    i.uv.push(this.parseUVs(e.LayerElementUV[n])), n++;
                }
                return (
                  (i.weightTable = {}),
                  null !== t &&
                    ((i.skeleton = t),
                    t.rawBones.forEach(function(e, t) {
                      e.indices.forEach(function(n, r) {
                        void 0 === i.weightTable[n] && (i.weightTable[n] = []),
                          i.weightTable[n].push({
                            id: t,
                            weight: e.weights[r]
                          });
                      });
                    })),
                  i
                );
              },
              genBuffers: function(e) {
                var t = {
                    vertex: [],
                    normal: [],
                    colors: [],
                    uvs: [],
                    materialIndex: [],
                    vertexWeights: [],
                    weightsIndices: []
                  },
                  i = 0,
                  n = 0,
                  r = !1,
                  o = [],
                  s = [],
                  a = [],
                  c = [],
                  l = [],
                  h = [],
                  d = this;
                return (
                  e.vertexIndices.forEach(function(p, f) {
                    var m = !1;
                    p < 0 && ((p ^= -1), (m = !0));
                    var v = [],
                      g = [];
                    if ((o.push(3 * p, 3 * p + 1, 3 * p + 2), e.color)) {
                      T = u(f, i, p, e.color);
                      a.push(T[0], T[1], T[2]);
                    }
                    if (e.skeleton) {
                      if (
                        (void 0 !== e.weightTable[p] &&
                          e.weightTable[p].forEach(function(e) {
                            g.push(e.weight), v.push(e.id);
                          }),
                        g.length > 4)
                      ) {
                        r ||
                          (console.warn(
                            "THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."
                          ),
                          (r = !0));
                        var y = [0, 0, 0, 0],
                          E = [0, 0, 0, 0];
                        g.forEach(function(e, t) {
                          var i = e,
                            n = v[t];
                          E.forEach(function(e, t, r) {
                            if (i > e) {
                              (r[t] = i), (i = e);
                              var o = y[t];
                              (y[t] = n), (n = o);
                            }
                          });
                        }),
                          (v = y),
                          (g = E);
                      }
                      for (; g.length < 4; ) g.push(0), v.push(0);
                      for (var b = 0; b < 4; ++b) l.push(g[b]), h.push(v[b]);
                    }
                    if (e.normal) {
                      var T = u(f, i, p, e.normal);
                      s.push(T[0], T[1], T[2]);
                    }
                    if (e.material && "AllSame" !== e.material.mappingType)
                      var w = u(f, i, p, e.material)[0];
                    e.uv &&
                      e.uv.forEach(function(e, t) {
                        var n = u(f, i, p, e);
                        void 0 === c[t] && (c[t] = []),
                          c[t].push(n[0]),
                          c[t].push(n[1]);
                      }),
                      n++,
                      m &&
                        (d.genFace(t, e, o, w, s, a, c, l, h, n),
                        i++,
                        (n = 0),
                        (o = []),
                        (s = []),
                        (a = []),
                        (c = []),
                        (l = []),
                        (h = []));
                  }),
                  t
                );
              },
              genFace: function(e, t, i, n, r, o, s, a, c, l) {
                for (var h = 2; h < l; h++)
                  e.vertex.push(t.vertexPositions[i[0]]),
                    e.vertex.push(t.vertexPositions[i[1]]),
                    e.vertex.push(t.vertexPositions[i[2]]),
                    e.vertex.push(t.vertexPositions[i[3 * (h - 1)]]),
                    e.vertex.push(t.vertexPositions[i[3 * (h - 1) + 1]]),
                    e.vertex.push(t.vertexPositions[i[3 * (h - 1) + 2]]),
                    e.vertex.push(t.vertexPositions[i[3 * h]]),
                    e.vertex.push(t.vertexPositions[i[3 * h + 1]]),
                    e.vertex.push(t.vertexPositions[i[3 * h + 2]]),
                    t.skeleton &&
                      (e.vertexWeights.push(a[0]),
                      e.vertexWeights.push(a[1]),
                      e.vertexWeights.push(a[2]),
                      e.vertexWeights.push(a[3]),
                      e.vertexWeights.push(a[4 * (h - 1)]),
                      e.vertexWeights.push(a[4 * (h - 1) + 1]),
                      e.vertexWeights.push(a[4 * (h - 1) + 2]),
                      e.vertexWeights.push(a[4 * (h - 1) + 3]),
                      e.vertexWeights.push(a[4 * h]),
                      e.vertexWeights.push(a[4 * h + 1]),
                      e.vertexWeights.push(a[4 * h + 2]),
                      e.vertexWeights.push(a[4 * h + 3]),
                      e.weightsIndices.push(c[0]),
                      e.weightsIndices.push(c[1]),
                      e.weightsIndices.push(c[2]),
                      e.weightsIndices.push(c[3]),
                      e.weightsIndices.push(c[4 * (h - 1)]),
                      e.weightsIndices.push(c[4 * (h - 1) + 1]),
                      e.weightsIndices.push(c[4 * (h - 1) + 2]),
                      e.weightsIndices.push(c[4 * (h - 1) + 3]),
                      e.weightsIndices.push(c[4 * h]),
                      e.weightsIndices.push(c[4 * h + 1]),
                      e.weightsIndices.push(c[4 * h + 2]),
                      e.weightsIndices.push(c[4 * h + 3])),
                    t.color &&
                      (e.colors.push(o[0]),
                      e.colors.push(o[1]),
                      e.colors.push(o[2]),
                      e.colors.push(o[3 * (h - 1)]),
                      e.colors.push(o[3 * (h - 1) + 1]),
                      e.colors.push(o[3 * (h - 1) + 2]),
                      e.colors.push(o[3 * h]),
                      e.colors.push(o[3 * h + 1]),
                      e.colors.push(o[3 * h + 2])),
                    t.material &&
                      "AllSame" !== t.material.mappingType &&
                      (e.materialIndex.push(n),
                      e.materialIndex.push(n),
                      e.materialIndex.push(n)),
                    t.normal &&
                      (e.normal.push(r[0]),
                      e.normal.push(r[1]),
                      e.normal.push(r[2]),
                      e.normal.push(r[3 * (h - 1)]),
                      e.normal.push(r[3 * (h - 1) + 1]),
                      e.normal.push(r[3 * (h - 1) + 2]),
                      e.normal.push(r[3 * h]),
                      e.normal.push(r[3 * h + 1]),
                      e.normal.push(r[3 * h + 2])),
                    t.uv &&
                      t.uv.forEach(function(t, i) {
                        void 0 === e.uvs[i] && (e.uvs[i] = []),
                          e.uvs[i].push(s[i][0]),
                          e.uvs[i].push(s[i][1]),
                          e.uvs[i].push(s[i][2 * (h - 1)]),
                          e.uvs[i].push(s[i][2 * (h - 1) + 1]),
                          e.uvs[i].push(s[i][2 * h]),
                          e.uvs[i].push(s[i][2 * h + 1]);
                      });
              },
              addMorphTargets: function(e, t, i, n) {
                if (null !== i) {
                  (e.morphAttributes.position = []),
                    (e.morphAttributes.normal = []);
                  var r = this;
                  i.rawTargets.forEach(function(i) {
                    var o = g.Objects.Geometry[i.geoID];
                    void 0 !== o && r.genMorphGeometry(e, t, o, n);
                  });
                }
              },
              genMorphGeometry: function(e, t, i, n) {
                var r = new THREE.BufferGeometry();
                i.attrName && (r.name = i.attrName);
                for (
                  var o =
                      void 0 !== t.PolygonVertexIndex
                        ? t.PolygonVertexIndex.a
                        : [],
                    s = void 0 !== t.Vertices ? t.Vertices.a.slice() : [],
                    a = void 0 !== i.Vertices ? i.Vertices.a : [],
                    c = void 0 !== i.Indexes ? i.Indexes.a : [],
                    l = 0;
                  l < c.length;
                  l++
                ) {
                  var h = 3 * c[l];
                  (s[h] += a[3 * l]),
                    (s[h + 1] += a[3 * l + 1]),
                    (s[h + 2] += a[3 * l + 2]);
                }
                var u = { vertexIndices: o, vertexPositions: s },
                  d = this.genBuffers(u),
                  p = new THREE.Float32BufferAttribute(d.vertex, 3);
                (p.name = i.attrName),
                  n.applyToBufferAttribute(p),
                  e.morphAttributes.position.push(p);
              },
              parseNormals: function(e) {
                var t = e.MappingInformationType,
                  i = e.ReferenceInformationType,
                  n = e.Normals.a,
                  r = [];
                return (
                  "IndexToDirect" === i &&
                    ("NormalIndex" in e
                      ? (r = e.NormalIndex.a)
                      : "NormalsIndex" in e && (r = e.NormalsIndex.a)),
                  {
                    dataSize: 3,
                    buffer: n,
                    indices: r,
                    mappingType: t,
                    referenceType: i
                  }
                );
              },
              parseUVs: function(e) {
                var t = e.MappingInformationType,
                  i = e.ReferenceInformationType,
                  n = e.UV.a,
                  r = [];
                return (
                  "IndexToDirect" === i && (r = e.UVIndex.a),
                  {
                    dataSize: 2,
                    buffer: n,
                    indices: r,
                    mappingType: t,
                    referenceType: i
                  }
                );
              },
              parseVertexColors: function(e) {
                var t = e.MappingInformationType,
                  i = e.ReferenceInformationType,
                  n = e.Colors.a,
                  r = [];
                return (
                  "IndexToDirect" === i && (r = e.ColorIndex.a),
                  {
                    dataSize: 4,
                    buffer: n,
                    indices: r,
                    mappingType: t,
                    referenceType: i
                  }
                );
              },
              parseMaterialIndices: function(e) {
                var t = e.MappingInformationType,
                  i = e.ReferenceInformationType;
                if ("NoMappingInformation" === t)
                  return {
                    dataSize: 1,
                    buffer: [0],
                    indices: [0],
                    mappingType: "AllSame",
                    referenceType: i
                  };
                for (var n = e.Materials.a, r = [], o = 0; o < n.length; ++o)
                  r.push(o);
                return {
                  dataSize: 1,
                  buffer: n,
                  indices: r,
                  mappingType: t,
                  referenceType: i
                };
              },
              parseNurbsGeometry: function(e) {
                if (void 0 === THREE.NURBSCurve)
                  return (
                    console.error(
                      "THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."
                    ),
                    new THREE.BufferGeometry()
                  );
                var t = parseInt(e.Order);
                if (isNaN(t))
                  return (
                    console.error(
                      "THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",
                      e.Order,
                      e.id
                    ),
                    new THREE.BufferGeometry()
                  );
                for (
                  var i = t - 1,
                    n = e.KnotVector.a,
                    r = [],
                    o = e.Points.a,
                    s = 0,
                    a = o.length;
                  s < a;
                  s += 4
                )
                  r.push(new THREE.Vector4().fromArray(o, s));
                var c, l;
                if ("Closed" === e.Form) r.push(r[0]);
                else if ("Periodic" === e.Form) {
                  (c = i), (l = n.length - 1 - c);
                  for (s = 0; s < i; ++s) r.push(r[s]);
                }
                var h = new THREE.NURBSCurve(i, n, r, c, l).getPoints(
                    7 * r.length
                  ),
                  u = new Float32Array(3 * h.length);
                h.forEach(function(e, t) {
                  e.toArray(u, 3 * t);
                });
                var d = new THREE.BufferGeometry();
                return (
                  d.addAttribute("position", new THREE.BufferAttribute(u, 3)), d
                );
              }
            }),
            (n.prototype = {
              constructor: n,
              parse: function() {
                var e = [],
                  t = this.parseClips();
                if (void 0 === t) return e;
                for (var i in t) {
                  var n = t[i],
                    r = this.addClip(n);
                  e.push(r);
                }
                return e;
              },
              parseClips: function() {
                if (void 0 !== g.Objects.AnimationCurve) {
                  var e = this.parseAnimationCurveNodes();
                  this.parseAnimationCurves(e);
                  var t = this.parseAnimationLayers(e);
                  return this.parseAnimStacks(t);
                }
              },
              parseAnimationCurveNodes: function() {
                var e = g.Objects.AnimationCurveNode,
                  t = new Map();
                for (var i in e) {
                  var n = e[i];
                  if (null !== n.attrName.match(/S|R|T|DeformPercent/)) {
                    var r = { id: n.id, attr: n.attrName, curves: {} };
                    t.set(r.id, r);
                  }
                }
                return t;
              },
              parseAnimationCurves: function(e) {
                var t = g.Objects.AnimationCurve;
                for (var i in t) {
                  var n = {
                      id: t[i].id,
                      times: t[i].KeyTime.a.map(h),
                      values: t[i].KeyValueFloat.a
                    },
                    r = y.get(n.id);
                  if (void 0 !== r) {
                    var o = r.parents[0].ID,
                      s = r.parents[0].relationship;
                    s.match(/X/)
                      ? (e.get(o).curves.x = n)
                      : s.match(/Y/)
                      ? (e.get(o).curves.y = n)
                      : s.match(/Z/)
                      ? (e.get(o).curves.z = n)
                      : s.match(/d|DeformPercent/) &&
                        e.has(o) &&
                        (e.get(o).curves.morph = n);
                  }
                }
              },
              parseAnimationLayers: function(e) {
                var t = g.Objects.AnimationLayer,
                  i = new Map();
                for (var n in t) {
                  var r = [],
                    o = y.get(parseInt(n));
                  if (void 0 !== o) {
                    var s = this;
                    o.children.forEach(function(t, i) {
                      if (e.has(t.ID)) {
                        var n = e.get(t.ID);
                        if (
                          void 0 !== n.curves.x ||
                          void 0 !== n.curves.y ||
                          void 0 !== n.curves.z
                        ) {
                          if (void 0 === r[i]) {
                            y.get(t.ID).parents.forEach(function(e) {
                              void 0 !== e.relationship && (u = e.ID);
                            });
                            var o = g.Objects.Model[u.toString()],
                              a = {
                                modelName: THREE.PropertyBinding.sanitizeNodeName(
                                  o.attrName
                                ),
                                initialPosition: [0, 0, 0],
                                initialRotation: [0, 0, 0],
                                initialScale: [1, 1, 1],
                                transform: s.getModelAnimTransform(o)
                              };
                            "PreRotation" in o &&
                              (a.preRotations = o.PreRotation.value),
                              "PostRotation" in o &&
                                (a.postRotations = o.PostRotation.value),
                              (r[i] = a);
                          }
                          r[i][n.attr] = n;
                        } else if (void 0 !== n.curves.morph) {
                          if (void 0 === r[i]) {
                            var c;
                            y.get(t.ID).parents.forEach(function(e) {
                              void 0 !== e.relationship && (c = e.ID);
                            });
                            var l = y.get(c).parents[0].ID,
                              h = y.get(l).parents[0].ID,
                              u = y.get(h).parents[0].ID,
                              o = g.Objects.Model[u],
                              a = {
                                modelName: THREE.PropertyBinding.sanitizeNodeName(
                                  o.attrName
                                ),
                                morphName: g.Objects.Deformer[c].attrName
                              };
                            r[i] = a;
                          }
                          r[i][n.attr] = n;
                        }
                      }
                    }),
                      i.set(parseInt(n), r);
                  }
                }
                return i;
              },
              getModelAnimTransform: function(e) {
                var t = {};
                return (
                  "RotationOrder" in e &&
                    (t.eulerOrder = parseInt(e.RotationOrder.value)),
                  "Lcl_Translation" in e &&
                    (t.translation = e.Lcl_Translation.value),
                  "RotationOffset" in e &&
                    (t.rotationOffset = e.RotationOffset.value),
                  "Lcl_Rotation" in e && (t.rotation = e.Lcl_Rotation.value),
                  "PreRotation" in e && (t.preRotation = e.PreRotation.value),
                  "PostRotation" in e &&
                    (t.postRotation = e.PostRotation.value),
                  "Lcl_Scaling" in e && (t.scale = e.Lcl_Scaling.value),
                  d(t)
                );
              },
              parseAnimStacks: function(e) {
                var t = g.Objects.AnimationStack,
                  i = {};
                for (var n in t) {
                  var r = y.get(parseInt(n)).children;
                  r.length > 1 &&
                    console.warn(
                      "THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."
                    );
                  var o = e.get(r[0].ID);
                  i[n] = { name: t[n].attrName, layer: o };
                }
                return i;
              },
              addClip: function(e) {
                var t = [],
                  i = this;
                return (
                  e.layer.forEach(function(e) {
                    t = t.concat(i.generateTracks(e));
                  }),
                  new THREE.AnimationClip(e.name, -1, t)
                );
              },
              generateTracks: function(e) {
                var t = [],
                  i = new THREE.Vector3(),
                  n = new THREE.Quaternion(),
                  r = new THREE.Vector3();
                if (
                  (e.transform && e.transform.decompose(i, n, r),
                  (i = i.toArray()),
                  (n = new THREE.Euler().setFromQuaternion(n).toArray()),
                  (r = r.toArray()),
                  void 0 !== e.T && Object.keys(e.T.curves).length > 0)
                ) {
                  var o = this.generateVectorTrack(
                    e.modelName,
                    e.T.curves,
                    i,
                    "position"
                  );
                  void 0 !== o && t.push(o);
                }
                if (void 0 !== e.R && Object.keys(e.R.curves).length > 0) {
                  var s = this.generateRotationTrack(
                    e.modelName,
                    e.R.curves,
                    n,
                    e.preRotations,
                    e.postRotations
                  );
                  void 0 !== s && t.push(s);
                }
                if (void 0 !== e.S && Object.keys(e.S.curves).length > 0) {
                  var a = this.generateVectorTrack(
                    e.modelName,
                    e.S.curves,
                    r,
                    "scale"
                  );
                  void 0 !== a && t.push(a);
                }
                if (void 0 !== e.DeformPercent) {
                  var c = this.generateMorphTrack(e);
                  void 0 !== c && t.push(c);
                }
                return t;
              },
              generateVectorTrack: function(e, t, i, n) {
                var r = this.getTimesForAllAxes(t),
                  o = this.getKeyframeTrackValues(r, t, i);
                return new THREE.VectorKeyframeTrack(e + "." + n, r, o);
              },
              generateRotationTrack: function(e, t, i, n, r) {
                void 0 !== t.x &&
                  (this.interpolateRotations(t.x),
                  (t.x.values = t.x.values.map(THREE.Math.degToRad))),
                  void 0 !== t.y &&
                    (this.interpolateRotations(t.y),
                    (t.y.values = t.y.values.map(THREE.Math.degToRad))),
                  void 0 !== t.z &&
                    (this.interpolateRotations(t.z),
                    (t.z.values = t.z.values.map(THREE.Math.degToRad)));
                var o = this.getTimesForAllAxes(t),
                  s = this.getKeyframeTrackValues(o, t, i);
                void 0 !== n &&
                  ((n = n.map(THREE.Math.degToRad)).push("ZYX"),
                  (n = new THREE.Euler().fromArray(n)),
                  (n = new THREE.Quaternion().setFromEuler(n))),
                  void 0 !== r &&
                    ((r = r.map(THREE.Math.degToRad)).push("ZYX"),
                    (r = new THREE.Euler().fromArray(r)),
                    (r = new THREE.Quaternion().setFromEuler(r).inverse()));
                for (
                  var a = new THREE.Quaternion(),
                    c = new THREE.Euler(),
                    l = [],
                    h = 0;
                  h < s.length;
                  h += 3
                )
                  c.set(s[h], s[h + 1], s[h + 2], "ZYX"),
                    a.setFromEuler(c),
                    void 0 !== n && a.premultiply(n),
                    void 0 !== r && a.multiply(r),
                    a.toArray(l, (h / 3) * 4);
                return new THREE.QuaternionKeyframeTrack(
                  e + ".quaternion",
                  o,
                  l
                );
              },
              generateMorphTrack: function(e) {
                var t = e.DeformPercent.curves.morph,
                  i = t.values.map(function(e) {
                    return e / 100;
                  }),
                  n = E.getObjectByName(e.modelName).morphTargetDictionary[
                    e.morphName
                  ];
                return new THREE.NumberKeyframeTrack(
                  e.modelName + ".morphTargetInfluences[" + n + "]",
                  t.times,
                  i
                );
              },
              getTimesForAllAxes: function(e) {
                var t = [];
                return (
                  void 0 !== e.x && (t = t.concat(e.x.times)),
                  void 0 !== e.y && (t = t.concat(e.y.times)),
                  void 0 !== e.z && (t = t.concat(e.z.times)),
                  (t = t
                    .sort(function(e, t) {
                      return e - t;
                    })
                    .filter(function(e, t, i) {
                      return i.indexOf(e) == t;
                    }))
                );
              },
              getKeyframeTrackValues: function(e, t, i) {
                var n = i,
                  r = [],
                  o = -1,
                  s = -1,
                  a = -1;
                return (
                  e.forEach(function(e) {
                    if (
                      (t.x && (o = t.x.times.indexOf(e)),
                      t.y && (s = t.y.times.indexOf(e)),
                      t.z && (a = t.z.times.indexOf(e)),
                      -1 !== o)
                    ) {
                      var i = t.x.values[o];
                      r.push(i), (n[0] = i);
                    } else r.push(n[0]);
                    if (-1 !== s) {
                      var c = t.y.values[s];
                      r.push(c), (n[1] = c);
                    } else r.push(n[1]);
                    if (-1 !== a) {
                      var l = t.z.values[a];
                      r.push(l), (n[2] = l);
                    } else r.push(n[2]);
                  }),
                  r
                );
              },
              interpolateRotations: function(e) {
                for (var t = 1; t < e.values.length; t++) {
                  var i = e.values[t - 1],
                    n = e.values[t] - i,
                    r = Math.abs(n);
                  if (r >= 180) {
                    for (
                      var o = r / 180,
                        s = n / o,
                        a = i + s,
                        c = e.times[t - 1],
                        l = (e.times[t] - c) / o,
                        h = c + l,
                        u = [],
                        d = [];
                      h < e.times[t];

                    )
                      u.push(h), (h += l), d.push(a), (a += s);
                    (e.times = v(e.times, t, u)),
                      (e.values = v(e.values, t, d));
                  }
                }
              }
            }),
            (o.prototype = {
              constructor: o,
              getPrevNode: function() {
                return this.nodeStack[this.currentIndent - 2];
              },
              getCurrentNode: function() {
                return this.nodeStack[this.currentIndent - 1];
              },
              getCurrentProp: function() {
                return this.currentProp;
              },
              pushStack: function(e) {
                this.nodeStack.push(e), (this.currentIndent += 1);
              },
              popStack: function() {
                this.nodeStack.pop(), (this.currentIndent -= 1);
              },
              setCurrentProp: function(e, t) {
                (this.currentProp = e), (this.currentPropName = t);
              },
              parse: function(e) {
                (this.currentIndent = 0),
                  console.log("FBXTree: ", c),
                  (this.allNodes = new c()),
                  (this.nodeStack = []),
                  (this.currentProp = []),
                  (this.currentPropName = "");
                var t = this,
                  i = e.split(/[\r\n]+/);
                return (
                  i.forEach(function(e, n) {
                    var r = e.match(/^[\s\t]*;/),
                      o = e.match(/^[\s\t]*$/);
                    if (!r && !o) {
                      var s = e.match(
                          "^\\t{" + t.currentIndent + "}(\\w+):(.*){",
                          ""
                        ),
                        a = e.match(
                          "^\\t{" +
                            t.currentIndent +
                            "}(\\w+):[\\s\\t\\r\\n](.*)"
                        ),
                        c = e.match("^\\t{" + (t.currentIndent - 1) + "}}");
                      s
                        ? t.parseNodeBegin(e, s)
                        : a
                        ? t.parseNodeProperty(e, a, i[++n])
                        : c
                        ? t.popStack()
                        : e.match(/^[^\s\t}]/) &&
                          t.parseNodePropertyContinued(e);
                    }
                  }),
                  this.allNodes
                );
              },
              parseNodeBegin: function(e, t) {
                var i = t[1]
                    .trim()
                    .replace(/^"/, "")
                    .replace(/"$/, ""),
                  n = t[2].split(",").map(function(e) {
                    return e
                      .trim()
                      .replace(/^"/, "")
                      .replace(/"$/, "");
                  }),
                  r = { name: i },
                  o = this.parseNodeAttr(n),
                  s = this.getCurrentNode();
                0 === this.currentIndent
                  ? this.allNodes.add(i, r)
                  : i in s
                  ? ("PoseNode" === i
                      ? s.PoseNode.push(r)
                      : void 0 !== s[i].id &&
                        ((s[i] = {}), (s[i][s[i].id] = s[i])),
                    "" !== o.id && (s[i][o.id] = r))
                  : "number" == typeof o.id
                  ? ((s[i] = {}), (s[i][o.id] = r))
                  : "Properties70" !== i && (s[i] = "PoseNode" === i ? [r] : r),
                  "number" == typeof o.id && (r.id = o.id),
                  "" !== o.name && (r.attrName = o.name),
                  "" !== o.type && (r.attrType = o.type),
                  this.pushStack(r);
              },
              parseNodeAttr: function(e) {
                var t = e[0];
                "" !== e[0] && ((t = parseInt(e[0])), isNaN(t) && (t = e[0]));
                var i = "",
                  n = "";
                return (
                  e.length > 1 &&
                    ((i = e[1].replace(/^(\w+)::/, "")), (n = e[2])),
                  { id: t, name: i, type: n }
                );
              },
              parseNodeProperty: function(e, t, i) {
                var n = t[1]
                    .replace(/^"/, "")
                    .replace(/"$/, "")
                    .trim(),
                  r = t[2]
                    .replace(/^"/, "")
                    .replace(/"$/, "")
                    .trim();
                "Content" === n &&
                  "," === r &&
                  (r = i
                    .replace(/"/g, "")
                    .replace(/,$/, "")
                    .trim());
                var o = this.getCurrentNode();
                if ("Properties70" !== o.name) {
                  if ("C" === n) {
                    var s = r.split(",").slice(1),
                      a = parseInt(s[0]),
                      c = parseInt(s[1]),
                      l = r.split(",").slice(3);
                    (n = "connections"),
                      (function(e, t) {
                        for (
                          var i = 0, n = e.length, r = t.length;
                          i < r;
                          i++, n++
                        )
                          e[n] = t[i];
                      })(
                        (r = [a, c]),
                        (l = l.map(function(e) {
                          return e.trim().replace(/^"/, "");
                        }))
                      ),
                      void 0 === o[n] && (o[n] = []);
                  }
                  "Node" === n && (o.id = r),
                    n in o && Array.isArray(o[n])
                      ? o[n].push(r)
                      : "a" !== n
                      ? (o[n] = r)
                      : (o.a = r),
                    this.setCurrentProp(o, n),
                    "a" === n && "," !== r.slice(-1) && (o.a = f(r));
                } else this.parseNodeSpecialProperty(e, n, r);
              },
              parseNodePropertyContinued: function(e) {
                var t = this.getCurrentNode();
                (t.a += e), "," !== e.slice(-1) && (t.a = f(t.a));
              },
              parseNodeSpecialProperty: function(e, t, i) {
                var n = i.split('",').map(function(e) {
                    return e
                      .trim()
                      .replace(/^\"/, "")
                      .replace(/\s/, "_");
                  }),
                  r = n[0],
                  o = n[1],
                  s = n[2],
                  a = n[3],
                  c = n[4];
                switch (o) {
                  case "int":
                  case "enum":
                  case "bool":
                  case "ULongLong":
                  case "double":
                  case "Number":
                  case "FieldOfView":
                    c = parseFloat(c);
                    break;
                  case "Color":
                  case "ColorRGB":
                  case "Vector3D":
                  case "Lcl_Translation":
                  case "Lcl_Rotation":
                  case "Lcl_Scaling":
                    c = f(c);
                }
                (this.getPrevNode()[r] = {
                  type: o,
                  type2: s,
                  flag: a,
                  value: c
                }),
                  this.setCurrentProp(this.getPrevNode(), r);
              }
            }),
            (s.prototype = {
              constructor: s,
              parse: function(e) {
                var t = new a(e);
                t.skip(23);
                var i = t.getUint32();
                console.log("THREE.FBXLoader: FBX binary version: " + i);
                for (var n = new c(); !this.endOfContent(t); ) {
                  var r = this.parseNode(t, i);
                  null !== r && n.add(r.name, r);
                }
                return n;
              },
              endOfContent: function(e) {
                return e.size() % 16 == 0
                  ? ((e.getOffset() + 160 + 16) & -16) >= e.size()
                  : e.getOffset() + 160 + 16 >= e.size();
              },
              parseNode: function(e, t) {
                var i = {},
                  n = t >= 7500 ? e.getUint64() : e.getUint32(),
                  r = t >= 7500 ? e.getUint64() : e.getUint32(),
                  o = (t >= 7500 ? e.getUint64() : e.getUint32(), e.getUint8()),
                  s = e.getString(o);
                if (0 === n) return null;
                for (var a = [], c = 0; c < r; c++)
                  a.push(this.parseProperty(e));
                var l = a.length > 0 ? a[0] : "",
                  h = a.length > 1 ? a[1] : "",
                  u = a.length > 2 ? a[2] : "";
                for (
                  i.singleProperty = 1 === r && e.getOffset() === n;
                  n > e.getOffset();

                ) {
                  var d = this.parseNode(e, t);
                  null !== d && this.parseSubNode(s, i, d);
                }
                return (
                  (i.propertyList = a),
                  "number" == typeof l && (i.id = l),
                  "" !== h && (i.attrName = h),
                  "" !== u && (i.attrType = u),
                  "" !== s && (i.name = s),
                  i
                );
              },
              parseSubNode: function(e, t, i) {
                if (!0 === i.singleProperty) {
                  var n = i.propertyList[0];
                  Array.isArray(n)
                    ? ((t[i.name] = i), (i.a = n))
                    : (t[i.name] = n);
                } else if ("Connections" === e && "C" === i.name) {
                  var r = [];
                  i.propertyList.forEach(function(e, t) {
                    0 !== t && r.push(e);
                  }),
                    void 0 === t.connections && (t.connections = []),
                    t.connections.push(r);
                } else if ("Properties70" === i.name) {
                  Object.keys(i).forEach(function(e) {
                    t[e] = i[e];
                  });
                } else if ("Properties70" === e && "P" === i.name) {
                  var o,
                    s = i.propertyList[0],
                    a = i.propertyList[1],
                    c = i.propertyList[2],
                    l = i.propertyList[3];
                  0 === s.indexOf("Lcl ") && (s = s.replace("Lcl ", "Lcl_")),
                    0 === a.indexOf("Lcl ") && (a = a.replace("Lcl ", "Lcl_")),
                    (o =
                      "Color" === a ||
                      "ColorRGB" === a ||
                      "Vector" === a ||
                      "Vector3D" === a ||
                      0 === a.indexOf("Lcl_")
                        ? [
                            i.propertyList[4],
                            i.propertyList[5],
                            i.propertyList[6]
                          ]
                        : i.propertyList[4]),
                    (t[s] = { type: a, type2: c, flag: l, value: o });
                } else
                  void 0 === t[i.name]
                    ? "number" == typeof i.id
                      ? ((t[i.name] = {}), (t[i.name][i.id] = i))
                      : (t[i.name] = i)
                    : "PoseNode" === i.name
                    ? (Array.isArray(t[i.name]) || (t[i.name] = [t[i.name]]),
                      t[i.name].push(i))
                    : void 0 === t[i.name][i.id] && (t[i.name][i.id] = i);
              },
              parseProperty: function(e) {
                var t = e.getString(1);
                switch (t) {
                  case "C":
                    return e.getBoolean();
                  case "D":
                    return e.getFloat64();
                  case "F":
                    return e.getFloat32();
                  case "I":
                    return e.getInt32();
                  case "L":
                    return e.getInt64();
                  case "R":
                    i = e.getUint32();
                    return e.getArrayBuffer(i);
                  case "S":
                    var i = e.getUint32();
                    return e.getString(i);
                  case "Y":
                    return e.getInt16();
                  case "b":
                  case "c":
                  case "d":
                  case "f":
                  case "i":
                  case "l":
                    var n = e.getUint32(),
                      r = e.getUint32(),
                      o = e.getUint32();
                    if (0 === r)
                      switch (t) {
                        case "b":
                        case "c":
                          return e.getBooleanArray(n);
                        case "d":
                          return e.getFloat64Array(n);
                        case "f":
                          return e.getFloat32Array(n);
                        case "i":
                          return e.getInt32Array(n);
                        case "l":
                          return e.getInt64Array(n);
                      }
                    "undefined" == typeof Zlib &&
                      console.error(
                        "THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js"
                      );
                    var s = new a(
                      new Zlib.Inflate(
                        new Uint8Array(e.getArrayBuffer(o))
                      ).decompress().buffer
                    );
                    switch (t) {
                      case "b":
                      case "c":
                        return s.getBooleanArray(n);
                      case "d":
                        return s.getFloat64Array(n);
                      case "f":
                        return s.getFloat32Array(n);
                      case "i":
                        return s.getInt32Array(n);
                      case "l":
                        return s.getInt64Array(n);
                    }
                  default:
                    throw new Error(
                      "THREE.FBXLoader: Unknown property type " + t
                    );
                }
              }
            }),
            (a.prototype = {
              constructor: a,
              getOffset: function() {
                return this.offset;
              },
              size: function() {
                return this.dv.buffer.byteLength;
              },
              skip: function(e) {
                this.offset += e;
              },
              getBoolean: function() {
                return 1 == (1 & this.getUint8());
              },
              getBooleanArray: function(e) {
                for (var t = [], i = 0; i < e; i++) t.push(this.getBoolean());
                return t;
              },
              getUint8: function() {
                var e = this.dv.getUint8(this.offset);
                return (this.offset += 1), e;
              },
              getInt16: function() {
                var e = this.dv.getInt16(this.offset, this.littleEndian);
                return (this.offset += 2), e;
              },
              getInt32: function() {
                var e = this.dv.getInt32(this.offset, this.littleEndian);
                return (this.offset += 4), e;
              },
              getInt32Array: function(e) {
                for (var t = [], i = 0; i < e; i++) t.push(this.getInt32());
                return t;
              },
              getUint32: function() {
                var e = this.dv.getUint32(this.offset, this.littleEndian);
                return (this.offset += 4), e;
              },
              getInt64: function() {
                var e, t;
                return (
                  this.littleEndian
                    ? ((e = this.getUint32()), (t = this.getUint32()))
                    : ((t = this.getUint32()), (e = this.getUint32())),
                  2147483648 & t
                    ? ((t = 4294967295 & ~t),
                      4294967295 === (e = 4294967295 & ~e) &&
                        (t = (t + 1) & 4294967295),
                      (e = (e + 1) & 4294967295),
                      -(4294967296 * t + e))
                    : 4294967296 * t + e
                );
              },
              getInt64Array: function(e) {
                for (var t = [], i = 0; i < e; i++) t.push(this.getInt64());
                return t;
              },
              getUint64: function() {
                var e, t;
                return (
                  this.littleEndian
                    ? ((e = this.getUint32()), (t = this.getUint32()))
                    : ((t = this.getUint32()), (e = this.getUint32())),
                  4294967296 * t + e
                );
              },
              getFloat32: function() {
                var e = this.dv.getFloat32(this.offset, this.littleEndian);
                return (this.offset += 4), e;
              },
              getFloat32Array: function(e) {
                for (var t = [], i = 0; i < e; i++) t.push(this.getFloat32());
                return t;
              },
              getFloat64: function() {
                var e = this.dv.getFloat64(this.offset, this.littleEndian);
                return (this.offset += 8), e;
              },
              getFloat64Array: function(e) {
                for (var t = [], i = 0; i < e; i++) t.push(this.getFloat64());
                return t;
              },
              getArrayBuffer: function(e) {
                var t = this.dv.buffer.slice(this.offset, this.offset + e);
                return (this.offset += e), t;
              },
              getString: function(e) {
                for (var t = [], i = 0; i < e; i++) t[i] = this.getUint8();
                var n = t.indexOf(0);
                return (
                  n >= 0 && (t = t.slice(0, n)),
                  THREE.LoaderUtils.decodeText(new Uint8Array(t))
                );
              }
            }),
            (c.prototype = {
              constructor: c,
              add: function(e, t) {
                this[e] = t;
              }
            });
          var b = [],
            T = new THREE.Matrix4(),
            w = new THREE.Euler(),
            x = new THREE.Vector3(),
            k = new THREE.Vector3(),
            R = new THREE.Matrix4();
          return e;
        })();
      },
      {}
    ],
    5: [
      function(e, t, i) {
        "use strict";
        t.exports = Object.assign(function() {}, {
          FACE_1: 0,
          FACE_2: 1,
          FACE_3: 2,
          FACE_4: 3,
          L_SHOULDER_1: 4,
          R_SHOULDER_1: 5,
          L_SHOULDER_2: 6,
          R_SHOULDER_2: 7,
          SELECT: 8,
          START: 9,
          DPAD_UP: 12,
          DPAD_DOWN: 13,
          DPAD_LEFT: 14,
          DPAD_RIGHT: 15,
          VENDOR: 16
        });
      },
      {}
    ],
    6: [
      function(e, t, i) {
        "use strict";
        t.exports = function(e, t, i) {
          (this.type = e),
            (this.index = t),
            (this.pressed = i.pressed),
            (this.value = i.value);
        };
      },
      {}
    ],
    7: [
      function(e, t, i) {
        "use strict";
        t.exports = {
          size: 5,
          cellSize: 10,
          extrudeSettings: {
            amount: 1,
            bevelEnabled: !0,
            bevelSegments: 1,
            steps: 1,
            bevelSize: 0.5,
            bevelThickness: 0.5
          },
          autogenerated: !0,
          cells: [
            { q: -1, r: 0, s: 1, h: 1, walkable: !0, userData: {} },
            { q: 0, r: -1, s: 1, h: 1, walkable: !0, userData: {} },
            { q: 0, r: 0, s: 0, h: 1, walkable: !0, userData: {} },
            { q: 1, r: -1, s: 0, h: 1, walkable: !0, userData: {} },
            { q: -1, r: 1, s: 0, h: 0, walkable: !0, userData: {} },
            { q: 0, r: 1, s: -1, h: 0, walkable: !0, userData: {} },
            { q: 1, r: 0, s: -1, h: 0, walkable: !0, userData: {} }
          ]
        };
      },
      {}
    ],
    8: [
      function(e, t, i) {
        "use strict";
        function n(e) {
          var t = document.getElementById(e),
            i = t.parentNode;
          try {
            i && i.removeChild(t);
          } catch (e) {}
        }
        function r(e, t, i) {
          return new i(function(i, r) {
            var o = t.timeout || 5e3,
              s = "script_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()),
              a = (function(e, t) {
                var i = document.createElement("script");
                return (
                  (i.type = "text/javascript"),
                  (i.async = !0),
                  (i.id = t),
                  (i.src = e),
                  i
                );
              })(e, s),
              c = setTimeout(function() {
                r(new Error("Script request to " + e + " timed out")), n(s);
              }, o),
              l = function(e) {
                clearTimeout(e);
              };
            a.addEventListener("load", function(e) {
              i({ ok: !0 }), l(c), n(s);
            }),
              a.addEventListener("error", function(t) {
                r(new Error("Script request to " + e + " failed " + t)),
                  l(c),
                  n(s);
              }),
              (function(e) {
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t);
              })(a);
          });
        }
        t.exports = function(e) {
          return (
            (e = e || {}),
            function(t, i) {
              return (i = i || {}), r(t, i, e.Promise || Promise);
            }
          );
        };
      },
      {}
    ],
    9: [
      function(e, t, i) {
        "use strict";
        var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r =
            "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
              ? function(e) {
                  return void 0 === e ? "undefined" : n(e);
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : void 0 === e
                    ? "undefined"
                    : n(e);
                },
          o = (t.exports = {
            VERSION: "0.1.1",
            PI: Math.PI,
            TAU: 2 * Math.PI,
            DEG_TO_RAD: 0.0174532925,
            RAD_TO_DEG: 57.2957795,
            SQRT3: Math.sqrt(3),
            TILE: "tile",
            ENT: "entity",
            STR: "structure",
            HEX: "hex",
            SQR: "square",
            ABS: "abstract"
          });
        (o.Board = function(e, t) {
          if (!e)
            throw new Error(
              "You must pass in a grid system for the board to use."
            );
          (this.tiles = []),
            (this.tileGroup = null),
            (this.group = new THREE.Object3D()),
            (this.grid = null),
            (this.overlay = null),
            (this.finder = new o.AStarFinder(t)),
            o.Loader.init(),
            this.setGrid(e);
        }),
          (o.Board.prototype = {
            setEntityOnTile: function(e, t) {
              var i = this.grid.cellToPixel(t.cell);
              e.position.copy(i),
                (e.position.y += e.heightOffset || 0),
                e.tile && (e.tile.entity = null),
                (e.tile = t),
                (t.entity = e);
            },
            addTile: function(e) {
              -1 === this.tiles.indexOf(e) &&
                (this.tiles.push(e),
                this.snapTileToGrid(e),
                (e.position.y = 0),
                this.tileGroup.add(e.mesh),
                this.grid.add(e.cell),
                (e.cell.tile = e));
            },
            removeTile: function(e) {
              if (e) {
                var t = this.tiles.indexOf(e);
                this.grid.remove(e.cell),
                  -1 !== t && this.tiles.splice(t, 1),
                  e.dispose();
              }
            },
            removeAllTiles: function() {
              if (this.tileGroup)
                for (var e = this.tileGroup.children, t = 0; t < e.length; t++)
                  this.tileGroup.remove(e[t]);
            },
            getTileAtCell: function(e) {
              var t = this.grid.cellToHash(e);
              return (
                e.tile ||
                (void 0 !== this.grid.cells[t] ? this.grid.cells[t].tile : null)
              );
            },
            snapToGrid: function(e) {
              var t = this.grid.pixelToCell(e);
              e.copy(this.grid.cellToPixel(t));
            },
            snapTileToGrid: function(e) {
              if (e.cell) e.position.copy(this.grid.cellToPixel(e.cell));
              else {
                var t = this.grid.pixelToCell(e.position);
                e.position.copy(this.grid.cellToPixel(t));
              }
              return e;
            },
            getRandomTile: function() {
              var e = o.Tools.randomInt(0, this.tiles.length - 1);
              return this.tiles[e];
            },
            findPath: function(e, t, i) {
              return this.finder.findPath(e.cell, t.cell, i, this.grid);
            },
            setGrid: function(e) {
              this.group.remove(this.tileGroup),
                this.grid &&
                  e !== this.grid &&
                  (this.removeAllTiles(),
                  this.tiles.forEach(function(e) {
                    this.grid.remove(e.cell), e.dispose();
                  }),
                  this.grid.dispose()),
                (this.grid = e),
                (this.tiles = []),
                (this.tileGroup = new THREE.Object3D()),
                this.group.add(this.tileGroup);
            },
            generateOverlay: function(e) {
              var t = new THREE.LineBasicMaterial({ color: 0, opacity: 0.3 });
              this.overlay && this.group.remove(this.overlay),
                (this.overlay = new THREE.Object3D()),
                this.grid.generateOverlay(e, this.overlay, t),
                this.group.add(this.overlay);
            },
            generateTilemap: function(e) {
              this.reset();
              var t = this.grid.generateTiles(e);
              (this.tiles = t), (this.tileGroup = new THREE.Object3D());
              for (var i = 0; i < t.length; i++) this.tileGroup.add(t[i].mesh);
              this.group.add(this.tileGroup);
            },
            reset: function() {
              this.removeAllTiles(),
                this.tileGroup && this.group.remove(this.tileGroup);
            }
          }),
          (o.Board.prototype.constructor = o.Board),
          (o.Cell = function(e, t, i, n) {
            (this.q = e || 0),
              (this.r = t || 0),
              (this.s = i || 0),
              (this.h = n || 1),
              (this.tile = null),
              (this.userData = {}),
              (this.walkable = !0),
              (this._calcCost = 0),
              (this._priority = 0),
              (this._visited = !1),
              (this._parent = null),
              (this.uniqueID = o.LinkedList.generateID());
          }),
          (o.Cell.prototype = {
            set: function(e, t, i) {
              return (this.q = e), (this.r = t), (this.s = i), this;
            },
            copy: function(e) {
              return (
                (this.q = e.q),
                (this.r = e.r),
                (this.s = e.s),
                (this.h = e.h),
                (this.tile = e.tile || null),
                (this.userData = e.userData || {}),
                (this.walkable = e.walkable),
                this
              );
            },
            add: function(e) {
              return (this.q += e.q), (this.r += e.r), (this.s += e.s), this;
            },
            equals: function(e) {
              return this.q === e.q && this.r === e.r && this.s === e.s;
            }
          }),
          (o.Cell.prototype.constructor = o.Cell),
          (o.HexGrid = function(e) {
            (e = e || {}),
              (this.type = o.HEX),
              (this.size = 5),
              (this.cellSize = void 0 === e.cellSize ? 10 : e.cellSize),
              (this.cells = {}),
              (this.numCells = 0),
              (this.extrudeSettings = null),
              (this.autogenerated = !1);
            var t,
              i = [];
            for (t = 0; 6 > t; t++) i.push(this._createVertex(t));
            for (
              this.cellShape = new THREE.Shape(),
                this.cellShape.moveTo(i[0].x, i[0].y),
                t = 1;
              6 > t;
              t++
            )
              this.cellShape.lineTo(i[t].x, i[t].y);
            this.cellShape.lineTo(i[0].x, i[0].y),
              (this.cellShape.autoClose = !0),
              (this.cellGeo = new THREE.Geometry()),
              (this.cellGeo.vertices = i),
              (this.cellGeo.verticesNeedUpdate = !0),
              (this.cellShapeGeo = new THREE.ShapeGeometry(this.cellShape)),
              (this._cellWidth = 2 * this.cellSize),
              (this._cellLength = 0.5 * o.SQRT3 * this._cellWidth),
              (this._hashDelimeter = "."),
              (this._directions = [
                new o.Cell(1, -1, 0),
                new o.Cell(1, 0, -1),
                new o.Cell(0, 1, -1),
                new o.Cell(-1, 1, 0),
                new o.Cell(-1, 0, 1),
                new o.Cell(0, -1, 1)
              ]),
              (this._diagonals = [
                new o.Cell(2, -1, -1),
                new o.Cell(1, 1, -2),
                new o.Cell(-1, 2, -1),
                new o.Cell(-2, 1, 1),
                new o.Cell(-1, -1, 2),
                new o.Cell(1, -2, 1)
              ]),
              (this._list = []),
              (this._vec3 = new THREE.Vector3()),
              (this._cel = new o.Cell()),
              (this._conversionVec = new THREE.Vector3()),
              (this._geoCache = []),
              (this._matCache = []);
          }),
          (o.HexGrid.TWO_THIRDS = 2 / 3),
          (o.HexGrid.prototype = {
            cellToPixel: function(e) {
              return (
                (this._vec3.x = e.q * this._cellWidth * 0.75),
                (this._vec3.y = e.h),
                (this._vec3.z = -(e.s - e.r) * this._cellLength * 0.5),
                this._vec3
              );
            },
            pixelToCell: function(e) {
              var t = e.x * (o.HexGrid.TWO_THIRDS / this.cellSize),
                i = (-e.x / 3 + (o.SQRT3 / 3) * e.z) / this.cellSize;
              return this._cel.set(t, i, -t - i), this._cubeRound(this._cel);
            },
            getCellAt: function(e) {
              var t = e.x * (o.HexGrid.TWO_THIRDS / this.cellSize),
                i = (-e.x / 3 + (o.SQRT3 / 3) * e.z) / this.cellSize;
              return (
                this._cel.set(t, i, -t - i),
                this._cubeRound(this._cel),
                this.cells[this.cellToHash(this._cel)]
              );
            },
            getNeighbors: function(e, t, i) {
              var n,
                r,
                o = this._directions.length;
              for (this._list.length = 0, n = 0; o > n; n++)
                this._cel.copy(e),
                  this._cel.add(this._directions[n]),
                  !(r = this.cells[this.cellToHash(this._cel)]) ||
                    (i && !i(e, r)) ||
                    this._list.push(r);
              if (t)
                for (n = 0; o > n; n++)
                  this._cel.copy(e),
                    this._cel.add(this._diagonals[n]),
                    !(r = this.cells[this.cellToHash(this._cel)]) ||
                      (i && !i(e, r)) ||
                      this._list.push(r);
              return this._list;
            },
            getRandomCell: function() {
              var e,
                t = 0,
                i = o.Tools.randomInt(0, this.numCells);
              for (e in this.cells) {
                if (t === i) return this.cells[e];
                t++;
              }
              return this.cells[e];
            },
            cellToHash: function(e) {
              return (
                e.q + this._hashDelimeter + e.r + this._hashDelimeter + e.s
              );
            },
            distance: function(e, t) {
              var i = Math.max(
                Math.abs(e.q - t.q),
                Math.abs(e.r - t.r),
                Math.abs(e.s - t.s)
              );
              return (i += t.h - e.h);
            },
            clearPath: function() {
              var e, t;
              for (e in this.cells)
                ((t = this.cells[e])._calcCost = 0),
                  (t._priority = 0),
                  (t._parent = null),
                  (t._visited = !1);
            },
            traverse: function(e) {
              var t;
              for (t in this.cells) e(this.cells[t]);
            },
            generateTile: function(e, t, i) {
              var n = Math.abs(e.h);
              1 > n && (n = 1);
              var r = this._geoCache[n];
              r ||
                ((this.extrudeSettings.amount = n),
                (r = new THREE.ExtrudeGeometry(
                  this.cellShape,
                  this.extrudeSettings
                )),
                (this._geoCache[n] = r));
              var s = new o.Tile({
                size: this.cellSize,
                scale: t,
                cell: e,
                geometry: r,
                material: i
              });
              return (e.tile = s), s;
            },
            generateTiles: function(e) {
              e = e || {};
              var t = [],
                i = {
                  tileScale: 0.95,
                  cellSize: this.cellSize,
                  material: null,
                  extrudeSettings: {
                    amount: 1,
                    bevelEnabled: !0,
                    bevelSegments: 1,
                    steps: 1,
                    bevelSize: 0.5,
                    bevelThickness: 0.5
                  }
                };
              (i = o.Tools.merge(i, e)),
                (this.cellSize = i.cellSize),
                (this._cellWidth = 2 * this.cellSize),
                (this._cellLength = 0.5 * o.SQRT3 * this._cellWidth),
                (this.autogenerated = !0),
                (this.extrudeSettings = i.extrudeSettings);
              var n, r, s;
              for (n in this.cells)
                (s = this.cells[n]),
                  (r = this.generateTile(
                    s,
                    i.tileScale,
                    i.material
                  )).position.copy(this.cellToPixel(s)),
                  (r.position.y = 0),
                  t.push(r);
              return t;
            },
            generateTilePoly: function(e) {
              e || (e = new THREE.MeshBasicMaterial({ color: 2405631 }));
              var t = new THREE.Mesh(this.cellShapeGeo, e);
              return (
                this._vec3.set(1, 0, 0), t.rotateOnAxis(this._vec3, o.PI / 2), t
              );
            },
            generate: function(e) {
              (e = e || {}),
                (this.size = void 0 === e.size ? this.size : e.size);
              var t, i, n, r;
              for (t = -this.size; t < this.size + 1; t++)
                for (i = -this.size; i < this.size + 1; i++)
                  (n = -t - i),
                    Math.abs(t) <= this.size &&
                      Math.abs(i) <= this.size &&
                      Math.abs(n) <= this.size &&
                      ((r = new o.Cell(t, i, n)), this.add(r));
            },
            generateOverlay: function(e, t, i) {
              var n,
                r,
                s,
                a = this.cellShape.createPointsGeometry();
              for (n = -e; e + 1 > n; n++)
                for (r = -e; e + 1 > r; r++)
                  if (
                    ((s = -n - r),
                    Math.abs(n) <= e && Math.abs(r) <= e && Math.abs(s) <= e)
                  ) {
                    this._cel.set(n, r, s);
                    var c = new THREE.Line(a, i);
                    c.position.copy(this.cellToPixel(this._cel)),
                      (c.rotation.x = 90 * o.DEG_TO_RAD),
                      t.add(c);
                  }
            },
            add: function(e) {
              var t = this.cellToHash(e);
              if (!this.cells[t])
                return (this.cells[t] = e), this.numCells++, e;
            },
            remove: function(e) {
              var t = this.cellToHash(e);
              this.cells[t] && (delete this.cells[t], this.numCells--);
            },
            dispose: function() {
              (this.cells = null),
                (this.numCells = 0),
                (this.cellShape = null),
                this.cellGeo.dispose(),
                (this.cellGeo = null),
                this.cellShapeGeo.dispose(),
                (this.cellShapeGeo = null),
                (this._list = null),
                (this._vec3 = null),
                (this._conversionVec = null),
                (this._geoCache = null),
                (this._matCache = null);
            },
            load: function(e, t, i) {
              var n = this;
              o.Tools.getJSON({
                url: e,
                callback: function(e) {
                  n.fromJSON(e), t.call(i || null, e);
                },
                cache: !1,
                scope: n
              });
            },
            fromJSON: function(e) {
              var t,
                i,
                n = e.cells;
              for (
                this.cells = {},
                  this.numCells = 0,
                  this.size = e.size,
                  this.cellSize = e.cellSize,
                  this._cellWidth = 2 * this.cellSize,
                  this._cellLength = 0.5 * o.SQRT3 * this._cellWidth,
                  this.extrudeSettings = e.extrudeSettings,
                  this.autogenerated = e.autogenerated,
                  t = 0;
                t < n.length;
                t++
              )
                (i = new o.Cell()).copy(n[t]), this.add(i);
            },
            toJSON: function() {
              var e,
                t,
                i = {
                  size: this.size,
                  cellSize: this.cellSize,
                  extrudeSettings: this.extrudeSettings,
                  autogenerated: this.autogenerated
                },
                n = [];
              for (t in this.cells)
                (e = this.cells[t]),
                  n.push({
                    q: e.q,
                    r: e.r,
                    s: e.s,
                    h: e.h,
                    walkable: e.walkable,
                    userData: e.userData
                  });
              return (i.cells = n), i;
            },
            _createVertex: function(e) {
              var t = (o.TAU / 6) * e;
              return new THREE.Vector3(
                this.cellSize * Math.cos(t),
                this.cellSize * Math.sin(t),
                0
              );
            },
            _cubeRound: function(e) {
              var t = Math.round(e.q),
                i = Math.round(e.r),
                n = Math.round(e.s),
                r = Math.abs(t - e.q),
                o = Math.abs(i - e.r),
                s = Math.abs(n - e.s);
              return (
                r > o && r > s
                  ? (t = -i - n)
                  : o > s
                  ? (i = -t - n)
                  : (n = -t - i),
                this._cel.set(t, i, n)
              );
            }
          }),
          (o.HexGrid.prototype.constructor = o.HexGrid),
          (o.SqrGrid = function(e) {
            (e = e || {}),
              (this.type = o.SQR),
              (this.size = 5),
              (this.cellSize = void 0 === e.cellSize ? 10 : e.cellSize),
              (this.cells = {}),
              (this.numCells = 0),
              (this.extrudeSettings = null),
              (this.autogenerated = !1);
            var t = [];
            t.push(new THREE.Vector3()),
              t.push(new THREE.Vector3(-this.cellSize, this.cellSize)),
              t.push(new THREE.Vector3(this.cellSize, this.cellSize)),
              t.push(new THREE.Vector3(this.cellSize, -this.cellSize)),
              (this.cellShape = new THREE.Shape()),
              this.cellShape.moveTo(-this.cellSize, -this.cellSize),
              this.cellShape.lineTo(-this.cellSize, this.cellSize),
              this.cellShape.lineTo(this.cellSize, this.cellSize),
              this.cellShape.lineTo(this.cellSize, -this.cellSize),
              this.cellShape.lineTo(-this.cellSize, -this.cellSize),
              (this.cellGeo = new THREE.Geometry()),
              (this.cellGeo.vertices = t),
              (this.cellGeo.verticesNeedUpdate = !0),
              (this.cellShapeGeo = new THREE.ShapeGeometry(this.cellShape)),
              (this._fullCellSize = 2 * this.cellSize),
              (this._hashDelimeter = "."),
              (this._directions = [
                new o.Cell(1, 0, 0),
                new o.Cell(0, -1, 0),
                new o.Cell(-1, 0, 0),
                new o.Cell(0, 1, 0)
              ]),
              (this._diagonals = [
                new o.Cell(-1, -1, 0),
                new o.Cell(-1, 1, 0),
                new o.Cell(1, 1, 0),
                new o.Cell(1, -1, 0)
              ]),
              (this._list = []),
              (this._vec3 = new THREE.Vector3()),
              (this._cel = new o.Cell()),
              (this._conversionVec = new THREE.Vector3()),
              (this._geoCache = []),
              (this._matCache = []);
          }),
          (o.SqrGrid.prototype = {
            cellToPixel: function(e) {
              return (
                (this._vec3.x = e.q * this._fullCellSize),
                (this._vec3.y = e.h),
                (this._vec3.z = e.r * this._fullCellSize),
                this._vec3
              );
            },
            pixelToCell: function(e) {
              var t = Math.round(e.x / this._fullCellSize),
                i = Math.round(e.z / this._fullCellSize);
              return this._cel.set(t, i, 0);
            },
            getCellAt: function(e) {
              var t = Math.round(e.x / this._fullCellSize),
                i = Math.round(e.z / this._fullCellSize);
              return (
                this._cel.set(t, i), this.cells[this.cellToHash(this._cel)]
              );
            },
            getNeighbors: function(e, t, i) {
              var n,
                r,
                o = this._directions.length;
              for (this._list.length = 0, n = 0; o > n; n++)
                this._cel.copy(e),
                  this._cel.add(this._directions[n]),
                  !(r = this.cells[this.cellToHash(this._cel)]) ||
                    (i && !i(e, r)) ||
                    this._list.push(r);
              if (t)
                for (n = 0; o > n; n++)
                  this._cel.copy(e),
                    this._cel.add(this._diagonals[n]),
                    !(r = this.cells[this.cellToHash(this._cel)]) ||
                      (i && !i(e, r)) ||
                      this._list.push(r);
              return this._list;
            },
            getRandomCell: function() {
              var e,
                t = 0,
                i = o.Tools.randomInt(0, this.numCells);
              for (e in this.cells) {
                if (t === i) return this.cells[e];
                t++;
              }
              return this.cells[e];
            },
            cellToHash: function(e) {
              return e.q + this._hashDelimeter + e.r;
            },
            distance: function(e, t) {
              var i = Math.max(Math.abs(e.q - t.q), Math.abs(e.r - t.r));
              return (i += t.h - e.h);
            },
            clearPath: function() {
              var e, t;
              for (e in this.cells)
                ((t = this.cells[e])._calcCost = 0),
                  (t._priority = 0),
                  (t._parent = null),
                  (t._visited = !1);
            },
            traverse: function(e) {
              var t;
              for (t in this.cells) e(this.cells[t]);
            },
            generateTile: function(e, t, i) {
              var n = Math.abs(e.h);
              1 > n && (n = 1);
              var r = this._geoCache[n];
              r ||
                ((this.extrudeSettings.amount = n),
                (r = new THREE.ExtrudeGeometry(
                  this.cellShape,
                  this.extrudeSettings
                )),
                (this._geoCache[n] = r));
              var s = new o.Tile({
                size: this.cellSize,
                scale: t,
                cell: e,
                geometry: r,
                material: i
              });
              return (e.tile = s), s;
            },
            generateTiles: function(e) {
              e = e || {};
              var t = [],
                i = {
                  tileScale: 0.95,
                  cellSize: this.cellSize,
                  material: null,
                  extrudeSettings: {
                    amount: 1,
                    bevelEnabled: !0,
                    bevelSegments: 1,
                    steps: 1,
                    bevelSize: 0.5,
                    bevelThickness: 0.5
                  }
                };
              (i = o.Tools.merge(i, e)),
                (this.cellSize = i.cellSize),
                (this._fullCellSize = 2 * this.cellSize),
                (this.autogenerated = !0),
                (this.extrudeSettings = i.extrudeSettings);
              var n, r, s;
              for (n in this.cells)
                (s = this.cells[n]),
                  (r = this.generateTile(
                    s,
                    i.tileScale,
                    i.material
                  )).position.copy(this.cellToPixel(s)),
                  (r.position.y = 0),
                  t.push(r);
              return t;
            },
            generateTilePoly: function(e) {
              e || (e = new THREE.MeshBasicMaterial({ color: 2405631 }));
              var t = new THREE.Mesh(this.cellShapeGeo, e);
              return (
                this._vec3.set(1, 0, 0), t.rotateOnAxis(this._vec3, o.PI / 2), t
              );
            },
            generate: function(e) {
              (e = e || {}),
                (this.size = void 0 === e.size ? this.size : e.size);
              var t,
                i,
                n,
                r = Math.ceil(this.size / 2);
              for (t = -r; r > t; t++)
                for (i = -r; r > i; i++)
                  (n = new o.Cell(t, i + 1)), this.add(n);
            },
            generateOverlay: function(e, t, i) {
              var n,
                r,
                s = Math.ceil(e / 2);
              for (n = -s; s > n; n++)
                for (r = -s; s > r; r++) {
                  this._cel.set(n, r);
                  var a = new THREE.Line(this.cellGeo, i);
                  a.position.copy(this.cellToPixel(this._cel)),
                    (a.rotation.x = 90 * o.DEG_TO_RAD),
                    t.add(a);
                }
            },
            add: function(e) {
              var t = this.cellToHash(e);
              if (!this.cells[t])
                return (this.cells[t] = e), this.numCells++, e;
            },
            remove: function(e) {
              var t = this.cellToHash(e);
              this.cells[t] && (delete this.cells[t], this.numCells--);
            },
            dispose: function() {
              (this.cells = null),
                (this.numCells = 0),
                (this.cellShape = null),
                this.cellGeo.dispose(),
                (this.cellGeo = null),
                this.cellShapeGeo.dispose(),
                (this.cellShapeGeo = null),
                (this._list = null),
                (this._vec3 = null),
                (this._conversionVec = null),
                (this._geoCache = null),
                (this._matCache = null);
            },
            load: function(e, t, i) {
              o.Tools.getJSON({
                url: e,
                callback: function(e) {
                  this.fromJSON(e), t.call(i || null, e);
                },
                cache: !1,
                scope: this
              });
            },
            fromJSON: function(e) {
              var t,
                i,
                n = e.cells;
              for (
                this.cells = {},
                  this.numCells = 0,
                  this.size = e.size,
                  this.cellSize = e.cellSize,
                  this._fullCellSize = 2 * this.cellSize,
                  this.extrudeSettings = e.extrudeSettings,
                  this.autogenerated = e.autogenerated,
                  t = 0;
                t < n.length;
                t++
              )
                (i = new o.Cell()).copy(n[t]), this.add(i);
            },
            toJSON: function() {
              var e,
                t,
                i = {
                  size: this.size,
                  cellSize: this.cellSize,
                  extrudeSettings: this.extrudeSettings,
                  autogenerated: this.autogenerated
                },
                n = [];
              for (t in this.cells)
                (e = this.cells[t]),
                  n.push({
                    q: e.q,
                    r: e.r,
                    s: e.s,
                    h: e.h,
                    walkable: e.walkable,
                    userData: e.userData
                  });
              return (i.cells = n), i;
            }
          }),
          (o.SqrGrid.prototype.constructor = o.SqrGrid),
          (o.Tile = function(e) {
            e = e || {};
            var t = { cell: null, geometry: null, material: null };
            if (!(t = o.Tools.merge(t, e)).cell || !t.geometry)
              throw new Error("Missing vg.Tile configuration");
            (this.cell = t.cell),
              this.cell.tile &&
                this.cell.tile !== this &&
                this.cell.tile.dispose(),
              (this.cell.tile = this),
              (this.uniqueID = o.Tools.generateID()),
              (this.geometry = t.geometry),
              (this.material = t.material),
              this.material ||
                (this.material = new THREE.MeshPhongMaterial({
                  color: o.Tools.randomizeRGB("30, 30, 30", 13)
                })),
              (this.objectType = o.TILE),
              (this.entity = null),
              (this.userData = {}),
              (this.selected = !1),
              (this.highlight = "0x0084cc"),
              (this.mesh = new THREE.Mesh(this.geometry, this.material)),
              (this.mesh.userData.structure = this),
              (this.position = this.mesh.position),
              (this.rotation = this.mesh.rotation),
              (this.rotation.x = -90 * o.DEG_TO_RAD),
              this.mesh.scale.set(t.scale, t.scale, 1),
              this.material.emissive
                ? (this._emissive = this.material.emissive.getHex())
                : (this._emissive = null);
          }),
          (o.Tile.prototype = {
            select: function() {
              return (
                this.material.emissive &&
                  this.material.emissive.setHex(this.highlight),
                (this.selected = !0),
                this
              );
            },
            deselect: function() {
              return (
                null !== this._emissive &&
                  this.material.emissive &&
                  this.material.emissive.setHex(this._emissive),
                (this.selected = !1),
                this
              );
            },
            toggle: function() {
              return this.selected ? this.deselect() : this.select(), this;
            },
            dispose: function() {
              this.cell && this.cell.tile && (this.cell.tile = null),
                (this.cell = null),
                (this.position = null),
                (this.rotation = null),
                this.mesh.parent && this.mesh.parent.remove(this.mesh),
                (this.mesh.userData.structure = null),
                (this.mesh = null),
                (this.material = null),
                (this.userData = null),
                (this.entity = null),
                (this.geometry = null),
                (this._emissive = null);
            }
          }),
          (o.Tile.prototype.constructor = o.Tile),
          (function() {
            var e = function() {
              (this.first = null),
                (this.last = null),
                (this.length = 0),
                (this.objToNodeMap = {}),
                (this.uniqueID =
                  Date.now() + "" + Math.floor(1e3 * Math.random())),
                (this.sortArray = []);
            };
            (e.generateID = function() {
              return (
                Math.random()
                  .toString(36)
                  .slice(2) + Date.now()
              );
            }),
              ((e.prototype = {
                getNode: function(e) {
                  return this.objToNodeMap[e.uniqueID];
                },
                addNode: function(t) {
                  var i = new (function() {
                    (this.obj = null),
                      (this.next = null),
                      (this.prev = null),
                      (this.free = !0);
                  })();
                  if (!t.uniqueID)
                    try {
                      t.uniqueID = e.generateID();
                    } catch (e) {
                      return (
                        console.error(
                          "[LinkedList.addNode] obj passed is immutable: cannot attach necessary identifier"
                        ),
                        null
                      );
                    }
                  return (
                    (i.obj = t),
                    (i.free = !1),
                    (this.objToNodeMap[t.uniqueID] = i),
                    i
                  );
                },
                swapObjects: function(e, t) {
                  (this.objToNodeMap[e.obj.uniqueID] = null),
                    (this.objToNodeMap[t.uniqueID] = e),
                    (e.obj = t);
                },
                add: function(e) {
                  var t = this.objToNodeMap[e.uniqueID];
                  if (t) {
                    if (!1 === t.free) return;
                    (t.obj = e),
                      (t.free = !1),
                      (t.next = null),
                      (t.prev = null);
                  } else t = this.addNode(e);
                  if (this.first) {
                    if (!this.last)
                      throw new Error(
                        "[LinkedList.add] No last in the list -- that shouldn't happen here"
                      );
                    (this.last.next = t),
                      (t.prev = this.last),
                      (this.last = t),
                      (t.next = null);
                  } else
                    (this.first = t),
                      (this.last = t),
                      (t.next = null),
                      (t.prev = null);
                  this.length++, this.showDebug && this.dump("after add");
                },
                has: function(e) {
                  return !!this.objToNodeMap[e.uniqueID];
                },
                moveUp: function(e) {
                  this.dump("before move up");
                  var t = this.getNode(e);
                  if (!t)
                    throw "Oops, trying to move an object that isn't in the list";
                  if (t.prev) {
                    var i = t.prev,
                      n = i.prev;
                    t == this.last && (this.last = i);
                    var r = t.next;
                    n && (n.next = t),
                      (t.next = i),
                      (t.prev = i.prev),
                      (i.next = r),
                      (i.prev = t),
                      this.first == i && (this.first = t);
                  }
                },
                moveDown: function(e) {
                  var t = this.getNode(e);
                  if (!t)
                    throw "Oops, trying to move an object that isn't in the list";
                  if (t.next) {
                    var i = t.next;
                    this.moveUp(i.obj), this.last == i && (this.last = t);
                  }
                },
                sort: function(e) {
                  var t,
                    i,
                    n = this.sortArray,
                    r = this.first;
                  for (n.length = 0; r; ) n.push(r.obj), (r = r.next);
                  for (this.clear(), n.sort(e), i = n.length, t = 0; i > t; t++)
                    this.add(n[t]);
                },
                remove: function(e) {
                  var t = this.getNode(e);
                  return (
                    !(!t || t.free) &&
                    (t.prev && (t.prev.next = t.next),
                    t.next && (t.next.prev = t.prev),
                    t.prev || (this.first = t.next),
                    t.next || (this.last = t.prev),
                    (t.free = !0),
                    (t.prev = null),
                    (t.next = null),
                    this.length--,
                    !0)
                  );
                },
                shift: function() {
                  var e = this.first;
                  return 0 === this.length
                    ? null
                    : (e.prev && (e.prev.next = e.next),
                      e.next && (e.next.prev = e.prev),
                      (this.first = e.next),
                      e.next || (this.last = null),
                      (e.free = !0),
                      (e.prev = null),
                      (e.next = null),
                      this.length--,
                      e.obj);
                },
                pop: function() {
                  var e = this.last;
                  return 0 === this.length
                    ? null
                    : (e.prev && (e.prev.next = e.next),
                      e.next && (e.next.prev = e.prev),
                      (this.last = e.prev),
                      e.prev || (this.first = null),
                      (e.free = !0),
                      (e.prev = null),
                      (e.next = null),
                      this.length--,
                      e.obj);
                },
                concat: function(e) {
                  for (var t = e.first; t; ) this.add(t.obj), (t = t.next);
                },
                clear: function() {
                  for (var e = this.first; e; ) (e.free = !0), (e = e.next);
                  (this.first = null), (this.length = 0);
                },
                dispose: function() {
                  for (var e = this.first; e; ) (e.obj = null), (e = e.next);
                  (this.first = null), (this.objToNodeMap = null);
                },
                dump: function(e) {
                  console.log(
                    "====================" + e + "====================="
                  );
                  for (var t = this.first; t; )
                    console.log(
                      "{" +
                        t.obj.toString() +
                        "} previous=" +
                        (t.prev ? t.prev.obj : "NULL")
                    ),
                      (t = t.next());
                  console.log("==================================="),
                    console.log(
                      "Last: {" +
                        (this.last ? this.last.obj : "NULL") +
                        "} First: {" +
                        (this.first ? this.first.obj : "NULL") +
                        "}"
                    );
                }
              }).constructor = e),
              (o.LinkedList = e);
          })(),
          (function() {
            var e = function(e, t, i, n, r) {
              (this._listener = t),
                (this.isOnce = i),
                (this.context = n),
                (this.signal = e),
                (this._priority = r || 0);
            };
            (e.prototype = {
              active: !0,
              params: null,
              execute: function(e) {
                var t, i;
                return (
                  this.active &&
                    this._listener &&
                    ((i = this.params ? this.params.concat(e) : e),
                    (t = this._listener.apply(this.context, i)),
                    this.isOnce && this.detach()),
                  t
                );
              },
              detach: function() {
                return this.isBound()
                  ? this.signal.remove(this._listener, this.context)
                  : null;
              },
              isBound: function() {
                return !!this.signal && !!this._listener;
              },
              _destroy: function() {
                delete this.signal, delete this._listener, delete this.context;
              },
              toString: function() {
                return (
                  "[SignalBinding isOnce:" +
                  this.isOnce +
                  ", isBound:" +
                  this.isBound() +
                  ", active:" +
                  this.active +
                  "]"
                );
              }
            }).constructor = e;
            var t = function e() {
              (this._bindings = []), (this._prevParams = null);
              var t = this;
              this.dispatch = function() {
                e.prototype.dispatch.apply(t, arguments);
              };
            };
            ((t.prototype = {
              memorize: !1,
              _shouldPropagate: !0,
              active: !0,
              validateListener: function(e, t) {
                if ("function" != typeof e)
                  throw new Error(
                    "Signal: listener is a required param of {fn}() and should be a Function.".replace(
                      "{fn}",
                      t
                    )
                  );
              },
              _registerListener: function(t, i, n, r) {
                var o,
                  s = this._indexOfListener(t, n);
                if (-1 !== s) {
                  if ((o = this._bindings[s]).isOnce !== i)
                    throw new Error(
                      "You cannot add" +
                        (i ? "" : "Once") +
                        "() then add" +
                        (i ? "Once" : "") +
                        "() the same listener without removing the relationship first."
                    );
                } else (o = new e(this, t, i, n, r)), this._addBinding(o);
                return (
                  this.memorize &&
                    this._prevParams &&
                    o.execute(this._prevParams),
                  o
                );
              },
              _addBinding: function(e) {
                var t = this._bindings.length;
                do {
                  t--;
                } while (
                  this._bindings[t] &&
                  e._priority <= this._bindings[t]._priority
                );
                this._bindings.splice(t + 1, 0, e);
              },
              _indexOfListener: function(e, t) {
                for (var i, n = this._bindings.length; n--; )
                  if (
                    (i = this._bindings[n])._listener === e &&
                    i.context === t
                  )
                    return n;
                return -1;
              },
              has: function(e, t) {
                return -1 !== this._indexOfListener(e, t);
              },
              add: function(e, t, i) {
                return (
                  this.validateListener(e, "add"),
                  this._registerListener(e, !1, t, i)
                );
              },
              addOnce: function(e, t, i) {
                return (
                  this.validateListener(e, "addOnce"),
                  this._registerListener(e, !0, t, i)
                );
              },
              remove: function(e, t) {
                this.validateListener(e, "remove");
                var i = this._indexOfListener(e, t);
                return (
                  -1 !== i &&
                    (this._bindings[i]._destroy(), this._bindings.splice(i, 1)),
                  e
                );
              },
              removeAll: function(e) {
                void 0 === e && (e = null);
                for (var t = this._bindings.length; t--; )
                  e
                    ? this._bindings[t].context === e &&
                      (this._bindings[t]._destroy(),
                      this._bindings.splice(t, 1))
                    : this._bindings[t]._destroy();
                e || (this._bindings.length = 0);
              },
              getNumListeners: function() {
                return this._bindings.length;
              },
              halt: function() {
                this._shouldPropagate = !1;
              },
              dispatch: function() {
                if (this.active) {
                  var e,
                    t = Array.prototype.slice.call(arguments),
                    i = this._bindings.length;
                  if ((this.memorize && (this._prevParams = t), i)) {
                    (e = this._bindings.slice()), (this._shouldPropagate = !0);
                    do {
                      i--;
                    } while (
                      e[i] &&
                      this._shouldPropagate &&
                      !1 !== e[i].execute(t)
                    );
                  }
                }
              },
              forget: function() {
                this._prevParams = null;
              },
              dispose: function() {
                this.removeAll(),
                  delete this._bindings,
                  delete this._prevParams;
              },
              toString: function() {
                return (
                  "[Signal active:" +
                  this.active +
                  " numListeners:" +
                  this.getNumListeners() +
                  "]"
                );
              }
            }).constructor = t),
              (o.Signal = t);
          })(),
          (o.AStarFinder = function(e) {
            e = e || {};
            var t = { allowDiagonal: !1, heuristicFilter: null };
            (t = o.Tools.merge(t, e)),
              (this.allowDiagonal = t.allowDiagonal),
              (this.heuristicFilter = t.heuristicFilter),
              (this.list = new o.LinkedList());
          }),
          (o.AStarFinder.prototype = {
            findPath: function(e, t, i, n) {
              var r, s, a, c, l, h;
              for (
                i = i || this.heuristicFilter,
                  n.clearPath(),
                  this.list.clear(),
                  this.list.add(e);
                this.list.length > 0;

              ) {
                if (
                  (this.list.sort(this.compare),
                  (r = this.list.shift()),
                  (r._visited = !0),
                  r === t)
                )
                  return o.PathUtil.backtrace(t);
                for (
                  l = 0,
                    h = (a = n.getNeighbors(r, this.allowDiagonal, i)).length;
                  h > l;
                  l++
                )
                  if (
                    (c = a[l]).walkable &&
                    ((s = r._calcCost + n.distance(r, c)),
                    !c._visited || s < c._calcCost)
                  ) {
                    if (
                      ((c._visited = !0),
                      (c._parent = r),
                      (c._calcCost = s),
                      (c._priority = s + n.distance(t, c)),
                      c === t)
                    )
                      return o.PathUtil.backtrace(t);
                    this.list.add(c);
                  }
              }
              return null;
            },
            compare: function(e, t) {
              return e._priority - t._priority;
            }
          }),
          (o.AStarFinder.prototype.constructor = o.AStarFinder),
          (o.PathUtil = {
            backtrace: function(e) {
              for (var t = [e]; e._parent; ) (e = e._parent), t.push(e);
              return t.reverse();
            },
            biBacktrace: function(e, t) {
              var i = this.backtrace(e),
                n = this.backtrace(t);
              return i.concat(n.reverse());
            },
            pathLength: function(e) {
              var t,
                i,
                n,
                r,
                o,
                s = 0;
              for (t = 1; t < e.length; ++t)
                (i = e[t - 1]),
                  (n = e[t]),
                  (r = i[0] - n[0]),
                  (o = i[1] - n[1]),
                  (s += Math.sqrt(r * r + o * o));
              return s;
            },
            interpolate: function(e, t, i, n) {
              var r,
                o,
                s,
                a,
                c,
                l,
                h = Math.abs,
                u = [];
              for (
                s = h(i - e),
                  a = h(n - t),
                  r = i > e ? 1 : -1,
                  o = n > t ? 1 : -1,
                  c = s - a;
                e !== i || t !== n;

              )
                u.push([e, t]),
                  (l = 2 * c) > -a && ((c -= a), (e += r)),
                  s > l && ((c += s), (t += o));
              return u;
            },
            expandPath: function(e) {
              var t,
                i,
                n,
                r,
                o,
                s,
                a = [],
                c = e.length;
              if (2 > c) return a;
              for (o = 0; c - 1 > o; ++o)
                for (
                  t = e[o],
                    i = e[o + 1],
                    r = (n = this.interpolate(t[0], t[1], i[0], i[1])).length,
                    s = 0;
                  r - 1 > s;
                  ++s
                )
                  a.push(n[s]);
              return a.push(e[c - 1]), a;
            },
            smoothenPath: function(e, t) {
              var i,
                n,
                r,
                o,
                s,
                a,
                c,
                l,
                h,
                u,
                d,
                p,
                f = t.length,
                m = t[0][0],
                v = t[0][1],
                g = t[f - 1][0],
                y = t[f - 1][1];
              for (s = [[(i = m), (n = v)]], c = 2; f > c; ++c) {
                for (
                  r = (h = t[c])[0],
                    o = h[1],
                    u = this.interpolate(i, n, r, o),
                    p = !1,
                    l = 1;
                  l < u.length;
                  ++l
                )
                  if (((d = u[l]), !e.isWalkableAt(d[0], d[1]))) {
                    p = !0;
                    break;
                  }
                p && ((a = t[c - 1]), s.push(a), (i = a[0]), (n = a[1]));
              }
              return s.push([g, y]), s;
            },
            compressPath: function(e) {
              if (e.length < 3) return e;
              var t,
                i,
                n,
                r,
                o,
                s,
                a = [],
                c = e[0][0],
                l = e[0][1],
                h = e[1][0],
                u = e[1][1],
                d = h - c,
                p = u - l;
              for (
                d /= o = Math.sqrt(d * d + p * p),
                  p /= o,
                  a.push([c, l]),
                  s = 2;
                s < e.length;
                s++
              )
                (t = h),
                  (i = u),
                  (n = d),
                  (r = p),
                  (d = (h = e[s][0]) - t),
                  (p = (u = e[s][1]) - i),
                  (p /= o = Math.sqrt(d * d + p * p)),
                  ((d /= o) !== n || p !== r) && a.push([t, i]);
              return a.push([h, u]), a;
            }
          }),
          (o.Loader = {
            manager: null,
            imageLoader: null,
            crossOrigin: !1,
            init: function(e) {
              (this.crossOrigin = e || !1),
                (this.manager = new THREE.LoadingManager(
                  function() {},
                  function() {},
                  function() {
                    console.warn("Error loading images");
                  }
                )),
                (this.imageLoader = new THREE.ImageLoader(this.manager)),
                (this.imageLoader.crossOrigin = e);
            },
            loadTexture: function(e, t, i, n) {
              var r = new THREE.Texture(null, t);
              return (
                this.imageLoader.load(
                  e,
                  function(e) {
                    (r.image = e), (r.needsUpdate = !0), i && i(r);
                  },
                  null,
                  function(e) {
                    n && n(e);
                  }
                ),
                (r.sourceFile = e),
                r
              );
            }
          }),
          (o.MouseCaster = function(e, t, i) {
            (this.down = !1),
              (this.rightDown = !1),
              (this.pickedObject = null),
              (this.selectedObject = null),
              (this.allHits = null),
              (this.active = !0),
              (this.shift = !1),
              (this.ctrl = !1),
              (this.wheel = 0),
              (this.position = new THREE.Vector3()),
              (this.screenPosition = new THREE.Vector2()),
              (this.signal = new o.Signal()),
              (this.group = e),
              (this._camera = t),
              (this._raycaster = new THREE.Raycaster()),
              (this._preventDefault = !1),
              (i = i || document).addEventListener(
                "mousemove",
                this._onDocumentMouseMove.bind(this),
                !1
              ),
              i.addEventListener(
                "mousedown",
                this._onDocumentMouseDown.bind(this),
                !1
              ),
              i.addEventListener(
                "mouseup",
                this._onDocumentMouseUp.bind(this),
                !1
              ),
              i.addEventListener(
                "mousewheel",
                this._onMouseWheel.bind(this),
                !1
              ),
              i.addEventListener(
                "DOMMouseScroll",
                this._onMouseWheel.bind(this),
                !1
              );
          }),
          (o.MouseCaster.OVER = "over"),
          (o.MouseCaster.OUT = "out"),
          (o.MouseCaster.DOWN = "down"),
          (o.MouseCaster.UP = "up"),
          (o.MouseCaster.CLICK = "click"),
          (o.MouseCaster.WHEEL = "wheel"),
          (o.MouseCaster.prototype = {
            update: function() {
              if (this.active) {
                this._raycaster.setFromCamera(
                  this.screenPosition,
                  this._camera
                );
                var e,
                  t,
                  i = this._raycaster.intersectObject(this.group, !0);
                i.length > 0
                  ? ((e = i[0]),
                    (t = e.object.userData.structure),
                    this.pickedObject != t &&
                      (this.pickedObject &&
                        this.signal.dispatch(
                          o.MouseCaster.OUT,
                          this.pickedObject
                        ),
                      (this.pickedObject = t),
                      (this.selectedObject = null),
                      this.signal.dispatch(
                        o.MouseCaster.OVER,
                        this.pickedObject
                      )),
                    this.position.copy(e.point),
                    (this.screenPosition.z = e.distance))
                  : (this.pickedObject &&
                      this.signal.dispatch(
                        o.MouseCaster.OUT,
                        this.pickedObject
                      ),
                    (this.pickedObject = null),
                    (this.selectedObject = null)),
                  (this.allHits = i);
              }
            },
            preventDefault: function() {
              this._preventDefault = !0;
            },
            _onDocumentMouseDown: function(e) {
              return (
                (e = e || window.event).preventDefault(),
                this._preventDefault
                  ? ((this._preventDefault = !1), !1)
                  : (this.pickedObject &&
                      (this.selectedObject = this.pickedObject),
                    (this.shift = e.shiftKey),
                    (this.ctrl = e.ctrlKey),
                    (this.down = 1 === e.which),
                    (this.rightDown = 3 === e.which),
                    void this.signal.dispatch(
                      o.MouseCaster.DOWN,
                      this.pickedObject
                    ))
              );
            },
            _onDocumentMouseUp: function(e) {
              return (
                e.preventDefault(),
                this._preventDefault
                  ? ((this._preventDefault = !1), !1)
                  : ((this.shift = e.shiftKey),
                    (this.ctrl = e.ctrlKey),
                    this.signal.dispatch(o.MouseCaster.UP, this.pickedObject),
                    this.selectedObject &&
                      this.pickedObject &&
                      this.selectedObject.uniqueID ===
                        this.pickedObject.uniqueID &&
                      this.signal.dispatch(
                        o.MouseCaster.CLICK,
                        this.pickedObject
                      ),
                    (this.down = 1 !== e.which && this.down),
                    void (this.rightDown = 3 !== e.which && this.rightDown))
              );
            },
            _onDocumentMouseMove: function(e) {
              e.preventDefault(),
                (this.screenPosition.x =
                  (e.clientX / window.innerWidth) * 2 - 1),
                (this.screenPosition.y =
                  (-e.clientY / window.innerHeight) * 2 + 1);
            },
            _onMouseWheel: function(e) {
              if (this.active) {
                e.preventDefault(), e.stopPropagation();
                var t = 0;
                void 0 !== e.wheelDelta
                  ? (t = e.wheelDelta)
                  : void 0 !== e.detail && (t = -e.detail),
                  t > 0 ? this.wheel++ : this.wheel--,
                  this.signal.dispatch(o.MouseCaster.WHEEL, this.wheel);
              }
            }
          }),
          (o.MouseCaster.prototype.constructor = o.MouseCaster),
          (o.Scene = function(e, t) {
            var i = {
                element: document.body,
                alpha: !0,
                antialias: !0,
                clearColor: "#fff",
                sortObjects: !1,
                fog: null,
                light: new THREE.DirectionalLight(16777215),
                lightPosition: null,
                cameraType: "PerspectiveCamera",
                cameraPosition: null,
                orthoZoom: 4
              },
              n = {
                minDistance: 100,
                maxDistance: 1e3,
                zoomSpeed: 2,
                noZoom: !1
              };
            if (
              ((i = o.Tools.merge(i, e)),
              "boolean" != typeof t && (n = o.Tools.merge(n, t)),
              (this.renderer = new THREE.WebGLRenderer({
                alpha: i.alpha,
                antialias: i.antialias
              })),
              this.renderer.setClearColor(i.clearColor, 0),
              (this.renderer.sortObjects = i.sortObjects),
              (this.width = window.innerWidth),
              (this.height = window.innerHeight),
              (this.orthoZoom = i.orthoZoom),
              (this.container = new THREE.Scene()),
              (this.container.fog = i.fog),
              this.container.add(new THREE.AmbientLight(14540253)),
              i.lightPosition || i.light.position.set(-1, 1, -1).normalize(),
              this.container.add(i.light),
              "OrthographicCamera" === i.cameraType)
            ) {
              var r = window.innerWidth / this.orthoZoom,
                s = window.innerHeight / this.orthoZoom;
              this.camera = new THREE.OrthographicCamera(
                r / -2,
                r / 2,
                s / 2,
                s / -2,
                1,
                5e3
              );
            } else
              this.camera = new THREE.PerspectiveCamera(
                50,
                this.width / this.height,
                1,
                5e3
              );
            (this.contolled = !!t),
              this.contolled &&
                ((this.controls = new THREE.OrbitControls(
                  this.camera,
                  this.renderer.domElement
                )),
                (this.controls.minDistance = n.minDistance),
                (this.controls.maxDistance = n.maxDistance),
                (this.controls.zoomSpeed = n.zoomSpeed),
                (this.controls.noZoom = n.noZoom)),
              i.cameraPosition && this.camera.position.copy(i.cameraPosition),
              window.addEventListener(
                "resize",
                function() {
                  if (
                    ((this.width = window.innerWidth),
                    (this.height = window.innerHeight),
                    "OrthographicCamera" === this.camera.type)
                  ) {
                    var e = this.width / this.orthoZoom,
                      t = this.height / this.orthoZoom;
                    (this.camera.left = e / -2),
                      (this.camera.right = e / 2),
                      (this.camera.top = t / 2),
                      (this.camera.bottom = t / -2);
                  } else this.camera.aspect = this.width / this.height;
                  this.camera.updateProjectionMatrix(),
                    this.renderer.setSize(this.width, this.height);
                }.bind(this),
                !1
              ),
              this.attachTo(i.element);
          }),
          (o.Scene.prototype = {
            attachTo: function(e) {
              (e.style.width = this.width + "px"),
                (e.style.height = this.height + "px"),
                this.renderer.setPixelRatio(window.devicePixelRatio),
                this.renderer.setSize(this.width, this.height),
                e.appendChild(this.renderer.domElement);
            },
            add: function(e) {
              this.container.add(e);
            },
            remove: function(e) {
              this.container.remove(e);
            },
            render: function() {
              this.contolled && this.controls.update(),
                this.renderer.render(this.container, this.camera);
            },
            updateOrthoZoom: function() {
              if (this.orthoZoom <= 0) this.orthoZoom = 0;
              else {
                var e = this.width / this.orthoZoom,
                  t = this.height / this.orthoZoom;
                (this.camera.left = e / -2),
                  (this.camera.right = e / 2),
                  (this.camera.top = t / 2),
                  (this.camera.bottom = t / -2),
                  this.camera.updateProjectionMatrix();
              }
            },
            focusOn: function(e) {
              this.camera.lookAt(e.position);
            }
          }),
          (o.Scene.prototype.constructor = o.Scene),
          (o.SelectionManager = function(e) {
            (this.mouse = e),
              (this.onSelect = new o.Signal()),
              (this.onDeselect = new o.Signal()),
              (this.selected = null),
              (this.toggleSelection = !1),
              this.mouse.signal.add(this.onMouse, this);
          }),
          (o.SelectionManager.prototype = {
            select: function(e, t) {
              e &&
                ((t = t || !0),
                this.selected !== e && this.clearSelection(t),
                e.selected
                  ? this.toggleSelection &&
                    (t && this.onDeselect.dispatch(e), e.deselect())
                  : e.select(),
                (this.selected = e),
                t && this.onSelect.dispatch(e));
            },
            clearSelection: function(e) {
              (e = e || !0),
                this.selected &&
                  (e && this.onDeselect.dispatch(this.selected),
                  this.selected.deselect()),
                (this.selected = null);
            },
            onMouse: function(e, t) {
              switch (e) {
                case o.MouseCaster.DOWN:
                  t || this.clearSelection();
                  break;
                case o.MouseCaster.CLICK:
                  this.select(t);
              }
            }
          }),
          (o.SelectionManager.prototype.constructor = o.SelectionManager),
          (o.Tools = {
            clamp: function(e, t, i) {
              return Math.max(t, Math.min(i, e));
            },
            sign: function(e) {
              return e && e / Math.abs(e);
            },
            random: function(e, t) {
              return 1 === arguments.length
                ? Math.random() * e - 0.5 * e
                : Math.random() * (t - e) + e;
            },
            randomInt: function(e, t) {
              return 1 === arguments.length
                ? (Math.random() * e - 0.5 * e) | 0
                : (Math.random() * (t - e + 1) + e) | 0;
            },
            normalize: function(e, t, i) {
              return (e - t) / (i - t);
            },
            getShortRotation: function(e) {
              return (
                (e %= this.TAU) > this.PI
                  ? (e -= this.TAU)
                  : e < -this.PI && (e += this.TAU),
                e
              );
            },
            generateID: function() {
              return (
                Math.random()
                  .toString(36)
                  .slice(2) + Date.now()
              );
            },
            isPlainObject: function(e) {
              if (
                "object" != (void 0 === e ? "undefined" : r(e)) ||
                e.nodeType ||
                e === e.window
              )
                return !1;
              try {
                if (
                  e.constructor &&
                  !Object.prototype.hasOwnProperty.call(
                    e.constructor.prototype,
                    "isPrototypeOf"
                  )
                )
                  return !1;
              } catch (e) {
                return !1;
              }
              return !0;
            },
            merge: function(e, t) {
              var i = this,
                n = Array.isArray(t),
                r = (n && []) || {};
              return n
                ? ((e = e || []),
                  (r = r.concat(e)),
                  t.forEach(function(t, n) {
                    void 0 === r[n]
                      ? (r[n] = t)
                      : i.isPlainObject(t)
                      ? (r[n] = i.merge(e[n], t))
                      : -1 === e.indexOf(t) && r.push(t);
                  }),
                  r)
                : (e &&
                    i.isPlainObject(e) &&
                    Object.keys(e).forEach(function(t) {
                      r[t] = e[t];
                    }),
                  Object.keys(t).forEach(function(n) {
                    t[n] && i.isPlainObject(t[n]) && e[n]
                      ? (r[n] = i.merge(e[n], t[n]))
                      : (r[n] = t[n]);
                  }),
                  r);
            },
            now: function() {
              return window.nwf
                ? window.nwf.system.Performance.elapsedTime
                : window.performance.now();
            },
            empty: function(e) {
              for (; e.lastChild; ) e.removeChild(e.lastChild);
            },
            radixSort: function(e, t, i, n) {
              if (
                ((t = t || 0),
                (i = i || e.length),
                (n = n || 31),
                !(t >= i - 1 || 0 > n))
              ) {
                for (var r = t, o = i, s = 1 << n; o > r; )
                  if (e[r] & s) {
                    --o;
                    var a = e[r];
                    (e[r] = e[o]), (e[o] = a);
                  } else ++r;
                this.radixSort(e, t, o, n - 1), this.radixSort(e, o, i, n - 1);
              }
            },
            randomizeRGB: function(e, t) {
              var i,
                n,
                r = e.split(","),
                o = "rgb(";
              for (t = this.randomInt(t), i = 0; 3 > i; i++)
                0 > (n = parseInt(r[i]) + t) ? (n = 0) : n > 255 && (n = 255),
                  (o += n + ",");
              return (o = o.substring(0, o.length - 1)), (o += ")");
            },
            getJSON: function(e) {
              var t = new XMLHttpRequest(),
                i =
                  void 0 !== e.cache && e.cache
                    ? e.url
                    : e.url +
                      "?t=" +
                      Math.floor(1e4 * Math.random()) +
                      Date.now();
              (t.onreadystatechange = function() {
                if (200 !== this.status)
                  0 !== this.status &&
                    console.warn(
                      "[Tools.getJSON] Error: " +
                        this.status +
                        " (" +
                        this.statusText +
                        ") :: " +
                        e.url
                    );
                else {
                  var t = null;
                  try {
                    t = JSON.parse(this.responseText);
                  } catch (e) {
                    return;
                  }
                  e.callback.call(e.scope || null, t);
                }
              }),
                t.open("GET", i, !0),
                t.setRequestHeader("Accept", "application/json"),
                t.setRequestHeader("Content-Type", "application/json"),
                t.send("");
            }
          });
      },
      {}
    ],
    10: [
      function(e, t, i) {
        "use strict";
        !(function(e) {
          function t(e, t) {
            return -1 !== String(e).indexOf(t);
          }
          function i(e, t, i) {
            (u !== t && h !== t && l !== t) ||
              Object.keys(i).forEach(function(t) {
                e[t] = i[t];
              });
          }
          function n(e) {
            var t = "keyCode" in e ? e.keyCode : "which" in e ? e.which : 0,
              i = (function() {
                if (y || "keyLocation" in e) {
                  var i = y ? e.location : e.keyLocation;
                  if (i && t in f[i]) return f[i][t];
                }
                return "keyIdentifier" in e && e.keyIdentifier in p
                  ? p[e.keyIdentifier]
                  : t in d
                  ? d[t]
                  : null;
              })();
            if (!i) return null;
            var n = (function() {
              var t = m[i.code];
              return t
                ? e.shiftKey && "shiftKey" in t
                  ? t.shiftKey
                  : t.key
                : i.code;
            })();
            return {
              code: i.code,
              key: n,
              location: i.location,
              keyCap: i.keyCap
            };
          }
          var r = "KeyboardEvent" in e;
          r ||
            (e.KeyboardEvent = function() {
              throw TypeError("Illegal constructor");
            }),
            "DOM_KEY_LOCATION_STANDARD" in e.KeyboardEvent ||
              (e.KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0),
            "DOM_KEY_LOCATION_LEFT" in e.KeyboardEvent ||
              (e.KeyboardEvent.DOM_KEY_LOCATION_LEFT = 1),
            "DOM_KEY_LOCATION_RIGHT" in e.KeyboardEvent ||
              (e.KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 2),
            "DOM_KEY_LOCATION_NUMPAD" in e.KeyboardEvent ||
              (e.KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 3);
          var o = window.KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
            s = window.KeyboardEvent.DOM_KEY_LOCATION_LEFT,
            a = window.KeyboardEvent.DOM_KEY_LOCATION_RIGHT,
            c = window.KeyboardEvent.DOM_KEY_LOCATION_NUMPAD,
            l = t(navigator.platform, "Win")
              ? "win"
              : t(navigator.platform, "Mac")
              ? "mac"
              : t(navigator.platform, "CrOS")
              ? "cros"
              : t(navigator.platform, "Linux")
              ? "linux"
              : t(navigator.userAgent, "iPad") ||
                t(navigator.platform, "iPod") ||
                t(navigator.platform, "iPhone")
              ? "ios"
              : "",
            h = t(navigator.userAgent, "Chrome/")
              ? "chrome"
              : t(navigator.vendor, "Apple")
              ? "safari"
              : t(navigator.userAgent, "MSIE")
              ? "ie"
              : t(navigator.userAgent, "Gecko/")
              ? "moz"
              : t(navigator.userAgent, "Opera/")
              ? "opera"
              : "",
            u = h + "-" + l,
            d = {
              3: { code: "Cancel" },
              6: { code: "Help" },
              8: { code: "Backspace" },
              9: { code: "Tab" },
              12: { code: "Clear" },
              13: { code: "Enter" },
              16: { code: "Shift" },
              17: { code: "Control" },
              18: { code: "Alt" },
              19: { code: "Pause" },
              20: { code: "CapsLock" },
              21: { code: "KanaMode" },
              22: { code: "HangulMode" },
              23: { code: "JunjaMode" },
              24: { code: "FinalMode" },
              25: { code: "KanjiMode" },
              27: { code: "Escape" },
              28: { code: "Convert" },
              29: { code: "NonConvert" },
              30: { code: "Accept" },
              31: { code: "ModeChange" },
              32: { code: "Space" },
              33: { code: "PageUp" },
              34: { code: "PageDown" },
              35: { code: "End" },
              36: { code: "Home" },
              37: { code: "ArrowLeft" },
              38: { code: "ArrowUp" },
              39: { code: "ArrowRight" },
              40: { code: "ArrowDown" },
              41: { code: "Select" },
              42: { code: "Print" },
              43: { code: "Execute" },
              44: { code: "PrintScreen" },
              45: { code: "Insert" },
              46: { code: "Delete" },
              47: { code: "Help" },
              48: { code: "Digit0", keyCap: "0" },
              49: { code: "Digit1", keyCap: "1" },
              50: { code: "Digit2", keyCap: "2" },
              51: { code: "Digit3", keyCap: "3" },
              52: { code: "Digit4", keyCap: "4" },
              53: { code: "Digit5", keyCap: "5" },
              54: { code: "Digit6", keyCap: "6" },
              55: { code: "Digit7", keyCap: "7" },
              56: { code: "Digit8", keyCap: "8" },
              57: { code: "Digit9", keyCap: "9" },
              65: { code: "KeyA", keyCap: "a" },
              66: { code: "KeyB", keyCap: "b" },
              67: { code: "KeyC", keyCap: "c" },
              68: { code: "KeyD", keyCap: "d" },
              69: { code: "KeyE", keyCap: "e" },
              70: { code: "KeyF", keyCap: "f" },
              71: { code: "KeyG", keyCap: "g" },
              72: { code: "KeyH", keyCap: "h" },
              73: { code: "KeyI", keyCap: "i" },
              74: { code: "KeyJ", keyCap: "j" },
              75: { code: "KeyK", keyCap: "k" },
              76: { code: "KeyL", keyCap: "l" },
              77: { code: "KeyM", keyCap: "m" },
              78: { code: "KeyN", keyCap: "n" },
              79: { code: "KeyO", keyCap: "o" },
              80: { code: "KeyP", keyCap: "p" },
              81: { code: "KeyQ", keyCap: "q" },
              82: { code: "KeyR", keyCap: "r" },
              83: { code: "KeyS", keyCap: "s" },
              84: { code: "KeyT", keyCap: "t" },
              85: { code: "KeyU", keyCap: "u" },
              86: { code: "KeyV", keyCap: "v" },
              87: { code: "KeyW", keyCap: "w" },
              88: { code: "KeyX", keyCap: "x" },
              89: { code: "KeyY", keyCap: "y" },
              90: { code: "KeyZ", keyCap: "z" },
              91: { code: "OSLeft", location: s },
              92: { code: "OSRight", location: a },
              93: { code: "ContextMenu" },
              95: { code: "Standby" },
              96: { code: "Numpad0", keyCap: "0", location: c },
              97: { code: "Numpad1", keyCap: "1", location: c },
              98: { code: "Numpad2", keyCap: "2", location: c },
              99: { code: "Numpad3", keyCap: "3", location: c },
              100: { code: "Numpad4", keyCap: "4", location: c },
              101: { code: "Numpad5", keyCap: "5", location: c },
              102: { code: "Numpad6", keyCap: "6", location: c },
              103: { code: "Numpad7", keyCap: "7", location: c },
              104: { code: "Numpad8", keyCap: "8", location: c },
              105: { code: "Numpad9", keyCap: "9", location: c },
              106: { code: "NumpadMultiply", keyCap: "*", location: c },
              107: { code: "NumpadAdd", keyCap: "+", location: c },
              108: { code: "NumpadComma", keyCap: ",", location: c },
              109: { code: "NumpadSubtract", keyCap: "-", location: c },
              110: { code: "NumpadDecimal", keyCap: ".", location: c },
              111: { code: "NumpadDivide", keyCap: "/", location: c },
              112: { code: "F1" },
              113: { code: "F2" },
              114: { code: "F3" },
              115: { code: "F4" },
              116: { code: "F5" },
              117: { code: "F6" },
              118: { code: "F7" },
              119: { code: "F8" },
              120: { code: "F9" },
              121: { code: "F10" },
              122: { code: "F11" },
              123: { code: "F12" },
              124: { code: "F13" },
              125: { code: "F14" },
              126: { code: "F15" },
              127: { code: "F16" },
              128: { code: "F17" },
              129: { code: "F18" },
              130: { code: "F19" },
              131: { code: "F20" },
              132: { code: "F21" },
              133: { code: "F22" },
              134: { code: "F23" },
              135: { code: "F24" },
              144: { code: "NumLock", location: c },
              145: { code: "ScrollLock" },
              160: { code: "ShiftLeft", location: s },
              161: { code: "ShiftRight", location: a },
              162: { code: "ControlLeft", location: s },
              163: { code: "ControlRight", location: a },
              164: { code: "AltLeft", location: s },
              165: { code: "AltRight", location: a },
              166: { code: "BrowserBack" },
              167: { code: "BrowserForward" },
              168: { code: "BrowserRefresh" },
              169: { code: "BrowserStop" },
              170: { code: "BrowserSearch" },
              171: { code: "BrowserFavorites" },
              172: { code: "BrowserHome" },
              173: { code: "VolumeMute" },
              174: { code: "VolumeDown" },
              175: { code: "VolumeUp" },
              176: { code: "MediaTrackNext" },
              177: { code: "MediaTrackPrevious" },
              178: { code: "MediaStop" },
              179: { code: "MediaPlayPause" },
              180: { code: "LaunchMail" },
              181: { code: "MediaSelect" },
              182: { code: "LaunchApp1" },
              183: { code: "LaunchApp2" },
              186: { code: "Semicolon", keyCap: ";" },
              187: { code: "Equal", keyCap: "=" },
              188: { code: "Comma", keyCap: "," },
              189: { code: "Minus", keyCap: "-" },
              190: { code: "Period", keyCap: "." },
              191: { code: "Slash", keyCap: "/" },
              192: { code: "Backquote", keyCap: "`" },
              219: { code: "BracketLeft", keyCap: "[" },
              220: { code: "Backslash", keyCap: "\\" },
              221: { code: "BracketRight", keyCap: "]" },
              222: { code: "Quote", keyCap: "'" },
              226: { code: "IntlBackslash", keyCap: "\\" },
              229: { code: "Process" },
              246: { code: "Attn" },
              247: { code: "CrSel" },
              248: { code: "ExSel" },
              249: { code: "EraseEof" },
              250: { code: "Play" },
              251: { code: "ZoomToggle" },
              254: { code: "Clear" }
            };
          i(d, "moz", {
            59: { code: "Semicolon", keyCap: ";" },
            61: { code: "Equal", keyCap: "=" },
            107: { code: "Equal", keyCap: "=" },
            109: { code: "Minus", keyCap: "-" },
            187: { code: "NumpadAdd", keyCap: "+", location: c },
            189: { code: "NumpadSubtract", keyCap: "-", location: c }
          }),
            i(d, "moz-mac", {
              12: { code: "NumLock", location: c },
              173: { code: "Minus", keyCap: "-" }
            }),
            i(d, "moz-win", { 173: { code: "Minus", keyCap: "-" } }),
            i(d, "chrome-mac", { 93: { code: "OSRight", location: a } }),
            i(d, "safari", { 3: { code: "Enter" }, 25: { code: "Tab" } }),
            i(d, "ios", { 10: { code: "Enter", location: o } }),
            i(d, "safari-mac", {
              91: { code: "OSLeft", location: s },
              93: { code: "OSRight", location: a },
              229: { code: "KeyQ", keyCap: "Q" }
            });
          var p = {};
          "cros" === l &&
            ((p["U+00A0"] = { code: "ShiftLeft", location: s }),
            (p["U+00A1"] = { code: "ShiftRight", location: a }),
            (p["U+00A2"] = { code: "ControlLeft", location: s }),
            (p["U+00A3"] = { code: "ControlRight", location: a }),
            (p["U+00A4"] = { code: "AltLeft", location: s }),
            (p["U+00A5"] = { code: "AltRight", location: a })),
            "chrome-mac" === u && (p["U+0010"] = { code: "ContextMenu" }),
            "safari-mac" === u && (p["U+0010"] = { code: "ContextMenu" }),
            "ios" === l &&
              ((p["U+0010"] = { code: "Function" }),
              (p["U+001C"] = { code: "ArrowLeft" }),
              (p["U+001D"] = { code: "ArrowRight" }),
              (p["U+001E"] = { code: "ArrowUp" }),
              (p["U+001F"] = { code: "ArrowDown" }),
              (p["U+0001"] = { code: "Home" }),
              (p["U+0004"] = { code: "End" }),
              (p["U+000B"] = { code: "PageUp" }),
              (p["U+000C"] = { code: "PageDown" }));
          var f = [];
          (f[s] = {
            16: { code: "ShiftLeft", location: s },
            17: { code: "ControlLeft", location: s },
            18: { code: "AltLeft", location: s }
          }),
            (f[a] = {
              16: { code: "ShiftRight", location: a },
              17: { code: "ControlRight", location: a },
              18: { code: "AltRight", location: a }
            }),
            (f[c] = { 13: { code: "NumpadEnter", location: c } }),
            i(f[c], "moz", {
              109: { code: "NumpadSubtract", location: c },
              107: { code: "NumpadAdd", location: c }
            }),
            i(f[s], "moz-mac", { 224: { code: "OSLeft", location: s } }),
            i(f[a], "moz-mac", { 224: { code: "OSRight", location: a } }),
            i(f[a], "moz-win", { 91: { code: "OSRight", location: a } }),
            i(f[a], "mac", { 93: { code: "OSRight", location: a } }),
            i(f[c], "chrome-mac", { 12: { code: "NumLock", location: c } }),
            i(f[c], "safari-mac", {
              12: { code: "NumLock", location: c },
              187: { code: "NumpadAdd", location: c },
              189: { code: "NumpadSubtract", location: c },
              190: { code: "NumpadDecimal", location: c },
              191: { code: "NumpadDivide", location: c }
            });
          var m = {
            ShiftLeft: { key: "Shift" },
            ShiftRight: { key: "Shift" },
            ControlLeft: { key: "Control" },
            ControlRight: { key: "Control" },
            AltLeft: { key: "Alt" },
            AltRight: { key: "Alt" },
            OSLeft: { key: "OS" },
            OSRight: { key: "OS" },
            NumpadEnter: { key: "Enter" },
            Space: { key: " " },
            Digit0: { key: "0", shiftKey: ")" },
            Digit1: { key: "1", shiftKey: "!" },
            Digit2: { key: "2", shiftKey: "@" },
            Digit3: { key: "3", shiftKey: "#" },
            Digit4: { key: "4", shiftKey: "$" },
            Digit5: { key: "5", shiftKey: "%" },
            Digit6: { key: "6", shiftKey: "^" },
            Digit7: { key: "7", shiftKey: "&" },
            Digit8: { key: "8", shiftKey: "*" },
            Digit9: { key: "9", shiftKey: "(" },
            KeyA: { key: "a", shiftKey: "A" },
            KeyB: { key: "b", shiftKey: "B" },
            KeyC: { key: "c", shiftKey: "C" },
            KeyD: { key: "d", shiftKey: "D" },
            KeyE: { key: "e", shiftKey: "E" },
            KeyF: { key: "f", shiftKey: "F" },
            KeyG: { key: "g", shiftKey: "G" },
            KeyH: { key: "h", shiftKey: "H" },
            KeyI: { key: "i", shiftKey: "I" },
            KeyJ: { key: "j", shiftKey: "J" },
            KeyK: { key: "k", shiftKey: "K" },
            KeyL: { key: "l", shiftKey: "L" },
            KeyM: { key: "m", shiftKey: "M" },
            KeyN: { key: "n", shiftKey: "N" },
            KeyO: { key: "o", shiftKey: "O" },
            KeyP: { key: "p", shiftKey: "P" },
            KeyQ: { key: "q", shiftKey: "Q" },
            KeyR: { key: "r", shiftKey: "R" },
            KeyS: { key: "s", shiftKey: "S" },
            KeyT: { key: "t", shiftKey: "T" },
            KeyU: { key: "u", shiftKey: "U" },
            KeyV: { key: "v", shiftKey: "V" },
            KeyW: { key: "w", shiftKey: "W" },
            KeyX: { key: "x", shiftKey: "X" },
            KeyY: { key: "y", shiftKey: "Y" },
            KeyZ: { key: "z", shiftKey: "Z" },
            Numpad0: { key: "0" },
            Numpad1: { key: "1" },
            Numpad2: { key: "2" },
            Numpad3: { key: "3" },
            Numpad4: { key: "4" },
            Numpad5: { key: "5" },
            Numpad6: { key: "6" },
            Numpad7: { key: "7" },
            Numpad8: { key: "8" },
            Numpad9: { key: "9" },
            NumpadMultiply: { key: "*" },
            NumpadAdd: { key: "+" },
            NumpadComma: { key: "," },
            NumpadSubtract: { key: "-" },
            NumpadDecimal: { key: "." },
            NumpadDivide: { key: "/" },
            Semicolon: { key: ";", shiftKey: ":" },
            Equal: { key: "=", shiftKey: "+" },
            Comma: { key: ",", shiftKey: "<" },
            Minus: { key: "-", shiftKey: "_" },
            Period: { key: ".", shiftKey: ">" },
            Slash: { key: "/", shiftKey: "?" },
            Backquote: { key: "`", shiftKey: "~" },
            BracketLeft: { key: "[", shiftKey: "{" },
            Backslash: { key: "\\", shiftKey: "|" },
            BracketRight: { key: "]", shiftKey: "}" },
            Quote: { key: "'", shiftKey: '"' },
            IntlBackslash: { key: "\\", shiftKey: "|" }
          };
          i(m, "mac", { OSLeft: { key: "Meta" }, OSRight: { key: "Meta" } });
          var v = {
              Esc: "Escape",
              Nonconvert: "NonConvert",
              Left: "ArrowLeft",
              Up: "ArrowUp",
              Right: "ArrowRight",
              Down: "ArrowDown",
              Del: "Delete",
              Menu: "ContextMenu",
              MediaNextTrack: "MediaTrackNext",
              MediaPreviousTrack: "MediaTrackPrevious",
              SelectMedia: "MediaSelect",
              HalfWidth: "Hankaku",
              FullWidth: "Zenkaku",
              RomanCharacters: "Romaji",
              Crsel: "CrSel",
              Exsel: "ExSel",
              Zoom: "ZoomToggle"
            },
            g = (function(e, t) {
              var i = {};
              return (
                Object.keys(e).forEach(function(n) {
                  var r = e[n];
                  t in r && (i[r[t]] = r);
                }),
                i
              );
            })(d, "code");
          try {
            var y = r && "location" in new KeyboardEvent("");
          } catch (e) {}
          "KeyboardEvent" in e &&
            "defineProperty" in Object &&
            (function() {
              function e(e, t, i) {
                t in e || Object.defineProperty(e, t, i);
              }
              if (
                (e(KeyboardEvent.prototype, "code", {
                  get: function() {
                    var e = n(this);
                    return e ? e.code : "";
                  }
                }),
                "key" in KeyboardEvent.prototype)
              ) {
                var t = Object.getOwnPropertyDescriptor(
                  KeyboardEvent.prototype,
                  "key"
                );
                Object.defineProperty(KeyboardEvent.prototype, "key", {
                  get: function() {
                    var e = t.get.call(this);
                    return v.hasOwnProperty(e) ? v[e] : e;
                  }
                });
              }
              e(KeyboardEvent.prototype, "key", {
                get: function() {
                  var e = n(this);
                  return e && "key" in e ? e.key : "Unidentified";
                }
              }),
                e(KeyboardEvent.prototype, "location", {
                  get: function() {
                    var e = n(this);
                    return e && "location" in e ? e.location : o;
                  }
                }),
                e(KeyboardEvent.prototype, "locale", {
                  get: function() {
                    return "";
                  }
                });
            })(),
            "queryKeyCap" in e.KeyboardEvent ||
              (e.KeyboardEvent.queryKeyCap = function(e, t) {
                if (((e = String(e)), !g.hasOwnProperty(e))) return "Undefined";
                if (t && "en-us" !== String(t).toLowerCase())
                  throw Error("Unsupported locale");
                var i = g[e];
                return i.keyCap || i.code || "Undefined";
              }),
            (e.identifyKey = function(e) {
              if (!("code" in e)) {
                var t = n(e);
                (e.code = t ? t.code : ""),
                  (e.key = t && "key" in t ? t.key : "Unidentified"),
                  (e.location =
                    "location" in e
                      ? e.location
                      : "keyLocation" in e
                      ? e.keyLocation
                      : t && "location" in t
                      ? t.location
                      : o),
                  (e.locale = "");
              }
            });
        })(window);
      },
      {}
    ],
    11: [
      function(e, t, i) {
        var n = function() {};
        (n.computeCentroids = function(e) {
          var t, i, n;
          for (t = 0, i = e.faces.length; t < i; t++)
            ((n = e.faces[t]).centroid = new THREE.Vector3(0, 0, 0)),
              n.centroid.add(e.vertices[n.a]),
              n.centroid.add(e.vertices[n.b]),
              n.centroid.add(e.vertices[n.c]),
              n.centroid.divideScalar(3);
        }),
          (n.roundNumber = function(e, t) {
            return Number(e.toFixed(t));
          }),
          (n.sample = function(e) {
            return e[Math.floor(Math.random() * e.length)];
          }),
          (n.mergeVertexIds = function(e, t) {
            var i = [];
            if (
              (e.forEach(function(e) {
                t.indexOf(e) >= 0 && i.push(e);
              }),
              i.length < 2)
            )
              return [];
            i.includes(e[0]) &&
              i.includes(e[e.length - 1]) &&
              e.push(e.shift()),
              i.includes(t[0]) &&
                i.includes(t[t.length - 1]) &&
                t.push(t.shift()),
              (i = []),
              e.forEach(function(e) {
                t.includes(e) && i.push(e);
              });
            for (var n = i[1], r = i[0], o = e.slice(); o[0] !== n; )
              o.push(o.shift());
            for (var s = 0, a = t.slice(); a[0] !== r; )
              if ((a.push(a.shift()), s++ > 10))
                throw new Error("Unexpected state");
            return a.shift(), a.pop(), (o = o.concat(a));
          }),
          (n.setPolygonCentroid = function(e, t) {
            var i = new THREE.Vector3(),
              n = t.vertices;
            e.vertexIds.forEach(function(e) {
              i.add(n[e]);
            }),
              i.divideScalar(e.vertexIds.length),
              e.centroid.copy(i);
          }),
          (n.cleanPolygon = function(e, t) {
            for (
              var i = [], n = t.vertices, r = 0;
              r < e.vertexIds.length;
              r++
            ) {
              var o,
                s,
                a,
                c = n[e.vertexIds[r]];
              0 === r
                ? ((o = e.vertexIds[1]),
                  (s = e.vertexIds[e.vertexIds.length - 1]))
                : r === e.vertexIds.length - 1
                ? ((o = e.vertexIds[0]),
                  (s = e.vertexIds[e.vertexIds.length - 2]))
                : ((o = e.vertexIds[r + 1]), (s = e.vertexIds[r - 1])),
                (a = n[s]);
              var l = n[o].clone().sub(c),
                h = a.clone().sub(c),
                u = l.angleTo(h);
              if (u > Math.PI - 0.01 && u < Math.PI + 0.01) {
                var d = [];
                e.neighbours.forEach(function(t) {
                  t.vertexIds.includes(e.vertexIds[r]) || d.push(t);
                }),
                  (e.neighbours = d);
              } else i.push(e.vertexIds[r]);
            }
            (e.vertexIds = i), this.setPolygonCentroid(e, t);
          }),
          (n.isConvex = function(e, t) {
            var i = t.vertices;
            if (e.vertexIds.length < 3) return !1;
            for (var n = !0, r = [], o = 0; o < e.vertexIds.length; o++) {
              var s,
                a,
                c = i[e.vertexIds[o]];
              0 === o
                ? ((s = i[e.vertexIds[1]]),
                  (a = i[e.vertexIds[e.vertexIds.length - 1]]))
                : o === e.vertexIds.length - 1
                ? ((s = i[e.vertexIds[0]]),
                  (a = i[e.vertexIds[e.vertexIds.length - 2]]))
                : ((s = i[e.vertexIds[o + 1]]), (a = i[e.vertexIds[o - 1]]));
              var l = s.clone().sub(c),
                h = a.clone().sub(c),
                u = l.angleTo(h);
              if (u === Math.PI || 0 === u) return !1;
              var d = l.cross(h).y;
              r.push(d);
            }
            return (
              r.forEach(function(e) {
                0 === e && (n = !1);
              }),
              r.forEach(
                r[0] > 0
                  ? function(e) {
                      e < 0 && (n = !1);
                    }
                  : function(e) {
                      e > 0 && (n = !1);
                    }
              ),
              n
            );
          }),
          (n.distanceToSquared = function(e, t) {
            var i = e.x - t.x,
              n = e.y - t.y,
              r = e.z - t.z;
            return i * i + n * n + r * r;
          }),
          (n.isPointInPoly = function(e, t) {
            for (var i = !1, n = -1, r = e.length, o = r - 1; ++n < r; o = n)
              ((e[n].z <= t.z && t.z < e[o].z) ||
                (e[o].z <= t.z && t.z < e[n].z)) &&
                t.x <
                  ((e[o].x - e[n].x) * (t.z - e[n].z)) / (e[o].z - e[n].z) +
                    e[n].x &&
                (i = !i);
            return i;
          }),
          (n.isVectorInPolygon = function(e, t, i) {
            var n = 1e5,
              r = -1e5,
              o = [];
            return (
              t.vertexIds.forEach(function(e) {
                (n = Math.min(i[e].y, n)),
                  (r = Math.max(i[e].y, r)),
                  o.push(i[e]);
              }),
              !!(e.y < r + 0.5 && e.y > n - 0.5 && this.isPointInPoly(o, e))
            );
          }),
          (n.triarea2 = function(e, t, i) {
            return (i.x - e.x) * (t.z - e.z) - (t.x - e.x) * (i.z - e.z);
          }),
          (n.vequal = function(e, t) {
            return this.distanceToSquared(e, t) < 1e-5;
          });
        var r = function(e) {
          (this.content = []), (this.scoreFunction = e);
        };
        (r.prototype.push = function(e) {
          this.content.push(e), this.sinkDown(this.content.length - 1);
        }),
          (r.prototype.pop = function() {
            var e = this.content[0],
              t = this.content.pop();
            return (
              this.content.length > 0 &&
                ((this.content[0] = t), this.bubbleUp(0)),
              e
            );
          }),
          (r.prototype.remove = function(e) {
            var t = this.content.indexOf(e),
              i = this.content.pop();
            t !== this.content.length - 1 &&
              ((this.content[t] = i),
              this.scoreFunction(i) < this.scoreFunction(e)
                ? this.sinkDown(t)
                : this.bubbleUp(t));
          }),
          (r.prototype.size = function() {
            return this.content.length;
          }),
          (r.prototype.rescoreElement = function(e) {
            this.sinkDown(this.content.indexOf(e));
          }),
          (r.prototype.sinkDown = function(e) {
            for (var t = this.content[e]; e > 0; ) {
              var i = ((e + 1) >> 1) - 1,
                n = this.content[i];
              if (!(this.scoreFunction(t) < this.scoreFunction(n))) break;
              (this.content[i] = t), (this.content[e] = n), (e = i);
            }
          }),
          (r.prototype.bubbleUp = function(e) {
            for (
              var t = this.content.length,
                i = this.content[e],
                n = this.scoreFunction(i);
              ;

            ) {
              var r = (e + 1) << 1,
                o = r - 1,
                s = null,
                a = void 0;
              if (
                (o < t &&
                  (a = this.scoreFunction(this.content[o])) < n &&
                  (s = o),
                r < t &&
                  this.scoreFunction(this.content[r]) < (null === s ? n : a) &&
                  (s = r),
                null === s)
              )
                break;
              (this.content[e] = this.content[s]),
                (this.content[s] = i),
                (e = s);
            }
          });
        var o = function() {};
        (o.init = function(e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            (i.f = 0),
              (i.g = 0),
              (i.h = 0),
              (i.cost = 1),
              (i.visited = !1),
              (i.closed = !1),
              (i.parent = null);
          }
        }),
          (o.cleanUp = function(e) {
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              delete i.f,
                delete i.g,
                delete i.h,
                delete i.cost,
                delete i.visited,
                delete i.closed,
                delete i.parent;
            }
          }),
          (o.heap = function() {
            return new r(function(e) {
              return e.f;
            });
          }),
          (o.search = function(e, t, i) {
            this.init(e);
            var n = this.heap();
            for (n.push(t); n.size() > 0; ) {
              var r = n.pop();
              if (r === i) {
                for (var o = r, s = []; o.parent; ) s.push(o), (o = o.parent);
                return this.cleanUp(s), s.reverse();
              }
              r.closed = !0;
              for (
                var a = this.neighbours(e, r), c = 0, l = a.length;
                c < l;
                c++
              ) {
                var h = a[c];
                if (!h.closed) {
                  var u = r.g + h.cost,
                    d = h.visited;
                  if (!d || u < h.g) {
                    if (
                      ((h.visited = !0),
                      (h.parent = r),
                      !h.centroid || !i.centroid)
                    )
                      throw new Error("Unexpected state");
                    (h.h = h.h || this.heuristic(h.centroid, i.centroid)),
                      (h.g = u),
                      (h.f = h.g + h.h),
                      d ? n.rescoreElement(h) : n.push(h);
                  }
                }
              }
            }
            return [];
          }),
          (o.heuristic = function(e, t) {
            return n.distanceToSquared(e, t);
          }),
          (o.neighbours = function(e, t) {
            for (var i = [], n = 0; n < t.neighbours.length; n++)
              i.push(e[t.neighbours[n]]);
            return i;
          });
        var s = 1,
          a = function() {};
        (a.buildZone = function(e) {
          var t = this,
            i = this._buildNavigationMesh(e),
            r = {};
          i.vertices.forEach(function(e) {
            (e.x = n.roundNumber(e.x, 2)),
              (e.y = n.roundNumber(e.y, 2)),
              (e.z = n.roundNumber(e.z, 2));
          }),
            (r.vertices = i.vertices);
          var o = this._buildPolygonGroups(i);
          r.groups = [];
          var s = function(e, t) {
            for (var i = 0; i < e.length; i++) if (t === e[i]) return i;
          };
          return (
            o.forEach(function(e) {
              var i = [];
              e.forEach(function(r) {
                var o = r.neighbours.map(function(t) {
                    return s(e, t);
                  }),
                  a = r.neighbours.map(function(e) {
                    return t._getSharedVerticesInOrder(r, e);
                  });
                (r.centroid.x = n.roundNumber(r.centroid.x, 2)),
                  (r.centroid.y = n.roundNumber(r.centroid.y, 2)),
                  (r.centroid.z = n.roundNumber(r.centroid.z, 2)),
                  i.push({
                    id: s(e, r),
                    neighbours: o,
                    vertexIds: r.vertexIds,
                    centroid: r.centroid,
                    portals: a
                  });
              }),
                r.groups.push(i);
            }),
            r
          );
        }),
          (a._buildNavigationMesh = function(e) {
            return (
              n.computeCentroids(e),
              e.mergeVertices(),
              this._buildPolygonsFromGeometry(e)
            );
          }),
          (a._buildPolygonGroups = function(e) {
            var t = [],
              i = 0,
              n = function(e) {
                e.neighbours.forEach(function(t) {
                  void 0 === t.group && ((t.group = e.group), n(t));
                });
              };
            return (
              e.polygons.forEach(function(e) {
                void 0 === e.group && ((e.group = i++), n(e)),
                  t[e.group] || (t[e.group] = []),
                  t[e.group].push(e);
              }),
              t
            );
          }),
          (a._buildPolygonNeighbours = function(e, t, i) {
            var n = new Set(),
              r = i.get(e.vertexIds[0]),
              o = i.get(e.vertexIds[1]),
              s = i.get(e.vertexIds[2]);
            r.forEach(function(e) {
              (o.has(e) || s.has(e)) && n.add(t.polygons[e]);
            }),
              o.forEach(function(e) {
                s.has(e) && n.add(t.polygons[e]);
              }),
              (e.neighbours = Array.from(n));
          }),
          (a._buildPolygonsFromGeometry = function(e) {
            for (
              var t = this,
                i = [],
                n = e.vertices,
                r = e.faceVertexUvs,
                o = new Map(),
                a = 0;
              a < n.length;
              a++
            )
              o.set(a, new Set());
            e.faces.forEach(function(e) {
              i.push({
                id: s++,
                vertexIds: [e.a, e.b, e.c],
                centroid: e.centroid,
                normal: e.normal,
                neighbours: []
              }),
                o.get(e.a).add(i.length - 1),
                o.get(e.b).add(i.length - 1),
                o.get(e.c).add(i.length - 1);
            });
            var c = { polygons: i, vertices: n, faceVertexUvs: r };
            return (
              i.forEach(function(e) {
                t._buildPolygonNeighbours(e, c, o);
              }),
              c
            );
          }),
          (a._getSharedVerticesInOrder = function(e, t) {
            var i = e.vertexIds,
              n = t.vertexIds,
              r = new Set();
            if (
              (i.forEach(function(e) {
                n.includes(e) && r.add(e);
              }),
              r.size < 2)
            )
              return [];
            r.has(i[0]) && r.has(i[i.length - 1]) && i.push(i.shift()),
              r.has(n[0]) && r.has(n[n.length - 1]) && n.push(n.shift());
            var o = [];
            return (
              i.forEach(function(e) {
                n.includes(e) && o.push(e);
              }),
              o
            );
          });
        var c = function() {
          this.portals = [];
        };
        (c.prototype.push = function(e, t) {
          void 0 === t && (t = e), this.portals.push({ left: e, right: t });
        }),
          (c.prototype.stringPull = function() {
            var e,
              t,
              i,
              r = this.portals,
              o = [],
              s = 0,
              a = 0,
              c = 0;
            (t = r[0].left), (i = r[0].right), o.push((e = r[0].left));
            for (var l = 1; l < r.length; l++) {
              var h = r[l].left,
                u = r[l].right;
              if (n.triarea2(e, i, u) <= 0) {
                if (!(n.vequal(e, i) || n.triarea2(e, t, u) > 0)) {
                  o.push(t),
                    (t = e = t),
                    (i = e),
                    (a = s = a),
                    (c = s),
                    (l = s);
                  continue;
                }
                (i = u), (c = l);
              }
              if (n.triarea2(e, t, h) >= 0) {
                if (!(n.vequal(e, t) || n.triarea2(e, i, h) < 0)) {
                  o.push(i),
                    (t = e = i),
                    (i = e),
                    (a = s = c),
                    (c = s),
                    (l = s);
                  continue;
                }
                (t = h), (a = l);
              }
            }
            return (
              (0 !== o.length &&
                n.vequal(o[o.length - 1], r[r.length - 1].left)) ||
                o.push(r[r.length - 1].left),
              (this.path = o),
              o
            );
          });
        var l,
          h,
          u,
          d,
          p,
          f,
          m = function() {
            this.zones = {};
          };
        (m.createZone = function(e) {
          return a.buildZone(e);
        }),
          (m.prototype.setZoneData = function(e, t) {
            this.zones[e] = t;
          }),
          (m.prototype.getGroup = function(e, t) {
            if (!this.zones[e]) return null;
            var i = null,
              r = Math.pow(50, 2);
            return (
              this.zones[e].groups.forEach(function(e, o) {
                e.forEach(function(e) {
                  var s = n.distanceToSquared(e.centroid, t);
                  s < r && ((i = o), (r = s));
                });
              }),
              i
            );
          }),
          (m.prototype.getRandomNode = function(e, t, i, r) {
            if (!this.zones[e]) return new THREE.Vector3();
            (i = i || null), (r = r || 0);
            var o = [];
            return (
              this.zones[e].groups[t].forEach(function(e) {
                i && r
                  ? n.distanceToSquared(i, e.centroid) < r * r &&
                    o.push(e.centroid)
                  : o.push(e.centroid);
              }),
              n.sample(o) || new THREE.Vector3()
            );
          }),
          (m.prototype.getClosestNode = function(e, t, i, r) {
            void 0 === r && (r = !1);
            var o = this.zones[t].vertices,
              s = null,
              a = 1 / 0;
            return (
              this.zones[t].groups[i].forEach(function(t) {
                var i = n.distanceToSquared(t.centroid, e);
                i < a &&
                  (!r || n.isVectorInPolygon(e, t, o)) &&
                  ((s = t), (a = i));
              }),
              s
            );
          }),
          (m.prototype.findPath = function(e, t, i, n) {
            var r = this.zones[i].groups[n],
              s = this.zones[i].vertices,
              a = this.getClosestNode(e, i, n),
              l = this.getClosestNode(t, i, n, !0);
            if (!a || !l) return null;
            var h = o.search(r, a, l),
              u = function(e, t) {
                for (var i = 0; i < e.neighbours.length; i++)
                  if (e.neighbours[i] === t.id) return e.portals[i];
              },
              d = new c();
            d.push(e);
            for (var p = 0; p < h.length; p++) {
              var f = h[p + 1];
              if (f) {
                var m = u(h[p], f);
                d.push(s[m[0]], s[m[1]]);
              }
            }
            d.push(t), d.stringPull();
            var v = d.path.map(function(e) {
              return new THREE.Vector3(e.x, e.y, e.z);
            });
            return v.shift(), v;
          }),
          (m.prototype.clampStep =
            ((u = new THREE.Vector3()),
            (d = new THREE.Plane()),
            (p = new THREE.Triangle()),
            (f = new THREE.Vector3()),
            function(e, t, i, n, r, o) {
              var s = this.zones[n].vertices,
                a = this.zones[n].groups[r],
                c = [i],
                m = {};
              (m[i.id] = 0),
                (l = void 0),
                f.set(0, 0, 0),
                (h = 1 / 0),
                d.setFromCoplanarPoints(
                  s[i.vertexIds[0]],
                  s[i.vertexIds[1]],
                  s[i.vertexIds[2]]
                ),
                d.projectPoint(t, u),
                t.copy(u);
              for (var v = c.pop(); v; v = c.pop()) {
                p.set(s[v.vertexIds[0]], s[v.vertexIds[1]], s[v.vertexIds[2]]),
                  p.closestPointToPoint(t, u),
                  u.distanceToSquared(t) < h &&
                    ((l = v), f.copy(u), (h = u.distanceToSquared(t)));
                var g = m[v];
                if (!(g > 2))
                  for (var y = 0; y < v.neighbours.length; y++) {
                    var E = a[v.neighbours[y]];
                    E.id in m || (c.push(E), (m[E.id] = g + 1));
                  }
              }
              return o.copy(f), l;
            })),
          (i.Pathfinding = m);
      },
      {}
    ],
    12: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("checkpoint-controls", {
          schema: {
            enabled: { default: !0 },
            mode: { default: "teleport", oneOf: ["teleport", "animate"] },
            animateSpeed: { default: 3 }
          },
          init: function() {
            (this.active = !0),
              (this.checkpoint = null),
              (this.isNavMeshConstrained = !1),
              (this.offset = new THREE.Vector3()),
              (this.position = new THREE.Vector3()),
              (this.targetPosition = new THREE.Vector3());
          },
          play: function() {
            this.active = !0;
          },
          pause: function() {
            this.active = !1;
          },
          setCheckpoint: function(e) {
            var t = this.el;
            this.active &&
              this.checkpoint !== e &&
              (this.checkpoint &&
                t.emit("navigation-end", { checkpoint: this.checkpoint }),
              (this.checkpoint = e),
              this.sync(),
              this.position.distanceTo(this.targetPosition) < 0.1
                ? (this.checkpoint = null)
                : (t.emit("navigation-start", { checkpoint: e }),
                  "teleport" === this.data.mode &&
                    (this.el.setAttribute("position", this.targetPosition),
                    (this.checkpoint = null),
                    t.emit("navigation-end", { checkpoint: e }),
                    t.components["movement-controls"].updateNavLocation())));
          },
          isVelocityActive: function() {
            return !(!this.active || !this.checkpoint);
          },
          getVelocity: function() {
            if (this.active) {
              var e = this.data,
                t = this.offset,
                i = this.position,
                n = this.targetPosition,
                r = this.checkpoint;
              return (
                this.sync(),
                i.distanceTo(n) < 0.1
                  ? ((this.checkpoint = null),
                    this.el.emit("navigation-end", { checkpoint: r }),
                    t.set(0, 0, 0))
                  : (t.setLength(e.animateSpeed), t)
              );
            }
          },
          sync: function() {
            var e = this.offset,
              t = this.position,
              i = this.targetPosition;
            t.copy(this.el.getAttribute("position")),
              this.checkpoint.object3D.getWorldPosition(i),
              i.add(this.checkpoint.components.checkpoint.getOffset()),
              e.copy(i).sub(t);
          }
        });
      },
      {}
    ],
    13: [
      function(e, t, i) {
        "use strict";
        var n = e("../../lib/GamepadButton"),
          r = e("../../lib/GamepadButtonEvent");
        t.exports = AFRAME.registerComponent("gamepad-controls", {
          GamepadButton: n,
          schema: {
            controller: { default: 0, oneOf: [0, 1, 2, 3] },
            enabled: { default: !0 },
            debug: { default: !1 },
            camera: { default: "[camera]", type: "selector" },
            rotationSensitivity: { default: 2 }
          },
          init: function() {
            var e = this.el.sceneEl;
            (this.prevTime = window.performance.now()), (this.buttons = {});
            var t = this.el.object3D.rotation;
            (this.pitch = new THREE.Object3D()),
              (this.pitch.rotation.x = THREE.Math.degToRad(t.x)),
              (this.yaw = new THREE.Object3D()),
              (this.yaw.position.y = 10),
              (this.yaw.rotation.y = THREE.Math.degToRad(t.y)),
              this.yaw.add(this.pitch),
              e.addBehavior(this);
          },
          update: function() {
            this.tick();
          },
          tick: function(e, t) {
            this.updateButtonState(), this.updateRotation(t);
          },
          remove: function() {},
          isVelocityActive: function() {
            if (!this.data.enabled || !this.isConnected()) return !1;
            var e = this.getDpad(),
              t = this.getJoystick(0),
              i = e.x || t.x,
              n = e.y || t.y;
            return Math.abs(i) > 0.2 || Math.abs(n) > 0.2;
          },
          getVelocityDelta: function() {
            var e = this.getDpad(),
              t = this.getJoystick(0),
              i = e.x || t.x,
              n = e.y || t.y,
              r = new THREE.Vector3();
            return (
              Math.abs(i) > 0.2 && (r.x += i),
              Math.abs(n) > 0.2 && (r.z += n),
              r
            );
          },
          isRotationActive: function() {
            if (!this.data.enabled || !this.isConnected()) return !1;
            var e = this.getJoystick(1);
            return Math.abs(e.x) > 0.2 || Math.abs(e.y) > 0.2;
          },
          updateRotation: function(e) {
            if (this.isRotationActive()) {
              var t = this.data,
                i = this.yaw,
                n = this.pitch,
                r = t.camera.components["look-controls"],
                o = r && r.pitchObject && r.yawObject;
              o &&
                (n.rotation.copy(r.pitchObject.rotation),
                i.rotation.copy(r.yawObject.rotation));
              var s = this.getJoystick(1);
              Math.abs(s.x) <= 0.2 && (s.x = 0),
                Math.abs(s.y) <= 0.2 && (s.y = 0),
                s.multiplyScalar((t.rotationSensitivity * e) / 1e3),
                (i.rotation.y -= s.x),
                (n.rotation.x -= s.y),
                (n.rotation.x = Math.max(
                  -Math.PI / 2,
                  Math.min(Math.PI / 2, n.rotation.x)
                )),
                t.camera.object3D.rotation.set(n.rotation.x, i.rotation.y, 0),
                o &&
                  (r.pitchObject.rotation.copy(n.rotation),
                  r.yawObject.rotation.copy(i.rotation));
            }
          },
          updateButtonState: function() {
            var e = this.getGamepad();
            if (this.data.enabled && e)
              for (var t = 0; t < e.buttons.length; t++)
                e.buttons[t].pressed && !this.buttons[t]
                  ? this.emit(new r("gamepadbuttondown", t, e.buttons[t]))
                  : !e.buttons[t].pressed &&
                    this.buttons[t] &&
                    this.emit(new r("gamepadbuttonup", t, e.buttons[t])),
                  (this.buttons[t] = e.buttons[t].pressed);
            else Object.keys(this.buttons) && (this.buttons = {});
          },
          emit: function(e) {
            this.el.emit(e.type, e),
              this.el.emit(e.type + ":" + e.index, new r(e.type, e.index, e));
          },
          getGamepad: function() {
            var e =
                navigator.getGamepads &&
                navigator.getGamepads()[this.data.controller],
              t = this.el.sceneEl.components["proxy-controls"];
            return (
              (t && t.isConnected() && t.getGamepad(this.data.controller)) || e
            );
          },
          getButton: function(e) {
            return this.getGamepad().buttons[e];
          },
          getAxis: function(e) {
            return this.getGamepad().axes[e];
          },
          getJoystick: function(e) {
            var t = this.getGamepad();
            switch (e) {
              case 0:
                return new THREE.Vector2(t.axes[0], t.axes[1]);
              case 1:
                return new THREE.Vector2(t.axes[2], t.axes[3]);
              default:
                throw new Error('Unexpected joystick index "%d".', e);
            }
          },
          getDpad: function() {
            var e = this.getGamepad();
            return e.buttons[n.DPAD_RIGHT]
              ? new THREE.Vector2(
                  (e.buttons[n.DPAD_RIGHT].pressed ? 1 : 0) +
                    (e.buttons[n.DPAD_LEFT].pressed ? -1 : 0),
                  (e.buttons[n.DPAD_UP].pressed ? -1 : 0) +
                    (e.buttons[n.DPAD_DOWN].pressed ? 1 : 0)
                )
              : new THREE.Vector2();
          },
          isConnected: function() {
            var e = this.getGamepad();
            return !(!e || !e.connected);
          },
          getID: function() {
            return this.getGamepad().id;
          }
        });
      },
      { "../../lib/GamepadButton": 5, "../../lib/GamepadButtonEvent": 6 }
    ],
    14: [
      function(e, t, i) {
        "use strict";
        e("./checkpoint-controls"),
          e("./gamepad-controls"),
          e("./keyboard-controls"),
          e("./touch-controls"),
          e("./movement-controls"),
          e("./trackpad-controls");
      },
      {
        "./checkpoint-controls": 12,
        "./gamepad-controls": 13,
        "./keyboard-controls": 15,
        "./movement-controls": 16,
        "./touch-controls": 17,
        "./trackpad-controls": 18
      }
    ],
    15: [
      function(e, t, i) {
        "use strict";
        e("../../lib/keyboard.polyfill");
        var n = window.KeyboardEvent;
        t.exports = AFRAME.registerComponent("keyboard-controls", {
          schema: { enabled: { default: !0 }, debug: { default: !1 } },
          init: function() {
            (this.dVelocity = new THREE.Vector3()),
              (this.localKeys = {}),
              (this.listeners = {
                keydown: this.onKeyDown.bind(this),
                keyup: this.onKeyUp.bind(this),
                blur: this.onBlur.bind(this)
              }),
              this.attachEventListeners();
          },
          isVelocityActive: function() {
            return this.data.enabled && !!Object.keys(this.getKeys()).length;
          },
          getVelocityDelta: function() {
            var e = this.data,
              t = this.getKeys();
            return (
              this.dVelocity.set(0, 0, 0),
              e.enabled &&
                ((t.KeyW || t.ArrowUp) && (this.dVelocity.z -= 1),
                (t.KeyA || t.ArrowLeft) && (this.dVelocity.x -= 1),
                (t.KeyS || t.ArrowDown) && (this.dVelocity.z += 1),
                (t.KeyD || t.ArrowRight) && (this.dVelocity.x += 1)),
              this.dVelocity.clone()
            );
          },
          play: function() {
            this.attachEventListeners();
          },
          pause: function() {
            this.removeEventListeners();
          },
          remove: function() {
            this.pause();
          },
          attachEventListeners: function() {
            window.addEventListener("keydown", this.listeners.keydown, !1),
              window.addEventListener("keyup", this.listeners.keyup, !1),
              window.addEventListener("blur", this.listeners.blur, !1);
          },
          removeEventListeners: function() {
            window.removeEventListener("keydown", this.listeners.keydown),
              window.removeEventListener("keyup", this.listeners.keyup),
              window.removeEventListener("blur", this.listeners.blur);
          },
          onKeyDown: function(e) {
            AFRAME.utils.shouldCaptureKeyEvent(e) &&
              ((this.localKeys[e.code] = !0), this.emit(e));
          },
          onKeyUp: function(e) {
            AFRAME.utils.shouldCaptureKeyEvent(e) &&
              (delete this.localKeys[e.code], this.emit(e));
          },
          onBlur: function() {
            for (var e in this.localKeys)
              this.localKeys.hasOwnProperty(e) && delete this.localKeys[e];
          },
          emit: function(e) {
            "__keyboard-controls-proxy" in e && this.el.emit(e.type, e),
              this.el.emit(e.type + ":" + e.code, new n(e.type, e)),
              this.data.debug && console.log(e.type + ":" + e.code);
          },
          isPressed: function(e) {
            return e in this.getKeys();
          },
          getKeys: function() {
            return this.isProxied()
              ? this.el.sceneEl.components["proxy-controls"].getKeyboard()
              : this.localKeys;
          },
          isProxied: function() {
            var e = this.el.sceneEl.components["proxy-controls"];
            return e && e.isConnected();
          }
        });
      },
      { "../../lib/keyboard.polyfill": 10 }
    ],
    16: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("movement-controls", {
          dependencies: ["rotation"],
          schema: {
            enabled: { default: !0 },
            controls: { default: ["gamepad", "trackpad", "keyboard", "touch"] },
            speed: { default: 0.3, min: 0 },
            fly: { default: !1 },
            constrainToNavMesh: { default: !1 },
            camera: {
              default: "[movement-controls] [camera]",
              type: "selector"
            }
          },
          init: function() {
            var e = this.el;
            (this.velocityCtrl = null),
              (this.velocity = new THREE.Vector3()),
              (this.heading = new THREE.Quaternion()),
              (this.navGroup = null),
              (this.navNode = null),
              e.sceneEl.hasLoaded
                ? this.injectControls()
                : e.sceneEl.addEventListener(
                    "loaded",
                    this.injectControls.bind(this)
                  );
          },
          update: function(e) {
            var t = this.el,
              i = this.data,
              n = t.sceneEl.systems.nav;
            t.sceneEl.hasLoaded && this.injectControls(),
              n &&
                i.constrainToNavMesh !== e.constrainToNavMesh &&
                (i.constrainToNavMesh ? n.addAgent(this) : n.removeAgent(this));
          },
          injectControls: function() {
            for (var e, t = this.data, i = 0; i < t.controls.length; i++)
              (e = t.controls[i] + "-controls"),
                this.el.components[e] || this.el.setAttribute(e, "");
          },
          updateNavLocation: function() {
            (this.navGroup = null), (this.navNode = null);
          },
          tick: (function() {
            var e = new THREE.Vector3(),
              t = new THREE.Vector3(),
              i = new THREE.Vector3();
            return function(n, r) {
              if (r) {
                var o = this.el,
                  s = this.data;
                if (s.enabled) {
                  this.updateVelocityCtrl();
                  var a = this.velocityCtrl,
                    c = this.velocity;
                  if (a)
                    if (
                      (r / 1e3 > 0.2 ? c.set(0, 0, 0) : this.updateVelocity(r),
                      s.constrainToNavMesh && !1 !== a.isNavMeshConstrained)
                    ) {
                      if (c.lengthSq() < 1e-5) return;
                      e.copy(o.object3D.position),
                        t
                          .copy(c)
                          .multiplyScalar(r / 1e3)
                          .add(e);
                      var l = o.sceneEl.systems.nav;
                      (this.navGroup =
                        null === this.navGroup ? l.getGroup(e) : this.navGroup),
                        (this.navNode =
                          this.navNode || l.getNode(e, this.navGroup)),
                        (this.navNode = l.clampStep(
                          e,
                          t,
                          this.navGroup,
                          this.navNode,
                          i
                        )),
                        o.object3D.position.copy(i);
                    } else
                      o.hasAttribute("velocity")
                        ? o.setAttribute("velocity", c)
                        : ((o.object3D.position.x += (c.x * r) / 1e3),
                          (o.object3D.position.y += (c.y * r) / 1e3),
                          (o.object3D.position.z += (c.z * r) / 1e3));
                }
              }
            };
          })(),
          updateVelocityCtrl: function() {
            var e = this.data;
            if (e.enabled) {
              for (var t = 0, i = e.controls.length; t < i; t++) {
                var n = this.el.components[e.controls[t] + "-controls"];
                if (n && n.isVelocityActive())
                  return void (this.velocityCtrl = n);
              }
              this.velocityCtrl = null;
            }
          },
          updateVelocity: (function() {
            var e = new THREE.Vector2(),
              t = new THREE.Quaternion();
            return function(i) {
              var n = void 0,
                r = this.el,
                o = this.velocityCtrl,
                s = this.velocity,
                a = this.data;
              if (o) {
                if (!o.getVelocityDelta) {
                  if (o.getVelocity) return void s.copy(o.getVelocity());
                  if (o.getPositionDelta)
                    return void s.copy(
                      o.getPositionDelta(i).multiplyScalar(1e3 / i)
                    );
                  throw new Error("Incompatible movement controls: ", o);
                }
                n = o.getVelocityDelta(i);
              }
              if (
                (r.hasAttribute("velocity") &&
                  !a.constrainToNavMesh &&
                  s.copy(this.el.getAttribute("velocity")),
                n && a.enabled)
              ) {
                var c = a.camera;
                t.copy(c.object3D.quaternion),
                  t.premultiply(r.object3D.quaternion),
                  n.applyQuaternion(t);
                var l = n.length();
                a.fly
                  ? (s.copy(n), s.multiplyScalar(16.66667 * this.data.speed))
                  : (e.set(n.x, n.z),
                    e.setLength(l * this.data.speed * 16.66667),
                    (s.x = e.x),
                    (s.z = e.y));
              }
            };
          })()
        });
      },
      {}
    ],
    17: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("touch-controls", {
          schema: { enabled: { default: !0 }, reverseEnabled: { default: !0 } },
          init: function() {
            (this.dVelocity = new THREE.Vector3()),
              this.bindMethods(),
              (this.direction = 0);
          },
          play: function() {
            this.addEventListeners();
          },
          pause: function() {
            this.removeEventListeners(), this.dVelocity.set(0, 0, 0);
          },
          remove: function() {
            this.pause();
          },
          addEventListeners: function() {
            var e = this.el.sceneEl,
              t = e.canvas;
            t
              ? (t.addEventListener("touchstart", this.onTouchStart),
                t.addEventListener("touchend", this.onTouchEnd))
              : e.addEventListener(
                  "render-target-loaded",
                  this.addEventListeners.bind(this)
                );
          },
          removeEventListeners: function() {
            var e = this.el.sceneEl && this.el.sceneEl.canvas;
            e &&
              (e.removeEventListener("touchstart", this.onTouchStart),
              e.removeEventListener("touchend", this.onTouchEnd));
          },
          isVelocityActive: function() {
            return this.data.enabled && !!this.direction;
          },
          getVelocityDelta: function() {
            return (this.dVelocity.z = this.direction), this.dVelocity.clone();
          },
          bindMethods: function() {
            (this.onTouchStart = this.onTouchStart.bind(this)),
              (this.onTouchEnd = this.onTouchEnd.bind(this));
          },
          onTouchStart: function(e) {
            (this.direction = -1),
              this.data.reverseEnabled &&
                2 === e.touches.length &&
                (this.direction = 1),
              e.preventDefault();
          },
          onTouchEnd: function(e) {
            (this.direction = 0), e.preventDefault();
          }
        });
      },
      {}
    ],
    18: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("trackpad-controls", {
          schema: {
            enabled: { default: !0 },
            enableNegX: { default: !0 },
            enablePosX: { default: !0 },
            enableNegZ: { default: !0 },
            enablePosZ: { default: !0 },
            mode: { default: "touch", oneOf: ["swipe", "touch", "press"] }
          },
          init: function() {
            (this.dVelocity = new THREE.Vector3()),
              (this.zVel = 0),
              (this.xVel = 0),
              this.bindMethods();
          },
          play: function() {
            this.addEventListeners();
          },
          pause: function() {
            this.removeEventListeners(), this.dVelocity.set(0, 0, 0);
          },
          remove: function() {
            this.pause();
          },
          addEventListeners: function() {
            var e = this.data,
              t = this.el.sceneEl;
            switch ((t.addEventListener("axismove", this.onAxisMove), e.mode)) {
              case "swipe":
              case "touch":
                t.addEventListener("trackpadtouchstart", this.onTouchStart),
                  t.addEventListener("trackpadtouchend", this.onTouchEnd);
                break;
              case "press":
                t.addEventListener("trackpaddown", this.onTouchStart),
                  t.addEventListener("trackpadup", this.onTouchEnd);
            }
          },
          removeEventListeners: function() {
            var e = this.el.sceneEl;
            e.removeEventListener("axismove", this.onAxisMove),
              e.removeEventListener("trackpadtouchstart", this.onTouchStart),
              e.removeEventListener("trackpadtouchend", this.onTouchEnd),
              e.removeEventListener("trackpaddown", this.onTouchStart),
              e.removeEventListener("trackpadup", this.onTouchEnd);
          },
          isVelocityActive: function() {
            return this.data.enabled && this.isMoving;
          },
          getVelocityDelta: function() {
            return (
              (this.dVelocity.z = this.isMoving ? -this.zVel : 1),
              (this.dVelocity.x = this.isMoving ? this.xVel : 1),
              this.dVelocity.clone()
            );
          },
          bindMethods: function() {
            (this.onTouchStart = this.onTouchStart.bind(this)),
              (this.onTouchEnd = this.onTouchEnd.bind(this)),
              (this.onAxisMove = this.onAxisMove.bind(this));
          },
          onTouchStart: function(e) {
            switch (this.data.mode) {
              case "swipe":
                (this.canRecordAxis = !0), (this.startingAxisData = []);
                break;
              case "touch":
              case "press":
                this.isMoving = !0;
            }
            e.preventDefault();
          },
          onTouchEnd: function(e) {
            "swipe" == this.data.mode && (this.startingAxisData = []),
              (this.isMoving = !1),
              e.preventDefault();
          },
          onAxisMove: function(e) {
            switch (this.data.mode) {
              case "swipe":
                return this.handleSwipeAxis(e);
              case "touch":
              case "press":
                return this.handleTouchAxis(e);
            }
          },
          handleSwipeAxis: function(e) {
            var t = this.data,
              i = e.detail.axis;
            if (
              (0 === this.startingAxisData.length &&
                this.canRecordAxis &&
                ((this.canRecordAxis = !1),
                (this.startingAxisData[0] = i[0]),
                (this.startingAxisData[1] = i[1])),
              this.startingAxisData.length > 0)
            ) {
              var n = 0,
                r = 0;
              t.enableNegX && i[0] < this.startingAxisData[0] && (n = -1),
                t.enablePosX && i[0] > this.startingAxisData[0] && (n = 1),
                t.enablePosZ && i[1] > this.startingAxisData[1] && (r = -1),
                t.enableNegZ && i[1] < this.startingAxisData[1] && (r = 1);
              var o = Math.abs(this.startingAxisData[1] - i[1]);
              Math.abs(this.startingAxisData[0] - i[0]) > o
                ? ((this.zVel = 0), (this.xVel = n), (this.isMoving = !0))
                : ((this.xVel = 0), (this.zVel = r), (this.isMoving = !0));
            }
          },
          handleTouchAxis: function(e) {
            var t = this.data,
              i = e.detail.axis,
              n = 0,
              r = 0;
            t.enableNegX && i[0] < 0 && (n = -1),
              t.enablePosX && i[0] > 0 && (n = 1),
              t.enablePosZ && i[1] > 0 && (r = -1),
              t.enableNegZ && i[1] < 0 && (r = 1),
              Math.abs(i[0]) > Math.abs(i[1])
                ? ((this.zVel = 0), (this.xVel = n))
                : ((this.xVel = 0), (this.zVel = r));
          }
        });
      },
      {}
    ],
    19: [
      function(e, t, i) {
        "use strict";
        function n(e) {
          return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
        }
        var r = {
          once: THREE.LoopOnce,
          repeat: THREE.LoopRepeat,
          pingpong: THREE.LoopPingPong
        };
        t.exports = AFRAME.registerComponent("animation-mixer", {
          schema: {
            clip: { default: "*" },
            duration: { default: 0 },
            clampWhenFinished: { default: !1, type: "boolean" },
            crossFadeDuration: { default: 0 },
            loop: { default: "repeat", oneOf: Object.keys(r) },
            repetitions: { default: 1 / 0, min: 0 },
            timeScale: { default: 1 }
          },
          init: function() {
            var e = this;
            (this.model = null), (this.mixer = null), (this.activeActions = []);
            var t = this.el.getObject3D("mesh");
            t
              ? this.load(t)
              : this.el.addEventListener("model-loaded", function(t) {
                  e.load(t.detail.model);
                });
          },
          load: function(e) {
            var t = this.el;
            (this.model = e),
              (this.mixer = new THREE.AnimationMixer(e)),
              this.mixer.addEventListener("loop", function(e) {
                t.emit("animation-loop", {
                  action: e.action,
                  loopDelta: e.loopDelta
                });
              }),
              this.mixer.addEventListener("finished", function(e) {
                t.emit("animation-finished", {
                  action: e.action,
                  direction: e.direction
                });
              }),
              this.data.clip && this.update({});
          },
          remove: function() {
            this.mixer && this.mixer.stopAllAction();
          },
          update: function(e) {
            if (e) {
              var t = this.data,
                i = AFRAME.utils.diff(t, e);
              if ("clip" in i)
                return this.stopAction(), void (t.clip && this.playAction());
              this.activeActions.forEach(function(e) {
                "duration" in i && t.duration && e.setDuration(t.duration),
                  "clampWhenFinished" in i &&
                    (e.clampWhenFinished = t.clampWhenFinished),
                  ("loop" in i || "repetitions" in i) &&
                    e.setLoop(r[t.loop], t.repetitions),
                  "timeScale" in i && e.setEffectiveTimeScale(t.timeScale);
              });
            }
          },
          stopAction: function() {
            for (var e = this.data, t = 0; t < this.activeActions.length; t++)
              e.crossFadeDuration
                ? this.activeActions[t].fadeOut(e.crossFadeDuration)
                : this.activeActions[t].stop();
            this.activeActions.length = 0;
          },
          playAction: function() {
            if (this.mixer) {
              var e = this.model,
                t = this.data,
                i = e.animations || (e.geometry || {}).animations || [];
              if (i.length)
                for (
                  var o,
                    s = (function(e) {
                      return new RegExp(
                        "^" +
                          e
                            .split(/\*+/)
                            .map(n)
                            .join(".*") +
                          "$"
                      );
                    })(t.clip),
                    a = 0;
                  (o = i[a]);
                  a++
                )
                  if (o.name.match(s)) {
                    var c = this.mixer.clipAction(o, e);
                    (c.enabled = !0),
                      (c.clampWhenFinished = t.clampWhenFinished),
                      t.duration && c.setDuration(t.duration),
                      1 !== t.timeScale && c.setEffectiveTimeScale(t.timeScale),
                      c
                        .setLoop(r[t.loop], t.repetitions)
                        .fadeIn(t.crossFadeDuration)
                        .play(),
                      this.activeActions.push(c);
                  }
            }
          },
          tick: function(e, t) {
            this.mixer && !isNaN(t) && this.mixer.update(t / 1e3);
          }
        });
      },
      {}
    ],
    20: [
      function(e, t, i) {
        "use strict";
        (THREE.ColladaLoader = e("../../lib/ColladaLoader")),
          (t.exports.Component = AFRAME.registerComponent(
            "collada-model-legacy",
            {
              schema: { type: "asset" },
              init: function() {
                (this.model = null), (this.loader = new THREE.ColladaLoader());
              },
              update: function() {
                var e = this,
                  t = this.el,
                  i = this.data,
                  n = this.el.sceneEl.systems.renderer;
                i &&
                  (this.remove(),
                  this.loader.load(i, function(i) {
                    (e.model = i.scene),
                      e.model.traverse(function(e) {
                        if (e.isMesh) {
                          var t = e.material;
                          t.color && n.applyColorCorrection(t.color),
                            t.map && n.applyColorCorrection(t.map),
                            t.emissive && n.applyColorCorrection(t.emissive),
                            t.emissiveMap &&
                              n.applyColorCorrection(t.emissiveMap);
                        }
                      }),
                      t.setObject3D("mesh", e.model),
                      t.emit("model-loaded", {
                        format: "collada",
                        model: e.model
                      });
                  }));
              },
              remove: function() {
                this.model && this.el.removeObject3D("mesh");
              }
            }
          ));
      },
      { "../../lib/ColladaLoader": 3 }
    ],
    21: [
      function(e, t, i) {
        "use strict";
        (THREE.FBXLoader = e("../../lib/FBXLoader")),
          (t.exports = AFRAME.registerComponent("fbx-model", {
            schema: { src: { type: "asset" }, crossorigin: { default: "" } },
            init: function() {
              this.model = null;
            },
            update: function() {
              var e = this.data;
              if (e.src) {
                this.remove();
                var t = new THREE.FBXLoader();
                e.crossorigin && t.setCrossOrigin(e.crossorigin),
                  t.load(e.src, this.load.bind(this));
              }
            },
            load: function(e) {
              (this.model = e),
                this.el.setObject3D("mesh", e),
                this.el.emit("model-loaded", { format: "fbx", model: e });
            },
            remove: function() {
              this.model && this.el.removeObject3D("mesh");
            }
          }));
      },
      { "../../lib/FBXLoader": 4 }
    ],
    22: [
      function(e, t, i) {
        "use strict";
        var n = e("../../lib/fetch-script")(),
          r = (function() {
            var e = void 0;
            return function() {
              return (e =
                e ||
                n(
                  "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r86/examples/js/loaders/GLTFLoader.js"
                ));
            };
          })();
        t.exports = AFRAME.registerComponent("gltf-model-legacy", {
          schema: { type: "model" },
          init: function() {
            var e = this;
            (this.model = null),
              (this.loader = null),
              (this.loaderPromise = r().then(function() {
                (e.loader = new THREE.GLTFLoader()),
                  e.loader.setCrossOrigin("Anonymous");
              }));
          },
          update: function() {
            var e = this,
              t = this,
              i = this.el,
              n = this.data;
            n &&
              (this.remove(),
              this.loaderPromise.then(function() {
                e.loader.load(n, function(e) {
                  (t.model = e.scene),
                    (t.model.animations = e.animations),
                    i.setObject3D("mesh", t.model),
                    i.emit("model-loaded", { format: "gltf", model: t.model });
                });
              }));
          },
          remove: function() {
            this.model && this.el.removeObject3D("mesh");
          }
        });
      },
      { "../../lib/fetch-script": 8 }
    ],
    23: [
      function(e, t, i) {
        "use strict";
        e("./animation-mixer"),
          e("./collada-model-legacy"),
          e("./fbx-model"),
          e("./gltf-model-legacy"),
          e("./object-model");
      },
      {
        "./animation-mixer": 19,
        "./collada-model-legacy": 20,
        "./fbx-model": 21,
        "./gltf-model-legacy": 22,
        "./object-model": 24
      }
    ],
    24: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("object-model", {
          schema: { src: { type: "asset" }, crossorigin: { default: "" } },
          init: function() {
            this.model = null;
          },
          update: function() {
            var e = this,
              t = void 0,
              i = this.data;
            i.src &&
              (this.remove(),
              (t = new THREE.ObjectLoader()),
              i.crossorigin && t.setCrossOrigin(i.crossorigin),
              t.load(i.src, function(t) {
                t.traverse(function(e) {
                  e instanceof THREE.SkinnedMesh &&
                    e.material &&
                    (e.material.skinning = !!(
                      (e.geometry && e.geometry.bones) ||
                      []
                    ).length);
                }),
                  e.load(t);
              }));
          },
          load: function(e) {
            (this.model = e),
              this.el.setObject3D("mesh", e),
              this.el.emit("model-loaded", { format: "json", model: e });
          },
          remove: function() {
            this.model && this.el.removeObject3D("mesh");
          }
        });
      },
      {}
    ],
    25: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("checkpoint", {
          schema: { offset: { default: { x: 0, y: 0, z: 0 }, type: "vec3" } },
          init: function() {
            (this.active = !1),
              (this.targetEl = null),
              (this.fire = this.fire.bind(this)),
              (this.offset = new THREE.Vector3());
          },
          update: function() {
            this.offset.copy(this.data.offset);
          },
          play: function() {
            this.el.addEventListener("click", this.fire);
          },
          pause: function() {
            this.el.removeEventListener("click", this.fire);
          },
          remove: function() {
            this.pause();
          },
          fire: function() {
            var e = this.el.sceneEl.querySelector("[checkpoint-controls]");
            if (!e)
              throw new Error("No `checkpoint-controls` component found.");
            e.components["checkpoint-controls"].setCheckpoint(this.el);
          },
          getOffset: function() {
            return this.offset.copy(this.data.offset);
          }
        });
      },
      {}
    ],
    26: [
      function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
          e &&
            ((t = t || []),
            e.traverse(function(e) {
              if (e.isMesh) {
                (function(e) {
                  return e
                    ? Array.isArray(e)
                      ? e
                      : e.materials
                      ? e.materials
                      : [e]
                    : [];
                })(e.material).forEach(function(e) {
                  (!e || "envMap" in e) &&
                    ((t.length && -1 === t.indexOf(e.name)) ||
                      ((e.envMap = i),
                      (e.reflectivity = n),
                      (e.needsUpdate = !0)));
                });
              }
            }));
        }
        t.exports = AFRAME.registerComponent("cube-env-map", {
          multiple: !0,
          schema: {
            path: { default: "" },
            extension: { default: "jpg", oneOf: ["jpg", "png"] },
            format: {
              default: "RGBFormat",
              oneOf: ["RGBFormat", "RGBAFormat"]
            },
            enableBackground: { default: !1 },
            reflectivity: { default: 1, min: 0, max: 1 },
            materials: { default: [] }
          },
          init: function() {
            var e = this,
              t = this.data;
            (this.texture = new THREE.CubeTextureLoader().load([
              t.path + "posx." + t.extension,
              t.path + "negx." + t.extension,
              t.path + "posy." + t.extension,
              t.path + "negy." + t.extension,
              t.path + "posz." + t.extension,
              t.path + "negz." + t.extension
            ])),
              (this.texture.format = THREE[t.format]),
              (this.object3dsetHandler = function() {
                var t = e.el.getObject3D("mesh"),
                  i = e.data;
                n(t, i.materials, e.texture, i.reflectivity);
              }),
              this.el.addEventListener("object3dset", this.object3dsetHandler);
          },
          update: function(e) {
            var t = this.data,
              i = this.el.getObject3D("mesh"),
              r = [],
              o = [];
            if (
              (t.materials.length &&
                (e.materials
                  ? ((r = t.materials.filter(function(t) {
                      return !e.materials.includes(t);
                    })),
                    (o = e.materials.filter(function(e) {
                      return !t.materials.includes(e);
                    })))
                  : (r = t.materials)),
              r.length && n(i, r, this.texture, t.reflectivity),
              o.length && n(i, o, null, 1),
              e.materials && t.reflectivity !== e.reflectivity)
            ) {
              var s = t.materials.filter(function(t) {
                return e.materials.includes(t);
              });
              s.length && n(i, s, this.texture, t.reflectivity);
            }
            this.data.enableBackground && !e.enableBackground
              ? this.setBackground(this.texture)
              : !this.data.enableBackground &&
                e.enableBackground &&
                this.setBackground(null);
          },
          remove: function() {
            this.el.removeEventListener("object3dset", this.object3dsetHandler);
            var e = this.el.getObject3D("mesh"),
              t = this.data;
            n(e, t.materials, null, 1),
              t.enableBackground && this.setBackground(null);
          },
          setBackground: function(e) {
            this.el.sceneEl.object3D.background = e;
          }
        });
      },
      {}
    ],
    27: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("grab", {
          init: function() {
            (this.system = this.el.sceneEl.systems.physics),
              (this.GRABBED_STATE = "grabbed"),
              (this.grabbing = !1),
              (this.hitEl = null),
              (this.physics = this.el.sceneEl.systems.physics),
              (this.constraint = null),
              (this.onHit = this.onHit.bind(this)),
              (this.onGripOpen = this.onGripOpen.bind(this)),
              (this.onGripClose = this.onGripClose.bind(this));
          },
          play: function() {
            var e = this.el;
            e.addEventListener("hit", this.onHit),
              e.addEventListener("gripdown", this.onGripClose),
              e.addEventListener("gripup", this.onGripOpen),
              e.addEventListener("trackpaddown", this.onGripClose),
              e.addEventListener("trackpadup", this.onGripOpen),
              e.addEventListener("triggerdown", this.onGripClose),
              e.addEventListener("triggerup", this.onGripOpen);
          },
          pause: function() {
            var e = this.el;
            e.removeEventListener("hit", this.onHit),
              e.removeEventListener("gripdown", this.onGripClose),
              e.removeEventListener("gripup", this.onGripOpen),
              e.removeEventListener("trackpaddown", this.onGripClose),
              e.removeEventListener("trackpadup", this.onGripOpen),
              e.removeEventListener("triggerdown", this.onGripClose),
              e.removeEventListener("triggerup", this.onGripOpen);
          },
          onGripClose: function() {
            this.grabbing = !0;
          },
          onGripOpen: function() {
            var e = this.hitEl;
            (this.grabbing = !1),
              e &&
                (e.removeState(this.GRABBED_STATE),
                (this.hitEl = void 0),
                this.system.removeConstraint(this.constraint),
                (this.constraint = null));
          },
          onHit: function(e) {
            var t = e.detail.el;
            t &&
              !t.is(this.GRABBED_STATE) &&
              this.grabbing &&
              !this.hitEl &&
              (t.addState(this.GRABBED_STATE),
              (this.hitEl = t),
              (this.constraint = new CANNON.LockConstraint(
                this.el.body,
                t.body
              )),
              this.system.addConstraint(this.constraint));
          }
        });
      },
      {}
    ],
    28: [
      function(e, t, i) {
        "use strict";
        e("./checkpoint"),
          e("./cube-env-map"),
          e("./grab"),
          e("./jump-ability"),
          e("./kinematic-body"),
          e("./mesh-smooth"),
          e("./normal-material"),
          e("./sphere-collider");
      },
      {
        "./checkpoint": 25,
        "./cube-env-map": 26,
        "./grab": 27,
        "./jump-ability": 29,
        "./kinematic-body": 30,
        "./mesh-smooth": 31,
        "./normal-material": 32,
        "./sphere-collider": 33
      }
    ],
    29: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("jump-ability", {
          dependencies: ["velocity"],
          schema: {
            on: { default: "keydown:Space gamepadbuttondown:0" },
            playerHeight: { default: 1.764 },
            maxJumps: { default: 1 },
            distance: { default: 5 },
            debug: { default: !1 }
          },
          init: function() {
            (this.velocity = 0), (this.numJumps = 0);
            var e = this.beginJump.bind(this),
              t = this.data.on.split(" ");
            this.bindings = {};
            for (var i = 0; i < t.length; i++)
              (this.bindings[t[i]] = e), this.el.addEventListener(t[i], e);
            (this.bindings.collide = this.onCollide.bind(this)),
              this.el.addEventListener("collide", this.bindings.collide);
          },
          remove: function() {
            for (var e in this.bindings)
              this.bindings.hasOwnProperty(e) &&
                (this.el.removeEventListener(e, this.bindings[e]),
                delete this.bindings[e]);
            this.el.removeEventListener("collide", this.bindings.collide),
              delete this.bindings.collide;
          },
          beginJump: function() {
            if (this.numJumps < this.data.maxJumps) {
              var e = this.data,
                t = Math.sqrt(-2 * e.distance * -24.8),
                i = this.el.getAttribute("velocity");
              this.el.setAttribute("velocity", { x: i.x, y: t, z: i.z }),
                this.numJumps++,
                this.el.emit("jumpstart");
            }
          },
          onCollide: function() {
            this.numJumps > 0 && this.el.emit("jumpend"), (this.numJumps = 0);
          }
        });
      },
      {}
    ],
    30: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("kinematic-body", {
          dependencies: ["velocity"],
          schema: {
            mass: { default: 5 },
            radius: { default: 1.3 },
            linearDamping: { default: 0.05 },
            enableSlopes: { default: !0 },
            enableJumps: { default: !1 }
          },
          init: function() {
            (this.system = this.el.sceneEl.systems.physics),
              this.system.addComponent(this);
            var e = this.el,
              t = this.data,
              i = new CANNON.Vec3().copy(
                e.object3D.getWorldPosition(new THREE.Vector3())
              );
            (this.body = new CANNON.Body({
              material: this.system.getMaterial("staticMaterial"),
              position: i,
              mass: t.mass,
              linearDamping: t.linearDamping,
              fixedRotation: !0
            })),
              this.body.addShape(
                new CANNON.Sphere(t.radius),
                new CANNON.Vec3(0, t.radius, 0)
              ),
              (this.body.el = this.el),
              (this.el.body = this.body),
              this.system.addBody(this.body),
              e.hasAttribute("wasd-controls") &&
                console.warn(
                  "[kinematic-body] Not compatible with wasd-controls, use movement-controls."
                );
          },
          remove: function() {
            this.system.removeBody(this.body),
              this.system.removeComponent(this),
              delete this.el.body;
          },
          beforeStep: function(e, t) {
            if (t) {
              var i = this.el,
                n = this.data,
                r = this.body;
              n.enableJumps || r.velocity.set(0, 0, 0),
                r.position.copy(i.getAttribute("position"));
            }
          },
          step: (function() {
            var e = new THREE.Vector3(),
              t = new THREE.Vector3(),
              i = new THREE.Vector3(),
              n = new THREE.Vector3();
            return function(r, o) {
              if (o) {
                var s = this.body,
                  a = this.data,
                  c = void 0,
                  l = -1 / 0,
                  h = void 0,
                  u = this.system.getContacts();
                (o = Math.min(o, 1e3 * this.system.data.maxInterval)),
                  n.set(0, 0, 0),
                  e.copy(this.el.getAttribute("velocity")),
                  s.velocity.copy(e);
                for (var d, p = 0; (d = u[p]); p++)
                  if (d.enabled) {
                    if (s.id === d.bi.id) d.ni.negate(i);
                    else {
                      if (s.id !== d.bj.id) continue;
                      i.copy(d.ni);
                    }
                    s.velocity.dot(i) < -1e-6 && i.y <= 0.5
                      ? e.projectOnPlane(i)
                      : i.y > 0.5 &&
                        (c =
                          s.id === d.bi.id
                            ? Math.abs(d.rj.y + d.bj.position.y)
                            : Math.abs(d.ri.y + d.bi.position.y)) > l &&
                        ((l = c),
                        n.copy(i),
                        (h = s.id === d.bi.id ? d.bj : d.bi));
                  }
                t.copy(e).normalize(),
                  h && (!a.enableJumps || t.y < 0.5)
                    ? (a.enableSlopes
                        ? n.y < 1 - 1e-6 && n.copy(this.raycastToGround(h, n))
                        : n.set(0, 1, 0),
                      e.projectOnPlane(n))
                    : this.system.driver.world &&
                      e.add(
                        this.system.driver.world.gravity.scale((4 * o) / 1e3)
                      ),
                  s.velocity.copy(e),
                  this.el.setAttribute("velocity", s.velocity),
                  this.el.setAttribute("position", s.position);
              }
            };
          })(),
          raycastToGround: function(e, t) {
            var i = void 0,
              n = void 0,
              r = this.body.position,
              o = this.body.position.clone();
            return (
              (i = new CANNON.Ray(r, o))._updateDirection(),
              i.intersectBody(e),
              i.hasHit
                ? ((n = i.result.hitNormalWorld),
                  Math.abs(n.y) > Math.abs(t.y) ? n : t)
                : t
            );
          }
        });
      },
      {}
    ],
    31: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("mesh-smooth", {
          init: function() {
            this.el.addEventListener("model-loaded", function(e) {
              e.detail.model.traverse(function(e) {
                e.isMesh && e.geometry.computeVertexNormals();
              });
            });
          }
        });
      },
      {}
    ],
    32: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("normal-material", {
          init: function() {
            (this.material = new THREE.MeshNormalMaterial({ flatShading: !0 })),
              (this.applyMaterial = this.applyMaterial.bind(this)),
              this.el.addEventListener("object3dset", this.applyMaterial);
          },
          remove: function() {
            this.el.removeEventListener("object3dset", this.applyMaterial);
          },
          applyMaterial: function() {
            var e = this;
            this.el.object3D.traverse(function(t) {
              t.isMesh && (t.material = e.material);
            });
          }
        });
      },
      {}
    ],
    33: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("sphere-collider", {
          schema: {
            objects: { default: "" },
            state: { default: "collided" },
            radius: { default: 0.05 },
            watch: { default: !0 }
          },
          init: function() {
            (this.observer = null),
              (this.els = []),
              (this.collisions = []),
              (this.handleHit = this.handleHit.bind(this)),
              (this.handleHitEnd = this.handleHitEnd.bind(this));
          },
          remove: function() {
            this.pause();
          },
          play: function() {
            var e = this.el.sceneEl;
            this.data.watch &&
              ((this.observer = new MutationObserver(
                this.update.bind(this, null)
              )),
              this.observer.observe(e, { childList: !0, subtree: !0 }));
          },
          pause: function() {
            this.observer &&
              (this.observer.disconnect(), (this.observer = null));
          },
          update: function() {
            var e = this.data,
              t = void 0;
            (t = e.objects
              ? this.el.sceneEl.querySelectorAll(e.objects)
              : this.el.sceneEl.children),
              (this.els = Array.prototype.slice.call(t));
          },
          tick: (function() {
            var e = new THREE.Vector3(),
              t = new THREE.Vector3(),
              i = new THREE.Vector3(),
              n = new THREE.Vector3(),
              r = new THREE.Box3(),
              o = new Map();
            return function() {
              var s = this.el,
                a = this.data,
                c = [],
                l = void 0;
              s.getObject3D("mesh") &&
                (o.clear(),
                s.object3D.getWorldPosition(e),
                s.object3D.getWorldScale(i),
                (l =
                  a.radius *
                  (function(e) {
                    return Math.max.apply(null, e.toArray());
                  })(i)),
                this.els.forEach(function(i) {
                  var s = void 0,
                    a = void 0,
                    h = void 0,
                    u = void 0;
                  i.isEntity &&
                    (a = i.getObject3D("mesh")) &&
                    (r.setFromObject(a).getSize(n),
                    (u = Math.max(n.x, n.y, n.z) / 2),
                    (s = Math.sqrt(2 * u * u)),
                    r.getCenter(t),
                    s &&
                      (h = e.distanceTo(t)) < s + l &&
                      (c.push(i), o.set(i, h)));
                }),
                c
                  .sort(function(e, t) {
                    return o.get(e) > o.get(t) ? 1 : -1;
                  })
                  .forEach(this.handleHit),
                0 === c.length && s.emit("hit", { el: null }),
                this.collisions
                  .filter(function(e) {
                    return !o.has(e);
                  })
                  .forEach(this.handleHitEnd),
                (this.collisions = c));
            };
          })(),
          handleHit: function(e) {
            e.emit("hit"),
              e.addState(this.data.state),
              this.el.emit("hit", { el: e });
          },
          handleHitEnd: function(e) {
            e.emit("hitend"),
              e.removeState(this.data.state),
              this.el.emit("hitend", { el: e });
          }
        });
      },
      {}
    ],
    34: [
      function(e, t, i) {
        "use strict";
        e("./nav-mesh"), e("./nav-agent"), e("./system");
      },
      { "./nav-agent": 35, "./nav-mesh": 36, "./system": 37 }
    ],
    35: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("nav-agent", {
          schema: {
            destination: { type: "vec3" },
            active: { default: !1 },
            speed: { default: 2 }
          },
          init: function() {
            (this.system = this.el.sceneEl.systems.nav),
              this.system.addAgent(this),
              (this.group = null),
              (this.path = []),
              (this.raycaster = new THREE.Raycaster());
          },
          remove: function() {
            this.system.removeAgent(this);
          },
          update: function() {
            this.path.length = 0;
          },
          updateNavLocation: function() {
            (this.group = null), (this.path = []);
          },
          tick: (function() {
            var e = new THREE.Vector3(),
              t = new THREE.Vector3(),
              i = new THREE.Vector3();
            return function(n, r) {
              var o = this.el,
                s = this.data,
                a = this.raycaster,
                c = (s.speed * r) / 1e3;
              if (s.active) {
                if (!this.path.length) {
                  var l = this.el.object3D.position;
                  (this.group = this.group || this.system.getGroup(l)),
                    (this.path =
                      this.system.getPath(
                        l,
                        e.copy(s.destination),
                        this.group
                      ) || []),
                    o.emit("navigation-start");
                }
                if (!this.path.length)
                  return (
                    console.warn(
                      "[nav] Unable to find path to %o.",
                      s.destination
                    ),
                    this.el.setAttribute("nav-agent", { active: !1 }),
                    void o.emit("navigation-end")
                  );
                var h = o.object3D.position,
                  u = this.path[0];
                t.subVectors(u, h);
                var d = void 0;
                if (t.length() < c) {
                  if ((this.path.shift(), !this.path.length))
                    return (
                      this.el.setAttribute("nav-agent", { active: !1 }),
                      void o.emit("navigation-end")
                    );
                  i.copy(h), (d = this.path[0]);
                } else i.copy(t.setLength(c)).add(h), (d = u);
                (d.y = h.y),
                  o.object3D.lookAt(d),
                  a.ray.origin.copy(i),
                  (a.ray.origin.y += 1.5),
                  (a.ray.direction.y = -1);
                var p = a.intersectObject(this.system.getNavMesh());
                p.length
                  ? (t.subVectors(p[0].point, h), h.add(t.setLength(c)))
                  : h.copy(i);
              }
            };
          })()
        });
      },
      {}
    ],
    36: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerComponent("nav-mesh", {
          init: function() {
            (this.system = this.el.sceneEl.systems.nav),
              (this.hasLoadedNavMesh = !1),
              this.el.addEventListener(
                "object3dset",
                this.loadNavMesh.bind(this)
              );
          },
          play: function() {
            this.hasLoadedNavMesh || this.loadNavMesh();
          },
          loadNavMesh: function() {
            var e = this.el.getObject3D("mesh"),
              t = this.el.sceneEl.object3D;
            if (e) {
              var i = void 0;
              if (
                (e.traverse(function(e) {
                  e.isMesh && (i = e);
                }),
                i)
              ) {
                var n = i.geometry.isBufferGeometry
                  ? new THREE.Geometry().fromBufferGeometry(i.geometry)
                  : i.geometry.clone();
                t.updateMatrixWorld(),
                  n.applyMatrix(i.matrixWorld),
                  this.system.setNavMeshGeometry(n),
                  (this.hasLoadedNavMesh = !0);
              }
            }
          }
        });
      },
      {}
    ],
    37: [
      function(e, t, i) {
        "use strict";
        var n = e("three-pathfinding").Pathfinding,
          r = new n(),
          o = "level";
        t.exports = AFRAME.registerSystem("nav", {
          init: function() {
            (this.navMesh = null), (this.agents = new Set());
          },
          setNavMeshGeometry: function(e) {
            (this.navMesh = new THREE.Mesh(e)),
              r.setZoneData(o, n.createZone(e)),
              Array.from(this.agents).forEach(function(e) {
                return e.updateNavLocation();
              });
          },
          getNavMesh: function() {
            return this.navMesh;
          },
          addAgent: function(e) {
            this.agents.add(e);
          },
          removeAgent: function(e) {
            this.agents.delete(e);
          },
          getPath: function(e, t, i) {
            return this.navMesh ? r.findPath(e, t, o, i) : null;
          },
          getGroup: function(e) {
            return this.navMesh ? r.getGroup(o, e) : null;
          },
          getNode: function(e, t) {
            return this.navMesh ? r.getClosestNode(e, o, t, !0) : null;
          },
          clampStep: function(e, t, i, n, s) {
            return this.navMesh
              ? n
                ? r.clampStep(e, t, n, o, i, s)
                : (s.copy(t), this.getNode(t, i))
              : (s.copy(t), null);
          }
        });
      },
      { "three-pathfinding": 11 }
    ],
    38: [
      function(e, t, i) {
        "use strict";
        t.exports = AFRAME.registerPrimitive("a-grid", {
          defaultComponents: {
            geometry: { primitive: "plane", width: 75, height: 75 },
            rotation: { x: -90, y: 0, z: 0 },
            material: {
              src:
                "url(https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v1.16.3/assets/grid.png)",
              repeat: "75 75"
            }
          },
          mappings: {
            width: "geometry.width",
            height: "geometry.height",
            src: "material.src"
          }
        });
      },
      {}
    ],
    39: [
      function(e, t, i) {
        "use strict";
        var n = e("../../lib/hex-grid.min.js"),
          r = e("../../lib/default-hex-grid");
        (t.exports.Primitive = AFRAME.registerPrimitive("a-hexgrid", {
          defaultComponents: { hexgrid: {} },
          mappings: { src: "hexgrid.src" }
        })),
          (t.exports.Component = AFRAME.registerComponent("hexgrid", {
            dependencies: ["material"],
            schema: { src: { type: "asset" } },
            init: function() {
              var e = this,
                t = this.data;
              t.src
                ? fetch(t.src)
                    .then(function(e) {
                      return e.json();
                    })
                    .then(function(t) {
                      return e.addMesh(t);
                    })
                : this.addMesh(r);
            },
            addMesh: function(e) {
              var t = new n.HexGrid();
              t.fromJSON(e);
              var i = new n.Board(t);
              i.generateTilemap(),
                this.el.setObject3D("mesh", i.group),
                this.addMaterial();
            },
            addMaterial: function() {
              var e = (this.el.components.material || {}).material;
              e &&
                this.el.object3D.traverse(function(t) {
                  t.isMesh && (t.material = e);
                });
            },
            remove: function() {
              this.el.removeObject3D("mesh");
            }
          }));
      },
      { "../../lib/default-hex-grid": 7, "../../lib/hex-grid.min.js": 9 }
    ],
    40: [
      function(e, t, i) {
        "use strict";
        (t.exports.Primitive = AFRAME.registerPrimitive("a-ocean", {
          defaultComponents: { ocean: {}, rotation: { x: -90, y: 0, z: 0 } },
          mappings: {
            width: "ocean.width",
            depth: "ocean.depth",
            density: "ocean.density",
            amplitude: "ocean.amplitude",
            amplitudeVariance: "ocean.amplitudeVariance",
            speed: "ocean.speed",
            speedVariance: "ocean.speedVariance",
            color: "ocean.color",
            opacity: "ocean.opacity"
          }
        })),
          (t.exports.Component = AFRAME.registerComponent("ocean", {
            schema: {
              width: { default: 10, min: 0 },
              depth: { default: 10, min: 0 },
              density: { default: 10 },
              amplitude: { default: 0.1 },
              amplitudeVariance: { default: 0.3 },
              speed: { default: 1 },
              speedVariance: { default: 2 },
              color: { default: "#7AD2F7", type: "color" },
              opacity: { default: 0.8 }
            },
            play: function() {
              var e = this.el,
                t = this.data,
                i = e.components.material,
                n = new THREE.PlaneGeometry(
                  t.width,
                  t.depth,
                  t.density,
                  t.density
                );
              n.mergeVertices(), (this.waves = []);
              for (var r, o = 0, s = n.vertices.length; o < s; o++)
                (r = n.vertices[o]),
                  this.waves.push({
                    z: r.z,
                    ang: Math.random() * Math.PI * 2,
                    amp: t.amplitude + Math.random() * t.amplitudeVariance,
                    speed: (t.speed + Math.random() * t.speedVariance) / 1e3
                  });
              i ||
                ((i = {}).material = new THREE.MeshPhongMaterial({
                  color: t.color,
                  transparent: t.opacity < 1,
                  opacity: t.opacity,
                  shading: THREE.FlatShading
                })),
                (this.mesh = new THREE.Mesh(n, i.material)),
                e.setObject3D("mesh", this.mesh);
            },
            remove: function() {
              this.el.removeObject3D("mesh");
            },
            tick: function(e, t) {
              if (t) {
                for (
                  var i, n, r = this.mesh.geometry.vertices, o = 0;
                  (i = r[o]);
                  o++
                )
                  (n = this.waves[o]),
                    (i.z = n.z + Math.sin(n.ang) * n.amp),
                    (n.ang += n.speed * t);
                this.mesh.geometry.verticesNeedUpdate = !0;
              }
            }
          }));
      },
      {}
    ],
    41: [
      function(e, t, i) {
        "use strict";
        (t.exports.Primitive = AFRAME.registerPrimitive("a-tube", {
          defaultComponents: { tube: {} },
          mappings: {
            path: "tube.path",
            segments: "tube.segments",
            radius: "tube.radius",
            "radial-segments": "tube.radialSegments",
            closed: "tube.closed"
          }
        })),
          (t.exports.Component = AFRAME.registerComponent("tube", {
            schema: {
              path: { default: [] },
              segments: { default: 64 },
              radius: { default: 1 },
              radialSegments: { default: 8 },
              closed: { default: !1 }
            },
            init: function() {
              var e = this.el,
                t = this.data,
                i = e.components.material;
              if (t.path.length) {
                var n = new THREE.CatmullRomCurve3(
                    t.path.map(function(e) {
                      return (
                        (e = e.split(" ")),
                        new THREE.Vector3(
                          Number(e[0]),
                          Number(e[1]),
                          Number(e[2])
                        )
                      );
                    })
                  ),
                  r = new THREE.TubeGeometry(
                    n,
                    t.segments,
                    t.radius,
                    t.radialSegments,
                    t.closed
                  );
                i || ((i = {}).material = new THREE.MeshPhongMaterial()),
                  (this.mesh = new THREE.Mesh(r, i.material)),
                  this.el.setObject3D("mesh", this.mesh);
              } else
                console.error(
                  "[a-tube] `path` property expected but not found."
                );
            },
            update: function(e) {
              Object.keys(e).length && (this.remove(), this.init());
            },
            remove: function() {
              this.mesh && this.el.removeObject3D("mesh");
            }
          }));
      },
      {}
    ],
    42: [
      function(e, t, i) {
        "use strict";
        e("./a-grid"), e("./a-hexgrid"), e("./a-ocean"), e("./a-tube");
      },
      { "./a-grid": 38, "./a-hexgrid": 39, "./a-ocean": 40, "./a-tube": 41 }
    ]
  },
  {},
  [1]
);
