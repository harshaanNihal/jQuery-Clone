
class jQuery {

  constructor(selector) {
    this.elm = document.querySelectorAll(selector);
  }


  hide() {
    this.elm.forEach(el => { el.style.display = 'none'; });
    return this;
  }


  show() {
    this.elm.forEach(el => { el.style.display = '' });
    return this;
  }

  append(newTag) {
    this.elm.forEach(el => {
      let newEle = document.createElement(newTag);
      el.appendChild(newEle);
    });
    return this;
  }

  hasClass(className) {
    arr = [];
    this.elm.forEach(el => {
      if (el.classList.contains(className)) {
        console.log(true);
        arr.push(el);
      } else {
        console.log(false);
      };
    })
    this.elm = arr;
    return this;
  }


  css(prop, value) {
    this.elm.forEach(el => {
      el.style[prop] = value;
    })
    return this;
  }

  attr(key, value) {
    this.elm.forEach(el => {
      el.setAttribute(key, value);
    })
    return this;
  }
  removeAttr(key, value) {
    this.elm.forEach(el => {
      el.removeAttribute(key, value);
    })
    return this;
  }

  dblClick(fn) {
    this.elm.forEach(el => {
      el.addEventListner('dblClick',fn)
    })
    return this;
  }
  
  html(innerText) {
    this.elm.forEach(el => {
      if (!innerText) {
        console.log(el.innerHTML);
      } else {
        el.innerHTML = innerText;
      }
    })
    return this;
  }

  addClass(classes) {
    this.elm.forEach(el => {
      el.className += classes;
    })
    return this;
  }

  removeClass() {
    this.elm.forEach(el => {
      el.classList.remove(classes);
    })
    return this;
  }
  getJSON(url) {
    fetch(url)
      .then(function (r) {
        return r.json()
      })
      .catch(function (e) {
        console('fatching fail');
        return e;
      });
  }
}

let $ = (x) => new jQuery(x);