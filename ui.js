class UI{
    constructor(){
        this.profile=document.querySelector('#profile')
    }
  
    showProfile(user){
        this.clearAlert()
        this.profile.innerHTML=`
        <div class="card card-body mb-3 ">
            <div class='row'>
                <div class='col-md-3'>
                    <img class='img-fluid mb-2' src="${user.avatar_url}" >
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-5 ml-4">view profile</a>
                </div>
                <div class="col-md-9 p-5">
                <span class="badge bg-success">Public Repos : ${user.public_repos}</span>
                <span class="badge bg-warning ">Followers : ${user.followers}</span>
                <span class="badge bg-info">Followers : ${user.following}</span>
                <br><br>
               <ul class="list-group">
                  <li class="list-group-item ">Company : ${user.company} </li>
                  <li class="list-group-item">Website/blog :${user.blog}</li>
                  <li class="list-group-item ">Location : ${user.location} </li>
                  <li class="list-group-item">Created AC :${user.created_at}</li>
                </ul>
              </div>

            </div>
        </div>`
       
    }

    clearProfile(){
        this.profile.innerHTML=''
    }

    showAlert(message, className){
        this.clearAlert()
        this.clearProfile()
        let div= document.createElement('div')
        div.className=className;
        div.appendChild(document.createTextNode(message));
        let container =document.querySelector('.searchContainer');
        let search=document.querySelector('.search')
        container.insertBefore(div, search)
    }
    clearAlert(){
        let currentAlert= document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove()
        }
    }

}

