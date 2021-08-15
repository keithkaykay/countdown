function getCookie(NameOfCookie)
{ if (document.cookie.length > 0)
{ begin = document.cookie.indexOf(NameOfCookie+"=");
if (begin != -1)
{ begin += NameOfCookie.length+1;
end = document.cookie.indexOf(";", begin);
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(begin, end)); }
}
return null;
}



function setCookie(NameOfCookie, value, expiredays)
{ var ExpireDate = new Date ();
ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
document.cookie = NameOfCookie + "=" + escape(value) +
((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}


$(document).ready(function() {
  $("button").click(function() {
  $.get("jQuery.html", function(data,status) {
  document.getElementById("jQuery").innerHTML = data;
  });
  });
  });