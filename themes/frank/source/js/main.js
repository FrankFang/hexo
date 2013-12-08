/**
 * Created by frank on 13-11-23.
 */
//var avatarUrl = 'http://www.gravatar.com/avatar/' + md5('frankfang1990@gmail.com') + '?s=80';
//$('#myAvatar')[0].src = avatarUrl;

function doit() {
  var xs = document.querySelectorAll(('#my_panel_wrap li .del,#my_panel_wrap li .x-to-hide'));
  var i = 0;
  var t = setInterval(function () {
    xs[i].click();
    setTimeout(function () {
      document.querySelector('.pop_content .input-submit').click();
      i += 1;
      if (i >= xs.length) {
        document.querySelector('.pagerpro .current').nextElementSibling.querySelector('a').click();
        window.clearInterval(t);
        setTimeout(doit, 2000)
      }
    }, 100)
  }, 200);
}
var ttt = setInterval(function () {
  doit();
  if (!document.querySelector('.pagerpro .current').nextElementSibling) {
    window.clearInterval(ttt);
  }
}, 10000);
doit();
