var 
  express = require('express'),
  app     = express()
;

// set up a route to redirect http to https
app.get('*',function(req,res){  
    res.redirect('https://dropkey.io'+req.url)
})

// have it listen on 8000
app.listen(8000);
