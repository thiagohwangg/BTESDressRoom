
let imgOutPutTop = document.getElementById('imgOutPutTop')
let imgOutPutHair = document.getElementById('imgOutPut')
let imgOutPutBot = document.getElementById('imgOutPutBot')
let imgOutPutNec = document.getElementById('imgOutPutNec')
let imgOutPutHand = document.getElementById('imgOutPutHand')
let imgOutPutShoes = document.getElementById('imgOutPutShoes')
let imgOutPutBG = document.getElementById('imgOutPutBG')

imgOutPutTop.style.display = 'none'
imgOutPutBot.style.display = 'none'
imgOutPutNec.style.display = 'none'
imgOutPutHand.style.display = 'none'
imgOutPutBG.style.display = 'none'


//hair
function handelChooseHair(number) {
    imgOutPutHair.src = `../assets/images/hairstyle/hairstyle${number}.png`
    imgOutPutHair.style.display = 'inline-block'
}

//top
function handelChooseTop(number) {
    imgOutPutTop.src = `../assets/images/clothes/topcloth${number}.png`
    imgOutPutTop.style.display = 'inline-block'
}

//bot
function handelChooseBot(number) {
    imgOutPutBot.src = `../assets/images/clothes/botcloth${number}.png`
    imgOutPutBot.style.display = 'inline-block'
}


//neck
function handelChooseNeck(number) {
    imgOutPutNec.src = `../assets/images/necklaces/necklace${number}.png`
    imgOutPutNec.style.display = 'inline-block'
}

//bag
function handelChooseBag(number) {
    imgOutPutHand.src = `../assets/images/handbags/handbag${number}.png`
    imgOutPutHand.style.display = 'inline-block'
}


//shoes
function handelChooseShoes(number) {
    imgOutPutShoes.src = `../assets/images/shoes/shoes${number}.png`
    imgOutPutShoes.style.display = 'inline-block'
}


//background
function handelChooseBG(number) {
    imgOutPutBG.src = `../assets/images/background/background${number}.jpg`
    imgOutPutBG.style.display = 'inline-block'
}






