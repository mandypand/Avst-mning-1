
async function insults(){
    const listItem = document.querySelectorAll('.list')
    for(let i = 1; i < listItem.length; i ++){
        
            listItem[i-1].onclick  = async() => {
                
                const request = await fetch('http://localhost:8071/insults/' + i, 
                {
                    method: 'GET' 
                    
                })
                const data = await request.json()
                let insults = document.querySelector('.Container')
                insults.innerHTML = ""

                if(typeof data.insultsJSON !== 'undefined') {
                    for(let j = 0; j < data.insultsJSON.length; j++){
                        let h3 = document.createElement('h3')
                        h3.innerHTML = await JSON.stringify(data.insultsJSON[j].text)
                        insults.append(h3)

                        let p = document.createElement("p"); 
                        p.innerHTML = await JSON.stringify(data.insultsJSON[j].origin)
                        insults.append(p)

                        let div = document.createElement("div")
                        div.classList.add("line")
                        insults.append(div)
                    }

                } else {
                    let h3 = document.createElement("h3")
                    h3.innerHTML = "Insults not found"
                    insults.append(h3)
                }
                console.log(request)
                return data  
            }
        }
}

async function run(){
    insults()
}
run()


