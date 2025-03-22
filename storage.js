// localStorage: new tab open korleo key,value gula take 
// sessionStorage: new tab open korle ager joto data(key,value) silo sob cole jabe 


const handleAddToStorage =()=>{
    const name = document.getElementById('name').value
    const id = document.getElementById('id').value
    const data = {id, name}
   localStorage.setItem(id, JSON.stringify(data))    /**data jehetu akta object tai json.sting kora lagbe local dekar jonno */
}

const getItm = localStorage.getItem('123456')
console.log(JSON.parse(getItm)) 

const handleclear = () => {
    localStorage.clear()
}

// kuno specific ta remove korte gele
 localStorage.removeItem('key dilei hobe ')