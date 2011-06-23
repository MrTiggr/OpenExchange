/*
 * Name:            OpenExchange.Trade.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages the trades for OpenExchange.
 *
 */
 
OpenExchange.Trade.Manager = Class.create({

    // <summary>
    // Initializes the trade handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }

});