(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},75:function(e,t,a){e.exports=a(88)},80:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(62),l=a.n(c),o=(a(80),a(11)),i=a(9),s=a(70),m=a(103),u=a(104),d=a(101),p=a(69);function E(e,t,a){return new Promise((n,r)=>{const c=window.indexedDB.open("shop-shop",1);let l,o,i;c.onupgradeneeded=function(e){const t=c.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},c.onerror=function(e){console.log("There was an error")},c.onsuccess=function(r){switch(l=c.result,o=l.transaction(e,"readwrite"),i=o.objectStore(e),l.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),n(a);break;case"get":const e=i.getAll();e.onsuccess=function(){n(e.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){l.close()}}})}const g=(e,t)=>{switch(t.type){case"UPDATE_PRODUCTS":return{...e,products:[...t.products]};case"ADD_TO_CART":return{...e,cartOpen:!0,cart:[...e.cart,t.product]};case"ADD_MULTIPLE_TO_CART":return{...e,cart:[...e.cart,...t.products]};case"UPDATE_CART_QUANTITY":return{...e,cartOpen:!0,cart:e.cart.map(e=>(t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e))};case"REMOVE_FROM_CART":let a=e.cart.filter(e=>e._id!==t._id);return{...e,cartOpen:a.length>0,cart:a};case"CLEAR_CART":return{...e,cartOpen:!1,cart:[]};case"TOGGLE_CART":return{...e,cartOpen:!e.cartOpen};case"UPDATE_CATEGORIES":return{...e,categories:[...t.categories]};case"UPDATE_CURRENT_CATEGORY":return{...e,currentCategory:t.currentCategory};default:return e}};const h=Object(n.createContext)(),{Provider:y}=h,f=e=>{let{value:t=[],...a}=e;const[c,l]=(o={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(g,o));var o;return r.a.createElement(y,Object.assign({value:[c,l]},a))},v=()=>Object(n.useContext)(h);var b=function(e){const[t,a]=v(),{image:n,name:c,_id:l,price:i,quantity:s}=e,{cart:m}=t;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(o.b,{to:"/products/"+l},r.a.createElement("img",{alt:c,src:"/images/"+n}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("div",null,s," ",function(e,t){return 1===t?e:e+"s"}("item",s)," in stock"),r.a.createElement("span",null,"$",i)),r.a.createElement("button",{onClick:()=>{const t=m.find(e=>e._id===l);t?(a({type:"UPDATE_CART_QUANTITY",_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),E("cart","put",{...t,purchaseQuantity:parseInt(t.purchaseQuantity)+1})):(a({type:"ADD_TO_CART",product:{...e,purchaseQuantity:1}}),E("cart","put",{...e,purchaseQuantity:1}))}},"Add to cart"))},w=a(30),_=a(102);const T=_.a`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`,O=_.a`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`,N=(_.a`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`,_.a`
  {
    categories {
      _id
      name
    }
  }
`),C=_.a`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;var k=a(44),A=a.n(k);var R=function(){const[e,t]=v(),{currentCategory:a}=e,{loading:c,data:l}=Object(w.e)(T);return Object(n.useEffect)(()=>{l?(t({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach(e=>{E("products","put",e)})):c||E("products","get").then(e=>{t({type:"UPDATE_PRODUCTS",products:e})})},[l,c,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),e.products.length?r.a.createElement("div",{className:"flex-row"},(a?e.products.filter(e=>e.category._id===a):e.products).map(e=>r.a.createElement(b,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity}))):r.a.createElement("h3",null,"You haven't added any products yet!"),c?r.a.createElement("img",{src:A.a,alt:"loading"}):null)};var x=function(){const[e,t]=v(),{categories:a}=e,{loading:c,data:l}=Object(w.e)(N);return Object(n.useEffect)(()=>{l?(t({type:"UPDATE_CATEGORIES",categories:l.categories}),l.categories.forEach(e=>{E("categories","put",e)})):c||E("categories","get").then(e=>{t({type:"UPDATE_CATEGORIES",categories:e})})},[l,c,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),a.map(e=>r.a.createElement("button",{key:e._id,onClick:()=>{var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)))},D=a(66),S=a(96);var P=e=>{let{item:t}=e;const[,a]=v();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/"+t.image,alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:e=>{const n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),E("cart","delete",{...t})):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),E("cart","put",{...t,purchaseQuantity:parseInt(n)}))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:()=>(e=>{a({type:"REMOVE_FROM_CART",_id:e._id}),E("cart","delete",{...e})})(t)},"\ud83d\uddd1\ufe0f"))))},j=a(52),U=a.n(j);var I=new class{getProfile(){return U()(this.getToken())}loggedIn(){const e=this.getToken();return!!e&&!this.isTokenExpired(e)}isTokenExpired(e){try{return U()(e).exp<Date.now()/1e3}catch(t){return!1}}getToken(){return localStorage.getItem("id_token")}login(e){localStorage.setItem("id_token",e),window.location.assign("/")}logout(){localStorage.removeItem("id_token"),window.location.assign("/")}};a(87);const Q=Object(D.a)("pk_test_TYooMQauvdEDq54NiTphI7jx");var $=()=>{const[e,t]=v(),[a,{data:c}]=Object(S.a)(O);function l(){t({type:"TOGGLE_CART"})}return Object(n.useEffect)(()=>{c&&Q.then(e=>{e.redirectToCheckout({sessionId:c.checkout.session})})},[c]),Object(n.useEffect)(()=>{e.cart.length||async function(){const e=await E("cart","get");t({type:"ADD_MULTIPLE_TO_CART",products:[...e]})}()},[e.cart.length,t]),e.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:l},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map(e=>r.a.createElement(P,{key:e._id,item:e})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){let t=0;return e.cart.forEach(e=>{t+=e.price*e.purchaseQuantity}),t.toFixed(2)}()),I.loggedIn()?r.a.createElement("button",{onClick:function(){const t=[];e.cart.forEach(e=>{for(let a=0;a<e.purchaseQuantity;a++)t.push(e._id)}),a({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:l},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))};var F=()=>r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(R,null),r.a.createElement($,null));var L=function(){const[e,t]=v(),{id:a}=Object(i.f)(),[c,l]=Object(n.useState)({}),{loading:s,data:m}=Object(w.e)(T),{products:u,cart:d}=e;return Object(n.useEffect)(()=>{u.length?l(u.find(e=>e._id===a)):m?(t({type:"UPDATE_PRODUCTS",products:m.products}),m.products.forEach(e=>{E("products","put",e)})):s||E("products","get").then(e=>{t({type:"UPDATE_PRODUCTS",products:e})})},[u,m,s,t,a]),r.a.createElement(r.a.Fragment,null,c&&d?r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,c.name),r.a.createElement("p",null,c.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",c.price," ",r.a.createElement("button",{onClick:()=>{const e=d.find(e=>e._id===a);e?(t({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),E("cart","put",{...e,purchaseQuantity:parseInt(e.purchaseQuantity)+1})):(t({type:"ADD_TO_CART",product:{...c,purchaseQuantity:1}}),E("cart","put",{...c,purchaseQuantity:1}))}},"Add to Cart"),r.a.createElement("button",{disabled:!d.find(e=>e._id===c._id),onClick:()=>{t({type:"REMOVE_FROM_CART",_id:c._id}),E("cart","delete",{...c})}},"Remove from Cart")),r.a.createElement("img",{src:"/images/"+c.image,alt:c.name})):null,s?r.a.createElement("img",{src:A.a,alt:"loading"}):null,r.a.createElement($,null))};var M=function(e){let{children:t}=e;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)};var q=()=>r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))),G=a(97);const Y=_.a`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`,W=_.a`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`,B=_.a`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;var H=function(e){const[t,a]=Object(n.useState)({email:"",password:""}),[c,{error:l}]=Object(G.a)(Y),i=e=>{const{name:n,value:r}=e.target;a({...t,[n]:r})};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=(await c({variables:{email:t.email,password:t.password}})).data.login.token;I.login(e)}catch(a){console.log(a)}}},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:i})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:i})),l?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var V=function(e){const[t,a]=Object(n.useState)({email:"",password:""}),[c]=Object(G.a)(B),l=e=>{const{name:n,value:r}=e.target;a({...t,[n]:r})};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const a=(await c({variables:{email:t.email,password:t.password,firstName:t.firstName,lastName:t.lastName}})).data.addUser.token;I.login(a)}},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var J=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,I.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:()=>I.logout()},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(o.b,{to:"/login"},"Login")))))};var z=function(){const[e]=Object(G.a)(W);return Object(n.useEffect)(()=>{!async function(){const t=(await E("cart","get")).map(e=>e._id);if(t.length){const{data:a}=await e({variables:{products:t}});a.addOrder.products.forEach(e=>{E("cart","delete",e)})}setTimeout(()=>{window.location.assign("/")},3e3)}()},[e]),r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var K=function(){const{data:e}=Object(w.e)(C);let t;return e&&(t=e.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Products"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",t.firstName," ",t.lastName),t.orders.map(e=>r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((e,t)=>{let{_id:a,image:n,name:c,price:l}=e;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(o.b,{to:"/products/"+a},r.a.createElement("img",{alt:c,src:"/images/"+n}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",l)))}))))):null))};const X=Object(s.a)({uri:"/graphql"}),Z=Object(p.a)((e,t)=>{let{headers:a}=t;const n=localStorage.getItem("id_token");return{headers:{...a,authorization:n?"Bearer "+n:""}}}),ee=new m.a({link:Z.concat(X),cache:new u.a});var te=function(){return r.a.createElement(d.a,{client:ee},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(J,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:F}),r.a.createElement(i.a,{exact:!0,path:"/login",component:H}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:V}),r.a.createElement(i.a,{exact:!0,path:"/success",component:z}),r.a.createElement(i.a,{exact:!0,path:"/orderHistory",component:K}),r.a.createElement(i.a,{exact:!0,path:"/products/:id",component:L}),r.a.createElement(i.a,{component:q}))))))};const ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="/service-worker.js";ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(a=>{const n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):ne(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.13a7c955.chunk.js.map