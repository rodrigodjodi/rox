// Garden Gnome Software - Skin
// Object2VR 3.1.4/10767
// Filename: pipe-krpano_r0.ggsk
// Generated ter 18. dez 09:32:47 2018

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		this._container_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-256 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-80 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -256px;';
		hs+='top:  -80px;';
		hs+='width: 512px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._container_1.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._container_1.setAttribute('style',hs);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		this._rectangle_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-265 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-80 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -265px;';
		hs+='top:  -80px;';
		hs+='width: 527px;';
		hs+='height: 79px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		hs+='background: #2d3e50;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		this._rectangle_1.setAttribute('style',hs);
		this._container_1.appendChild(this._rectangle_1);
		this._home=document.createElement('div');
		this._home.ggId="home";
		this._home.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._home.ggVisible=true;
		this._home.className='ggskin ggskin_button';
		this._home.ggType='button';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._home.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._home.setAttribute('style',hs);
		this._home__img=document.createElement('img');
		this._home__img.className='ggskin ggskin_button';
		this._home__img.setAttribute('src',basePath + 'images/home.png');
		this._home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._home__img.className='ggskin ggskin_button';
		this._home__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._home__img);
		this._home.appendChild(this._home__img);
		this._home.onclick=function () {
			me.player.moveToDefaultView(0.5);
		}
		this._home.onmouseover=function () {
			me._home.style[domTransition]='none';
			me._home.ggParameter.sx=1;me._home.ggParameter.sy=1;
			me._home.style[domTransform]=parameterToTransform(me._home.ggParameter);
		}
		this._home.onmouseout=function () {
			me._home.style[domTransition]='none';
			me._home.ggParameter.sx=0.8;me._home.ggParameter.sy=0.8;
			me._home.style[domTransform]=parameterToTransform(me._home.ggParameter);
		}
		this._container_1.appendChild(this._home);
		this._left0=document.createElement('div');
		this._left0.ggId="left";
		this._left0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left0.ggVisible=true;
		this._left0.className='ggskin ggskin_button';
		this._left0.ggType='button';
		hs ='position:absolute;';
		hs+='left: 64px;';
		hs+='top:  15px;';
		hs+='width: 64px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left0.setAttribute('style',hs);
		this._left0__img=document.createElement('img');
		this._left0__img.className='ggskin ggskin_button';
		this._left0__img.setAttribute('src',basePath + 'images/left0.png');
		this._left0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left0__img.className='ggskin ggskin_button';
		this._left0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left0__img);
		this._left0.appendChild(this._left0__img);
		this._left0.onmouseover=function () {
			me._left0.style[domTransition]='none';
			me._left0.ggParameter.sx=1.2;me._left0.ggParameter.sy=1.2;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
		}
		this._left0.onmouseout=function () {
			me._left0.style[domTransition]='none';
			me._left0.ggParameter.sx=1;me._left0.ggParameter.sy=1;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
			me.elementMouseDown['left0']=false;
		}
		this._left0.onmousedown=function () {
			me._left0.style[domTransition]='none';
			me._left0.ggParameter.sx=0.8;me._left0.ggParameter.sy=0.8;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
			me.elementMouseDown['left0']=true;
		}
		this._left0.onmouseup=function () {
			me._left0.style[domTransition]='none';
			me._left0.ggParameter.sx=1;me._left0.ggParameter.sy=1;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
			me.elementMouseDown['left0']=false;
		}
		this._left0.ontouchend=function () {
			me.elementMouseDown['left0']=false;
		}
		this._container_1.appendChild(this._left0);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button';
		this._right.ggType='button';
		hs ='position:absolute;';
		hs+='left: 128px;';
		hs+='top:  15px;';
		hs+='width: 64px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right.style[domTransition]='none';
			me._right.ggParameter.sx=1.2;me._right.ggParameter.sy=1.2;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
		}
		this._right.onmouseout=function () {
			me._right.style[domTransition]='none';
			me._right.ggParameter.sx=1;me._right.ggParameter.sy=1;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me._right.style[domTransition]='none';
			me._right.ggParameter.sx=0.8;me._right.ggParameter.sy=0.8;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me._right.style[domTransition]='none';
			me._right.ggParameter.sx=1;me._right.ggParameter.sy=1;
			me._right.style[domTransform]=parameterToTransform(me._right.ggParameter);
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._container_1.appendChild(this._right);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button';
		this._left.ggType='button';
		hs ='position:absolute;';
		hs+='left: 192px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left.style[domTransition]='none';
			me._left.ggParameter.sx=1.2;me._left.ggParameter.sy=1.2;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
		}
		this._left.onmouseout=function () {
			me._left.style[domTransition]='none';
			me._left.ggParameter.sx=1;me._left.ggParameter.sy=1;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me._left.style[domTransition]='none';
			me._left.ggParameter.sx=0.8;me._left.ggParameter.sy=0.8;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me._left.style[domTransition]='none';
			me._left.ggParameter.sx=1;me._left.ggParameter.sy=1;
			me._left.style[domTransform]=parameterToTransform(me._left.ggParameter);
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._container_1.appendChild(this._left);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button';
		this._down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down.style[domTransition]='none';
			me._down.ggParameter.sx=1.2;me._down.ggParameter.sy=1.2;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
		}
		this._down.onmouseout=function () {
			me._down.style[domTransition]='none';
			me._down.ggParameter.sx=1;me._down.ggParameter.sy=1;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me._down.style[domTransition]='none';
			me._down.ggParameter.sx=0.8;me._down.ggParameter.sy=0.8;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me._down.style[domTransition]='none';
			me._down.ggParameter.sx=1;me._down.ggParameter.sy=1;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._container_1.appendChild(this._down);
		this._plus=document.createElement('div');
		this._plus.ggId="plus";
		this._plus.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._plus.ggVisible=true;
		this._plus.className='ggskin ggskin_button';
		this._plus.ggType='button';
		hs ='position:absolute;';
		hs+='left: 320px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._plus.setAttribute('style',hs);
		this._plus__img=document.createElement('img');
		this._plus__img.className='ggskin ggskin_button';
		this._plus__img.setAttribute('src',basePath + 'images/plus.png');
		this._plus__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._plus__img.className='ggskin ggskin_button';
		this._plus__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._plus__img);
		this._plus.appendChild(this._plus__img);
		this._plus.onmouseover=function () {
			me._plus.style[domTransition]='none';
			me._plus.ggParameter.sx=1.2;me._plus.ggParameter.sy=1.2;
			me._plus.style[domTransform]=parameterToTransform(me._plus.ggParameter);
		}
		this._plus.onmouseout=function () {
			me._plus.style[domTransition]='none';
			me._plus.ggParameter.sx=1;me._plus.ggParameter.sy=1;
			me._plus.style[domTransform]=parameterToTransform(me._plus.ggParameter);
			me.elementMouseDown['plus']=false;
		}
		this._plus.onmousedown=function () {
			me._plus.style[domTransition]='none';
			me._plus.ggParameter.sx=0.8;me._plus.ggParameter.sy=0.8;
			me._plus.style[domTransform]=parameterToTransform(me._plus.ggParameter);
			me.elementMouseDown['plus']=true;
		}
		this._plus.onmouseup=function () {
			me._plus.style[domTransition]='none';
			me._plus.ggParameter.sx=1;me._plus.ggParameter.sy=1;
			me._plus.style[domTransform]=parameterToTransform(me._plus.ggParameter);
			me.elementMouseDown['plus']=false;
		}
		this._plus.ontouchend=function () {
			me.elementMouseDown['plus']=false;
		}
		this._container_1.appendChild(this._plus);
		this._minus=document.createElement('div');
		this._minus.ggId="minus";
		this._minus.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._minus.ggVisible=true;
		this._minus.className='ggskin ggskin_button';
		this._minus.ggType='button';
		hs ='position:absolute;';
		hs+='left: 384px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._minus.setAttribute('style',hs);
		this._minus__img=document.createElement('img');
		this._minus__img.className='ggskin ggskin_button';
		this._minus__img.setAttribute('src',basePath + 'images/minus.png');
		this._minus__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._minus__img.className='ggskin ggskin_button';
		this._minus__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._minus__img);
		this._minus.appendChild(this._minus__img);
		this._minus.onmouseover=function () {
			me._minus.style[domTransition]='none';
			me._minus.ggParameter.sx=1.2;me._minus.ggParameter.sy=1.2;
			me._minus.style[domTransform]=parameterToTransform(me._minus.ggParameter);
		}
		this._minus.onmouseout=function () {
			me._minus.style[domTransition]='none';
			me._minus.ggParameter.sx=1;me._minus.ggParameter.sy=1;
			me._minus.style[domTransform]=parameterToTransform(me._minus.ggParameter);
			me.elementMouseDown['minus']=false;
		}
		this._minus.onmousedown=function () {
			me._minus.style[domTransition]='none';
			me._minus.ggParameter.sx=0.8;me._minus.ggParameter.sy=0.8;
			me._minus.style[domTransform]=parameterToTransform(me._minus.ggParameter);
			me.elementMouseDown['minus']=true;
		}
		this._minus.onmouseup=function () {
			me._minus.style[domTransition]='none';
			me._minus.ggParameter.sx=1;me._minus.ggParameter.sy=1;
			me._minus.style[domTransform]=parameterToTransform(me._minus.ggParameter);
			me.elementMouseDown['minus']=false;
		}
		this._minus.ontouchend=function () {
			me.elementMouseDown['minus']=false;
		}
		this._container_1.appendChild(this._minus);
		this._enterfs=document.createElement('div');
		this._enterfs.ggId="enterFS";
		this._enterfs.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._enterfs.ggVisible=true;
		this._enterfs.className='ggskin ggskin_button';
		this._enterfs.ggType='button';
		hs ='position:absolute;';
		hs+='left: 448px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._enterfs.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._enterfs.setAttribute('style',hs);
		this._enterfs__img=document.createElement('img');
		this._enterfs__img.className='ggskin ggskin_button';
		this._enterfs__img.setAttribute('src',basePath + 'images/enterfs.png');
		this._enterfs__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._enterfs__img.className='ggskin ggskin_button';
		this._enterfs__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._enterfs__img);
		this._enterfs.appendChild(this._enterfs__img);
		this._enterfs.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._enterfs.onmouseover=function () {
			me._enterfs.style[domTransition]='none';
			me._enterfs.ggParameter.sx=1;me._enterfs.ggParameter.sy=1;
			me._enterfs.style[domTransform]=parameterToTransform(me._enterfs.ggParameter);
		}
		this._enterfs.onmouseout=function () {
			me._enterfs.style[domTransition]='none';
			me._enterfs.ggParameter.sx=0.8;me._enterfs.ggParameter.sy=0.8;
			me._enterfs.style[domTransform]=parameterToTransform(me._enterfs.ggParameter);
		}
		this._container_1.appendChild(this._enterfs);
		this._exitfs=document.createElement('div');
		this._exitfs.ggId="exitFS";
		this._exitfs.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._exitfs.ggVisible=false;
		this._exitfs.className='ggskin ggskin_button';
		this._exitfs.ggType='button';
		hs ='position:absolute;';
		hs+='left: 448px;';
		hs+='top:  10px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._exitfs.ggParameter) + ';';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._exitfs.setAttribute('style',hs);
		this._exitfs__img=document.createElement('img');
		this._exitfs__img.className='ggskin ggskin_button';
		this._exitfs__img.setAttribute('src',basePath + 'images/exitfs.png');
		this._exitfs__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._exitfs__img.className='ggskin ggskin_button';
		this._exitfs__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._exitfs__img);
		this._exitfs.appendChild(this._exitfs__img);
		this._exitfs.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._exitfs.onmouseover=function () {
			me._exitfs.style[domTransition]='none';
			me._exitfs.ggParameter.sx=1;me._exitfs.ggParameter.sy=1;
			me._exitfs.style[domTransform]=parameterToTransform(me._exitfs.ggParameter);
		}
		this._exitfs.onmouseout=function () {
			me._exitfs.style[domTransition]='none';
			me._exitfs.ggParameter.sx=0.8;me._exitfs.ggParameter.sy=0.8;
			me._exitfs.style[domTransform]=parameterToTransform(me._exitfs.ggParameter);
		}
		this._container_1.appendChild(this._exitfs);
		this.divSkin.appendChild(this._container_1);
		this._default_loading_bar=document.createElement('div');
		this._default_loading_bar.ggId="default loading bar";
		this._default_loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._default_loading_bar.ggVisible=true;
		this._default_loading_bar.className='ggskin ggskin_container';
		this._default_loading_bar.ggType='container';
		this._default_loading_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-95 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-69 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -95px;';
		hs+='top:  -69px;';
		hs+='width: 180px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._default_loading_bar.setAttribute('style',hs);
		this._loading_text=document.createElement('div');
		this._loading_text__text=document.createElement('div');
		this._loading_text.className='ggskin ggskin_textdiv';
		this._loading_text.ggTextDiv=this._loading_text__text;
		this._loading_text.ggId="loading text";
		this._loading_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_text.ggVisible=true;
		this._loading_text.className='ggskin ggskin_text';
		this._loading_text.ggType='text';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 178px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loading_text__text.setAttribute('style',hs);
		this._loading_text.ggUpdateText=function() {
			var hs="<b>Carregando..."+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._loading_text.ggUpdateText();
		this._loading_text.appendChild(this._loading_text__text);
		this._default_loading_bar.appendChild(this._loading_text);
		this._loading_bar=document.createElement('div');
		this._loading_bar.ggId="loading bar";
		this._loading_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_bar.ggVisible=true;
		this._loading_bar.className='ggskin ggskin_rectangle';
		this._loading_bar.ggType='rectangle';
		this._loading_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-91 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(4 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -91px;';
		hs+='top:  4px;';
		hs+='width: 178px;';
		hs+='height: 8px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ddd9ff;';
		hs+='background: rgba(221,217,255,0.298039);';
		hs+='border: 2px solid #ffffff;';
		this._loading_bar.setAttribute('style',hs);
		this._default_loading_bar.appendChild(this._loading_bar);
		this.divSkin.appendChild(this._default_loading_bar);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._default_loading_bar.style[domTransition]='none';
			me._default_loading_bar.style.visibility='hidden';
			me._default_loading_bar.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
			me._enterfs.style[domTransition]='none';
			me._enterfs.style.visibility='hidden';
			me._enterfs.ggVisible=false;
			me._exitfs.style[domTransition]='none';
			me._exitfs.style.visibility='inherit';
			me._exitfs.ggVisible=true;
		}
		this.divSkin.ggExitFullscreen=function() {
			me._enterfs.style[domTransition]='none';
			me._enterfs.style.visibility='inherit';
			me._enterfs.ggVisible=true;
			me._exitfs.style[domTransition]='none';
			me._exitfs.style.visibility='hidden';
			me._exitfs.ggVisible=false;
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['left0']) {
			me.player.changePanLog(0.25,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-0.25,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changeTiltLog(0.25,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-0.25,true);
		}
		if (me.elementMouseDown['plus']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['minus']) {
			me.player.changeFovLog(1,true);
		}
		this._loading_text.ggUpdateText();
		var hs='';
		if (me._loading_bar.ggParameter) {
			hs+=parameterToTransform(me._loading_bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loading_bar.style[domTransform]=hs;
	};
	this.addSkin();
};