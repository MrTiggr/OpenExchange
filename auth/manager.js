/*
 * Name:            OpenExchange.Auth.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages user authentication.
 *
 */
 
OpenExchange.Auth.Manager = Class.create({

    // <summary>
    // Initializes the authentication handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }
    
});