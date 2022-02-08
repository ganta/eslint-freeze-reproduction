import { visit } from "unist-util-visit";

const plugin = () => {
  const visitor = () => {
    // ...
  };

  const transformer = (tree) => {
    visit(tree, "element", visitor);
  };

  return transformer;
};

export default plugin;
