function Iphone13(asin,color,display,camera,bluetooth){
    this.asin =asin,
    this.color=color,
    this.display = display,
    this.camera=camera,
    this.bluetooth = bluetooth,
    this.dial = function(){
        return "tring .. tring";
    },
    this.sendmessage = function(){
        return "sending message";
    },
    this.cameraclick = function(){
        return "Camera Clicked";

    },
    this.connectBluetooth = function (){
        return "Bluetooth Connected Successfully";
    }

}

// let i3 = new Iphone13("13", "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// console.log(i3.sendmessage());






let i3 = new Iphone13("i3", "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
console.log(i3);




console.log(i3.asin); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb

// // ---- methods
console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendmessage()); // "Sending message..."
console.log(i3.cameraclick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
