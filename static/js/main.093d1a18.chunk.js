(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),l=(n(95),n(18)),c=n(19),s=n(22),u=n(20),h=n(23),m=(n(51),n(26)),p=n.n(m),b=n(49),d=n(27),f=n(16),g=n.n(f),v=n(21),y=n(85),E=n.n(y),O=n(82),w=n.n(O),B=n(38),j=n.n(B),x=n(84),C=n.n(x),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleMobileMenuOpen=function(e){var t=e.currentTarget;n.setState(function(e){return Object(b.a)({},e,{mobileMenuOpen:!0,menuAnchor:t})})},n.handleMobileMenuClose=function(){n.setState(function(e){return Object(b.a)({},e,{mobileMenuOpen:!1,menuAnchor:null})})},n.state={trackerType:"Crime",mobileMenuOpen:!1,menuAnchor:null},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=o.a.createElement(w.a,{anchorEl:this.state.menuAnchor,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:this.state.mobileMenuOpen,onClose:this.handleMobileMenuClose},o.a.createElement(j.a,{onClick:this.handleMobileMenuClose},o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.navButtonLabel},href:"#"},"HOME")),o.a.createElement(j.a,{onClick:this.handleMobileMenuClose},o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.navButtonLabel},href:"#"},"ABOUT US")),o.a.createElement(j.a,{onClick:this.handleMobileMenuClose},o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.formButton},href:"#body"},"LETS START")));return o.a.createElement(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",classes:{container:e.navBarContainer}},o.a.createElement("div",{className:e.logoContainer},o.a.createElement("a",{className:e.navLogo,href:window.location.href},o.a.createElement("div",{className:e.logoBox},"LOGO"))),o.a.createElement("div",{className:e.navButtonContainer},o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.navButtonLabel},href:"#"},"HOME"),o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.navButtonLabel},href:"#"},"ABOUT US"),o.a.createElement(g.a,{classes:{root:e.navButtonRoot,label:e.formButton},href:"#body"},"LETS START")),o.a.createElement("div",{className:e.navBarButtonMobile},o.a.createElement(C.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(E.a,null))),t)}}]),t}(a.Component),M=Object(v.withStyles)(function(e){return{logoBox:{width:"200px",height:"57px"},navBarContainer:Object(d.a)({width:"90%",margin:"auto",height:"110px"},e.breakpoints.up("md"),{width:"70%"}),logoContainer:{},navBarButtonMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),navLogo:{fontSize:"26px",marginBottom:"-10px",display:"inline-block",textDecoration:"none"},navButtonContainer:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),navButtonRoot:{width:"155px",height:"25px",borderWidth:"2px",borderColor:"transparent"},navButtonLabel:{fontFamily:"raleway",fontWeight:"400",fontSize:"12px",lineHeight:"25px"},formButton:{fontFamily:"raleway",fontSize:"12px",lineHeight:"25px",fontWeight:"700"}}},{withTheme:!0})(k),S=window.location.protocol+"//"+window.location.host+"/images",T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("".concat(S,"/bg1.jpg"));var e=this.props.classes;return o.a.createElement("div",{className:e.imageContainer},o.a.createElement("div",{className:e.imageBox}))}}]),t}(a.Component),L=Object(v.withStyles)(function(e){return{imageContainer:{width:"100%"},imageBox:{backgroundImage:"url(".concat(S,"/bg1.jpg)"),width:"100%",height:"408px",backgroundSize:"cover"}}},{withTheme:!0})(T),R=n(86),A=n.n(R),N=n(37),z=n.n(N),W=n(89),F=n(87),H=n(88),I=n.n(H),U=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).openForm=function(){n.typeformEmbed.typeform.open()},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByClassName("ReactTypeformEmbed")[0].style.display="none"}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(I.a,{id:"body"},o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},o.a.createElement("div",{style:{height:"100px"}}),o.a.createElement(g.a,{classes:{root:t.formButtonRoot,label:t.formButtonLabel},href:"#",variant:"contained",onClick:this.openForm},"Let's Link",o.a.createElement(A.a,{path:W.a,size:1.5,color:"#fff",className:t.linkIcon})),o.a.createElement("div",{style:{height:"1000px"}}),o.a.createElement(F.ReactTypeformEmbed,{popup:!0,url:"https://haochen633226.typeform.com/to/E7Z2CW",autoOpen:!1,ref:function(t){e.typeformEmbed=t},hideHeaders:!0,hideFooter:!0,buttonText:"Go!",style:{top:100}})))}}]),t}(a.Component),D=Object(v.withStyles)(function(e){return{placeholder:{fontFamily:"raleway",margin:"20px 20px"},formButtonRoot:{borderRadius:"10px",backgroundColor:z.a[600],"&:hover":{backgroundColor:z.a[800]},color:"#fff",fontWeight:"700"},formButtonLabel:{fontSize:"20px",fontFamily:"raleway",lineHeight:"25px",fontWeight:"700"},linkIcon:{marginLeft:"10px"}}},{withTheme:!0})(U),G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(p.a,{container:!0,spacing:0,classes:{container:e.body}},o.a.createElement(M,null),o.a.createElement(L,null),o.a.createElement(D,null))}}]),t}(a.Component),J=Object(v.withStyles)(function(e){return{body:{width:"100%"},navBar:{width:"70%"},themeBar:{}}},{withTheme:!0})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){},90:function(e,t,n){e.exports=n(226)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.093d1a18.chunk.js.map