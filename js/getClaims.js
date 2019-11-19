async function getClaims() {
    await fetch(api)
          .then((res) => res.json())
          .then(data => {
                data.forEach(element => {
                      data_Source.push(element);
                });
          })
          .catch((err) => console.log(err));
         
          fnByDefault();  
}