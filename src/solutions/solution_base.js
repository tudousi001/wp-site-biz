const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')
const solution_require = require('./solution_require.js')

// Indicate to the solution json file
module.exports = function(content) {
    if (content !== undefined) {
        // Top menu part
        let template = require(`../views/topmenu.pug`);
        document.write(template({data: topmenu}));

        // Content part
        for (let id in content) {
            template = solution_require(content[id].widget);
            document.write(template({data: content[id].data}));
        }

        // Footer part
        template = require(`../views/footer.pug`);
        document.write(template({data: footer}));
    }
}
