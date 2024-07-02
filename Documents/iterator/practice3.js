const LINE2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구',
];

// 000000;

class Routes {
  constructor(s, e) {
    this.start = s;
    this.end = e;
    // this.length = LINE2.indexOf(e) - LINE2.indexOf(s) + 1;
  }

  [Symbol.iterator]() {
    let s = LINE2.indexOf(this.start);
    let e = LINE2.indexOf(this.end);
    let t;
    let flag = false;
    let found = false;
    return {
      next: () => {
        // if (s > LINE2.length - 1) {
        //   s = 0;
        //   flag = true;
        // }
        // if (LINE2[s] !== this.end) {

        s = s % LINE2.length;

        if (LINE2[t] !== LINE2[s]) {
          t = (e + 1) % LINE2.length;
          return {
            value: LINE2[s++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }

        // }
        // } else {
        //   return { done: true };
        // }
      },
    };
  }
}

const r1 = new Routes('구로디지털단지', '성수');
const it1 = r1[Symbol.iterator]();
console.log([...r1], [...r1].length);
// console.log(it1.next());
