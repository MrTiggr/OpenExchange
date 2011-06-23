/*
 * Name:            OpenExchange.Banks.Manager
 * Author:          James Rhodes
 * License:         MIT License
 *
 * Description:
 *  Manages a series of available sources for non-BitCoin currencies, such as banks.
 *
 */
 
OpenExchange.Banks.Manager = Class.create({

    // <summary>
    // Initializes the finance sources handler.
    // </summary>
    initialize: function(parent)
    {
        // Maintain a reference to the main manager.
        this.parent = parent;
    }

});