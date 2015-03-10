Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'realPneus',

    controllers: [
	'main'
    ],
    views: [
	'menuIniciar'
   ],

    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 5
	    }
	}
    },
    launch: function () {
	
	console.log("INICIOU");



    }
});
