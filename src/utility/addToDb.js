const getStoredBook = ()=>{
    const storedBooksSTR = localStorage.getItem('readList');
    if(storedBooksSTR){
        const storedBookData = JSON.parse(storedBooksSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoreDb = (id)=>{
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert("id exist")
    }

    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
    }
}

export {addToStoreDb}