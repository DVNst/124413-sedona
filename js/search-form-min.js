var btn_search_form=document.querySelector(".btn-search-form"),search_form=document.querySelector(".search-form"),form=search_form.querySelector("form"),data_begin=search_form.querySelector("[name=data-begin]"),data_end=search_form.querySelector("[name=data-end]"),adult=search_form.querySelector("[name=adult]"),child=search_form.querySelector("[name=child]"),btn_adult_less=search_form.querySelector("[name=btn-adult-less]"),btn_adult_more=search_form.querySelector("[name=btn-adult-more]"),btn_child_less=search_form.querySelector("[name=btn-child-less]"),btn_child_more=search_form.querySelector("[name=btn-child-more]"),storage_data_begin=localStorage.getItem("data_begin"),storage_data_end=localStorage.getItem("data_end"),storage_adult=localStorage.getItem("adult"),storage_child=localStorage.getItem("child");btn_search_form.addEventListener("click",function(e){e.preventDefault(),search_form.classList.toggle("search-form-show"),search_form.classList.contains("search-form-show")||search_form.classList.remove("search-form-error"),localStorage.getItem("data_begin")&&(data_begin.value=localStorage.getItem("data_begin")),localStorage.getItem("data_end")&&(data_end.value=localStorage.getItem("data_end")),localStorage.getItem("adult")&&(adult.value=localStorage.getItem("adult")),localStorage.getItem("child")&&(child.value=localStorage.getItem("child")),data_begin.focus()}),data_begin.addEventListener("focus",function(e){data_begin.select()}),data_end.addEventListener("focus",function(e){data_end.select()}),adult.addEventListener("focus",function(e){adult.select()}),child.addEventListener("focus",function(e){child.select()}),form.addEventListener("submit",function(e){!data_begin.value||!data_end.value||!adult.value||!child.value||adult.value<0||child.value<0?(e.preventDefault(),console.log("ddd"),search_form.classList.remove("search-form-error"),search_form.offsetWidth=search_form.offsetWidth,search_form.classList.add("search-form-error")):(e.preventDefault(),localStorage.setItem("data_begin",data_begin.value),localStorage.setItem("data_end",data_end.value),localStorage.setItem("adult",adult.value),localStorage.setItem("child",child.value))}),window.addEventListener("keydown",function(e){27===e.keyCode&&search_form.classList.contains("search-form-show")&&(search_form.classList.remove("search-form-show"),search_form.classList.remove("search-form-error"))}),btn_adult_less.addEventListener("click",function(e){isNaN(adult.value)?adult.value=1:adult.value>0&&(adult.value=Number(adult.value)-1)}),btn_adult_more.addEventListener("click",function(e){isNaN(adult.value)?adult.value=1:adult.value=Number(adult.value)+1}),btn_child_less.addEventListener("click",function(e){isNaN(child.value)?child.value=1:child.value>0&&(child.value=Number(child.value)-1)}),btn_child_more.addEventListener("click",function(e){isNaN(child.value)?child.value=1:child.value=Number(child.value)+1});