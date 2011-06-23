/*
 * Name:            OpenExchange.Pages.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the frontend website.
 *
 */
 
OpenExchange.Pages.Manager = Class.create({

    // <summary>
    // Start a Node.js server for handling the webpages.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
        
        // Start a server.
        var me = this;
        http.createServer(function(req, res) {
            me.handleRequest(request, response);
        }).listen(80, "127.0.0.1");
    },
    
    // <summary>
    // Handles a request to the webserver.
    // </summary>
    handleRequest: function(request, response)
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World' + req.url + '\n');
    }

});