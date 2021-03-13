#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const monthMD = require('../dist/index')
const actions = process.argv.slice(2)

function helpmehelpyou() {
	console.log(`Usage:
  month-md (default) current year, current month, en [en,fr,es,pt]
  month-md fr
  month-md year month
  month-md year month es
    ie., month-md 2021 3
Options: 
  -h, --help        Help menu`)
}

if ((actions.indexOf('--help') >= 0) || (actions.indexOf('-h') >= 0)) {
	helpmehelpyou()
	process.exit(0)
}

function info(){
	console.log('Invalid,\n Please use:\n -h or --help for HELP')
	process.exit(0)
}

if (actions.length == 1) {
	const lang = actions[0].toString()
	const languages = ['en','fr','es','pt']
	if(languages.includes(lang)){
		const monthTable = monthMD.monthTable(lang)
		console.log(monthTable)
	}else{
		info()
	}
} else if (actions.length == 2) {
	const monthTable = monthMD.monthTable(actions[0], actions[1])
	console.log(monthTable)
} else if (actions.length == 3) {
	const monthTable = monthMD.monthTable(actions[0], actions[1], actions[2])
	console.log(monthTable)
} else if (actions.length == 0) {
	const monthTable = monthMD.monthTable()
	console.log(monthTable)
} else {
	info()
}
