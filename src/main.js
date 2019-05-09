import 'babel-polyfill';
import people from './people';
import thatgreat from 'thatgreat';
import moment from 'moment';

console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('day').fromNow());
console.log(moment().startOf('hour').fromNow());

function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

var html = '<h1 id="title">Hey All!</h1><span style="display:inline-block; width=100px;">Questions?</span>';
appendHtml(document.body, html); // "body" has two more children - h1 and span.
