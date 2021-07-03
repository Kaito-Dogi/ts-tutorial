import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',1980);
var bBook = new Item('はじめてのJavaScript',2980);
aBook.say(elem);
bBook.say(elem); //aBookは表示されなかった．