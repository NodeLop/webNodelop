/**
 * Created by Weil on 16/6/19.
 */

let promiseIns1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'success1');
});

let promiseIns2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'success2');
});

let promiseIns3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'success3');
});

let promiseIns4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, 'success4');
  //setTimeout(reject, 1500, 'fail4');
});

Promise.all([promiseIns1, promiseIns2, promiseIns3, promiseIns4])
  .then((value) => {
    console.log(value);
    debugger;
    clearTime();
  })
  .catch((err) => {
    console.log(err);
    debugger;
  });


//Promise.all([1, false, [1, 3], 'str'])
//  .then((value) => {
//    console.log(value);
//    debugger;
//    clearTime();
//  })
//  .catch((err) => {
//    console.log(err);
//    debugger;
//  });
// 实例:转发多篇文章的时候使用







