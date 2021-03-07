# month-md @ v.0.0.1-alpha.7.1

Produce a markdown (md) table for the date provided (year, month). Defaults to current year and month.

## Use

```js
const monthMd = require("month-md")

console.log(monthMd.monthTable(2021,3))
```

or

```shell
$ npx month-md
```

or

```shell
$ npx month-md 2021 03
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

# NFO
## 🤚🛑✋

Use at own risk, this is under heavy development for the rest of the month

## Part of the [Cotoron](https://cotoron.ga/) series

> Code + Toronto
> Cotoron is an experimental coding project started in Toronto with a group of friends. We start a new 30-day sprint project each month and repeat. Check out what we’re building and our journey!
