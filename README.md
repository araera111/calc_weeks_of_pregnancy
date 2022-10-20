# calc_weeks_of_pregnancy

## 何をするライブラリなのか？

出産予定日、本日の日付を渡すと妊娠週数が計算されます。

## installation

```sh
npm i calc_weeks_of_pregnancy
or
yarn add calc_weeks_of_pregnancy
or
pnpm add calc_weeks_of_pregnancy
```

## usage（使い方）

```TypeScript
const dueDate = '2022-12-31';
const today = '2022-10-20';
const weeksOfPregnancy = calcWeeksOfPregnancy(dueDate, today)
/*
  { weeks: 29, days: 5 };
*/
```
