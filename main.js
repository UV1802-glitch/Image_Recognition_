Webcam.set(

    {
        width: 350,
        height: 300,
        image_format: 'png',
        png_quality: 100
    }

);

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
   Webcam.snap(function (data_uri)
   
   {
       document.getElementById("result").innerHTML = '<img id = "img_result" src = "'+data_uri+'">';
   }

   )
}

console.log("ml5 version:" + ml5.version);

model = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7W3BnrzDs/model.json',model_loaded)

function model_loaded()
{
    console.log("Model is Loaded!!");
}

function check()
{
    img = document.getElementById("img_result");
    model.classify(img, getResult)
}

function getResult(error, result)
{
    if (error)
    {
        console.log("error");
    }

    else
    {
        console.log("Image is:", result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(5);
    }
}