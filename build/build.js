require('babel-register')

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./webpack.config')

const spinner = ora('building...')
spinner.start()

webpack(config, function (err, stats) {
  spinner.stop()

  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))

  console.log('\n')
  console.log(chalk.green('>>>'), chalk.blue('Build complete!'))
})