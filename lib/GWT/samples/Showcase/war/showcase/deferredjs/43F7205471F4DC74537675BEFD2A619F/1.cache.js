$wnd.showcase.runAsyncCallback1("function nHb(a){var b,c;b=Rfb(a.a.Wh(hUc),5);if(b==null){c=Kfb(Ifb(lBb,1),RQc,2,4,[iUc,jUc,kUc,lUc]);a.a.Xh(hUc,c);return c}else{return b}}\nfunction oHb(a){var b,c;b=Rfb(a.a.Wh(mUc),5);if(b==null){c=Kfb(Ifb(lBb,1),RQc,2,4,['Baseball',nUc,'Football','Hockey','Soccer',oUc]);a.a.Xh(mUc,c);return c}else{return b}}\nfunction OZb(a){var b,c,d,e,f,g,h,i;i=new Owc;Lwc(i,new ljc('<b>Select your favorite color:<\\/b>'));c=nHb(a.a);for(e=0;e<c.length;e++){b=c[e];f=new Irc(CRc,b);Afc(f,'cwRadioButton-color-'+b);e==2&&(Dq(f.c,true),lh(f,sh(f.hb)+'-'+_Rc,true));Lwc(i,f)}Lwc(i,new ljc('<br><b>Select your favorite sport:<\\/b>'));h=oHb(a.a);for(d=0;d<h.length;d++){g=h[d];f=new Irc('sport',g);Afc(f,'cwRadioButton-sport-'+xEc(g,' ',''));d==2&&Bfc(f,(WCc(),WCc(),VCc));Lwc(i,f)}return i}\nvar hUc='cwRadioButtonColors',mUc='cwRadioButtonSports';LCb(408,1,QRc);_.xc=function TZb(){cGb(this.b,OZb(this.a))};sOc(Cl)(1);\n//# sourceURL=showcase-1.js\n")