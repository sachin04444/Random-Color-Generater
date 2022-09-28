

const getcolor=()=>{
    const rendomnumber=Math.floor(Math.random()*16777215);
    const rendomcode="#"+rendomnumber.toString(16)
    document.body.style.backgroundColor=rendomcode
    //  console.log(rendomnumber,rendomcode)
     document.getElementById("color-code").innerText=rendomcode;
    navigator.clipboard.writeText(rendomcode)

}
const chnge=()=>{
    getcolor()
}