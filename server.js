const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;

app.use(cors())

const aminoAcids = {
    'whey':{
        'leucine':  '105mg',
        'lysine': '93mg',
        "tyrosine": '32mg',
        'cysteine':  '21mg',
        'isoleucine': '63mg',
        "valine": '58mg',
        'threonine':  '69 mg',
        'tryptophan': '18 mg',
        "histidine": '17 mg',
        'unitOfMeasurement': 'mg/g'
    },
    'soy':{
        'leucine':  '78mg',
        'lysine': '62mg',
        "tyrosine": '37mg',
        'cysteine':  '14mg',
        'isoleucine': '47mg',
        "valine": '48mg',
        'threonine':  '39 mg',
        'tryptophan': '12 mg',
        "histidine": '25 mg',
        'unitOfMeasurement': 'mg/g'
        },
    'casein':{
        'leucine':  '83mg',
        'lysine': '74mg',
        "tyrosine": '57mg',
        'cysteine':  '4mg',
        'isoleucine': '55mg',
        "valine": '65mg',
        'threonine':  '44mg',
        'tryptophan': '11mg',
        "histidine": '28mg',
        'unitOfMeasurement': 'mg/g'
        },
    'rice':{
        'leucine':  '85mg',
        'lysine': '32mg',
        "tyrosine": '50mg',
        'cysteine':  '21mg',
        'isoleucine': '43mg',
        "valine": '61mg',
        'threonine':  '37 mg',
        'tryptophan': '15 mg',
        "histidine": '24 mg',
        'unitOfMeasurement': 'mg/g'
    },
    'unknown':{
        'proteinType': 'not recorded'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const proteinType = request.params.name.toLowerCase()
    //console.log(aminoAcids[proteinType].leucine)
    if(aminoAcids[proteinType]){
        response.json(aminoAcids[proteinType])
    }else{
        response.json(aminoAcids['unknown'])
    }
    //response.json(aminoAcids)

})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on port ${PORT}!`)
})