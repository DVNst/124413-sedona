var btn_search_form = document.querySelector(".btn-search-form");
var search_form = document.querySelector(".search-form");
var form = search_form.querySelector("form");
var data_begin = search_form.querySelector("[name=data-begin]");
var data_end = search_form.querySelector("[name=data-end]");
var adult = search_form.querySelector("[name=adult]");
var child = search_form.querySelector("[name=child]");

var btn_adult_less = search_form.querySelector("[name=btn-adult-less]");
var btn_adult_more = search_form.querySelector("[name=btn-adult-more]");
var btn_child_less = search_form.querySelector("[name=btn-child-less]");
var btn_child_more = search_form.querySelector("[name=btn-child-more]");

var storage_data_begin = localStorage.getItem("data_begin");
var storage_data_end = localStorage.getItem("data_end");
var storage_adult = localStorage.getItem("adult");
var storage_child = localStorage.getItem("child");

window.onload = function() {
	search_form.classList.add("search-form-hide");
};

btn_search_form.addEventListener("click", function (evt) {
	evt.preventDefault();
	search_form.classList.toggle("search-form-show");

	if (!search_form.classList.contains("search-form-show")) {
		search_form.classList.remove("search-form-error");
		}

	if (localStorage.getItem("data_begin")) {
		data_begin.value = localStorage.getItem("data_begin");
		}
	if (localStorage.getItem("data_end")) {
		data_end.value = localStorage.getItem("data_end");
		}
	if (localStorage.getItem("adult")) {
		adult.value = localStorage.getItem("adult");
		}
	if (localStorage.getItem("child")) {
		child.value = localStorage.getItem("child");
		}

	setTimeout("data_begin.focus()", 100);
});

data_begin.addEventListener("focus", function (evt) {
	data_begin.select();	
});

data_end.addEventListener("focus", function (evt) {
	data_end.select();	
});

adult.addEventListener("focus", function (evt) {
	adult.select();	
});

child.addEventListener("focus", function (evt) {
	child.select();	
});

form.addEventListener("submit", function (evt) {
	if (!data_begin.value || !data_end.value || !adult.value || !child.value  || adult.value<0 || child.value<0) {
		evt.preventDefault();
		search_form.classList.remove("search-form-error");
    	search_form.offsetWidth = search_form.offsetWidth;
		search_form.classList.add("search-form-error");
	} else {
		evt.preventDefault();
		localStorage.setItem("data_begin", data_begin.value);
		localStorage.setItem("data_end", data_end.value);
		localStorage.setItem("adult", adult.value);
		localStorage.setItem("child", child.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (search_form.classList.contains("search-form-show")) {
			search_form.classList.remove("search-form-show");
			search_form.classList.remove("search-form-error");
		}
	}
});

btn_adult_less.addEventListener("click", function (evt) {
	if (isNaN(adult.value)) {
		adult.value = 1;
	} else if (adult.value>0) {
		adult.value = Number(adult.value) - 1;
	}
})

btn_adult_more.addEventListener("click", function (evt) {
	if (isNaN(adult.value)) {
		adult.value = 1;
	} else {
		adult.value = Number(adult.value) + 1;
	}
})

btn_child_less.addEventListener("click", function (evt) {
	if (isNaN(child.value)) {
		child.value = 0;
	} else if (child.value>0) {
		child.value = Number(child.value) - 1;
	}
})

btn_child_more.addEventListener("click", function (evt) {
	if (isNaN(child.value)) {
		child.value = 1;
	} else {
		child.value = Number(child.value) + 1;
	}
})