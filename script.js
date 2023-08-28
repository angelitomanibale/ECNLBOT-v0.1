window.addEventListener('load', function () {
    function enter(params) {
        button = document.querySelectorAll('button')[1]
        button.click()
    }
    
    // div = document.querySelectorAll('div')[0]
    // div.innerHTML = "<canvas id='canvasFrame' width='200px' height='200px'></canvas>";
    // var canvas = document.getElementById('canvasFrame')
    function getDominantColor(image) {

        

        form = document.querySelectorAll('form')[0]
        input = document.querySelectorAll('input')[1]
        function averageColor(imageElement) {
 
            // Create the canvas element
            var canvas
                = document.createElement('canvas'),
 
                // Get the 2D context of the canvas
                context
                    = canvas.getContext &&
                    canvas.getContext('2d'),
                imgData, width, height,
                length,
 
                // Define variables for storing
                // the individual red, blue and
                // green colors
                rgb = { r: 0, g: 0, b: 0 },
 
                // Define variable for the
                // total number of colors
                count = 0;
 
            // Set the height and width equal
            // to that of the canvas and the image
            height = canvas.height =
                imageElement.naturalHeight ||
                imageElement.offsetHeight ||
                imageElement.height;
            width = canvas.width =
                imageElement.naturalWidth ||
                imageElement.offsetWidth ||
                imageElement.width;
 
            // Draw the image to the canvas
            context.drawImage(imageElement, 0, 0);
 
            // Get the data of the image
            imgData = context.getImageData(
                        0, 0, width, height);
 
            // Get the length of image data object
            length = imgData.data.length;
 
            for (var i = 0; i < length; i += 4) {
 
                // Sum all values of red colour
                rgb.r += imgData.data[i];
 
                // Sum all values of green colour
                rgb.g += imgData.data[i + 1];
 
                // Sum all values of blue colour
                rgb.b += imgData.data[i + 2];
 
                // Increment the total number of
                // values of rgb colours
                count++;
            }
 
            // Find the average of red
            rgb.r
                = Math.floor(rgb.r / count);
 
            // Find the average of green
            rgb.g
                = Math.floor(rgb.g / count);
 
            // Find the average of blue
            rgb.b
                = Math.floor(rgb.b / count);
 
            return rgb;
        }
        
        btn = document.querySelectorAll('button')
        console.log(btn)
        RGB = averageColor(image)
        color = (`${RGB.r},${RGB.g},${RGB.b}`)
        console.log(color)
        choices = [
            {"name": "BLACK", "rgb": "31,31,31"},
            {"name": "PURPLE", "rgb": "99,67,121"},
            {"name": "ORANGE", "rgb": "149,90,43"},
            {"name": "GREEN", "rgb": "69,136,58"},
            {"name": "GRAY", "rgb": "64,64,64"},
            {"name": "BROWN", "rgb": "106,86,69"},
            {"name": "WHITE", "rgb": "152,152,152"},
            {"name": "BLUE", "rgb": "54,73,101"},
            {"name": "YELLOW", "rgb": "161,134,65"},
            {"name": "RED", "rgb": "96,51,48"}
        ]
        for (let i = 0; i < color.length; i++) {
            if(choices[i].rgb == color){
                input.focus()
                input.value = choices[i].name
                btn[1].click()
                location.reload()
            }else{

            }
            
        }
        
    }


    var run = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;  
                
                image = document.querySelectorAll('img')[6]
                getDominantColor(image)
            }
        };
    })();
    
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.message === "myMessage") {
            wait = document.querySelectorAll('div')[9].style.display
            if(wait == "none"){
                run()
            }else{
                
            }
        }
    });  
})

