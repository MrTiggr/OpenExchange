/*
 * Name:            OpenExchange.Session.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the user session for OpenExchange.
 *
 */
 
OpenExchange.Session.Manager = Class.create({

    // <summary>
    // Initializes the session handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }

});