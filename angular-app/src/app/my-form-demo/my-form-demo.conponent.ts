import { Component } from '@angular/core';

const arr = new Array(5)
  .fill(0)
  .map((_) => new Array(5).fill(0).map((e) => new Array(5).fill(0)));
const result: number[] = [];
function convertArray(array: any[]) {
  array.forEach((e) => {
    if (typeof e === 'object') {
      convertArray(e);
    } else {
      result.push(e);
    }
  });
}
function flatten(arr: any[]) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (Array.isArray(element)) {
      arr = [].concat(...arr);
    }
  }
  return arr;
}

function flattenByString(arr: any) {
  return arr
    .toString()
    .split(',')
    .map((item: any) => Number(item));
}
function flattenByjs(arr: any) {
  return arr.flat(Infinity);
}

function promiseTest() {
  console.info('start');
  let pro = new Promise((resolve) => {
    console.info('promise1');
    resolve(1);
  });
  pro
    .then((res) => {
      console.info('promise then 1');
    })
    .then(() => {
      console.info('promise then 2');
    });
  console.info('end');
}

@Component({
  selector: 'app-statistics',
  templateUrl: './my-form-demo.component.html',
  styleUrls: ['./my-form-demo.component.css'],
})
export class MyFormDemoComponent {
  constructor() {}
  testClick() {
    // convertArray(arr);
    promiseTest();
  }
}
