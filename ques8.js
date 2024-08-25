class Iphone4 
{
    constructor(asin,color,display,camera,bluetooth){
        this.asin = asin,
        this.color = color,
        this.display=display,
        this.camera=camera,
        this.bluetooth = bluetooth,
        this.dial = function(){
            return "tring .. tring";
        }
        this.sendMessage = function(){
            return "Sending Message";
        }
        this.cameraClick = function (){
            return "Camera Clicked";

        }
        this.connectBluetooth = function(){
            return "Bluetooth Connected Successfully";
        }
    }
}

let i4 = new Iphone4(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
  );
//  properties
  console.log(i4.asin); // 1
  console.log(i4.color); // B09X67JBQV
  console.log(i4.display); // 7.8
  console.log(i4.camera); // IOS
  console.log(i4.bluetooth); // 128mb
  
  //---- methods
  console.log(i4.dial()); // "tring.. tring..."
  console.log(i4.sendMessage()); // "Sending message..."
  console.log(i4.cameraClick()); // "Camera clicked"
  console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
  