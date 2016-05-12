console.log('Nothing to see here.');

// comments

var boats = '';
var num = 0;

for (var i = 0; i < 10000; i += 1){
  boats += '#prayforBoaty';
}

document.querySelector('.paragraph-boaty').innerHTML = num + ' Likes';

document.querySelector('.button-tone-down').onclick = function() {
  num += 1;
  document.querySelector('.paragraph-boaty').innerHTML = num + ' Likes';
  if (num > 9){
    document.querySelector('.paragraph-boaty').innerHTML = num + ' Likes' + ' WOOOOHOOOOO';
  }
  if (num > 19){
    document.querySelector('.paragraph-boaty').innerHTML = num + ' Likes' + ' HELL YEAHHHHH';
  }
  if (num > 29){
    document.querySelector('.paragraph-boaty').innerHTML = num + ' Likes' + ' THANK YOU VERY MUCH';
  }
}

// document.querySelector('.site-header').classList.add('site-header-tall');
// There is also toggle and remove instead of add
// document.querySelector('.link-google').href = 'https://bing.com';
