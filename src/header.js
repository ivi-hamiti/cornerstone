if (typeof cornerstone === 'undefined') {
    cornerstone = {
        internal: {},
        rendering: {}
    };
}

cornerstone.trigger = function (target, eventName, eventData) {
    if (!target.dispatchEvent || target.fireEvent)
        return;

    var event;

    if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
    }

    event.eventName = eventName;
    event.data = eventData;

    if (document.createEvent) 
        target.dispatchEvent(event);
    else 
        target.fireEvent("on" + event.eventType, event);
};