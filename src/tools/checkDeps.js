const fs = require('fs')
const glob = require('glob')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { antdComponents } = require('./antdConfig')


const antdUsageCounts = {}

function analyzeAntdUsageInFile(file) {
  const content = fs.readFileSync(file, 'utf-8')
  const isJSXFile = /\.(jsx|tsx)$/.test(file) // 检查是否为.jsx或.tsx文件
  let ast
  try {
    ast = parser.parse(content, {
      sourceType: 'module',
      plugins: ['jsx' ,'typescript'], // 使用不同的插件解析文件
      errorRecovery: true // 允许错误恢复
    })
  } catch (error) {
    // 如果解析出错，直接返回，不进行后续处理
    console.log('error',file)
    return
  }

  traverse(ast, {
    ImportDeclaration(path) {
      const importSource = path.node.source.value
      if (importSource === 'antd') {
        path.node.specifiers.forEach((specifier) => {
          if (specifier.type === 'ImportSpecifier') {
            const componentName = specifier.imported.name
            if (antdComponents.includes(componentName)) {
              antdUsageCounts[componentName] = (antdUsageCounts[componentName] || 0) + 1
            }
          }
        })
      }
    }
  })
}

function analyzeAntdUsageInProject() {
  const files = glob.sync('../../liepin-project/fe-c-pc/v6/src/**/*.{js,jsx,ts,tsx}') // 匹配项目中所有.js、.jsx、.ts和.tsx文件
  //const files2 = glob.sync('../../liepin-project/fe-tdadmin-pc/v6/src/**/*.{js,jsx,ts,tsx}') // 匹配项目中所有.js、.jsx、.ts和.tsx文件
  //const files3 = glob.sync('../../liepin-project/fe-liveadmin-pc/v6/src/**/*.{js,jsx,ts,tsx}') // 匹配项目中所有.js、.jsx、.ts和.tsx文件
  // console.log('files', files)
  for (const file of files) {
    analyzeAntdUsageInFile(file)
  }
  // for (const file of files2) {
  //   analyzeAntdUsageInFile(file)
  // }
  // for (const file of files3) {
  //   analyzeAntdUsageInFile(file)
  // }
}

analyzeAntdUsageInProject()

//analyzeAntdUsageInFile("../../liepin-project/fe-c-pc/v6/src/views/account/profile/Secret/components/PhoneProtection/index.tsx")


console.log('Ant Design Component Usage Counts:')
console.log(antdUsageCounts)
