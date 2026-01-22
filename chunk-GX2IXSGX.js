import{$ as N,D as re,E as Ce,H as Me,I as ke,J as q,M as ce,O as $,Q as le,R as Ie,W as ee,X as V,Z as O,b as xe,e as Te,g as X,j as z,ka as De,l as Z,la as Be,na as Fe,oa as W,pa as ze}from"./chunk-CHKF3THV.js";import{$a as y,Bc as S,Cb as E,Da as pe,Db as Q,Ec as J,Ia as c,Ib as L,Jb as r,Kb as D,Lb as B,Lc as C,Mb as w,Mc as ye,Nb as j,Ob as b,Pb as g,Rc as we,Sc as ie,Tb as ge,Uc as ae,Va as k,W as H,Wa as Y,Wc as se,X as M,Xb as l,Y as U,Yb as me,Za as I,Zb as fe,_a as ue,aa as m,bb as be,ga as P,ha as R,hc as F,ia as K,kc as oe,lc as ve,oa as A,ob as v,pb as d,qb as p,sc as he,ta as f,tb as u,ub as _,va as de,vb as x,wb as T,yc as h,zc as _e}from"./chunk-HVGVGDU3.js";var Oe=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`;var He=["container"],Ke=["icon"],qe=["closeicon"],$e=["*"],We=(t,s)=>({showTransitionParams:t,hideTransitionParams:s}),Ge=t=>({value:"visible()",params:t}),Ue=t=>({closeCallback:t});function Ye(t,s){t&1&&E(0)}function Je(t,s){if(t&1&&y(0,Ye,1,0,"ng-container",7),t&2){let e=r(2);u("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function Xe(t,s){if(t&1&&T(0,"i"),t&2){let e=r(2);l(e.cn(e.cx("icon"),e.icon))}}function Ze(t,s){if(t&1&&T(0,"span",9),t&2){let e=r(3);u("ngClass",e.cx("text"))("innerHTML",e.text,pe)}}function et(t,s){if(t&1&&(_(0,"div"),y(1,Ze,1,2,"span",8),x()),t&2){let e=r(2);c(),u("ngIf",!e.escape)}}function tt(t,s){if(t&1&&(_(0,"span",5),me(1),x()),t&2){let e=r(3);u("ngClass",e.cx("text")),c(),fe(e.text)}}function nt(t,s){if(t&1&&y(0,tt,2,2,"span",10),t&2){let e=r(2);u("ngIf",e.escape&&e.text)}}function ot(t,s){t&1&&E(0)}function it(t,s){if(t&1&&y(0,ot,1,0,"ng-container",11),t&2){let e=r(2);u("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",oe(2,Ue,e.close.bind(e)))}}function at(t,s){if(t&1&&(_(0,"span",5),B(1),x()),t&2){let e=r(2);u("ngClass",e.cx("text"))}}function st(t,s){if(t&1&&T(0,"i",5),t&2){let e=r(3);l(e.cn(e.cx("closeIcon"),e.closeIcon)),u("ngClass",e.closeIcon)}}function rt(t,s){t&1&&E(0)}function ct(t,s){if(t&1&&y(0,rt,1,0,"ng-container",7),t&2){let e=r(3);u("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function lt(t,s){if(t&1&&(K(),T(0,"svg",15)),t&2){let e=r(3);l(e.cx("closeIcon"))}}function dt(t,s){if(t&1){let e=Q();_(0,"button",12),L("click",function(n){P(e);let i=r(2);return R(i.close(n))}),d(1,st,1,3,"i",13),d(2,ct,1,1,"ng-container"),d(3,lt,1,2,":svg:svg",14),x()}if(t&2){let e=r(2);l(e.cx("closeButton")),v("aria-label",e.closeAriaLabel),c(),p(e.closeIcon?1:-1),c(),p(e.closeIconTemplate||e._closeIconTemplate?2:-1),c(),p(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function pt(t,s){if(t&1&&(_(0,"div",2)(1,"div"),d(2,Je,1,1,"ng-container"),d(3,Xe,1,2,"i",3),y(4,et,2,1,"div",4)(5,nt,1,1,"ng-template",null,0,he),d(7,it,1,4,"ng-container")(8,at,2,1,"span",5),d(9,dt,4,6,"button",6),x()()),t&2){let e=ge(6),o=r();l(o.cn(o.cx("root"),o.styleClass)),u("@messageAnimation",oe(16,Ge,ve(13,We,o.showTransitionOptions,o.hideTransitionOptions))),v("aria-live","polite")("role","alert"),c(),l(o.cx("content")),c(),p(o.iconTemplate||o._iconTemplate?2:-1),c(),p(o.icon?3:-1),c(),u("ngIf",!o.escape)("ngIfElse",e),c(3),p(o.containerTemplate||o._containerTemplate?7:8),c(2),p(o.closable?9:-1)}}var ut={root:({instance:t})=>["p-message p-component p-message-"+t.severity,"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ne=(()=>{class t extends O{name="message";theme=Oe;classes=ut;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var bt=(()=>{class t extends N{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new be;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=A(!0);_componentStyle=m(Ne);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-message"]],contentQueries:function(o,n,i){if(o&1&&(w(i,He,4),w(i,Ke,4),w(i,qe,4),w(i,ee,4)),o&2){let a;b(a=g())&&(n.containerTemplate=a.first),b(a=g())&&(n.iconTemplate=a.first),b(a=g())&&(n.closeIconTemplate=a.first),b(a=g())&&(n.templates=a)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",C],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",C],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[F([Ne]),I],ngContentSelectors:$e,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"class"],[1,"p-message","p-component"],[3,"class"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",3,"class"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",3,"click"],[3,"class","ngClass"],["data-p-icon","times",3,"class"],["data-p-icon","times"]],template:function(o,n){o&1&&(D(),d(0,pt,10,18,"div",1)),o&2&&p(n.visible()?0:-1)},dependencies:[z,xe,Te,X,Fe,W,V],encapsulation:2,data:{animation:[we("messageAnimation",[se(":enter",[ae({opacity:0,transform:"translateY(-25%)"}),ie("{{showTransitionParams}}")]),se(":leave",[ie("{{hideTransitionParams}}",ae({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),on=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[bt,V,V]})}return t})();var Ee=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var gt=["previcon"],mt=["nexticon"],ft=["content"],vt=["prevButton"],ht=["nextButton"],_t=["inkbar"],yt=["tabs"],G=["*"];function xt(t,s){t&1&&E(0)}function Tt(t,s){if(t&1&&y(0,xt,1,0,"ng-container",11),t&2){let e=r(2);u("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function wt(t,s){t&1&&(K(),T(0,"svg",10))}function Ct(t,s){if(t&1){let e=Q();_(0,"button",9,3),L("click",function(){P(e);let n=r();return R(n.onPrevButtonClick())}),d(2,Tt,1,1,"ng-container")(3,wt,1,0,":svg:svg",10),x()}if(t&2){let e=r();l(e.cx("prevButton")),v("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),p(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function Mt(t,s){t&1&&E(0)}function kt(t,s){if(t&1&&y(0,Mt,1,0,"ng-container",11),t&2){let e=r(2);u("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function It(t,s){t&1&&(K(),T(0,"svg",12))}function Dt(t,s){if(t&1){let e=Q();_(0,"button",9,4),L("click",function(){P(e);let n=r();return R(n.onNextButtonClick())}),d(2,kt,1,1,"ng-container")(3,It,1,0,":svg:svg",12),x()}if(t&2){let e=r();l(e.cx("nextButton")),v("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),c(2),p(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Bt(t,s){t&1&&B(0)}var Ft={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},Le=(()=>{class t extends O{name="tabs";theme=Ee;classes=Ft;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var zt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Se=(()=>{class t extends O{name="tablist";classes=zt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Ae=(()=>{class t extends N{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=m(H(()=>te));isPrevButtonEnabled=A(!1);isNextButtonEnabled=A(!1);resizeObserver;showNavigators=h(()=>this.pcTabs.showNavigators());tabindex=h(()=>this.pcTabs.tabindex());scrollable=h(()=>this.pcTabs.scrollable());_componentStyle=m(Se);constructor(){super(),_e(()=>{this.pcTabs.value(),Z(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&Z(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,o=$(e),n=Math.abs(e.scrollLeft)-o,i=n<=0?0:n;e.scrollLeft=re(e)?-1*i:i}onNextButtonClick(){let e=this.content.nativeElement,o=$(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+o,i=e.scrollWidth-o,a=n>=i?i:n;e.scrollLeft=re(e)?-1*a:a}updateButtonState(){let e=this.content?.nativeElement,o=this.el?.nativeElement,{scrollWidth:n,offsetWidth:i}=e,a=Math.abs(e.scrollLeft),ne=$(e);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(o.offsetWidth>=i&&a!==n-ne)}updateInkBar(){let e=this.content?.nativeElement,o=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,i=Me(e,'[data-pc-name="tab"][data-p-active="true"]');o&&(o.style.width=Ce(i)+"px",o.style.left=ce(i).left-ce(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,o=this.nextButton?.nativeElement;return[e,o].reduce((n,i)=>i?n+$(i):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=k({type:t,selectors:[["p-tablist"]],contentQueries:function(o,n,i){if(o&1&&(w(i,gt,4),w(i,mt,4),w(i,ee,4)),o&2){let a;b(a=g())&&(n.prevIconTemplate=a.first),b(a=g())&&(n.nextIconTemplate=a.first),b(a=g())&&(n.templates=a)}},viewQuery:function(o,n){if(o&1&&(j(ft,5),j(vt,5),j(ht,5),j(_t,5),j(yt,5)),o&2){let i;b(i=g())&&(n.content=i.first),b(i=g())&&(n.prevButton=i.first),b(i=g())&&(n.nextButton=i.first),b(i=g())&&(n.inkbar=i.first),b(i=g())&&(n.tabs=i.first)}},hostVars:3,hostBindings:function(o,n){o&2&&(v("data-pc-name","tablist"),l(n.cx("root")))},features:[F([Se]),I],ngContentSelectors:G,decls:9,vars:9,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"class"],[3,"scroll"],["role","tablist"],["role","presentation"],["type","button","pRipple","",3,"click"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(o,n){if(o&1){let i=Q();D(),d(0,Ct,4,6,"button",5),_(1,"div",6,0),L("scroll",function(ne){return P(i),R(n.onScroll(ne))}),_(3,"div",7,1),B(5),T(6,"span",8,2),x()(),d(8,Dt,4,6,"button",5)}o&2&&(p(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),c(),l(n.cx("content")),c(2),l(n.cx("tabList")),c(3),l(n.cx("activeBar")),v("data-pc-section","inkbar"),c(2),p(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[z,X,De,Be,ze,W,V],encapsulation:2,changeDetection:0})}return t})(),Ot={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},Ve=(()=>{class t extends O{name="tab";classes=Ot;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Nt=(()=>{class t extends N{value=J();disabled=S(!1,{transform:C});pcTabs=m(H(()=>te));pcTabList=m(H(()=>Ae));el=m(de);_componentStyle=m(Ve);ripple=h(()=>this.config.ripple());id=h(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=h(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=h(()=>le(this.pcTabs.value(),this.value()));tabindex=h(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(e){let o=this.findNextTab(e.currentTarget);o?this.changeFocusedTab(e,o):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let o=this.findPrevTab(e.currentTarget);o?this.changeFocusedTab(e,o):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let o=this.findFirstTab();this.changeFocusedTab(e,o),e.preventDefault()}onEndKey(e){let o=this.findLastTab();this.changeFocusedTab(e,o),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}findNextTab(e,o=!1){let n=o?e:e.nextElementSibling;return n?q(n,"data-p-disabled")||q(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(e,o=!1){let n=o?e:e.previousElementSibling;return n?q(n,"data-p-disabled")||q(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,o){ke(o),this.scrollInView(o)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){Z(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(o,n){o&1&&L("focus",function(a){return n.onFocus(a)})("click",function(a){return n.onClick(a)})("keydown",function(a){return n.onKeyDown(a)}),o&2&&(v("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),l(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[F([Ve]),ue([W]),I],ngContentSelectors:G,decls:1,vars:0,template:function(o,n){o&1&&(D(),B(0))},dependencies:[z,V],encapsulation:2,changeDetection:0})}return t})(),Et={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},Pe=(()=>{class t extends O{name="tabpanel";classes=Et;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Lt=(()=>{class t extends N{pcTabs=m(H(()=>te));value=J(void 0);id=h(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=h(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=h(()=>le(this.pcTabs.value(),this.value()));_componentStyle=m(Pe);static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-tabpanel"]],hostVars:7,hostBindings:function(o,n){o&2&&(v("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),l(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[F([Pe]),I],ngContentSelectors:G,decls:1,vars:1,template:function(o,n){o&1&&(D(),d(0,Bt,1,0)),o&2&&p(n.active()?0:-1)},dependencies:[z],encapsulation:2,changeDetection:0})}return t})(),St={root:"p-tabpanels"},Re=(()=>{class t extends O{name="tabpanels";classes=St;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Vt=(()=>{class t extends N{_componentStyle=m(Re);static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-tabpanels"]],hostVars:4,hostBindings:function(o,n){o&2&&(v("data-pc-name","tabpanels")("role","presentation"),l(n.cx("root")))},features:[F([Re]),I],ngContentSelectors:G,decls:1,vars:0,template:function(o,n){o&1&&(D(),B(0))},dependencies:[z],encapsulation:2,changeDetection:0})}return t})(),te=(()=>{class t extends N{value=J(void 0);scrollable=S(!1,{transform:C});lazy=S(!1,{transform:C});selectOnFocus=S(!1,{transform:C});showNavigators=S(!0,{transform:C});tabindex=S(0,{transform:ye});id=A(Ie("pn_id_"));_componentStyle=m(Le);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-tabs"]],hostVars:4,hostBindings:function(o,n){o&2&&(v("data-pc-name","tabs")("id",n.id()),l(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[F([Le]),I],ngContentSelectors:G,decls:1,vars:0,template:function(o,n){o&1&&(D(),B(0))},dependencies:[z],encapsulation:2,changeDetection:0})}return t})(),In=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Y({type:t});static \u0275inj=U({imports:[te,Vt,Lt,Ae,Nt]})}return t})();export{on as a,Ae as b,Nt as c,Lt as d,Vt as e,te as f,In as g};
