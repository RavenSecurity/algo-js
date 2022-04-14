// function askTvSerie() {
//     let TvSerie = {
//         show: 0,
//         year: 0,
//         casting: 0,
//     }
//     TvSerie.show = prompt("What's your favorite TV serie?")
//     TvSerie.year = prompt("When whas it produced?")
//     TvSerie.casting =  prompt("What is the name of the cast members?")
//     console.log(TvSerie.show)
//     console.log(TvSerie.year)
//     console.log(TvSerie.casting)
// }

// askTvSerie()

// SOLUTION

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