console.log('Loaded!');

//wrong one

document.getElementById('imgid').onclick = function()
{
    setInterval(moveRight,100);
};
function moveRight(){
  marginLeft=marginLeft + 10;
  imgid.style.marginLeft = marginLeft + 'px';
}