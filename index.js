'use strict';
{
    let url = "https://gist.githubusercontent.com/amahlawat/cd7dc643f5297a2b3b6e24387c42a268/raw/e5226b888ac84804cad39aca1b7d21c9ddd091d1/projects-list.json";
    let response = null;
    async function fetchData(){
        try{
            response = await axios(url);       
            if(Validate(response) && Validate(response.data) && Validate(response.data.practiceProjects))
                projectComponent(response);

        }catch(err){
            console.log(err);
        }
    }
    fetchData();

    function projectComponent(response){
        let resultArr = [];
        response.data.practiceProjects.forEach((datum, index) => {
            let pname = datum.name;
            resultArr.push(`
                <a href=${datum.host_url} target="_blank" class="col-md-5 col-sm-12 col-xs-12 col-12 hoverable single--project">
                    <img src=${datum.image} alt=${pname} />
                    <br/>
                    <div class="centered single--proj--name">${datum.name}</div>                
                </div>
            `)
        });

        document.getElementById('project-div').innerHTML = resultArr;

        // let buttons = document.querySelectorAll('.single--project');
        // buttons.forEach(btn => {
        //     btn.addEventListener("click", function(event){
        //         let element = `
        //         <!-- Modal Header -->
        //         <div class="modal-header">
        //         <h4 class="modal-title">${btn.getAttribute("proj-name")}</h4>
        //         <button type="button" class="close" data-dismiss="modal">&times;</button>
        //         </div>
                
        //         <!-- Modal body -->
        //         <div class="modal-body">
        //             <a href=${btn.getAttribute("proj-url")}> 
        //                 <img class="modal-img" src=${btn.getAttribute("proj-img")} alt=${btn.getAttribute("proj-name")} />
        //             </a>
        //         </div>
                
        //         <!-- Modal footer -->
        //         <div class="modal-footer">
        //         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        //         </div>
        //         `;
        //         document.querySelector(".modal-content").innerHTML = element;
        //     })    
        // })
    }

    function Validate(value){
        // first check if value is an array
        if(Array.isArray(value))
            return value.length > 0 ? true: false;
        
        // check if value is not null or undefined
        if(value !== null && value !== undefined)
            return true;
        
        // in last 
        return false;
    }
}

