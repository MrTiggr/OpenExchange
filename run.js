/*
 * Name:            OpenExchange
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Bootstraps the OpenExchange system.
 *
 */

// Create all of the namespaces.
OpenExchange = {
    API: {},
    Auth: {},
    Banks: {},
    DB: {},
    Pages: {},
    Session: {},
    Trade: {},
    Wallets: {}
};
 
// Include all required libraries.
require('./lib/prototype/class.js');
require('./api/manager');
require('./auth/manager');
require('./banks/manager');
require('./db/manager');
require('./pages/manager');
require('./session/manager');
require('./trade/manager');
require('./wallets/manager');

// Define the class.
var OE = Class.create({

    // <summary>
    // Initalizes the OpenExchange system.
    // </summary>
    initialize: function()
    {
        // Create all of the classes.
        this.APIManager = new OpenExchange.API.Manager(this);
        this.AuthManager = new OpenExchange.Auth.Manager(this);
        this.BanksManager = new OpenExchange.Banks.Manager(this);
        this.SessionManager = new OpenExchange.Session.Manager(this);
        this.TradeManager = new OpenExchange.Trade.Manager(this);
        this.WalletsManager = new OpenExchange.Wallets.Manager(this);
        
        // Connect to the database.
        this.DBManager = new OpenExchange.DB.Manager(this);
        
        // Start handling pages.
        this.PagesManager = new OpenExchange.Pages.Manager(this);
    }

});

// Go!
new OE();

console.log('Server running at http://127.0.0.1:1337/');