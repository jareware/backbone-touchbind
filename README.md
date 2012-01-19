backbone-touchbind
==================

Quick PoC to demonstrate convenient binding of "fastclick" events to [Backbone Views](http://documentcloud.github.com/backbone/).  The fastclicks (or "fast buttons") themselves are a solved problem, so I use the (lovely) [Mobile Boilerplate](http://html5boilerplate.com/mobile) for that.

Idea
----

Binding the `MBP.fastButton`s "manually" to each applicable element within the View, and using [custom jQuery events](http://api.jquery.com/trigger/) to combine them seamlessly with the listeners bound to `this.el` by `Backbone.View.delegateEvents()`.  This "manual work" can of course be "automated", see below.

Usage
-----

During View initialization (or whenever you recreate your view elements, such as when you'd re-render a template into `this.el`), call `this.addFastButtons()`.  To avoid having to repeat yourself, put it to a shared base class for your views.  The only thing you have to do, then, to use fastclicks in derived views is:

    events: {
        'fastclick button': 'handleFastClick'
    }

    handleFastClick: function() {
        // do stuff
    }

License
-------

http://sam.zoy.org/wtfpl/