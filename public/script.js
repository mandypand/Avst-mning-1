
async function insults(){
    const listItem = document.querySelectorAll('.list')
    for(let i = 0; i < listItem.length; i ++){
            listItem[i].onclick  = async() => {
                
                const request = await fetch('http://localhost:8070/insults/' + i, 
                {
                    method: 'GET' 
                    
                })
                const data = await request.json()
                
                
                return data.insultsJSON
                
            }
        }
}

async function run(){
    insults()
}
run()

