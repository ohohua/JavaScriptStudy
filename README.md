- 给你看一个骚操作
```js
// 现在我想来一个骚排序
const arr = [11,3,9,35,2,7];
const res = [];
arr.forEach((it) => {
  setTimeout(() => {
    res.push(it);
  }, it * 100)
})
```
