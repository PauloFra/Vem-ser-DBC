function capitalize(string) {
    let lower = string.toLowerCase().split(" ");
    for(let i = 0; i < lower.length; i++) {
      let palavra = lower[i];
      palavra.charAt(0).toUpperCase();
      lower[i] = palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }
    return lower.join(" ");
  }
  
  console.log(capitalize("hoje faremos o trabalho em dupla, que legal - sqn"));