(()=>{"use strict";var e={n:o=>{var c=o&&o.__esModule?()=>o.default:()=>o;return e.d(c,{a:c}),c},d:(o,c)=>{for(var t in c)e.o(c,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:c[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.jQuery;var c=e.n(o);let t;c()((function(){const e=function(e){"undefined"!=typeof RyCheckoutParams&&(c()(".woocommerce-checkout #shipping_phone_field label .required").remove(),c()(".woocommerce-checkout #shipping_phone_field label .optional").remove(),e?(c()(".woocommerce-checkout #shipping_phone_field").addClass(["validate-required"]),c()(".woocommerce-checkout #shipping_phone_field label").append(RyCheckoutParams.i18n.required)):(c()(".woocommerce-checkout #shipping_phone_field").removeClass(["validate-required"]),c()(".woocommerce-checkout #shipping_phone_field label").append(RyCheckoutParams.i18n.optional)),c()(".woocommerce-checkout #shipping_phone").trigger("change"))};c()(document.body).on("updated_checkout",(function(o,i){if(void 0!==i&&(t=void 0,c()(".woocommerce-checkout .ry-cvs-hide").show(),c()(".woocommerce-checkout .ry-ecpay-cvs-hide").show(),c()(".woocommerce-checkout .ry-newebpay-cvs-hide").show(),c()(".woocommerce-checkout .ry-smilepay-cvs-hide").show(),void 0!==i.fragments.ry_shipping_info?(!0===i.fragments.ry_shipping_info.ecpay_home&&e(!0),!0===i.fragments.ry_shipping_info.ecpay_cvs&&(e(!0),t=i.fragments.ry_shipping_info.postData,c()(".woocommerce-checkout .ry-cvs-hide").hide(),c()(".woocommerce-checkout .ry-ecpay-cvs-hide").hide(),c()(".ry-cvs-store-info").hide(),""!=c()("input#RY_CVSStoreID").val()&&(c()(".ry-cvs-store-info").show(),c()(".ry-cvs-store-info > span").hide(),""!=c()("input#RY_CVSStoreName").val()&&c()(".ry-cvs-store-info .store-name").text(c()("input#RY_CVSStoreName").val()).parent().show(),""!=c()("input#RY_CVSAddress").val()&&c()(".ry-cvs-store-info .store-address").text(c()("input#RY_CVSAddress").val()).parent().show(),""!=c()("input#RY_CVSTelephone").val()&&c()(".ry-cvs-store-info .store-telephone").text(c()("input#RY_CVSTelephone").val()).parent().show())),!0===i.fragments.ry_shipping_info.newebpay_cvs&&(e(!1),c()(".woocommerce-checkout .ry-cvs-hide").hide(),c()(".woocommerce-checkout .ry-newebpay-cvs-hide").hide()),!0===i.fragments.ry_shipping_info.smilepay_cvs&&(e(!0),c()(".woocommerce-checkout .ry-cvs-hide").hide(),c()(".woocommerce-checkout .ry-smilepay-cvs-hide").hide())):e(!1)),null!==window.sessionStorage.getItem("RyTempCheckout")){let e=JSON.parse(window.sessionStorage.getItem("RyTempCheckout"));for(const o in e){let c=jQuery('[name="'+e[o].name+'"]');switch(c.prop("tagName")){case"INPUT":if("checkbox"==c.attr("type")){!1===c.prop("checked")&&c.trigger("click");break}if("radio"==c.attr("type")){c=jQuery('[name="'+e[o].name+'"][value="'+e[o].value+'"]'),!1===c.prop("checked")&&c.trigger("click");break}case"TEXTAREA":case"SELECT":const t=c.val();c.val(e[o].value),t!=e[o].value&&c.trigger("change")}}window.sessionStorage.removeItem("RyTempCheckout")}})),c()(".woocommerce-checkout").on("click",".ry-choose-cvs",(function(){let e=c()("form.checkout").serializeArray();e=e.filter((function(e){return"_"!=e.name.substring(0,1)&&"RY_"!=e.name.substring(0,3)&&-1===["terms"].indexOf(e.name)})),window.sessionStorage.setItem("RyTempCheckout",JSON.stringify(e));let o='<form id="RyECPayChooseCvs" action="'+c()(this).data("ry-url")+'" method="post">';for(const e in t)o+='<input type="hidden" name="'+e+'" value="'+t[e]+'">';window.innerWidth<1024&&(o+='<input type="hidden" name="Device" value="1">'),o+="</form>",document.body.innerHTML+=o,document.getElementById("RyECPayChooseCvs").submit()}))}))})();