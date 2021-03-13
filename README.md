# month-md

Produce a markdown (md) table for the date provided (year, month). Defaults to current year and month in english. You can also set a language string to retrieve the days of weekday in the selected language. Currently support:

- en | english
- es | español
- pt | português
- fr | français

## Use

```js
const monthMd = require("month-md")

console.log(monthMd.monthTable())
console.log(monthMd.monthTable(2021,3))
console.log(monthMd.monthTable(2021,3,"fr"))
console.log(monthMd.monthTable("pt"))
```

or

```shell
$ npx month-md
$ npx month-md 2021 03
$ npx month-md 2021 03 es
$ npx month-md pt
```

## Result (markdown):

```markdown
|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|
|:---: |:---: |:---:  |:---:    |:---:   |:---: |:---:   |
|      |1     |2      |3        |4       |5     |6       |
|7     |8     |9      |10       |11      |12    |13      |
|14    |15    |16     |17       |18      |19    |20      |
|21    |22    |23     |24       |25      |26    |27      |
|28    |29    |30     |31       |        |      |        |
```

or

|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|
|:---: |:---: |:---:  |:---:    |:---:   |:---: |:---:   |
|      |1     |2      |3        |4       |5     |6       |
|7     |8     |9      |10       |11      |12    |13      |
|14    |15    |16     |17       |18      |19    |20      |
|21    |22    |23     |24       |25      |26    |27      |
|28    |29    |30     |31       |        |      |        |

## Part of the [Cotoron](https://cotoron.ga/) series

> Code + Toronto
> Cotoron is an experimental coding project started in Toronto with a group of friends. We start a new 30-day sprint project each month and repeat. Check out what we’re building and our journey!
