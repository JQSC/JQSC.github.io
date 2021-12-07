const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');
const path = require('path')

const code = `
function fun1() {
    const text1 = 'chi'
    function fun2() {
        const text2 = 'sheng'
        function fun3() {
            const text3 = 'qi'
        }
    }
}
`;
const ast = parser.parse(code);

traverse(ast, {
    FunctionDeclaration(path) {
        if (path.get('id.name').node === 'fun3') {
            console.log(path.scope.dump());
        }
        //console.log(path.scope.dump());
    }
})


// ------------------------------------------------------------
// # FunctionDeclaration
//  - text3 { constant: true, references: 0, violations: 0, kind: 'const' }
// # FunctionDeclaration
//  - text2 { constant: true, references: 0, violations: 0, kind: 'const' }
//  - fun3 { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// # FunctionDeclaration
//  - text1 { constant: true, references: 0, violations: 0, kind: 'const' }
//  - fun2 { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// # Program
//  - fun1 { constant: true, references: 0, violations: 0, kind: 'hoisted' }
// ------------------------------------------------------------

// writeParse(ast)

// function writeParse(code) {
//     const filePath = path.join(__dirname, './mock.json');
//     fs.writeFile(filePath, JSON.stringify(code), (err) => {
//         if (err) {
//             console.log('error', err)
//         }
//     })
// }