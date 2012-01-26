(function() {

    "use strict";

    var MyView = Backbone.View.extend({

        el: '#container',

        events: {
            'click button:first': 'handleClick',
            'fastclick button:last': 'handleFastClick'
        },

        initialize: function() {

            this.$output = this.$('#output');

            this.addFastButtons();

        },

        handleClick: function() {

            this.$output.prepend('<p>handleClick()</p>');

        },

        handleFastClick: function() {

            this.$output.prepend('<p>handleFastClick()</p>');

        },

        addFastButtons: function() {

            var EVENT_NAME = 'fastclick';
            var events = _.isFunction(this.events) ? this.events() : this.events;
            var that = this;

			function byEventName(key) {
                return key.substr(0, EVENT_NAME.length + 1) === EVENT_NAME + ' ' || key === EVENT_NAME;
            }

            function toJustSelectors(key) {
                return key.substr(EVENT_NAME.length + 1);
            }

            function toMatchingElements(selector) {
                return selector === "" ? [that.el] : that.$(selector).toArray();
            }

            function registerTrigger(element) {
                new MBP.fastButton(element, function() {
                    $(element).trigger(EVENT_NAME);
                });
            }

            _.chain(events).keys().filter(byEventName).map(toJustSelectors).map(toMatchingElements).flatten().each(registerTrigger);

        }

    });

    MBP.hadTouchEvent = true; // work around some Android 2.3.x workarounds for the demo...

    new MyView();

})();