(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/mappyPals.6203924a.svg"},40:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),l=n(56),c=n(5),s=n(4),u=n(7),d=n(6),m=n(8),p=(n(45),n(55)),h=(n(46),n(34)),g=n.n(h),f=function(e){e.isUserLogged;var t=e.onLogin;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"logo-wrapper"},r.a.createElement(p.a,{to:"/"},r.a.createElement("img",{src:g.a,alt:"Mappy Pals"}))),r.a.createElement("div",{id:"nav-wrapper"},r.a.createElement(p.a,{className:"nav-item",to:"/"}," Home "),r.a.createElement(p.a,{className:"nav-item",to:"/about"}," About "),r.a.createElement(p.a,{className:"nav-item",to:"/contact"}," Contact us "),r.a.createElement(p.a,{className:"nav-item",to:"/login"}," ",r.a.createElement("p",{onClick:t}," Login ")," "))))},E=n(57),b=n(58),v=(n(31),n(15)),w=n(16);function y(){var e=Object(v.a)(["\n  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.05);\n  border-radius: 30px;\n  padding-top: 35px;\n  padding-right: 70px;\n  padding-bottom: 35px;\n  padding-left: 70px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 1.2rem;\n  line-height: 2;\n  label {\n    display: block;\n    margin-bottom: 3.5rem;\n  }\n  input,\n  textarea,\n  select {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0.5rem;\n    font-size: 1.35rem;\n    border: none;\n    border-bottom: 2px solid grey;\n    &:hover {\n      outline: 0;\n      border-bottom: 3px solid #6831DE;\n    }\n    &:focus {\n      outline: 0;\n      border-bottom: 3px solid #6831DE;\n    }\n  }\n\n  button,\n  input[type='submit'] {\n    width: auto;\n    background: linear-gradient(to bottom right, #E03BFB, #6831DE);;\n    color: white;\n    border: 0;\n    border-radius: 10px;\n    font-size: 1.3rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 0.5rem 3.5rem;\n  }\n\n  a {\n    color: #6831DE;\n    font-weight: normal;\n    font-size: 1.2rem;\n    line-height: 2;\n  }\n  \n    a:link {\n      text-decoration: none;\n    }\n    \n    a:visited {\n      text-decoration: none;\n      font-color: #6831DE;\n      font-weight: normal;\n    }\n    \n    a:hover {\n      text-decoration: underline;\n    }\n    \n    a:active {\n      text-decoration: underline;\n    }\n  }\n\n  .btnContainer {\n    display: flex\n    justify-content: center;\n  }\n\n  button:hover {\n    opacity: 0.8;\n  }\n"]);return y=function(){return e},e}var k=w.a.form(y()),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),console.log("".concat(n.state.email," ").concat(n.state.password)),n.setState({email:""}),n.setState({password:""})},n.state={email:"",password:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){var e=this.props.onSignUp;return r.a.createElement("div",{className:"Login"},r.a.createElement(k,{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("input",{type:"email",name:"email",placeholder:"",onChange:this.onEmailChange})),r.a.createElement("label",{htmlFor:"password"},"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"",onChange:this.onPasswordChange})),r.a.createElement("div",{class:"forgot-password"},r.a.createElement("a",{href:"url"},"I forgot my password")),r.a.createElement("div",{class:"btnContainer"},r.a.createElement("button",{type:"submit",disabled:!this.validateForm()},"Login")),r.a.createElement("p",{className:"u-text-center"},"No account?",r.a.createElement(p.a,{className:"nav-item",to:"/signup"}," ",r.a.createElement("span",{onClick:e}," SignUp ")," "),"\u2003Or sign up with:"),r.a.createElement("div",null,r.a.createElement("p",null,"FACEBOOK LOGIN BUTTON"))))}}]),t}(a.Component),j=(n(22),n(2)),O=n(11),F=n(18),N=n(9),C=function(e){var t=Object(a.useState)({name:!0,phone:!0,email:!0,postcode:!0}),n=Object(N.a)(t,2),i=n[0],o=n[1];return r.a.createElement("div",{id:"popup"},r.a.createElement("div",null,r.a.createElement("label",null,"Nickname"),r.a.createElement("input",{type:"text",placeholder:"Nickname",value:e.nickname,readOnly:!0})),e.name?r.a.createElement("div",null,i.name?r.a.createElement("label",null,"Name"):"",r.a.createElement("input",{type:"text",data:"name",placeholder:"Name",defaultValue:e.name,onBlur:function(e){e.target.value.length&&o(Object(O.a)({},i,{name:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(O.a)({},i,{name:!1}))}})):"",e.phone?r.a.createElement("div",null,i.phone?r.a.createElement("label",null,"Phone"):"",r.a.createElement("input",{type:"text",data:"phone",placeholder:"Phone",defaultValue:e.phone,onBlur:function(e){e.target.value.length&&o(Object(O.a)({},i,{phone:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(O.a)({},i,{phone:!1}))}})):"",e.email?r.a.createElement("div",null,i.email?r.a.createElement("label",null,"E-mail"):"",r.a.createElement("input",{type:"text",data:"email",placeholder:"E-mail",defaultValue:e.email,onBlur:function(e){e.target.value.length&&o(Object(O.a)({},i,{email:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(O.a)({},i,{email:!1}))}})):"",e.postcode?r.a.createElement("div",null,i.postcode?r.a.createElement("label",null,"Zip-Postcode"):"",r.a.createElement("input",{type:"text",data:"postcode",placeholder:"Zip-Postcode",defaultValue:e.postcode,onBlur:function(e){e.target.value.length&&o(Object(O.a)({},i,{postcode:!0}))},onKeyPress:function(e){"Enter"===e.key&&e.target.blur()},onClick:function(e){console.log(e.target),e.target.value="",o(Object(O.a)({},i,{postcode:!1}))}})):"",e.editMode?r.a.createElement("div",{onClick:function(t){e.save(),t.target.parentNode.style.height="0px"}},"Save"):"")},P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).anythingChanges=function(t){e.setState({data:Object(O.a)({},e.state.data,Object(j.a)({},t.target.id,t.target.value))})},e.state={data:{}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"add-new"},r.a.createElement("div",{id:"close-btn",onClick:this.props.closeForm},r.a.createElement("span",null,"X")),r.a.createElement("input",{type:"text",onChange:this.anythingChanges,placeholder:"Nickname",id:"nickname",required:!0}),r.a.createElement("input",{type:"email",onChange:this.anythingChanges,placeholder:"Email address",id:"email",required:!0}),r.a.createElement("input",{type:"text",onChange:this.anythingChanges,placeholder:"Full Namer",id:"name"}),r.a.createElement("input",{type:"tel",onChange:this.anythingChanges,placeholder:"Phone Number",id:"phone"}),r.a.createElement("input",{type:"button",value:"Add Friend",id:"add",onClick:function(){e.props.onFriendLoaded(e.state)}}))}}]),t}(r.a.Component),S="pk.eyJ1Ijoic2Npb3J0aW5vbXJjIiwiYSI6ImNqc2RocmRzYTB2OGUzeWxuZDNmdDhrcDgifQ.txLXHEJPl4lYa8an6fcjuA",L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getPostcode=function(){fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.state.newFriend.long+","+e.state.newFriend.lat+".json?access_token="+S).then(function(e){return e.json()}).then(function(t){t&&t.features[1]&&t.features[6]&&e.setState({newFriend:Object(O.a)({},e.state.newFriend,{postcode:t.features[1].text,country:t.features[6].text})})})},e.getLocation=function(t){var n=t.lngLat;e.setState({newFriend:Object(O.a)({},e.state.newFriend,{long:n[0],lat:n[1]})})},e.showPopup=function(t){e.setState({currentPin:e.state.friendsList[t.target.id]}),setTimeout(function(){var e=document.getElementById("popup");e&&(e.style.height="180px")},500)},e.hidePopup=function(t){var n=document.getElementById("popup");e.state.currentPin.long&&(n.style.height="0px"),e.setState({currentPin:{}})},e.nicknameExists=function(t,n){var a=Object.keys(e.state.friendsList),r=!1;if(console.log({nickname:t,email:n}),t&&t.length&&!a.includes(t)?e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[0].style.border="":(e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[0].style.border="2px solid red",r=!0),n&&n.length?e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border="":(e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border="2px solid red",r=!0),Object.keys(e.state.friendsList)>0){var i=!0,o=!1,l=void 0;try{for(var c,s=e.state.friendsList[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var u=c.value;e.state.friendsList[u].email?(e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border="2px solid red",r=!0):e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border=""}}catch(d){o=!0,l=d}finally{try{i||null==s.return||s.return()}finally{if(o)throw l}}}return r},e.addFriendData=function(t){var n=t.data,a=n.nickname,r=n.name,i=n.email,o=n.phone;if(!e.nicknameExists(a,i)){var l=Object(O.a)({},e.state.newFriend,{nickname:a,name:r,email:i,phone:o});e.setState({newFriend:l}),setTimeout(function(){return e.addFriendToList()},1e3)}},e.addFriendToList=function(){e.setState({friendsList:Object(O.a)({},e.state.friendsList,Object(j.a)({},e.state.newFriend.nickname,e.state.newFriend)),newFriend:{long:null,lat:null,name:"",email:"",phone:"",postcode:"",country:"",nickname:""}}),e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.style.height="0px";var t=!0,n=!1,a=void 0;try{for(var r,i=e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.value=""}}catch(o){n=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}},e.newPin=function(t){e.getLocation(t),e.getPostcode(),e.addNewRef.current._reactInternalFiber.child.alternate.stateNode.style.height="180px"},e.closeForm=function(){e.setState({newFriend:{long:null},currentPin:{}}),document.getElementById("add-new").style.height=""},e.allPins=function(){var t=[],n=e.state.friendsList;for(var a in n){var i=n[a],o=i.nickname,l=i.lat,c=i.long;t.push(r.a.createElement(F.a,{key:o,latitude:l,longitude:c},r.a.createElement("i",{id:o,key:o+"k",onClick:function(){return console.log("Here to edit friends details")},onMouseOver:function(t){return e.showPopup(t)},onMouseLeave:function(t){return e.hidePopup(t)},className:"fas fa-map-marker-alt"})))}return t},e.state={currentPin:{},newFriend:{long:null,lat:null,name:"",email:"",phone:"",postcode:"",country:"",nickname:""},friendsList:{},viewport:{width:"100vw",height:"100vh",latitude:37.7577,longitude:-122.4376,zoom:11},pinMe:{latitude:"",longitude:""}},e.addNewRef=r.a.createRef(),e.popUpRef=r.a.createRef(),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){t.coords.latitude&&e.setState({viewport:Object(O.a)({},e.state.viewport,{latitude:t.coords.latitude,longitude:t.coords.longitude}),pinMe:{latitude:t.coords.latitude,longitude:t.coords.longitude}})}),window.addEventListener("resize",function(t){e.setState({viewport:Object(O.a)({},e.state.viewport,{width:t.target.innerWidth,height:t.target.innerHeight})})}),window.addEventListener("keydown",function(t){"Escape"===t.key&&e.closeForm()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(F.b,Object.assign({},this.state.viewport,{onViewportChange:function(t){return e.setState({viewport:t})},mapboxApiAccessToken:S,mapStyle:"mapbox://styles/mapbox/streets-v11",onClick:this.newPin}),Object.keys(this.state.friendsList).length>0?this.allPins():"",null!==this.state.newFriend.long?r.a.createElement(F.a,{latitude:this.state.newFriend.lat,longitude:this.state.newFriend.long},r.a.createElement("i",{id:"new-pin",className:"fas fa-map-marker-alt"})):"",this.state.pinMe.latitude?r.a.createElement(F.a,{key:"me",latitude:this.state.pinMe.latitude,longitude:this.state.pinMe.longitude},r.a.createElement("i",{id:"me",key:"me-pin",className:"fas fa-map-marker-alt"})):""),this.state.currentPin.nickname&&!this.state.newFriend.long?r.a.createElement(C,{nickname:this.state.currentPin.nickname,name:this.state.currentPin.name,email:this.state.currentPin.email,phone:this.state.currentPin.phone,postcode:this.state.currentPin.postcode}):"",r.a.createElement(P,{onFriendLoaded:this.addFriendData,ref:this.addNewRef,closeForm:this.closeForm}))}}]),t}(a.Component),I=function(e){return r.a.createElement("section",null,r.a.createElement(L,null))},B=(n(51),function(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("form",{name:"contact",method:"POST"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Send us a Message!"),r.a.createElement("div",{className:"Contact-item"},r.a.createElement("label",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name"})),r.a.createElement("div",{className:"Contact-item"},r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"name"})),r.a.createElement("div",{className:"Contact-item"},r.a.createElement("label",null,"Message"),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",rows:"6"})))))}),R=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,t)},M=["Fontend","Backend","Fullstack","DevOps","Product","UI/UX","Project","Marketing"],D=["Nigeria","UK","US","Australia","India","Russia","Ghana"],U=[{avatar:null,name:"Mubarak Show",role:"".concat(M[4]+", "+M[5]),location:D[0],isEmployed:!1},{avatar:null,name:"Marco Sciortino",role:M[2],location:D[1],isEmployed:!1},{avatar:null,name:"Gouravjeet Singh",role:M[2],location:D[2],isEmployed:!0},{avatar:null,name:"Pavel Isp",role:M[2],location:D[5],isEmployed:!0},{avatar:null,name:"Devavrat Singh",role:M[2],location:D[4],isEmployed:!0}];n(52);function q(){var e=Object(v.a)([" \n  background-color: pink;\n  text-align: center;\n  width: 250px; \n  height: 400px;\n  margin-top: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px lightgrey;\n  transition: all .4s ease-in-out;    \n  &:hover {\n    transform: scale(1.1); \n  }\n"]);return q=function(){return e},e}var z=w.a.div(q()),A=function(e){var t=e.id,n=e.name,a=e.role,i=e.location,o=e.isEmployed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement("div",{className:"user-photo"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Team Avatars"})),r.a.createElement("h2",null,n),r.a.createElement("h3",null,a),r.a.createElement("h4",null,i),r.a.createElement("h4",null,o?"Employed":"Unemployed")))};function T(){var e=Object(v.a)(["\n  display: block;\n  font-size: 27px;\n  text-align: center;\n  width: 80vw;\n  height: 10rem;\n  padding: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n"]);return T=function(){return e},e}function _(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  grid-column-gap: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return _=function(){return e},e}function W(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-rows: auto auto;\n  margin-top: 5vh;\n"]);return W=function(){return e},e}var J=w.a.div(W()),K=w.a.div(_()),V=w.a.div(T()),G=function(){return r.a.createElement(R,null,r.a.createElement(J,null,r.a.createElement(V,null,r.a.createElement("h2",null,"Who We Are"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium exercitationem earum, accusamus magnam dignissimos vero suscipit fugit, ad ea impedit. Consequatur quasi veritatis modi eos quia dolorum ut distinctio?")),r.a.createElement(K,null,U.map(function(e,t){return r.a.createElement(A,{key:t,id:t,name:e.name,role:e.role,location:e.location,isEmployed:e.isEmployed})}))))},H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(j.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log("".concat(n.state.name," ").concat(n.state.email," ").concat(n.state.number," ").concat(n.state.password," ").concat(n.state.confirmPassword)),n.setState({name:"",email:"",number:"",password:"",confirmPassword:""})},n.state={name:"",email:"",number:"",password:"",confirmPassword:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"verifiedEmail",value:function(){var e=this.state.email;return!!e.includes("@")&&!!e.split("@")[1].includes(".")}},{key:"validateForm",value:function(){var e=this.state,t=e.name,n=e.email,a=e.number,r=e.password,i=e.confirmPassword;return""!==t&&""!==n&&""!==a&&""!==r&&""!==i&&(r===i&&!!this.verifiedEmail)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Enter Name",value:this.state.name,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"number",id:"number",name:"number",placeholder:"Enter Number",value:this.state.number,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.handleChange,required:!0}),r.a.createElement("button",{type:"submit",disabled:!this.validateForm()},"Login")))}}]),t}(a.Component),X=function(){return r.a.createElement("main",null,r.a.createElement(E.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:I}),r.a.createElement(b.a,{path:"/login",component:x}),r.a.createElement(b.a,{path:"/signup",component:H}),r.a.createElement(b.a,{path:"/about",component:G}),r.a.createElement(b.a,{path:"/contact",component:B})))},Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).loadFB=function(){window.fbAsyncInit=function(){window.FB.init({appId:"298824577401793",cookie:!0,xfbml:!0,version:"v3.2"}),window.FB.AppEvents.logPageView()},function(e,t,n){var a,r=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk")},e.getFBLoginStatus=function(){window.FB.getLoginStatus(function(e){"connected"===e.status&&this.setState({isUserLogged:!0,user:e.authReponse.userID})})},e.state={isUserLogged:!1,user:{},isFBMounted:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.loadFB(),console.log("FB")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{user:this.state.isUserLogged,onLogin:this.getFBLoginStatus}),r.a.createElement(R,null,r.a.createElement(X,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.78cc690a.chunk.js.map