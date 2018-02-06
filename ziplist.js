
function zipList(list1, list2) {
  const ret = [];
  for (let i = 0; i < list1.length; i++) {
    ret.push(list1[i]);
    ret.push(list2[i]);
  }
  return ret;
}

const listNum = [1, 2, 3, 4];
const listAlph = ['a', 'b', 'c', 'd'];
console.log(zipList(listNum, listAlph));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listNum, listAlph));
