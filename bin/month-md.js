#!/usr/bin/env node

const actions = process.argv.slice(2);

function helpmehelpyou() {
  console.log(`Usage:
  month-md year month
    ie., month-md 3 2021
Options: 
  -h, --help        Help menu`)
}

if ((actions.indexOf('--help') >= 0) || (actions.indexOf('-h') >= 0)) {
  helpmehelpyou()
  process.exit(0)
} 

if(actions.length = 2){
  const monthMD = require('../dist/index')
  const monthTable = monthMD.monthTable(actions[0],actions[1])
  console.log(monthTable)
}
else{
  console.log('Invalid,\n -h or --help for HELP')
  process.exit(0)
}
