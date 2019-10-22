import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
// import our main App component
import ServerApp from "../../src/ServerApp";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }
    const context = {};
    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <ServerApp />
      </StaticRouter>
    );
    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      // inject the rendered app into our html and send it
      return res.send(
        htmlData.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
      );
    }
  });
};
