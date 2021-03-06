var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'www')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 4444);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
