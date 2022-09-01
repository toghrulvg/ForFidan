let table = document.querySelector(".list-group-item")

let users = JSON.parse(localStorage.getItem("arr"));



//console.log(users[index].name)


    for (let i = 0; i < users.length; i++) {
    
        table.children[1].innerHTML += `
            <td>${users[i].name } </td>
            <td>${users[i].surname}</td>
            <td>${users[i].adress } </td>
            <td>${users[i].age}</td>
          `
        
    }



