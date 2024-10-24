// https://github.com/yoyoshingu/project1-2024

VISION_API_KEY =""
CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + VISION_API_KEY;
function processFile(event){
    content = event.target.result 
    imagestring = content.replace('data:image/jpeg;base64,', '')
    document.getElementById("gimage").src = content
}

function uploadFiles(files){
    file = files[0]
    reader = new FileReader()
    reader.onloadend = processFile
    reader.readAsDataURL(file)
}

function analyze(){
    data ={
        requests: [{
            image:{
                content: imagestring
            },
            features:[{
                type:"FACE_DETECTION",
                maxResults: 100
            }]
        }]
    }

    $.ajax({
        type:"POST",
        url:'https://vision.googleapis.com/v1/images:annotate?key=' + VISION_API_KEY,
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(responses){
        console.log(responses)
        // alert(responses.responses[0].faceAnnotations.length)
        if(responses.responses[0].faceAnnotations.length == 1){
            document.getElementById('right').innerText = responses.responses[0].faceAnnotations[0].angerLikelihood
            let newbox = document.createElement('div')
            newbox.setAttribute("id", "box")
            document.body.appendChild(newbox)
            newbox.style.cssText = "width: 300px height: 300px"
        }else{
            for(i=0; i<responses.responses[0].faceAnnotations.length; i++){
                if(i==0){
                    document.getElementById('right').innerText = responses.responses[0].faceAnnotations[i].angerLikelihood + "\n"
                    let newbox = document.createElement('div')
                    newbox.setAttribute("id", "box")
                    newbox.setAttribute("class", i)
                    document.body.appendChild(newbox)
                }else {
                    document.getElementById('right').innerText += responses.responses[0].faceAnnotations[i].angerLikelihood + "\n"
                    let newbox = document.createElement('div')
                    newbox.setAttribute("id", "box")
                    newbox.setAttribute("class", i)
                    document.body.appendChild(newbox)
                }
            }
        }

    }).fail(function(error){
        console.log(error)

    })
}