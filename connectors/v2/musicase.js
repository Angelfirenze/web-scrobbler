'use strict';

/* global Connector */

Connector.playerSelector = '#areaCenter';

Connector.artistSelector = '#blockInfo > a[name|="artist"]';

Connector.trackSelector = '#blockInfo > a[name|="name"]';

Connector.albumSelector = '#blockInfo > a[name|="album"]';

Connector.isPlaying = function() {
	var audio = $('body > audio').get(0);
	return audio && !audio.paused;
};
