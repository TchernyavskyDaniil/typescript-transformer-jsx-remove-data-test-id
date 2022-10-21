"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDataTestIdTransformer = void 0;
var ts = require("typescript");
function removeDataTestIdTransformer() {
    return function (context) {
        var visit = function (node) {
            if (ts.isJsxAttribute(node)) {
                if (node.name.getText() === 'data-test-id' || node.name.getText() === 'data-testid') {
                    return undefined;
                }
            }
            return ts.visitEachChild(node, visit, context);
        };
        return function (node) { return ts.visitNode(node, visit); };
    };
}
exports.removeDataTestIdTransformer = removeDataTestIdTransformer;
