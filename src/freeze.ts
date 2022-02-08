import { visit, Visitor } from "unist-util-visit";

const plugin = () => {
  const visitor: Visitor = () => {
    // ...
  };

  const transformer = (tree) => {
    visit(tree, "element", visitor);
  };

  return transformer;
};

export default plugin;
