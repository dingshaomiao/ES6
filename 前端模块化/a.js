// 导出变量
export const name = 'dsm';

// 导出方法
export const dogSay = function () {
  console.log('wang wang');
}

// 导出方法第二种
function catSay () {
  console.log('miao miao');
}
export { catSay }

// export default 导出
const m = 100;
export default m;

// export default const m = 100; // 这里不能写这种格式