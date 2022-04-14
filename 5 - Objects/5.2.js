function askTvSerie()
{
    const favSerie = {
      cast: [],
      name: prompt('Name of the serie?'),
      year: prompt('Year of production?')
    };
    let isCastOver = false;
    
    
    while(!isCastOver)
    {
      const answer = prompt('Name of the cast member');
  
      if(answer === 'end' || answer == null)
        isCastOver = true;
      else
        favSerie.cast.push(answer);
    }
    return favSerie;
  }

  function randLength(n)
{
    return Math.floor(Math.random() * n);
}

  function isUnique(stock, i)
  {
      let j = 0;
      while(j < i)
          if (stock[j++] == stock[i])
              return false;
      return true;
  }

function randomizeCast(tvSerie)
{
    let array = [];
    let stock = [];
    let i = 0;

    while (i < tvSerie.cast.length)
    {
        stock[i] = randLength(tvSerie.cast.length);
        if(isUnique(stock, i))
            array.push(tvSerie.cast[stock[i++]])
    }
    return array;
}

function newCast()
{
    let newSerie ={
        name : prompt("new serie"),
        cast : randomizeCast(askTvSerie())
    };
    return newSerie.cast;
}

console.log(newCast());