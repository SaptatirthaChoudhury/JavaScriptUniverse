if(true){
    const username = "babai"
    if(username === "babai"){
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);  //  website variable cannot be accessed through outer if block because the scope of website variable only in inner if block.
}

console.log(username);   // username variable cannot be accessed through global scope because the scope of username variable only in outer if block. 