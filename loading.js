const btnSubmit = document.getElementById('submit')
const kataKata = ['Bentar mikir dulu lek', 'Hmmm berapa ya', 'Keliatan banyak pikiran sihh ini', 'Bentar bentar bentar', '[ar2 x = ar xy + phi lus] + logn @loremipsumdolorsitamet']
btnSubmit.addEventListener('click', function(){
    const loading = document.getElementById('loadingContainer')
    const template = document.getElementById('template')
    const nilai = document.getElementById('value')
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.width = '0%'
    let progress = 0;
    const duration = 6000; 
    const updateInterval = 100; 
    const totalUpdates = duration / updateInterval;
    const incrementPerUpdate = 100 / totalUpdates;
    loading.style.display = 'block'
    let indexTeks = 0
    let counter = 0
    const counterInterval = 10
    const loadingInterval = setInterval(()=>{
        progress += incrementPerUpdate
        counter++
        if (counter >= counterInterval){
            if (indexTeks == kataKata.length -1 ){
                counter = 0
            } else {
                indexTeks ++
                counter = 0
            }
        }
        template.textContent = kataKata[indexTeks]
        if (progress >= 100) {
            progress = 100; 
            clearInterval(loadingInterval);  
            if(nilai.value == 100){
                template.textContent = '😁❤️👍😂😂😂😁 Gelo 100 fix ipk 4 lek'
            } else if(nilai.value){
                template.textContent = 'Angka yang kamu pikirin adalah ' + nilai.value
            } else {
                template.textContent= 'Pikiranmu lagi kosong'
            }
        }
        loadingBar.style.width = progress + '%';
    }, updateInterval)
    
})

