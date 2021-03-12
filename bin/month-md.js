#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const actions = process.argv.slice(2)

function helpmehelpyou() {
	console.log(`Usage:
  month-md (default) current year, current month, en [en,fr,es,pt]
  month-md fr
  month-md year month
    ie., month-md 2021 3
Options: 
  -h, --help        Help menu`)
}

if ((actions.indexOf('--help') >= 0) || (actions.indexOf('-h') >= 0)) {
	helpmehelpyou()
	process.exit(0)
}

if (actions.length == 1) {
	const monthMD = require('../dist/index')
	const monthTable = monthMD.monthTable(actions[0])
	console.log(monthTable)
} else if (actions.length == 2) {
	const monthMD = require('../dist/index')
	const monthTable = monthMD.monthTable(actions[0], actions[1])
	console.log(monthTable)
} else if (actions.length == 3) {
	const monthMD = require('../dist/index')
	const monthTable = monthMD.monthTable(actions[0], actions[1], actions[2])
	console.log(monthTable)
} else if (actions.length == 0) {
	const monthMD = require('../dist/index')
	const monthTable = monthMD.monthTable()
	console.log(monthTable)
} else {
	console.log('Invalid,\n -h or --help for HELP')
	process.exit(0)
}
