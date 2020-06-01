(this["webpackJsonpclient-free2play"]=this["webpackJsonpclient-free2play"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(29),o=a.n(s),l=(a(95),a(6)),i=a.n(l),c=a(17),u=a(14),m=a(16),p=a(15),d=a(33),g=a(8),f=(a(97),a(98),a(19)),h=a(60),v=a(127),b=a(128),E=a(129),y=a(61);function w(){var e=Object(h.a)(["\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 0 10px 0 10px;\n  margin: 0;\n  transition: all 200ms ease;\n  &:hover {\n    text-decoration: none;\n    color: rgb(var(--color-3));\n    background-color: rgb(var(--color-2));\n  }\n"]);return w=function(){return e},e}function k(){var e=Object(h.a)(["\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 0 10px 0 10px;\n  transition: all 200ms ease;\n  &:hover {\n    text-decoration: none;\n    color: rgb(var(--color-5));\n    background-color: rgb(var(--color-2));\n  }\n  &:active {\n    outline: 0;\n    border: none;\n    -moz-outline-style: none;\n  }\n  &:focus {\n    outline: 0;\n    border: none;\n    -moz-outline-style: none;\n  }\n"]);return k=function(){return e},e}var x=Object(y.a)(d.b)(k()),O=Object(y.a)(v.a)(w()),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).subItemsLogged=[{text:"Profile",icon:"fas fa-user",to:"/profile"},{text:"Sign out",icon:"fas fa-sign-out-alt",to:"/games",onClick:function(){return r.props.signOut()}}],r.subItemsGuest=[{text:"Profile",icon:"fas fa-user",to:"/profile"},{text:"Sign In",icon:"fas fa-sign-in-alt",to:"/signin"},{text:"Register",icon:"fas fa-edit",to:"/register"}],r.navbarItems=function(){return[{text:"Home",icon:"fab fa-fort-awesome",to:"/"},{text:"Games",icon:"fas fa-gamepad",to:"/games"},{text:"Account",icon:"fas fa-chess-knight",items:r.props.token?r.subItemsLogged:r.subItemsGuest},{text:"About",icon:"fas fa-feather-alt",to:"/about"}]},r.renderItems=function(e,t){var a={height:"100%",display:"flex",justifyContent:t,alignItems:"center"},s=Object.assign({},a);return s.flexDirection="column",e.map((function(e){return e.items?n.a.createElement(O,{key:e.text,title:n.a.createElement("div",null,n.a.createElement("i",{className:e.icon}),n.a.createElement("div",{style:{paddingLeft:"13px",display:"inline"}},e.text)),id:"collasible-nav-dropdown",style:s},r.renderItems(e.items,"left")):n.a.createElement(x,{to:e.to,style:a,key:e.text,onClick:e.onClick},n.a.createElement("i",{className:e.icon}),n.a.createElement("div",{style:{paddingLeft:"13px",display:"inline"}},e.text))}))},r.state={active:"Home"},r}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement(b.a,{collapseOnSelect:!0,expand:"lg",sticky:"top",variant:"light",style:{paddingTop:"0",paddingBottom:"0",backgroundColor:"rgb(var(--color-1))"}},n.a.createElement(b.a.Brand,null,n.a.createElement(d.b,{to:"/",style:{color:"rgb(var(--color-5))",textDecoration:"none",fontWeight:"bolder",outline:0,outlineStyle:"hidden"}},n.a.createElement("img",{src:"images/logo.png",alt:"logo",style:{height:"35px",paddingRight:"20px"}}),"FREE2PLAY")),n.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav",style:{color:"white"}}),n.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav",style:{height:"45px"}},n.a.createElement(E.a,{className:"ml-auto",style:{height:"100%"}},this.renderItems(this.navbarItems(),"center"))))}}]),a}(r.Component),j=a(18),N=a.n(j),C=a(53),F=a(84),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).formatDateFromString=function(e){return new Date(e).toLocaleDateString()},r.addOrRemoveFromFavorites=function(e){r.isFavorite()?r.props.removeFromFavorites(e):r.props.addToFavorites(e)},r.isFavorite=function(){return r.props.favorites.some((function(e){return e.website===r.props.game.website&&e.websiteId===r.props.game.websiteId}))},r.getFavoriteCss=function(){return r.isFavorite()?"favorite fas":"far"},r.state={loading:!0},r}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3"},n.a.createElement("div",{className:"card box bg-secondary",style:{marginBottom:"5vh",cursor:"pointer",height:"400px"}},n.a.createElement("a",{href:this.props.game.url,style:{position:"relative"}},n.a.createElement(F.a,{animation:"border",role:"status",variant:"info",style:{display:this.state.loading?"block":"none"}},n.a.createElement("span",{className:"sr-only"},"Loading...")),n.a.createElement(C.a,{src:this.props.game.image,alt:this.props.game.title,fluid:!0,style:{height:"200px",display:this.state.loading?"none":"block"},onLoad:function(){return e.setState({loading:!1})}}),n.a.createElement("div",{style:{position:"absolute",bottom:"0",borderRadius:"20px 0 0 20px",paddingLeft:"10px",right:"0",backgroundColor:"rgb(var(--color-2))",width:"120px",color:"white",fontWeight:"bold"}},this.props.game.category)),n.a.createElement("i",{className:"fa-star fa-2x "+this.getFavoriteCss(),onClick:function(){return e.addOrRemoveFromFavorites(e.props.game)}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-light"},this.props.game.title),n.a.createElement("div",{style:{float:"left"},className:"card-text text-light"},this.props.game.publisher),n.a.createElement("div",{style:{float:"right",fontWeight:"bold"},className:"card-text text-light"},"FREE")),n.a.createElement("div",{className:"card-footer",style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("small",{className:"text-light"},"Created at ",this.formatDateFromString(this.props.game.createdAt)))))}}]),a}(r.Component),I=a(26),P=a(42),G="https://free2play.herokuapp.com",D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={active:1,games:[],search:"",total:null},e.componentDidMount=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getGamePage(1);case 1:case"end":return t.stop()}}),t)}))),e.getGamePage=function(){var t=Object(c.a)(i.a.mark((function t(a,r){var n,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?(r.preventDefault(),n=r.target.elements.search.value):n="",s={pageNum:a,search:n},t.next=4,N.a.get(G+"/api/games",{params:s});case 4:o=t.sent,e.setState({games:o.data.games,total:o.data.total,active:a,search:n}),window.scrollTo(0,0);case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.paginate=function(){var t=[],a={preventDefault:function(){},target:{elements:{search:{value:e.state.search}}}},r=Math.ceil(e.state.total/12);if(r>=5){if(t.push(n.a.createElement(I.a.First,{key:-1,onClick:function(){return e.getGamePage(1,a)}})),t.push(n.a.createElement(I.a.Prev,{key:0,onClick:function(){return e.getGamePage(1===e.state.active?1:e.state.active-1,a)}})),e.state.active<=r-4){for(var s=function(r){t.push(n.a.createElement(I.a.Item,{key:r,active:r===e.state.active,onClick:function(){return e.getGamePage(r,a)}},r))},o=e.state.active;o<e.state.active+3;o++)s(o);t.push(n.a.createElement(I.a.Ellipsis,{key:-2})),t.push(n.a.createElement(I.a.Item,{key:r,onClick:function(){return e.getGamePage(r,a)}},r))}else for(var l=function(r){t.push(n.a.createElement(I.a.Item,{key:r,active:r===e.state.active,onClick:function(){return e.getGamePage(r,a)}},r))},i=r-3;i<=r;i++)l(i);t.push(n.a.createElement(I.a.Next,{key:r+1,onClick:function(){return e.getGamePage(e.state.active===r?r:e.state.active+1,a)}})),t.push(n.a.createElement(I.a.Last,{key:r+2,onClick:function(){return e.getGamePage(r,a)}}))}else for(var c=function(r){t.push(n.a.createElement(I.a.Item,{key:r,active:r===e.state.active,onClick:function(){return e.getGamePage(r,a)}},r))},u=1;u<=r;u++)c(u);return t},e.showGames=function(){return 0===e.state.games.length?n.a.createElement("h5",{style:{color:"white"}},"No results were found to match your search item."):n.a.createElement("div",{className:"row",style:{justifyContent:"left"}},e.state.games.map((function(t){return n.a.createElement(T,{key:t._id,game:t,favorites:e.props.favorites,addToFavorites:e.props.addToFavorites,removeFromFavorites:e.props.removeFromFavorites})})))},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{margin:"2.5rem 3rem 0 3rem",overflow:"visible"}},n.a.createElement(P.a,{onSubmit:function(t){return e.getGamePage(1,t)}},n.a.createElement(P.a.Group,null,n.a.createElement(P.a.Control,{type:"text",name:"search",placeholder:"Search by title, website of origin, category, or publisher"}),n.a.createElement(P.a.Text,{style:{color:"white"}},"i.e 'EpicGames', 'Witcher 3', 'Strategy'"))),this.showGames(),n.a.createElement(I.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},this.paginate()))}}]),a}(r.Component),R=a(13),A=a.n(R),L=a(12),B=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).onSubmit=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=!1,n=r.state,r.state.username&&""!==r.state.username||(n=A()(n,{errorToast:{username:{$set:!0}}}),a|=!0),r.state.password&&""!==r.state.password||(n=A()(n,{errorToast:{password:{$set:!0}}}),a|=!0),r.setState(n),!a){e.next=8;break}return e.abrupt("return");case 8:r.props.signIn(r.state.username,r.state.password);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.componentDidMount=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.getUsers();case 1:case"end":return e.stop()}}),e)}))),r.getUsers=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(r.props.backend+"/api/users");case 2:t=e.sent,r.setState({users:t.data.reverse()});case 4:case"end":return e.stop()}}),e)}))),r.onChangeUsername=function(e){r.setState({username:e.target.value})},r.onChangePassword=function(e){r.setState({password:e.target.value})},r.state={errorToast:{username:!1,password:!1},users:[],username:"",password:""},r}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container p-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(L.a,{onClose:function(){return e.setState(A()(e.state,{errorToast:{username:{$set:!1}}}))},show:this.state.errorToast.username,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Username must not be empty.")),n.a.createElement(L.a,{onClose:function(){return e.setState(A()(e.state,{errorToast:{password:{$set:!1}}}))},show:this.state.errorToast.password,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Password must not be empty.")),n.a.createElement("br",null)),n.a.createElement("div",{className:"col-md-4",style:{paddingBottom:"20px"}},n.a.createElement("div",{className:"card card-body"},n.a.createElement("h3",null,"Log in"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("br",null),n.a.createElement("h5",null,"Username"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"i.e. 'CookieMonster'",onChange:this.onChangeUsername}),n.a.createElement("br",null),n.a.createElement("h5",null,"Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Your secret password",onChange:this.onChangePassword}),"Don't have an account? Register here",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"container-center"},n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-submit"},"Enter")))))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("h2",{className:"text-light"},"Say Hi to our latest users!"),this.state.users.slice(0,6).map((function(e){return n.a.createElement("li",{className:"list-group-item list-group-item-action",key:e.username},e.username)}))))))}}]),a}(r.Component),_=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).showGames=function(){return 0===e.props.favorites.length?n.a.createElement("h5",{style:{color:"white"}},"You have no favorites yet."):n.a.createElement("div",{className:"row",style:{justifyContent:"left"}},e.props.favorites.map((function(t,a){return n.a.createElement(T,{key:t._id,game:t,favorites:e.props.favorites,addToFavorites:e.props.addToFavorites,removeFromFavorites:e.props.removeFromFavorites})})))},e.welcomeTitle=function(){return e.props.token?"Welcome Back!":"Your Profile"},e.welcomeParagraph=function(){return e.props.token?"Hey "+e.props.user.username+"! Nice to see you again. You can change your profile picture from now on.":"You're signed in as a guest. If you'd like to save your favorites or upload an image, please log in or register."},e}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container p-4",style:{color:"white"}},n.a.createElement("div",{className:"row",style:{borderBottom:"1px solid #ccc",paddingBottom:"2rem",marginBottom:"2rem"}},n.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"},n.a.createElement("h1",null,this.welcomeTitle()),n.a.createElement("h5",null,this.welcomeParagraph()),n.a.createElement("br",null),this.props.token&&n.a.createElement("input",{type:"file",accept:"image/png, image/jpeg",onChange:this.props.updatePicture}),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",style:{padding:"0px",display:"flex",justifyContent:"center"}},n.a.createElement("div",{style:{position:"relative",width:"300px",height:"300px"}},n.a.createElement(C.a,{src:this.props.user.image,fluid:!0,style:{width:"300px",height:"300px",backgroundSize:"100%"}}),n.a.createElement("div",{style:{width:"100%",height:"30px",position:"absolute",backgroundColor:"rgba(var(--color-2),1)",justifyContent:"center",display:"flex",bottom:"0",left:"0"}},n.a.createElement("h5",{style:{fontWeight:"bolder"}},this.props.user.username))))),n.a.createElement("i",{className:"fas fa-star fa-2x",style:{color:"rgb(var(--color-3))"}}),n.a.createElement("h3",{style:{display:"inline",marginLeft:"20px"}},"Favorites"),n.a.createElement("br",null),n.a.createElement("br",null),this.showGames())}}]),a}(r.Component),J=a(56),H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={images:[{src:"images/carousel1.jpg",title:"Welcome to FREE2PLAY",desc:"Counter Strike: Global Offensive"},{src:"images/carousel4.jpg",title:"Get 'Indie' today!",desc:"The Messenger: Picnic Panic"},{src:"images/carousel2.jpg",title:"100% Free Games",desc:"Warframe"},{src:"images/carousel5.jpg",title:"Filter by category",desc:"Seven: The Days Long Gone Demo"},{src:"images/carousel3.jpg",title:"All your favorite platforms",desc:"Rocket League"}]},e}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{overflow:"hidden",height:"100%"}},n.a.createElement(J.a,{interval:3e3},this.state.images.map((function(e){return n.a.createElement(J.a.Item,{key:e.title,style:{height:"93vh"}},n.a.createElement("img",{style:{height:"93vh",objectFit:"cover"},className:"d-block w-100",src:e.src,alt:e.desc}),n.a.createElement(J.a.Caption,null,n.a.createElement("h3",null,e.title)))}))))}}]),a}(r.Component),$=a(57),U=a(58),W=a(49),Y=a(85),z=function(e,t){return"<a style='text-decoration:underline; color:white' href='"+t+"'>"+e+"</a>"},q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={qa:[{question:"Which websites does FREE2PLAY pull games from?",response:"Currently: "+z("Origin.com","https://origin.com")+", "+z("EpicGames.com","https://epicgames.com")+", "+z("GOG.com","https://gog.com")+", "+z("GameJolt.com","https://gamejolt.com")+"."},{question:"How often does FREE2PLAY update?",response:"Daily."},{question:"How was this made?",response:"FREE2PLAY is a MERN project, which means it uses MongoDB, ExpressJS, ReactJS, and NodeJS."},{question:"Can I see the source code?",response:"Thought you'd never ask! You can find the client application "+z("here","https://github.com/dariokozicki/client-free2play")+" and the server application "+z("here","https://github.com/dariokozicki/server-free2play")+"."},{question:"Who did this?",response:"Hi! My name is Dar\xedo Kozicki. I'm a developer living in Buenos Aires, Argentina. "+z("Here","https://thekozicki.tk")+" you'll find a live porfolio with my latest freelance projects. For any business inquiries, you can contact me at "+z("dariokozicki@gmail.com","mailto:dariokozicki@gmail.com")}]},e}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container p-4",style:{color:"white"}},n.a.createElement("h2",null,"About this website"),n.a.createElement("br",null),n.a.createElement("p",null,"Hey there! Thanks for coming by."),n.a.createElement("p",null,"Every day, hundreds of games are being released in an ever increasing amount of websites, some of them really worth playing! FREE 2 PLAY's goal is for you to stay up to date with these amazing games, without having to check in to their websites on a regular basis."),n.a.createElement("p",null,"You can browse for games by title, category, publisher or even their original website! By clicking on one of them you'll be redirected to the download page, legally and at no cost."),n.a.createElement("p",null,"Below you'll find a FAQ in case you'd like to know more!"),n.a.createElement($.a,null,this.state.qa.map((function(e,t){return n.a.createElement(U.a,{className:"bg-secondary",key:e.question},n.a.createElement(U.a.Header,null,n.a.createElement($.a.Toggle,{as:W.a,variant:"dark",eventKey:t},e.question)),n.a.createElement($.a.Collapse,{eventKey:t},n.a.createElement(U.a.Body,null,n.a.createElement(Y.a,{content:e.response}))))}))))}}]),a}(r.Component),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).onSubmit=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=!1,n=r.state,r.passesRegex(r.state.user.username)||(n=A()(n,{errorToast:{username:{$set:!0}}}),a|=!0),r.passesRegex(r.state.user.password)||(n=A()(n,{errorToast:{password:{$set:!0}}}),a|=!0),r.passesRegex(r.state.user.email)||(n=A()(n,{errorToast:{email:{$set:!0}}}),a|=!0),r.setState(n),!a){e.next=9;break}return e.abrupt("return");case 9:return e.prev=9,e.next=12,N.a.post(r.props.backend+"/api/users",{username:r.state.user.username,password:r.state.user.password,favorites:r.state.user.favorites,email:r.state.user.email,image:"images/default-profile.png"});case 12:r.props.signIn(r.state.user.username,r.state.user.password),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),r.setState(A()(r.state,{errorToast:{err:{$set:!0}}}));case 18:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t){return e.apply(this,arguments)}}(),r.passesRegex=function(e){return r.passwordRegex.test(e)},r.responseFacebook=function(e){console.log(e)},r.responseGoogle=function(e){console.log(e)},r.render=function(){return r.state.redirect?n.a.createElement(g.a,{to:r.state.redirect}):n.a.createElement("div",{className:"container p-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement(L.a,{onClose:function(){return r.setState(A()(r.state,{errorToast:{username:{$set:!1}}}))},show:r.state.errorToast.username,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Username must be at least 4 characters long and have only letters and numbers.")),n.a.createElement(L.a,{onClose:function(){return r.setState(A()(r.state,{errorToast:{password:{$set:!1}}}))},show:r.state.errorToast.password,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Email must be valid, at least 4 characters long and have only letters and numbers.")),n.a.createElement(L.a,{onClose:function(){return r.setState(A()(r.state,{errorToast:{email:{$set:!1}}}))},show:r.state.errorToast.email,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Username must be at least 4 characters long and have only letters and numbers.")),n.a.createElement(L.a,{onClose:function(){return r.setState(A()(r.state,{errorToast:{err:{$set:!1}}}))},show:r.state.errorToast.err,delay:3e3,autohide:!0},n.a.createElement(L.a.Header,null,n.a.createElement("strong",{className:"mr-auto"},"Free2Play"),n.a.createElement("small",null,"Just now")),n.a.createElement(L.a.Body,null,"Something unexpected went wrong. Check if your email was typed correctly."))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card card-body"},n.a.createElement("form",{onSubmit:r.onSubmit},n.a.createElement("h3",null,"Register"),n.a.createElement("br",null),n.a.createElement("h5",null,"Username"),n.a.createElement("input",{type:"text",placeholder:"i.e. 'JohnTravolta'",className:"form-control",onChange:function(e){r.setState(A()(r.state,{user:{username:{$set:e.target.value}}}))}}),n.a.createElement("br",null),n.a.createElement("h5",null,"Email"),n.a.createElement("input",{type:"text",placeholder:"iWantFreeStuff@gmail.com",className:"form-control",onChange:function(e){r.setState(A()(r.state,{user:{email:{$set:e.target.value}}}))}}),n.a.createElement("br",null),n.a.createElement("h5",null,"Password"),n.a.createElement("input",{type:"password",placeholder:"Your Password",className:"form-control",onChange:function(e){r.setState(A()(r.state,{user:{password:{$set:e.target.value}}}))}}),n.a.createElement("div",{className:"text-muted"},"+4 characters, alphanumeric"),n.a.createElement("br",null),n.a.createElement("div",{className:"container-center"},n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-submit"},"Create new account"))))),n.a.createElement("div",{className:"col-md-4"})))},r.passwordRegex=RegExp(/[A-Za-z0-9]{4,}/),r.state={errorToast:{username:!1,password:!1,email:!1,err:!1},user:{username:"",password:"",email:"",favorites:JSON.parse(localStorage.getItem("favoriteGames"))}},r}return a}(r.Component),K="https://free2play.herokuapp.com",Q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).componentDidMount=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("x-auth-token"),r.setUserData(t);case 2:case"end":return e.stop()}}),e)}))),r.setUserData=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=20;break}return N.a.defaults.headers["x-auth-token"]=t,localStorage.setItem("x-auth-token",t),e.prev=3,e.next=6,N.a.get(K+"/api/users/current");case 6:n=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),localStorage.removeItem("x-auth-token");case 12:if(!(null===(a=n)||void 0===a?void 0:a.data)){e.next=19;break}return e.next=15,N.a.get(K+"/api/users/"+n.data._id+"/favorites");case 15:s=e.sent,r.setState({user:n.data,token:t,favorites:s.data}),e.next=20;break;case 19:localStorage.removeItem("x-auth-token");case 20:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),r.signIn=function(){var e=Object(c.a)(i.a.mark((function e(t,a){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post(K+"/api/users/login",{username:t,password:a});case 2:200===(null===(n=e.sent)||void 0===n?void 0:n.status)&&(s=n.headers["x-auth-token"],r.setUserData(s),window.location="/games");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.signOut=function(){localStorage.removeItem("x-auth-token"),r.setState({user:{username:"Guest",image:"images/default-profile.png"},token:null,favorites:JSON.parse(localStorage.getItem("favoriteGames"))||[]})},r.addToFavorites=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.token){e.next=7;break}return e.next=3,N.a.put(K+"/api/users/"+r.state.user._id+"/favorites",t);case 3:201===e.sent.status?r.updateFavorites():alert("Something went wrong. Try again later."),e.next=11;break;case 7:(a=JSON.parse(localStorage.getItem("favoriteGames"))).push(t),r.setState({favorites:a}),localStorage.setItem("favoriteGames",JSON.stringify(a));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.removeFromFavorites=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.token){e.next=7;break}return e.next=3,N.a.delete(K+"/api/users/"+r.state.user._id+"/favorites/"+t._id);case 3:204===e.sent.status?r.updateFavorites():alert("Something went wrong. Try again later."),e.next=11;break;case 7:a=(a=JSON.parse(localStorage.getItem("favoriteGames"))).filter((function(e){return e.websiteId!==t.websiteId||e.website!==t.website})),r.setState({favorites:a}),localStorage.setItem("favoriteGames",JSON.stringify(a));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.updateFavorites=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(K+"/api/users/"+r.state.user._id+"/favorites");case 2:t=e.sent,r.setState({favorites:t.data});case 4:case"end":return e.stop()}}),e)}))),r.updatePicture=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n,s,o,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Headers).append("Authorization","Client-ID "+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://free2play.herokuapp.com"}).REACT_APP_CLIENT_ID),(s=new FormData).append("image",t.target.files[0]),o={method:"POST",headers:n,body:s,redirect:"follow"},e.next=7,fetch("https://api.imgur.com/3/image",o);case 7:return l=e.sent,e.next=10,l.json();case 10:c=e.sent,(null===(a=c.data)||void 0===a?void 0:a.link)?(r.setState(A()(r.state,{user:{image:{$set:c.data.link}}})),N.a.put(K+"/api/users/"+r.state.user._id,{image:c.data.link})):alert("Could not upload image. Try again later.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.render=function(){return n.a.createElement(d.a,null,n.a.createElement(S,{token:r.state.token,signOut:r.signOut}),n.a.createElement(g.b,{path:"/",component:H,exact:!0}),n.a.createElement(g.b,{path:"/signin",render:function(e){return n.a.createElement(B,Object.assign({},e,{signIn:r.signIn,backend:K}))}}),n.a.createElement(g.b,{path:"/games",render:function(e){return n.a.createElement(D,Object.assign({},e,{favorites:r.state.favorites,addToFavorites:r.addToFavorites,removeFromFavorites:r.removeFromFavorites}))}}),n.a.createElement(g.b,{path:"/games/:id",component:T}),n.a.createElement(g.b,{path:"/about",component:q}),n.a.createElement(g.b,{path:"/register",render:function(e){return n.a.createElement(M,Object.assign({},e,{signIn:r.signIn,backend:K}))}}),n.a.createElement(g.b,{path:"/profile",render:function(e){return n.a.createElement(_,Object.assign({},e,{user:r.state.user,favorites:r.state.favorites,addToFavorites:r.addToFavorites,removeFromFavorites:r.removeFromFavorites,token:r.state.token,updatePicture:r.updatePicture}))}}))},r.state={user:{username:"Guest",image:"images/default-profile.png"},token:localStorage.getItem("x-auth-token"),favorites:JSON.parse(localStorage.getItem("favoriteGames"))},r.state.favorites||(localStorage.setItem("favoriteGames",JSON.stringify([])),r.state.favorites=[]),r}return a}(n.a.Component);o.a.render(n.a.createElement(Q,null),document.getElementById("root"))},90:function(e,t,a){e.exports=a(121)},95:function(e,t,a){},98:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.4b1471e9.chunk.js.map