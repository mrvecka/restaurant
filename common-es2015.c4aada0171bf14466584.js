(self.webpackChunkrestaurant_manager=self.webpackChunkrestaurant_manager||[]).push([[592],{3929:function(t,e,n){"use strict";n.d(e,{ny:function(){return a},F3:function(){return u},T:function(){return s},Jo:function(){return c},i1:function(){return i},UA:function(){return d},mu:function(){return o},Y0:function(){return f},Lc:function(){return l}});var r=n(3065);const a=(0,r.PH)("[Restaurant] loadRestaurants"),u=(0,r.PH)("[Restaurant] loadRestaurantsSuccess",(0,r.Ky)()),s=(0,r.PH)("[User] deleteRestaurant",(0,r.Ky)()),c=(0,r.PH)("[User] deleteRestaurantSuccess",(0,r.Ky)()),i=(0,r.PH)("[Restaurant] updateRestaurant",(0,r.Ky)()),d=(0,r.PH)("[Restaurant] updateRestaurantSuccess",(0,r.Ky)()),o=(0,r.PH)("[Restaurant] createRestaurant",(0,r.Ky)()),f=(0,r.PH)("[Restaurant] createRestaurantSuccess",(0,r.Ky)()),l=(0,r.PH)("[Restaurant] selectRestaurant",(0,r.Ky)())},8230:function(t,e,n){"use strict";n.d(e,{k:function(){return i},J:function(){return o}});var r=n(273),a=n(3065),u=n(3929);const s=(0,r.H)({selectId:t=>t.id}),c=s.getInitialState(),i="restaurants",d=(0,a.Lq)(c,(0,a.on)(u.F3,(t,e)=>s.addMany(e.items,t)),(0,a.on)(u.Jo,(t,e)=>s.removeOne(e.id,t)),(0,a.on)(u.UA,(t,e)=>{return s.updateOne({id:(n=e.restaurant).id,changes:n},t);var n}),(0,a.on)(u.Y0,(t,e)=>s.addOne(e.restaurant,t)),(0,a.on)(u.Lc,(t,e)=>Object.assign(Object.assign({},t),{selectedRestaurantId:e.id})));function o(t=c,e){return d(t,e)}},6667:function(t,e,n){"use strict";n.d(e,{hN:function(){return d},nO:function(){return o},eG:function(){return f},ar:function(){return l}});var r=n(3065),a=n(721),u=n(8230);const s=(0,r.ZF)(u.k),c=(0,r.P1)(s,t=>t.ids),i=(0,r.P1)(s,t=>t.entities),d=(0,r.P1)(c,i,a.ox,(t,e,n)=>t.map(t=>e[t]).map(t=>({id:t.id,name:t.name,street:t.street,zipCode:t.zipCode,city:t.city,countryName:n.find(e=>e.id===t.countryId).code2}))),o=((0,r.P1)(s,i,a.ox,(t,e,n)=>{const r=t.selectedRestaurantId?e[t.selectedRestaurantId]:null;return r?[r].map(t=>({id:t.id,name:t.name,street:t.street,zipCode:t.zipCode,city:t.city,countryName:n.find(e=>e.id===t.countryId).code2}))[0]:null}),(0,r.P1)(s,i,a.ox,(t,e,n)=>t.selectedRestaurantId?e[t.selectedRestaurantId]:null),t=>(0,r.P1)(i,e=>e[t])),f=(0,r.P1)(i,c,(t,e)=>e.map(e=>({value:t[e].id,text:t[e].name}))),l=t=>(0,r.P1)(o(t),a.ox,(t,e)=>t&&e?{id:t.id,name:t.name,street:t.street,zipCode:t.zipCode,city:t.city,countryName:e.find(e=>e.id===t.countryId).code2}:null)}}]);