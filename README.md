# titlebar
A node module for add titlebar in Electron's BrowserWindow .

##Introduction
Used for create BroserWindow in webPreferences's preload property,we will set BroswerWindow  `frame` porperty is `false`.

this module depend **eltitlebar** module.

##install
    npm install elbarpreload --save

# Usage
 	var win = new BrowserWindow({
		width: 800, height: 600, 
		frame:false,
		webPreferences: {
			preload: require.resolve('elbarpreload')
		}
	});

