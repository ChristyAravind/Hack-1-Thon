var container =  document.createElement('div');
container.setAttribute("class", "container");

var heading =  document.createElement('div');
heading.setAttribute("class", " heading ");
heading.innerHTML = "GitHub API Repos Application";

var userName = document.createElement('input');
userName.setAttribute("class", "reposearch");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Repos User Name");

var btn = document.createElement('button');
btn.innerText= "Go for User";
btn.setAttribute("id", "btn");
btn.setAttribute("onclick", "btnFunction()");


var avatar = document.createElement('div');
avatar.setAttribute("class", "avatar");

var repo = document.createElement('div');
repo.setAttribute("class", "repo");
                                         
async function btnFunction() {
  try{          
            let username = document.querySelector(".reposearch").value;

            let data = await fetch (`https://api.github.com/users/${username}/repos`);

            let repos = await data.json();

            console.log(repos);
    
            avatar.innerHTML="";
            repo.innerHTML="";
    
            var userrName = document.createElement('h3');
            userrName.setAttribute("class", "userrName");

            userrName.innerHTML = `${repos[0].owner.login}'s Repository`;
    
            var userAvatar = document.createElement('img');
            userAvatar.setAttribute("class", "avatar");
            userrName.setAttribute("id", "avt")
            userAvatar.src = repos[0].owner.avatar_url;
    
            for(i=0;i<repos.length;i++){
  
            var display =  document.createElement('div');
            display.setAttribute('class','dis');
   
            display.innerHTML=`
            <p><strong>Name of the Project : </strong> ${repos[i].name}</p>
            <p><strong>Forks Count : </strong> ${repos[i].forks_count}</p>
            <p><strong>Star Count : </strong> ${repos[i].stargazers_count}</p>
            <p><strong>url : </strong> <a href="${repos[i].html_url}">${repos[i].html_url}</a></p><hr>`;
    
    
    
    
            avatar.append(userrName, userAvatar);
            repo.append(display);
            container.append(avatar, repo);}
     }catch(err){
            console.log("Invalid Username");
    
            repo.innerText="Invalid Username";}}

container.append(heading,userName,btn,avatar);
document.body.append(container);