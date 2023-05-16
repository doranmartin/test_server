const requestListener = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", 'text/html');
    res.write("<html>");
    res.write("<head><title>HELLO FRIEEEEND</title></head>");
    res.write('<body><h1>Hey friendo, did you get the message you were looking for????<p>Please enter what mood you\'re in in the form below!!</p></h1></body>')
    res.write("</html>");
    return res.end();
  }

};

module.exports = requestListener;
