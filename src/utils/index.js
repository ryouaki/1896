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
export const classname = (...ops) => {
  let classes = [];

  for (let i = 0; i < ops.length; i++) {
    let item = ops[i];
    let itemType = typeof ops[i];

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
}
