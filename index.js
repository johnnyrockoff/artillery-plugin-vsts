'use strict';

module.exports.Plugin = ArtilleryVstsPlugin;

function ArtilleryVstsPlugin(script, events) {
    events.on('phaseStarted', function() {
        console.log('🧑 New load phase started');
    });

    events.on('phaseCompleted', function() {
        console.log('✅ Load phase complete');
    });

    events.on('stats', function() {
        console.log('🖥️ Reporting');
    });

    events.on('done', function() {
        console.log('🪄 All VUs finished');
    });

    return this;
}