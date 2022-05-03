const { retrieveModel } = require("../models/retrieve.model");
const user = require("../data/data");


async function retrieveController(req, res) {
  const args = {
    accessToken: user.accessToken,
    basePath: user.basePath,
    accountId: user.accountId,
    documentId: user.documentId,
    envelopeId: user.envelopeId,
    envelopeDocuments: user.envelopeDocuments,
  };
  

  const results = await retrieveModel(args).catch((err) => console.log(err));
/*   if (results) {
    res.writeHead(200, {
      "Content-Type": results.mimetype,
      "Content-disposition": "inline;filename=" + results.docName,
      "Content-Length": results.fileBytes.length,
    });
  }  */
  //console.log(results)
  res.end(results, "binary");
}

module.exports = {
  retrieveController,
};
