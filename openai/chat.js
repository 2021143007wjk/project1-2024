OPENAPI_KEY = ''

smodel = "gpt-3.5-turbo"
smodelmini = "gpt-4o-mini"
// squestion = "황진이는 누구야"
function talk(){
    // alert(document.getElementById('item').value)

    squestion = document.getElementById('item').value
    list = document.getElementById('qlist')

    listitem = document.createElement('li')
    // alert("talk 시작")
    data = {
        model: smodel,
        messages:[
            {
                role:"user",
                content:squestion
            }
        ]
    }
    
    $.ajax({
        type:"POST",
        url:"https://api.openai.com/v1/chat/completions",
        headers:{
            "Authorization":"Bearer " + OPENAPI_KEY
        },
        data:JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }
    ).done( function(response){
        console.log(response)
        // alert(response.choices[0].message.content)
        listitem.innerText = response.choices[0].message.content
        listitem.className = 'list-group-item list-group-item-action list-group-item-warning';
        list.appendChild(listitem)
    }
    ).fail(

    )

}

// talk()

