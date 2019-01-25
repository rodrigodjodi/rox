// Garden Gnome Software - Skin
// Object2VR 3.1.4/10767
// Filename: pipe-rox_r2.ggsk
// Generated sex 25. jan 12:04:37 2019

function object2vrSkin(player, base) {
  var me = this;
  var flag = false;
  var nodeMarker = new Array();
  var activeNodeMarker = new Array();
  this.player = player;
  this.player.skinObj = this;
  this.divSkin = player.divSkin;
  var basePath = "";
  // auto detect base path
  if (base == "?") {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src.indexOf("skin.js") >= 0) {
        var p = src.lastIndexOf("/");
        if (p >= 0) {
          basePath = src.substr(0, p + 1);
        }
      }
    }
  } else if (base) {
    basePath = base;
  }
  this.elementMouseDown = new Array();
  this.elementMouseOver = new Array();
  var cssPrefix = "";
  var domTransition = "transition";
  var domTransform = "transform";
  var prefixes = "Webkit,Moz,O,ms,Ms".split(",");
  var i;
  for (i = 0; i < prefixes.length; i++) {
    if (typeof document.body.style[prefixes[i] + "Transform"] !== "undefined") {
      cssPrefix = "-" + prefixes[i].toLowerCase() + "-";
      domTransition = prefixes[i] + "Transition";
      domTransform = prefixes[i] + "Transform";
    }
  }

  this.player.setMargins(0, 0, 0, 0);

  this.updateSize = function(startElement) {
    var stack = new Array();
    stack.push(startElement);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggUpdatePosition) {
        e.ggUpdatePosition();
      }
      if (e.hasChildNodes()) {
        for (i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };

  parameterToTransform = function(p) {
    var hs =
      "translate(" +
      p.rx +
      "px," +
      p.ry +
      "px) rotate(" +
      p.a +
      "deg) scale(" +
      p.sx +
      "," +
      p.sy +
      ")";
    return hs;
  };

  this.findElements = function(id, regex) {
    var r = new Array();
    var stack = new Array();
    var pat = new RegExp(id, "");
    stack.push(me.divSkin);
    while (stack.length > 0) {
      var e = stack.pop();
      if (regex) {
        if (pat.test(e.ggId)) r.push(e);
      } else {
        if (e.ggId == id) r.push(e);
      }
      if (e.hasChildNodes()) {
        for (i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
    return r;
  };

  this.addSkin = function() {
    this._container_1 = document.createElement("div");
    this._container_1.ggId = "Container 1";
    this._container_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.5, sy: 0.5 };
    this._container_1.ggVisible = true;
    this._container_1.className = "ggskin ggskin_container";
    this._container_1.ggType = "container";
    this._container_1.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-240 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(-80 + h) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -240px;";
    hs += "top:  -80px;";
    hs += "width: 480px;";
    hs += "height: 80px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._container_1.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._container_1.setAttribute("style", hs);
    this._rectangle_1 = document.createElement("div");
    this._rectangle_1.ggId = "Rectangle 1";
    this._rectangle_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._rectangle_1.ggVisible = true;
    this._rectangle_1.className = "ggskin ggskin_rectangle";
    this._rectangle_1.ggType = "rectangle";
    this._rectangle_1.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-240 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(-80 + h) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -240px;";
    hs += "top:  -80px;";
    hs += "width: 479px;";
    hs += "height: 79px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs += "opacity: 0.8;";
    hs += "visibility: inherit;";
    hs += "background: #2d3e50;";
    hs += "border: 1px solid #ffffff;";
    hs += "border-radius: 8px;";
    hs += cssPrefix + "border-radius: 8px;";
    this._rectangle_1.setAttribute("style", hs);
    this._container_1.appendChild(this._rectangle_1);
    this._uihide = document.createElement("div");
    this._uihide.ggId = "ui-hide";
    this._uihide.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.9, sy: 0.9 };
    this._uihide.ggVisible = true;
    this._uihide.className = "ggskin ggskin_svg";
    this._uihide.ggType = "svg";
    this._uihide.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-232 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(-30 + h / 2) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -232px;";
    hs += "top:  -30px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._uihide.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._uihide.setAttribute("style", hs);
    this._uihide__img = document.createElement("img");
    this._uihide__img.className = "ggskin ggskin_svg";
    this._uihide__img.setAttribute("src", basePath + "images/uihide.svg");
    this._uihide__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._uihide__img["ondragstart"] = function() {
      return false;
    };
    this._uihide.appendChild(this._uihide__img);
    this._uihide.onclick = function() {
      if (me.player.transitionsDisabled) {
        me._container_1.style[domTransition] = "none";
      } else {
        me._container_1.style[domTransition] = "all 1000ms ease-out 0ms";
      }
      me._container_1.ggParameter.rx = 0;
      me._container_1.ggParameter.ry = 70;
      me._container_1.style[domTransform] = parameterToTransform(
        me._container_1.ggParameter
      );
      if (me.player.transitionsDisabled) {
        me._showui.style[domTransition] = "none";
      } else {
        me._showui.style[domTransition] = "all 1000ms ease-out 0ms";
      }
      me._showui.ggParameter.rx = 0;
      me._showui.ggParameter.ry = -80;
      me._showui.style[domTransform] = parameterToTransform(
        me._showui.ggParameter
      );
    };
    this._uihide.onmouseover = function() {
      me._uihide.style[domTransition] = "none";
      me._uihide.ggParameter.sx = 1;
      me._uihide.ggParameter.sy = 1;
      me._uihide.style[domTransform] = parameterToTransform(
        me._uihide.ggParameter
      );
    };
    this._uihide.onmouseout = function() {
      me._uihide.style[domTransition] = "none";
      me._uihide.ggParameter.sx = 0.9;
      me._uihide.ggParameter.sy = 0.9;
      me._uihide.style[domTransform] = parameterToTransform(
        me._uihide.ggParameter
      );
    };
    this._container_1.appendChild(this._uihide);
    this._rotateccw = document.createElement("div");
    this._rotateccw.ggId = "rotate-ccw";
    this._rotateccw.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.9, sy: 0.9 };
    this._rotateccw.ggVisible = true;
    this._rotateccw.className = "ggskin ggskin_svg";
    this._rotateccw.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 88px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._rotateccw.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._rotateccw.setAttribute("style", hs);
    this._rotateccw__img = document.createElement("img");
    this._rotateccw__img.className = "ggskin ggskin_svg";
    this._rotateccw__img.setAttribute("src", basePath + "images/rotateccw.svg");
    this._rotateccw__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._rotateccw__img["ondragstart"] = function() {
      return false;
    };
    this._rotateccw.appendChild(this._rotateccw__img);
    this._rotateccw.onmouseover = function() {
      me._rotateccw.style[domTransition] = "none";
      me._rotateccw.ggParameter.sx = 1;
      me._rotateccw.ggParameter.sy = 1;
      me._rotateccw.style[domTransform] = parameterToTransform(
        me._rotateccw.ggParameter
      );
    };
    this._rotateccw.onmouseout = function() {
      me._rotateccw.style[domTransition] = "none";
      me._rotateccw.ggParameter.sx = 0.9;
      me._rotateccw.ggParameter.sy = 0.9;
      me._rotateccw.style[domTransform] = parameterToTransform(
        me._rotateccw.ggParameter
      );
      me.elementMouseDown["rotateccw"] = false;
    };
    this._rotateccw.onmousedown = function() {
      me._rotateccw.style[domTransition] = "none";
      me._rotateccw.ggParameter.sx = 0.8;
      me._rotateccw.ggParameter.sy = 0.8;
      me._rotateccw.style[domTransform] = parameterToTransform(
        me._rotateccw.ggParameter
      );
      me.elementMouseDown["rotateccw"] = true;
    };
    this._rotateccw.onmouseup = function() {
      me._rotateccw.style[domTransition] = "none";
      me._rotateccw.ggParameter.sx = 0.9;
      me._rotateccw.ggParameter.sy = 0.9;
      me._rotateccw.style[domTransform] = parameterToTransform(
        me._rotateccw.ggParameter
      );
      me.elementMouseDown["rotateccw"] = false;
    };
    this._rotateccw.ontouchend = function() {
      me.elementMouseDown["rotateccw"] = false;
    };
    this._container_1.appendChild(this._rotateccw);
    this._rotatecw = document.createElement("div");
    this._rotatecw.ggId = "rotate-cw";
    this._rotatecw.ggParameter = { rx: 0, ry: 0, a: 0, sx: -0.9, sy: 0.9 };
    this._rotatecw.ggVisible = true;
    this._rotatecw.className = "ggskin ggskin_svg";
    this._rotatecw.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 328px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._rotatecw.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._rotatecw.setAttribute("style", hs);
    this._rotatecw__img = document.createElement("img");
    this._rotatecw__img.className = "ggskin ggskin_svg";
    this._rotatecw__img.setAttribute("src", basePath + "images/rotatecw.svg");
    this._rotatecw__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._rotatecw__img["ondragstart"] = function() {
      return false;
    };
    this._rotatecw.appendChild(this._rotatecw__img);
    this._rotatecw.onmouseover = function() {
      me._rotatecw.style[domTransition] = "none";
      me._rotatecw.ggParameter.sx = -1;
      me._rotatecw.ggParameter.sy = 1;
      me._rotatecw.style[domTransform] = parameterToTransform(
        me._rotatecw.ggParameter
      );
    };
    this._rotatecw.onmouseout = function() {
      me._rotatecw.style[domTransition] = "none";
      me._rotatecw.ggParameter.sx = -0.9;
      me._rotatecw.ggParameter.sy = 0.9;
      me._rotatecw.style[domTransform] = parameterToTransform(
        me._rotatecw.ggParameter
      );
      me.elementMouseDown["rotatecw"] = false;
    };
    this._rotatecw.onmousedown = function() {
      me._rotatecw.style[domTransition] = "none";
      me._rotatecw.ggParameter.sx = -0.8;
      me._rotatecw.ggParameter.sy = 0.8;
      me._rotatecw.style[domTransform] = parameterToTransform(
        me._rotatecw.ggParameter
      );
      me.elementMouseDown["rotatecw"] = true;
    };
    this._rotatecw.onmouseup = function() {
      me._rotatecw.style[domTransition] = "none";
      me._rotatecw.ggParameter.sx = -0.9;
      me._rotatecw.ggParameter.sy = 0.9;
      me._rotatecw.style[domTransform] = parameterToTransform(
        me._rotatecw.ggParameter
      );
      me.elementMouseDown["rotatecw"] = false;
    };
    this._rotatecw.ontouchend = function() {
      me.elementMouseDown["rotatecw"] = false;
    };
    this._container_1.appendChild(this._rotatecw);
    this._zoomplus = document.createElement("div");
    this._zoomplus.ggId = "zoom-plus";
    this._zoomplus.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.9, sy: 0.9 };
    this._zoomplus.ggVisible = true;
    this._zoomplus.className = "ggskin ggskin_svg";
    this._zoomplus.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 248px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._zoomplus.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._zoomplus.setAttribute("style", hs);
    this._zoomplus__img = document.createElement("img");
    this._zoomplus__img.className = "ggskin ggskin_svg";
    this._zoomplus__img.setAttribute("src", basePath + "images/zoomplus.svg");
    this._zoomplus__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._zoomplus__img["ondragstart"] = function() {
      return false;
    };
    this._zoomplus.appendChild(this._zoomplus__img);
    this._zoomplus.onmouseover = function() {
      me._zoomplus.style[domTransition] = "none";
      me._zoomplus.ggParameter.sx = 1;
      me._zoomplus.ggParameter.sy = 1;
      me._zoomplus.style[domTransform] = parameterToTransform(
        me._zoomplus.ggParameter
      );
    };
    this._zoomplus.onmouseout = function() {
      me._zoomplus.style[domTransition] = "none";
      me._zoomplus.ggParameter.sx = 0.9;
      me._zoomplus.ggParameter.sy = 0.9;
      me._zoomplus.style[domTransform] = parameterToTransform(
        me._zoomplus.ggParameter
      );
      me.elementMouseDown["zoomplus"] = false;
    };
    this._zoomplus.onmousedown = function() {
      me._zoomplus.style[domTransition] = "none";
      me._zoomplus.ggParameter.sx = 0.8;
      me._zoomplus.ggParameter.sy = 0.8;
      me._zoomplus.style[domTransform] = parameterToTransform(
        me._zoomplus.ggParameter
      );
      me.elementMouseDown["zoomplus"] = true;
    };
    this._zoomplus.onmouseup = function() {
      me._zoomplus.style[domTransition] = "none";
      me._zoomplus.ggParameter.sx = 0.9;
      me._zoomplus.ggParameter.sy = 0.9;
      me._zoomplus.style[domTransform] = parameterToTransform(
        me._zoomplus.ggParameter
      );
      me.elementMouseDown["zoomplus"] = false;
    };
    this._zoomplus.ontouchend = function() {
      me.elementMouseDown["zoomplus"] = false;
    };
    this._container_1.appendChild(this._zoomplus);
    this._zoomminus = document.createElement("div");
    this._zoomminus.ggId = "zoom-minus";
    this._zoomminus.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.9, sy: 0.9 };
    this._zoomminus.ggVisible = true;
    this._zoomminus.className = "ggskin ggskin_svg";
    this._zoomminus.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 168px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._zoomminus.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._zoomminus.setAttribute("style", hs);
    this._zoomminus__img = document.createElement("img");
    this._zoomminus__img.className = "ggskin ggskin_svg";
    this._zoomminus__img.setAttribute("src", basePath + "images/zoomminus.svg");
    this._zoomminus__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._zoomminus__img["ondragstart"] = function() {
      return false;
    };
    this._zoomminus.appendChild(this._zoomminus__img);
    this._zoomminus.onmouseover = function() {
      me._zoomminus.style[domTransition] = "none";
      me._zoomminus.ggParameter.sx = 1;
      me._zoomminus.ggParameter.sy = 1;
      me._zoomminus.style[domTransform] = parameterToTransform(
        me._zoomminus.ggParameter
      );
    };
    this._zoomminus.onmouseout = function() {
      me._zoomminus.style[domTransition] = "none";
      me._zoomminus.ggParameter.sx = 0.9;
      me._zoomminus.ggParameter.sy = 0.9;
      me._zoomminus.style[domTransform] = parameterToTransform(
        me._zoomminus.ggParameter
      );
      me.elementMouseDown["zoomminus"] = false;
    };
    this._zoomminus.onmousedown = function() {
      me._zoomminus.style[domTransition] = "none";
      me._zoomminus.ggParameter.sx = 0.8;
      me._zoomminus.ggParameter.sy = 0.8;
      me._zoomminus.style[domTransform] = parameterToTransform(
        me._zoomminus.ggParameter
      );
      me.elementMouseDown["zoomminus"] = true;
    };
    this._zoomminus.onmouseup = function() {
      me._zoomminus.style[domTransition] = "none";
      me._zoomminus.ggParameter.sx = 0.9;
      me._zoomminus.ggParameter.sy = 0.9;
      me._zoomminus.style[domTransform] = parameterToTransform(
        me._zoomminus.ggParameter
      );
      me.elementMouseDown["zoomminus"] = false;
    };
    this._zoomminus.ontouchend = function() {
      me.elementMouseDown["zoomminus"] = false;
    };
    this._container_1.appendChild(this._zoomminus);
    this._fullscreenenter = document.createElement("div");
    this._fullscreenenter.ggId = "fullscreen-enter";
    this._fullscreenenter.ggParameter = {
      rx: 0,
      ry: 0,
      a: 0,
      sx: 0.9,
      sy: 0.9
    };
    this._fullscreenenter.ggVisible = true;
    this._fullscreenenter.className = "ggskin ggskin_svg";
    this._fullscreenenter.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 408px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._fullscreenenter.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._fullscreenenter.setAttribute("style", hs);
    this._fullscreenenter__img = document.createElement("img");
    this._fullscreenenter__img.className = "ggskin ggskin_svg";
    this._fullscreenenter__img.setAttribute(
      "src",
      basePath + "images/fullscreenenter.svg"
    );
    this._fullscreenenter__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._fullscreenenter__img["ondragstart"] = function() {
      return false;
    };
    this._fullscreenenter.appendChild(this._fullscreenenter__img);
    this._fullscreenenter.onclick = function() {
      me.player.toggleFullscreen();
    };
    this._fullscreenenter.onmouseover = function() {
      me._fullscreenenter.style[domTransition] = "none";
      me._fullscreenenter.ggParameter.sx = 1;
      me._fullscreenenter.ggParameter.sy = 1;
      me._fullscreenenter.style[domTransform] = parameterToTransform(
        me._fullscreenenter.ggParameter
      );
    };
    this._fullscreenenter.onmouseout = function() {
      me._fullscreenenter.style[domTransition] = "none";
      me._fullscreenenter.ggParameter.sx = 0.9;
      me._fullscreenenter.ggParameter.sy = 0.9;
      me._fullscreenenter.style[domTransform] = parameterToTransform(
        me._fullscreenenter.ggParameter
      );
    };
    this._container_1.appendChild(this._fullscreenenter);
    this._fullscreenexit = document.createElement("div");
    this._fullscreenexit.ggId = "fullscreen-exit";
    this._fullscreenexit.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.9, sy: 0.9 };
    this._fullscreenexit.ggVisible = true;
    this._fullscreenexit.className = "ggskin ggskin_svg";
    this._fullscreenexit.ggType = "svg";
    hs = "position:absolute;";
    hs += "left: 408px;";
    hs += "top:  10px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._fullscreenexit.ggParameter) +
      ";";
    hs += "visibility: inherit;";
    this._fullscreenexit.setAttribute("style", hs);
    this._fullscreenexit__img = document.createElement("img");
    this._fullscreenexit__img.className = "ggskin ggskin_svg";
    this._fullscreenexit__img.setAttribute(
      "src",
      basePath + "images/fullscreenexit.svg"
    );
    this._fullscreenexit__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._fullscreenexit__img["ondragstart"] = function() {
      return false;
    };
    this._fullscreenexit.appendChild(this._fullscreenexit__img);
    this._fullscreenexit.onclick = function() {
      me.player.toggleFullscreen();
    };
    this._fullscreenexit.onmouseover = function() {
      me._fullscreenexit.style[domTransition] = "none";
      me._fullscreenexit.ggParameter.sx = 1;
      me._fullscreenexit.ggParameter.sy = 1;
      me._fullscreenexit.style[domTransform] = parameterToTransform(
        me._fullscreenexit.ggParameter
      );
    };
    this._fullscreenexit.onmouseout = function() {
      me._fullscreenexit.style[domTransition] = "none";
      me._fullscreenexit.ggParameter.sx = 0.9;
      me._fullscreenexit.ggParameter.sy = 0.9;
      me._fullscreenexit.style[domTransform] = parameterToTransform(
        me._fullscreenexit.ggParameter
      );
    };
    this._container_1.appendChild(this._fullscreenexit);
    this.divSkin.appendChild(this._container_1);
    this._default_loading_bar = document.createElement("div");
    this._default_loading_bar.ggId = "default loading bar";
    this._default_loading_bar.ggParameter = {
      rx: 0,
      ry: 0,
      a: 0,
      sx: 1,
      sy: 1
    };
    this._default_loading_bar.ggVisible = true;
    this._default_loading_bar.className = "ggskin ggskin_container";
    this._default_loading_bar.ggType = "container";
    this._default_loading_bar.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-95 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(-69 + h / 2) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -95px;";
    hs += "top:  -69px;";
    hs += "width: 180px;";
    hs += "height: 30px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs += "visibility: inherit;";
    this._default_loading_bar.setAttribute("style", hs);
    this._loading_text = document.createElement("div");
    this._loading_text__text = document.createElement("div");
    this._loading_text.className = "ggskin ggskin_textdiv";
    this._loading_text.ggTextDiv = this._loading_text__text;
    this._loading_text.ggId = "loading text";
    this._loading_text.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._loading_text.ggVisible = true;
    this._loading_text.className = "ggskin ggskin_text";
    this._loading_text.ggType = "text";
    hs = "position:absolute;";
    hs += "left: 0px;";
    hs += "top:  0px;";
    hs += "width: 178px;";
    hs += "height: 18px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs += "visibility: inherit;";
    this._loading_text.setAttribute("style", hs);
    hs = "position:absolute;";
    hs += "left: 0px;";
    hs += "top:  0px;";
    hs += "width: 178px;";
    hs += "height: 18px;";
    hs += "border: 0px solid #000000;";
    hs += "color: #000000;";
    hs += "text-align: left;";
    hs += "white-space: nowrap;";
    hs += "padding: 0px 1px 0px 1px;";
    hs += "overflow: hidden;";
    this._loading_text__text.setAttribute("style", hs);
    this._loading_text.ggUpdateText = function() {
      var hs =
        "<b>Carregando..." +
        (me.player.getPercentLoaded() * 100.0).toFixed(0) +
        "%</b>";
      if (hs != this.ggText) {
        this.ggText = hs;
        this.ggTextDiv.innerHTML = hs;
      }
    };
    this._loading_text.ggUpdateText();
    this._loading_text.appendChild(this._loading_text__text);
    this._default_loading_bar.appendChild(this._loading_text);
    this._loading_bar = document.createElement("div");
    this._loading_bar.ggId = "loading bar";
    this._loading_bar.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._loading_bar.ggVisible = true;
    this._loading_bar.className = "ggskin ggskin_rectangle";
    this._loading_bar.ggType = "rectangle";
    this._loading_bar.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-91 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(4 + h / 2) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -91px;";
    hs += "top:  4px;";
    hs += "width: 178px;";
    hs += "height: 8px;";
    hs += cssPrefix + "transform-origin: 0% 50%;";
    hs += "visibility: inherit;";
    hs += "background: #ddd9ff;";
    hs += "background: rgba(221,217,255,0.298039);";
    hs += "border: 4px solid #ffffff;";
    this._loading_bar.setAttribute("style", hs);
    this._default_loading_bar.appendChild(this._loading_bar);
    this.divSkin.appendChild(this._default_loading_bar);
    this._showui = document.createElement("div");
    this._showui.ggId = "show-ui";
    this._showui.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.45, sy: 0.45 };
    this._showui.ggVisible = true;
    this._showui.className = "ggskin ggskin_svg";
    this._showui.ggType = "svg";
    this._showui.ggUpdatePosition = function() {
      this.style[domTransition] = "none";
      if (this.parentNode) {
        var w = this.parentNode.offsetWidth;
        this.style.left = Math.floor(-36 + w / 2) + "px";
        var h = this.parentNode.offsetHeight;
        this.style.top = Math.floor(3 + h) + "px";
      }
    };
    hs = "position:absolute;";
    hs += "left: -36px;";
    hs += "top:  3px;";
    hs += "width: 64px;";
    hs += "height: 64px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs +=
      cssPrefix +
      "transform: " +
      parameterToTransform(this._showui.ggParameter) +
      ";";
    hs += "opacity: 0.8;";
    hs += "visibility: inherit;";
    this._showui.setAttribute("style", hs);
    this._showui__img = document.createElement("img");
    this._showui__img.className = "ggskin ggskin_svg";
    this._showui__img.setAttribute("src", basePath + "images/showui.svg");
    this._showui__img.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;-webkit-user-drag:none;"
    );
    this._showui__img["ondragstart"] = function() {
      return false;
    };
    this._showui.appendChild(this._showui__img);
    this._showui.onclick = function() {
      if (me.player.transitionsDisabled) {
        me._container_1.style[domTransition] = "none";
      } else {
        me._container_1.style[domTransition] = "all 1000ms ease-out 0ms";
      }
      me._container_1.ggParameter.rx = 0;
      me._container_1.ggParameter.ry = 0;
      me._container_1.style[domTransform] = parameterToTransform(
        me._container_1.ggParameter
      );
      if (me.player.transitionsDisabled) {
        me._showui.style[domTransition] = "none";
      } else {
        me._showui.style[domTransition] = "all 1000ms ease-out 0ms";
      }
      me._showui.ggParameter.rx = 0;
      me._showui.ggParameter.ry = 80;
      me._showui.style[domTransform] = parameterToTransform(
        me._showui.ggParameter
      );
    };
    this._showui.onmouseover = function() {
      me._showui.style[domTransition] = "none";
      me._showui.ggParameter.sx = 0.5;
      me._showui.ggParameter.sy = 0.5;
      me._showui.style[domTransform] = parameterToTransform(
        me._showui.ggParameter
      );
      me._showui.style[domTransition] = "none";
      me._showui.style.opacity = "1";
      me._showui.style.visibility = me._showui.ggVisible ? "inherit" : "hidden";
    };
    this._showui.onmouseout = function() {
      me._showui.style[domTransition] = "none";
      me._showui.ggParameter.sx = 0.45;
      me._showui.ggParameter.sy = 0.45;
      me._showui.style[domTransform] = parameterToTransform(
        me._showui.ggParameter
      );
      me._showui.style[domTransition] = "none";
      me._showui.style.opacity = "0.8";
      me._showui.style.visibility = me._showui.ggVisible ? "inherit" : "hidden";
    };
    this.divSkin.appendChild(this._showui);
    this._texto = document.createElement("div");
    this._texto__text = document.createElement("div");
    this._texto.className = "ggskin ggskin_textdiv";
    this._texto.ggTextDiv = this._texto__text;
    this._texto.ggId = "Texto";
    this._texto.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    this._texto.ggVisible = true;
    this._texto.className = "ggskin ggskin_text";
    this._texto.ggType = "text";
    hs = "position:absolute;";
    hs += "left: -120px;";
    hs += "top:  -24px;";
    hs += "width: 237px;";
    hs += "height: 23px;";
    hs += cssPrefix + "transform-origin: 50% 50%;";
    hs += "opacity: 0;";
    hs += "visibility: hidden;";
    this._texto.setAttribute("style", hs);
    hs = "position:absolute;";
    hs += "left: 0px;";
    hs += "top:  0px;";
    hs += "width: 237px;";
    hs += "height: 23px;";
    hs += "background: #2d3e50;";
    hs += "background: rgba(45,62,80,0.784314);";
    hs += "border: 1px solid #ffffff;";
    hs += "border: 1px solid rgba(255,255,255,0.784314);";
    hs += cssPrefix + "background-clip: padding-box;";
    hs += "background-clip: padding-box;";
    hs += "border-radius: 2px;";
    hs += cssPrefix + "border-radius: 2px;";
    hs += "color: #ffffff;";
    hs += "text-align: center;";
    hs += "white-space: nowrap;";
    hs += "padding: 0px 1px 0px 1px;";
    hs += "overflow: hidden;";
    this._texto__text.setAttribute("style", hs);
    this._texto.ggTextDiv.innerHTML = "";
    this._texto.appendChild(this._texto__text);
    this.divSkin.appendChild(this._texto);
    this.divSkin.ggUpdateSize = function(w, h) {
      me.updateSize(me.divSkin);
    };
    this.divSkin.ggViewerInit = function() {};
    this.divSkin.ggLoaded = function() {
      me._default_loading_bar.style[domTransition] = "none";
      me._default_loading_bar.style.visibility = "hidden";
      me._default_loading_bar.ggVisible = false;
    };
    this.divSkin.ggReLoaded = function() {};
    this.divSkin.ggLoadedLevels = function() {};
    this.divSkin.ggReLoadedLevels = function() {};
    this.divSkin.ggEnterFullscreen = function() {
      me._fullscreenenter.style[domTransition] = "none";
      me._fullscreenenter.style.visibility = "hidden";
      me._fullscreenenter.ggVisible = false;
      me._fullscreenexit.style[domTransition] = "none";
      me._fullscreenexit.style.visibility = "inherit";
      me._fullscreenexit.ggVisible = true;
    };
    this.divSkin.ggExitFullscreen = function() {
      me._fullscreenenter.style[domTransition] = "none";
      me._fullscreenenter.style.visibility = "inherit";
      me._fullscreenenter.ggVisible = true;
      me._fullscreenexit.style[domTransition] = "none";
      me._fullscreenexit.style.visibility = "hidden";
      me._fullscreenexit.ggVisible = false;
    };
    this.skinTimerEvent();
  };
  this.hotspotProxyClick = function(id) {};
  this.hotspotProxyOver = function(id) {};
  this.hotspotProxyOut = function(id) {};
  this.changeActiveNode = function(id) {
    var newMarker = new Array();
    var i, j;
    var tags = me.player.userdata.tags;
    for (i = 0; i < nodeMarker.length; i++) {
      var match = false;
      if (nodeMarker[i].ggMarkerNodeId == id && id != "") match = true;
      for (j = 0; j < tags.length; j++) {
        if (nodeMarker[i].ggMarkerNodeId == tags[j]) match = true;
      }
      if (match) {
        newMarker.push(nodeMarker[i]);
      }
    }
    for (i = 0; i < activeNodeMarker.length; i++) {
      if (newMarker.indexOf(activeNodeMarker[i]) < 0) {
        if (activeNodeMarker[i].ggMarkerNormal) {
          activeNodeMarker[i].ggMarkerNormal.style.visibility = "inherit";
        }
        if (activeNodeMarker[i].ggMarkerActive) {
          activeNodeMarker[i].ggMarkerActive.style.visibility = "hidden";
        }
        if (activeNodeMarker[i].ggDeactivate) {
          activeNodeMarker[i].ggDeactivate();
        }
      }
    }
    for (i = 0; i < newMarker.length; i++) {
      if (activeNodeMarker.indexOf(newMarker[i]) < 0) {
        if (newMarker[i].ggMarkerNormal) {
          newMarker[i].ggMarkerNormal.style.visibility = "hidden";
        }
        if (newMarker[i].ggMarkerActive) {
          newMarker[i].ggMarkerActive.style.visibility = "inherit";
        }
        if (newMarker[i].ggActivate) {
          newMarker[i].ggActivate();
        }
      }
    }
    activeNodeMarker = newMarker;
  };
  this.skinTimerEvent = function() {
    setTimeout(function() {
      me.skinTimerEvent();
    }, 10);
    if (me.elementMouseDown["rotateccw"]) {
      me.player.changePanLog(-0.25, true);
    }
    if (me.elementMouseDown["rotatecw"]) {
      me.player.changePanLog(0.25, true);
    }
    if (me.elementMouseDown["zoomplus"]) {
      me.player.changeFovLog(-0.5, true);
    }
    if (me.elementMouseDown["zoomminus"]) {
      me.player.changeFovLog(1, true);
    }
    this._loading_text.ggUpdateText();
    var hs = "";
    if (me._loading_bar.ggParameter) {
      hs += parameterToTransform(me._loading_bar.ggParameter) + " ";
    }
    hs += "scale(" + (1 * me.player.getPercentLoaded() + 0) + ",1.0) ";
    me._loading_bar.style[domTransform] = hs;
    var hs = "";
    if (me._texto.ggParameter) {
      hs += parameterToTransform(me._texto.ggParameter) + " ";
    }
    hs += "translate(" + (1 * me.player.mouse.x + 0) + "px,0px) ";
    hs += "translate(0px," + (1 * me.player.mouse.y + 0) + "px) ";
    me._texto.style[domTransform] = hs;
  };
  function SkinHotspotClass(skinObj, hotspot) {
    var me = this;
    var flag = false;
    this.player = skinObj.player;
    this.skin = skinObj;
    this.hotspot = hotspot;
    this.elementMouseDown = new Array();
    this.elementMouseOver = new Array();
    this.__div = document.createElement("div");
    this.__div.setAttribute(
      "style",
      "position:absolute; left:0px;top:0px;visibility: inherit;"
    );

    this.findElements = function(id, regex) {
      return me.skin.findElements(id, regex);
    };

    if (hotspot.skinid == "school") {
      this.__div = document.createElement("div");
      this.__div.ggId = "school";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 240px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._image_1 = document.createElement("div");
      this._image_1.ggId = "Image 1";
      this._image_1.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._image_1.ggVisible = true;
      this._image_1.className = "ggskin ggskin_image";
      this._image_1.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -24px;";
      hs += "top:  -96px;";
      hs += "width: 48px;";
      hs += "height: 96px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._image_1.setAttribute("style", hs);
      this._image_1__img = document.createElement("img");
      this._image_1__img.className = "ggskin ggskin_image";
      this._image_1__img.setAttribute("src", basePath + "images/image_1.png");
      this._image_1__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._image_1__img.className = "ggskin ggskin_image";
      this._image_1__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._image_1__img);
      this._image_1.appendChild(this._image_1__img);
      this._image_1.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._image_1.style[domTransition] = "none";
        } else {
          me._image_1.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_1.style.opacity = "1";
        me._image_1.style.visibility = me._image_1.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._image_1.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._image_1.style[domTransition] = "none";
        } else {
          me._image_1.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_1.style.opacity = "0.8";
        me._image_1.style.visibility = me._image_1.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._image_1);
    } else if (hotspot.skinid == "bus") {
      this.__div = document.createElement("div");
      this.__div.ggId = "bus";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 144px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._image_2 = document.createElement("div");
      this._image_2.ggId = "Image 2";
      this._image_2.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._image_2.ggVisible = true;
      this._image_2.className = "ggskin ggskin_image";
      this._image_2.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -24px;";
      hs += "top:  -144px;";
      hs += "width: 48px;";
      hs += "height: 144px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._image_2.setAttribute("style", hs);
      this._image_2__img = document.createElement("img");
      this._image_2__img.className = "ggskin ggskin_image";
      this._image_2__img.setAttribute("src", basePath + "images/image_2.png");
      this._image_2__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._image_2__img.className = "ggskin ggskin_image";
      this._image_2__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._image_2__img);
      this._image_2.appendChild(this._image_2__img);
      this._image_2.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._image_2.style[domTransition] = "none";
        } else {
          me._image_2.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_2.style.opacity = "1";
        me._image_2.style.visibility = me._image_2.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._image_2.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._image_2.style[domTransition] = "none";
        } else {
          me._image_2.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_2.style.opacity = "0.8";
        me._image_2.style.visibility = me._image_2.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._image_2);
    } else if (hotspot.skinid == "briefcase") {
      this.__div = document.createElement("div");
      this.__div.ggId = "briefcase";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 54px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._mdi_briefcase = document.createElement("div");
      this._mdi_briefcase.ggId = "mdi_briefcase";
      this._mdi_briefcase.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._mdi_briefcase.ggVisible = true;
      this._mdi_briefcase.className = "ggskin ggskin_image";
      this._mdi_briefcase.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -24px;";
      hs += "top:  -46px;";
      hs += "width: 48px;";
      hs += "height: 48px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._mdi_briefcase.setAttribute("style", hs);
      this._mdi_briefcase__img = document.createElement("img");
      this._mdi_briefcase__img.className = "ggskin ggskin_image";
      this._mdi_briefcase__img.setAttribute(
        "src",
        basePath + "images/mdi_briefcase.png"
      );
      this._mdi_briefcase__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._mdi_briefcase__img.className = "ggskin ggskin_image";
      this._mdi_briefcase__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._mdi_briefcase__img);
      this._mdi_briefcase.appendChild(this._mdi_briefcase__img);
      this._mdi_briefcase.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._mdi_briefcase.style[domTransition] = "none";
        } else {
          me._mdi_briefcase.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._mdi_briefcase.style.opacity = "1";
        me._mdi_briefcase.style.visibility = me._mdi_briefcase.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._mdi_briefcase.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._mdi_briefcase.style[domTransition] = "none";
        } else {
          me._mdi_briefcase.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._mdi_briefcase.style.opacity = "0.8";
        me._mdi_briefcase.style.visibility = me._mdi_briefcase.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._mdi_briefcase);
    } else if (hotspot.skinid == "silverware") {
      this.__div = document.createElement("div");
      this.__div.ggId = "silverware";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 336px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._mdi_silverware = document.createElement("div");
      this._mdi_silverware.ggId = "mdi_silverware";
      this._mdi_silverware.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._mdi_silverware.ggVisible = true;
      this._mdi_silverware.className = "ggskin ggskin_image";
      this._mdi_silverware.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -24px;";
      hs += "top:  -144px;";
      hs += "width: 48px;";
      hs += "height: 144px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._mdi_silverware.setAttribute("style", hs);
      this._mdi_silverware__img = document.createElement("img");
      this._mdi_silverware__img.className = "ggskin ggskin_image";
      this._mdi_silverware__img.setAttribute(
        "src",
        basePath + "images/mdi_silverware.png"
      );
      this._mdi_silverware__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._mdi_silverware__img.className = "ggskin ggskin_image";
      this._mdi_silverware__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._mdi_silverware__img);
      this._mdi_silverware.appendChild(this._mdi_silverware__img);
      this._mdi_silverware.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._mdi_silverware.style[domTransition] = "none";
        } else {
          me._mdi_silverware.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._mdi_silverware.style.opacity = "1";
        me._mdi_silverware.style.visibility = me._mdi_silverware.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._mdi_silverware.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._mdi_silverware.style[domTransition] = "none";
        } else {
          me._mdi_silverware.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._mdi_silverware.style.opacity = "0.8";
        me._mdi_silverware.style.visibility = me._mdi_silverware.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._mdi_silverware);
    } else if (hotspot.skinid == "golf") {
      this.__div = document.createElement("div");
      this.__div.ggId = "golf";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 432px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._image_3 = document.createElement("div");
      this._image_3.ggId = "Image 3";
      this._image_3.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this._image_3.ggVisible = true;
      this._image_3.className = "ggskin ggskin_image";
      this._image_3.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -24px;";
      hs += "top:  -96px;";
      hs += "width: 48px;";
      hs += "height: 96px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._image_3.setAttribute("style", hs);
      this._image_3__img = document.createElement("img");
      this._image_3__img.className = "ggskin ggskin_image";
      this._image_3__img.setAttribute("src", basePath + "images/image_3.png");
      this._image_3__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._image_3__img.className = "ggskin ggskin_image";
      this._image_3__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._image_3__img);
      this._image_3.appendChild(this._image_3__img);
      this._image_3.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._image_3.style[domTransition] = "none";
        } else {
          me._image_3.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_3.style.opacity = "1";
        me._image_3.style.visibility = me._image_3.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._image_3.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._image_3.style[domTransition] = "none";
        } else {
          me._image_3.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_3.style.opacity = "0.8";
        me._image_3.style.visibility = me._image_3.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._image_3);
    } else {
      this.__div = document.createElement("div");
      this.__div.ggId = "store";
      this.__div.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
      this.__div.ggVisible = true;
      this.__div.className = "ggskin ggskin_hotspot";
      this.__div.ggType = "hotspot";
      hs = "position:absolute;";
      hs += "left: 528px;";
      hs += "top:  480px;";
      hs += "width: 5px;";
      hs += "height: 5px;";
      hs += cssPrefix + "transform-origin: 50% 50%;";
      hs += "visibility: inherit;";
      this.__div.setAttribute("style", hs);
      this.__div.onclick = function() {
        me.skin.hotspotProxyClick(me.hotspot.id);
      };
      this.__div.onmouseover = function() {
        me.player.hotspot = me.hotspot;
        me.skin.hotspotProxyOver(me.hotspot.id);
      };
      this.__div.onmouseout = function() {
        me.player.hotspot = me.player.emptyHotspot;
        me.skin.hotspotProxyOut(me.hotspot.id);
      };
      this._image_4 = document.createElement("div");
      this._image_4.ggId = "Image 4";
      this._image_4.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0.8, sy: 0.8 };
      this._image_4.ggVisible = true;
      this._image_4.className = "ggskin ggskin_image";
      this._image_4.ggType = "image";
      hs = "position:absolute;";
      hs += "left: -22px;";
      hs += "top:  -96px;";
      hs += "width: 48px;";
      hs += "height: 96px;";
      hs += cssPrefix + "transform-origin: 50% 100%;";
      hs +=
        cssPrefix +
        "transform: " +
        parameterToTransform(this._image_4.ggParameter) +
        ";";
      hs += "opacity: 0.8;";
      hs += "visibility: inherit;";
      this._image_4.setAttribute("style", hs);
      this._image_4__img = document.createElement("img");
      this._image_4__img.className = "ggskin ggskin_image";
      this._image_4__img.setAttribute("src", basePath + "images/image_4.png");
      this._image_4__img.setAttribute(
        "style",
        "position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;"
      );
      this._image_4__img.className = "ggskin ggskin_image";
      this._image_4__img["ondragstart"] = function() {
        return false;
      };
      me.player.checkLoaded.push(this._image_4__img);
      this._image_4.appendChild(this._image_4__img);
      this._image_4.onmouseover = function() {
        if (me.player.transitionsDisabled) {
          me._image_4.style[domTransition] = "none";
        } else {
          me._image_4.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_4.style.opacity = "1";
        me._image_4.style.visibility = me._image_4.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "1";
        me.skin._texto.style.visibility = me.skin._texto.ggVisible
          ? "inherit"
          : "hidden";
        me.skin._texto.ggText = me.hotspot.title;
        me.skin._texto.ggTextDiv.innerHTML = me.skin._texto.ggText;
        if (me.skin._texto.ggUpdateText) {
          me.skin._texto.ggUpdateText = function() {
            var hs = me.hotspot.title;
            if (hs != me.skin._texto.ggText) {
              me.skin._texto.ggText = hs;
              me.skin._texto.ggTextDiv.innerHTML = hs;
            }
          };
        }
      };
      this._image_4.onmouseout = function() {
        if (me.player.transitionsDisabled) {
          me._image_4.style[domTransition] = "none";
        } else {
          me._image_4.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me._image_4.style.opacity = "0.8";
        me._image_4.style.visibility = me._image_4.ggVisible
          ? "inherit"
          : "hidden";
        if (me.player.transitionsDisabled) {
          me.skin._texto.style[domTransition] = "none";
        } else {
          me.skin._texto.style[domTransition] = "all 500ms ease-out 0ms";
        }
        me.skin._texto.style.opacity = "0";
        me.skin._texto.style.visibility = "hidden";
      };
      this.__div.appendChild(this._image_4);
    }
  }
  this.addSkinHotspot = function(hotspot) {
    return new SkinHotspotClass(me, hotspot);
  };
  this.addSkin();
}
