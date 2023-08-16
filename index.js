const fs = require("fs");
const htmlparser = require("htmlparser2");

function parseHtml(dom) {
  const parser = new htmlparser.Parser(
    {
      onopentag: (name, attrib) => {
        if (name == "li") console.log(name);
      },
    },
    { decodeEntities: true }
  );
  parser.write(dom);
  parser.end();
}
