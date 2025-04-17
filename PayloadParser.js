function parseUplink(device, payload)
{  
	// Payload is binary, so it's easier to handle as an array of bytes
	var bytes = payload.asBytes();
    // var result = "";

    // for(var i = 0; i < bytes.length; i++){
    //     var hex = bytes[i].toString(16);
    //     if(hex.length == 1){
    //         hex = "0" + hex;
    //     }
    //     result += hex + ":";
    // }
    // result = result.substring(0, result.length - 1);
    // env.log(result);
	//return;    

    //Get AVL DATA
    var avlData = bytes.slice(10, 35);
    env.log("avlData --> ",avlData.length);
    //Get GPS
    var gps = avlData.slice(9, 24);
    env.log("gps --> ",gps.length);
    //Get Longitude
    var longitude = gps.slice(0, 4);
    env.log("longitude --> ",longitude.length);
    var resultLongitude = "";
    for(var i = 0; i < longitude.length; i++){
        var hex = longitude[i].toString(16);
        if(hex.length == 1){
            hex = "0" + hex;
        }
        resultLongitude += hex + ":";
    }
    resultLongitude = resultLongitude.substring(0, resultLongitude.length - 1);
    env.log(resultLongitude);

    //Get Latitude
    var latitude = gps.slice(4, 8);
    env.log("latitude --> ",latitude.length);
    //Get Altitude
    var altitude = gps.slice(8, 10);
    env.log("altitude --> ",altitude.toString());
    //Get Angle
    var angle = gps.slice(10, 12);
    env.log("angle --> ",angle.length);
    //Get Satellites
    var satellites = gps.slice(12, 13);
    env.log("satellites --> ",satellites.length);
    //Get Speed
    var speed = gps.slice(13, 15);
    env.log("speed --> ",speed.toString());

    var longDeg = (longitude * 360 / Math.pow(2, 21) - 1) - 180;

    var latDeg = (latitude * 180 / Math.pow(2, 20) -1) - 90;

    var iot = avlData.slice(24, 35);
    var ioElement1Byte = iot.slice(4,6);
    env.log("ioElement1Byte --> ",ioElement1Byte.length);
	// var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
	// if (temperatureSensor != null)
	// {
	// 	var temperature = bytes[0] & 0x7f;
	// 	if (bytes[0] & 0x80)  // Negative temperature?
	// 		temperature -= 128;
	// 	temperatureSensor.updateTemperatureSensorStatus(temperature);
	// }

	// // Parse and store humidity
	// var humiditySensor = device.endpoints.byType(endpointType.humiditySensor);
	// if (humiditySensor != null)
	// {
	// 	var humidity = bytes[1];
	// 	humiditySensor.updateHumiditySensorStatus(humidity);
	// }	  
	
	// // Parse and store battery percentage
	// var batteryPercentage = bytes[2];
	// device.updateDeviceBattery({ percentage: batteryPercentage });

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}