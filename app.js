const load = () =>{
    const word = document.getElementById('search-feild').value ;
    document.getElementById('search-feild').value = ''
    if(word!=''){
        console.log('correct');

        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })
    }
    else{
        alert("Please enter word")
    }
}
//enter button functionality adding process
document.getElementById('search-feild').addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        load()
    }
})

const showData =(mainWord) =>{
    const singeleWord = mainWord[0];
    console.log(singeleWord);

    const word = singeleWord.word
    const phonetics = singeleWord.phonetics[0].text 
    const partOfSpeech = singeleWord.meanings[0].partOfSpeech
    const defination = singeleWord.meanings[0].definitions[0].definition
    


    const ouput = document.getElementById('output-container');
    document.getElementById('output-container').innerHTML = ''
    const div = document.createElement('div');
    div.innerHTML = `
           <div class="card w-96 bg-primary text-primary-content my-4">
                <div class="card-body">
                  <h2 class="card-title">Main Word : ${word}</h2>
                  <h2 class="card-title">Defination : ${defination}</h2>
                  <h2 class="card-title">Part of speech : ${partOfSpeech}</h2>
                  <h2 class="card-title">Phonetics  : ${phonetics}</h2>
                </div>
            </div>
    `;
    ouput.appendChild(div)
    

}