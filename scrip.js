// pilihan komputer
function getpilihanComputer(){
  const komputer = Math.random();
  if(komputer < 0.34 ) return 'batu';
  if(komputer >= 0.34 && komputer < 0.67) return 'gunting';
  return 'kertas';
}

// peraturan
function gethasil(comp, player){
  if (player == comp) return 'seri!';
  if (player == 'gunting') return (comp == 'kertas') ? 'menang' : 'kalah';
  if (player == 'batu') return (comp == 'gunting') ? 'menang' : 'kalah';
  if (player == 'kertas') return (comp == 'batu') ? 'menang' : 'kalah';
}

// timing animasi komputer

function putar (){
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['batu','gunting','kertas'];
  let i = 0;
  const waktumulai = new Date().getTime();

  setInterval(function(){
    if(new Date().getTime() - waktumulai > 1000){
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if(i == gambar.length) i = 0;
  }, 100)
}


// hasil

const pilihan = document.querySelectorAll('li img');
let scomp = 0;
let splayer = 0;
    pilihan.forEach(function(pil){
      pil.addEventListener('click', function(){
        const pilihancomputer = getpilihanComputer();
        const pilihanplayer = pil.className;
        const hasil = gethasil(pilihancomputer,pilihanplayer);
  
          putar();
          setTimeout(function () {

            //  gantigambar hasilll akhir
            const imgkomputer = document.querySelector('.img-komputer');
            imgkomputer.setAttribute('src', 'img/' + pilihancomputer + '.png');


            // tampilkan info
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
    
            // score
            let scorecomp = document.querySelector('.score-komputer');
            let scoreplayer = document.querySelector('.score-player');
            const bintangkom = document.querySelector('.bintang-right');
            const bintangply = document.querySelector('.bintang-left');
            
            if(hasil == 'menang'){
              splayer++;
              scoreplayer.innerHTML = 'score:' + splayer;
            }
            if(hasil == 'kalah'){
              scomp++;
              scorecomp.innerHTML = 'score:' + scomp;
            }
    
          }, 1000);
      });
     
    });
