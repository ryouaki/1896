var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Function name: classname
 * 
 * Params: String or Object { string: boolean }
 * 
 * Example: classnames('classname1', {'classname2': false}, {'classname3': true})
 *          return: 'classname1 classname3'
 * 
 * Description: 这是一个简单版本的classnames实现，主要用于合并class。
 */
export var classname = function classname() {
  for (var _len = arguments.length, ops = Array(_len), _key = 0; _key < _len; _key++) {
    ops[_key] = arguments[_key];
  }

  var classes = [];

  for (var i = 0; i < ops.length; i++) {
    var item = ops[i];
    var itemType = _typeof(ops[i]);

    if (itemType === 'string') {
      classes.push(item);
    } else if (itemType === 'object') {
      for (var key in item) {
        if (Object.hasOwnProperty.call(item, key) && item[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
};