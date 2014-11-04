// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$('#audio-player').mediaelementplayer({
            alwaysShowControls: true,
            features: ['playpause','volume','progress'],
            audioVolume: 'horizontal',
            audioWidth: 400,
            audioHeight: 120
        });
$.SHOUTcast({
   host : '202.88.237.208',
   port : 8000
}).stats(function(){
   $('#songtitle').text(this.get('songtitle'));
   $('#status').text(this.get('status'));
   $('#currentlisteners').text(this.get('currentlisteners'));
   $('#peaklisteners').text(this.get('peaklisteners'));
   $('#streamhits').text(this.get('streamhits'));
   $('#nexttitle').text(this.get('nexttitle'));
   $('#content').text(this.get('content'));




   /* options 
    currentlisteners
    peaklisteners
    maxlisteners
    uniquelisteners
    averagetime
    servergenre
    serverurl
    servertitle
    songtitle
    nexttitle
    streamhits
    streamstatus
    bitrate
    content
    version
    status* (Offline, Awaiting Connection, On Air)
*/
});
