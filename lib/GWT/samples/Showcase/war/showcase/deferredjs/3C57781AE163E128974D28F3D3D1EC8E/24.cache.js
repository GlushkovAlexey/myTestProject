$wnd.showcase.runAsyncCallback24("function HVb(a){this.a=a}\nfunction JVb(a){this.a=a}\nfunction LVb(a){this.a=a}\nfunction QVb(a,b){this.a=a;this.b=b}\nfunction Yp(a,b){a.remove(b)}\nfunction Vnc(a,b){Nnc(a,b);Yp((acc(),a.hb),b)}\nfunction Tbc(){var a;if(!Qbc||Wbc()){a=new yLc;Vbc(a);Qbc=a}return Qbc}\nfunction Wbc(){var a=$doc.cookie;if(a!=Rbc){Rbc=a;return true}else{return false}}\nfunction Xbc(a){Sbc&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction EVb(a){var b,c,d,e;if(Qnc(a.c).options.length<1){dqc(a.a,'');dqc(a.b,'');return}d=Qnc(a.c).selectedIndex;b=Rnc(a.c,d);c=(e=Tbc(),Vfb(e.Vh(b)));dqc(a.a,b);dqc(a.b,c)}\nfunction DVb(a,b){var c,d,e,f;Xp(Qnc(a.c));f=0;e=new hIc(Tbc());for(d=gIc(e);d.a.Ng();){c=Vfb(mIc(d));Snc(a.c,c);xEc(c,b)&&(f=Qnc(a.c).options.length-1)}Fm((ym(),xm),new QVb(a,f))}\nfunction Vbc(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=0;e<d.length;++e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(Sbc){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Wh(f,g)}}}\nfunction CVb(a){var b,c,d;c=new Tlc(3,3);a.c=new Xnc;b=new lfc('Delete');Dh((acc(),b.hb),vVc,true);klc(c,0,0,'<b><b>Existing Cookies:<\\/b><\\/b>');nlc(c,0,1,a.c);nlc(c,0,2,b);a.a=new nqc;klc(c,1,0,'<b><b>Name:<\\/b><\\/b>');nlc(c,1,1,a.a);a.b=new nqc;d=new lfc('Set Cookie');Dh(d.hb,vVc,true);klc(c,2,0,'<b><b>Value:<\\/b><\\/b>');nlc(c,2,1,a.b);nlc(c,2,2,d);Kh(d,new HVb(a),(Wu(),Wu(),Vu));Kh(a.c,new JVb(a),(Pu(),Pu(),Ou));Kh(b,new LVb(a),(null,Vu));DVb(a,null);return c}\nJCb(472,1,ORc,HVb);_.Oc=function IVb(a){var b,c,d;c=op(dh(this.a.a),LUc);d=op(dh(this.a.b),LUc);b=new nfb(fDb(jDb((new lfb).q.getTime()),{l:2513920,m:20,h:0}));if(c.length<1){$cc('You must specify a cookie name');return}Ybc(c,d,b);DVb(this.a,c)};var xsb=zDc(_Rc,'CwCookies/1',472);JCb(473,1,PRc,JVb);_.Nc=function KVb(a){EVb(this.a)};var ysb=zDc(_Rc,'CwCookies/2',473);JCb(474,1,ORc,LVb);_.Oc=function MVb(a){var b,c;c=Qnc(this.a.c).selectedIndex;if(c>-1&&c<Qnc(this.a.c).options.length){b=Rnc(this.a.c,c);Xbc(b);Vnc(this.a.c,c);EVb(this.a)}};var zsb=zDc(_Rc,'CwCookies/3',474);JCb(475,1,XRc);_.xc=function PVb(){YFb(this.b,CVb(this.a))};JCb(476,1,{},QVb);_.zc=function RVb(){this.b<Qnc(this.a.c).options.length&&Wnc(this.a.c,this.b);EVb(this.a)};_.b=0;var Bsb=zDc(_Rc,'CwCookies/5',476);var Qbc=null,Rbc;zOc(Kl)(24);\n//# sourceURL=showcase-24.js\n")