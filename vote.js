var http = require("http"),
    oui = 0,
    non = 0,
    voter = (req,res) => {
      res.write("<html><body>");
      if (req.url == "/oui" || req.url == "/non"){
          if (req.url == "/oui") oui++;
          if (req.url == "/non") non++;
          res.write(`<h1>Merci pour voter!</h1>
<h2>Le compte est : <b>${oui}</b> pour OUI et <b>${non}</b> pour NON.</h2>`); }
	else {
	    res.write(`<h1>Votez <a href='non'>NON</a> ou <a href='oui'>OUI</a>.</h1>`);
	}
	res.end("</body></html>");
    };
http.createServer(voter).listen(3000);
